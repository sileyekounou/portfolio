import ComposantExperience2 from "./ComposantExperience2.jsx"
import { useState } from "react";

const expes = [
    {id:0 , picture: "public/img/front.jpg", duration: "Feb 2017 - Current", statut: "Front-end developer", description: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." },
    {id:1 , picture: "public/img/back.jpg", duration: "Aug 2016 - Feb 2018", statut: "Back-end developer", description: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." },
    {id:2 , picture: "public/img/css.jpg", duration: "Jun 2015 - Aug 2016", statut: "Junior front-end developer", description: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." }, 
    {id:3 , picture: "public/img/back.jpg", duration: "Jun  - Aug ", statut: "Junior front-end developer", description: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." }, 
    {id:4 , picture: "public/img/back.jpg", duration: "Jun  - Aug 2016", statut: "Junior front", description: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." }, 
    {id:5 , picture: "public/img/css.jpg", duration: "Jun 2015 - Aug ", statut: "Junior front developer", description: "Lorem Ipsum est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." }, 
    {id:6 , picture: "public/img/front.jpg", duration: "Jun 2015 - Aug 2016", statut: " front-end developer", description: "Lorem Ipsum est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." }, 
    {id:7 , picture: "public/img/front.jpg", duration: "Jun 2020 - Aug 20233", statut: " developer", description: "Lorem Ipsum est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." }, 
    {id:8 , picture: "public/img/back.jpg", duration: "Jun 20 - Aug 20", statut: "Junior front-end developer", description: "Lorem Ipsum est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." }, 
    {id:9 , picture: "public/img/css.jpg", duration: "Jun 2015 - Aug 16", statut: "Junior Back-end developer", description: "Lorem Ipsum est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie." }, 
];
// const filtre = expes.filter(expe => expe.id < 2 )


function Experiences2(){
    const [previous, SetPrevious] = useState(0)

    const [next, setNext] = useState(2)

    function previousPage(){
        if(previous > 0){
            SetPrevious((previous)=> previous - 2)
            setNext((next)=> next - 2 )
            
        }
    }

    function nextPage() {
        if(next < expes.length){
            setNext((next)=> next + 2 )
            SetPrevious((previous)=> previous + 2 )
        }
        
    }
   
    const tabSlice = expes.slice(previous , next);
   
    return(
        <>
            <div className="w-full h-auto bg-white rounded-xl px-[22px] pt-[19px] pb-[8px] ">
                
                <div className="flex justify-between items-center  ">
                    <p className="text-[24px] font-montserrat font-medium text-[#4F4F4F] ">Experiences</p>
                    <div className="flex items-center justify-center gap-x-[8px] ">
                        <div className="border border-solid border-[#4F4F4F] w-[24px] h-[24px] rounded flex items-center justify-center" onClick={previousPage}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#4f4f4f" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"/></svg>
                        </div>
                        <div className="border border-solid border-[#4F4F4F] w-[24px] h-[24px] rounded flex items-center justify-center" onClick={ nextPage } >
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#4f4f4f" d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"/></svg>
                        </div>
                    </div>
                </div>

                <div className="mt-[44px] space-y-[36px]">                    
                    {/* {filtre.map(expe => <ComposantExperience2 {...expe} key={expe.id} />)} */}
                    {tabSlice.map( oneSlice => <ComposantExperience2 {...oneSlice} key={oneSlice.id} />  ) }

                </div>
            </div>
        </>
    )

}

export const ExperiencesFiltre = () => {

    const [previous, SetPrevious] = useState(0)

    const [next, setNext] = useState(3)

    function previousPage(){
        if(previous > 0){
            SetPrevious((previous)=> previous - 3)
            setNext((next)=> next - 3 )
            
        }
    }

    function nextPage() {
        if(next < expes.length){
            setNext((next)=> next + 3 )
            SetPrevious((previous)=> previous + 3 )
        }
        
    }
    

    const tabSlice = expes.slice(previous , next);

    console.log(tabSlice)

    return(
        <>
            <div className="w-full h-auto bg-white rounded-xl px-[22px] pt-[19px] pb-[8px] ">
                <div className="flex justify-between items-center">
                    <p className="text-[24px] font-montserrat font-medium text-[#4F4F4F] ">Experiences</p>
                    <div className="flex items-center justify-center gap-x-[8px] ">
                            <div className="border border-solid border-[#4F4F4F] w-[24px] h-[24px] rounded flex items-center justify-center " onClick={previousPage} >
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#4f4f4f" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"/></svg>
                            </div>
                            <div className="border border-solid border-[#4F4F4F] w-[24px] h-[24px] rounded flex items-center justify-center" onClick={nextPage} >
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#4f4f4f" d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"/></svg>
                            </div>
                    </div>
                </div>
                <div className="mt-[44px] space-y-[36px]">                    
                    {/* {expes.map(expe => <ComposantExperience2 {...expe} key={expe.id} />)} */}
                    {tabSlice.map( oneSlice => <ComposantExperience2 {...oneSlice} key={oneSlice.id} />  ) }
                    
                </div>
            </div>
        </>
    )
}

export default Experiences2