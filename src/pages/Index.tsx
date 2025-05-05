
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Шапка сайта */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-800">Мир Бордер Колли</h1>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-700 hover:text-blue-900 font-medium">Главная</Link>
            <Link to="/history" className="text-blue-700 hover:text-blue-900 font-medium">История</Link>
            <Link to="/characteristics" className="text-blue-700 hover:text-blue-900 font-medium">Характеристики</Link>
            <Link to="/care" className="text-blue-700 hover:text-blue-900 font-medium">Уход</Link>
            <Link to="/gallery" className="text-blue-700 hover:text-blue-900 font-medium">Галерея</Link>
          </nav>
          <Button className="md:hidden" variant="ghost">Меню</Button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        {/* Главный баннер */}
        <section className="relative rounded-xl overflow-hidden mb-12">
          <img 
            src="https://source.unsplash.com/random/1200x600/?border-collie" 
            alt="Бордер колли" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Бордер колли — самая умная порода собак</h2>
              <p className="text-lg md:text-xl mb-6">Откройте для себя удивительный мир этих невероятно умных, преданных и энергичных собак</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Узнать больше</Button>
            </div>
          </div>
        </section>

        {/* Особенности породы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Особенности породы Бордер Колли</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Интеллект</CardTitle>
                <CardDescription>Самая умная порода собак в мире</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Бордер колли считаются самыми умными собаками в мире. Они способны запоминать сотни команд, понимать сложные инструкции и даже учиться на основе наблюдений.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Энергичность</CardTitle>
                <CardDescription>Неутомимые рабочие собаки</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Эти собаки обладают невероятной выносливостью и энергией. Им необходимы регулярные физические и умственные нагрузки для поддержания здоровья и счастливой жизни.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Преданность</CardTitle>
                <CardDescription>Верные компаньоны своих хозяев</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Бордер колли формируют глубокую связь со своими владельцами. Они всегда стремятся угодить и являются невероятно преданными и внимательными компаньонами.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* О породе */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">О породе Бордер Колли</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://source.unsplash.com/random/600x400/?border-collie-running" 
                alt="Бордер колли в движении" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-lg mb-4">Бордер колли — порода собак, выведенная в Шотландии для работы с овцами. Сегодня они признаны самыми интеллектуальными собаками в мире.</p>
              
              <p className="text-lg mb-4">Эти собаки среднего размера отличаются стройным, атлетичным телосложением и невероятной грацией в движении. Наиболее распространенный окрас — черно-белый, хотя встречаются и другие варианты.</p>
              
              <p className="text-lg mb-4">Благодаря своему интеллекту и трудовой этике, бордер колли преуспевают не только в пастушьей работе, но и в различных собачьих видах спорта: аджилити, фристайле, флайболе и многих других.</p>
              
              <p className="text-lg">Однако стоит помнить, что эта порода требует много внимания, физической активности и умственной стимуляции. Бордер колли не подходят для малоподвижного образа жизни.</p>
            </div>
          </div>
        </section>

        {/* Подходит ли вам бордер колли? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Подходит ли вам бордер колли?</h2>
          
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-xl font-semibold mb-4">Бордер колли может быть идеальным питомцем, если вы:</h3>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Ведете активный образ жизни и готовы уделять минимум 1-2 часа в день физическим упражнениям</li>
              <li>Готовы обеспечить регулярную умственную стимуляцию через обучение и игры</li>
              <li>Можете обеспечить ранняя социализация и последовательное обучение</li>
              <li>Имеете опыт содержания собак или готовы много учиться</li>
              <li>Располагаете достаточным пространством: домом с огороженным двором или доступом к паркам</li>
            </ul>

            <Separator className="my-6" />
            
            <h3 className="text-xl font-semibold mb-4">Бордер колли может НЕ подойти вам, если вы:</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Ведете малоподвижный образ жизни</li>
              <li>Много работаете и редко бываете дома</li>
              <li>Живете в небольшой квартире без возможности регулярных прогулок</li>
              <li>Не готовы к постоянному обучению и тренировкам</li>
              <li>Имеете маленьких детей (бордер колли могут проявлять пастушьи инстинкты)</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Подвал сайта */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Мир Бордер Колли</h2>
              <p>Всё о самой умной породе собак</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Разделы</h3>
                <ul className="space-y-1">
                  <li><Link to="/" className="hover:underline">Главная</Link></li>
                  <li><Link to="/history" className="hover:underline">История</Link></li>
                  <li><Link to="/characteristics" className="hover:underline">Характеристики</Link></li>
                  <li><Link to="/care" className="hover:underline">Уход</Link></li>
                  <li><Link to="/gallery" className="hover:underline">Галерея</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Контакты</h3>
                <p>info@bordercollie.ru</p>
                <p>+7 (999) 123-45-67</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 bg-blue-600" />
          
          <div className="text-center">
            <p>&copy; 2025 Мир Бордер Колли. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
