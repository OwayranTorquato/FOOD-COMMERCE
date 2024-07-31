import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Burgers() {
  //const data = lista de dados dos hambúrgueres
  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Mega',
      description:
        'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Extra Bacon',
      description:
        'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado, queijo e carne.',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]

  console.log('data', data)
  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
    </>
  )
}
