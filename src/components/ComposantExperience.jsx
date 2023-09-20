const ComposantExperience = ({picture, duration, statut, description}) => {
    return (
        <>
            <div className=" h-[213px] w-[268]  flex justify-between rounded-xl ">

                <div className=" h-[84px] w-[84px] flex items-center justify-center  ">
                    <div className="h-[74px] w-[74px] ">
                        <img src={picture} alt="#" className="w-full h-full object-cover"/>
                    </div>
                </div>

                <div className="ml-4">

                    <p className=" text-[#828282] text-[14px] font-medium  ">{duration}</p>
                    <p className=" text-[#333333] text-[16px] font-medium mt-2 ">{statut}</p>

                    <div className=" w-[168px] mt-4 ">
                    <p className=" text-[#828282] text-[16px] font-medium ">{description}</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ComposantExperience