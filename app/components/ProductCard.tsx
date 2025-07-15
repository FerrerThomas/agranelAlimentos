"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Minus } from "lucide-react"
import { useCart } from "../context/CartContext"
import type { Product } from "../types/product"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (product.prices && Object.keys(product.prices).length > 1 && !selectedWeight) {
      alert("Por favor selecciona un peso/presentación")
      return
    }

    const weight = selectedWeight || Object.keys(product.prices || { unit: product.price })[0]
    const price = product.prices ? product.prices[weight] : product.price

    addToCart({
      id: `${product.name}-${weight}`,
      name: product.name,
      weight,
      price,
      quantity,
    })

    setQuantity(1)
    setSelectedWeight("")
  }

  const getPrice = () => {
    if (product.prices) {
      if (selectedWeight) {
        return product.prices[selectedWeight]
      }
      return Object.values(product.prices)[0]
    }
    return product.price
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-medium leading-tight">{product.name}</CardTitle>
          {product.isNew && (
            <Badge variant="destructive" className="text-xs">
              Nuevo!!
            </Badge>
          )}
        </div>
        {product.tags && (
          <div className="flex flex-wrap gap-1">
            {product.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {product.prices && Object.keys(product.prices).length > 1 ? (
          <Select value={selectedWeight} onValueChange={setSelectedWeight}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar peso/presentación" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(product.prices).map(([weight, price]) => (
                <SelectItem key={weight} value={weight}>
                  {weight} - ${price.toLocaleString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <div className="text-lg font-bold text-green-600">
            ${getPrice().toLocaleString()}
            {product.prices && Object.keys(product.prices)[0] !== "unit" && (
              <span className="text-sm font-normal text-gray-600 ml-1">x {Object.keys(product.prices)[0]}</span>
            )}
          </div>
        )}

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            <Minus className="w-4 h-4" />
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
            className="w-20 text-center"
            min="1"
          />
          <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <Button onClick={handleAddToCart} className="w-full bg-green-600 hover:bg-green-700">
          Agregar al Carrito
        </Button>
      </CardContent>
    </Card>
  )
}
