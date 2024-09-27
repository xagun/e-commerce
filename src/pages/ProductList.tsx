import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchProducts, fetchProductsByCategory } from "../api/storeapi";
import ProductBox from "../components/ProductBox";
import Sidebar from "../components/Sidebar";
import { SkeletonBoxView, SkeletonListView } from "../components/Skeleton";
import Modal from "../components/Modal";
import { Product } from "../types/Iproducts";
import ProductDetail from "./ProductDetail";
import { FaBars, FaTh } from "react-icons/fa";
import { cn } from "../lib/utils";
import ProductListItem from "../components/ProductListItem";

const ProductList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(8);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isGridView, setIsGridView] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleCategoryClick = (category: string) => {
    setPage(1);
    setActiveCategory(category);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    toggleModal();
  };

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", activeCategory],
    queryFn:
      activeCategory !== ""
        ? () => fetchProductsByCategory(activeCategory)
        : fetchProducts,
  });

  const sortedData = products?.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <div className="flex min-h-[80vh] gap-6 max-lg:flex-col mb-10">
        <Sidebar handleCategoryClick={handleCategoryClick} />

        <div className="w-full">
          <div className="flex justify-between items-start sm:items-center mb-6 gap-4 flex-col-reverse sm:flex-row">
            <h1 className="capitalize text-[24px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]">
              {activeCategory ||
                "Our Collection: Clothing, Electronics, jewellery + More"}
            </h1>

            <div className="flex items-center gap-4 bg-gray-100 px-3 py-2 rounded-full">
              <button
                onClick={() => setIsGridView(false)}
                className={cn(!isGridView && "bg-black rounded-full", "p-2")}
              >
                <FaBars size={22} color={isGridView ? "black" : "white"} />
              </button>
              <button
                onClick={() => setIsGridView(true)}
                className={cn(isGridView && "bg-black rounded-full", "p-2")}
              >
                <FaTh size={22} color={!isGridView ? "black" : "white"} />
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-wrap gap-6 justify-center lg:justify-center ">
              {Array.from({ length: 9 }).map((_, index) =>
                isGridView ? (
                  <SkeletonBoxView key={index} />
                ) : (
                  <SkeletonListView key={index} />
                )
              )}
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">
              <h2>Error: {error.message}</h2>
              <p>Please try refreshing the page.</p>
            </div>
          ) : (
            <div
              className={
                isGridView
                  ? "flex flex-wrap gap-6 justify-center md:justify-between"
                  : "flex flex-col gap-4 w-full"
              }
            >
              {sortedData &&
                sortedData.map((product: Product, index: number) => (
                  <div key={index} className="cursor-pointer">
                    {isGridView ? (
                      <ProductBox
                        product={product}
                        handleClick={() => handleProductClick(product)}
                      />
                    ) : (
                      <ProductListItem
                        product={product}
                        handleClick={() => handleProductClick(product)}
                      />
                    )}
                  </div>
                ))}
            </div>
          )}
          {!isLoading && !error && (
            <div className="flex mt-4 gap-2 justify-center">
              <button
                className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={page === 1}
              >
                Prev
              </button>
              <button
                className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
                onClick={() => setPage((old) => old + 1)}
                disabled={!products || products.length < pageSize}
              >
                Next
              </button>
            </div>
          )}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={toggleModal}
          header={selectedProduct?.title}
          headerClass=""
          bodyClass=""
        >
          {selectedProduct && (
            <ProductDetail product={selectedProduct || null} />
          )}
        </Modal>
      </div>
    </>
  );
};

export default ProductList;
