
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate authentication
    toast({
      title: isLogin ? "Login Successful" : "Registration Successful",
      description: isLogin 
        ? "Welcome back to Estate! You are now logged in."
        : "Your account has been created. Welcome to Estate!",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-estate-navy overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-md mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="bg-white dark:bg-estate-charcoal rounded-xl shadow-md p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-estate-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={30} className="text-estate-gold" />
                </div>
                <h1 className="text-2xl font-display font-semibold text-estate-navy dark:text-white">
                  {isLogin ? 'Sign In to Your Account' : 'Create New Account'}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {isLogin 
                    ? 'Access your profile and saved properties'
                    : 'Join Estate to save properties and get personalized recommendations'
                  }
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Password
                    </label>
                    {isLogin && (
                      <Link to="/forgot-password" className="text-xs text-estate-gold hover:underline">
                        Forgot Password?
                      </Link>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      id="password"
                      required
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                      placeholder="••••••••"
                    />
                    <button 
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
                
                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-gray-400" />
                      </div>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id="confirmPassword"
                        required
                        className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-estate-navy text-white rounded-md font-medium hover:bg-estate-navy/90 transition-colors"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-estate-charcoal text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-estate-navy/30 hover:bg-gray-50 dark:hover:bg-estate-navy/50">
                    Google
                  </button>
                  <button className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-estate-navy/30 hover:bg-gray-50 dark:hover:bg-estate-navy/50">
                    Facebook
                  </button>
                </div>
              </div>
              
              <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <button 
                      type="button" 
                      className="text-estate-gold font-medium hover:underline"
                      onClick={() => setIsLogin(false)}
                    >
                      Register now
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button 
                      type="button" 
                      className="text-estate-gold font-medium hover:underline"
                      onClick={() => setIsLogin(true)}
                    >
                      Sign In
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
