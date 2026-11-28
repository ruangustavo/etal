import { dayById, esports, games, type Game, type GamePhase } from '@/data/site';

const totalSeats = games.reduce((n, game) => n + game.seats, 0);
const fullGames = games.filter((game) => game.pedidos >= game.seats);

function PhaseDay({ phase, index }: { phase: GamePhase; index: number }) {
  if (!phase.day) {
    return (
      <span className="game__day game__day--step led" aria-label={`Etapa ${index + 1}`}>
        {String(index + 1).padStart(2, '0')}
      </span>
    );
  }
  const day = dayById(phase.day);
  return (
    <span className="game__day led">
      <span>{day.weekday.slice(0, 3)}</span>
      <span>{day.date.split(' ')[0]}</span>
    </span>
  );
}

function GameItem({ game, number }: { game: Game; number: number }) {
  return (
    <li>
      <details className={game.pedidos >= game.seats ? 'game game--full' : 'game'}>
        <summary className="game__summary">
          <span className="game__number led" aria-hidden="true">
            {String(number).padStart(2, '0')}
          </span>
          <span className="game__heading">
            <span className="game__name led">{game.name}</span>
            <span className="game__meta">
              <span className="game__seats led">{game.seats} vagas · {game.pedidos} pedidos</span>
              <span>
                {game.mode} · {game.format}
              </span>
              <span>{game.days}</span>
              <span>{game.pedidos >= game.seats ? 'Sem vagas estimadas' : `${game.seats - game.pedidos} vagas estimadas`}</span>
            </span>
          </span>
          <span className="game__sign" aria-hidden="true" />
        </summary>
        <div className="game__body">
          <div className="game__col">
            <h4 className="game__label led">Como funciona</h4>
            <ol className="game__phases">
              {game.phases.map((phase, i) => (
                <li key={phase.name}>
                  <PhaseDay phase={phase} index={i} />
                  <span>
                    <strong>{phase.name}</strong>
                    <span>{phase.detail}</span>
                  </span>
                </li>
              ))}
              <li className="game__champion">
                <span className="game__day game__day--cup" aria-hidden="true" />
                <span>
                  <strong>Campeão</strong>
                  <span>Premiação na sexta, no encerramento.</span>
                </span>
              </li>
            </ol>
          </div>
          <div className="game__col">
            <div className="game__watch field--noite">
              <h4 className="game__label led">Fique de olho</h4>
              <ul>
                {game.watch.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            {game.pedidos >= game.seats ? (
              <p className="game__full">
                Os pedidos atingiram a capacidade. A disponibilidade depende da conferência das inscrições e dos horários.
              </p>
            ) : null}
          </div>
          <div className="game__col">
            <h4 className="game__label led">Regras da partida</h4>
            <ul className="game__rules">
              {[...game.rules, ...esports.conduct].map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="game__ask">
              <strong>No formulário:</strong> {game.ask}
            </p>
          </div>
        </div>
      </details>
    </li>
  );
}

export function Esports() {
  const { form, priority } = esports;
  return (
    <section className="esports field field--lima" id="e-sports" data-tone="lima" data-edge aria-labelledby="esports-title">
      <div className="section-head">
        <h2 className="section-title led" id="esports-title" data-split="lines">
          E-sports
        </h2>
        <p className="section-note">{esports.intro}</p>
      </div>

      <div className="esports__signup">
        <div className="esports__panel field--noite">
          <p className="esports__kicker led">Inscrições dos jogos</p>
          <p className="esports__dates led">
            <time dateTime={form.opens}>27</time>–<time dateTime={form.closes}>30 nov</time>
          </p>
          <p className="esports__lead">
            {games.length} jogos, {totalSeats} vagas. A vaga é pedida num formulário à parte do SUAP, até {form.label.split(' a ')[1]}.
          </p>
          {fullGames.length ? (
            <p className="esports__full">
              <span className="node" aria-hidden="true" />
              {fullGames.map((game) => game.name).join(', ')}: sem vagas estimadas
            </p>
          ) : null}
          <div className="esports__actions">
            <a className="cta cta--open" href={form.url} target="_blank" rel="noopener noreferrer" data-magnetic="0.2">
              <span className="cta__dot" aria-hidden="true" />
              <span>Inscrever-se nos jogos</span>
              <span className="sr-only"> (abre o formulário em nova aba)</span>
            </a>
            <a className="cta cta--outline" href={esports.rulesUrl} target="_blank" rel="noopener noreferrer">
              <span className="cta__dot" aria-hidden="true" />
              <span>Regulamentos</span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>
        <ol className="esports__steps">
          {esports.steps.map((step, i) => (
            <li key={step.title}>
              <span className="esports__step-n led" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="esports__priority">
        <div className="esports__priority-text">
          <h3 className="esports__priority-title led">Se os horários baterem</h3>
          <p>{priority.text}</p>
          <p className="esports__priority-max">Exemplo abaixo. E nunca mais de {esports.maxGames} jogos diferentes por pessoa.</p>
        </div>
        <ol className="esports__picks" aria-label="Exemplo de três opções em ordem de prioridade">
          {priority.example.map((row) => (
            <li key={row.pick} className={row.kept ? 'is-kept' : 'is-out'}>
              <span className="esports__pick led">{row.pick}</span>
              <span className="esports__pick-game">{row.game}</span>
              <span className="esports__pick-note led">{row.note}</span>
            </li>
          ))}
        </ol>
      </div>

      <h3 className="esports__list-title led">Os jogos e as regras</h3>
      <p className="esports__source">Estimativa baseada nas respostas disponíveis em 28/11: conta a primeira e a segunda opção por matrícula, sem a reserva. Pedidos não são vagas confirmadas; a disponibilidade pode mudar após a conferência de horários e inscrições.</p>
      <ul className="games">
        {games.map((game, i) => (
          <GameItem key={game.slug} game={game} number={i + 1} />
        ))}
      </ul>
      <p className="esports__source">
        Resumo dos regulamentos da organização. Na dúvida, vale o documento:{' '}
        <a href={esports.rulesUrl} target="_blank" rel="noopener noreferrer">
          regulamentos completos
        </a>
        .
      </p>
    </section>
  );
}
