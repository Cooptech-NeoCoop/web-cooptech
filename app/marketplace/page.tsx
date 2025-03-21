"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MapPin, Calendar, Leaf, Scale, ShieldCheck, Globe, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Datos de ejemplo estandarizados
const products = [
  {
    id: 1,
    name: "Papas Canchan",
    scientificName: "Solanum tuberosum",
    farmer: "Granja El Valle",
    prices: {
      retail: 2.5,
      wholesale: 1.8,
      export: 2.2,
    },
    unit: "kg",
    minimumOrders: {
      retail: 1,
      wholesale: 50,
      export: 1000,
    },
    available: 5000,
    image: "/placeholder.svg",
    category: "Tubérculos",
    subCategory: "Papas",
    region: "Sierra",
    location: "Huancayo, Junín",
    distance: "320",
    salesTypes: ["retail", "wholesale", "export"],
    season: "Todo el año",
    currentStock: 5000,
    certifications: ["Orgánico", "Global G.A.P.", "HACCP"],
    quality: {
      retail: "Primera",
      wholesale: "Primera",
      export: "Premium",
    },
    harvestDate: "2024-02-15",
    storageConditions: "Lugar fresco y seco, 10-15°C",
    exportInfo: {
      certifications: ["Global G.A.P.", "HACCP", "ISO 22000"],
      documents: ["Certificado Fitosanitario", "Certificado de Origen", "Packing List"],
      destinations: ["Estados Unidos", "Europa", "Asia"],
      specifications: {
        size: "50-80mm",
        quality: "Premium - 95% calidad exportación",
        packaging: "Cajas de 20kg, pallets fumigados",
      },
    },
  },
  {
    id: 2,
    name: "Aguacates Hass",
    scientificName: "Persea americana",
    farmer: "Finca Verde",
    prices: {
      retail: 3.8,
      wholesale: 3.2,
      export: 3.5,
    },
    unit: "kg",
    minimumOrders: {
      retail: 1,
      wholesale: 50,
      export: 2000,
    },
    available: 3000,
    image: "/placeholder.svg",
    category: "Frutas",
    subCategory: "Palta",
    region: "Costa",
    location: "Chincha, Ica",
    distance: "150",
    salesTypes: ["retail", "wholesale", "export"],
    season: "Marzo - Agosto",
    currentStock: 3000,
    certifications: ["Global G.A.P.", "HACCP"],
    quality: {
      retail: "Primera",
      wholesale: "Primera",
      export: "Premium",
    },
    harvestDate: "2024-02-10",
    storageConditions: "4-6°C, 85-95% humedad relativa",
    exportInfo: {
      certifications: ["Global G.A.P.", "HACCP", "BRC"],
      documents: ["Certificado Fitosanitario", "Certificado de Origen", "Packing List"],
      destinations: ["Europa", "Asia", "Canadá"],
      specifications: {
        size: "160-238g",
        quality: "Premium - 98% calidad exportación",
        packaging: "Cajas de 4kg, pallets tratados",
      },
    },
  },
]

const categories = {
  Tubérculos: ["Papas", "Camotes", "Yucas"],
  Frutas: ["Palta", "Mango", "Uvas", "Cítricos"],
  Verduras: ["Tomates", "Cebollas", "Zanahorias"],
  Granos: ["Maíz", "Quinua", "Café"],
  Legumbres: ["Frijoles", "Arvejas", "Habas"],
}

const regions = [
  { value: "costa-norte", label: "Costa Norte" },
  { value: "costa-central", label: "Costa Central" },
  { value: "costa-sur", label: "Costa Sur" },
  { value: "sierra-norte", label: "Sierra Norte" },
  { value: "sierra-central", label: "Sierra Central" },
  { value: "sierra-sur", label: "Sierra Sur" },
  { value: "selva-alta", label: "Selva Alta" },
  { value: "selva-baja", label: "Selva Baja" },
]

const certifications = [
  { id: "organic", label: "Orgánico" },
  { id: "globalGAP", label: "Global G.A.P." },
  { id: "haccp", label: "HACCP" },
  { id: "fairtrade", label: "Comercio Justo" },
]

