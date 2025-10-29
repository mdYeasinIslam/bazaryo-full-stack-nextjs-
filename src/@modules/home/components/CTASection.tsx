"use client";

import { useState } from "react";
import { BiCheckCircle, BiShoppingBag, BiStar, BiStore, BiTrendingUp } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";


export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  const handleSellerSignup = () => {
    // Navigate to seller signup
    window.location.href = "/seller-signup";
  };

  const handleStartBrowsing = () => {
    // Navigate to products page
    window.location.href = "/products";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400 rounded-full opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-pink-400 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Join the
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Bazaryo{" "}
            </span>
            Community?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to sell your products or discover amazing
            deals, we've got you covered.
          </p>
        </div>

        {/* Dual CTA Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Seller CTA Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BiStore className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4">
                Start Selling Today
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Sign up to sell your own products and reach millions of
                customers worldwide. Easy setup, powerful tools, and great
                commissions.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  "Zero setup fees",
                  "Reach millions of customers",
                  "Easy product management",
                  "Fast payments & analytics",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-green-300"
                  >
                    <BiCheckCircle className="w-5 h-5 mr-3" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleSellerSignup}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                <span>Sign Up to Sell</span>
                <BsArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-xs text-blue-200">Active Sellers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$2M+</div>
                  <div className="text-xs text-blue-200">Monthly Sales</div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer CTA Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BiShoppingBag className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4">
                Start Shopping Now
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Discover thousands of amazing products from trusted sellers.
                Fast delivery, secure checkout, and unbeatable prices.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  "Free shipping on $50+",
                  "24/7 customer support",
                  "Secure payment protection",
                  "Easy returns & refunds",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-blue-300"
                  >
                    <BiCheckCircle className="w-5 h-5 mr-3" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleStartBrowsing}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                <span>Start Browsing</span>
                <BsArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1M+</div>
                  <div className="text-xs text-blue-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-xs text-blue-200">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CgMail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay in the Loop
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Get exclusive deals, new product alerts, and insider tips
              delivered straight to your inbox. Join 100K+ subscribers!
            </p>
          </div>

          {!isSubscribed ? (
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <BsArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-blue-200 mt-4 text-center">
                By subscribing, you agree to our Privacy Policy and Terms of
                Service.
              </p>
            </form>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BiCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                Welcome to the Community!
              </h4>
              <p className="text-green-200">
                Thank you for subscribing! Check your email for a special
                welcome offer.
              </p>
            </div>
          )}

          {/* Newsletter Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <BiTrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">
                Exclusive Deals
              </div>
              <div className="text-blue-200 text-xs">Up to 70% off</div>
            </div>
            <div className="text-center">
              <BiStar className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">
                New Products
              </div>
              <div className="text-blue-200 text-xs">First access</div>
            </div>
            <div className="text-center">
              <FaUsers className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">Community</div>
              <div className="text-blue-200 text-xs">100K+ members</div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-blue-200 text-sm">Products Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-200 text-sm">Active Sellers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">2M+</div>
              <div className="text-blue-200 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
