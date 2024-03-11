
export default function Loading(props) {
    return (
        <div className={`w-screen h-screen bg-ruta_blue ${props.show ? 'flex' : 'hidden'} items-center justify-center z-[999] absolute top-0 left-0`}>
            <div
                className="inline-block w-16 h-16 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        </div>
    );
}