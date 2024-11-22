import { Hackathon } from '@/components/Hackathon'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Day, Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

import caioImage from '@/images/avatars/caio.jpeg'
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
    date: '28 de novembro das 08h às 12h',
    dateTime: '08 às 12',
    speakers: [
      {
        name: 'Prof. Filipe de Carvalho Pinto Raulino',
        role: 'AWS: Fundamentos e Práticas',
        description:
          'Este minicurso oferece uma introdução aos serviços e ferramentas da Amazon Web Services, ideal para quem deseja aprofundar seu conhecimento na plataforma de nuvem. O curso cobre temas essenciais como conceitos básicos de cloud computing, gerenciamento de identidade e segurança com IAM, opções de armazenamento e bancos de dados, além de automação e gerenciamento de infraestrutura utilizando ferramentas de Infraestrutura como Código.',
        image: filipeImage,
      },
      {
        name: 'Pablo Rodrigo Bernardino de Lira - UX/UI Designer',
        role: 'Desenvolvimento e estruturação de Aplicativos Mobile no Figma',
        description:
          'Aprenda a projetar aplicativos móveis no Figma, desde a concepção inicial até a prototipagem funcional, utilizando as melhores práticas de design e estruturação.',
        image: pabloImage,
      },
      {
        name: 'Caio Enzo Bessa de Oliveira - DEV',
        role: 'Introdução ao desenvolvimento de jogos com Game Maker',
        description:
          'Aprenda conceitos básicos de game design, etapas do processo criativo no desenvolvimento de jogos, GML (Game Maker Language) e participe da criação de um game de navinha de forma coletiva.',
        image: caioImage,
      },
    ],
  },
]

const palestrasDays: Day[] = [
  {
    name: 'Palestras',
    date: '28 a 29 de novembro',
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
        description: 'Para além das telas: como Dados e IA redefinem o mundo real',
        image: marianaQueirozImage,
      },
      {
        name: 'Isis Oliveira',
        role: 'Engenheira de Dados',
        description: 'Para além das telas: como Dados e IA redefinem o mundo real',
        image: isisOliveiraImage,
      },
      {
        name: 'Sabrina Aquino',
        role: 'Developer Advocate',
        description: 'Para além das telas: como Dados e IA redefinem o mundo real',
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
      <Hackathon />
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
      
      {/* <Sponsors /> */}
      {/* <Newsletter />  */}
    </>
  )
}
