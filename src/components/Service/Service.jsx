import "./Service.scss";

export default function Service(props) {
    return (
        <div className="service_wrapper" style={{width: props.width}} aria-label={`Услуга ${props.price.service}. Информация`}>
            <div className="price" aria-label={`Цена: ${props.price.price}`}>{props.price.price}</div>
            <div className="serviceName subHeader" aria-label={`Услуга: ${props.price.service}`}>{props.price.service}</div>
            <div className="description">{props.price.description}</div>
        </div>
    );
}