import Navbar from "./ViewComponents/Navbar";
import ProductsCards from "./ProductsCards";
import CartView from "./CartView";

function ProductView() {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex justify-center items-center p-10">
          <img src="/hero.JPG" alt="Imagem landin" />
        </div>
        <div className="">
          <CartView />
        </div>
        <div className="max-w-7xl mx-auto p-10 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/2">
            <h3 className="font-bold text-2xl mb-2">Best Selling Plants</h3>
            <p className="mb-4 text-gray-600">
              Easiest way to healthy life by buying your favorite plants
            </p>
            <button className="transition-transform duration-300 ease-in-out hover:scale-110 bg-blue-300 p-3 rounded-2xl">
              See More
            </button>
          </div>

          <div id="product" className="md:w-1/2">
            <ProductsCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
