import "./Galery.scss";
import GaleryItem from "../GaleryItem/GaleryItem.jsx"

export default function Galery(props) {
    
    // Так как внутри массива все объекты одинаковые, ключ = индексу элемента массива. 
    const galeryItems = props.jobsDone.map((jobDone, index) => {
        const arrayLength = props.jobsDone.length;

        return (
            <GaleryItem jobDone={jobDone} key={index} width={`calc(100% / ${arrayLength} - 35px * ${arrayLength - 1} / ${arrayLength})`} />
        );
    });

    return (
        <div className="galery_wrapper" aria-label="Выполненные услуги">
            <h1 className="sectionHeader">Галерея</h1>
            <div className="jobsDone_wrapper">
                {galeryItems}
            </div>
        </div>
    );
}