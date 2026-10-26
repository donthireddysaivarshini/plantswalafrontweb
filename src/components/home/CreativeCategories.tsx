// src/components/home/CreativeCategories.tsx
// Fetches featured categories dynamically from /store/home-data/.
// Smooth, responsive horizontal category carousel with luxury navigation arrows.
import { useRef, useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useHomeData } from '@/hooks/useHomeData';

const SkeletonCircle = () => (
  <div className="flex flex-col items-center gap-2 flex-shrink-0 w-20 sm:w-24 md:w-28">
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gray-100 animate-pulse" />
    <div className="h-3 w-14 bg-gray-100 rounded animate-pulse" />
  </div>
);

const CreativeCategories = () => {
  const { data, loading } = useHomeData();
  const categories = data.featured_categories || [];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Update navigation arrow visibility based on current scroll position
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const hasOverflow = el.scrollWidth > el.clientWidth + 4;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    const handleResize = () => updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', handleResize);

    // Re-check after images may have finished rendering
    const timer = setTimeout(updateScrollState, 300);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [categories, updateScrollState]);

  // Smooth scroll left / right
  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = Math.max(240, Math.floor(el.clientWidth * 0.65));
    el.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  if (!loading && categories.length === 0) return null;

  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5 px-1">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1A3831]">
            Explore by Category
          </h2>
          <Link
            to="/shop"
            className="text-xs sm:text-sm font-semibold text-[#1A3831] hover:text-[#BFA275] transition-colors flex items-center gap-1 group"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous categories"
            className={`
              absolute -left-2 sm:-left-3 md:-left-4 top-8 sm:top-10 md:top-12 -translate-y-1/2 z-20
              w-9 h-9 md:w-10 md:h-10
              rounded-full bg-white/95 backdrop-blur
              shadow-md hover:shadow-lg border border-gray-200
              flex items-center justify-center
              text-[#1A3831] hover:bg-[#1A3831] hover:text-white
              transition-all duration-300
              ${canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}
            `}
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next categories"
            className={`
              absolute -right-2 sm:-right-3 md:-right-4 top-8 sm:top-10 md:top-12 -translate-y-1/2 z-20
              w-9 h-9 md:w-10 md:h-10
              rounded-full bg-white/95 backdrop-blur
              shadow-md hover:shadow-lg border border-gray-200
              flex items-center justify-center
              text-[#1A3831] hover:bg-[#1A3831] hover:text-white
              transition-all duration-300
              ${canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}
            `}
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Left Soft Gradient Edge */}
          <div
            className={`
              absolute left-0 top-0 bottom-0 w-8 md:w-12
              bg-gradient-to-r from-white via-white/80 to-transparent
              pointer-events-none z-10 transition-opacity duration-300
              ${canScrollLeft ? 'opacity-100' : 'opacity-0'}
            `}
          />

          {/* Right Soft Gradient Edge */}
          <div
            className={`
              absolute right-0 top-0 bottom-0 w-8 md:w-12
              bg-gradient-to-l from-white via-white/80 to-transparent
              pointer-events-none z-10 transition-opacity duration-300
              ${canScrollRight ? 'opacity-100' : 'opacity-0'}
            `}
          />

          {/* Horizontal Scrolling Items */}
          <div
            ref={scrollRef}
            className="
              flex gap-4 sm:gap-6 md:gap-8
              overflow-x-auto
              pb-3 pt-1 px-2 sm:px-4 md:px-6
              snap-x snap-mandatory scroll-smooth no-scrollbar
              items-start
            "
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {loading
              ? Array.from({ length: 8 }).map((_, i) => <SkeletonCircle key={i} />)
              : categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/shop?category=${cat.slug}`}
                    className="group flex flex-col items-center gap-2 flex-shrink-0 snap-start w-20 sm:w-24 md:w-28 text-center"
                  >
                    {/* Circle Image */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#E5EAD7] group-hover:border-[#BFA275] transition-all duration-300 p-0.5 shadow-sm group-hover:shadow-md">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#F0F4E8]">
                        {cat.image ? (
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-2xl">🌿</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Label */}
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-[#1A3831] transition-colors leading-tight line-clamp-2">
                      {cat.name}
                    </span>
                  </Link>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCategories;