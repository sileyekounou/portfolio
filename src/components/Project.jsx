const Project = ({name})=> {
    return (
        <>
            <div className="w-full h-[73px] bg-white rounded-xl p-[22px] font-montserrat flex items-center">
                <p className=" text-[#4F4F4F] text-[24px] font-medium ">{name}</p>
            </div>
        </>
    );
}

export default Project