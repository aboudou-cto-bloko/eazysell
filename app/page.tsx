import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Process from "@/components/process";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <CaseStudies />
        <Process />
      </main>
      <Footer />
    </>
  );
}
