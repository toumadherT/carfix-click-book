
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import Header from "../components/Header";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 to-gray-600 overflow-x-hidden">
      <Header />
      
      <div className="flex justify-center items-center px-4 py-16 sm:py-24">
        <div className="w-full max-w-md md:max-w-lg bg-slate-500/60 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-700 p-6 sm:p-8 md:p-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            Log in
          </h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-white text-lg md:text-xl font-normal">
                Email or phone number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <Input 
                  id="email"
                  type="text" 
                  placeholder="username@gmail.com" 
                  className="pl-10 h-14 bg-white text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-white text-lg md:text-xl font-normal">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className="pl-10 pr-10 h-14 bg-white text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 
                    <EyeOff className="h-5 w-5 text-gray-500" /> : 
                    <Eye className="h-5 w-5 text-gray-500" />
                  }
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link to="/forgot-password" className="text-white text-base md:text-lg font-light hover:underline">
                Forget password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 rounded-full bg-white hover:bg-gray-100 text-black text-xl font-bold"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Log in
            </Button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-white/30 flex-grow"></div>
              <span className="px-3 text-white text-sm md:text-base font-light">Or continue with</span>
              <div className="border-t border-white/30 flex-grow"></div>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="rounded-full w-14 h-14 p-0">
                <img src="/images/devicon_google.png" alt="Google" className="w-8 h-8" />
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <span className="text-white">Don't have an account? </span>
              <Link to="/signup" className="text-white font-medium hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
