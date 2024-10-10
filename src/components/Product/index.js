import { useEffect, useState } from "react";
import { getProductList } from "../../services/productsService";
import "./Product.scss";
import ProductItem from "./ProductItem";

function Product() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProduct(result);
    }
    fetchApi();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div className="product">
          {products.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  )
}

export default Product;