"use client";
import SubmitButton from "components/Forminput/SubmitButton";
import TextInput from "components/Forminput/TextInput";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export const dynamic = "force-dynamic";

export default function RegisterForm({ role = "USER" }) {
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
        console.log(responseData.data.role);
        setLoading(false);
        
        if (role === "USER" || responseData.data.role === "USER") {
          toast.success("User Created Successfully");
        } else if (responseData.data.role === "SELLER") {
          toast.success(
            "Seller Created Successfully. Please fill up your details"
          );
        } else {
          // You could add a fallback message in case some other role is encountered
          toast.success("Account Created Successfully");
        }

        reset();
        if (role === "USER" || responseData.data.role === "USER") {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 space-y-5"
    >
      {/* Hidden Role Input */}
      <input type="hidden" {...register("role")} value={role} />

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          {...register("name", {
            required: "Full name is required",
          })}
          className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-lime-500 focus:outline-none"
        />
        {errors.name && (
          <small className="text-red-600">
            {errors.name.message}
          </small>
        )}
      </div>

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
        {errors.email && (
          <small className="text-red-600">
            {errors.email.message}
          </small>
        )}
        {emailErr && (
          <small className="text-red-600">{emailErr}</small>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-lime-500 focus:outline-none"
        />
        {errors.password && (
          <small className="text-red-600">
            {errors.password.message}
          </small>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex items-center justify-center w-full py-3 mt-4 text-white transition rounded-lg bg-lime-600 hover:bg-lime-700 active:scale-95"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Registering...
          </>
        ) : (
          "Register"
        )}
      </button>

      {/* Login Link */}
      <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-lime-600 dark:text-lime-500 hover:underline"
        >
          Login
        </Link>
      </p>
      {/* Seller Link */}
      {role === "USER" ? (
        <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
          Are you a Seller?{" "}
          <Link
            href="/register-seller"
            className="text-lime-600 dark:text-lime-500 hover:underline"
          >
            Register as a Seller
          </Link>
        </p>
      ) : (
        <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
          Are you a User?{" "}
          <Link
            href="/register"
            className="text-lime-600 dark:text-lime-500 hover:underline"
          >
            Register as a User
          </Link>
        </p>
      )}
    </form>
  );
}
