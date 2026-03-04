import type { CategoryMock } from "../data/mocks";
import type { ProductCategory } from "../types/product";

type CategoriesProps = {
  categories: CategoryMock[];
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
};

function Categories({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <section className="page-container section-gap animate-lilica-in">
      <h2 className="mb-4 text-center text-2xl font-bold text-lilica">Categorias</h2>
      <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
        <div className="flex min-w-max items-center gap-3 sm:min-w-0 sm:flex-wrap sm:justify-center md:gap-4">
          {categories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategoryChange(category.id)}
              aria-pressed={isActive}
              className={`rounded-pill whitespace-nowrap px-5 py-2 text-sm font-bold transition md:text-base ${
                isActive
                  ? "bg-lilica-pink text-lilica shadow-sm"
                  : "bg-lilica-blue text-lilica hover:-translate-y-0.5 hover:bg-lilica-pink"
              }`}
            >
              {category.label}
            </button>
          );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
