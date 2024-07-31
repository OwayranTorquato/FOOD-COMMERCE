//Define o contrato da função, parâmetros e tipos específicos
interface HeadProps {
  title: string
  description?: string
}

//Ajuste de títulos e descrições
export function Head({ title, description = '' }: HeadProps) {
  document.title = `Food Commerce | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}
