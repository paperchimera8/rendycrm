import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScreenSize } from '@/hooks/use-screen-size'

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const [showYandexForm, setShowYandexForm] = useState(false)
  const titles = useMemo(() => ['переносов', 'записей', 'напоминаний', 'базы клиентов'], [])
  const screenSize = useScreenSize()
  const textSizeClass = screenSize.greaterThanOrEqual('md') ? 'text-6xl' : 'text-4xl'
  const sliderHeightClass = screenSize.greaterThanOrEqual('md') ? 'h-24' : 'h-16'
  const metrikaId = 107136760

  const trackGoal = (goal: string) => {
    const ym = (window as unknown as { ym?: (...args: unknown[]) => void }).ym
    if (typeof ym === 'function') {
      ym(metrikaId, 'reachGoal', goal)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 1800)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className={`${textSizeClass} font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent`}>
        AI-ассистент и автоматизация
      </h1>
      <div className={`relative ${sliderHeightClass} flex justify-center overflow-hidden`}>
        <span className={`invisible whitespace-nowrap ${textSizeClass} font-bold px-1`}>базы клиентов</span>
        {titles.map((title, index) => (
          <motion.span
            key={title}
            className={`absolute inset-0 flex items-center justify-center whitespace-nowrap ${textSizeClass} font-bold text-primary`}
            initial={{ opacity: 0, y: -40 }}
            transition={{ type: 'spring', stiffness: 70, damping: 16 }}
            animate={
              titleNumber === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: titleNumber > index ? -80 : 80,
                    opacity: 0,
                  }
            }
          >
            {title}
          </motion.span>
        ))}
      </div>
      <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl">
        Забудьте о сложных и непонятных CRM с долгой настройкой. Пока вы работаете — с телефона управляете процессом, а ассистент ведет учет и заботится о качестве услуг.
      </p>
      <div className="flex flex-row gap-3">
        <Button size="lg" variant="outline" disabled className="!text-black !border-black/40 !border-2">
          30 дней бесплатно
        </Button>
        <Button
          size="lg"
          className="gap-2 !bg-gradient-to-r !from-[rgb(175,128,208)] !to-[rgb(128,137,168)] hover:!from-[rgb(155,100,195)] hover:!to-[rgb(100,115,155)] text-white/90"
          onClick={() => {
            setShowYandexForm(true)
            trackGoal('yandex_form_open')
          }}
        >
          Попробовать <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      {showYandexForm && (
        <div className="w-full flex justify-center">
          <iframe
            src="https://forms.yandex.ru/cloud/69a873a149363910667ff683?iframe=1"
            frameBorder="0"
            name="ya-form-69a873a149363910667ff683"
            width="650"
            title="Регистрация"
            className="max-w-full min-h-[520px] rounded-xl border border-border bg-background"
            onLoad={() => trackGoal('yandex_form_loaded')}
          />
        </div>
      )}
    </div>
  )
}

export { Hero }
