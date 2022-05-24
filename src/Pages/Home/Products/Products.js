import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import EachProduct from "./EachProduct";

const Products = () => {
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery("items", () =>
    fetch("fakeDB.json").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mb-24">
      <p className="text-4xl mt-32 mb-20">Our Products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-10">
        {products.slice(0, 6).map((product) => (
          <EachProduct key={product._id} product={product}></EachProduct>
        ))}
      </div>
      <div className="mt-16">
        <button
          onClick={() => navigate("/inventories")}
          className="btn btn-outline btn-primary mx-auto"
        >
          Show all
        </button>
      </div>
    </div>
  );
};

export default Products;
