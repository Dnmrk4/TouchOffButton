"use client";

import { useState } from "react";
import TorchButton from "../components/TorchButton";

export default function Home() {
  const [torchOn, setTorchOn] = useState(false);

  const toggleTorch = () => {
    setTorchOn((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Next.js Mobile Torch App</h1>
      <TorchButton isTorchOn={torchOn} toggleTorch={toggleTorch} />
    </div>
  );
}
