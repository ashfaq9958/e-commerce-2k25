import { User, EyeClosed, Eye } from "lucide-react";
import google from "../../../assets/google.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/loginSchema";
import * as z from "zod";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    console.log("clicked");
    setVisible((prev) => !prev);
  };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = (formData: z.infer<typeof loginSchema>) => {
    console.log(formData);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
        Continue Where You Left Off
      </h1>

      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Username Field */}
          <FormField
            name="identifier"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Username or Email"
                      className="h-12 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  </div>
                </FormControl>
                <FormMessage className="text-start text-xs" />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={visible ? "text" : "password"}
                      placeholder="••••••••"
                      className="h-12 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />

                    <span
                      onClick={toggleVisibility}
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      {visible ? (
                        <Eye className="w-5 h-5 text-gray-600" />
                      ) : (
                        <EyeClosed className="w-5 h-5 text-gray-600" />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage className="text-start text-xs" />
              </FormItem>
            )}
          />

          {/* Forgot Password */}
          <div className="flex justify-end -mt-5">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full h-12 cursor-pointer bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg text-white font-semibold hover:from-black hover:to-black transition-all duration-200 shadow-lg mb-6"
          >
            Sign In
          </button>

          {/* Social Login Section */}
          <p className="text-sm text-gray-500 text-center my-4">
            or login with social platforms
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer gap-3 w-full py-3 px-5 border border-gray-300 rounded-lg shadow-md bg-white hover:border-black hover:bg-gray-50 transition-all"
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

export default LoginForm;
