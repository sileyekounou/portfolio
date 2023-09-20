import ComponentFront from "./ComposantFront.jsx";

const Frontend1 = () => {
    return (
        <>
        <div className=" font-montserrat  w-[1018px] h-[185px] rounded-xl bg-white p-[22px] ">

            <p className=" font-bold text-[18px] text-[#4F4F4F] leading-[21.94px] mb-[16px] uppercase">Front end</p>

            <div className=" flex justify-between ">

                <div className=" space-y-[16px] w-[450px]">

                    <ComponentFront technologies={"React"} style={{ width: "65%" }} width={{width:"348px"}} />
                    <ComponentFront technologies={"Javascript"} style={{ width: "85%" }} width={{width:"348px"}} />
                    <ComponentFront technologies={"CSS"} style={{ width: "90%" }} width={{width:"348px"}} />

                </div>

                <div className=" space-y-[16px] w-[450px]">

                    <ComponentFront technologies={"Vue"} style={{ width: "65%" }}  width={{width:"348px"}} />
                    <ComponentFront technologies={"Redux"} style={{ width: "85%" }} width={{width:"348px"}}  />
                    <ComponentFront technologies={"React Native"} style={{ width: "90%" }}  width={{width:"348px"}} />

                </div>


            </div>

        </div>
        </>
    );
}

export default Frontend1;