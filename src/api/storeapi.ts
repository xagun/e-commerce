export async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products"); 
    if (!res.ok) {
      throw new Error(`Error fetching products: ${res.statusText}`);
    }
  
    return res.json();
    }
  
  export async function fetchCategories() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) {
      throw new Error(`Error fetching categories: ${res.statusText}`);
    }
  
    return res.json();
  }

  export async function fetchProductsByCategory(category:string) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!res.ok) {
      throw new Error(`Error fetching products for this category ${res.statusText}`);
    }
  
    return res.json();
  }
  
  