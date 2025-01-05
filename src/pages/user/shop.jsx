import React, { useState, useEffect } from 'react';
import { FaTimes, FaFacebook, FaInstagram, FaTwitter, FaThLarge, FaList, FaStar, FaHeart } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/user/navbar/navbar';

const Shop = ({ category }) => {
  // State declarations
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loadMore, setLoadMore] = useState(6);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('default');
  const [layout, setLayout] = useState('grid');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    { 
      name: 'Fashion Accessories', 
      img: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-modish-fashion-necklace-25631-m.jpg',
      description: 'Trendy accessories for every occasion'
    },
    { 
      name: 'Books', 
      img: "https://tse2.mm.bing.net/th?id=OIP.uyi1Q5l2H8Zf9APJQplJfQHaEK&pid=Api&P=0&h=180",
      description: 'Discover your next favorite read'
    },
    { 
      name: 'Gift Boxes', 
      img: "http://images4.fanpop.com/image/photos/22200000/Christmas-gifts-christmas-gifts-22231235-2048-2048.jpg",
      description: 'Perfect presents for loved ones'
    },
    { 
      name: 'Stationery', 
      img: "https://tse1.mm.bing.net/th?id=OIP.UCpcTmMMOdXTF6WAhtD94QHaH0&pid=Api&P=0&h=180",
      description: 'Quality supplies for work and study'
    },
  ];

  const { categoryName } = useParams();
  const navigate = useNavigate();

  // Effects and functions
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ecommercebackend-8gx8.onrender.com/get-product');
        const data = await response.json();
        if (data.success) {
          const validProducts = data.products.filter(
            product =>
              product.name &&
              product.price &&
              product.img &&
              product.category &&
              product.productId &&
              (product.visibility === 'on' || product.visibility === 'true')
          );
          setProducts(validProducts);
          setFilteredProducts(validProducts);
          setBestSellers(validProducts.slice(0, 6));
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryName) {
      const categoryExists = categories.some(
        category => category.name.toLowerCase().replace(/ /g, '-') === categoryName.toLowerCase().replace(/ /g, '-')
      );
      if (categoryExists) {
        setSelectedCategory(categoryName);
        filterProducts(categoryName);
      } else {
        setSelectedCategory('404');
      }
    }
  }, [categoryName]);

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
    }
    setLoadMore(6);
  };

  const sortProducts = (option) => {
    let sortedProducts = [...filteredProducts];
    if (option === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === 'rating') {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (option === 'category') {
      sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
    }
    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    sortProducts(sortOption);
  }, [sortOption]);

  if (selectedCategory === '404') {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <h1 className="text-4xl font-bold text-gray-900">404 Not Found</h1>
      </div>
    );
  }

  const ProductCard = ({ product }) => {
    return (
      <motion.div
        className={`bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg relative group ${layout === 'list' ? 'flex' : 'grid'}`}
        whileHover={{ y: -5 }}
        onMouseEnter={() => setHoveredProduct(product.productId)}
        onMouseLeave={() => setHoveredProduct(null)}
      >
        <Link to={`/${product.productId}`} className="block">
          <div className="relative">
            <img 
              src={product.img[0]?product.img[0]:product.img} 
              alt={product.name}
              className="w-full h-64 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>
            {product.discount && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                -{product.discount}%
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating || 4) ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-2">({product.reviews || 42})</span>
            </div>
            <h4 className="font-medium text-gray-800 text-lg mb-1 truncate">
              {product.name}
            </h4>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-900 font-bold text-lg">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">₹{product.originalPrice}</span>
                )}
              </div>
             
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Shop | Mera Bestie</title>
      </Helmet>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-sm sm:text-base font-medium text-center animate-pulse">
            USE CODE OFF10 TO GET FLAT 10% OFF ON ORDERS ABOVE ₹499 | FREE SHIPPING | COD AVAILABLE
          </p>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen pt-8">
        <Navbar className="sticky top-0 z-50 bg-white shadow-sm" />

        {/* Sorting and Layout Options */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              >
                <option value="default">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Best Rating</option>
                <option value="category">Category</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLayout('grid')} 
                className={`p-2 rounded-lg transition-colors ${layout === 'grid' ? 'bg-gray-100 text-pink-600' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <FaThLarge size={20} />
              </button>
              <button 
                onClick={() => setLayout('list')} 
                className={`p-2 rounded-lg transition-colors ${layout === 'list' ? 'bg-gray-100 text-pink-600' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <FaList size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={layout === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" : "flex flex-col gap-6"}>
            {filteredProducts.slice(0, loadMore).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
          {filteredProducts.length > loadMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setLoadMore(prev => prev + 6)}
                className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* Best Sellers Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Best Sellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">MERA Bestie</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your one-stop destination for thoughtful and unique gifts that make every moment special.
                </p>
                <div className="flex justify-center md:justify-start space-x-6">
                  <a href="https://facebook.com" className="text-gray-400 hover:text-pink-600 transition-colors">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://instagram.com" className="text-gray-400 hover:text-pink-600 transition-colors">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://twitter.com" className="text-gray-400 hover:text-pink-600 transition-colors">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
              <div className="text-center md:text-right">
                <h5 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h5>
                <p className="text-gray-600 leading-relaxed">
                  3181 Street Name, City, India<br />
                  Email: support@merabestie.com<br />
                  Phone: +91 1234567890
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Shop;