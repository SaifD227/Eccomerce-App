import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <p className="mb-4">
              We are a leading e-commerce platform committed to providing the
              best online shopping experience. Our mission is to make shopping
              easy and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Customer Service
            </h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Intellectual Property
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <p>
              Email:{" "}
              <a href="mailto:info@example.com" className="hover:text-white">
                info@example.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+11234567890" className="hover:text-white">
                +1 (123) 456-7890
              </a>
            </p>
            <p>Address: 123 E-commerce St, City, Country</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-4">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Your Company.
            <span className="hover:text-orange-400">Ewarenet</span> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
