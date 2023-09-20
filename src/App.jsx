import './assets/css/index.css'
// import ButtonDefault from './components/ButtonDefault.jsx'
import Page from './components/Page.jsx'
import FirstPortfolio from './pages/first-portfolio.jsx'
import SecondPortfolio from './pages/second-portfolio.jsx'
import { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(false);

  const bascule = () => {
    setToggle(!toggle)    
  }

  return (
     <>           
        <div className="max-w-[1325px] mx-auto ">
          
          <div className="h-[2295px] max-w-[1325px] flex justify-center" >            
              { toggle ? <SecondPortfolio /> : (<FirstPortfolio />) }                
          </div> 

          <div className = 'w-full mt-[50px] flex justify-center items-center' onClick={bascule} >            
            <Page />
          </div> 

        </div>              
    </>
  )
}

export default App
