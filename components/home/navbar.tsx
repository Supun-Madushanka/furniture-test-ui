"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About Us", href: "/about" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Contact", href: "/contact" },
];

const cartCount = 2;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            Natura.
          </span>
          <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-muted-foreground">
            Furniture
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors px-4 py-1.5 rounded-full ${
                    isActive
                      ? "bg-olive text-white font-semibold"
                      : "font-normal text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-1">

          {/* Search - hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex text-muted-foreground hover:text-foreground"
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Profile - hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex text-muted-foreground hover:text-foreground"
          >
            <User className="w-5 h-5" />
          </Button>

          {/* Cart - always visible */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-olive text-white border-0 rounded-full">
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* Hamburger - visible on mobile/tablet, hidden on desktop */}
          <Sheet>
            <SheetTrigger className="lg:hidden p-2 text-muted-foreground hover:text-foreground">
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-10 px-6">
              <SheetTitle className="flex flex-col leading-none mb-8">
                <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                  Natura.
                </span>
                <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-muted-foreground">
                  Furniture
                </span>
              </SheetTitle>
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-base transition-colors ${
                          isActive
                            ? "font-semibold text-olive"
                            : "font-normal text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>

        </div>
      </nav>
    </header>
  );
}