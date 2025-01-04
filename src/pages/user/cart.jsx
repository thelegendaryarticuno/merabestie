import React from "react";
import { Link } from "react-router-dom";
import CartItems from "../../components/user/cart/Cartitems";
import RecentlyViewed from "../../components/user/cart/recentlyviewed";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

const ShoppingCartPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>Shopping Cart | Urban Edge</title>
      </Helmet>
      <Navbar />

      <div className="container mx-auto px-4 py-8 space-y-6 mt-16">
        <div className="bg-gray-900 shadow-md rounded-lg">
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Shopping Cart</h1>
            <Link
              to="/shop"
              className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors mt-4 md:mt-0"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto">
          <CartItems />
          <RecentlyViewed />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
