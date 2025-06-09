function CartView() {
  return (
    <>
      <div className=" p-3.5 bg-gray-100 rounded-full flex justify-center items-center relative ">
        <img
          className="bg-white rounded-4xl   w-16"
          src="/cartIcon.png"
          alt=""
        />
        <span className="w-6 h-6 absolute top-2/3 right-1/2 bg-red-500 text-white text-sm rounded-full flex justify-center items-center">
          0
        </span>
      </div>
    </>
  );
}
export default CartView;
