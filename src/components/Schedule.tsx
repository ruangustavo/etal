'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    start: string
    end: string
  }>
}

const schedule: Day[] = [
  {
    date: '26/11',
    dateTime: 'quarta-feira',
    summary: 'Credenciamento, Competição de Jogos e Minicursos',
    timeSlots: [
      {
        name: 'Credenciamento',
        description: '',
        start: '13:00',
        end: '15:00',
      },
      {
        name: 'Competição de Jogos',
        description: '',
        start: '14:00',
        end: '18:00',
      },
      {
        name: 'Minicursos',
        description: '',
        start: '14:00',
        end: '18:00',
      },
    ],
  },
  {
    date: '27/11',
    dateTime: 'quinta-feira',
    summary:
      'Credenciamento, Competição de Jogos, Minicursos, Cerimônia de Abertura, Apresentação Cultural, Palestra e Mesa-Redonda',
    timeSlots: [
      {
        name: 'Credenciamento',
        description: '',
        start: '07:00',
        end: '12:00',
      },
      {
        name: 'Competição de Jogos (Final)',
        description: '',
        start: '08:00',
        end: '12:00',
      },
      {
        name: 'Minicursos',
        description: '',
        start: '08:00',
        end: '12:00',
      },
      {
        name: 'Cerimônia de Abertura e Palestra',
        description: '',
        start: '14:00',
        end: '15:30',
      },
      {
        name: 'Intervalo e Apresentação Cultural',
        description: '',
        start: '15:30',
        end: '16:00',
      },
      {
        name: 'Mesa-Redonda',
        description: '',
        start: '16:00',
        end: '18:00',
      },
    ],
  },
  {
    date: '28/11',
    dateTime: 'sexta-feira',
    summary:
      'Palestras, Apresentações Culturais, Mesa-Redonda, Cerimônia de Encerramento e Entrega de Premiações',
    timeSlots: [
      {
        name: 'Palestra',
        description: '',
        start: '08:00',
        end: '09:00',
      },
      {
        name: 'Intervalo e Apresentação Cultural',
        description: '',
        start: '09:00',
        end: '09:30',
      },
      {
        name: 'Palestra',
        description: '',
        start: '09:30',
        end: '10:30',
      },
      {
        name: 'Mesa-Redonda',
        description: '',
        start: '10:30',
        end: '12:00',
      },
      {
        name: 'Palestra',
        description: '',
        start: '14:00',
        end: '15:00',
      },
      {
        name: 'Apresentação Cultural e Cerimônia de Encerramento e Entrega de Premiações',
        description: '',
        start: '15:00',
        end: '16:00',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-green-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 min-h-[72px] text-base tracking-tight text-green-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-green-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-green-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-green-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-6 sm:py-8">
      <Container className="relative z-10">
        {/* <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl">
            Our three day schedule is jam-packed with brilliant, creative, evil
            geniuses.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-green-900">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p>
        </div> */}
        <h2 className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl">
          Programação
        </h2>
      </Container>
      <div className="relative mt-8 sm:mt-14">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
