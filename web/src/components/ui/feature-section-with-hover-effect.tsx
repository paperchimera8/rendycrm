import type { ReactNode } from 'react'
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
} from '@tabler/icons-react'
import { cn } from '@/lib/utils'

type FeatureItem = {
  title: string
  description: string
  icon: ReactNode
}

const features: FeatureItem[] = [
  {
    title: 'Удобная запись',
    description: 'Клиенты записываются сами, пока вы работаете — бот проверяет доступность и обновляет CRM мгновенно.',
    icon: <IconCloud className="h-8 w-8" />,
  },
  {
    title: 'Подтверждение визитов',
    description:
      'Больше никаких пустых окон и отмен в последний момент — бот напоминает и подтверждает, отвечая на любые вопросы клиентов.',
    icon: <IconEaseInOut className="h-8 w-8" />,
  },
  {
    title: 'Аналитика',
    description: 'Видите, что приносит больше денег и кто ваши лучшие клиенты — ИИ собирает и обрабатывает данные в реальном времени.',
    icon: <IconCurrencyDollar className="h-8 w-8" />,
  },
  {
    title: 'Простое управление',
    description:
      'Вопросы по клиентам, согласование записей, изменение данных об услуге — все на вашем телефоне и интуитивно понятно.',
    icon: <IconAdjustmentsBolt className="h-8 w-8" />,
  },
]

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

function Feature({
  title,
  description,
  icon,
  index,
}: FeatureItem & {
  index: number
}) {
  return (
    <div
      className={cn(
        'flex flex-col xl:border-r py-10 relative group/feature border-border',
        index === 0 && 'xl:border-l',
      )}
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[rgb(108,0,162)]/30 via-[rgb(0,17,82)]/12 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold mb-3 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-8 w-1 rounded-tr-full rounded-br-full bg-gradient-to-b from-[rgb(108,0,162)] to-[rgb(0,17,82)] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-md relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
