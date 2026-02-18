type FooterProps = {
  variant?: 'default' | 'beauty';
};

export default function Footer({ variant = 'default' }: FooterProps) {
  const isBeauty = variant === 'beauty';

  return (
    <footer
      className={`py-12 ${
        isBeauty
          ? 'bg-neutral-950 border-t border-burgundy-900/30'
          : 'bg-neutral-900 border-t border-neutral-800'
      }`}
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3
              className={`font-bold text-lg mb-4 ${
                isBeauty ? 'text-rosegold-400' : 'text-blue-400'
              }`}
            >
              {isBeauty ? 'Bella Studio' : 'Your Business'}
            </h3>
            <p className="text-neutral-400 text-sm">
              Professional services tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-neutral-200 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>📍 Your Address</li>
              <li>📞 +32 123 456 789</li>
              <li>✉️ info@yourbusiness.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-neutral-200 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                📷
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                👤
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            {isBeauty ? 'Bella Studio' : 'Your Business'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
