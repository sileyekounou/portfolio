const Blog2 = ({picture}) => {

    return(
        <>
            <div className="  py-[22px] pl-[22px] font-montserrat  items-center bg-white w-[536px] h-[646px] rounded-xl">

            <p className=" text-[#E0E0E0] text-[16px] font-medium ">Blog</p>

                <div className=" flex justify-between">
                    <p className=" text-[#333333] text-[24px] font-medium mt-[21px] w-[178px] ">How to organize your  CSS</p>
                    <div className="rounded-l-xl border border-gray-50 h-[321px] w-[296px] ">
                        <img src={picture} alt="" className=" object-cover w-full h-full rounded-l-xl " />
                    </div>
                </div>

                <div className="mt-[50px] ">
                
                    <div className="text-[#828282] text-[16px] font-medium pr-[22px] h-[120px]">
                        <p className=" ">In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
                        <p className=" mt-[12px] "> Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                    <p className=" text-[#2F80ED] text-[16px] font-medium mt-[66px]">dev.to</p>
                </div>

            </div>
        </>
    )
}


export default Blog2