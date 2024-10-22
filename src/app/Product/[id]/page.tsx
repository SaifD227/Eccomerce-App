"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { BeatLoader } from "react-spinners";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (params.id) {
        try {
          const response = await axios.get<Product>(
            `https://fakestoreapi.com/products/${params.id}`
          );
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product details:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BeatLoader />
      </div>
    );
  }

  if (!product) {
    return <p className="text-center">Product not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mt-4">{product.title}</h1>
      <div className="mt-8 flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
          width={400}
          height={400}
        />
        <p className="text-gray-700 text-lg text-center mb-4">
          {product.description}
        </p>
        <p className="text-2xl font-bold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
