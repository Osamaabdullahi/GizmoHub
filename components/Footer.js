import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

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

          {/* Column 2: Customer Service */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Customer Service</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
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

          {/* Column 4: Contact */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="flex items-center text-sm">
              <FaMapMarkerAlt className="mr-2" />
              123 Main Street, City, Country
            </p>
            <p className="flex items-center text-sm">
              <FaPhoneAlt className="mr-2" />
              Phone: 123-456-7890
            </p>
            <p className="flex items-center text-sm">
              <FaEnvelope className="mr-2" />
              Email: support@GizmoHub.com
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold mb-2">
            Subscribe to our Newsletter
          </h2>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-1/2 px-4 py-2 rounded-l-lg border border-gray-700 focus:outline-none focus:border-gray-600"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; 2024 Your GizmoHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
