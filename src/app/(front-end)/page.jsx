import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold text-slate-800">
        Welcome to My Mart Ecomarche
      </h1>

<<<<<<< HEAD
      <Link href={"/register-seller"}> Become a seller</Link>
=======
      <Link href={"/register-farmer"}> Become a farmer</Link>
>>>>>>> origin/main
    </div>
  );
}
