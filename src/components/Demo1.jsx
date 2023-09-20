import ButtonDefault from "./ButtonDefault.jsx";
const Demo1 = ({name, picture}) => {
    return (
        <>

                <div className=" font-montserrat max-w-[328.49px] h-[568px] bg-white  rounded-[12px] p-[22px] ">

                    <div className=" w-[292px] h-[217px] bg-[#1d1b1b] rounded-lg mx-auto ">
                            <img src={picture} alt="" className=" w-full  h-full object-contain " />
                    </div>

                    <div className="  mt-[22px] ">
                        
                        <ul className="flex gap-x-[9px] text-[16px] text-[#4F4F4F] font-medium leading-[19.5px] ">
                            <li className="">#HTML</li>
                            <li className="">#CSS</li>
                            <li className="">#responsive</li>
                        </ul>
                        
                        <p className=" mt-[22px] mb-[18px] text-[#333333] font-medium text-[24px] leading-[29.26px] ">{name} </p>

                        
                        <p className=" text-[#828282] font-medium text-[16px] ">In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io</p>

                    </div>

                    <div className=" flex gap-x-[11px] mt-[41px]">
                        <a href="http://"> <ButtonDefault name={"Demo"} /> </a>
                        <a href="http://"> <ButtonDefault name={"Code"} /> </a>
                    </div>

                </div>
        </>
    );
}

export default Demo1