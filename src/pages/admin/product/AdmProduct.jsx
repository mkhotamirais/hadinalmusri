import { useGetProductsQuery } from "../../../app/api/productApiSlice";
import AdmProductItems from "./AdmProductItems";
import AdmProductPost from "./AdmProductPost";

const AdmProduct = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();
  let content;
  if (isLoading) content = <div>loading</div>;
  else if (isError) content = <div>{error}</div>;
  else if (isSuccess) {
    const renderedProduct = data && data.map((item) => <AdmProductItems key={item?.id} item={item} />);
    if (data.length > 0) {
      content = renderedProduct;
    } else {
      content = <div>data kosong</div>;
    }
  }

  return (
    <div className="px-3">
      <AdmProductPost />
      {content}
    </div>
  );
};

export default AdmProduct;
