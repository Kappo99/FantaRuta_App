import { useEffect, useState } from "react";
import callApi from "../../hooks/callApi";
import Loading from "../Loading";

export default function CardRutazione(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        getRutazioniCount();
    }, []);

    const getRutazioniCount = async () => {
        setIsLoading(true);
            // console.log(props.id, props.num, props.title);
        const response = await callApi(`rutazioni/${props.id}/count`, 'GET');
        const data = await response.json();
        // console.log(data);

        if (response.status == 200) {
            setCount(data.body.count);
        }
        else {
            setCount(0);
        }
        setIsLoading(false);
        // console.log(rutazioniList);
    }

    return (
        <>
            <Loading visible={isLoading} />
            <div className={`card grid grid-cols-4 gap-x-4 ${props.isRutata ? 'is-rutata' : ''} ${props.isActive ? 'is-active' : ''}`} onClick={props.onClick}>
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
                    {props.bonusText &&
                        <p className="card__bonus-text">
                            <b>Bonus:</b> {props.bonusText}
                        </p>
                    }
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <div className="card__rutas">
                        {props.rutas}R
                    </div>
                    <div className="flex items-end gap-2 mt-2">
                        <div className="card__monteruta">
                            +{props.monteruta}
                        </div>
                        {props.malus != null &&
                            <div className="card__malus">
                                -{props.malus}
                            </div>
                        }
                        {props.bonus != null &&
                            <div className="card__bonus">
                                +{props.bonus}
                            </div>
                        }
                    </div>
                </div>
                <div className="col-span-4">
                    <p className="card__description italic">
                        Giocata da: {count} Rutatori
                    </p>
                </div>
            </div>
        </>
    );
}