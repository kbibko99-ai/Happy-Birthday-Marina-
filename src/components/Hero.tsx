export function Hero() {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-dancing font-bold gradient-text mb-8">
            С днем рожедния!
          </h1>
          <h2 className="text-4xl md:text-6xl font-dancing text-primary mb-12">
            Марина! 🎉
          </h2>
        </div>

        <div className="flex justify-center mb-12 scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="polaroid">
            <img 
              src="/images/hero.jpg" 
              alt="Birthday person" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
            />
            <div className="text-center mt-2 font-dancing text-xl text-gray-700">
              Ты лучше всех! ✨
            </div>
            <div className="text-center mt-2 font-dancing text-xl text-gray-700">
              01 октября 2026 🎈🎇
            </div>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Сегодня мы празднуем тебя и ту радость, что ты приносишь в нашу жизнь. 
            За еще один год приключений, смеха и прекрасных воспоминаний! 
          </p>
        </div>
      </div>
    </section>
  )
}
