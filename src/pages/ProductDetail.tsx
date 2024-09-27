import styled from "styled-components";
import { Product } from "../types/Iproducts";
import StarRating from "../components/Star";
import { useCartStore } from "../store/CartStore";

interface ProductDetailProps {
  product: Product | null;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const cart = useCartStore((state) => state.cart);

  const getQuantity = (id: number) => {
    let addedItem = cart.find(({ product, quantity }) => product.id === id);
    return addedItem?.quantity || 0;
  };

  const handleCart = (product: Product) => {
    if (getQuantity(product.id) === 0) {
      addToCart(product);
    } else {
      increaseQuantity(product.id);
    }
  };

  if (!product) {
    return <div>No product selected</div>;
  }

  return (
    <ProductDetailWrapper>
      <ProductImage src={product.image} alt={product.title} />
      <ProductDetails>
        <Title>{product.title}</Title>
        <p>{product.description}</p>
        <div>Category: {product.category}</div>
        <div><span className="">Price: </span><span className="text-2xl">${product.price}</span></div>
        <Rating>
         <span className="text-black"> Rating:</span> {product.rating.rate} / 5 ({product.rating.count} reviews)
        </Rating>
        <StarRating rating={product?.rating?.rate || 0} />

        <div className="flex justify-end items-center gap-4 mt-3  ">
          Add to cart:
          <button
            className="text-xl text-black font-bold px-3 border bg-gray-200 rounded-md"
            onClick={() => decreaseQuantity(product.id)}
          >
            -
          </button>
          <span>{getQuantity(product.id)}</span>
          <button
            className="text-xl text-black font-bold px-3 border bg-gray-200 rounded-md"
            onClick={() => handleCart(product)}
          >
            +
          </button>
        </div>
      </ProductDetails>
    </ProductDetailWrapper>
  );
};

// Styled components
const ProductDetailWrapper = styled.div`
  padding: 20px;
  display: flex;
  gap: 40px;


  @media (max-width: 768px) {
    flex-direction:column;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin:auto;
    width: 250px;
  height: 350px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Rating = styled.p`
  font-size: 1rem;
  color: #f39c12;
`;

export default ProductDetail;
