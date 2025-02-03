import { DynamicShowcase } from "@/components/dynamic-showcase";
import { Footer } from "@/components/footer";
import CardsDesign from "@/components/grid-category";

import MainNavbar from "@/components/mainNavBar";
import { PaymentShowcase } from "@/components/payment";
import Requirement from "@/components/requirement";
import { ServicesShowcase } from "@/components/servicesSection";

import TopNavbar from "@/components/topNavBar";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <DynamicShowcase />
      <CardsDesign />
      <ServicesShowcase />
      <Requirement />
      <PaymentShowcase />
      <Footer />
    </>
  );
}
