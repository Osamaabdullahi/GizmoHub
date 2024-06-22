// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4">
          {/* Column 1: eTrade links */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">eTrade</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Phone */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Phone</h2>
            <p className="text-sm">123-456-7890</p>
          </div>

          {/* Column 3: Categories */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Categories</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Computers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Tablets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Networking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  PC Gaming
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; 2024 Your Website Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
