import React, { useMemo } from "react";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import { getCategory } from "../constants";
import clsx from "clsx";
import { Navbar } from "../components";

const DetailCategory = () => {
  const { id } = useParams();
  const category = useMemo(() => getCategory(id), [id]);
  const navigate = useNavigate();

  if (!category) {
    return <Navigate to="/notfound" replace />;
  } else {
    return (
      <div className="w-full overflow-hidden snap-y">
        <Navbar />
        <div className="flex justify-center items-center snap-center mt-12">
          <div className="xl:max-w-[1360px] w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-8 sm:px-16 px-6 sm:py-16 py-6 w-full">
              <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
                {category.name}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
                {category.product.map((product, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${product.photo})`,
                    }}
                    className={
                      "rounded-lg w-full rectangle flex items-end overflow-hidden bg-center bg-contain bg-no-repeat cursor-pointer"
                    }
                    onClick={() => navigate(`/category/${category.id}`)}
                  >
                    <div className="text-white w-full bg-secondary px-4 py-6">
                      <h1>{product.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailCategory;
