import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-V4TMJ5Y99S", {
        page_path: location.pathname,
      });
    }
  }, [location]);
}
