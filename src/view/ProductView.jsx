import Navbar from "./Navbar";
function ProductView() {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex justify-center items-center p-10">
          <img src="/hero.JPG" alt="Imagem landin" />
        </div>

        <div>
          <h3>Best Selling Plants</h3>
          <p>Easiest way to healthy life by buying your favorite plants</p>
          <button>See More</button>

          
        </div>
      </div>
    </>
  );
}

export default ProductView;
