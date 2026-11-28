import type { ReactNode } from 'react';

// Small illustrations use the same square-pixel language as the event identity.
const art: Record<string, { label: string; drawing: ReactNode }> = {
  'desenvolvendo-jogos-com-game-maker': { label: 'GAME / MAKER', drawing: <><path d="M36 68h12V56h12v12h12v12H60v12H48V80H36zM110 67h12v12h-12zM129 79h12v12h-12z"/><path d="M24 51h124v48H24z" fill="none" stroke="currentColor" strokeWidth="4"/></> },
  'design-e-arquitetura-de-sistemas-entendendo-como-sistemas-escalam-e-se-comunicam': { label: 'SYSTEM / DESIGN', drawing: <><path d="M76 36h24v24H76zM30 91h24v24H30zM76 91h24v24H76zM122 91h24v24h-24z"/><path d="M88 60v16M42 91V76h92v15" fill="none" stroke="currentColor" strokeWidth="4"/></> },
  'processamento-de-imagens-com-react-native-e-opencv': { label: 'IMAGEM / MOBILE', drawing: <><path d="M43 32h58v96H43z" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M52 104l15-22 11 11 9-14 10 25zM80 57h9v9h-9zM113 52h21v4h-17v17h-4zM134 88v20h-21v-4h17V88z"/></> },
  'git-e-github-sem-medo-do-primeiro-commit-ao-primeiro-conflito': { label: 'GIT / GITHUB', drawing: <><path d="M50 35h10v90H50zM116 35h10v30c0 21-20 28-42 28H55v-8h29c18 0 32-5 32-20z"/><circle cx="55" cy="37" r="11"/><circle cx="55" cy="123" r="11"/><circle cx="121" cy="37" r="11"/></> },
  'desenvolvimento-de-aplicacoes-modernas-com-react': { label: 'REACT / WEB', drawing: <><ellipse cx="88" cy="80" rx="58" ry="22" fill="none" stroke="currentColor" strokeWidth="4"/><ellipse cx="88" cy="80" rx="58" ry="22" transform="rotate(60 88 80)" fill="none" stroke="currentColor" strokeWidth="4"/><ellipse cx="88" cy="80" rx="58" ry="22" transform="rotate(-60 88 80)" fill="none" stroke="currentColor" strokeWidth="4"/><circle cx="88" cy="80" r="8"/></> },
  'database-engineering-na-pratica-problemas-reais-de-bancos-de-dados-em-producao': { label: 'DATABASE / SQL', drawing: <><ellipse cx="88" cy="43" rx="45" ry="13"/><path d="M43 46v22c0 7 20 13 45 13s45-6 45-13V46c-8 9-28 13-45 13s-37-4-45-13zm0 30v22c0 7 20 13 45 13s45-6 45-13V76c-8 9-28 13-45 13s-37-4-45-13z"/></> },
  'como-organizar-suas-tarefas-com-o-notion': { label: 'NOTION / ORGANIZAÇÃO', drawing: <><path d="M39 35h98v90H39z" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M50 49h12v12H50zM50 73h12v12H50zM50 97h12v12H50zM71 52h52v5H71zM71 76h52v5H71zM71 100h38v5H71z"/></> },
  'docker-na-pratica': { label: 'DOCKER / CONTAINERS', drawing: <><path d="M38 66h20v17H38zM62 66h20v17H62zM86 66h20v17H86zM62 45h20v17H62zM86 45h20v17H86zM110 66h20v17h-20zM30 88h116c-4 21-23 31-55 31-34 0-54-10-61-31z"/></> },
  'deploy-gratuito': { label: 'DEPLOY / NUVEM', drawing: <><path d="M49 103h78c13 0 20-8 20-18s-8-18-19-18c-3-19-18-31-37-31-17 0-31 10-36 25-16-1-26 8-26 21 0 12 8 21 20 21z" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M84 112V65h8v47zM67 80l21-21 21 21-6 6-15-15-15 15z"/></> },
  'apis-com-spring-mvc': { label: 'JAVA / API', drawing: <><path d="M37 54h34v52H37zM105 54h34v52h-34z" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M71 70h37v5H71zM101 61l13 11-13 11v-7l5-4-5-4zM104 89H67v5h37zM75 80L62 91l13 11v-7l-5-4 5-4z"/></> },
  'testes-e2e-com-playwright': { label: 'TESTES / E2E', drawing: <><path d="M30 40h116v80H30zM30 57h116" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M40 46h6v6h-6zM52 46h6v6h-6zM64 46h6v6h-6zM62 85l13 13 34-34 7 7-41 41-20-20z"/></> },
  'agentes-autonomos-com-ia': { label: 'AGENTES / AUTONOMIA', drawing: <><path d="M54 50h68v59H54zM72 34h32v16H72zM46 67h8v25h-8zM122 67h8v25h-8z" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M66 66h12v12H66zM98 66h12v12H98zM72 91h32v5H72zM85 22h6v12h-6z"/></> },
  'agentes-de-ia': { label: 'IA / PROGRAMAÇÃO', drawing: <><path d="M30 40h116v80H30zM30 57h116" fill="none" stroke="currentColor" strokeWidth="4"/><path d="M48 70l-11 12 11 12 5-5-7-7 7-7zm28 0l11 12-11 12-5-5 7-7-7-7zM58 98l10-31h6L64 98zM105 69h8v8h-8zM120 84h8v8h-8zM101 99h8v8h-8z"/></> },
};

export function CourseArt({ slug }: { slug: string }) {
  const item = art[slug];
  if (!item) return null;

  return (
    <div className="course-art" aria-hidden="true">
      <span className="course-art__label led">{item.label}</span>
      <svg className="course-art__drawing" viewBox="0 0 176 160" fill="currentColor" focusable="false">{item.drawing}</svg>
      <span className="course-art__pixels">✦ · · ·</span>
    </div>
  );
}
