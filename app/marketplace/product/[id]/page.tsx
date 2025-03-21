"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  MapPin,
  ShieldCheck,
  Globe,
  FileText,
  User,
  Star,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

// Ejemplo de producto (normalmente vendría de una API o base de datos)
const product = {
  id: 1,
  name: "Papas Canchan",
  scientificName: "Solanum tuberosum",
  farmer: {
    name: "Granja El Valle",
    rating: 4.8,
    reviews: 156,
    location: "Huancayo, Junín",
    phone: "+51 964 123 456",
    email: "contacto@granjaelvalle.com",
    since: "2018",
  },
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
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
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
  description:
    "Papas Canchan de alta calidad, cultivadas en la sierra central del Perú. Ideales para freír y cocinar. Textura harinosa y sabor tradicional.",
  technicalDetails: {
    variety: "Canchan",
    size: "50-80mm",
    color: "Roja",
    dryMatter: "23-25%",
    sugarContent: "< 0.5%",
    defects: "< 2%",
  },
  exportInfo: {
    certifications: ["Global G.A.P.", "HACCP", "ISO 22000"],
    documents: [
      {
        name: "Certificado Fitosanitario",
        url: "#",
      },
      {
        name: "Certificado de Origen",
        url: "#",
      },
      {
        name: "Packing List",
        url: "#",
      },
    ],
    destinations: ["Estados Unidos", "Europa", "Asia"],
    specifications: {
      size: "50-80mm",
      quality: "Premium - 95% calidad exportación",
      packaging: "Cajas de 20kg, pallets fumigados",
    },
    shippingMethods: [
      {
        type: "Marítimo",
        duration: "30-45 días",
        price: 1200,
      },
      {
        type: "Aéreo",
        duration: "3-5 días",
        price: 3500,
      },
    ],
  },
}

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedSaleType, setSelectedSaleType] = useState("retail")
  const [quantity, setQuantity] = useState(product.minimumOrders.retail)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const calculateTotal = () => {
    return (quantity * product.prices[selectedSaleType]).toFixed(2)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Link href="/marketplace" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver al marketplace
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Galería de imágenes */}
          <div className="space-y-4">
            <div className="relative aspect-square">
              <Image
                src={product.images[currentImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative aspect-square ${currentImage === index ? "ring-2 ring-green-600" : ""}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-500 italic mb-4">{product.scientificName}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary">
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="retail" onValueChange={setSelectedSaleType}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="retail">Minorista</TabsTrigger>
                    <TabsTrigger value="wholesale">Mayorista</TabsTrigger>
                    <TabsTrigger value="export">Exportación</TabsTrigger>
                  </TabsList>

                  <TabsContent value="retail">
                    <div className="space-y-4 pt-4">
                      <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">
                          S/. {product.prices.retail}/{product.unit}
                        </p>
                        <Badge variant="outline">
                          Mínimo: {product.minimumOrders.retail} {product.unit}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Cantidad ({product.unit})</label>
                          <Input
                            type="number"
                            min={product.minimumOrders.retail}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Total</label>
                          <Input value={`S/. ${calculateTotal()}`} readOnly />
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Añadir al carrito</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="wholesale">
                    <div className="space-y-4 pt-4">
                      <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">
                          S/. {product.prices.wholesale}/{product.unit}
                        </p>
                        <Badge variant="secondary">
                          Mínimo: {product.minimumOrders.wholesale} {product.unit}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Cantidad ({product.unit})</label>
                          <Input
                            type="number"
                            min={product.minimumOrders.wholesale}
                            step={10}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Total</label>
                          <Input value={`S/. ${calculateTotal()}`} readOnly />
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Solicitar cotización</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="export">
                    <div className="space-y-4 pt-4">
                      <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">
                          S/. {product.prices.export}/{product.unit}
                        </p>
                        <Badge>
                          Mínimo: {product.minimumOrders.export} {product.unit}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Cantidad ({product.unit})</label>
                          <Input
                            type="number"
                            min={product.minimumOrders.export}
                            step={100}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Método de envío</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar método" />
                            </SelectTrigger>
                            <SelectContent>
                              {product.exportInfo.shippingMethods.map((method) => (
                                <SelectItem key={method.type} value={method.type}>
                                  {method.type} ({method.duration})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Documentación disponible
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.exportInfo.documents.map((doc) => (
                            <Button key={doc.name} variant="outline" className="text-sm" asChild>
                              <Link href={doc.url}>
                                <Download className="h-4 w-4 mr-2" />
                                {doc.name}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Solicitar cotización de exportación
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="technical">
                <AccordionTrigger>Especificaciones técnicas</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableBody>
                      {Object.entries(product.technicalDetails).map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium capitalize">{key}</TableCell>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="export">
                <AccordionTrigger>Información de exportación</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Especificaciones</h4>
                      <Table>
                        <TableBody>
                          {Object.entries(product.exportInfo.specifications).map(([key, value]) => (
                            <TableRow key={key}>
                              <TableCell className="font-medium capitalize">{key}</TableCell>
                              <TableCell>{value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Destinos disponibles</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.exportInfo.destinations.map((destination) => (
                          <Badge key={destination} variant="outline">
                            <Globe className="h-4 w-4 mr-1" />
                            {destination}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="farmer">
                <AccordionTrigger>Información del agricultor</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <User className="h-5 w-5" />
                        {product.farmer.name}
                      </CardTitle>
                      <CardDescription>Miembro desde {product.farmer.since}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.farmer.rating}</span>
                        <span className="text-gray-500">({product.farmer.reviews} reseñas)</span>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {product.farmer.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {product.farmer.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {product.farmer.email}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  )
}

