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
import filipeImage from '@/images/avatars/filipe.jpg'
import pabloImage from '@/images/avatars/pablo.jpeg'
import aluisioIgorImage from '@/images/avatars/aluisioigor.png'
import isisOliveiraImage from '@/images/avatars/isisoliveira.png'
import sabrinaAquino from '@/images/avatars/sabrinaaquino.jpeg'
import talvacyChavesImage from '@/images/avatars/talvacychaves.jpeg'
import thiagoLimaImage from '@/images/avatars/thiagolima.png'
import marianaQueirozImage from '@/images/avatars/marianaqueiroz.png'
import henriqueImage from '@/images/avatars/henrique.jpeg'

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
        role: 'Introdução ao desenvolvimento de jogos com Game Maker',
        description:
          'Aprenda conceitos básicos de game design, etapas do processo criativo no desenvolvimento de jogos, GML (Game Maker Language) e participe da criação de um game de navinha de forma coletiva.',
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
    dateTime: '28 de novembro',
    speakers: [
      {
        name: 'Thiago Lima',
        role: 'CEO da SolarZ',
        description: 'Conferência de Abertura',
        image: thiagoLimaImage,
      },
      {
        name: 'Aluísio Igor Rêgo Fontes',
        role: 'Coordenador do NADIC e professor',
        description: 'Mesa redonda - Talentos extraordinários',
        image: aluisioIgorImage,
      },
      {
        name: 'Talvacy Chaves de Freitas',
        role: 'Padre e professor',
        description:
          'A inteligência artificial (IA) no ensino superior: benefícios e dilema éticos na/para a pesquisa',
        image: talvacyChavesImage,
      },
      {
        name: 'Mariana Queiroz',
        role: 'Engenheira de Dados',
        description:
          'Para além das telas: como Dados e IA redefinem o mundo real',
        image: marianaQueirozImage,
      },
      {
        name: 'Isis Oliveira',
        role: 'Engenheira de Dados',
        description:
          'Para além das telas: como Dados e IA redefinem o mundo real',
        image: isisOliveiraImage,
      },
      {
        name: 'Sabrina Aquino',
        role: 'Developer Advocate',
        description:
          'Para além das telas: como Dados e IA redefinem o mundo real',
        image: sabrinaAquino,
      },
      {
        name: 'Carlos Henrique Nascimento Cordeiro',
        role: 'Professor',
        description: 'Simulações Computacionais para Problemas de Física',
        image: henriqueImage,
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
