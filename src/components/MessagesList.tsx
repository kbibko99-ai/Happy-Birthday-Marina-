import messagesData from '@/data/messages.json'

export function MessagesList() {
  const messageCount = messagesData.length

  return (
    <section className="py-8 px-3 md:py-16 md:px-4 bg-gradient-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-dancing font-bold gradient-text mb-3 md:mb-4 leading-tight">
            Пожелания от твоих любимых друзей
          </h2>
          <div className="birthday-card inline-block px-4 py-2 md:px-6 md:py-3">
            <span className="text-base sm:text-lg md:text-2xl font-semibold text-primary">
              {messageCount} Пожеланий
            </span>
          </div>
        </div>

        <div className="grid gap-3 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {messagesData.map((message, index) => (
            <div 
              key={message.id}
              className="birthday-card scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">
                    {message.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-snug md:leading-relaxed break-words">
                    {message.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}