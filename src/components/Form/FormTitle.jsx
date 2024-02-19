import { ArrowLeft } from 'lucide-react';

function FormTitle({title}) {
  return (  
    <div className="form-title">
        <span>
          <ArrowLeft width={12} height={12}/>
          Voltar
        </span>
        <h2>{title}</h2>
      </div>
   );
}

export default FormTitle;