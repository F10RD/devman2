'use client';

import {
  ScaleIcon,
  TrendingUpIcon,
  LightbulbIcon,
  UsersIcon,
} from '@/lib/icons';
import { services } from '@/lib/config';

const iconMap = {
  Scale: ScaleIcon,
  TrendingUp: TrendingUpIcon,
  Lightbulb: LightbulbIcon,
  Users: UsersIcon,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Comprehensive professional services designed to drive your business
            forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="card group hover:border-primary-200"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Icon />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>

                {service.features && (
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-neutral-500 flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
