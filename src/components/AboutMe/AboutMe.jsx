import "./AboutMe.scss";

export default function AboutMe(props) {
    return(
        <div className="aboutMe_wrapper" aria-label="Обо мне">
            <h2 className="sectionHeader">Обо мне</h2>
            <div className="aboutMe">{props.aboutMe}</div>
        </div>

    );
}