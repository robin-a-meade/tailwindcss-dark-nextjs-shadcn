import Image from 'next/image';

import { Moon, Sun } from 'lucide-react';

/** For experimenting with CSS transitions. I'm getting better results now that I use group and group-hover. */
function CssTransitionDemo() {
  return (
    <div className="relative h-8 w-8 cursor-pointer rounded-md flex items-center justify-center group transition-colors duration-1000 hover:bg-gray-700">
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-1000 text-yellow-400 group-hover:rotate-90 group-hover:scale-0 group-hover:text-yellow-600" />
      <Moon className="absolute h-5 w-5 rotate-360 scale-0 transition-all duration-1000 text-white group-hover:rotate-0 group-hover:scale-100" />
    </div>
  );
}

function CssTransitionDemo2() {
  return (
    <div className="relative">
      Demo2:
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-100 dark:rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-360 scale-0 transition-transform duration-100 dark:rotate-0 dark:scale-100" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <p>This is a</p>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <p>application.</p>
      <p>
        It is a demo of a three-way theme toggle button that support light mode,
        dark mode, and your system theme.
      </p>
      <p>Known Issues:</p>
      <ul className="list-disc list-inside pl-3">
        <li>
          The CSS transition animations on the Sun and Moon icons do not work
          when changing theme. Since it doesn't work, I simplified the code.
          TODO: Create an MRE and ask for help.
        </li>
      </ul>
      <CssTransitionDemo />
      <CssTransitionDemo2 />
      <p className="text-black transition-colors duration-1000 dark:text-white">
        Test dark mode transition. Doesn't work. Transitions from light to dark
        mode don't work. Research:
      </p>
      <div>
        Issue #181 · pacocoursey/next-themes
        https://github.com/pacocoursey/next-themes/issues/181
      </div>
      <div>
        How can I get a transition between dark and light mode · Issue #239 ·
        pacocoursey/next-themes
        https://github.com/pacocoursey/next-themes/issues/239
      </div>
      <div>
        How to apply transition effects when transitioning from light mode to
        dark mode and vice verse? · tailwindlabs/tailwindcss · Discussion #4976
        https://github.com/tailwindlabs/tailwindcss/discussions/4976
      </div>
      <div>
        Tailwind CSS: darkMode transition delays - Stack Overflow
        https://stackoverflow.com/questions/70692277/tailwind-css-darkmode-transition-delays
      </div>
    </>
  );
}
