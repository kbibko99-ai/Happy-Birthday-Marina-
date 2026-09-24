export function Hero() {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 pb-8 md:pb-0">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-dancing font-bold gradient-text mb-4 md:mb-8 leading-tight">
            С днем рождения!
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-dancing text-primary mb-6 md:mb-12">
            Марина! 🎉
          </h2>
        </div>

        <div className="flex justify-center mb-6 md:mb-12 scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="polaroid">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero.jpg`} 
              alt="Birthday person" 
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover rounded-lg"
            />
            <div className="text-center mt-2 font-dancing text-base sm:text-lg md:text-xl text-gray-700">
              Ты лучше всех! ✨
            </div>
            <div className="text-center mt-2 font-dancing text-base sm:text-lg md:text-xl text-gray-700">
              01 октября 2026 🎈🎇
            </div>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Сегодня мы празднуем тебя и ту радость, что ты приносишь в нашу жизнь. 
            За еще один год приключений, смеха и прекрасных воспоминаний! 
          </p>
        </div>
      </div>
    </section>
  )
}