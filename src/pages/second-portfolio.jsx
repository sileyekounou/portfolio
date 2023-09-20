// import React from 'react'
import Profil from '../components/profil.jsx'
// import Frontend1 from '../components/Frontend1.jsx'
import Blog from '../components/Blog.jsx'
import { ExperiencesFiltre} from '../components/Experiences2.jsx'
import Hobbies2 from '../components/Hobbies2.jsx'
import Frontend2 from '../components/Frontend2.jsx'
import { Design } from '../components/Frontend2.jsx'
// import Project2 from '../components/Project2.jsx'
import Project from '../components/project.jsx'
import Demo2 from '../components/Demo2.jsx'



function SecondPortfolio() {
    return (
        <div className=" max-w-[1440px] h-screen flex p-4 ">

            <div className="flex space-x-8" >
                <aside className="flex flex-col max-w-[413px] gap-y-[44px] " >
                    <Profil />
                    <ExperiencesFiltre />
                    <Hobbies2 />
                </aside>
                <aside className=' w-[860px] '>
                    <div className='flex justify-between space-x-[31.98px] '>
                        <Frontend2/>
                        <Design/>
                    </div>
                    <div className='mt-[48px]'>
                        <Project name={"Projects (3)"}/>
                    </div>
                   <div className="mt-4 space-y-9">
                    <Demo2 picture={"public/img/img-pro.jpg"} name={"My Gallery"} />
                    <Demo2 picture={"public/img/img-pro.jpg"} name={"Recipe Blog"}/>
                    <Demo2 picture={"public/img/img-pro.jpg"} name={"Edie Page"}  />
                   </div>
                   <div className='mt-[48px]'>
                        <Project name={"Blog (1)"}/>
                    </div>
                    <div className='mt-[48px]'>
                        <Blog picture={"public/img/img-code2.png"}/> 
                    </div>
                </aside>
            </div>
        
        </div>
    )
}

export default SecondPortfolio
