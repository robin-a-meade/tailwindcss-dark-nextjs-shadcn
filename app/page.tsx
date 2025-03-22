import Image from 'next/image';

import { Moon, Sun } from 'lucide-react';

function CssTransitionDark() {
  return (
    <div className="relative">
      <Sun className="h-96 w-96 rotate-0 scale-100 transition-transform duration-[3s] dark:rotate-180 dark:scale-0" />
      <Moon className="absolute left-0 top-0 h-96 w-96 rotate-360 scale-0 transition-transform duration-[3s] dark:rotate-0 dark:scale-100" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <h1 className="text-9xl dark:white">Demo of Dark Mode</h1>
      <CssTransitionDark />
    </>
  );
}
