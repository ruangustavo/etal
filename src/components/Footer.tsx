import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Button } from './Button'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo />

        <div>
          <p className="mt-6 text-base text-slate-500 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} ETAL Direitos
            reservados.
          </p>

          <p className="text-slate-500">
            Site desenvolvido por{' '}
            <Image
              src="https://github.com/ruangustavo.png"
              alt="Imagem de Ruan Gustavo"
              className="mx-1 inline-block size-6 rounded-full"
              width="42"
              height="42"
            />
            <a
              href="https://www.linkedin.com/in/ruan-gustavo/"
              target="_blank"
              className="text-green-800 underline decoration-green-800 underline-offset-[6px]"
            >
              @ruangustavo
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
