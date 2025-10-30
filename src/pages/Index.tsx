export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-card shadow-2xl p-12 md:p-16 border border-border">
        <article className="space-y-12">
          <header className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-2">
              Зимнее утро
            </h1>
          </header>

          <section className="font-body text-lg leading-relaxed space-y-6 text-center text-foreground">
            <div className="space-y-2">
              <p>Мороз и солнце; день чудесный!</p>
              <p>Ещё ты дремлешь, друг прелестный —</p>
              <p>Пора, красавица, проснись:</p>
              <p>Открой сомкнуты негой взоры</p>
              <p>Навстречу северной Авроры,</p>
              <p>Звездою севера явись!</p>
            </div>

            <div className="space-y-2">
              <p>Вечор, ты помнишь, вьюга злилась,</p>
              <p>На мутном небе мгла носилась;</p>
              <p>Луна, как бледное пятно,</p>
              <p>Сквозь тучи мрачные желтела,</p>
              <p>И ты печальная сидела —</p>
              <p>А нынче... погляди в окно:</p>
            </div>

            <div className="space-y-2">
              <p>Под голубыми небесами</p>
              <p>Великолепными коврами,</p>
              <p>Блестя на солнце, снег лежит;</p>
              <p>Прозрачный лес один чернеет,</p>
              <p>И ель сквозь иней зеленеет,</p>
              <p>И речка подо льдом блестит.</p>
            </div>
          </section>

          <footer className="text-center border-b border-border pb-12">
            <p className="font-serif text-2xl text-primary italic">
              Александр Пушкин
            </p>
          </footer>

          <section className="space-y-6">
            <div className="font-body text-base leading-relaxed text-justify space-y-4 text-foreground">
              <p>
                <strong className="font-bold">Александр Сергеевич Пушкин</strong> (1799–1837) — 
                великий русский поэт, прозаик и драматург, основоположник современного русского 
                литературного языка. Автор бессмертных произведений, таких как роман в стихах 
                «Евгений Онегин», поэма «Руслан и Людмила», трагедия «Борис Годунов», 
                многочисленных лирических стихотворений.
              </p>
              <p>
                Творчество Пушкина оказало огромное влияние на развитие русской литературы и 
                культуры. Его произведения отличаются совершенством формы, глубиной содержания, 
                богатством языка и универсальностью тем. Пушкин по праву считается создателем 
                русского литературного языка и родоначальником новой русской литературы.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}