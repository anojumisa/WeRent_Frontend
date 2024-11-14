"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Products"];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Centered brand for mobile */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="/werent-logo.svg"
            width={120}
            height={40}
            alt="WeRent Logo"
            priority
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar content for larger screens */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarBrand>
          <Image
            src="/werent-logo.svg"
            width={120}
            height={40}
            alt="WeRent Logo"
            priority
          />
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right side content: Login button */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile dropdown menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link className="w-full" color="foreground" href={`#${item.toLowerCase()}`} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link className="w-full" color="warning" href="/login" size="lg">
            Login
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
