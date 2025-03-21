"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Package2, Leaf, Truck, Wallet, BarChart3, Settings, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react"

const FarmerSidebar = () => (
  <div className="space-y-4 py-4">
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-lg font-semibold">Panel de Control</h2>
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <BarChart3 className="h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Package2 className="h-4 w-4" />
          Mis Productos
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Leaf className="h-4 w-4" />
          Herramientas
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Truck className="h-4 w-4" />
          Envíos
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Wallet className="h-4 w-4" />
          Billetera
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Configuración
        </Button>
      </div>
    </div>
  </div>
)

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardLayout sidebarContent={<FarmerSidebar />} userType="farmer">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">Bienvenido de vuelta, Juan Agricultor</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> Nuevo Producto
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="sales">Ventas</TabsTrigger>
            <TabsTrigger value="wallet">Billetera</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
                  <Package2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">S/. 45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% respecto al mes anterior</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pedidos Activos</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">4 pendientes de envío</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Productos Activos</CardTitle>
                  <Leaf className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">2 con bajo stock</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Balance Disponible</CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">S/. 12,450.00</div>
                  <p className="text-xs text-muted-foreground">Límite de crédito: S/. 20,000</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Resumen de Ventas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                    Gráfico de ventas aquí
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Productos Más Vendidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Papas Canchan</p>
                        <Progress value={84} />
                      </div>
                      <div className="ml-4 text-sm text-green-600">+84%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Camote Amarillo</p>
                        <Progress value={72} />
                      </div>
                      <div className="ml-4 text-sm text-green-600">+72%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Yuca Blanca</p>
                        <Progress value={56} />
                      </div>
                      <div className="ml-4 text-sm text-green-600">+56%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Últimos Pedidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pedido</TableHead>
                        <TableHead>Producto</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Monto</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>#12345</TableCell>
                        <TableCell>Papas Canchan</TableCell>
                        <TableCell>
                          <Badge>En Proceso</Badge>
                        </TableCell>
                        <TableCell className="text-right">S/. 1,234.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#12344</TableCell>
                        <TableCell>Camote Amarillo</TableCell>
                        <TableCell>
                          <Badge variant="outline">Enviado</Badge>
                        </TableCell>
                        <TableCell className="text-right">S/. 567.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Nuevo pedido recibido</p>
                        <p className="text-xs text-muted-foreground">Hace 5 minutos</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Actualización de stock</p>
                        <p className="text-xs text-muted-foreground">Hace 15 minutos</p>
                      </div>
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            {/* Contenido de la pestaña Productos */}
          </TabsContent>

          <TabsContent value="sales" className="space-y-4">
            {/* Contenido de la pestaña Ventas */}
          </TabsContent>

          <TabsContent value="wallet" className="space-y-4">
            {/* Contenido de la pestaña Billetera */}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

