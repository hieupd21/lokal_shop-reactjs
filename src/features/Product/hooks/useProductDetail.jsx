import { useEffect, useState } from "react";
import productApi from "../../../api/productApi";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [productRela, setProductRela] = useState([]);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const { data } = await productApi.get(productId);
        setProduct(data);
      } catch (error) {
        console.log("fetch product detail api: ", error);
      }
      setLoading(false);
    };
    fetchProductDetail();
  }, [productId]);

  useEffect(() => {
    const fetchProductRela = async () => {
      try {
        const {
          category: { id },
        } = product;
        const { data } = await productApi.getAll({ "category.id": id });
        setProductRela(data);
      } catch (error) {
        console.log("fetch product rela api: ", error);
      }
    };
    fetchProductRela();
  }, [product]);

  return { loading, product, productRela };
}
