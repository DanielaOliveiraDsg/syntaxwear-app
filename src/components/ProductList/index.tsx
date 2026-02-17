import type { Product } from '../../interfaces/productInterface';
import { ProductCard } from '../ProductCard';

interface ProductListProps {
  products: Product[];
}

// PRODUCTS LIST COMPONENT
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 mb-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
