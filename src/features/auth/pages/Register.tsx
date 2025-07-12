// components/Auth/RegisterForm.tsx
import { User, Mail, Eye, EyeClosed } from "lucide-react";
import google from "../../../assets/google.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { registerSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = (formData: z.infer<typeof registerSchema>) => {
    console.log(formData);
  };
  return (
    <div className="w-full max-w-md mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
        Step into Smarter Shopping
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Fullname */}
          <FormField
            name="fullname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Full Name"
                      className="h-12 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  </div>
                </FormControl>
                <FormMessage className="text-start text-xs" />
              </FormItem>
            )}
          />

          {/* Username */}
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Username"
                      className="h-12 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  </div>
                </FormControl>
                <FormMessage className="text-start text-xs" />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                    autoComplete="email"
                      {...field}
                      placeholder="Email"
                      className="h-12 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  </div>
                </FormControl>
                <FormMessage className="text-start text-xs" />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={isVisible ? "text" : "password"}
                      placeholder="••••••••"
                      className="h-12 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <span
                      onClick={toggleVisibility}
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      {isVisible ? (
                        <Eye className="w-5 h-5 text-gray-600" />
                      ) : (
                        <EyeClosed className="w-5 h-5 text-gray-600" />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-start" />
              </FormItem>
            )}
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full h-12 cursor-pointer bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg text-white font-semibold hover:from-black hover:to-black transition-all shadow-md mb-6"
          >
            Sign Up
          </button>

          {/* Social Divider */}
          <p className="text-sm text-gray-500 text-center my-4">
            or register with social platforms
          </p>

          {/* Google Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full  py-3 px-5 border border-gray-300 rounded-lg shadow-sm bg-white hover:border-black hover:bg-gray-50 transition-all"
            >
              <img src={google} alt="Google" className="w-4 h-4" />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
