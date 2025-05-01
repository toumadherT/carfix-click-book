
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";
import Header from "../components/Header";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // In a real application, this would call an API to send a reset code
    console.log("Sending code to:", email);
    toast.success("Reset code sent! Please check your email.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 to-gray-600 overflow-x-hidden">
      <Header />
      
      <div className="flex justify-center items-center px-4 py-16 sm:py-24">
        <div className="w-full max-w-md md:max-w-lg bg-slate-500/60 backdrop-blur-sm rounded-3xl shadow-lg border border-slate-700 p-6 sm:p-8 md:p-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            Forget your password?
          </h2>
          
          <form onSubmit={handleSendCode} className="space-y-6">
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

            <Button 
              type="submit" 
              className="w-full h-14 rounded-full bg-white hover:bg-gray-100 text-black text-xl font-bold mt-10"
            >
              <Send className="h-5 w-5 mr-2" />
              Send code
            </Button>

            <div className="text-center mt-4">
              <span className="text-white">Remember your password? </span>
              <Link to="/login" className="text-white font-medium hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
