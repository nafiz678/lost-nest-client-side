'use client';

import useCanvasCursor from "@/hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className="pointer-events-none fixed inset-0 z-50 hidden lg:block" id="canvas" />;
};
export default CanvasCursor;
