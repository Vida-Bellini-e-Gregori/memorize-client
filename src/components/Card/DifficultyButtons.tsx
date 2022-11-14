import { BsInfoCircle } from "react-icons/bs";
import { Button } from "../Button";
import { Tooltip } from "../Tooltip";

interface DifficultyButtonsProps {
  handleSetDifficulty(): void;
}

export function DifficultyButtons({ handleSetDifficulty }: DifficultyButtonsProps) {
  return (
    <div className="flex gap-5 relative">
      <Button label="Fácil" color='bg-green-600' onClick={handleSetDifficulty}
        className="hover:bg-green-700"
      />
      <Button label="Médio" color='bg-yellow-500' onClick={handleSetDifficulty}
        className="hover:bg-yellow-600"
      />
      <Button label="Difícil" color='bg-red-500' onClick={handleSetDifficulty}
        className="hover:bg-red-600"
      />
        <div className="absolute top-[12px] -left-[30px]">
          <Tooltip 
            label="Quanto mais facil, menos o cartão aparecerá" 
            position="-top-[20px] -left-[148px]"
          >
            <BsInfoCircle color="gray" size='16px'/>
          </Tooltip>
        </div>
    </div>  
  )
}