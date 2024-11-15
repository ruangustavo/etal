import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-2xl font-bold tracking-tighter text-green-600 sm:text-3xl">
            <span className="sr-only">ETAL - </span> Encontro de Tecnologia do
            Alto Oeste Potiguar 2024
          </h1>
          <div className="mt-6 space-y-6 font-display text-lg tracking-tight text-green-900 sm:text-2xl">
            <p>
              Junte-se a nós de 27 a 29 de novembro de 2024 para uma série de
              eventos que celebram 15 anos de inovação, crescimento e avanços
              tecnológicos no IFRN.
            </p>

            <p>Explore nossa programação, que inclui:</p>

            <ul className="list-disc *:pl-4">
              <li>Minicursos imersivos em diferentes áreas</li>
              <li>Competição de jogos envolvente</li>
              <li>Apresentações e intervenções culturais estimulantes </li>
              <li>Mesa redonda para discussão de tópicos relevantes</li>
              <li>Cerimônia de abertura e encerramento com premiações</li>
            </ul>

            <p>
              Não perca a oportunidade de se envolver, aprender e ser inspirado
              pelas transformações que estão ocorrendo no IFRN. Inscreva-se
              agora e faça parte dessa celebração memorável.
              {/* Adicionar link para inscrição aqui */}
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Se inscrever
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Localização', 'Pau dos Ferros'],
              ['Data', '27 a 29 de novembro de 2024'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-green-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
