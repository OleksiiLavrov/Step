# Step<!DOCTYPE html>
<html lang="ru">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
   <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
   <link rel="stylesheet" href="css/style.css">
   <link rel="shortcut icon" href="./img/icon-logo-cross-white.png" type="image/x-icon">
   <title>XOD</title>
</head>

<body>
   <header id="header" class="header">
   <div class="header_nav">
      <a class="col-2" href="#">
         <div class="logo">
            <img src="./img/icon-logo-cross.png" alt="logo-cross">
            <img src="./img/icon-logo-trian.png" alt="logo-trian">
            <img src="./img/icon-logo-circle.png" alt="logo-circle">
            <div class="logo-content">
               <span>future</span>
               <span>academy</span>
            </div>
         </div>
         <div class="logo dark">
            <img src="./img/icon-logo-cross-white.png" alt="logo-cross">
            <img src="./img/icon-logo-trian-white.png" alt="logo-trian">
            <img src="./img/icon-logo-circle-white.png" alt="logo-circle">
            <div class="logo-content">
               <span>future</span>
               <span>academy</span>
            </div>
         </div>
      </a>
      <ul class="header_nav-list col-10">
         <li class="header_nav-item ">
            <a class="header_nav-link icon bold" href="#"> <img class="header_nav-icon" src="./img/icon-courses.png"
                  alt="icon-courses">Все
               курсы</a>
         </li>
         <li class="header_nav-item mobile">
            <a class="header_nav-link" href="#">Об академии</a>
         </li>
         <li class="header_nav-item ">
            <a class="header_nav-link" href="#">Мероприятия</a>
         </li>
         <li class="header_nav-item mobile">
            <a class="header_nav-link" href="#">Новости</a>
         </li>
         <li class="header_nav-item ">
            <a class="header_nav-link" href="#">База знаний</a>
         </li>
         <li class="header_nav-item">
            <a class="header_nav-link" href="#">Карьера</a>
         </li>
         <li class="header_nav-item mobile">
            <a class="header_nav-link" href="#">Контакты</a>
         </li>
         <li class="header_nav-item ">
            <a class="header_nav-link" href="tel:+380971755598">+(380)97-175-55-98</a>
         </li>
         <li class="header_nav-item ">
            <a class="header_nav-link icon bold header_dropdown-toggle" href="#">
               <img class="header_nav-icon" src="./img/icon-location.png" alt="icon-location">Киев</a>
         </li>
         <li class="header_nav-item ">
            <a class="header_nav-link icon bold" href="#">
               <img class="header_nav-icon" src="./img/icon-login.png" alt="icon-login">Войти</a>
         </li>
         <li class="header_nav-item mobile">
            <a class="header_nav-link bold" href="https://goo.gl/maps/HxJcQSeeSKcAHKXA7" target="_blank">г. Киев, прсп.
               Бажана, д.
               50</a>
         </li>
         <li class="header_nav-item mobile">
            <a class="header_nav-link bold" href="mailto:info@hodfutureacademy.ua">info@hodfutureacademy.ua</a>
         </li>
         <li class="header_nav-item mobile">
            <ul class="header_socials-list">
               <li><a href="#"><img src="./img/vkontakt.png" alt="vkontakt-logo"></a></li>
               <li><a href="#"><img src="./img/instagram.png" alt="instagram-logo"></a></li>
               <li><a href="#"><img src="./img/facebook.png" alt="facebook-logo"></a></li>
               <li><a href="#"><img src="./img/youtube.png" alt="youtube-logo"></a></li>
               <li><a href="#"><img src="./img/telegram.png" alt="telegram-logo"></a></li>
            </ul>
         </li>
      </ul>
      <a href="#" class="burger">
         <span class="burger_line"></span>
         <span class="burger_line"></span>
         <span class="burger_line"></span>
      </a>
   </div>
   <div class="header_dropdown">
      <div class="header_dropdown-menu">
         <div class="header_dropdown-top">
            <h2 class="header_dropdown-title">Выберите свой город</h2>
            <a href="#"><img class="header_dropdown-close" src="./img/icon-close.png" alt="close"></a>
         </div>
         <ul class="header_dropdown-list">
            <li><a class="header_dropdown-item" href="#">Киев</a></li>
            <li><a class="header_dropdown-item" href="#">Харьков</a></li>
            <li><a class="header_dropdown-item" href="#">Одесса</a></li>
            <li><a class="header_dropdown-item" href="#">Львов</a></li>
            <li><a class="header_dropdown-item" href="#">Запорожье</a></li>
            <li><a class="header_dropdown-item" href="#">Кривой Рог</a></li>
            <li><a class="header_dropdown-item" href="#">Днепр</a></li>
            <li><a class="header_dropdown-item" href="#">Полтава</a></li>
         </ul>
      </div>
   </div>
