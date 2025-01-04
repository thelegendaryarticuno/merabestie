import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';
import Navbar from "../../components/user/navbar/navbar";
import Footer from "../../components/user/footer/footer";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '4px',
        backgroundColor: '#f472b6',
        transition: 'width 0.3s ease-out',
        zIndex: 1000,
      }}
    />
  );
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Summer Collection",
      description: "Discover our latest summer styles",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Elegant Dresses",
      description: "Find the perfect dress for any occasion",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1783&q=80"
    },
    {
      title: "Accessories Sale",
      description: "Up to 50% off on selected accessories",
      image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  const products = [
    {
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80",
      title: "Summer Dress",
      price: "2999",
      rating: 4.5
    },
    {
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Casual Shirt",
      price: "1299",
      rating: 4.2
    },
    {
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Leather Jacket",
      price: "4999",
      rating: 4.8
    },
    {
      image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      title: "Denim Jeans",
      price: "1999",
      rating: 4.6
    }
  ];

  const newArrivals = [
    {
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Elegant Evening Gown",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Stylish Sunglasses",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      title: "Trendy Sneakers",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      title: "Chic Handbag",
      size: "small"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const ProductGrid = ({ title, products }) => (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-200">{title}</h2>
        <a href="/shop">
          <button className="bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-600 transition-colors">
            View All
          </button>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <a href="/shop" key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 relative">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-white text-gray-800 p-2 rounded-full mr-2">
                  <FaShoppingCart />
                </button>
                <button className="bg-white text-gray-800 p-2 rounded-full">
                  <FaHeart />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2 text-gray-200">{product.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-300">₹{product.price}</span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-300">{product.rating}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );

  const NewArrivalsGrid = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-200">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Large gift box */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-lg">
            <img
              src={newArrivals[0].image}
              alt={newArrivals[0].title}
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-semibold">{newArrivals[0].title}</h3>
              <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-500 transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right column layout */}
          <div className="lg:col-span-6 grid grid-rows-2 gap-4">
            {/* Top right - medium box */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={newArrivals[1].image}
                alt={newArrivals[1].title}
                className="w-full h-[290px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-semibold">{newArrivals[1].title}</h3>
                <button className="mt-2 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-red-500 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Bottom right - two small boxes */}
            <div className="grid grid-cols-2 gap-4">
              {newArrivals.slice(2).map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[290px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm font-semibold">{item.title}</h3>
                    <button className="mt-2 bg-red-600 text-white px-2 py-1 rounded-md text-xs font-medium hover:bg-red-500 transition-colors">
                      Shop Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ScrollProgress />
      <Navbar />
      
      <main className="mt-20">
        {/* Hero Carousel */}
        <div className="container mx-auto px-4 py-6">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {carouselSlides.map((slide, index) => (
                <div key={index} className="relative w-full h-full flex-shrink-0">
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
                    <div className="absolute inset-0 flex items-center p-8">
                      <div className="text-white">
                        <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                        <p className="text-lg">{slide.description}</p>
                        <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-red-500 transition-colors">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Navigation */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors"
              onClick={nextSlide}
            >
              &#10095;
            </button>
            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-200">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Dresses', 'Tops', 'Bottoms', 'Accessories'].map((category, index) => (
              <a
                key={index}
                href={`/category/${category.toLowerCase()}`}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-200">{category}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* Product Grids */}
        <ProductGrid title="Best Sellers" products={products} />
        <ProductGrid title="New Arrivals" products={products} />
        
        {/* New Arrivals Section with new grid layout */}
        <NewArrivalsGrid />
        
        <ProductGrid title="Trending Now" products={products} />
        <ProductGrid title="Sale Items" products={products} />

        {/* Newsletter Signup */}
        <section className="bg-gray-800 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-200">Subscribe to Our Newsletter</h2>
            <p className="text-center text-gray-400 mb-6">Stay updated with our latest trends and offers</p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:red-pink-500 bg-gray-700 text-white"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-r-md hover:bg-red-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Footer Banner */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
              <div className="text-center">
                <h3 className="font-semibold text-gray-200">Free Shipping</h3>
                <p className="text-sm text-gray-400">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
              <div className="text-center">
                <h3 className="font-semibold text-gray-200">24/7 Support</h3>
                <p className="text-sm text-gray-400">Customer service</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
              <div className="text-center">
                <h3 className="font-semibold text-gray-200">Secure Payment</h3>
                <p className="text-sm text-gray-400">100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

