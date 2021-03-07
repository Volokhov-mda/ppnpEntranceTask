import "./ProfilePage.scss";
import UserInfo from "./../UserInfo/UserInfo.jsx";
import AboutMe from "./../AboutMe/AboutMe.jsx";
import PriceList from "./../PriceList/PriceList.jsx";
import Galery from "./../Galery/Galery.jsx";
import Contacts from "./../Contacts/Contacts.jsx";

// Информация о пользователе, полученная с сервера.
// Это простая имитация, поэтому в этом объекте нет, например, фотографий.
const serverData = {
  user: {
    job: "Пекарь-кондитер",
    name: "Сергей",
    surname: "Кузьмич",
    city: "Кострома",
    contacts: {
      phone: "+7(985)544-56-37",
      social: [
        {
          site: "vkontakte",
          link: "https://vk.com/"
        }
      ]
    }
  },
  achievements: [
    "10 лет опыта",
    "Чемпион мира",
    "15 вариантов тортов",
    "Собственная пекарня"
  ],
  aboutMe: "Приготовлю торт на Ваш праздник и для вкусного домашнего чаепития!\n" +
           "Использую только натуральные и качественные ингридиенты:\n" +
           "Мука в/с известных производителей, сахар, сливочное масло 82,5 %, куриные яйца, молоко 2,5%, натуральная ваниль, Сливки натуральные 33%, сливочный сыр, орехи, ягоды и фрукты замороженные, свежие.",
  priceList: [
    {
      service: "Починить раковину",
      price: "2000Р",
      description: "Механическое устранение засоров, электронная диагностика причины засоров"
    },
    {
      service: "Починить раковину",
      price: "2000Р",
      description: "Механическое устранение засоров, электронная диагностика причины засоров"
    },
    {
      service: "Починить раковину",
      price: "2000Р",
      description: "Механическое устранение засоров, электронная диагностика причины засоров"
    },
    {
      service: "Починить раковину",
      price: "2000Р",
      description: "Механическое устранение засоров, электронная диагностика причины засоров"
    }
  ],
  galery: [
    {
      service: "Починил раковину",
      date: "20.09.2019"
    },
    {
      service: "Починил раковину",
      date: "20.09.2019"
    },
    {
      service: "Починил раковину",
      date: "20.09.2019"
    }
  ],
}

export default function ProfilePage() {
  return (
    <div className="content">
      <UserInfo user={serverData.user} achievements={serverData.achievements} />
      <div className="sections">
        <AboutMe aboutMe={serverData.aboutMe} />
        <PriceList priceList={serverData.priceList} />
        <Galery jobsDone={serverData.galery} />
      </div>
      <Contacts contacts={serverData.user.contacts}/>
    </div>
  );
}
