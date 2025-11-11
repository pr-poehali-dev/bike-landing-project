import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const bikes = [
    {
      id: 1,
      name: 'Veloce Carbon Pro',
      category: 'Шоссейный',
      price: '₽489 000',
      image: 'https://cdn.poehali.dev/projects/019bbfdd-2603-4516-8b56-9a904e7a1796/files/be517e76-d84f-4732-987f-583192e90bdc.jpg',
      features: ['Карбоновая рама', 'Shimano Dura-Ace', 'Вес 6.8 кг']
    },
    {
      id: 2,
      name: 'Terra Elite MTB',
      category: 'Горный',
      price: '₽395 000',
      image: 'https://cdn.poehali.dev/projects/019bbfdd-2603-4516-8b56-9a904e7a1796/files/5877f66e-53e6-4ee3-9d7e-24066c8a83cc.jpg',
      features: ['Алюминиевая рама', 'Rock Shox Pike', 'Гидравлические тормоза']
    },
    {
      id: 3,
      name: 'Urban Classic',
      category: 'Городской',
      price: '₽285 000',
      image: 'https://cdn.poehali.dev/projects/019bbfdd-2603-4516-8b56-9a904e7a1796/files/09d55572-7002-460b-ba30-1057aacfe98e.jpg',
      features: ['Титановая рама', 'Gates Carbon Drive', 'Внутренний планетарный хаб']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">ВЕЛОСИПЕДЫ</div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                О бренде
              </button>
              <button
                onClick={() => scrollToSection('technology')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Технологии
              </button>
              <Button size="sm" className="ml-4">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
              Искусство
              <br />
              движения
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Премиальные велосипеды, созданные для тех, кто ценит качество, инженерное совершенство и стиль
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-base px-8">
                Смотреть коллекцию
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Забронировать тест-драйв
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="min-h-screen py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Коллекция</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Каждая модель — результат многолетних исследований и стремления к совершенству
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {bikes.map((bike, index) => (
                <Card
                  key={bike.id}
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in-up border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square bg-white overflow-hidden">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                      {bike.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{bike.name}</h3>
                    <div className="text-3xl font-light mb-6">{bike.price}</div>
                    <ul className="space-y-2 mb-6">
                      {bike.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant="outline">
                      Подробнее
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-12">О бренде</h2>
              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <p className="text-2xl font-light text-foreground">
                  Мы создаём велосипеды для тех, кто понимает разницу между движением и путешествием
                </p>
                <p>
                  С момента основания в 1987 году наша мастерская посвящена единственной цели — созданию идеального велосипеда. Каждая рама проектируется с учётом индивидуальных особенностей райдера, каждый компонент тщательно подбирается для достижения баланса между производительностью и комфортом.
                </p>
                <p>
                  Мы не гонимся за массовым производством. Каждый год мы создаём не более 500 велосипедов, и каждый из них — результат многомесячной работы наших инженеров и мастеров. Это не просто транспорт. Это философия движения.
                </p>
                <div className="grid md:grid-cols-3 gap-8 pt-12">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">37</div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">500</div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">Велосипедов в год</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">15</div>
                    <div className="text-sm uppercase tracking-wider text-muted-foreground">Стран мира</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="min-h-screen py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Технологии</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Инновации, которые меняют представление о велосипедах
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="mb-6">
                  <Icon name="Zap" size={48} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Аэродинамика нового поколения</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Рамы спроектированы в аэродинамической трубе с учётом реального положения райдера. Экономия энергии до 18% на скорости 40 км/ч по сравнению с традиционными конструкциями.
                </p>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="mb-6">
                  <Icon name="Layers" size={48} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Карбон высочайшего качества</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Используем карбоновые волокна Toray T1100G — самый прочный и лёгкий материал в индустрии. 16 слоёв укладываются вручную для достижения идеального баланса жёсткости и комфорта.
                </p>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="mb-6">
                  <Icon name="Settings" size={48} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Интеграция без компромиссов</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Полная интеграция всех кабелей, гидролиний и электронных систем внутри рамы. Чистый силуэт, защита от внешних воздействий и улучшенная аэродинамика.
                </p>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="mb-6">
                  <Icon name="Sparkles" size={48} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Индивидуальная геометрия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Каждый велосипед может быть изготовлен по индивидуальным размерам. Точная настройка геометрии обеспечивает оптимальную посадку и максимальную эффективность педалирования.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="text-2xl font-bold mb-4">ВЕЛОСИПЕДЫ</div>
                <p className="text-muted-foreground mb-6">
                  Премиальные велосипеды ручной работы для ценителей совершенства
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Компания</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Команда</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Поддержка</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Сервис</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
              © 2024 Велосипеды. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
