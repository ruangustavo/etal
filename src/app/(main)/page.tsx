import { Hackathon } from '@/components/Hackathon'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Day, Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Games } from '@/components/Games'

import caioImage from '@/images/avatars/caio.jpeg'
import adryanImage from '@/images/avatars/adryan.jpg'
import caiorafaelImage from '@/images/avatars/caiorafael.jpeg'
import jonhyImage from '@/images/avatars/jonhy.jpeg'
import anaImage from '@/images/avatars/ana.jpeg'
import filipeImage from '@/images/avatars/filipe.jpg'
import keyllyImage from '@/images/avatars/keylly.png'
import rodolfoImage from '@/images/avatars/rodolfo.png'
import pabloImage from '@/images/avatars/pablo.jpeg'
import thiagoImage from '@/images/avatars/thiago.jpeg'
import eliaquimImage from '@/images/avatars/eliaquim.jpeg'
import atsonImage from '@/images/avatars/atson.jpg'
import walterImage from '@/images/avatars/walter.png'
import { Button } from '@/components/Button'

const minicursosDays: Day[] = [
  {
    name: 'Minicursos',
    date: '26 a 27 de novembro',
    dateTime: '08 às 12',
    speakers: [
      {
        name: 'Pablo Rodrigo Bernardino de Lira - UX/UI Designer',
        role: 'O Futuro da Experiência com IA: Uso, Como a Tecnologia Está Redefinindo Nossas Interações',
        description:
          'Neste minicurso, os participantes conhecerão os fundamentos das interfaces inteligentes, os padrões de comportamento humano diante da IA e as tendências que moldarão o futuro da experiência digital.',
        image: pabloImage,
      },
      {
        name: 'Caio Enzo Bessa de Oliveira - DEV',
        role: 'Desenvolvendo jogos com Game Maker',
        description:
          'Conheça as etapas da criação de um jogo e desenvolva o seu próprio protótipo com a engine Game Maker.',
        image: caioImage,
      },
      {
        name: 'Adryan - DEV',
        role: 'Processamento de imagens com React Native e OpenCV',
        description:
          'Desenvolva uma aplicação completa, com mobile e back-end focados no processamento de imagens.',
        image: adryanImage,
      },
      {
        name: 'Caio Rafael da Rocha Gomes - DEV',
        role: 'Desenvolvimento de aplicações web com React e Nextjs',
        description:
          'Aprenda os fundamentos de React e Next.js e construa sua primeira aplicação web moderna. Neste minicurso, você entenderá como funcionam componentes, hooks, rotas, requisições e a estrutura de um projeto Next.js, explorando renderização no servidor e boas práticas.',
        image: caiorafaelImage,
      },
      {
        name: 'Jonhy Everton Silva Gomes de Santana - DEV',
        role: 'Introdução ao React Native com Expo',
        description:
          'Este minicurso prático ensina a criar a interface de um aplicativo simples utilizando React Native e Expo. Vamos explorar os componentes fundamentais para estrutura (View), texto (Text) e imagens (Image), combinando teoria e prática para construir um pequeno cartão de perfil.',
        image: jonhyImage,
      },
    ],
  },
]

const palestrasDays: Day[] = [
  {
    name: 'Palestras',
    date: '27 a 28 de novembro',
    dateTime: '',
    speakers: [
      {
        name: 'Rodolfo Carneiro',
        role: 'Professor e cientista de dados',
        description:
          'Palestra: Da transparência à IA generativa: o papel fundamental da governança de dados nessa jornada',
        image: rodolfoImage,
      },
      {
        name: 'Keylly Eyglys',
        role: 'Professor e pesquisador em IA',
        description:
          'Palestra: Como a IA Está Transformando o Mundo das Imagens',
        image: keyllyImage,
      },
      {
        name: 'Ana Alice',
        role: 'Desenvolvedora',
        description:
          'Palestra: Workshop Seleção Internacional e Atualização em Linkedin',
        image: anaImage,
      },
      {
        name: 'Walter Lopes',
        role: 'Professor e Coordenador-Geral de Infraestrutura Tecnológica na Presidência da República',
        description:
          'Palestra: Transformação Digital Segura: O Papel da Inteligência artificial no mundo DevSecOps em Instituições Públicas.',
        image: walterImage,
      },
      {
        name: 'Thiago Henrique',
        role: 'Professor, desenvolvedor e engenheiro de dados',
        description:
          'Mesa-redonda: Impacto da IA na área de Computador e Sociedade',
        image: thiagoImage,
      },
      {
        name: 'Eliaquim Timóteo',
        role: 'Professor',
        description:
          'Mesa-redonda: Impacto da IA na área de Computador e Sociedade',
        image: eliaquimImage,
      },
      {
        name: 'Atson Santos',
        role: 'Professor',
        description:
          'Mesa-redonda: Impacto da IA na área de Computador e Sociedade',
        image: atsonImage,
      },
    ],
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      {/* <Hackathon /> */}
      <Speakers
        title="Palestras"
        description="Conheça os profissionais que estarão conosco no evento"
        days={palestrasDays}
      />
      <Speakers
        title="Minicursos"
        description="Conheça os profissionais que estarão conosco no evento"
        days={minicursosDays}
      />
      <Games />
      {/* <Sponsors /> */}
      {/* <Newsletter />  */}
    </>
  )
}