</header>
   <main>
      <section id="hero" class="hero">
   <div class="hero-bg">
      <div class="col-6 hero_wrapper">
         <h1 class="hero_title title">Образовательная платформа ХОД Future Academy</h1>
         <p class="hero_descr">Актуальные знания для новичков и профессионалов</p>
      </div>
   </div>

</section>
      <section id="courses" class="courses section row">
   <div class="col-md-3 courses_owl-wrapper">
      <figure class="courses_figure">
         <img src="./img/owl-comment.png" alt="Owl comment">
         <figcaption class="courses_figure-content">
            <h3 class="courses_figure-title">Кем Вы хотите стать?</h3>
            <p class="courses_figure-descr">Пора найти себя<br />и выбрать подходящий курс :) <br /> Удачи!</p>
         </figcaption>
      </figure>
      <img class="courses_owl-img" src="./img/owl.png" alt="Mr Owl">
   </div>
   <div class="col-md-9 courses_tabs-wrapper">
      <div class="courses_tabs">
         <a href="#courses-kids" data-tab="1" class="courses_tab _active">
            <figure class="courses_tab-figure">
               <img src="./img/kids.png" alt="Kids courses">
               <figcaption class="courses_tab-figure-content">
                  <h4>Дети</h4>
                  <span>8 — 14 лет</span>
               </figcaption>
            </figure>
         </a>
         <a href="#courses-teens" data-tab="2" class="courses_tab">
            <figure class="courses_tab-figure">
               <img src="./img/teens.png" alt="Teens courses">
               <figcaption class="courses_tab-figure-content">
                  <h4>Подростки</h4>
                  <span>14 — 18 лет</span>
               </figcaption>
            </figure>
         </a>
         <a href="#courses-adults" data-tab="3" class="courses_tab">
            <figure class="courses_tab-figure">
               <img src="./img/adults.png" alt="Adults courses">
               <figcaption class="courses_tab-figure-content">
                  <h4>Взрослые</h4>
                  <span>18 +</span>
               </figcaption>
            </figure>
         </a>
      </div>
      <div class="courses_tab-content">
         <ul id="courses-kids" data-tab-content="1" class="courses_tab-pane _active">
            <li><a href="#">Шахматы</a></li>
            <li><a href="#">Мультимедиа</a></li>
            <li><a href="#">Английский язык</a></li>
            <li><a href="#">Робототехника</a></li>
            <li><a href="#">Электроника</a></li>
            <li><a href="#">Диджитализация</a></li>
         </ul>
         <ul id="courses-teens" data-tab-content="2" class="courses_tab-pane">
            <li><a href="#">Мультимедиа</a></li>
            <li><a href="#">Английский язык</a></li>
            <li><a href="#">Soft skills</a></li>
            <li><a href="#">Электроника</a></li>
            <li><a href="#">Дизайн</a></li>
            <li><a href="#">Програмирование</a></li>
            <li><a href="#">Web-разработка</a></li>
            <li><a href="#">Блогинг</a></li>
         </ul>
         <ul id="courses-adults" data-tab-content="3" class="courses_tab-pane">
            <li><a href="#">Мультимедиа</a></li>
            <li><a href="#">Английский язык</a></li>
            <li><a href="#">Дизайн</a></li>
            <li><a href="#">Програмирование</a></li>
            <li><a href="#">Web-разработка</a></li>
            <li><a href="#">Блогинг</a></li>
            <li><a href="#">Диджитализация</a></li>
            <li><a href="#">Soft skills</a></li>
            <li><a href="#">Электроника</a></li>

         </ul>
      </div>
   </div>
