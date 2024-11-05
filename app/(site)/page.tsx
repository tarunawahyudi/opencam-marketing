import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";

export const metadata: Metadata = {
  title: "Opencam",
  description: "Free Conference App",
  icons: {
      icon: '/images/favicon/favicon.ico',
  }
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <FunFact />
    </main>
  );
}
