import { DynamicShowcase } from "@/components/dynamic-showcase";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import MainNavbar from "@/components/mainNavBar";
import { ServicesCards } from "@/components/services";
import TopNavbar from "@/components/topNavBar";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <DynamicShowcase />
      <FeaturedProducts />
      <ServicesCards />
      <Footer />
    </>
  );
}
