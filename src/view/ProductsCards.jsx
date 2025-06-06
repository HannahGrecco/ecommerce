function ProductsCards() {
  return (
    <>
      <div className="flex gap-15">
        {/*Product 1*/}
        <div className="pb-20">
          <img src="public/Frame 9.png" alt="Product1" />
          <h4>Natural Plants</h4>
          <p>1,400.00</p>
        </div>
        {/*Product 2*/}
        <div>
          <img src="public/Frame 8.png" alt="Product2" />
          <h4>Artificial Plants</h4>
          <p>900.00</p>
        </div>
        {/*Product 3*/}
        <div>
          <img src="public/Frame 7.png" alt="Product3" />
          <h4>Artifial Plants</h4>
          <p>3,500.00</p>
        </div>
      </div>
    </>
  );
}
export default ProductsCards;
