function ComposantExperience2({picture, duration, statut, description}) {
    return (
     <>
        <div className=" h-[161px] w-full flex gap-x-[22px]  rounded-xl  font-montserrat">

            <div className=" h-[84px] w-[119.25px] flex items-center justify-center  ">
                <div className=" h-[84px] w-[100px]">
                    <img src={picture} alt="#" className=" w-full h-full object-cover" />
                </div>
            </div>

            <div className="">
                <p className=" text-[#828282] text-[14px] font-medium  "> {duration} </p>
                <p className=" text-[#333333] text-[16px] font-medium mt-2 "> {statut} </p>

                <div className=" w-[273px] mt-4 ">
                <p className=" text-[#828282] text-[16px] font-medium  "> {description} </p>
                </div>
            </div>
        </div>
     </>   
    )
}

export default ComposantExperience2
