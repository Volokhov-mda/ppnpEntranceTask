import "./PriceList.scss";
import Service from "./../Service/Service.jsx";

export default function PriceList(props) {
    // Так как внутри массива все объекты одинаковые, ключ = индексу элемента массива. 
    const priceItems = props.priceList.map((price, index) => {
        const arrayLength = props.priceList.length;

        return (
            <Service price={price} key={index} width={`calc(100% / ${props.priceList.length} - 40px * ${arrayLength - 1} / ${arrayLength})`}/>
        )
    });

    return (
        <div className="priceList_wrapper" aria-label="Прайс-лист">
            <h2 className="sectionHeader">Прайс-лист</h2>
            
            <div className="prices_wrapper">
                {priceItems}
            </div>
        </div>
    );
}