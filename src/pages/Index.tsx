import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [investment, setInvestment] = useState(2000000);
  const [monthlyRevenue, setMonthlyRevenue] = useState(800000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(400000);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculatePayback = () => {
    const monthlyProfit = monthlyRevenue - monthlyExpenses;
    const paybackMonths = investment / monthlyProfit;
    return {
      months: Math.round(paybackMonths),
      years: (paybackMonths / 12).toFixed(1),
      monthlyProfit,
      annualProfit: monthlyProfit * 12
    };
  };

  const payback = calculatePayback();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Smartphone" size={28} className="text-primary" />
              <span className="text-2xl font-bold gradient-text">SmartFranchise</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'franchise', 'conditions', 'partners', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'franchise' && 'Франшиза'}
                  {section === 'conditions' && 'Условия'}
                  {section === 'partners' && 'Партнёры'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button size="lg" className="hidden md:flex">
              Стать партнёром
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Франшиза <span className="gradient-text">смартфонов</span> будущего
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Присоединяйтесь к самой технологичной сети магазинов смартфонов. Полная поддержка, 
                проверенная бизнес-модель и окупаемость от 6 месяцев.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать окупаемость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Узнать подробнее
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <Card className="relative gradient-border">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Магазинов</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">6 мес</div>
                        <div className="text-sm text-muted-foreground">Окупаемость</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">85%</div>
                        <div className="text-sm text-muted-foreground">Прибыльность</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                        <div className="text-sm text-muted-foreground">Поддержка</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="franchise" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Почему мы?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Передовые технологии и проверенная бизнес-модель для вашего успеха
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Zap', title: 'Быстрый старт', desc: 'Запуск бизнеса за 30 дней с полным обучением команды' },
              { icon: 'TrendingUp', title: 'Высокая маржа', desc: 'Средняя рентабельность 40-60% в первый год работы' },
              { icon: 'Shield', title: 'Защита территории', desc: 'Эксклюзивная зона работы без конкурентов сети' },
              { icon: 'Users', title: 'Обучение персонала', desc: 'Комплексная программа обучения продажам и сервису' },
              { icon: 'Package', title: 'Поставки товара', desc: 'Прямые контракты с производителями, лучшие цены' },
              { icon: 'Headphones', title: 'Маркетинг 360°', desc: 'Готовые кампании, материалы и digital-стратегия' }
            ].map((item, index) => (
              <Card key={index} className="hover-scale cursor-pointer border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Калькулятор окупаемости</h2>
            <p className="text-xl text-muted-foreground">
              Рассчитайте срок окупаемости франшизы для вашего региона
            </p>
          </div>
          <Card className="gradient-border">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <Label className="text-base mb-4 block">
                    Первоначальные инвестиции: {investment.toLocaleString('ru-RU')} ₽
                  </Label>
                  <Slider
                    value={[investment]}
                    onValueChange={(value) => setInvestment(value[0])}
                    min={1000000}
                    max={5000000}
                    step={100000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 000 000 ₽</span>
                    <span>5 000 000 ₽</span>
                  </div>
                </div>

                <div>
                  <Label className="text-base mb-4 block">
                    Ожидаемая выручка в месяц: {monthlyRevenue.toLocaleString('ru-RU')} ₽
                  </Label>
                  <Slider
                    value={[monthlyRevenue]}
                    onValueChange={(value) => setMonthlyRevenue(value[0])}
                    min={300000}
                    max={2000000}
                    step={50000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>300 000 ₽</span>
                    <span>2 000 000 ₽</span>
                  </div>
                </div>

                <div>
                  <Label className="text-base mb-4 block">
                    Ежемесячные расходы: {monthlyExpenses.toLocaleString('ru-RU')} ₽
                  </Label>
                  <Slider
                    value={[monthlyExpenses]}
                    onValueChange={(value) => setMonthlyExpenses(value[0])}
                    min={100000}
                    max={1000000}
                    step={25000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>100 000 ₽</span>
                    <span>1 000 000 ₽</span>
                  </div>
                </div>

                <div className="border-t border-border pt-8 mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Срок окупаемости</div>
                      <div className="text-3xl font-bold gradient-text">
                        {payback.months} мес ({payback.years} лет)
                      </div>
                    </div>
                    <div className="p-6 rounded-lg bg-secondary/10 border border-secondary/20">
                      <div className="text-sm text-muted-foreground mb-2">Прибыль в месяц</div>
                      <div className="text-3xl font-bold gradient-text">
                        {payback.monthlyProfit.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
                      <div className="text-sm text-muted-foreground mb-2">Годовая прибыль</div>
                      <div className="text-3xl font-bold gradient-text">
                        {payback.annualProfit.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <div className="p-6 rounded-lg bg-muted/20 border border-muted">
                      <div className="text-sm text-muted-foreground mb-2">ROI за год</div>
                      <div className="text-3xl font-bold gradient-text">
                        {((payback.annualProfit / investment) * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="conditions" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Условия франшизы</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачные условия сотрудничества без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl">Паушальный взнос</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Стоимость франшизы</span>
                  <span className="text-xl font-bold">500 000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Минимальные инвестиции</span>
                  <span className="text-xl font-bold">1 500 000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Роялти</span>
                  <span className="text-xl font-bold">5%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/50">
              <CardHeader>
                <CardTitle className="text-2xl">Что входит</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Брендбук и фирменный стиль',
                    'Обучение команды (2 недели)',
                    'Помощь в выборе локации',
                    'Дизайн-проект магазина',
                    'CRM-система и ПО',
                    'Маркетинговая поддержка'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши партнёры</h2>
            <p className="text-xl text-muted-foreground">
              Работаем с ведущими производителями напрямую
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Google', 'OnePlus', 'Realme', 'OPPO'].map((brand, index) => (
              <div key={index} className="text-center p-6 hover:opacity-100 transition-opacity">
                <div className="text-2xl font-bold">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и получите презентацию франшизы
            </p>
          </div>
          <Card className="gradient-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-base">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="city" className="text-base">Город</Label>
                  <Input id="city" placeholder="Москва" className="mt-2" />
                </div>
                <Button size="lg" className="w-full text-lg py-6">
                  Получить презентацию
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smartphone" size={24} className="text-primary" />
                <span className="text-xl font-bold gradient-text">SmartFranchise</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Франшиза смартфонов будущего с полной поддержкой партнёров
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@smartfranchise.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 SmartFranchise. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