</section>
      <section id="video" class="video section">
   <div class="video_wrapper _enabled">
      <a class="video_link" href="https://www.youtube.com/embed/K10Kez02kUg">
         <picture>
            <source srcset="https://i.ytimg.com/vi_webp/K10Kez02kUg/maxresdefault.webp" type="image/webp">
            <img class="video_media" src="https://i.ytimg.com/vi/K10Kez02kUg/maxresdefault.jpg" alt="Video picture">
         </picture>
      </a>
      <button class="video_btn" aria-label="Start video">
         <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
            <path class="video_btn-shape ytp-large-play-button-bg"
               d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
               fill="#f00"></path>
            <path class="video_btn-icon" d="M 45,24 27,14 27,34" fill="#fff"></path>
         </svg>
      </button>
   </div>
</section>
      <section id="counter" class="counter section">
   <div class="counter_wrapper">
      <h3 class="counter_title">Актуальные знания от признанных экспертов рынка
         для новичков и практикующих специалистов.</h3>
      <ul class="counter_content">
         <li class="counter_content-item">
            <div class="counter-value" data-counter-value="600">0</div>
            <span>Курсов</span>
         </li>
         <li class="counter_content-item">
            <div class="counter-value" data-counter-value="182">0</div>
            <span>Ведущих<br />преподавателя</span>
         </li>
         <li class="counter_content-item">
            <div class="counter-value" data-counter-value="14795">0</div>
            <span>Выпускников</span>
         </li>
      </ul>
   </div>
</section>
      <section id="events" class="activities section">
   <figure class="activities_card event">
      <div class="activities_card-date event">
         <span>25</span>
         <span>ноября</span>
      </div>
      <!--Show when width is less than 800px-->
      <h3 class="activities_card-title event w-800">День открытых дверей</h3>
      <figcaption class="activities_card-body">
         <!--Show when width is more than 800px-->
         <h3 class="activities_card-title event">День открытых дверей</h3>
         <p class="activities_card-text event">Приглашаем всех желающих на бесплатную экскурсию
            в мир востребованных профессий и полезных навыков</p>
      </figcaption>
      <a href="#" class="activities_card-btn">Записаться</a>
   </figure>
   <figure class="activities_card educ">
      <img class="activities_card-img educ" src="./img/educ.png" alt="Education">
      <figcaption class="activities_card-body educ">
         <h5 class="activities_card-title educ">Программы обучения</h5>
         <p class="activities_card-text educ">В списке наших курсов вы сможете найти профессию и занятие по душе,
            изучить
            новое и получить практические знания, которые помогут получить работу мечты.</p>
         <a href="#" class="activities_card-btn">Подробнее</a>
      </figcaption>
   </figure>
   <figure class=" activities_card news">
      <img class="activities_card-img" src="./img/news.png" alt="News">
      <figcaption class="activities_card-body">
         <h5 class="activities_card-title news"><a href="#">Новости Академии</a></h5>
      </figcaption>
   </figure>
   <figure class="activities_card it">
      <img class="activities_card-img" src="./img/it.png" alt="It">
      <figcaption class="activities_card-body">
         <h5 class="activities_card-title it"><a href="#">Мир IT</a></h5>
      </figcaption>
   </figure>
   <figure class=" activities_card game">
      <img class="activities_card-img game" src="./img/game.png" alt="Game">
      <figcaption class="activities_card-body">
         <h5 class="activities_card-title game"><a href="#">Попробуй!</a></h5>
         <p class="activities_card-text game">Пройдите тест и узнайте свои способности
            в сфере информационных технологий</p>
      </figcaption>
   </figure>
