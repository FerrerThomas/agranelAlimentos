"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus } from "lucide-react"
import { useCart } from "../context/CartContext"
import type { Product } from "../types/product"

interface ProductTableProps {
  category: string
  products: Product[]
}

export default function ProductTable({ category, products }: ProductTableProps) {
  const { addToCart } = useCart()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const [selectedWeights, setSelectedWeights] = useState<{ [key: string]: string }>({})

  // Inicializar todas las cantidades en 0
  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {}
    products.forEach((_, index) => {
      initialQuantities[index] = 0
    })
    setQuantities(initialQuantities)
  }, [products])

  const handleQuantityChange = (productIndex: number, quantity: number, product: Product) => {
    const newQuantity = Math.max(0, quantity)
    setQuantities((prev) => ({
      ...prev,
      [productIndex]: newQuantity,
    }))

    // Si la cantidad es mayor a 0, agregar automáticamente al carrito
    if (newQuantity > 0) {
      handleAddToCart(product, productIndex, newQuantity)
    }
  }

  const handleWeightChange = (productIndex: number, weight: string) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productIndex]: weight,
    }))
  }

  const handleAddToCart = (product: Product, productIndex: number, quantity?: number) => {
    const finalQuantity = quantity || quantities[productIndex] || 1

    if (product.prices && Object.keys(product.prices).length > 1 && !selectedWeights[productIndex]) {
      alert("Por favor selecciona un peso/presentación")
      return
    }

    const weight = selectedWeights[productIndex] || Object.keys(product.prices || { unit: product.price })[0]
    const price = product.prices ? product.prices[weight] : product.price

    addToCart({
      id: `${product.name}-${weight}`,
      name: product.name,
      weight,
      price,
      quantity: finalQuantity,
    })
  }

  const getWeightColumns = () => {
    const allWeights = new Set<string>()
    products.forEach((product) => {
      if (product.prices) {
        Object.keys(product.prices).forEach((weight) => allWeights.add(weight))
      }
    })
    return Array.from(allWeights).sort((a, b) => {
      // Ordenar por peso: 250g, 500g, 1kg, etc.
      const getNumericValue = (weight: string) => {
        if (weight.includes("250")) return 250
        if (weight.includes("500")) return 500
        if (weight.includes("1kg")) return 1000
        if (weight.includes("800")) return 800
        return 0
      }
      return getNumericValue(a) - getNumericValue(b)
    })
  }

  const weightColumns = getWeightColumns()
  const hasMultipleWeights = weightColumns.length > 1

  const getBadgeVariant = (tag: string) => {
    if (tag.toLowerCase().includes("vegano")) {
      return "default" // Usaremos CSS personalizado para el color
    }
    if (tag.toLowerCase().includes("sin tacc")) {
      return "secondary" // Usaremos CSS personalizado para el color
    }
    return "secondary"
  }

  const getBadgeClassName = (tag: string) => {
    if (tag.toLowerCase().includes("vegano")) {
      return "bg-teal-500 text-white hover:bg-teal-600"
    }
    if (tag.toLowerCase().includes("sin tacc")) {
      return "bg-orange-500 text-white hover:bg-orange-600"
    }
    return ""
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-slate-700 text-white py-3 px-4 md:py-4 md:px-6">
        <h2 className="text-lg md:text-xl font-bold text-center tracking-wide">{category.replace(/_/g, " ")}</h2>
      </div>

      {/* Table Header */}
      <div className="bg-gray-100 border-b">
        <div className="flex items-center py-1.5 px-2 md:py-2 md:px-4 font-semibold text-xs md:text-sm">
          <div className="flex-1">PRODUCTO</div>
          {hasMultipleWeights ? (
            <div className="flex gap-1 md:gap-4">
              {weightColumns.map((weight) => (
                <div key={weight} className="w-12 md:w-20 text-center text-xs">
                  {weight}
                </div>
              ))}
            </div>
          ) : (
            <div className="w-20 md:w-32 text-center">
              PRECIO
              <div className="text-xs font-normal hidden md:block">valor x unidad</div>
            </div>
          )}
          <div className="w-20 md:w-28 text-center">AGREGAR</div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex items-center py-1.5 px-2 md:py-2 md:px-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            {/* Product Name */}
            <div className="flex-1 pr-2 md:pr-4">
              <div className="flex items-start gap-1 md:gap-2 flex-wrap">
                <span className="text-xs md:text-sm leading-tight">{product.name}</span>
                {product.isNew && (
                  <Badge variant="destructive" className="text-xs shrink-0 px-1 py-0 h-4 md:h-auto md:px-2 md:py-1">
                    Nuevo!!
                  </Badge>
                )}
                {product.tags &&
                  product.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant={getBadgeVariant(tag)}
                      className={`text-xs shrink-0 px-1 py-0 h-4 md:h-auto md:px-2 md:py-1 ${getBadgeClassName(tag)}`}
                    >
                      {tag}
                    </Badge>
                  ))}
              </div>
            </div>

            {/* Pricing */}
            {hasMultipleWeights && product.prices ? (
              <div className="flex gap-1 md:gap-4">
                {weightColumns.map((weight) => (
                  <div key={weight} className="w-12 md:w-20 text-center">
                    {product.prices?.[weight] ? (
                      <span className="text-xs md:text-sm font-semibold text-slate-700">
                        ${product.prices[weight].toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-20 md:w-32 text-center">
                <span className="text-sm md:text-base font-bold text-slate-700">
                  ${(product.price || Object.values(product.prices || {})[0]).toLocaleString()}
                </span>
              </div>
            )}

            {/* Add to Cart Controls */}
            <div className="w-20 md:w-28 flex justify-end">
              <div className="flex flex-col gap-0.5 md:gap-1">
                {/* Weight Selection */}
                {product.prices && Object.keys(product.prices).length > 1 && (
                  <Select
                    value={selectedWeights[index] || ""}
                    onValueChange={(value) => handleWeightChange(index, value)}
                  >
                    <SelectTrigger className="h-5 md:h-6 text-xs w-16 md:w-20">
                      <SelectValue placeholder="Peso" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(product.prices).map(([weight, price]) => (
                        <SelectItem key={weight} value={weight}>
                          {weight}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {/* Quantity Controls */}
                <div className="flex items-center gap-0.5 md:gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-5 w-5 md:h-6 md:w-6 p-0 bg-transparent"
                    onClick={() => handleQuantityChange(index, quantities[index] - 1, product)}
                    disabled={quantities[index] <= 0}
                  >
                    <Minus className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  </Button>
                  <div className="w-8 h-5 md:w-10 md:h-6 flex items-center justify-center text-xs font-medium bg-gray-50 border rounded">
                    {quantities[index] || 0}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-5 w-5 md:h-6 md:w-6 p-0 bg-slate-700 hover:bg-slate-800 text-white"
                    onClick={() => handleQuantityChange(index, quantities[index] + 1, product)}
                  >
                    <Plus className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
