import Header from "@/components/Header";
import CaseStudyHero from "@/components/CaseStudyHero";
import ModelCircle from "@/components/ModelCircle";
import ChangeModelIntro from "@/components/ChangeModelIntro";
import ChangeModelRocket from "@/components/ChangeModelRocket";
import CaseStudy02Gradient from "@/components/CaseStudy02Gradient";
import CaseStudy02Toy from "@/components/CaseStudy02Toy";
import CaseStudy02Timeline from "@/components/CaseStudy02Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <CaseStudyHero />
      <ModelCircle />
      <ChangeModelIntro />
      <ChangeModelRocket />
      <CaseStudy02Gradient />
      <CaseStudy02Toy />
      <CaseStudy02Timeline />
      <Footer />
    </main>
  );
}
