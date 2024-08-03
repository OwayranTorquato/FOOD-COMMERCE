import { useCart } from '../../../hooks/UseCart'
import { TableDesktop } from './TableDesktop'

export function Table() {
  const { cart } = useCart()

  if (cart.length === 0)
    return <h1>Ops! Parece que você não incluiu nenhum item no carrinho, peça já!</h1>
  return <TableDesktop/>
}
