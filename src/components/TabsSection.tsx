import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import quotesData from '@/data/quotes.json'

export function TabsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold gradient-text text-center mb-12">
          Наши любимые цитаты от Марины
        </h2>

        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full grid-cols-1 mb-8 birthday-card h-auto md:h-10 md:items-center">
            <TabsTrigger value="quotes" className="text-lg font-medium">
              Дальше будут цитаты и подпись чье сердечко цитата завоевала навечно💖
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {quotesData.map((quote, index) => (
                <div 
                  key={quote.id} 
                  className="birthday-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-4 italic">
                    "{quote.quote}"
                  </blockquote>
                  <cite className="text-primary font-medium">— {quote.author}</cite>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}