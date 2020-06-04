import React, { ChangeEvent } from 'react';
import '../styles.css';

interface CallBack {
  setFormData: Function;
  formData: Object;
}

const CreatePointDados: React.FC<CallBack> = (props) => {
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    /**
     * Os colchetes [] podem ser utilizados dentro de um objeto pra colocar uma 
     * váriavel ao invés do nome direto do atributo
     *  */
    props.setFormData({
      ...props.formData,
      [name]: value
    });
  }

  return (
    <fieldset>
      <legend>
        <h2>Dados</h2>
      </legend>

      <div className="field">
        <label htmlFor="name">Nome da entidade</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleInputChange}
        />
      </div>

      <div className="field-group">
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label htmlFor="whatsapp">Whatsapp</label>
          <input
            type="text"
            name="whatsapp"
            id="whatsapp"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default CreatePointDados;