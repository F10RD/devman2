'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config-beauty';

export default function ContactBeauty() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Book Your Appointment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rosegold-400 to-burgundy-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Ready to look and feel amazing? Get in touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-burgundy-900 to-burgundy-950 text-neutral-100 rounded-2xl p-8 mb-8 border-2 border-burgundy-900/30 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-rosegold-400">
                Visit Us
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-rosegold-600/30 border-2 border-rosegold-700/50 flex-shrink-0 text-2xl">
                    📍
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1 text-neutral-100">
                      Address
                    </p>
                    <p className="text-neutral-300">
                      {siteConfig.links.address}
                    </p>
                    <a
                      href={siteConfig.links.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-rosegold-400 hover:text-rosegold-300 underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-rosegold-600/30 border-2 border-rosegold-700/50 flex-shrink-0 text-2xl">
                    📞
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1 text-neutral-100">Phone</p>
                    <a
                      href={`tel:${siteConfig.links.phone}`}
                      className="text-neutral-300 hover:text-rosegold-400 transition-colors"
                    >
                      {siteConfig.links.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-rosegold-600/30 border-2 border-rosegold-700/50 flex-shrink-0 text-2xl">
                    ✉️
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1 text-neutral-100">Email</p>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      className="text-neutral-300 hover:text-rosegold-400 transition-colors"
                    >
                      {siteConfig.links.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-rosegold-600/30 border-2 border-rosegold-700/50 flex-shrink-0 text-2xl">
                    🕐
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-2 text-neutral-100">
                      Opening Hours
                    </p>
                    <div className="text-sm text-neutral-300 space-y-1">
                      <p>{siteConfig.hours.weekdays}</p>
                      <p>{siteConfig.hours.saturday}</p>
                      <p>{siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-burgundy-900/30">
                <p className="font-semibold mb-4 text-neutral-100">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-rosegold-600/30 hover:bg-rosegold-600/40 transition-colors border-2 border-rosegold-700/50 text-2xl"
                    title="Follow us on Instagram"
                  >
                    📷
                  </a>
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-rosegold-600/30 hover:bg-rosegold-600/40 transition-colors border-2 border-rosegold-700/50 text-2xl"
                    title="Follow us on Facebook"
                  >
                    👤
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-neutral-800 rounded-2xl p-8 border-2 border-burgundy-900/30 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-neutral-100">
              Request Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-neutral-200"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="input bg-neutral-900 border-burgundy-900/30 text-neutral-100 placeholder-neutral-500 focus:border-rosegold-600"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-neutral-200"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="input bg-neutral-900 border-burgundy-900/30 text-neutral-100 placeholder-neutral-500 focus:border-rosegold-600"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-neutral-200"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="input bg-neutral-900 border-burgundy-900/30 text-neutral-100 placeholder-neutral-500 focus:border-rosegold-600"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-2 text-neutral-200"
                >
                  Service *
                </label>
                <select
                  id="service"
                  required
                  className="input bg-neutral-900 border-burgundy-900/30 text-neutral-100 focus:border-rosegold-600"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="">Select a service...</option>
                  <option value="hair-cut">Hair Cut & Style</option>
                  <option value="hair-color">Hair Color / Balayage</option>
                  <option value="manicure">Manicure</option>
                  <option value="pedicure">Pedicure</option>
                  <option value="facial">Facial Treatment</option>
                  <option value="other">Other (specify in message)</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium mb-2 text-neutral-200"
                  >
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    className="input bg-neutral-900 border-burgundy-900/30 text-neutral-100 focus:border-rosegold-600"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium mb-2 text-neutral-200"
                  >
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    required
                    className="input bg-neutral-900 border-burgundy-900/30 text-neutral-100 focus:border-rosegold-600"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-neutral-200"
                >
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input bg-neutral-900 border-burgundy-900/30 text-neutral-100 placeholder-neutral-500 focus:border-rosegold-600"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Any special requests or questions?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 w-full group shadow-lg shadow-burgundy-900/50 flex items-center justify-center gap-2"
              >
                <span className="text-lg">📅</span>
                <span>
                  {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
                </span>
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-burgundy-900/50 border border-rosegold-600/50 text-rosegold-300 text-sm">
                  ✓ Appointment request sent! We'll contact you shortly to
                  confirm.
                </div>
              )}
            </form>

            <p className="text-xs text-neutral-500 mt-4">
              * We'll contact you to confirm availability. Appointments are not
              guaranteed until confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
