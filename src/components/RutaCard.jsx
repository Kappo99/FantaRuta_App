
export default function RutaCard(props) {
    return (
        <div className="card grid grid-cols-4 gap-4">
            <div className="col-span-3 flex flex-col justify-center">
                <div className="card__title">
                    {props.num}. {props.title}
                </div>
                <p className="card__description">
                    {props.description}
                </p>
                {props.malusText &&
                    <p className="card__malus-text">
                        <b>Malus:</b> {props.malusText}
                    </p>
                }
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center">
                <div className="card__rutas">
                    {props.rutas}R
                </div>
                <div className="flex items-end gap-2 mt-2">
                    <div className="card__bonus">
                        +{props.bonus}
                    </div>
                    {props.malus != 0 &&
                        <div className="card__malus">
                            -{props.malus}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}