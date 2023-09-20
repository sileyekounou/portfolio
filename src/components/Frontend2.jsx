import ComposantFront from "./ComposantFront.jsx"
function Frontend2() {
    return (
        <>
        <div className=" font-montserrat  w-full h-[284px] rounded-xl bg-white p-[22px] ">

            <p className="font-bold text-[18px] text-[#4F4F4F] leading-[21.94px] mb-[16px] uppercase">Front end </p>

            <div className="mt-[16px] ">

                <div className=" space-y-[16px] ">

                    <ComposantFront technologies={"React"} style={{ width: "65%" }} width={{width:"222px"}} />
                    <ComposantFront technologies={"Javascript"} style={{ width: "85%" }} width={{width:"222px"}} />
                    <ComposantFront technologies={"CSS"} style={{ width: "90%" }} width={{width:"222px"}} />
                    <ComposantFront technologies={"Vue"} style={{ width: "65%" }} width={{width:"222px"}}  />
                    <ComposantFront technologies={"Redux"} style={{ width: "85%" }}  width={{width:"222px"}} />
                    <ComposantFront technologies={"React Native"} style={{ width: "90%" }} width={{width:"222px"}}/>

                </div>

            </div>

        </div>
        </>
    )
}

export default Frontend2

export const Design = ()=> {
    return (
        <>
        <div className=" font-montserrat  w-full h-[157px] rounded-xl bg-white p-[22px] ">

            <p className="font-bold text-[18px] text-[#4F4F4F] leading-[21.94px] mb-[16px] uppercase">Design</p>

            <div className="mt-[16px] ">

                <div className=" space-y-[16px] ">

                    <ComposantFront technologies={"Figma"} style={{ width: "65%" }} width={{width:"222px"}} />
                    <ComposantFront technologies={"Photoshop"} style={{ width: "85%" }} width={{width:"222px"}} />
                    
                </div>

            </div>

        </div>
        </>
    )
}

