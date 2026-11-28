import { COURSES } from '@/data/site';

const normalize = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/&quot;|&#34;/g, '"').replace(/&amp;/g, '&').replace(/[^a-z0-9]+/g, ' ').trim();

export async function GET() {
  try {
    const response = await fetch('https://suap.ifrn.edu.br/eventos/inscricao/1/10301/', { cache: 'no-store', signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error('SUAP indisponível');
    const html = await response.text();
    const entries = [...html.matchAll(/<p\s+class="(?:true|false)"[^>]*>\s*(\d+)\s+vaga\(s\)\s+remanescente\(s\)\s*<\/p>\s*<p[^>]*>([^<]+)<\/p>|<p\s+class="false"[^>]*>\s*Vagas ocupadas\s*<\/p>\s*<p[^>]*>([^<]+)<\/p>/gi)];
    const vagas: Record<string, number> = {};
    for (const match of entries) {
      const title = normalize(match[2] || match[3]);
      const candidates = COURSES.filter((course) => title.startsWith(normalize(course.title)) || normalize(course.title).startsWith(title.replace(/ minicurso de.*$/, '').trim()));
      if (candidates.length === 1) vagas[candidates[0].slug] = match[1] ? Number(match[1]) : 0;
    }
    if (!Object.keys(vagas).length) throw new Error('Dados não reconhecidos');
    return Response.json(vagas, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' } });
  } catch {
    return Response.json({ error: 'Vagas indisponíveis' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }
}
