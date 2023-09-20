
function ComponentHobbies2({name, description, picture}) {
    return (
        <>
            <div className="  w-[391px] ">
                <div className=" h-[139px] w-[383px] ">
                    <img src={picture} alt="" className="h-full w-full object-cover rounded-xl " />
                </div>

                <div className="mt-[26px]  ">
                    <p className=" text-[#333333] text-[18px] font-semibold "> {name} </p>
                    <p className=" text-[#828282] text-[16px] font-medium  "> {description} </p>
                </div>
            </div>
        </>
    )
}

export default ComponentHobbies2
