import { useEffect } from "react";
import { RefObject } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  elementRef: RefObject<T>,
  handler: () => void,
  attached = true,
) => {
  useEffect(() => {
    if (!attached) {
      return;
    }

    const handleClick = (e: Event) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [elementRef, handler, attached]);
};
