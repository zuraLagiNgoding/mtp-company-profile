import React from "react";
import { products } from "../constants";
import { useNavigate } from "react-router-dom";

const Products = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-2 w-full">
        {products.map((category, index) => (
          <div
            key={category.id}
            style={{ backgroundImage: `url(${category.product[0].photo})` }}
            className={
              "rounded-lg w-full rectangle flex items-end overflow-hidden bg-center bg-contain bg-no-repeat cursor-pointer"
            }
            onClick={() => navigate(`/category/${category.id}`)}
          >
            <div className="text-white w-full bg-secondary px-4 py-6">
              <h1>{category.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
