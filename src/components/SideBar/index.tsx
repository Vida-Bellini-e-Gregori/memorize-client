import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AllCardsVisualization } from "./AllCardsVisualization";
import { AllCardsVisualization2 } from "./AllCardsVisualization2";

interface SideBarProps{
  isShowingSideVisualization: boolean;
  toggleIsShowingSideVisualization(): void;
}

export function SideBar({ isShowingSideVisualization, toggleIsShowingSideVisualization}:SideBarProps){

  return(
    <div className={`
      absolute top-0 right-0
      h-screen 
      w-[500px] 
      max-w-[50%] 
      duration-300
      translate-x-40 
      opacity-0
      ${isShowingSideVisualization ? 'translate-x-0 visible opacity-100' : 'invisible'}
    `}>  
      <button className="absolute top-4 -left-10" onClick={toggleIsShowingSideVisualization}>
        <BsFillMenuButtonWideFill color='white' size='24px'/>
      </button> 
      {/* <AllCardsVisualization toggleIsShowingSideVisualization={toggleIsShowingSideVisualization}/> */}
      <AllCardsVisualization2 toggleIsShowingSideVisualization={toggleIsShowingSideVisualization}/>
    </div>    
  )
}