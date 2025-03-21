import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

interface DashboardLayoutProps {
  children: ReactNode
  sidebarContent: ReactNode
  userType: "farmer" | "buyer" | "logistics"
}

export default function DashboardLayout({ children, sidebarContent, userType }: DashboardLayoutProps) {
  const userTypeLabels = {
    farmer: "Agricultor",
    buyer: "Comprador",
    logistics: "Operador Logístico",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl text-green-600">Cooptech</span>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              {sidebarContent}
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Image src="/placeholder-user.jpg" alt="Avatar" width={32} height={32} className="rounded-full" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuLabel className="text-sm font-normal text-muted-foreground">
                  {userTypeLabels[userType]}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-[250px] flex-col border-r bg-muted/40">
          <div className="flex-1">{sidebarContent}</div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

