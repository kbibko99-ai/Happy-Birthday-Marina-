import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    id: 1,
    src: `${import.meta.env.BASE_URL}images/gallery1.JPG`,
    alt: 'A',
  },
  {
    id: 2,
    src: `${import.meta.env.BASE_URL}images/gallery2.jpg`,
    alt: 'B',
  },
  {
    id: 3,
    src: `${import.meta.env.BASE_URL}images/gallery3.jpg`,
    alt: 'C',
  },
  {
    id: 4,
    src: `${import.meta.env.BASE_URL}images/gallery4.jpg`,
    alt: 'D',
  },
  {
    id: 5,
    src: `${import.meta.env.BASE_URL}images/gallery5.jpg`,
    alt: 'E',
  },
  {
    id: 6,
    src: `${import.meta.env.BASE_URL}images/gallery6.jpg`,
    alt: 'F',
  },
  {
    id: 7,
    src: `${import.meta.env.BASE_URL}images/gallery7.jpg`,
    alt: 'G',
  },
  {
    id: 8,
    src: `${import.meta.env.BASE_URL}images/gallery8.jpg`,
    alt: 'H',
  },
  {
    id: 9,
    src: `${import.meta.env.BASE_URL}images/gallery9.jpg`,
    alt: 'I',
  },
  {
    id: 10,
    src: `${import.meta.env.BASE_URL}images/gallery10.jpg`,
    alt: 'J',
  },
  {
    id: 11,
    src: `${import.meta.env.BASE_URL}images/gallery11.jpg`,
    alt: 'K',
  },
  {
    id: 12,
    src: `${import.meta.env.BASE_URL}images/gallery12.jpg`,
    alt: 'J',
  },
  {
    id: 13,
    src: `${import.meta.env.BASE_URL}images/gallery13.jpg`,
    alt: 'J',
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return
      
      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <section className="py-8 px-3 md:py-16 md:px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-dancing font-bold gradient-text text-center mb-6 md:mb-12 leading-tight">
          Наши любимые воспоминания
        </h2>

        <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-card scale-in cursor-pointer aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-lg max-h-[85vh] mx-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={closeLightbox}
                className="absolute -top-8 right-0 z-10 birthday-card"
              >
                <X className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={prevImage}
                className="absolute left-2 md:-left-8 top-1/2 transform -translate-y-1/2 z-10 birthday-card"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={nextImage}
                className="absolute right-2 md:-right-8 top-1/2 transform -translate-y-1/2 z-10 birthday-card"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="lightbox-image rounded-xl scale-in"
              />
            </div>

            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={closeLightbox}
            />
          </div>
        )}
      </div>
    </section>
  )
}