import "./UserInfo.scss";
import profilePic from "./../../pictures/profilePic.png";

export default function UserInfo(props) {
    const achievementItems = props.achievements.map(achievement => 
        <div className="achievement" key={achievement}>{achievement}</div>
    );

    return (
        <div className="userInfo_wrapper" aria-label={`${props.user.name} ${props.user.surname}, ${props.user.job}. Основная информация`}>
            <div id="profilePicture">
                <img src={profilePic} alt="Фото профиля"/>
            </div>
            <div className="userInfo_content">
                <div className="userInfo">
                    <div className="job sectionHeader">{props.user.job}</div>
                    <div className="userName">{props.user.name} {props.user.surname}</div>
                    <div className="city">{props.user.city}</div>
                </div>
                <div className="achievements_wrapper">
                    <div className="achievements_content">
                        {achievementItems}
                    </div>
                </div>
            </div>
        </div>
    );
}
