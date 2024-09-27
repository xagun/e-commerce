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
        <Description>{product.description}</Description>
        <Category>Category: {product.category}</Category>
        <Price>Price: ${product.price}</Price>
        <Rating>
          Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
        </Rating>
        <StarRating rating={product?.rating?.rate || 0} />

        <div className="flex justify-between items-center gap-4">
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
`;

const ProductDetails = styled.div``;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
`;

const Category = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Rating = styled.p`
  font-size: 1rem;
  color: #f39c12;
`;

export default ProductDetail;
