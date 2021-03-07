import "./GaleryItem.scss";
import galaryItemBackgroundPic from "./../../pictures/galaryItemBackgroundPic.png";

export default function GaleryItem(props) {
    return (
        <div className="galeryItem_wrapper" style={{backgroundImage: `url(${galaryItemBackgroundPic})`, width: props.width}}
            aria-label={`Выполненная услуга "${props.jobDone.service}". Информация`}
        >
            <div className="galeryItem_content">
                <div className="galeryItem_info">
                    <div className="serviceName">{props.jobDone.service}</div>
                    <div className="jobDate">{props.jobDone.date}</div>
                </div>
            </div>
        </div>
    );
}