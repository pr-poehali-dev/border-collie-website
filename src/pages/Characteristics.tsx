
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Characteristics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Шапка сайта */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-800">Мир Бордер Колли</h1>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-700 hover:text-blue-900 font-medium">Главная</Link>
            <Link to="/history" className="text-blue-700 hover:text-blue-900 font-medium">История</Link>
            <Link to="/characteristics" className="text-blue-900 font-bold">Характеристики</Link>
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
              <BreadcrumbPage>Характеристики породы</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-8 text-blue-800">Характеристики породы Бордер Колли</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://source.unsplash.com/random/1200x800/?border-collie-portrait" 
                  alt="Внешность бордер колли" 
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Общая информация</h2>
                <ul className="space-y-2">
                  <li><span className="font-semibold">Происхождение:</span> Шотландия/Англия</li>
                  <li><span className="font-semibold">Группа породы:</span> Пастушьи собаки</li>
                  <li><span className="font-semibold">Размер:</span> Средний</li>
                  <li><span className="font-semibold">Рост:</span> 46-56 см</li>
                  <li><span className="font-semibold">Вес:</span> 14-20 кг</li>
                  <li><span className="font-semibold">Продолжительность жизни:</span> 12-15 лет</li>
                  <li><span className="font-semibold">Интеллект:</span> Высочайший (1 место среди всех пород)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="appearance" className="mb-12">
          <TabsList className="mb-6 bg-white">
            <TabsTrigger value="appearance">Внешность</TabsTrigger>
            <TabsTrigger value="character">Характер</TabsTrigger>
            <TabsTrigger value="health">Здоровье</TabsTrigger>
          </TabsList>
          
          <TabsContent value="appearance" className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Внешность бордер колли</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Общий вид</h3>
                <p className="mb-4">Бордер колли — гармонично сложенная, атлетичная собака среднего размера с элегантными пропорциями. Внешний вид отражает их высокий интеллект, бдительность и готовность к работе.</p>
                
                <h3 className="text-xl font-semibold mb-3">Голова и морда</h3>
                <p className="mb-4">Череп умеренно широкий, с заметным переходом от лба к морде. Морда средней длины, сужающаяся к носу, но не заостренная. Нос обычно черный, у собак коричневого окраса может быть коричневым.</p>
                
                <h3 className="text-xl font-semibold mb-3">Глаза</h3>
                <p>Одна из наиболее выразительных черт бордер колли — их проницательный, внимательный взгляд. Глаза обычно овальные, среднего размера, коричневого цвета (у голубых мерлей могут быть голубыми). Характерный "пастуший взгляд" является отличительной чертой породы.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Уши</h3>
                <p className="mb-4">Среднего размера, поставлены широко, стоячие или полустоячие. Когда собака внимательна, уши обычно приподняты.</p>
                
                <h3 className="text-xl font-semibold mb-3">Шерсть</h3>
                <p className="mb-4">Существует два типа шерсти: гладкошерстные (короткая шерсть) и длинношерстные (средней длины шерсть). У длинношерстных представителей имеется густой подшерсток и прямая или слегка волнистая шерсть средней длины, особенно пышная на хвосте, груди и задних конечностях.</p>
                
                <h3 className="text-xl font-semibold mb-3">Окрас</h3>
                <p>Наиболее распространенный окрас — черно-белый, но допускаются все цвета, включая коричневый, мраморный (мерль), трехцветный и другие вариации. Белые отметины обычно присутствуют на морде, шее, конечностях, кончике хвоста и на груди.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://source.unsplash.com/random/400x300/?black-white-border-collie" 
                alt="Черно-белый бордер колли" 
                className="rounded-lg object-cover h-[200px] w-full"
              />
              <img 
                src="https://source.unsplash.com/random/400x300/?brown-border-collie" 
                alt="Коричневый бордер колли" 
                className="rounded-lg object-cover h-[200px] w-full"
              />
              <img 
                src="https://source.unsplash.com/random/400x300/?blue-merle-border-collie" 
                alt="Мраморный (мерль) бордер колли" 
                className="rounded-lg object-cover h-[200px] w-full"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="character" className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Характер бордер колли</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Интеллект</h3>
                <p className="mb-4">Бордер колли признаны самыми умными собаками в мире. Они способны понимать сложные команды, обучаться новым задачам с минимальным количеством повторений и самостоятельно решать проблемы. Их способность к обучению просто поразительна.</p>
                
                <h3 className="text-xl font-semibold mb-3">Рабочая этика</h3>
                <p className="mb-4">Выведенные для пастушьей работы, бордер колли обладают невероятной трудовой этикой и целеустремленностью. Они получают удовольствие от выполнения задач и предпочитают быть занятыми. Бездействие для них мучительно.</p>
                
                <h3 className="text-xl font-semibold mb-3">Энергичность</h3>
                <p>Энергия бордер колли кажется неисчерпаемой. Они нуждаются в значительной физической активности и умственной стимуляции каждый день. Без достаточной нагрузки они могут становиться деструктивными или развивать проблемное поведение.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Отношение к семье</h3>
                <p className="mb-4">Несмотря на свою рабочую направленность, бордер колли формируют глубокую привязанность к своим владельцам. Они преданны, лояльны и стремятся угодить. Однако, в отличие от некоторых других пород, они не слишком навязчивы и могут быть относительно независимыми.</p>
                
                <h3 className="text-xl font-semibold mb-3">Пастуший инстинкт</h3>
                <p className="mb-4">Пастуший инстинкт в бордер колли очень силен. Они могут пытаться "пасти" все, что движется — от детей и других домашних животных до автомобилей. Это проявляется в фиксированном взгляде, пригибании к земле и обходах по кругу.</p>
                
                <h3 className="text-xl font-semibold mb-3">Чувствительность</h3>
                <p>Бордер колли — чрезвычайно чувствительные собаки, которые глубоко воспринимают настроение и эмоции своих владельцев. Они плохо реагируют на грубость или крик и лучше всего отвечают на позитивные методы обучения. Их чувствительность делает их прекрасными компаньонами для эмпатичных людей.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Особенности характера, требующие внимания</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Чрезмерный лай может быть проблемой, особенно если собака недостаточно стимулирована</li>
                <li>Склонность к навязчивым поведениям (погоня за тенями, светом, хвостом) требует ранней коррекции</li>
                <li>Высокая чувствительность к звукам может приводить к беспокойству во время грозы или фейерверков</li>
                <li>Природная настороженность к незнакомцам требует тщательной социализации</li>
                <li>Без должной социализации и обучения могут быть доминантными или агрессивными с другими собаками</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="health" className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Здоровье бордер колли</h2>
            
            <p className="mb-6">В целом, бордер колли считаются здоровой породой с относительно долгой продолжительностью жизни (12-15 лет). Однако, как и у всех пород, у них есть предрасположенность к определенным заболеваниям.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Наследственные заболевания</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><span className="font-semibold">Аномалия глаз колли (CEA)</span> — наследственное заболевание, которое может привести к слепоте</li>
                  <li><span className="font-semibold">Эпилепсия</span> — порода имеет генетическую предрасположенность к судорожным расстройствам</li>
                  <li><span className="font-semibold">Дисплазия тазобедренного сустава</span> — может привести к боли и ограничению подвижности</li>
                  <li><span className="font-semibold">Прогрессирующая атрофия сетчатки (PRA)</span> — приводит к постепенной потере зрения</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Чувствительность к лекарствам</h3>
                <p>Многие бордер колли имеют мутацию гена MDR1, которая делает их чувствительными к определенным лекарственным препаратам. Это может вызвать серьезные неврологические реакции. Важно провести тестирование собаки и информировать ветеринара об этой особенности.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Проблемы, связанные с активностью</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Травмы связок и сухожилий из-за интенсивных физических нагрузок</li>
                  <li>Артрит в пожилом возрасте как результат годов высокой активности</li>
                  <li>Повреждения подушечек лап при работе на твердых или грубых поверхностях</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Профилактика проблем со здоровьем</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Регулярные ветеринарные осмотры, особенно проверка глаз и суставов</li>
                  <li>Генетическое тестирование щенков и родителей на распространенные в породе заболевания</li>
                  <li>Поддержание оптимального веса для снижения нагрузки на суставы</li>
                  <li>Правильная физическая нагрузка с постепенным увеличением интенсивности</li>
                  <li>Качественное сбалансированное питание с достаточным количеством белка</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <img 
                src="https://source.unsplash.com/random/800x400/?border-collie-running" 
                alt="Активный бордер колли" 
                className="rounded-lg object-cover h-[300px]"
              />
            </div>
            
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Важно помнить!</h3>
              <p className="mb-2">Бордер колли — порода, созданная для интенсивной физической и умственной работы. Их здоровье напрямую связано с достаточным уровнем активности и стимуляции.</p>
              <p>Недостаток движения и занятий может привести не только к поведенческим проблемам, но и к ухудшению физического здоровья, включая ожирение, сердечно-сосудистые заболевания и преждевременное старение.</p>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Стандарт породы бордер колли</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Физические характеристики</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li><span className="font-semibold">Рост:</span> Кобели 48-56 см, суки 46-53 см</li>
                    <li><span className="font-semibold">Вес:</span> Кобели 14-20 кг, суки 12-19 кг</li>
                    <li><span className="font-semibold">Голова:</span> Умеренно широкая, с выраженным переходом ото лба к морде</li>
                    <li><span className="font-semibold">Прикус:</span> Ножницеобразный, полный комплект зубов</li>
                    <li><span className="font-semibold">Глаза:</span> Овальные, среднего размера, темно-коричневые (кроме мерлей)</li>
                    <li><span className="font-semibold">Хвост:</span> Умеренной длины, низко посаженный, с подвесом</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Шерсть и окрас</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Типы шерсти:</h3>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Гладкошерстный: короткая, густая шерсть по всему телу</li>
                    <li>Длинношерстный: от средней до длинной, прямая или слегка волнистая</li>
                  </ul>
                  
                  <h3 className="font-semibold mb-2">Допустимые окрасы:</h3>
                  <ul className="list-disc pl-6">
                    <li>Черно-белый (наиболее распространенный)</li>
                    <li>Коричнево-белый</li>
                    <li>Голубой мерль</li>
                    <li>Рыже-белый</li>
                    <li>Трехцветный</li>
                    <li>Сплошной черный (редко)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Темперамент</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">Согласно стандарту породы, идеальный бордер колли должен демонстрировать:</p>
                  <ul className="list-disc pl-6">
                    <li>Высокий интеллект и обучаемость</li>
                    <li>Жизнерадостность и энергичность</li>
                    <li>Бдительность и отзывчивость</li>
                    <li>Уравновешенный характер без признаков нервозности</li>
                    <li>Пастуший инстинкт и способность контролировать животных</li>
                    <li>Готовность к работе и выполнению задач</li>
                    <li>Лояльность к хозяину</li>
                  </ul>
                </CardContent>
              </Card>
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

export default Characteristics;
