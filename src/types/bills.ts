export interface billsProviderType {
  code: string
  image: string
  limits: {
    max: number
    min: number
  }
  name: string
  product: string
  service: string
}
