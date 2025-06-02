import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Leaf,
  Truck,
  ShoppingBag,
  Shield,
  Brain,
  Coins,
  BarChart3,
  FileCheck,
  ArrowRight,
  TrendingUp,
  Zap,
} from "lucide-react"
import Link from "next/link"
import './page.css'
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="holi">
          <section className="text-center" >
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{color: "white"}}>Bienvenido a Cooptech</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: "white"}}>
              Ecosistema Neo Cooperativo: Transformando la Agroexportación Peruana.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/marketplace">Comenzar ahora</Link>
              </Button>
              {/* <Button asChild size="lg" variant="outline">
                <Link href="/about">Conocer más</Link>
              </Button> */}
            </div>
          </section>
        </div>
        <br/>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Agricultores</h2>
              <p className="text-gray-600">
                Vende tus productos directamente a compradores locales e internacionales. Gestiona tu inventario y
                recibe pagos de forma segura. Aumenta tu participación del 20% al 40-55% del valor final del producto.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <ShoppingBag className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Agroexportadores</h2>
              <p className="text-gray-600">
                Encuentra productos frescos de calidad certificada. Cuenta con la trazabilidad de tus transacciones y obtén un margen del 15-20% más de ganancia.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16 py-12 bg-gradient-to-r from-green-800 to-green-700 text-white rounded-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900/80 to-green-700/80"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-16 bg-yellow-400 mr-4"></div>
              <h2 className="text-4xl font-extrabold">REVOLUCIONAMOS LA AGROEXPORTACIÓN</h2>
              <div className="h-1 w-16 bg-yellow-400 ml-4"></div>
            </div>
            <p className="text-xl mb-1 max-w-3xl mx-auto text-center font-light">
              <span className="font-semibold text-yellow-300">¿Sabías que</span> la cadena de suministro agrícola
              tradicional está dejando a los exportadores peruanos fuera de la competencia global?{" "}
              <span className="font-semibold text-yellow-300">Cooptech cambia las reglas del juego.</span>
            </p>
            <p className="text-xl mb-1 max-w-3xl mx-auto text-center font-light">Detrás de cada cosecha, un sueño que cultivamos juntos. Empoderamos a los agricultores y transformamos las vidas rurales con IA, blockchain e inclusión financiera, a través de WhatsApp, sin barreras tecnológicas.</p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group">
                <div className="text-5xl font-bold mb-2 text-yellow-300 group-hover:text-white transition-colors">
                  65%
                </div>
                <p className="group-hover:font-medium transition-all">
                  de exportadores sufre inconsistencia en calidad y volumen,{" "}
                  <span className="text-yellow-300 font-medium">¡perdiendo contratos clave!</span>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group">
                <div className="text-5xl font-bold mb-2 text-yellow-300 group-hover:text-white transition-colors">
                  70%
                </div>
                <p className="group-hover:font-medium transition-all">
                  enfrenta interrupciones en sus calendarios de exportación,{" "}
                  <span className="text-yellow-300 font-medium">¡dañando su reputación!</span>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group">
                <div className="text-5xl font-bold mb-2 text-yellow-300 group-hover:text-white transition-colors">
                  40%
                </div>
                <p className="group-hover:font-medium transition-all">
                  pierde oportunidades internacionales por incumplimiento de estándares,{" "}
                  <span className="text-yellow-300 font-medium">¡dejando millones en la mesa!</span>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group">
                <div className="text-5xl font-bold mb-2 text-yellow-300 group-hover:text-white transition-colors">
                  55%
                </div>
                <p className="group-hover:font-medium transition-all">
                  enfrenta sobrecostos logísticos por descoordinación,{" "}
                  <span className="text-yellow-300 font-medium">¡reduciendo márgenes críticos!</span>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20 group">
                <div className="text-5xl font-bold mb-2 text-yellow-300 group-hover:text-white transition-colors">
                  80%
                </div>
                <p className="group-hover:font-medium transition-all">
                  carece de trazabilidad completa,{" "}
                  <span className="text-yellow-300 font-medium">¡cerrándoles las puertas a mercados premium!</span>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 text-green-900">
                <Zap className="h-10 w-10 mb-2" />
                <div className="font-bold text-2xl mb-2">¡DETÉN LAS PÉRDIDAS AHORA!</div>
                <p className="font-medium">Nuestra tecnología revolucionaria resuelve estos problemas de raíz</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold group">
                <Link href="/marketplace" className="flex items-center">
                  DESCUBRE LA SOLUCIÓN
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>*/}
          </div>

          <div className="absolute bottom-0 right-0">
            <TrendingUp className="h-40 w-40 text-white/5" />
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-green-800 mb-4">SOLUCIONES REVOLUCIONARIAS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos un ecosistema agroexportador peruano digital, transparente y sostenible que te conecta directamente a agricultores, asegurando calidad, trazabilidad, inclusión financiera y prosperidad para ambos.
            </p>
          </div>

          {/* Marketplace Digital */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-1 transform transition-all duration-200 hover:shadow-xl">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold">Embajadores y validación local</h3>
              </div>
              {/* <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agroexportadores</h4>
                  <p className="text-gray-700">
                    Plataforma que permite visualizar en tiempo real la oferta disponible, publicar demandas con
                    requisitos específicos y contratar directamente mediante smart contracts que garantizan
                    cumplimiento.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agricultores</h4>
                  <p className="text-gray-700">
                    Acceso a compradores legítimos con precios transparentes que aumentan su participación del 20% al
                    40-55% del valor final del producto.
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Certificación Integral */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-1 transform transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold">Tecnología y gobernanza de DAO</h3>
              </div>
              {/* <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agroexportadores</h4>
                  <p className="text-gray-700">
                    Garantía de que el 100% de los agricultores en la plataforma cumplen estándares mínimos de calidad,
                    con sistema de calificación verificable.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agricultores</h4>
                  <p className="text-gray-700">
                    Capacitación práctica a través de videos personalizados en su idioma (español/quechua) y
                    acompañamiento de "agricultores mentores" para alcanzar estándares de exportación.
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Planificación Predictiva */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-1 transform transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold">Al predictivo</h3>
              </div>
              {/* <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agroexportadores</h4>
                  <p className="text-gray-700">
                    Módulo de predicción que anticipa con 85% de exactitud volúmenes y fechas de cosecha de su red de
                    agricultores, reduciendo incertidumbre en la planificación.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agricultores</h4>
                  <p className="text-gray-700">
                    Recomendaciones personalizadas de cultivo basadas en datos climáticos, tendencias de mercado y
                    precios proyectados, mejorando toma de decisiones.
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Sistema Financiero */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-1 transform transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Coins className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold">Sistema DeFi</h3>
              </div>
              {/* <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agroexportadores</h4>
                  <p className="text-gray-700">
                    Capacidad de pre-financiar producción mediante adelantos garantizados por contratos inteligentes,
                    asegurando volúmenes comprometidos.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agricultores</h4>
                  <p className="text-gray-700">
                    Acceso a microcréditos hasta S/1,000 con 2% de interés mensual, evaluados instantáneamente por IA y
                    respaldados por contratos de venta futuros.
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Logística Coordinada */}
          {/* <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10 transform transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold">Logística Coordinada</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agroexportadores</h4>
                  <p className="text-gray-700">
                    Reducción de 55% en costos logísticos mediante consolidación inteligente de carga y optimización de
                    rutas.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agricultores</h4>
                  <p className="text-gray-700">
                    Acceso a red de puntos de acopio cercanos y transporte coordinado, eliminando barrera logística para
                    pequeños productores.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Trazabilidad Blockchain */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10 transform transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold">Trazabilidad Blockchain</h3>
              </div>
              {/* <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agroexportadores</h4>
                  <p className="text-gray-700">
                    Registro inmutable de cada etapa de producción, desde siembra hasta exportación, cumpliendo
                    exigencias de mercados premium.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Para Agricultores</h4>
                  <p className="text-gray-700">
                    Reconocimiento individual y justo por calidad y prácticas sostenibles, diferenciando su producto en
                    mercados competitivos.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="text-center mb-16 bg-green-50 py-12 rounded-xl">
          <h2 className="text-3xl font-bold text-green-800 mb-6">¿LISTO PARA TRANSFORMAR TU NEGOCIO?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            COOPTECH no es solo un negocio, es una misión. Únete a cientos de agroexportadores y agricultores que ya están revolucionando el comercio agrícola
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
            <Link href="/marketplace">EXPLORAR MARKETPLACE</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}

