// Original copied from https://ui.shadcn.com/docs/dark-mode/next
//
// Modifications:
// - Added Tooltip from ShadCN
// - Used DropdownMenuRadioGroup
// - Enhanced it to set the initial keyboard focus on the currently selected item
//    This required `useRef` and added some complexity.
//   It's too bad this isn't the default behavior of the component.
//   I used v0.com:
//   https://v0.dev/chat/tooltip-for-mode-toggle-bHstyL2JkQm?b=b_9ytZki5DXwu&p=0
// - Removed the CSS transitions from the Sun and Moon icons because they weren't working
//   It has something to do with being nested within the Button component.

'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  // Create refs for each theme option
  const lightRef = React.useRef<HTMLDivElement>(null);
  const darkRef = React.useRef<HTMLDivElement>(null);
  const systemRef = React.useRef<HTMLDivElement>(null);

  // Get the ref for the current theme
  const getActiveRef = () => {
    switch (theme) {
      case 'light':
        return lightRef;
      case 'dark':
        return darkRef;
      case 'system':
        return systemRef;
      default:
        return systemRef;
    }
  };

  // Focus the active item when the menu opens
  const handleOpenChange = (open: boolean) => {
    setOpen(open);

    if (open) {
      // Use setTimeout to ensure the menu is fully rendered before focusing
      setTimeout(() => {
        const activeRef = getActiveRef();
        activeRef.current?.focus();
      }, 0);
    }
  };
  return (
    <TooltipProvider>
      <DropdownMenu open={open} onOpenChange={handleOpenChange}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
                <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle theme</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Toggle theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem ref={lightRef} value="light">
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem ref={darkRef} value="dark">
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem ref={systemRef} value="system">
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
}
