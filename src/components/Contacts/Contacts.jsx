import "./Contacts.scss";
import vkIcon from "./../../pictures/vkIcon.png";
import Footer from "../Footer/Footer";

function getIcon(socialName) {
    switch (socialName) {
        case "vkontakte":
            return vkIcon;
        default:
            // Какая-нибудь заглушка.
            return "";
    }
}

function phoneParser(phoneNumber) {
    let isReplaced = false;
    let newPhoneNumber = phoneNumber;

    do {
        let tempPhoneNumber = newPhoneNumber.replace("-", "").replace("(", "").replace(")", "");
        isReplaced = (tempPhoneNumber !== newPhoneNumber) ? true : false;

        if (isReplaced) {
            newPhoneNumber = tempPhoneNumber;
        }
    } while (isReplaced)
    
    return newPhoneNumber;
}

export default function Contacts(props) {
    const socials = props.contacts.social.map(social => 
        <div className="social" key={social.site} aria-label={`Ссылка на ${social.site}`}>
            <a href={social.link}><img src={getIcon(social.site)} alt={`${social.site}`}></img></a>
        </div>
    );

    return (
        <div className="contacts_container" aria-label="Контакты">
            <div className="contacts_wrapper" aria-label="Связаться со мной">
                <form className="contactsForm" aria-label="Форма для оброатной связи"
                    action=""
                    method="POST"
                >
                    <div className="inputs_wrapper">
                        <input type="text" placeholder="Как вас зовут?"></input>
                        <input type="tel" placeholder="Ваш телефон"></input>
                        <input type="email" placeholder="Ваша почта"></input>
                        <button type="submit" >Отправить</button>
                    </div>
                </form>
                <div className="contacts_content" aria-label="Мои контакты">
                    <h3 className="sectionHeader">Контакты</h3>
                    <div className="contactsDescription">{"Свяжитесь со мной по телефону\n или в социальных сетях"}</div>

                    <div className="phone_wrapper" aria-label="Мой телефон">
                        <h3 className="subHeader">Мой телефон</h3>
                        <a href={`tel:${phoneParser(props.contacts.phone)}`} className="phone">{props.contacts.phone}</a>
                    </div>

                    <div className="social_wrapper" aria-label="Мои социальные сети">
                        <h3 className="subHeader">Мои социальные сети</h3>
                        {socials}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}