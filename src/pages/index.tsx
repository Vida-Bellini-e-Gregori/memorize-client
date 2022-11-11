import { MainFilter } from "../components/MainFilter";

import { useSession, signIn, signOut } from "next-auth/react"
import { Card } from "../components/Card";
import { AddCardButton } from "../components/AddCardButton";

export default function Home() {
  
  const session = useSession();
  function seeLog() {
    console.log(session)
  }

  return (
    <div className="h-screen">
      <div className="w-full p-5 flex">
        <MainFilter />
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
        <div className="w-20 h-20 mr-20" /> 
        <Card /> 
        <AddCardButton />
      </div>          

    </div>
  )
}
