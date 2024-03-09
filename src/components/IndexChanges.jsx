import { FaAngleDoubleUp, FaAngleDoubleDown, FaEquals } from "react-icons/fa";

const textColor = (v) => {
    if (v > 0)
        return 'green-600';
    else if (v < 0)
        return 'red-600';
    else
        return 'amber-500';
}

export default function IndexChanges(props) {
    return (
        <div className={`flex items-center justify-center gap-2 text-${textColor(props.value)}`}>
            {props.value > 0 ? <FaAngleDoubleUp size={20} /> : props.value < 0 ? <FaAngleDoubleDown size={20} /> : <FaEquals size={20} />}
            {props.value != 0 && Math.abs(props.value)}
        </div>
    );
}