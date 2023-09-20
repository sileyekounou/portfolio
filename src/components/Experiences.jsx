import ComposantExperience from "./ComposantExperience.jsx"

function Experiences() {
    return (
        <>
            <div className="w-[1024px] h-[329px] font-montserrat bg-white rounded-xl p-[22px] ">
                <p className="text-[24px] font-medium text-[#4F4F4F] mb-[28px] ">Experiences</p>
                <div className="flex items-center justify-between">
                <ComposantExperience picture={"public/img/front.jpg"} duration={"Feb 2017 - Current"} statut={"Front-end developer"} description={"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."}  />                
                <ComposantExperience picture={"public/img/back.jpg"} duration={"Aug 2016 - Feb 2018"} statut={"Back-end developer"} description={"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."} />                
                <ComposantExperience picture={"public/img/css.jpg"} duration={"Jun 2015 - Aug 2016"} statut={"Junior front-end developer"} description={"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."} />                  
                </div>
            </div>
        </>
    )
}

export default Experiences
