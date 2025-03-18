// Note: This file is a modified version of the original ShadCN file
// Original copied from https://ui.shadcn.com/docs/dark-mode/next
//
// Local modifications to the original ShadCN file
// * Mon Mar 17 2025 07:55:35 PM HST  Robin A. Meade <robin.a.meade@gmail.com>
// - Import Check from lucide-react
// - Retrieve `theme` from useTheme so that we know the theme name
// - Add a Check icon to the selected theme. Used logic and styling from
//   https://v0.dev/chat/theme-selector-component-F67qkxdQFPm?b=b_OX4zazdCUCa&p=0
//   Note how the `ml-auto` class is used to push the Check icon to the right
//   side of the dropdown menu item.
//
// * Tue Mar 18 2025 11:48:06 AM HST  Robin A. Meade <robin.a.meade@gmail.com>
// - I added Tooltip from ShadCN
// - I realized I should have used the Radio capabilities of ShadCN's DropDown menu.
// - TODO: Used the Radio capabilities of ShadCN's DropDown menu

'use client';
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

  return (
    <TooltipProvider>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
}
