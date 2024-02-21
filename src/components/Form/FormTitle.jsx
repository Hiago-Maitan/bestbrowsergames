import { ArrowLeft } from 'lucide-react';

function FormTitle({title}) {
  return (  
    <div className="form-title">
        <a href={`/`}>
        <span>
          <ArrowLeft width={12} height={12}/>
          Voltar
        </span>
        </a>
        <h2>{title}</h2>
      </div>
   );
}

export default FormTitle;