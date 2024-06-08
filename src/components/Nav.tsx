"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

export const Nav = () => {
  const links = [
    ["Home", "/"],
    ["Work", "/#work"],
    // ["Journal", "/#journal"],
    ["Speaking", "/#speaking"],
    ["Uses", "/uses"],
    ["Contact", "/#contact"],
  ]
  return (
    <>
      <NavigationMenu className="block sm:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4">
              <Menu />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="overflow-auto relative bg-[--background] z-10">
              <ul className="grid grid-cols-1 p-2 space-y-2">
                {links.map(([key, value]) => (
                  <li key={`menu-mobile-item-${key}`} className="text-lg">
                    <NavigationMenuLink asChild>
                      <Link href={value} className="hover:underline">
                        {key}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <nav className="hidden sm:block">
        <ul className="space-y-2">
          {links.map(([key, value]) => (
            <li key={`menu-item-${key}`}>
              <Link href={value} className="hover:underline">
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
