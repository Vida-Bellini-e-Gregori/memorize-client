import { Button } from "../Button";

interface EditingButtonsProps {
  handleSaveChanges(): void;
  handleCancelChanges(): void;
}


export function EditingButtons({ handleSaveChanges, handleCancelChanges }: EditingButtonsProps) {
  return (
    <div className="flex gap-5">
    <Button 
      label="Salvar alterações" 
      onClick={() => handleSaveChanges()} 
      className="hover:bg-neutral-300"
    />
    <Button 
      label="Cancelar edição" 
      onClick={() => handleCancelChanges()} 
      color='bg-red-500'
      className="hover:bg-red-600"
    />      
  </div>  
  )
}