export default function Marketplace() {
  const [filters, setFilters] = useState({
    category: "",
    subCategory: "",
    region: "",
    salesType: "",
    priceRange: [0, 100],
    certifications: [],
    maxDistance: 500,
  })

  const [location, setLocation] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const getSaleTypeBadge = (type: string, product: any) => {
    const isAvailable = product.salesTypes.includes(type)
    if (!isAvailable) return null

    const variants = {
      retail: { style: "outline", label: "Minorista" },
      wholesale: { style: "secondary", label: "Mayorista" },
      export: { style: "default", label: "Exportación" },
    }

    const { style, label } = variants[type]
    const minOrder = product.minimumOrders[type]
    const price = product.prices[type]

    return (
      <TooltipProvider key={type}>
        <Tooltip>
          <TooltipTrigger>
            <Badge variant={style} className="ml-2">
              {label}
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>Mínimo: {minOrder}kg</p>
            <p>Precio: S/. {price}/kg</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5" />
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-[200px] bg-white text-gray-900">
                <SelectValue placeholder="Selecciona tu ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lima">Lima Metropolitana</SelectItem>
                <SelectItem value="callao">Callao</SelectItem>
                <SelectItem value="arequipa">Arequipa</SelectItem>
                <SelectItem value="trujillo">Trujillo</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm">Los precios y disponibilidad varían según tu ubicación</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filtros */}
          <aside className="w-full md:w-72 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="category">
                    <AccordionTrigger>Categoría</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Categoría principal" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.keys(categories).map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {selectedCategory && (
                          <Select
                            value={filters.subCategory}
                            onValueChange={(value) => setFilters({ ...filters, subCategory: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Subcategoría" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories[selectedCategory]?.map((subCategory) => (
                                <SelectItem key={subCategory} value={subCategory}>
                                  {subCategory}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="region">
                    <AccordionTrigger>Región</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {regions.map((region) => (
                          <div key={region.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={region.value}
                              checked={filters.region === region.value}
                              onCheckedChange={() => setFilters({ ...filters, region: region.value })}
                            />
                            <Label htmlFor={region.value}>{region.label}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="certifications">
                    <AccordionTrigger>Certificaciones</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {certifications.map((cert) => (
                          <div key={cert.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={cert.id}
                              checked={filters.certifications.includes(cert.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFilters({
                                    ...filters,
                                    certifications: [...filters.certifications, cert.id],
                                  })
                                } else {
                                  setFilters({
                                    ...filters,
                                    certifications: filters.certifications.filter((c) => c !== cert.id),
                                  })
                                }
                              }}
                            />
                            <Label htmlFor={cert.id}>{cert.label}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="distance">
                    <AccordionTrigger>Distancia máxima</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Slider
                          defaultValue={[500]}
                          max={1000}
                          step={50}
                          onValueChange={(value) => setFilters({ ...filters, maxDistance: value[0] })}
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>0 km</span>
                          <span>{filters.maxDistance} km</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price">
                    <AccordionTrigger>Rango de precio</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Slider
                          defaultValue={[0, 100]}
                          max={100}
                          step={1}
                          onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>S/. {filters.priceRange[0]}</span>
                          <span>S/. {filters.priceRange[1]}</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="salesType">
                    <AccordionTrigger>Tipo de Venta</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="retail"
                            checked={filters.salesType === "retail"}
                            onCheckedChange={() => setFilters({ ...filters, salesType: "retail" })}
                          />
                          <Label htmlFor="retail">Minorista (desde 1kg)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="wholesale"
                            checked={filters.salesType === "wholesale"}
                            onCheckedChange={() => setFilters({ ...filters, salesType: "wholesale" })}
                          />
                          <Label htmlFor="wholesale">Mayorista (desde 50kg)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export"
                            checked={filters.salesType === "export"}
                            onCheckedChange={() => setFilters({ ...filters, salesType: "export" })}
                          />
                          <Label htmlFor="export">Exportación</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {filters.salesType === "export" && (
                    <AccordionItem value="exportRequirements">
                      <AccordionTrigger>Requisitos de Exportación</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="globalGAP"
                              checked={filters.certifications.includes("globalGAP")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFilters({
                                    ...filters,
                                    certifications: [...filters.certifications, "globalGAP"],
                                  })
                                }
                              }}
                            />
                            <Label htmlFor="globalGAP">Global G.A.P</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="haccp"
                              checked={filters.certifications.includes("haccp")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFilters({
                                    ...filters,
                                    certifications: [...filters.certifications, "haccp"],
                                  })
                                }
                              }}
                            />
                            <Label htmlFor="haccp">HACCP</Label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Accordion>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Aplicar filtros</Button>
              </CardFooter>
            </Card>
          </aside>

          {/* Productos */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Buscar productos por nombre, categoría o agricultor..." className="pl-10" />
              </div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a menor</SelectItem>
                  <SelectItem value="distance">Distancia</SelectItem>
                  <SelectItem value="harvest">Fecha de cosecha</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <Link href={`/marketplace/product/${product.id}`}>
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                        {product.certifications.map((cert, index) => (
                          <Badge key={index} variant="secondary" className="bg-white">
                            <ShieldCheck className="h-3 w-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <p className="text-sm text-gray-500 italic">{product.scientificName}</p>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {["retail", "wholesale", "export"].map((type) => getSaleTypeBadge(type, product))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {product.location} • {product.distance} km
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold">
                            Desde S/. {Math.min(...Object.values(product.prices))}/{product.unit}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {product.season}
                          </div>
                          <div className="flex items-center gap-1">
                            <Scale className="h-4 w-4" />
                            {product.quality.export}
                          </div>
                          <div className="flex items-center gap-1">
                            <Leaf className="h-4 w-4" />
                            Stock: {product.currentStock} {product.unit}
                          </div>
                          {product.salesTypes.includes("export") && (
                            <div className="flex items-center gap-1">
                              <Globe className="h-4 w-4" />
                              Exportación
                            </div>
                          )}
                        </div>

                        {product.salesTypes.includes("export") && (
                          <div className="mt-2 p-2 bg-green-50 rounded-md">
                            <div className="flex items-center gap-2 text-sm text-green-700">
                              <FileText className="h-4 w-4" />
                              <span>Documentación de exportación disponible</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Link>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Ver detalles</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

