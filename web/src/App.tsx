import React, { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import {
  Clock,
  Bell,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Users,
  DollarSign,
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

interface PainPointProps {
  text: string
}

const PainPoint: React.FC<PainPointProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
      </div>
      <p className="text-foreground/90 leading-relaxed">{text}</p>
    </div>
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
              Пока вы работаете — Rendy CRM записывает, подтверждает и возвращает клиентов
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Автоматизируйте запись в WhatsApp* и Telegram, забудьте про «пустые окна» и ручные напоминания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group"
                onClick={() => setShowEarlyAccessEmbed(true)}
              >
                Попробовать бесплатно
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Узнать больше
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Без привязки карты • Настройка за 5 минут • 30 дней бесплатно
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Хватит терять прибыль и время!</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Знакомая ситуация?</p>
            <div className="grid gap-4 md:grid-cols-2">
              <PainPoint text="Запись теряется в потоке чатов и сообщений?" />
              <PainPoint text="Клиенты забывают подтвердить визит и просто не приходят?" />
              <PainPoint text="Тратите часы на рассылку напоминаний вручную?" />
              <PainPoint text="Не знаете, сколько реально заработали за месяц?" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rendy CRM делает это за вас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ваш умный ассистент, который берет запись на себя
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-16">
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Автозапись 24/7"
              description="Бот сам предложит свободные «окна» в Telegram и WhatsApp*. Работает круглосуточно."
            />
            <FeatureCard
              icon={<Bell className="w-6 h-6" />}
              title="Умные подтверждения"
              description="Система сама спросит клиента, придет ли он. Больше никаких «ой, я забыл»."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Возврат клиентов"
              description="Бот вежливо напомнит о себе тем, кто давно не записывался."
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Аналитика в кармане"
              description="Четкий отчет, сколько вы заработали и на чем. Ваш график под контролем."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4" variant="secondary">
                  <TrendingUp className="w-4 h-4 mr-2 inline" />
                  Аналитика
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Не просто календарь, а инструмент роста</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Смотрите наглядную аналитику: какие услуги самые прибыльные, кто из клиентов приносит больше денег и где
                  «дыры» в вашем доходе.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <span className="text-foreground">Отслеживание доходов по услугам</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-foreground">Анализ поведения клиентов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <span className="text-foreground">Прогнозирование загрузки</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="p-6 bg-card border-border shadow-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground">Доход за месяц</span>
                      <span className="text-2xl font-bold text-foreground">₽ 127,500</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Маникюр</span>
                          <span className="text-sm font-medium">₽ 65,000</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '51%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Педикюр</span>
                          <span className="text-sm font-medium">₽ 42,500</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary/70 rounded-full" style={{ width: '33%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Покрытие</span>
                          <span className="text-sm font-medium">₽ 20,000</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary/50 rounded-full" style={{ width: '16%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Начните тратить время на творчество, а не на рутину</h2>
            <Button size="lg" className="text-lg px-10 py-7 group">
              Подключить Rendy CRM прямо сейчас
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="mt-4 text-base font-semibold text-foreground">Цена: 990 руб./месяц</p>
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
                <h3 className="font-bold text-xl mb-4">Rendy CRM</h3>
                <p className="text-muted-foreground">
                  Умный ассистент для автоматизации записи клиентов • Mini App в Telegram
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
              <p className="mb-2">© 2026 Rendy CRM. Все права защищены.</p>
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
