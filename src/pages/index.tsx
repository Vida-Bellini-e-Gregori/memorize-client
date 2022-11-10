import { Button } from "../components/Button";
import { MainFilter } from "../components/MainFilter";

import { useSession, signIn, signOut } from "next-auth/react"
import { Card } from "../components/Card";
import { useState } from "react";

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
        h-full flex flex-col justify-center items-center mt-[-5%]
        lg:flex-row
      ">
        <div className="w-20 h-20 mr-20"></div>    
          <Card /> 
        <button className="
          w-20 h-20 rounded-full border border-gray-600
          flex justify-center items-center
          border-dashed
          duration-200
          hover:bg-neutral-800
          md:mt-10 lg:ml-20 lg:mt-0
        "> <p className="text-gray-600 font-light text-4xl" >+</p> </button>
      </div>

    </div>
  )
}
