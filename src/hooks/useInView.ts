"use client";

import { useInView as useInViewObs } from "react-intersection-observer";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "0px" } = options;
  return useInViewObs({ threshold, triggerOnce, rootMargin });
}
