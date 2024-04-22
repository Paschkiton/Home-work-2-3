import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Poster } from "./components/Poster";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import "./App.css";



function App() {
  return (
    <>
      <Header/>
      <Card  src={"https://fikiwiki.com/uploads/posts/2022-02/1645014533_3-fikiwiki-com-p-kartinki-arbuzi-3.jpg"} alt={"арбуз"} name={"Привет всем, Я Паша "} text={"Меня зовут Павел, и я увлеченный человек, стремящийся к развитию в сфере информационных технологий."}  />
      <h2 className="bossText">Компетенции, с которыми я знаком</h2>
      <Poster name={"Владение языками программирования"} text={"Обучаюсь в колледже, и обладаю базовыми заниями о многих ЯП:\nPython, C++, Kotlin, C#, JS"}/>
      <Poster name={"Умение работать с базами данных"} text={"Знаком с БД, умею писать запросы. Работал с MySQL,PostgreSql"}/>
      <Poster name={"Знание основ веб-разработки"} text={"Знаю основы верстки, работы с HTML,CSS,JS.Также имею опыт работы с Jquery,Bootstrap"}/>
      <Poster name={"Разработка Телеграм ботов"} text={"Просто интересное хобби. Писал на Python на библиотеке Telebot"}/>
      <Poster name={"Заключение"} text={"Конечно я неочень углублен и образован в каждой компетенции, но все впереди)))"}/>
        <h2 className="bossText"> Компетенции, которые я хочу узнать</h2>
      <Card  src={"https://avatars.mds.yandex.net/i?id=46569cf772289102036c57be6cb221d74f77690c-11951022-images-thumbs&n=13"} alt={"Git"} name={"Git"} text={"Я хочу научиться пользоваться Git, чтобы эффективно управлять версиями моих проектов и совместно работать над кодом с другими разработчиками."}  />
      <Card  src={"https://perm.mavlad.ru/bitrix/templates/aspro_next/images/content/mb.png"} alt={"Мобильная разработка"} name={"Мобильная разработка"} text={"Изучить принципы разработки мобильных приложений для создания качественных приложений для iOS и Android."}  />
      <Card  src={"http://netplus.ng/wp-content/uploads/2015/11/Untitled-design-8.jpg"} alt={"Машинное обучение"} name={"Машинное обучение"} text={"Погрузиться в машинное обучение и искусственный интеллект для создания инновационных решений в области данных."}  />
      <Card  src={"https://avatars.mds.yandex.net/i?id=c12b34ab2eeb9434161b43afd2eed2fd8e324f23-4958973-images-thumbs&n=13"} alt={"Docker"} name={"Docker"} text={"Приобрести навыки работы с контейнеризацией (например, Docker) для упрощения развертывания приложений."}  />
      <Card  src={"https://shkola13nefteyugansk-r86.gosweb.gosuslugi.ru/netcat_files/94/278/vector_cyber_security.jpg"} alt={"Сетевая безопасность"} name={"Сетевая безопасность"} text={"Изучить сетевую безопасность для защиты приложений и данных от киберугроз"}  />
      <Card  src={"https://chimerical-madeleine-a2301a.netlify.app/img/skills/react.jpg"} alt={"React"} name={"React"} text={"Погрузиться в разработку веб-приложений с использованием современных фреймворков  React, Angular, Vue.js."}  />
      <Card  src={"https://avatars.mds.yandex.net/i?id=6ed8830728e94253543c044d0e825506c7bcf3a5-10698550-images-thumbs&n=13"} alt={"Azure"} name={"Azure"} text={"Приобрести навыки работы с облачными платформами  AWS, Azure, Google Cloud для развертывания и масштабирования приложений."}  />
      <Card  src={"https://avatars.dzeninfra.ru/get-zen_doc/4467222/pub_64e30e372fc9251e73769b13_64e30f1ee3af2966a556d889/scale_1200"} alt={"UI/UX"} name={"UI/UX"} text={"Освоение принципов разработки интерфейсов пользователя (UI/UX) для создания интуитивно понятных и привлекательных интерфейсов."}  />
      <Card  src={"https://nobushiueshi.com/wp-content/uploads/common/flutter_logo_white-1.png"} alt={"Flutter"} name={"Flutter"} text={"Изучение кроссплатформенной разработки для создания приложений, работающих на различных операционных системах.Flutter"}  />
      <Card  src={"https://i.pcmag.com/imagery/reviews/00CHLsbAPPKloTAg2PZlVBC-1..v1662670755.jpg"} alt={"Blender"} name={"Blender"} text={"Освоение работы с графическими и видео-редакторами для создания контента и мультимедийных приложений.Blender"}  />
    </>
  );
}

export default App;
