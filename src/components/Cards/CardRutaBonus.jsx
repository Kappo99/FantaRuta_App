
const textToHtml = (text) => {
    // Dividi il testo in paragrafi utilizzando '\n' come delimitatore
    const paragraphs = text.split('\n');

    // Mappa ogni paragrafo in un elemento <p> e gestisci il testo in grassetto
    const formattedText = paragraphs.map((paragraph, index) => {
        // Rileva e converte il testo in grassetto
        const parts = paragraph.split('*');
        return (
            <span key={index} className="block mb-2">
                {parts.map((part, index) => {
                    if (index % 2 === 0) {
                        return part;
                    } else {
                        return <b key={index}>{part}</b>;
                    }
                })}
                {/* <br /> */}
            </span>
        );
    });

    return formattedText;
}

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
                {props.isActive ? textToHtml(props.description) : '?????'}
            </p>
        </div>
    );
}