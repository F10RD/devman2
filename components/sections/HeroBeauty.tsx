type HeroBeautyProps = {
  onBookClick?: () => void;
};

export default function HeroBeauty({ onBookClick }: HeroBeautyProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 via-burgundy-950/20 to-neutral-950">
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rosegold-600/20 border border-rosegold-700/30 text-rosegold-400 text-sm">
              <span className="text-xl">✨</span>
              <span>Premium Beauty Experience</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-neutral-100">Your Beauty,</span>
              <br />
              <span className="bg-gradient-to-r from-rosegold-400 to-burgundy-500 bg-clip-text text-transparent">
                Our Passion
              </span>
            </h1>

            <p className="text-xl text-neutral-300 max-w-xl">
              Expert hair styling, nail care, and beauty treatments in the heart
              of Lebbeke. Where elegance meets professional excellence.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-rosegold-400">2018</div>
                <div className="text-sm text-neutral-400">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rosegold-400">8+</div>
                <div className="text-sm text-neutral-400">Expert Stylists</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rosegold-400">500+</div>
                <div className="text-sm text-neutral-400">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onBookClick}
                className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 shadow-lg shadow-burgundy-900/50"
              >
                <span className="text-lg">📅</span>
                <span>Book Appointment</span>
              </button>
              <a
                href="#services"
                className="btn-secondary border-burgundy-900/30 hover:bg-burgundy-900/20"
              >
                <span>View All Services</span>
                <span className="text-lg">→</span>
              </a>
            </div>

            {/* Most Popular Services */}
            <div className="pt-8 border-t border-burgundy-900/30">
              <div className="text-sm text-neutral-400 mb-4">
                MOST POPULAR SERVICES
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-lg bg-neutral-900 border border-burgundy-900/30 text-sm text-neutral-200">
                  <span className="mr-2">💇</span>Balayage
                  <span className="ml-2 text-rosegold-400 font-semibold">
                    from €120
                  </span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-neutral-900 border border-burgundy-900/30 text-sm text-neutral-200">
                  <span className="mr-2">💅</span>Gel Manicure
                  <span className="ml-2 text-rosegold-400 font-semibold">
                    €45
                  </span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-neutral-900 border border-burgundy-900/30 text-sm text-neutral-200">
                  <span className="mr-2">✨</span>Facial Treatment
                  <span className="ml-2 text-rosegold-400 font-semibold">
                    from €65
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-burgundy-900 to-burgundy-950 border-2 border-burgundy-900/30 shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-8xl">💅</div>
                <div className="text-2xl font-bold text-rosegold-400">
                  Beauty Studio Image
                </div>
                <div className="text-neutral-400">
                  Replace with actual image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
