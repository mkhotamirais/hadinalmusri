import { FaTrashCan } from "react-icons/fa6";
import { useDeleteProductMutation } from "../../../app/api/productApiSlice";
import toast from "react-hot-toast";

const AdmProductItems = ({ item }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = () => {
    deleteProduct(item?.id)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };
  return (
    <div>
      <div>{item?.name}</div>
      <div>{item?.price}</div>
      <div>
        {/* <button>
          <FaPenToSquare />
        </button> */}
        <button onClick={handleDelete}>
          <FaTrashCan />
        </button>
      </div>
    </div>
  );
};
AdmProductItems.propTypes;

export default AdmProductItems;
