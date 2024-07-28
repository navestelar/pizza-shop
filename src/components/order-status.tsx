import { tv } from 'tailwind-variants'

export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

const statusColors = tv({
  base: 'size-2 rounded-full',
  variants: {
    status: {
      pending: 'bg-slate-400',
      canceled: 'bg-rose-500',
      processing: 'bg-amber-500',
      delivering: 'bg-amber-500',
      delivered: 'bg-emerald-500',
    },
  },
})

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={statusColors({ status })} />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
