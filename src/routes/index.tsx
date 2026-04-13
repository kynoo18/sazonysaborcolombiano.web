import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import MenuSection from "@/components/MenuSection";
import OrdersSection from "@/components/OrdersSection";
import ScheduleSection from "@/components/ScheduleSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingCallButton from "@/components/FloatingCallButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedDishes />
      <AboutSection />
      <ReviewsSection />
      <MenuSection />
      <OrdersSection />
      <ScheduleSection />
      <LocationSection />
      <ContactSection />
      <FooterSection />
      <FloatingCallButton />
    </>
  );
}
