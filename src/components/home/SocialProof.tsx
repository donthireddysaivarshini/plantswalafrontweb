import { Star, Truck, Smile } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contentService } from '@/services/api';

interface SocialProofItem {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  order: number;
  is_active: boolean;
}

interface HomeContentResponse {
  social_proof_items?: SocialProofItem[];
}

const DEFAULT_ITEMS: SocialProofItem[] = [
  {
    id: 1,
    icon: 'smile',
    title: '50,000+',
    subtitle: 'Happy Plant Parents',
    order: 1,
    is_active: true,
  },
  {
    id: 2,
    icon: 'truck',
    title: 'Safe & Fresh',
    subtitle: 'Guaranteed Delivery',
    order: 2,
    is_active: true,
  },
  {
    id: 3,
    icon: 'star',
    title: '4.9/5',
    subtitle: '12,000+ Reviews',
    order: 3,
    is_active: true,
  },
];

const iconMap = {
  smile: Smile,
  truck: Truck,
  star: Star,
};

const SocialProof = () => {
  const [items, setItems] = useState<SocialProofItem[]>(DEFAULT_ITEMS);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data: HomeContentResponse = await contentService.getHomeContent();

        if (data?.social_proof_items && data.social_proof_items.length > 0) {
          // Take active items, capped at 3 for a clean, non-cluttered hero bar
          const active = data.social_proof_items
            .filter((item) => item.is_active)
            .slice(0, 3);
          if (active.length > 0) {
            setItems(active);
          }
        }
      } catch (error) {
        console.error('Social proof fetch failed:', error);
        setItems(DEFAULT_ITEMS);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className="bg-[#FAF8F5] border-y border-gray-100/80 py-3 sm:py-3.5">
      <div className="container-custom">
        <div className="grid grid-cols-3 divide-x divide-gray-200/60 max-w-4xl mx-auto items-center">
          {items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 text-center sm:text-left px-2 sm:px-4"
              >
                {/* Icon Presentation */}
                {item.icon === 'star' ? (
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </div>
                ) : (
                  Icon && (
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#1A3831] flex-shrink-0" />
                  )
                )}

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;