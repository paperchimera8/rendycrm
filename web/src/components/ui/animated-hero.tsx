import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScreenSize } from '@/hooks/use-screen-size'

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ['переносов', 'записей', 'напоминаний', 'базы клиентов'], [])
  const screenSize = useScreenSize()
  const textSizeClass = screenSize.greaterThanOrEqual('md') ? 'text-6xl' : 'text-4xl'
  const sliderHeightClass = screenSize.greaterThanOrEqual('md') ? 'h-24' : 'h-16'

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
        <Button size="lg" variant="outline">
          Попробовать бесплатно
        </Button>
        <Button
          size="lg"
          className="gap-2 !bg-gradient-to-r !from-[rgb(175,128,208)] !to-[rgb(128,137,168)] hover:!from-[rgb(155,100,195)] hover:!to-[rgb(100,115,155)] text-white/90"
          onClick={() =>
            window.open(
              'https://tally.so/embed/lbNLlW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
              '_blank',
              'noopener,noreferrer',
            )
          }
        >
          Зарегистрироваться <MoveRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export { Hero }
