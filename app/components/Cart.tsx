"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { useCart } from "../context/CartContext"

export default function Cart() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const generateWhatsAppMessage = () => {
    const phoneNumber = "5492215753750" // Argentina phone format
    let message = "¡Hola A Granel Alimentos! Quisiera realizar el siguiente pedido:\n\n"

    items.forEach((item) => {
      const subtotal = item.price * item.quantity
      message += `• ${item.quantity}x ${item.name}`
      if (item.weight !== "unit") {
        message += ` (${item.weight})`
      }
      message += ` - $${subtotal.toLocaleString()}\n`
    })

    message += `\nTotal de la compra: $${getTotalPrice().toLocaleString()}\n\n`
    message += "¡Gracias!"

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-slate-700 hover:bg-slate-800 shadow-lg z-50"
            size="lg"
          >
            <ShoppingCart className="w-6 h-6" />
            {getTotalItems() > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {getTotalItems()}
              </Badge>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent className="w-full sm:max-w-lg flex flex-col">
          <SheetHeader>
            <SheetTitle>Carrito de Compras</SheetTitle>
          </SheetHeader>

          <div className="flex-1 flex flex-col mt-6">
            {items.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Tu carrito está vacío</p>
            ) : (
              <>
                <div className="flex-1 space-y-3 overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 p-3 border rounded-lg">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                        {item.weight !== "unit" && <p className="text-xs text-gray-600">{item.weight}</p>}
                        <p className="text-sm font-bold text-slate-700">${item.price.toLocaleString()} c/u</p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 w-7 p-0 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 w-7 p-0 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>

                      <div className="text-right shrink-0 min-w-0">
                        <p className="font-bold text-sm">${(item.price * item.quantity).toLocaleString()}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-1 h-6"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4 shrink-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-xl font-bold text-slate-700">${getTotalPrice().toLocaleString()}</span>
                  </div>

                  <Button
                    onClick={generateWhatsAppMessage}
                    className="w-full bg-slate-700 hover:bg-slate-800"
                    size="lg"
                  >
                    Finalizar Compra por WhatsApp
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