</section>
      <section id="comments" class="comments">
   <h1 class="comments_title title">Отзывы наших студентов</h1>
   <div class="swiper comments_swiper">
      <div class="comments_ swiper-wrapper">
         <div class="comments_ swiper-slide">
            <div class="comments_card">
               <figure class="comments_card-figure">
                  <img class="comments_card-img" src="./img/photo.png" alt="Photo">
                  <figcaption class="comments_card-figcaption">
                     <h3 class="comments_card-name">Имя Фамилия</h3>
                     <p class="comments_card-text">Студент курса «WEB-разработчик»</p>
                  </figcaption>
               </figure>
               <p class="comments_card-body">Lorem ipsu Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                  dolorum. sodales, scelerisque eros non, ultrices magna.
               </p>
               <div class="comments_card-rate">
                  <img class="comments_card-rate-img" src="./img/rate.png" alt="Rate">
               </div>
            </div>
         </div>
         <div class="comments_ swiper-slide">
            <div class="comments_card">
               <figure class="comments_card-figure">
                  <img class="comments_card-img" src="./img/photo.png" alt="Photo">
                  <figcaption class="comments_card-figcaption">
                     <h3 class="comments_card-name">Имя Фамилия</h3>
                     <p class="comments_card-text">Студент курса «WEB-разработчик»</p>
                  </figcaption>
               </figure>
               <p class="comments_card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl
                  at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis
                  varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna.
               </p>
               <div class="comments_card-rate">
                  <img class="comments_card-rate-img" src="./img/rate.png" alt="Rate">
               </div>
            </div>
         </div>
         <div class="comments_ swiper-slide">
            <div class="comments_card">
               <figure class="comments_card-figure">
                  <img class="comments_card-img" src="./img/photo.png" alt="Photo">
                  <figcaption class="comments_card-figcaption">
                     <h3 class="comments_card-name">Имя Фамилия</h3>
                     <p class="comments_card-text">Студент курса «WEB-разработчик»</p>
                  </figcaption>
               </figure>
               <p class="comments_card-body">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis possimus optio porro a doloremque culpa voluptate inventore maxime ipsam!
               </p>
               <div class="comments_card-rate">
                  <img class="comments_card-rate-img" src="./img/rate.png" alt="Rate">
               </div>
            </div>
         </div>
         <div class="comments_ swiper-slide">
            <div class="comments_card">
               <figure class="comments_card-figure">
                  <img class="comments_card-img" src="./img/photo.png" alt="Photo">
                  <figcaption class="comments_card-figcaption">
                     <h3 class="comments_card-name">Имя Фамилия</h3>
                     <p class="comments_card-text">Студент курса «WEB-разработчик»</p>
                  </figcaption>
               </figure>
               <p class="comments_card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus vel
                  voluptatem cupiditate amet et neque, deserunt animi officia eum consequuntur? lore10

               </p>
               <div class="comments_card-rate">
                  <img class="comments_card-rate-img" src="./img/rate.png" alt="Rate">
               </div>
            </div>
         </div>
         <div class="comments_ swiper-slide">
            <div class="comments_card">
               <figure class="comments_card-figure">
                  <img class="comments_card-img" src="./img/photo.png" alt="Photo">
                  <figcaption class="comments_card-figcaption">
                     <h3 class="comments_card-name">Имя Фамилия</h3>
                     <p class="comments_card-text">Студент курса «WEB-разработчик»</p>
                  </figcaption>
               </figure>
               <p class="comments_card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus vel
                  voluptatem cupiditate amet et neque, deserunt animi officia eum consequuntur? Lorem ipsum dolor sit
                  amet.

               </p>
               <div class="comments_card-rate">
                  <img class="comments_card-rate-img" src="./img/rate.png" alt="Rate">
               </div>
            </div>
         </div>
         <div class="comments_ swiper-slide">
            <div class="comments_card">
               <figure class="comments_card-figure">
                  <img class="comments_card-img" src="./img/photo.png" alt="Photo">
                  <figcaption class="comments_card-figcaption">
                     <h3 class="comments_card-name">Имя Фамилия</h3>
                     <p class="comments_card-text">Студент курса «WEB-разработчик»</p>
                  </figcaption>
               </figure>
               <p class="comments_card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl
                  at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis
                  varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna.
               </p>
               <div class="comments_card-rate">
                  <img class="comments_card-rate-img" src="./img/rate.png" alt="Rate">
               </div>
            </div>
         </div>
         <div class="comments_ swiper-slide">
            <div class="comments_card">
               <figure class="comments_card-figure">
                  <img class="comments_card-img" src="./img/photo.png" alt="Photo">
                  <figcaption class="comments_card-figcaption">
                     <h3 class="comments_card-name">Имя Фамилия</h3>
                     <p class="comments_card-text">Студент курса «WEB-разработчик»</p>
                  </figcaption>
               </figure>
               <p class="comments_card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl
                  at augue dapibus, id tristique lorem placerat. Curaque eros non, ultrices magna.
               </p>
               <div class="comments_card-rate">
                  <img class="comments_card-rate-img" src="./img/rate.png" alt="Rate">
               </div>
            </div>
         </div>
         <div class="comments_ swiper-slide">
            <div class="comments_card">
               <figure class="comments_card-figure">
                  <img class="comments_card-img" src="./img/photo.png" alt="Photo">
                  <figcaption class="comments_card-figcaption">
                     <h3 class="comments_card-name">Имя Фамилия</h3>
                     <p class="comments_card-text">Студент курса «WEB-разработчик»</p>
                  </figcaption>
               </figure>
               <p class="comments_card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus vel
                  voluptatem cupiditate amet et neque, deserunt animi officia eum consequuntur? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Itaque, molestiae?

               </p>
               <div class="comments_card-rate">
                  <img class="comments_card-rate-img" src="./img/rate.png" alt="Rate">
               </div>
            </div>
         </div>
      </div>
      <div class="comments_ swiper-scrollbar"></div>
   </div>
