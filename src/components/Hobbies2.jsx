import ComponentHobbies2 from "./ComponentHobbies2"

function Hobbies2 () {
    return(
        <>
            <div className="w-full h-auto bg-white rounded-xl  font-montserrat ">
                <div className="p-[22px] ">
                    <p className="text-[24px] font-medium text-[#4F4F4F] mb-[28px]">Hobbies/Certifcates</p>
                    <div className="mt-[26px] space-y-9">
                        <ComponentHobbies2 picture={"public/img/img-game1.jpg"} name={"Gaming"}  description={"Quisque feugiat malesuada molestie."} />
                        <ComponentHobbies2 picture={"public/img/img-violin.jpg"} name={"Music"} description={"Quisque feugiat malesuada molestie."}/>
                        <ComponentHobbies2 picture={"public/img/img-mode.jpg"} name={"Fashion"}  description={"Quisque feugiat malesuada molestie."}/>
                    </div>
                </div>
               
            </div>
        
        </>
    )

}
export default Hobbies2