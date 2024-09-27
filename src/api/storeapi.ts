export async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products"); 
    return res.json();
  }
  
  export async function fetchCategories() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    return res.json();
  }

  export async function fetchProductsByCategory(category:string) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return res.json();
  }
  
  