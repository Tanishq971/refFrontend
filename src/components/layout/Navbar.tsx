import React, { useState } from "react";
import { Menu, X, BarChart2 } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 bg-opacity-55 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <BarChart2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">finBills</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <NavLink
              to="/products"
              className="text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Products
            </NavLink>
            <NavLink
              to="/pricing"
              className="text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/authentication"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink
              to="/products"
              className="block text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Products
            </NavLink>
            <NavLink
              to="/pricing"
              className="block text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/authentication"
              className="block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
