import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  const textClass = "text-xl md:text-2xl lg:text-3xl text-white/75 [text-shadow:0_1px_12px_rgba(255,255,255,0.18)]";

  return (
    <BackgroundGradientAnimation
      containerClassName="!h-auto min-h-[620px] !w-full rounded-3xl overflow-hidden"
    >
      <div className="absolute inset-0 z-50 flex items-center justify-center px-6 md:px-10 pointer-events-none">
        <div className="w-full max-w-5xl space-y-4 text-left p-5 md:p-8">
          <p className={textClass}>Подключаете Telegram за 2 минуты</p>
          <p className={textClass}>
            Бот предлагает клиентам свободные окна, используя данные из CRM
          </p>
          <p className={textClass}>
            Отвечает на вопросы клиентов с помощью, спрашивает о качестве услуги и фиксирует отзывы прямо в CRM
          </p>
          <p className={textClass}>
            Вы получаете подтверждённые записи, а бот заполняет CRM данными: контактами, историей взаимодействий и аналитикой
          </p>
          <p className={textClass}>
            Все находится в одном месте: сама система учета (CRM) и бот (диалог с ним)
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
