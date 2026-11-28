'use client';

import { useEffect, useState } from 'react';

type Seats = Record<string, number>;
let cached: Promise<Seats> | undefined;

export function CourseSeats({ slug }: { slug: string }) {
  const [seats, setSeats] = useState<number | null>(null);
  useEffect(() => {
    cached ??= fetch('/api/vagas').then((response) => {
      if (!response.ok) throw new Error('Vagas indisponíveis');
      return response.json() as Promise<Seats>;
    }).catch(() => { cached = undefined; return {}; });
    cached.then((values) => setSeats(values[slug] ?? null));
  }, [slug]);
  return <span className="course__seats">{seats === null ? 'Consulte as vagas no SUAP' : seats === 0 ? 'Vagas ocupadas' : `${seats} vagas restantes`}</span>;
}
