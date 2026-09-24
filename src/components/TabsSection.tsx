import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import quotesData from '@/data/quotes.json'

export function TabsSection() {
  return (
    <section className="py-8 px-3 md:py-16 md:px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-dancing font-bold gradient-text text-center mb-6 md:mb-12 leading-tight">
          Наши любимые цитаты от Марины
        </h2>

        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full grid-cols-1 mb-4 md:mb-8 birthday-card h-auto p-2 md:p-2 md:h-10 md:items-center bg-transparent">
            <TabsTrigger value="quotes" className="text-xs sm:text-sm md:text-lg font-medium whitespace-normal leading-snug py-2 h-auto">
              Дальше будут цитаты и подпись, чьё сердечко цитата завоевала навечно 💖
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="space-y-3 md:space-y-6">
            <div className="grid gap-3 md:gap-6 grid-cols-1 md:grid-cols-2">
              {quotesData.map((quote, index) => (
                <div 
                  key={quote.id} 
                  className="birthday-card scale-in p-3 md:p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <blockquote className="text-sm sm:text-base md:text-xl leading-snug md:leading-relaxed mb-2 md:mb-4 italic break-words">
                    "{quote.quote}"
                  </blockquote>
                  <cite className="text-primary font-medium text-xs sm:text-sm md:text-base">
                    — {quote.author}
                  </cite>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}