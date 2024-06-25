"use client";

import Image from "next/image";
import { Toaster, toast } from "sonner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toaster />
      <button onClick={() => toast("My first toast")}>Give me a toast</button>
    </main>
  );
}
