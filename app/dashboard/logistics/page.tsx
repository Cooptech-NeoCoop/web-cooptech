"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Truck, Calendar, Clock, MapPin, Settings, BarChart3, AlertCircle } from "lucide-react"

const LogisticsSidebar = () => (
  <div className="space-y-4 py-4">
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-lg font-semibold">Panel de Control</h2>
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <BarChart3 className="h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Truck className="h-4 w-4" />
          Envíos Activos
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Calendar className="h-4 w-4" />
          Programación
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <MapPin className="h-4 w-4" />
          Rutas
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Configuración
        </Button>
      </div>
    </div>
  </div>
)

export default function LogisticsDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <DashboardLayout sidebarContent={<LogisticsSidebar />} userType="logistics">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Panel de Control</h2>
            <p className="text-muted-foreground">Bienvenido de vuelta, Transportes Rápidos S.A.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2">
              <AlertCircle className="h-4 w-4" />
              Solicitudes Urgentes (3)
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 gap-2">
              <Calendar className="h-4 w-4" />
              Programar Envíos
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="active">Envíos Activos</TabsTrigger>
            <TabsTrigger value="scheduled">Programados</TabsTrigger>
            <TabsTrigger value="routes">Rutas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Envíos Activos</CardTitle>
                  <Truck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">8 entregas hoy</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Envíos Programados</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">Próximos 7 días</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.5h</div>
                  <p className="text-xs text-muted-foreground">Por entrega</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rutas Activas</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <p className="text-xs text-muted-foreground">12 vehículos en ruta</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Solicitudes de Envío en Tiempo Real</CardTitle>
                  <CardDescription>Últimas solicitudes recibidas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Origen</TableHead>
                        <TableHead>Destino</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>#RT001</TableCell>
                        <TableCell>Huancayo</TableCell>
                        <TableCell>Lima</TableCell>
                        <TableCell>Urgente</TableCell>
                        <TableCell>
                          <Badge className="bg-red-500">Pendiente</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#RT002</TableCell>
                        <TableCell>Chincha</TableCell>
                        <TableCell>Ica</TableCell>
                        <TableCell>Normal</TableCell>
                        <TableCell>
                          <Badge variant="outline">En Proceso</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Rendimiento de Rutas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Lima - Huancayo</p>
                        <Progress value={92} />
                      </div>
                      <div className="ml-4 text-sm text-green-600">92%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Lima - Ica</p>
                        <Progress value={88} />
                      </div>
                      <div className="ml-4 text-sm text-green-600">88%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Ica - Arequipa</p>
                        <Progress value={76} />
                      </div>
                      <div className="ml-4 text-sm text-green-600">76%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {/* Contenido de la pestaña Envíos Activos */}
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            {/* Contenido de la pestaña Envíos Programados */}
          </TabsContent>

          <TabsContent value="routes" className="space-y-4">
            {/* Contenido de la pestaña Rutas */}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

