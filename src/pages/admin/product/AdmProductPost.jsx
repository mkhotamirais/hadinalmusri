import { useState } from "react";
import { usePostProductMutation } from "../../../app/api/productApiSlice";
import toast from "react-hot-toast";

const AdmProductPost = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [postProduct] = usePostProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, price };
    postProduct(data)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        setName("");
        setPrice("");
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border rounded block"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="border rounded block"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="underline">
          submit
        </button>
      </form>
    </div>
  );
};

export default AdmProductPost;
