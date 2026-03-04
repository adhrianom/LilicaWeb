import { productsMock } from "../data/mocks";
import type { ProductCategory } from "../types/product";

type ProductsProps = {
  activeCategory: ProductCategory;
};

const brlFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function Products({ activeCategory }: ProductsProps) {
  const filteredProducts = productsMock.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section className="page-container section-gap animate-lilica-in">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
        <h2 className="text-2xl font-bold text-lilica">Produtos</h2>
        <span className="text-sm text-black/60">{filteredProducts.length} itens</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="rounded-soft bg-white p-3 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full rounded-soft object-cover"
            />

            <div className="mt-3 space-y-1">
              <h3 className="line-clamp-1 text-base font-semibold text-lilica">
                {product.name}
              </h3>
              <p className="line-clamp-2 text-sm text-black/70">{product.description}</p>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-pill bg-lilica-blue px-3 py-1 text-xs font-semibold text-lilica">
                {product.salesCount} vendas
              </span>
              <span className="text-sm font-bold text-lilica">
                {brlFormatter.format(product.priceCents / 100)}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
