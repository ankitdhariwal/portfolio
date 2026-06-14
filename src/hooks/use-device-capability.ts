"use client";

import { useEffect, useState } from "react";

interface DeviceCapability {
  canRender3D: boolean;  // false on low-end / mobile devices
  isMobile:    boolean;
  isReady:     boolean;  // false until measured (avoids SSR mismatch)
}

export function useDeviceCapability(): DeviceCapability {
  const [cap, setCap] = useState<DeviceCapability>({
    canRender3D: false,
    isMobile:    false,
    isReady:     false,
  });

  useEffect(() => {
    const cores   = navigator.hardwareConcurrency ?? 2;
    const mobile  = window.innerWidth < 768;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const memory  = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

    setCap({
      canRender3D: !mobile && !reduced && cores >= 4 && memory >= 2,
      isMobile:    mobile,
      isReady:     true,
    });
  }, []);

  return cap;
}
