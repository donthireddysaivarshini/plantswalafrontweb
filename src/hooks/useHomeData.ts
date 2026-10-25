// src/hooks/useHomeData.ts
// Fetches all homepage data in a single API call.
// Each section reads from the same cached response — zero duplicate requests.
import { useState, useEffect } from 'react';
import { storeService } from '@/services/api';
import type { ApiProduct } from '@/components/products/ProductCard';

export interface HeroSlide {
  id: number;
  image: string;
  link_url?: string;
}

export interface FeaturedCategory {
  id: number;
  name: string;
  slug: string;
  image?: string;
  main_category_slug?: string;
}

export interface FeaturedSpace {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  image?: string;
}

export interface FeaturedReview {
  id: number;
  user_name: string;
  rating: number;
  comment: string;
  date: string;
  is_verified_purchase: boolean;
}

export interface HomeData {
  hero_slides: HeroSlide[];
  new_arrivals: ApiProduct[];
  best_sellers: ApiProduct[];
  trending: ApiProduct[];
  best_deals: ApiProduct[];
  featured_categories: FeaturedCategory[];
  featured_spaces: FeaturedSpace[];
  featured_reviews: FeaturedReview[];
}

const EMPTY: HomeData = {
  hero_slides: [],
  new_arrivals: [],
  best_sellers: [],
  trending: [],
  best_deals: [],
  featured_categories: [],
  featured_spaces: [],
  featured_reviews: [],
};

let cachedData: HomeData | null = null;
let pendingPromise: Promise<HomeData> | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 30000; // 30 seconds

function fetchSharedHomeData(): Promise<HomeData> {
  const now = Date.now();
  if (cachedData && (now - lastFetchTime < CACHE_TTL)) {
    return Promise.resolve(cachedData);
  }
  if (!pendingPromise) {
    pendingPromise = storeService
      .getHomeData()
      .then((res: HomeData) => {
        const formatted: HomeData = {
          hero_slides: res.hero_slides ?? [],
          new_arrivals: (res.new_arrivals ?? []).slice(0, 8),
          best_sellers: (res.best_sellers ?? []).slice(0, 8),
          trending: (res.trending ?? []).slice(0, 8),
          best_deals: (res.best_deals ?? []).slice(0, 8),
          featured_categories: res.featured_categories ?? [],
          featured_spaces: res.featured_spaces ?? [],
          featured_reviews: res.featured_reviews ?? [],
        };
        cachedData = formatted;
        lastFetchTime = Date.now();
        return formatted;
      })
      .finally(() => {
        pendingPromise = null;
      });
  }
  return pendingPromise;
}

export function useHomeData() {
  const [data, setData] = useState<HomeData>(cachedData || EMPTY);
  const [loading, setLoading] = useState(!cachedData);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchSharedHomeData()
      .then((res) => {
        if (!cancelled) {
          setData(res);
          setError(false);
        }
      })
      .catch(() => {
        if (!cancelled && !cachedData) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}