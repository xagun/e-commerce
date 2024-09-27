import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../api/storeapi";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { cn } from "../lib/utils";
import { Skeleton } from "./Skeleton";

interface ISidebarProps {
  handleCategoryClick: (category: string) => void;
}

const Sidebar = ({ handleCategoryClick }: ISidebarProps) => {
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCategoryOpen(true);
      } else {
        setCategoryOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 min-w-[200px] p-2 lg:p-6 h-full">
      <div className="relative lg:fixed z-10">
        <h1 className="text-[18px] border-b-2 pb-[10px] flex justify-between mb-6">
          Categories
          <div
            className="cursor-pointer z-50 max-lg:flex hidden"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <RxCaretDown
              className={cn(
                categoryOpen && "rotate-180",
                "transition-transform duration-300"
              )}
            />
          </div>
        </h1>
        <div
          className={cn(
            "flex flex-col gap-2 overflow-y-scroll transition-all duration-300 break-all overflow-hidden whitespace-normal",
            categoryOpen ? "max-h-[400px]" : "max-h-0"
          )}
        >
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          ) : error ? (
            <div className="w-full">
              <p className="text-red-500 break-all overflow-hidden whitespace-normal text-xs">
                Failed to load categories
              </p>
            </div>
          ) : (
            <>
              <span
                className="text-[16px] font-light h-[42px] cursor-pointer"
                onClick={() => handleCategoryClick("")}
              >
                All
              </span>
              {categories?.map((cat: string, idx: number) => (
                <span
                  className="capitalize font-light h-[42px] cursor-pointer"
                  key={idx}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </span>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
