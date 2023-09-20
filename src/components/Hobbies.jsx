import ComposantHobbies from "./ComposantHobbies.jsx";
const Hobbies = ()=> {
    return (
        <>
            <div className=" font-montserrat flex flex-col w-[1046px] h-[346px] bg-white rounded-xl p-[22px] ">                
            <p className="text-[24px] font-medium text-[#4F4F4F] mb-[28px] ">Hobbies</p>
            
            <div className="flex  space-x-[59px]">
                <ComposantHobbies picture={"public/img/img-game1.jpg"} name={"Gaming"} description={"Quisque feugiat malesuada molestie."} />
                <ComposantHobbies picture={"public/img/img-violin.jpg"} name={"Music"} description={"Quisque feugiat malesuada molestie."} />
                <ComposantHobbies picture={"public/img/img-mode.jpg"} name={"Fashion"} description={"Quisque feugiat malesuada molestie."} />
                
            </div>
            </div>
        </>
    );
}

export default Hobbies