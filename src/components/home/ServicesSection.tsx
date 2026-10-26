// src/components/home/ServicesSection.tsx
// Complete services showcase for Plants Wala (plants, pots, gardening services, flower bouquets, plant rentals)
import { Link } from 'react-router-dom';
import { Sprout, Layers, Scissors, HeartHandshake, Building2, MessageCircle, ArrowRight, Sparkles, MapPin } from 'lucide-react';

const services = [
  {
    id: 'plants',
    title: 'Lush Plants',
    tag: 'Nursery Fresh',
    badge: 'Popular',
    icon: Sprout,
    description: 'Indoor air-purifiers, outdoor flowering shrubs, exotic foliage, and low-maintenance succulents acclimatized for Indian homes.',
    actionLabel: 'Explore Plants',
    actionHref: '/shop?category=plants',
    isExternal: false,
    color: 'from-emerald-500/10 to-emerald-500/5',
    accentBorder: 'group-hover:border-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-700',
  },
  {
    id: 'pots',
    title: 'Designer Pots & Planters',
    tag: 'Handcrafted',
    badge: 'Aesthetic',
    icon: Layers,
    description: 'Artisanal terracotta, luxury glazed ceramics, metal planters, and self-watering pots crafted to elevate your home interiors.',
    actionLabel: 'Shop Planters',
    actionHref: '/shop?category=pots',
    isExternal: false,
    color: 'from-amber-500/10 to-amber-500/5',
    accentBorder: 'group-hover:border-amber-600',
    iconBg: 'bg-amber-50 text-amber-700',
  },
  {
    id: 'gardening',
    title: 'Gardening Services',
    tag: 'Doorstep Care',
    badge: 'Custom Plans',
    icon: Scissors,
    description: 'Balcony garden setup, periodic landscape maintenance, repotting, organic fertilizing, and pruning by skilled horticulturalists.',
    actionLabel: 'Book Gardening',
    actionHref: 'https://wa.me/918143814466?text=Hi%20Plants%20Wala%2C%20I%20would%20like%20to%20book%20your%20Gardening%20%26%20Balcony%20Maintenance%20Services.',
    isExternal: true,
    color: 'from-green-500/10 to-green-500/5',
    accentBorder: 'group-hover:border-[#1A3831]',
    iconBg: 'bg-green-50 text-[#1A3831]',
  },
  {
    id: 'bouquets',
    title: 'Artisanal Flower Bouquets',
    tag: 'Fresh Daily',
    badge: 'Handcrafted',
    icon: HeartHandshake,
    description: 'Bespoke hand-tied floral bouquets, festive flower arrangements, and thoughtful green gifts crafted fresh for every celebration.',
    actionLabel: 'Order Bouquet',
    actionHref: 'https://wa.me/918143814466?text=Hi%20Plants%20Wala%2C%20I%20would%20like%20to%20order%20a%20Fresh%20Flower%20Bouquet%20for%20an%20occasion.',
    isExternal: true,
    color: 'from-rose-500/10 to-rose-500/5',
    accentBorder: 'group-hover:border-rose-600',
    iconBg: 'bg-rose-50 text-rose-700',
  },
  {
    id: 'rentals',
    title: 'Plant Rentals',
    tag: 'Corporate & Events',
    badge: 'Maintenance Included',
    icon: Building2,
    description: 'Turnkey plant rentals for offices, luxury weddings, showrooms, and events with complete scheduled care and free plant replacements.',
    actionLabel: 'Enquire Rentals',
    actionHref: 'https://wa.me/918143814466?text=Hi%20Plants%20Wala%2C%20I%20am%20interested%20in%20Plant%20Rental%20services%20for%20our%20office%20%2F%20event.',
    isExternal: true,
    color: 'from-teal-500/10 to-teal-500/5',
    accentBorder: 'group-hover:border-teal-700',
    iconBg: 'bg-teal-50 text-teal-800',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F9F8F5] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A3831]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BFA275]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EBECE4] text-[#1A3831] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#BFA275]" />
            <span>Our Green Solutions</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A3831] tracking-tight leading-tight">
            Everything for Your Green Lifestyle
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed font-sans">
            Plants Wala is a complete plant-based business based in Rajahmundry. From handpicked botanical greens and luxury planters to professional gardening, flower bouquets, and event rentals — we nurture every space.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                className={`
                  group relative flex flex-col justify-between
                  bg-white rounded-2xl p-6
                  border border-gray-200/80 hover:shadow-xl
                  transition-all duration-300 transform hover:-translate-y-1
                  ${svc.accentBorder}
                `}
              >
                {/* Top Badge & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {svc.tag}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${svc.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-[#1A3831] mb-2.5 group-hover:text-[#BFA275] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6">
                    {svc.description}
                  </p>
                </div>

                {/* Action Link / Button */}
                <div className="pt-4 border-t border-gray-100">
                  {svc.isExternal ? (
                    <a
                      href={svc.actionHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-sm font-bold text-[#1A3831] hover:text-[#25D366] transition-colors group/btn"
                    >
                      <span className="flex items-center gap-1.5">
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        {svc.actionLabel}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  ) : (
                    <Link
                      to={svc.actionHref}
                      className="inline-flex items-center justify-between w-full text-sm font-bold text-[#1A3831] hover:text-[#BFA275] transition-colors group/btn"
                    >
                      <span>{svc.actionLabel}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Storefront Highlight Pill */}
        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-200/70 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#1A3831] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-serif font-bold text-[#1A3831]">
                Visit Our Physical Store in Rajahmundry
              </h4>
              <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                46-16-32, Plants Wala Store, Opp to Spark Saloon, Danavaipeta, Rajahmundry — 533103 • Open Daily: 6:00 AM – 10:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:8897021560"
              className="flex-1 md:flex-initial text-center px-5 py-2.5 rounded-full border border-[#1A3831] text-[#1A3831] text-xs md:text-sm font-bold hover:bg-gray-50 transition-colors"
            >
              Call 8897021560
            </a>
            <a
              href="https://wa.me/918143814466?text=Hi%20Plants%20Wala%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial text-center px-5 py-2.5 rounded-full bg-[#1A3831] text-white text-xs md:text-sm font-bold hover:bg-[#122722] transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
