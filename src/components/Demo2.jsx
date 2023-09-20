import ButtonDefault from "./ButtonDefault.jsx";
const Demo2 = ({picture})=> {
    return (
        <>

        <div className=" font-montserrat bg-white w-full h-[311px]  rounded-[12px] p-[22px] gap-x-[52px] flex ">

            <div className=" w-[384px] h-[267px] bg-[#1d1b1b] rounded-lg mx-auto ">
                <img src={picture} alt="" className=" w-[384px] h-[267px] object-contain" />
            </div>

            <div className=" flex-1">
                
                <ul className="flex gap-x-[9px] text-[16px] text-[#4F4F4F] font-medium leading-[19.5px] mb-[25px]  ">
                    <li className="">#HTML</li>
                    <li className="">#CSS</li>
                    <li className="">#responsive</li>
                </ul>
                
                <p className=" text-[#333333] font-medium text-[24px] leading-[29.26px] mb-[18px] ">Recipe Blog</p>

                
                <p className=" text-[#828282] font-medium text-[16px] w-[520px]">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>

                <div className=" flex gap-x-[11px] mt-[34px] ">
                    <a href="http://"> <ButtonDefault name={"Demo"} /> </a>
                    <a href="http://"> <ButtonDefault name={"Code"} /> </a>
                </div>

            </div>

        </div>
</>
    );
}

export default Demo2;