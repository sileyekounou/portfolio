const Blog = ({picture}) => {

    return(
        <>
            <div className=" py-[22px] pl-[22px] font-montserrat flex justify-between items-center bg-white w-full h-[408px] rounded-xl">

                <div className=" h-[380.202px]  w-[465px] ">
                    <p className=" text-[#E0E0E0] text-[16px] font-medium mb-[20px] ">Blog</p>

                    <p className=" text-[#333333] text-[24px] font-medium mb-[26px] h-auto ">How to <br /> organize your <br /> CSS</p>

                    <div className="text-[#828282] text-[16px] font-medium mb-[61px]  h-[120px]">
                        <p className=" mb-[15px] ">In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
                        <p className="  "> Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>

                    <p className=" text-[#2F80ED] text-[16px] font-medium ">dev.to</p>

                </div>

                <div className="  h-[380.202px] w-[477px] rounded-l-xl border border-gray-50 ">
                    <img src={picture} alt="" className=" object-cover w-full h-full rounded-l-xl " />
                </div>

            </div>
        </>
    )
        
}

export default Blog