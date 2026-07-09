import Navbar from "@/components/Navbar";
import HeroCaseStudy from "@/components/HeroCaseStudy";
import CircleCounter from "@/components/CircleCounter";
import ChangeModel from "@/components/ChangeModel";
import AuroraTransition from "@/components/AuroraTransition";
import CaseStudy02Card from "@/components/CaseStudy02Card";
import { PacmanRail, RobotRail } from "@/components/CaseStudy02Rail";
import CaseStudy02Simple from "@/components/CaseStudy02Simple";
import Footer from "@/components/Footer";
import MadeInFramerBadge from "@/components/MadeInFramerBadge";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <HeroCaseStudy />
      <CircleCounter topLabel="01" centerLabel="04" />
      <ChangeModel />
      <AuroraTransition />
      <CaseStudy02Card />
      <PacmanRail />
      <RobotRail />
      <CaseStudy02Simple />
      <Footer />
      <MadeInFramerBadge />
    </main>
  );
}
