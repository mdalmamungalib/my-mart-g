import CategoryList from "components/frontend/CategoryList/CategoryList";
import CommunityTrainings from "components/frontend/CommunityTrainings/CommunityTrainings";
import Hero from "components/frontend/Hero/Hero";
import MarketList from "components/frontend/MarketList/MarketList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen space-y-5">
      <Hero />
      <MarketList />
      <CategoryList/>
      <CategoryList/>
      <CategoryList/>
      <CategoryList/>
      <CategoryList/>
      <CommunityTrainings/>
      
      <h1 className="text-2xl font-semibold text-slate-800">
        Welcome to My Mart Ecomarche
      </h1>

      <Link href={"/register-seller"}> Become a seller</Link>
    </div>
  );
}
