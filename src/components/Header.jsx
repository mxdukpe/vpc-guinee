
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="header-left">
          <h1 className="text-xl font-bold text-blue-600">VPC</h1>
        </div>
        <div className="header-right">
          <span className="text-sm text-gray-600">xpm@example.ec-dgdu-sell.com</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
