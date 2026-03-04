import type { CSSProperties } from "react";
import { featuredProductsMock } from "../data/mocks";

const brlFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function Featured() {
  const featuredProducts = [...featuredProductsMock].sort(
    (a, b) => b.salesCount - a.salesCount
  );

  return (
    <section className="page-container section-gap animate-lilica-in">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-bold text-lilica">Mais vendidos</h2>
        <span className="text-sm text-black/60">deslize para ver</span>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <div className="flex min-w-max snap-x gap-4">
          {featuredProducts.map((product, index) => (
            <article
              key={product.id}
              className="animate-lilica-in w-[78vw] max-w-72 shrink-0 snap-start rounded-soft bg-white p-3 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md sm:w-64"
              style={{ animationDelay: `${index * 80}ms` } as CSSProperties}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-36 w-full rounded-soft object-cover"
              />
              <div className="mt-3 space-y-1">
                <h3 className="line-clamp-1 text-base font-semibold text-lilica">
                  {product.name}
                </h3>
                <p className="line-clamp-2 text-sm text-black/70">
                  {product.description}
                </p>
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
      </div>
    </section>
  );
}

export default Featured;
