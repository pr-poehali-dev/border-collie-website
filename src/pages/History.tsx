
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Шапка сайта */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-800">Мир Бордер Колли</h1>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-700 hover:text-blue-900 font-medium">Главная</Link>
            <Link to="/history" className="text-blue-900 font-bold">История</Link>
            <Link to="/characteristics" className="text-blue-700 hover:text-blue-900 font-medium">Характеристики</Link>
            <Link to="/care" className="text-blue-700 hover:text-blue-900 font-medium">Уход</Link>
            <Link to="/gallery" className="text-blue-700 hover:text-blue-900 font-medium">Галерея</Link>
          </nav>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>История породы</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-8 text-blue-800">История породы Бордер Колли</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://source.unsplash.com/random/1200x800/?border-collie-shepherd" 
                  alt="Исторический бордер колли" 
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Происхождение</h2>
                <p className="mb-4">Бордер колли — одна из старейших пастушьих пород, происходящая из приграничных районов между Шотландией и Англией (отсюда и название "бордер" — граница).</p>
                <p>Их предки были завезены в Британию римлянами более 2000 лет назад и постепенно адаптировались к суровому климату и сложному ландшафту пограничных территорий.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Развитие породы</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Ранняя история</h3>
              <p className="mb-6">На протяжении веков пастухи отбирали самых умных и способных собак для работы с овцами. Ценились животные, которые могли работать интуитивно, понимая малейшие команды и способные управлять большими стадами с минимальным вмешательством человека.</p>
              
              <h3 className="text-xl font-semibold mb-3">Олд Хемп</h3>
              <p>Современная порода бордер колли прослеживает свою родословную от выдающейся собаки по имени Олд Хемп (родился в 1893 году). Он принадлежал Адаму Телферу и продемонстрировал такие исключительные пастушьи качества, что многие заводчики стремились получить щенков от него. Сегодня практически все чистокровные бордер колли являются потомками Олд Хемпа.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Официальное признание</h3>
              <p className="mb-6">В 1906 году был основан Международный клуб овчарок (International Sheep Dog Society), который начал вести реестр и организовывать соревнования для пастушьих собак.</p>
              
              <h3 className="text-xl font-semibold mb-3">Название породы</h3>
              <p className="mb-6">Термин "бордер колли" впервые был использован в 1915 году для отличия этих собак от других разновидностей колли.</p>
              
              <h3 className="text-xl font-semibold mb-3">Современное признание</h3>
              <p>Кеннел Клуб (Великобритания) официально признал бордер колли как самостоятельную породу в 1976 году, а Американский клуб собаководства (AKC) — только в 1995 году.</p>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Интересные факты из истории</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Бордер колли изначально называли просто рабочими колли или пастушьими собаками.</li>
              <li>Королева Виктория была большой поклонницей этих собак после того, как увидела их работу.</li>
              <li>Первый зарегистрированный бордер колли в США появился только в 1940-х годах.</li>
              <li>Традиционные соревнования пастушьих собак в Великобритании проводятся с 1873 года.</li>
              <li>Бордер колли были выведены исключительно для рабочих качеств, а не для внешнего вида, что объясняет их исключительные интеллектуальные способности.</li>
            </ul>
          </div>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Бордер колли в современном мире</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">От пастбища к спорту</h3>
                <p className="mb-4">С уменьшением традиционного овцеводства бордер колли нашли новое применение в различных собачьих видах спорта. Их интеллект, скорость и ловкость делают их идеальными участниками соревнований по аджилити, фристайлу, флайболу и другим дисциплинам.</p>
                
                <h3 className="text-xl font-semibold mb-3">Служба спасения</h3>
                <p>Благодаря своему острому нюху, выносливости и способности работать в сложных условиях, бордер колли также используются в поисково-спасательных операциях.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Звезды экрана</h3>
                <p className="mb-4">Эти умные собаки часто появляются в фильмах и телешоу. Пожалуй, самым известным бордер колли был Рекс из фильма "Бэйб: Четвероногий малыш".</p>
                
                <h3 className="text-xl font-semibold mb-3">Рекордсмены</h3>
                <p>Бордер колли регулярно устанавливают мировые рекорды в различных дисциплинах. Например, собака по кличке Чейзер выучила названия более 1000 игрушек, а бордер колли по имени Стрик установил рекорд как самая быстрая собака, умеющая лопать воздушные шарики.</p>
              </div>
            </div>
          </CardContent>
        </Card>
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

export default History;
