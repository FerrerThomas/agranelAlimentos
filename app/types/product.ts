export interface Product {
  name: string
  price?: number
  prices?: { [key: string]: number }
  isNew?: boolean
  tags?: string[]
}
