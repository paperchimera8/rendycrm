import React, { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import {
  Clock,
  Bell,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Users,
  ArrowRight,
} from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

const RendyLandingPage: React.FC = () => {
  const [showEarlyAccessEmbed, setShowEarlyAccessEmbed] = useState(false)

  useEffect(() => {
    if (!showEarlyAccessEmbed) return
    type TallyWindow = Window & { Tally?: { loadEmbeds: () => void } }
    ;(window as TallyWindow).Tally?.loadEmbeds()
  }, [showEarlyAccessEmbed])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-1.5 text-sm" variant="secondary">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Mini App в Telegram • Умный ассистент для мастеров
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Клиент не пришел? Бот подтверждает визиты и сохраняет ваше время
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Пока вы делаете маникюр, бот сам ведет переписку и возвращает клиентов
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group"
                onClick={() => setShowEarlyAccessEmbed(true)}
              >
                Попробовать бесплатно
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="mt-4 text-base font-medium text-foreground">
              Попробовать бесплатно • 30 дней без карты • 990 ₽/мес
            </p>
            {showEarlyAccessEmbed ? (
              <div className="mt-8 max-w-3xl mx-auto rounded-xl border border-border bg-card p-3">
                <iframe
                  data-tally-src="https://tally.so/embed/lbNLlW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height={275}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Подтверждение раннего доступа"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Бот делает это за вас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ваш умный ассистент, который берет запись на себя
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-16">
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Автозапись 24/7"
              description="Клиенты записываются сами, пока вы работаете"
            />
            <FeatureCard
              icon={<Bell className="w-6 h-6" />}
              title="Подтверждение визитов"
              description="Больше никаких пустых окон и отмен в последний момент"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Возврат клиентов"
              description="Бот напоминает тем, кто давно не записывался — доход растет"
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Аналитика"
              description="Видите, что приносит больше денег и кто ваши лучшие клиенты"
            />
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Начните тратить время на творчество, а не на рутину</h2>
            <Button size="lg" className="text-lg px-10 py-7 group">
              Подключить Бот прямо сейчас
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>30 дней бесплатно</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Без привязки карты</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Настройка за 5 минут</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8 mb-8">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-4">Бот</h3>
                <p className="text-muted-foreground">
                  Умный ассистент для автоматизации записи клиентов • Mini App в Telegram
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
              <p className="mb-2">© 2026 Бот. Все права защищены.</p>
              <p className="text-xs">
                *WhatsApp принадлежит компании Meta, признанной экстремистской организацией и запрещенной на территории РФ.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default RendyLandingPage
