import { MainFilter } from "../components/MainFilter";

import { useSession, signIn, signOut } from "next-auth/react"
import { AddCardButton } from "../components/AddCardButton";
import { CardsContainer } from "../components/CardsContainer";
import { Text } from "../components/Text";
import { useState } from "react";
import { NewCard } from "../components/Card/NewCard";

export default function Home() {
  const [ isAddingCard, setIsAddingCard ] = useState(false)
  
  const session = useSession();
  function seeLog() {
    console.log(session)
  }

  function toggleIsAddingCard() {
    setIsAddingCard(!isAddingCard)
  }

  return (
    <div className="h-screen">
      <div className="w-full p-5 flex">

        {/* <MainFilter /> */}
        {/* <Button  label="Logar com google" onClick={signIn} color='bg-red-500'/>
        <Button  label="seee log" onClick={seeLog} color='bg-orange-500'/> */}
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
  )
}
