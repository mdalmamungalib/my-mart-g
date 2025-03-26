import CategoryList from "components/frontend/CategoryList/CategoryList";
import CommunityTrainings from "components/frontend/CommunityTrainings/CommunityTrainings";
import Hero from "components/frontend/Hero/Hero";
import MarketList from "components/frontend/MarketList/MarketList";
import { authOptions } from "lib/authOptions";
import { getData } from "lib/getData";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const categoriesData = (await getData("categories")) || [];

  const categories = categoriesData.filter((category) => {
    return category.products?.length > 3;
  });

  const session = await getServerSession(authOptions);
  console.log("user session",session)

  return (
    <div className="min-h-screen space-y-5">
      <Hero />
      <MarketList />
      {categories.map((category) => {
        return (
          <CategoryList key={category.id} category={category} />
        );
      })}
      <CommunityTrainings />

      <h1 className="text-2xl font-semibold text-slate-800">
        Welcome to My Mart Ecomarche
      </h1>

      <Link href={"/register-seller"}> Become a seller</Link>
    </div>
  );
}
