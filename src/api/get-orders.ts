import { OrderStatus } from '@/components/order-status'
import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
}

export interface Order {
  orderId: string
  createdAt: string
  status: OrderStatus
  customerName: string
  total: number
}

export interface getOrdersResponse {
  orders: Order[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<getOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
