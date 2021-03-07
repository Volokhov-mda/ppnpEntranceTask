import "./PriceList.scss";
import Service from "./components/Service/Service.jsx";

export default function PriceList(props) {
    const priceItems = props.priceList.map(price => 
        <Service price={price} />
    );

    return (
        <div className="priceList_wrapper" aria-label="Прайс-лист">
            <h2 className="sectionHeader">Прайс-лист</h2>
            
            <div className="prices_wrapper">
                {priceItems}
            </div>
        </div>
    );
}