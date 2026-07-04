import NextAuthProvider from "@/provider/NextAuthProvider";
import Image from "next/image";
import Banner from "./components/home/Banner";
import About from "./components/home/About";
import ServiceOverview from "./components/home/ServiceOverview";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <section className="mt-5">
        <Banner/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <ServiceOverview/>
      </section>
      <section>
        <Testimonials/>
      </section>
    </div>
  );
}
