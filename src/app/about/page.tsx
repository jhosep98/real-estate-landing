import { Hero, Navbar } from "@/ui";
import { ClientCtaWidgetAbout } from "@/components/client-cta-widget-about";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <ClientCtaWidgetAbout />
    </>
  );
}