"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ShoppingCart, Heart, Truck, Clock, Settings, Search } from "lucide-react"

const BuyerSidebar = () => (
  <div className="space-y-4 py-4">
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-lg font-semibold">Panel de Control</h2>
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <ShoppingCart className="h-4 w-4" />
          Mis Compras
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Truck className="h-4 w-4" />
          Seguimiento
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Heart className="h-4 w-4" />
          Favoritos
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Configuración
        </Button>
      </div>
    </div>
  </div>
)

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardLayout sidebarContent={<BuyerSidebar />} userType="buyer">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Mis Compras</h2>
            <p className="text-muted-foreground">Bienvenido de vuelta, Carlos Comprador</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Search className="mr-2 h-4 w-4" /> Explorar Productos
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="active">Pedidos Activos</TabsTrigger>
            <TabsTrigger value="history">Historial</TabsTrigger>
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pedidos Activos</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">2 en camino</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Gastado</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">S/. 12,450.00</div>
                  <p className="text-xs text-muted-foreground">Este mes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Productos Favoritos</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">3 con ofertas</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Envíos Pendientes</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Llegada estimada: 2 días</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Pedidos Activos</CardTitle>
                <CardDescription>Tus pedidos en proceso y envío</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Pedido</TableHead>
                      <TableHead>Producto</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>#45678</TableCell>
                      <TableCell>Papas Canchan (50kg)</TableCell>
                      <TableCell>2024-02-20</TableCell>
                      <TableCell>
                        <Badge>En Camino</Badge>
                      </TableCell>
                      <TableCell className="text-right">S/. 125.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>#45677</TableCell>
                      <TableCell>Camote Amarillo (30kg)</TableCell>
                      <TableCell>2024-02-19</TableCell>
                      <TableCell>
                        <Badge variant="outline">Procesando</Badge>
                      </TableCell>
                      <TableCell className="text-right">S/. 75.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Productos Frecuentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Papas Canchan</p>
                        <Progress value={75} />
                      </div>
                      <div className="ml-4 text-sm text-green-600">12 pedidos</div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Camote Amarillo</p>
                        <Progress value={45} />
                      </div>
                      <div className="ml-4 text-sm text-green-600">8 pedidos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Agricultores Favoritos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Granja El Valle</p>
                        <p className="text-xs text-muted-foreground">15 compras realizadas</p>
                      </div>
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Finca Verde</p>
                        <p className="text-xs text-muted-foreground">8 compras realizadas</p>
                      </div>
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {/* Contenido de la pestaña Pedidos Activos */}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {/* Contenido de la pestaña Historial */}
          </TabsContent>

          <TabsContent value="favorites" className="space-y-4">
            {/* Contenido de la pestaña Favoritos */}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

