import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, CreditCard, Truck } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CreditCard className="w-5 h-5" />
                Formas de Pago
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm">
                <li>• Efectivo</li>
                <li>• Transferencia</li>
                <li>• Débito</li>
                <li>• Crédito</li>
                <li>• Mercado Pago</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Truck className="w-5 h-5" />
                Envíos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="font-semibold text-green-600 mb-2">GRATIS en compras superiores a $40.000</p>
              <p className="mb-2">$2.000 para compras inferiores a $40.000</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5" />
                Horarios de Envío
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                <strong>Lunes a Viernes:</strong> 16 a 20hs
              </p>
              <p>
                <strong>Sábados:</strong> 9 a 12hs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="w-5 h-5" />
                Zonas y Retiro
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2">
                <strong>Zonas de envío:</strong>
              </p>
              <p className="mb-3">
                La Plata, Berisso, Ensenada, Brandsen, Villa Elisa, Arturo Seguí, M. Romero, Arana, Villa Elvira
              </p>
              <p>
                <strong>PICKUP - RETIRO:</strong>
              </p>
              <p>Calle 41 n°1635 e/27 y 28</p>
              <p>(9 a 16hs)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  )
}
