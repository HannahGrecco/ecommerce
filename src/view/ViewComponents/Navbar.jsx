function Navbar() {
  return (
    <>
      <div className="flex items-center px-10 py-8 bg-white text-black">
        <div className="mr-90 pr-10 text-lg font-bold">GREENMIND</div>
        <div className="flex space-x-20">
          <a href="" className="hover:text-gray-300">
            HOME
          </a>
          <a href="#product" className="hover:text-gray-300">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-gray-300">
            CONTACTS
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
