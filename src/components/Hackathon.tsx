'use client'

import { useEffect, useId, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import caioImage from '@/images/avatars/caio.jpeg'
import filipeImage from '@/images/avatars/filipe.jpg'
import pabloImage from '@/images/avatars/pablo.jpeg'
import { Button } from './Button'
import { PrizeItem } from './PrizeItem'

interface Speaker {
  name: string
  role: string
  description: string
  image: StaticImageData
}

interface Day {
  name: string
  date: string
  dateTime: string
  speakers: Speaker[]
}

const days: Day[] = [
  {
    name: 'Minicursos',
    date: '28 de novembro de 08 às 12',
    dateTime: '08 às 12',
    speakers: [
      {
        name: 'Filipe de Carvalho Pinto Raulino',
        role: 'Desenvolvedor de Software',
        description:
          'Este minicurso oferece uma introdução aos serviços e ferramentas da Amazon Web Services, ideal para quem deseja aprofundar seu conhecimento na plataforma de nuvem. O curso cobre temas essenciais como conceitos básicos de cloud computing, gerenciamento de identidade e segurança com IAM, opções de armazenamento e bancos de dados, além de automação e gerenciamento de infraestrutura utilizando ferramentas de Infraestrutura como Código',
        image: filipeImage,
      },
      {
        name: 'Pablo Rodrigo Bernardino de Lira',
        role: 'UX/UI Designer',
        description:
          'Desenvolvimento e estruturação de Aplicativos Mobile no Figma. Capacitar os participantes a projetar aplicativos móveis no Figma, desde a concepção inicial até a prototipagem funcional, utilizando as melhores práticas de design e estruturação.',
        image: pabloImage,
      },
      {
        name: 'Caio Enzo Bessa de Oliveira',
        role: 'Desenvolvedor de Software',
        description:
          'Aprenda conceitos básicos de game design, etapas do processo criativo no desenvolvimento de jogos, GML (Game Maker Language) e participe da criação de um game de navinha de forma coletiva.',
        image: caioImage,
      },
    ],
  },
]

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Hackathon() {
  const prizes = [
    { position: 1, amount: 3000 },
    { position: 2, amount: 2000 },
    { position: 3, amount: 1000 },
  ]

  return (
    <section
      id="hackathon"
      aria-labelledby="hackathon-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl"
          >
            Hackathon
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-green-700">
            Uma maratona para criar soluções tecnológicas para problemas reais.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-green-900">
            Premiações:
          </p>
          <ul className="mt-6 space-y-4">
            {prizes.map((prize) => (
              <PrizeItem
                key={prize.position}
                position={prize.position}
                amount={prize.amount}
              />
            ))}
          </ul>
        </div>

        <p className="mt-6 text-lg tracking-tight text-slate-800 sm:text-xl">
          No <strong>hackathon</strong> proposto pela{' '}
          <a
            href="https://solarz.com.br/"
            target="_blank"
            className="text-green-800 underline decoration-green-800 underline-offset-[6px]"
          >
            SolarZ
          </a>
         , os participantes terão a oportunidade de resolver dois desafios focados na inovação no setor de energia solar. 

Em um desafio, os times trabalharão com um conjunto de dados reais (anônimos), abrangendo cerca de 900 mil usinas solares. Esses dados incluem informações como localização, potência, especificações do fabricante e registros detalhados de geração diária desde 1999 até hoje. O objetivo é aplicar ferramentas de <b>análise de dados</b> e <b>inteligência artificial</b> para gerar insights que melhorem o controle e a manutenção das usinas.

No outro desafio, as equipes participantes devem desenvolver soluções de segurança para proteger dados sensíveis armazenados, criando medidas que combinem eficácia e aplicabilidade para seus usuários. No contexto da <b>segurança de dados</b>, o objetivo desta vertente do desafio é encontrar falhas de segurança no serviço Solarz Monitoramento, especialmente focando em falhas do tipo Roubo de Identidade ou Execução Remota.
        </p>

        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSddOc6u0n4-Hkixie2DgOg2AG8djr5ExHS2Z6J2aynjb5s97A/viewform?fbzx=-595398554245114929"
          className="mt-10 w-full border-2 border-green-600 bg-white text-green-600 hover:bg-opacity-10"
          target="_blank"
        >
          Inscrever equipe
        </Button>
      </Container>
    </section>
  )
}
