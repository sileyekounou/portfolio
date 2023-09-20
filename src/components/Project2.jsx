import Button from "./Button.jsx"

function Project2() {
    return (
        <>
             <div className="w-full h-[139px] bg-white rounded-xl p-[22px] font-montserrat">
                <p className=" text-[#4F4F4F] text-[24px] font-medium ">Projects (3)</p>
                <div className="mt-[25.18px] text-[#4F4F4F] text-[14px] font-medium space-x-4 ">
                    <Button name={"React"} dimension={{ width: "85px", height: "33px", borderRadius: "12px"}} />
                    <Button name={"Vue"} dimension={{ width: "72px", height: "33px", borderRadius: "12px"  }} />
                    <Button name={"Responsive"} dimension={{ width: "118px", height: "33px", borderRadius: "12px"  }} />
                </div>
            </div>
        </>
    )
}

export default Project2
