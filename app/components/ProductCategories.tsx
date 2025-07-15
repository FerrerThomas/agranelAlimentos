"use client"
import ProductTable from "./ProductTable"
import { products } from "../data/products"

export default function ProductCategories() {
  const categories = Object.keys(products)

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <ProductTable key={category} category={category} products={products[category]} />
      ))}
    </div>
  )
}
