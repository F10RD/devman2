'use client';

import { ScissorsIcon, HandIcon, SparklesIcon } from '@/lib/icons';
import { services } from '@/lib/config-beauty';

const iconMap = {
  Scissors: ScissorsIcon,
  Hand: HandIcon,
  Sparkles: SparklesIcon,
};

export default function ServicesBeauty() {
  return (
    <section id="services" className="section-padding bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rosegold-400 to-burgundy-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Professional beauty treatments tailored to enhance your natural
            elegance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <div
                key={category.id}
                className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border-2 border-burgundy-900/30 hover:border-rosegold-700/50 transition-all shadow-xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-burgundy-900/30">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-burgundy-600 to-burgundy-700 text-white shadow-lg shadow-burgundy-900/50">
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-100">
                    {category.category}
                  </h3>
                </div>

                {/* Service Items */}
                <ul className="space-y-4">
                  {category.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-start gap-4 group"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-200 group-hover:text-rosegold-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-neutral-400">
                          {item.duration}
                        </div>
                      </div>
                      <div className="font-bold text-rosegold-400 whitespace-nowrap">
                        {item.price}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400">
            All prices are indicative. Final price may vary based on hair length
            and condition.
          </p>
        </div>
      </div>
    </section>
  );
}
