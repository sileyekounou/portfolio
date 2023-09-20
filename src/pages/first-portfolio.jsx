import Profil2 from '../components/Profil2.jsx'
import Demo1 from '../components/Demo1.jsx'
import Frontend2 from '../components/Frontend2.jsx'
import Blog2 from '../components/Blog2'
import Experiences2 from '../components/Experiences2.jsx'
import Hobbies2 from '../components/Hobbies2'
import Project2 from '../components/Project2'
import Page from '../components/Page.jsx'


function FirstPortfolio() {
    return (
        <div className=" max-w-[1000px] h-screen flex p-4">

        <div className="max-w-[1000px]">
        
          <section className= "flex justify-center mb-[42px] " >
            <Profil2 />
          </section>
        
          <section className=" flex justify-between mb-[42px] ">
        
            <div className="w-[427px] space-y-[42px] " >
              <Frontend2 />
              <Hobbies2 />
        
            </div>
        
            <div className="w-[536px] space-y-[42px] " >
              <Blog2 picture={"public/img/img-code2.png"} />
              <Experiences2/>
        
            </div>
        
          </section>
        
          <section className="flex justify-center ">
            <Project2 />
          </section>
        
          <section className="w-full  mt-[36px] flex justify-center gap-x-[10.5px] ">
            <Demo1 picture={"public/img/img-pro.jpg"} name={"My Gallery"}  />
            <Demo1 picture={"public/img/img-pro.jpg"} name={"Recipe Blog"}  />
            <Demo1 picture={"public/img/img-pro.jpg"} name={"Edie Page"}  />
          </section>
        
         
        </div>
        
        
        </div>
    )
}

export default FirstPortfolio
