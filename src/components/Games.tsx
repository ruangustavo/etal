import Image, { StaticImageData } from 'next/image'
import { Container } from '@/components/Container'


import mkt from '@/images/games/mkt.jpeg'
import fifa from '@/images/games/fifa.jpeg'
import valorant from '@/images/games/valorant.jpeg'

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
          Este é o ponto de encontro para gamers, entusiastas de tecnologia e fãs de esportes eletrônicos.
        </p>
        <p className="text-2xl font-semibold tracking-tight text-green-700">Lab. 60 - das 08h às 12h</p>
        <p className="mt-4 mb-4 font-display text-2xl tracking-tight text-slate-700">
          Confira a tabela de partidas em cada modalidade.
        </p>
      </div>
      <div className='block'>
        <h3 className="text-3xl font-semibold tracking-tight text-green-900 mt-8">Mortal Kombat</h3>
        <div className='bg-gray-950 p-2 rounded-lg'>
          <Image
            className=""
            src={mkt}
            alt={"tabela mortal kombat"}
            priority
            sizes=""
          />
        </div>
        <h3 className="text-3xl font-semibold tracking-tight text-green-900 mt-8 border-t-2 pt-2">FIFA</h3>
        <div className='bg-emerald-400 p-2 rounded-lg'>
          <Image
            className=""
            src={fifa}
            alt={"tabela mortal kombat"}
            priority
            sizes=""
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">Lista de Suplentes</h1>
          <table className="min-w-full border border-emerald-400 rounded-lg text-left">
            <thead>
              <tr className="bg-emerald-100 text-emerald-800">
                <th className="px-4 py-2 border border-emerald-400">#</th>
                <th className="px-4 py-2 border border-emerald-400">Nome</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-emerald-50">
                <td className="px-4 py-2 border border-emerald-400">1</td>
                <td className="px-4 py-2 border border-emerald-400">André Felipe Aires Gameleira</td>
              </tr>
              <tr className="hover:bg-emerald-50">
                <td className="px-4 py-2 border border-emerald-400">2</td>
                <td className="px-4 py-2 border border-emerald-400">Nicolas Sabino</td>
              </tr>
              <tr className="hover:bg-emerald-50">
                <td className="px-4 py-2 border border-emerald-400">3</td>
                <td className="px-4 py-2 border border-emerald-400">Alan David da Costa Varela</td>
              </tr>
              <tr className="hover:bg-emerald-50">
                <td className="px-4 py-2 border border-emerald-400">4</td>
                <td className="px-4 py-2 border border-emerald-400">Felipe Torres Fernandes</td>
              </tr>
              <tr className="hover:bg-emerald-50">
                <td className="px-4 py-2 border border-emerald-400">5</td>
                <td className="px-4 py-2 border border-emerald-400">Jandui Serafim da Silva Júnior</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-3xl font-semibold tracking-tight text-green-900 mt-8 border-t-2 pt-2">Valorant</h3>
        <div className='bg-neutral-500 p-2 rounded-lg mx-auto h-full w-fit'>
          <Image
            className="self-center"
            src={valorant}
            alt={"tabela mortal kombat"}
            priority
            sizes=""
          />
        </div>
      </div>
    </Container>
  )
}
