const ComponentFront = ({width, technologies, style}) => {
    return (
        <>
            <div className="h-[20px] flex items-center justify-between">

                    <p className=" text-[#4F4F4F] text-[16px] font-medium truncate">{technologies}</p>
                    <div className=" bg-[#C4C4C4]  h-[9px] rounded-xl "  style={width}>
                        <div className="rounded-xl bg-[#2F80ED] h-[9px]" style={style} >
                        </div>
                    </div>
            </div>
            
        </>
       
    );
}

export default ComponentFront