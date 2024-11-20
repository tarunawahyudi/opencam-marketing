import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";
import Head from "@/app/(site)/head";

export const metadata: Metadata = {
  title: "Opencam",
  description: "Opencam | Free Conference App",
  icons: {
      icon: '/images/favicon/favicon.ico',
  },
  authors: [
    {
      name: "Taruna Wahyudi",
      url: "https://tarunawahyudi.github.io"
    }
  ]
};

export default function Home() {
  return (
    <main>
      <Head />
      <Hero />
      <Feature />
      <FunFact />
    </main>
  );
}
