import Image from 'next/image';
import { CourseArt } from './CourseArt';
import { COURSES, coursePeriods, coursesInfo, dayById, site, type Course } from '@/data/site';
import { formatTime } from '@/data/time';

function CourseSection({ title, text }: { title: string; text: string | null }) {
  if (!text?.trim()) return null;

  return (
    <div className="course__section">
      <h5 className="course__label led">{title}</h5>
      <p className="course__text">{text.trim()}</p>
    </div>
  );
}

const initials = (name: string) =>
  name
    .split(' ')
    .filter((_, i, words) => i === 0 || i === words.length - 1)
    .map((word) => word.charAt(0))
    .join('');

const byRoom = (a: Course, b: Course) => a.room.localeCompare(b.room, 'pt-BR', { numeric: true });

function CourseItem({ course, number }: { course: Course; number: number }) {
  return (
    <li>
      <details className="course">
        <summary className="course__summary">
          <span className="course__number led" aria-hidden="true">
            {String(number).padStart(2, '0')}
          </span>
          <span className="course__avatar" aria-hidden="true">
            {course.picture ? (
              <Image className="course__portrait" src={course.picture} alt="" width={96} height={96} sizes="(max-width: 767px) 48px, 80px" />
            ) : (
              <span className="course__initials led">{initials(course.author)}</span>
            )}
          </span>
          <span className="course__heading">
            <span className="course__title">{course.title}</span>
            <span className="course__meta">
              <span>{course.author}</span>
              <span className="course__room led">{course.room}</span>
              <span className="course__seats">{course.vagas == null ? 'Vagas a confirmar' : course.vagas === 0 ? 'Vagas ocupadas' : `${course.vagas} vagas restantes`}</span>
            </span>
          </span>
          <span className="course__sign" aria-hidden="true" />
        </summary>
        <div className="course__body">
          <div className="course__intro">
            <CourseArt slug={course.slug} />
            <h4 className="course__label led">Sobre o minicurso</h4>
            <p>{course.detail?.trim() || 'Mais informações sobre este minicurso serão divulgadas em breve.'}</p>
            {site.registration.status === 'open' && (
              <a className="courses__registration" href={site.registration.url}>Consultar inscrição no SUAP ↗</a>
            )}
          </div>
          <div className="course__info">
            <CourseSection title="Público-alvo" text={course.audience} />
            <CourseSection title="Pré-requisitos" text={course.requirements} />
            <CourseSection title="Conteúdo" text={course.content} />
          </div>
        </div>
      </details>
    </li>
  );
}

export function Courses() {
  const groups = coursePeriods.map((period) => ({ period, courses: COURSES.filter((c) => c.period === period.id).sort(byRoom) }));
  const first = groups.map((_, i) => groups.slice(0, i).reduce((n, g) => n + g.courses.length, 1));

  return (
    <section className="courses field field--campo" id="minicursos" data-tone="campo" data-edge aria-labelledby="minicursos-title">
      <div className="courses__aside">
        <h2 className="section-title led" id="minicursos-title" data-split="lines">
          Minicursos
        </h2>
        <div className="courses__guide">
          <p className="courses__when">{coursesInfo.when}</p>
          <p className="courses__how">{coursesInfo.how}</p>
          {site.registration.status === 'open' && (
            <a className="courses__registration" href={site.registration.url}>Inscreva-se no SUAP ↗</a>
          )}
        </div>
      </div>
      {groups.map(({ period, courses }, g) => {
        const day = dayById(period.day);
        return (
          <section className="courses__period" key={period.id} aria-labelledby={`minicursos-${period.id}`}>
            <div className="courses__slot">
              <h3 className="courses__slot-name led" id={`minicursos-${period.id}`}>
                {period.label}
              </h3>
              <p className="courses__slot-time led">
                <time dateTime={`${day.isoDate}T${period.start}`}>{period.start}</time>
                <span aria-hidden="true">–</span>
                <span className="sr-only"> até </span>
                <time dateTime={`${day.isoDate}T${period.end}`}>{period.end}</time>
              </p>
              <p className="courses__slot-note">
                {day.weekday}, {day.date} · {courses.length} minicursos ao mesmo tempo · intervalo de {formatTime(period.pause.start)} às{' '}
                {formatTime(period.pause.end)}
              </p>
            </div>
            <ul className="courses__list">
              {courses.map((course, i) => (
                <CourseItem key={course.slug} course={course} number={(first[g] ?? 1) + i} />
              ))}
            </ul>
          </section>
        );
      })}
    </section>
  );
}
