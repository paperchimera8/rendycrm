import React from 'react'
import { Hero } from '@/components/ui/animated-hero'
import { BackgroundGradientAnimationDemo } from '@/components/ui/background-gradient-animation-demo'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effect'

const RendyLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-border min-h-[825px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="container mx-auto px-4 relative w-full">
            <div className="max-w-4xl mx-auto text-center">
              <Hero />
            </div>
          </div>
        </section>

        <section className="min-h-[825px] flex items-center">
          <div className="container mx-auto px-4 w-full">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Как это работает
              </h2>
              <div className="max-w-6xl mx-auto">
                <BackgroundGradientAnimationDemo />
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-[825px] flex items-center">
          <div className="container mx-auto px-4 w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ведет учет и избавляет от рутины</h2>
            </div>
            <FeaturesSectionWithHoverEffects />
          </div>
        </section>

        <footer className="py-12 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center text-sm mb-4 flex flex-wrap items-center justify-center gap-4">
                <a href="/oferta.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  Оферта
                </a>
                <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  Политика конфиденциальности
                </a>
                <a href="/personal-data-consent.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  Согласие на обработку персональных данных
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
                <p className="mb-2">© 2026 rendycrm. Все права защищены.</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default RendyLandingPage
