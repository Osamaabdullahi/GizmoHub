const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <button onClick={onToggleSidebar} className="md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div>
        <button className="bg-blue-700 p-2 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
