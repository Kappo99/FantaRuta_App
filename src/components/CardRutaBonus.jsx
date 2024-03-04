
export default function CardRutaBonus(props) {
    return (
        <div className="card">
            <div className="card__title">
                {props.isActive ? props.title : '?????'}
            </div>
            <div className="card__image">
                <img src={`/images/bonus/${props.isActive ? props.image : 'unknown.jpg'}`} alt={props.title} />
            </div>
            <p className="card__description">
                {props.isActive ? props.description : '?????'}
            </p>
            <p className="card__description">
                <b>Consigli per l'uso:</b> {props.isActive ? props.hint : '?????'}
            </p>
            <p className="card__description">
                {props.isActive ? props.ps : '?????'}
            </p>
        </div>
    );
}