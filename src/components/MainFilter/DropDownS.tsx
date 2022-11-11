import { useEffect, useState } from "react";
import { Text } from "../Text";

interface Subject {
  id: number;
  name: string;
  subjects?: Subject[]
}

interface DropDownProps{
  subjects: Subject[]
}


export function DropDownS({ subjects }: DropDownProps) {
  const [ selectedSubject, setSelectedSubject ] = useState<Subject[]>([])

  useEffect(() =>{ console.log(selectedSubject)},[selectedSubject])

  function handleChooseSubject(index: string) {

    if((index !== '0') && (subjects[+index-1]?.subjects)){
      setSelectedSubject(subjects[+index-1].subjects as Subject[])
    } else {
      setSelectedSubject([])
    }

    if(index === '0'){
      console.log('TODOS')
    }else{

    }
  }

  return (
    <div className="flex">
      <select
        onChange={(e) => handleChooseSubject(e.target.value)}
        className="
          mx-5
          text-base
          rounded-base
          decoration-neutral-900
          bg-neutral-900 
          border-neutral-900
          text-neutral-50
          px-2
        "
      >
        <option selected value={0}>Todos</option>
        { subjects.map((subject, index) => (
          <option 
            key={subject.id}             
            className="px-2 py-2 checked:py-4"
            value={index+1}
          >
            {subject.name}
          </option>
        ))}
      </select>
      { selectedSubject?.length > 0 && 
        <div className="flex">
          <span className="text-neutral-500">-</span>
          <DropDownS subjects={selectedSubject}/>      
        </div>
      }
    </div>


  )
}



