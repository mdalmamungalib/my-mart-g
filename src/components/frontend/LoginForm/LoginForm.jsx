"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from "next/link";
import SubmitButton from "components/Forminput/SubmitButton";

export const dynamic = "force-dynamic";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  async function onSubmit(data) {
    try {
      setLoading(true);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (loginData?.error) {
        toast.error("Invalid email or password. Please try again.");
      } else {
        toast.success("Login Successful!");
        reset();
        router.push("/");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-lime-500 focus:outline-none"
        />
        {errors.email && <small className="text-red-600">{errors.email.message}</small>}
        {emailErr && <small className="text-red-600">{emailErr}</small>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-lime-500 focus:outline-none"
        />
        {errors.password && <small className="text-red-600">{errors.password.message}</small>}
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end">
        <Link href="/forgot-password" className="text-sm text-lime-600 hover:underline dark:text-lime-500">
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <SubmitButton
        isLoading={loading}
        buttonTitle="Login"
        LoadingButtonTitle="Signing in, please wait..."
        style="w-full py-3 text-white transition rounded-lg bg-lime-600 hover:bg-lime-700 active:scale-95"
      />

      {/* OR Divider */}
      <div className="flex items-center">
        <div className="w-full bg-gray-300 h-[1px]"></div>
        <span className="mx-2 text-gray-500">OR</span>
        <div className="w-full bg-gray-300 h-[1px]"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="space-y-3">
        <button
          type="button"
          className="w-full flex items-center justify-center py-2.5 text-slate-950 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => signIn("google")}
        >
          <FaGoogle className="w-5 h-5 mr-2 text-red-600" />
          Sign in with Google
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center py-2.5 text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
          onClick={() => signIn("github")}
        >
          <FaGithub className="w-5 h-5 mr-2" />
          Sign in with GitHub
        </button>
      </div>

      {/* Register Link */}
      <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
        Don’t have an account?{" "}
        <Link href="/register" className="font-medium text-lime-600 hover:underline dark:text-lime-500">
          Register
        </Link>
      </p>
    </form>
  );
}
