import HeaderBarber from '@/components/layout/HeaderBarber';
import HeroBarber from '@/components/sections/HeroBarber';
import ServicesBarber from '@/components/sections/ServicesBarber';
import PricingBarber from '@/components/sections/PricingBarber';
import TeamBarber from '@/components/sections/TeamBarber';
import ContactBarber from '@/components/sections/ContactBarber';
import Footer from '@/components/layout/Footer';

export default function BarberPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <HeaderBarber />
      <HeroBarber />
      <ServicesBarber />
      <PricingBarber />
      <TeamBarber />
      <ContactBarber />
      <Footer />
    </main>
  );
}
