import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  return loading ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm">
    <div className="relative w-16 h-16">
      {/* Outer glowing ping effect */}
      <div className="absolute inset-2 rounded-full bg-blue-400 dark:bg-blue-700 blur-md opacity-75 animate-ping" />
      
      {/* Inner spinning ring */}
      <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
    </div>
  </div>
  ) : null;
};

export default RouteLoader;