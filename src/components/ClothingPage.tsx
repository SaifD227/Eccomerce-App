




'use client';
import Navbar from "./Navbar"; // Adjust the import path based on your structure
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string; // Add image field
  description: string; // Add description field
}

const ClothingPage = () => {
  const [clothing, setClothing] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products/category/women's clothing" // Change the category to clothing
        );
        setClothing(response.data);
      } catch (error) {
        console.error("Error fetching clothing:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mt-4">Clothing Items</h1>
      <ul className="mt-4 space-y-4">
        {clothing.length > 0 ? (
          clothing.map((item) => (
            <li key={item.id} className="border p-4 rounded-md shadow-md">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={300} // Set a width
                height={300} // Set a height
                className="w-full h-48 object-cover mb-2 rounded-md" 
                priority // Optional: Use priority loading for images
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-lg font-bold mt-2">${item.price}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No clothing found.</li>
        )}
      </ul>
    </div>
  );
};

export default ClothingPage;
