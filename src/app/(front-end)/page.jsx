import Hero from "components/frontend/Hero/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <h1 className="text-2xl font-semibold text-slate-800">
        Welcome to My Mart Ecomarche
      </h1>

      <Link href={"/register-seller"}> Become a seller</Link>
    </div>
  );
}
