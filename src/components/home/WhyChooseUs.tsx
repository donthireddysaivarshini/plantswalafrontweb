import { ShieldCheck, Sparkles, MessageCircle, Heart, Sprout, Store, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: Sprout,
    title: 'Nurtured With Care',
    description: 'Every plant is nursery-acclimatized to Indian climates and potted in balanced organic soil mix with healthy root systems.',
    accent: 'bg-emerald-50 text-[#1A3831]',
  },
  {
    icon: Award,
    title: 'Artisanal & Aesthetic Pots',
    description: 'From handcrafted terracotta and glazed ceramics to innovative self-watering pots that keep plants hydrated for weeks.',
    accent: 'bg-amber-50 text-amber-800',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed Safe Delivery',
    description: 'Custom eco-friendly breathable packaging engineered to cushion foliage and ensure damage-free transit to your door.',
    accent: 'bg-teal-50 text-teal-800',
  },
  {
    icon: Heart,
    title: 'Lifelong Plant Support',
    description: 'We guide you at every step of your plant journey. Message our team anytime on WhatsApp for watering, pruning, or repotting advice.',
    accent: 'bg-rose-50 text-rose-800',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EBECE4] text-[#1A3831] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#BFA275]" />
            <span>Rooted In Passion</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A3831] tracking-tight">
            Why Choose Plants Wala?
          </h2>
          <p className="mt-3 text-base text-gray-600 font-sans leading-relaxed">
            A genuine plant-based sanctuary in Rajahmundry dedicated to bringing nature closer to your everyday life.
          </p>
        </div>

        {/* Feature Showcase Grid: Left Store Visual + Right Brand Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Plants Wala Boutique Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/plants-wala-store.jpg"
                alt="Plants Wala Boutique Store Interior Rajahmundry"
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/50 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#1A3831]">Physical Store • Danavaipeta</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-white/40">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-serif font-bold text-base md:text-lg text-[#1A3831]">
                      Plants Wala Botanical Studio
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Danavaipeta, Rajahmundry • Open Mon–Sun 6 AM – 10 PM
                    </p>
                  </div>
                  <div className="bg-[#1A3831] text-white text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    4.9 ★ Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Value Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FBF9F5] border border-gray-100/80 hover:border-[#BFA275]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl ${item.accent} flex items-center justify-center mb-4 shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#1A3831] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A3831] text-white text-sm font-bold hover:bg-[#122722] transition-colors shadow-md group"
              >
                <Store className="w-4 h-4" />
                <span>Visit Our Rajahmundry Store</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/918143814466?text=Hi%20Plants%20Wala%2C%20I%20would%20like%20to%20know%20more%20about%20your%20plants%20and%20gardening%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-800 text-sm font-bold hover:border-[#1A3831] hover:text-[#1A3831] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat with Plant Expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;