</section>
      <section id="about" class="about section">
   <h1 class="about_title title">Добро пожаловать в Академию будущего ХОД</h1>
   <ul class="about_list">
      <li class="about_list-item">
         <img src="./img/educ-process.png" alt="Educ-process">
         <p class="about_list-text">Передовой подход
            к образовательному процессу</p>
      </li>
      <li class="about_list-item">
         <img src="./img/course-base.png" alt="Course-base">
         <p class="about_list-text">Непрерывное усовершенствование
            и пополнение базы курсов</p>
      </li>
      <li class="about_list-item">
         <img src="./img/teacher.png" alt="Teacher">
         <p class="about_list-text">Только практикующие преподаватели</p>
      </li>
      <li class="about_list-item">
         <img src="./img/mentor.png" alt="Mentor">
         <p class="about_list-text">Сопровождение на всех этапах. От начала обучения до трудоустройства</p>
      </li>
   </ul>
</section>
      <section id="contact" class="contact section">
   <div class="contact_wrapper">
      <div class="contact_descr">
         <h4 class="contact_descr-title">Помочь с выбором?</h4>
         <p class="contact_descr-text">
            Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы
            и подберут подходящий вариант обучения.</p>
      </div>
      <form class="contact_form">
         <input type="text" placeholder="Ваше имя" class="contact_form-name">
         <input type="tel" placeholder="Ваш телефон +(380)" class="contact_form-phone">
         <input type="text" placeholder="Ваш e-mail" class="contact_form-email">
         <p class="contact_form-rules">Нажимая на кнопку, я соглашаюсь
            на обработку персональных данных
            и с правилами пользования Платформой</p>
         <button type="submit" class="contact_form-btn">Отправить</button>
      </form>
   </div>
</section>
   </main>
   <footer class="footer section" id="footer">
   <div class="footer_wrapper">
      <ul class="footer_contact">
         <li><a class="footer_contact-link" href="#">
               <div class="logo dark">
                  <img src="./img/icon-logo-cross-white.png" alt="logo-cross">
                  <img src="./img/icon-logo-trian-white.png" alt="logo-trian">
                  <img src="./img/icon-logo-circle-white.png" alt="logo-circle">
                  <div class="logo-content">
                     <span>future</span>
                     <span>academy</span>
                  </div>
               </div>
            </a></li>
         <li><a class="footer_contact-link" href="tel:+380971755598">+(380)97-175-55-98</a></li>
         <li><a class="footer_contact-link" href="https://goo.gl/maps/HxJcQSeeSKcAHKXA7" target="_blank">г. Киев, прсп.
               Бажана, д.
               50</a></li>
         <li><a class="footer_contact-link" href="mailto:info@hodfutureacademy.ua">info@hodfutureacademy.ua</a></li>
         <li>
            <div class="footer_contact-socials">
               <a href="#"><img src="./img/vkontakt-white.png" alt="vkontakt"></a>
               <a href="#"><img src="./img/instagram-white.png" alt="instagram"></a>
               <a href="#"><img src="./img/facebook-white.png" alt="facebook"></a>
               <a href="#"><img src="./img/youtube-white.png" alt="youtube"></a>
               <a href="#"><img src="./img/telegram-white.png" alt="telegram"></a>
            </div>
         </li>
      </ul>
   </div>
</footer>

   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"></script>
   <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
   <script src="js/script.js"></script>
</body>

</html>
