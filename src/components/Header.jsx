
const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="absolute top-0 right-0 bg-[#E6F0FA] border border-brown-400 px-6 py-4 w-[calc(100%-16rem)] flex justify-between items-center">
        <div></div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#E3D500] rounded-full flex items-center justify-center font-bold text-green-900">P</div>
          <div className="w-3 h-3 bg-green-500 rounded-full -ml-2 mb-4"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
