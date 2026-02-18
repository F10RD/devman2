import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container-custom text-center">
          <p className="text-neutral-400">
            © 2026 YourFirm. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
