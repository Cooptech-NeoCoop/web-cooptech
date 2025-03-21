"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Loader2, Store, Truck, Users } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Aquí iría la lógica de registro
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Crear una cuenta</CardTitle>
            <CardDescription>Selecciona tu tipo de cuenta para comenzar</CardDescription>
          </CardHeader>
          <Tabs defaultValue="buyer" className="w-full">
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

            <TabsContent value="buyer">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="buyer-name">Nombre completo</Label>
                    <Input id="buyer-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyer-email">Correo electrónico</Label>
                    <Input id="buyer-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyer-password">Contraseña</Label>
                    <Input id="buyer-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyer-type">Tipo de comprador</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo de comprador" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Minorista</SelectItem>
                        <SelectItem value="wholesale">Mayorista</SelectItem>
                        <SelectItem value="export">Exportador</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creando cuenta...
                      </>
                    ) : (
                      "Crear cuenta"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>

            <TabsContent value="farmer">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmer-name">Nombre completo</Label>
                    <Input id="farmer-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmer-email">Correo electrónico</Label>
                    <Input id="farmer-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmer-password">Contraseña</Label>
                    <Input id="farmer-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farm-name">Nombre de la granja/empresa</Label>
                    <Input id="farm-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farm-location">Ubicación</Label>
                    <Input id="farm-location" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farm-products">Principales productos</Label>
                    <Input id="farm-products" placeholder="Ej: Papas, Maíz, Aguacates" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creando cuenta...
                      </>
                    ) : (
                      "Crear cuenta"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>

            <TabsContent value="logistics">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="logistics-name">Nombre completo</Label>
                    <Input id="logistics-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logistics-email">Correo electrónico</Label>
                    <Input id="logistics-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logistics-password">Contraseña</Label>
                    <Input id="logistics-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Nombre de la empresa</Label>
                    <Input id="company-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-type">Tipo de servicio</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo de servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Distribución Local</SelectItem>
                        <SelectItem value="national">Transporte Nacional</SelectItem>
                        <SelectItem value="international">Logística Internacional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coverage-area">Área de cobertura</Label>
                    <Input id="coverage-area" placeholder="Ej: Lima, Arequipa, Cusco" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creando cuenta...
                      </>
                    ) : (
                      "Crear cuenta"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
          <CardFooter className="flex flex-col space-y-4 mt-4">
            <p className="text-sm text-gray-600 text-center">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Inicia sesión
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

