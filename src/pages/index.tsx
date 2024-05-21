import React, { useEffect, useState } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { Product } from "./product";
import UserCard from "../components/user-card";
import { login } from "zmp-sdk";
// interface Product {
//   title: string;
//   description: string;
//   imageSrc: string[];
//   prices: string;
//   quantity: number;
// }

const HomePage: React.FunctionComponent = () => {
  // const apiUrl = "http://localhost:4000/api/products";
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const response = await fetch(apiUrl);
  //       console.log(response);

  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.statusText}`);
  //       }
  //       const products: Product[] = await response.json();

  //       setProducts(products);
  //     } catch (error: any) {
  //       console.log("error");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchProducts();
  // }, []);

  return (
    <div>
      <Product />
    </div>
  );
};

export default HomePage;
