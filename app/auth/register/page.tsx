'use client';

import { useState } from 'react';
import axios from "axios";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { Eye, EyeOff, Mail, Lock, User, Phone, Droplets, WashingMachine } from 'lucide-react';
import Swal from "sweetalert2";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const passwordRules = {
    upper: /[A-Z]/.test(formData.password),
    lower: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    symbol: /[^A-Za-z0-9]/.test(formData.password),
    length: formData.password.length >= 8 && formData.password.length <= 12,
  };

  const passwordStrength = Object.values(passwordRules).filter(Boolean).length * 20;
  const getStrengthColor = () => {
    if (passwordStrength <= 40) return 'bg-red-500';
    if (passwordStrength <= 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Password Tidak Sama",
        text: "Password dan konfirmasi password harus sama.",
        customClass: {
          confirmButton: "my-confirm-btn-cancel"
        },
        buttonsStyling: false
      });
      return; 
    }
    setIsLoading(true);

    const payload = {
      email: formData.email,
      name: formData.fullName,
      nomor_hp: formData.phone,
      password: formData.password,
      confirm_password: formData.confirmPassword,
    };

    try {
      const res = await axios.post(
        "https://test-laundry-913222281919.asia-southeast2.run.app/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration success:", res.data);
      await Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil",
        text: "Akun kamu sudah dibuat!",
        customClass: {
          confirmButton: "my-confirm-btn-success"
        },
        buttonsStyling: false
      });

      router.push("/auth/login");
    } catch (err: any) {
      console.error("Error during registration:", err);

      Swal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text:
          err.response?.data?.message ||
          "Terjadi kesalahan, silakan coba lagi.",
        customClass: {
          confirmButton: "my-confirm-btn-cancel"
        },
        buttonsStyling: false
      });

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mx-auto lg:order-1"
        >
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-2">
              <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">CleanCycle</span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Create Account</CardTitle>
              <CardDescription className="text-gray-600">
                Register and develop your store on our platform
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className=" text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 h-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${getStrengthColor()}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${passwordStrength}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Password Strength: {passwordStrength <= 40 ? 'Weak' : passwordStrength <= 80 ? 'Medium' : 'Strong'}
                    </p>
                    <ul className="text-xs mt-2 grid grid-cols-2 gap-2">
                      {[
                        { rule: passwordRules.upper, text: 'Uppercase letter' },
                        { rule: passwordRules.lower, text: 'Lowercase letter' },
                        { rule: passwordRules.number, text: 'Number' },
                        { rule: passwordRules.symbol, text: 'Symbol' },
                        { rule: passwordRules.length, text: '8-12 characters' },
                      ].map(({ rule, text }) => (
                        <li
                          key={text}
                          className={`flex items-center gap-2 p-2 rounded-lg transition-all ${rule ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                            }`}
                        >
                          <span className="text-sm">{rule ? '✅' : '⬜'}</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="pl-10 pr-10 h-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                      I agree to the{' '}
                      <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </form>

              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block lg:order-2"
        >
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <WashingMachine className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">Rinel Laundry</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Join Our
              <span className="block text-blue-600">Laundry Platform</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Register your shop today and discover why thousands of shops trust
              Rinel Laundry for their laundry and dry cleaning needs.
            </p>

            <div className="space-y-4">
              {[
                'Manage your laundry team easily',
                'View laundry store revenue reports',
                'Get current promotions',
                'Enjoy your laundry business on our platform'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}