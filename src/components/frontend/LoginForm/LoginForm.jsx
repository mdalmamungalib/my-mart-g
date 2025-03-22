"use client";
import SubmitButton from "components/Forminput/SubmitButton";
import TextInput from "components/Forminput/TextInput";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        if (role === "USER") {
          router.push("/");
          
        } else {
          router.push(`/onboarding/${responseData?.data?.id}`);
        }
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
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

      {/* Submit Button */}
      <SubmitButton
        isLoading={loading}
        buttonTitle={"Login"}
        LoadingButtonTitle={"Signing you in Please Wait..."}
        style={"w-full text-center py-3 mt-4 text-white transition rounded-lg bg-lime-600 hover:bg-lime-700 active:scale-95"}
      />

      {/* Register Link */}
      <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-lime-600 hover:underline dark:text-lime-500"
        >
          Register
        </Link>
      </p>
    </form>
  );
}
