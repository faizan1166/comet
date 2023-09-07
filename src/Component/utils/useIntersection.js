import { useState, useLayoutEffect } from "react";

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      {
        threshold: [0.1, 1],
      }
    );
    element.current && observer.observe(element.current);

    return () => {
      observer.unobserve(element.current);
    }
  }, [element, rootMargin]);

  return isVisible;
};
