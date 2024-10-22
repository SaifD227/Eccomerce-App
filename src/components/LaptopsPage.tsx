"use client";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import BASE_URL from "@/app/Service/api";
import { BeatLoader } from 'react-spinners';
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const LaptopsPage = () => {
  const [electronics, setElectronics] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          `${BASE_URL}/category/electronics`
        );

        setElectronics(response.data);
      } catch (error) {
        console.error("Error fetching electronics:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mt-4">Electronics Items</h1>
      <ul className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {electronics.length > 0 ? (
          electronics.map((item) => (
            <Link    href={`/Product/${item.id}`}  key={item.id} className="border p-4 rounded-md shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover mb-2 rounded-md"
                priority
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-lg font-bold mt-2">${item.price}</p>
            </Link>
          ))
        ) : (
          <li className="text-gray-500"><BeatLoader /></li>
        )}
      </ul>
    </div>
  );
};

export default LaptopsPage;
