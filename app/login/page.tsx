"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Loader2, Store, Truck, Users } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("buyer")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating login - In production this would validate credentials
    setTimeout(() => {
      setIsLoading(false)
      // Redirect based on role type
      const role = activeTab || "buyer"
      window.location.href = `/dashboard/${role}`
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Iniciar sesión</CardTitle>
            <CardDescription>Selecciona tu tipo de cuenta para continuar</CardDescription>
          </CardHeader>
          <Tabs defaultValue="buyer" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="buyer" className="flex flex-col gap-2 py-4">
                <Users className="h-5 w-5" />
                Comprador
              </TabsTrigger>
              <TabsTrigger value="farmer" className="flex flex-col gap-2 py-4">
                <Store className="h-5 w-5" />
                Agricultor
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex flex-col gap-2 py-4">
                <Truck className="h-5 w-5" />
                Operador
              </TabsTrigger>
            </TabsList>

            {["buyer", "farmer", "logistics"].map((role) => (
              <TabsContent key={role} value={role}>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`${role}-email`}>Correo electrónico</Label>
                      <Input id={`${role}-email`} type="email" placeholder="juan@ejemplo.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${role}-password`}>Contraseña</Label>
                      <Input id={`${role}-password`} type="password" required />
                    </div>

                    <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Iniciando sesión...
                        </>
                      ) : (
                        "Iniciar sesión"
                      )}
                    </Button>
                    <p className="text-sm text-gray-600 text-center">
                      ¿No tienes una cuenta?{" "}
                      <Link href="/register" className="text-green-600 hover:underline">
                        Regístrate
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </div>
  )
}

