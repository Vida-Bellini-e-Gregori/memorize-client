
import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react"
import { CardsContainer } from "../components/CardsContainer";
import { useState } from "react";
import { NewCard } from "../components/Card/NewCard";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { SideBar } from "../components/SideBar";
import { Button } from "../components/Button";
import { MainFilter } from "../components/MainFilter";

export default function Home() {
  const [ isAddingCard, setIsAddingCard ] = useState(false)
  const [ loginResponse, setLoginResponse ] = useState()
  const [ isShowingSideVisualization, setIsShowingSideVisualization ] = useState(false)
  
  const session = useSession();
  async function seeLog() {
    console.log('session', session)
    const token = await getCsrfToken();
    console.log('token', token)
    console.log('loginResponse', loginResponse)
  }

  async function LogWithGoogle(){
    const response = await signIn("google")
    
  }

  function toggleIsAddingCard() {
    setIsAddingCard(!isAddingCard)
  }

  function toggleIsShowingSideVisualization() {
    setIsShowingSideVisualization(!isShowingSideVisualization)
  }

  return (
    <div className="flex">
      <div className="absolute top-2 left-8">
        <MainFilter />
      </div>
      <div className="h-screen flex-1 flex justify-center">
        <div className="w-full p-5">
          <Button  label="Logar com google" onClick={LogWithGoogle} color='bg-red-500'/>
          <Button  label="seee log" onClick={seeLog} color='bg-orange-500'/> 
        </div>
        <div className="
          mt-[-5%]
          h-full 
          flex flex-col justify-center items-center 
          lg:flex-row
        ">
          {/*this is for equilibrium, just keep with the same size that the "AddCardButton has"*/}    
          {!isAddingCard && (
            <>
              <div className="relative">
                <CardsContainer toggleIsAddingCard={toggleIsAddingCard}/>        
              </div>
            </>
          )}
          {isAddingCard && <NewCard toggleIsAddingCard={toggleIsAddingCard} />}        
        </div>     
      </div>
       
        <div className="absolute top-4 right-4">
          <button className="" onClick={toggleIsShowingSideVisualization}>
              <BsFillMenuButtonWideFill color='white' size='24px'/>
          </button> 
        </div>   
        <SideBar
          isShowingSideVisualization={isShowingSideVisualization}
          toggleIsShowingSideVisualization={toggleIsShowingSideVisualization}
        />

        
    </div>
  )
}
