const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-12">
        <h1 className="text-4xl font-serif text-center mb-12 text-[#2c2416] font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Зимнее утро
        </h1>

        <div className="mb-12 space-y-4 text-lg leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
          <p className="text-[#2c2416]">Мороз и солнце; день чудесный!</p>
          <p className="text-[#2c2416]">Еще ты дремлешь, друг прелестный —</p>
          <p className="text-[#2c2416]">Пора, красавица, проснись:</p>
          <p className="text-[#2c2416]">Открой сомкнуты негой взоры</p>
          <p className="text-[#2c2416]">Навстречу северной Авроры,</p>
          <p className="text-[#2c2416]">Звездою севера явись!</p>
          <br />
          <p className="text-[#2c2416]">Вечор, ты помнишь, вьюга злилась,</p>
          <p className="text-[#2c2416]">На мутном небе мгла носилась;</p>
          <p className="text-[#2c2416]">Луна, как бледное пятно,</p>
          <p className="text-[#2c2416]">Сквозь тучи мрачные желтела,</p>
          <p className="text-[#2c2416]">И ты печальная сидела —</p>
          <p className="text-[#2c2416]">А нынче... погляди в окно:</p>
        </div>

        <p className="text-right text-xl mb-16 text-[#2c2416] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          А. С. Пушкин
        </p>

        <div className="border-t-2 border-[#d4c5a9] pt-8 space-y-6 text-[#2c2416]" style={{ fontFamily: "'Merriweather', serif" }}>
          <p className="text-base leading-relaxed text-justify">
            Александр Сергеевич Пушкин (1799–1837) — великий русский поэт, драматург и прозаик, 
            основоположник современного русского литературного языка. Его творчество оказало 
            огромное влияние на развитие русской и мировой литературы.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Стихотворение «Зимнее утро» было написано в 1829 году и считается одним из 
            наиболее ярких образцов пейзажной лирики Пушкина. В нём поэт воспевает красоту 
            русской природы и радость жизни.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
