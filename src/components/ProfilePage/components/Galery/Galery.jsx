import "./Galery.scss";
import GaleryItem from "./components/GaleryItem/GaleryItem.jsx"

export default function Galery(props) {
    const galeryItems = props.jobsDone.map(jobDone => 
        <GaleryItem jobDone={jobDone} />
    );

    return (
        <div className="galery_wrapper" aria-label="Выполненные услуги">
            <h1 className="sectionHeader">Галерея</h1>
            <div className="jobsDone_wrapper">
                {galeryItems}
            </div>
        </div>
    );
}