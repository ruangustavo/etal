import Image, { StaticImageData } from 'next/image'
import { Container } from '@/components/Container'

import mkt from '@/images/games/mkt.jpeg'
import fifa from '@/images/games/fifa.jpeg'
import valorant from '@/images/games/valorant.jpeg'
import { Button } from './Button'

export function Games() {
  return (
    <Container className="block">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="games-title"
          className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl"
        >
          E-sports
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight text-green-700">
          Este é o ponto de encontro para gamers, entusiastas de tecnologia e
          fãs de esportes eletrônicos.
        </p>
      </div>
      <Button
        className="mx-auto mt-8 block max-w-72 text-center"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeNboz_l4uN8EUB3vBs0Oi1kgJb0O5t-LVQ6J-7mkwEezXcSA/viewform"
        target="_blank"
      >
        Participar
      </Button>
      <div className="block">
        <h3 className="mt-8 text-3xl font-semibold tracking-tight text-green-900">
          Mortal Kombat 11
        </h3>
        <div className="mt-6 space-y-6 font-display text-lg tracking-tight text-green-900 sm:text-2xl">
          <p>
            Para participar do campeonato, além da inscrição no ETAL, cada
            competidor deve preencher um formulário específico para o
            campeonato, informando o nome completo, matrícula e o nome que
            deseja ser chamado durante o campeonato.
          </p>
          <p>
            Serão ofertadas apenas 16 vagas, logo, os primeiros 16 competidores
            inscritos estarão dentro do torneio. Caso um competidor desista de
            participar, o próximo a ter realizado a inscrição será o suplente.
          </p>
          <p>
            O campeonato será realizado em duas fases, divididas em dois dias.
          </p>
          <p>
            No primeiro dia ocorrerão as oitavas e quartas de final. Serão 12
            partidas totais com até 8 minutos de jogo (2 minutos para preparação
            e escolha de personagem, 3 rounds de 90 segundos e 30 segundos de
            descanso por round).
          </p>
          <p>
            No segundo dia ocorrerão as semifinais, finais e disputa de terceiro
            lugar. Serão 4 partidas totais com até 12 minutos de jogo (2 minutos
            para preparação e escolha de personagem, 5 rounds de 90 segundos e
            30 segundos de descanso por round).
          </p>
        </div>

        {/* <div className="rounded-lg bg-gray-950 p-2">
          <Image
            className=""
            src={mkt}
            alt={'tabela mortal kombat'}
            priority
            sizes=""
          />
        </div> */}
        <h3 className="mt-8 border-t-2 pt-2 text-3xl font-semibold tracking-tight text-green-900">
          FIFA 2024
        </h3>
        <div className="mt-6 space-y-6 font-display text-lg tracking-tight text-green-900 sm:text-2xl">
          <p>
            Para participar do campeonato, além da inscrição no ETAL, cada
            competidor deve preencher um formulário específico para o
            campeonato, informando o nome completo, matrícula, nome que deseja
            ser chamado durante o campeonato e o time que utilizará durante o
            campeonato. Os times disponíveis para escolha serão apenas os clubes
            e seleções de forma que não será permitida a escolha de times
            especiais ou a troca de time durante o campeonato.
          </p>
          <p>
            Serão ofertadas apenas 16 vagas, logo, os primeiros 16 competidores
            inscritos estarão dentro do torneio. Caso um competidor desista de
            participar, o próximo a ter realizado a inscrição será o suplente.
          </p>
          <p>
            O campeonato será realizado em duas fases, divididas em dois dias.
          </p>
          <p>
            No primeiro dia ocorrerão as oitavas e quartas de final. Serão 12
            partidas totais com 10 minutos de jogo (5 minutos por tempo) e 6
            minutos para troca de competidores e ajustes.
          </p>
          <p>
            No segundo dia ocorrerão as semifinais, finais e disputa de terceiro
            lugar. Serão 4 partidas totais com 16 minutos de jogo (8 minutos por
            tempo) e 6 minutos para troca de intervalo e ajustes.
          </p>
        </div>
        {/* <div className="mt-6 rounded-lg bg-emerald-400 p-2">
          <Image
            className=""
            src={fifa}
            alt={'tabela fifa'}
            priority
            sizes=""
          />
        </div> */}
        {/* <div className="rounded-lg bg-white p-6 shadow-lg">
          <h1 className="mb-4 text-center text-xl font-bold text-gray-800">
            Lista de Suplentes
          </h1>
          <table className="min-w-full rounded-lg border border-emerald-400 text-left">
            <thead>
              <tr className="bg-emerald-100 text-emerald-800">
                <th className="border border-emerald-400 px-4 py-2">#</th>
                <th className="border border-emerald-400 px-4 py-2">Nome</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-emerald-50">
                <td className="border border-emerald-400 px-4 py-2">1</td>
                <td className="border border-emerald-400 px-4 py-2">
                  André Felipe Aires Gameleira
                </td>
              </tr>
              <tr className="hover:bg-emerald-50">
                <td className="border border-emerald-400 px-4 py-2">2</td>
                <td className="border border-emerald-400 px-4 py-2">
                  Nicolas Sabino
                </td>
              </tr>
              <tr className="hover:bg-emerald-50">
                <td className="border border-emerald-400 px-4 py-2">3</td>
                <td className="border border-emerald-400 px-4 py-2">
                  Alan David da Costa Varela
                </td>
              </tr>
              <tr className="hover:bg-emerald-50">
                <td className="border border-emerald-400 px-4 py-2">4</td>
                <td className="border border-emerald-400 px-4 py-2">
                  Felipe Torres Fernandes
                </td>
              </tr>
              <tr className="hover:bg-emerald-50">
                <td className="border border-emerald-400 px-4 py-2">5</td>
                <td className="border border-emerald-400 px-4 py-2">
                  Jandui Serafim da Silva Júnior
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <h3 className="mt-8 border-t-2 pt-2 text-3xl font-semibold tracking-tight text-green-900">
          Clash Royale
        </h3>
        <div className="mt-6 space-y-6 font-display text-lg tracking-tight text-green-900 sm:text-2xl">
          <p>
            Para participar do campeonato, além da inscrição no ETAL, cada
            competidor deve preencher um formulário específico para o
            campeonato, informando o nome completo e matrícula. Além disso, os
            competidores devem ter 32 ou mais cartas liberadas no jogo. Não será
            permitida a alteração dos decks de duelo montados durante o evento,
            sendo permitida apenas a troca entre os dias do evento. Também não
            será permitido o uso de cartas evoluídas.
          </p>
          <p>
            Serão ofertadas apenas 32 vagas, logo, os primeiros 32 competidores
            inscritos estarão dentro do torneio. Caso um competidor desista de
            participar, o próximo a ter realizado a inscrição será o suplente.
          </p>
          <p>
            O campeonato será realizado em duas fases, divididas em dois dias.
          </p>
          <p>
            No primeiro dia ocorrerão os 16 avos, oitavas e quartas de final.
            Serão 28 partidas totais com até 5 minutos de jogo (3 minutos no
            tempo normal e 2 minutos adicionais em caso de morte súbita).
          </p>
          <p>
            No segundo dia ocorrerão as semifinais, finais e disputa de terceiro
            lugar. Serão 4 partidas totais com até 5 minutos de jogo (3 minutos
            no tempo normal e 2 minutos adicionais em caso de morte súbita).
          </p>
        </div>
        {/* <div className="mx-auto h-full w-fit rounded-lg bg-neutral-500 p-2">
          <Image
            className="self-center"
            src={valorant}
            alt={'tabela mortal kombat'}
            priority
            sizes=""
          />
        </div> */}
        <h3 className="mt-8 border-t-2 pt-2 text-3xl font-semibold tracking-tight text-green-900">
          Guitar Hero III
        </h3>
        <div className="mt-6 space-y-6 font-display text-lg tracking-tight text-green-900 sm:text-2xl">
          <p>
            Para participar do campeonato, além da inscrição no ETAL, cada
            competidor deve preencher um formulário específico para o
            campeonato, informando o nome completo, matrícula e o nome que
            deseja ser chamado durante o campeonato.
          </p>
          <p>
            Serão ofertadas apenas 16 vagas, logo, os primeiros 16 competidores
            inscritos estarão dentro do torneio. Caso um competidor desista de
            participar, o próximo a ter realizado a inscrição será o suplente.
          </p>
          <p>
            O campeonato será realizado em duas fases, divididas em dois dias.
          </p>
          <p>
            No primeiro dia ocorrerão as oitavas e quartas de final. Serão 12
            partidas totais com até 10 minutos de jogo (2 minutos para
            preparação e escolha da música e o tempo da música que deve ter até
            8 minutos).
          </p>
          <p>
            No segundo dia ocorrerão as semifinais, finais e disputa de terceiro
            lugar. Serão 4 partidas totais com até 10 minutos de jogo (2 minutos
            para preparação e escolha da música e o tempo da música que deve ter
            até 8 minutos).
          </p>
        </div>
      </div>
    </Container>
  )
}
