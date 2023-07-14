"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function NavigationEvents({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const url = `${pathname}`;
    // You can now use the current URL
    // ...
  }, [pathname]);

  return children;
}
