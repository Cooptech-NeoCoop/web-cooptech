"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-600">
            Cooptech
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/marketplace" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Productos</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/logistics" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Logística</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Nosotros</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/marketplace" onClick={() => setIsOpen(false)}>
                  Productos
                </Link>
                <Link href="/logistics" onClick={() => setIsOpen(false)}>
                  Logística
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  Nosotros
                </Link>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Iniciar Sesión
                  </Link>
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    Registrarse
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

