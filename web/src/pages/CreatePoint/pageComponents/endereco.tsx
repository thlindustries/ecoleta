import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';

/* Componentes */
import Mapa from './mapa';
import '../styles.css';

interface IBGEResponse {
  sigla: string;
}

interface MunicipiosResponse {
  id: number;
  nome: string;
  microregiao: Object;
}

interface CallBack {
  setSelectedUf: Function;
  setSelectedCity: Function;
  setSelectedPosition: Function;
  selectedPosition: [number, number];
  selectedUf: string;
  selectedCity: string;
}

const CreatePointEndereco: React.FC<CallBack> = (props) => {
  const [ufInitials, setUfInitials] = useState<string[]>([]);
  const [municipios, setMunicipios] = useState<string[]>([]);

  useEffect(() => {
    axios.get<IBGEResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);
      setUfInitials(ufInitials.sort());
    })
  }, []);

  useEffect(() => {
    if (props.selectedUf === '0') return;
    axios
      .get<MunicipiosResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${props.selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(item => item.nome);
        setMunicipios(cityNames.sort());
      });
  }, [props.selectedUf]);

  function handleChangeUf(e: ChangeEvent<HTMLSelectElement>) {
    props.setSelectedUf(e.target.value);
  }

  function handleChangeCity(e: ChangeEvent<HTMLSelectElement>) {
    props.setSelectedCity(e.target.value);
  }

  return (
    <fieldset>
      <legend>
        <h2>Endereço</h2>
        <span>Selecione o endereço no mapa</span>
      </legend>
      <Mapa selectedPosition={props.selectedPosition} setSelectedPosition={props.setSelectedPosition} />
      <div className="field-group">
        <div className="field">
          <label htmlFor="uf">Estado(UF)</label>
          <select
            name="uf"
            id="uf"
            value={props.selectedUf}
            onChange={handleChangeUf}
          >
            <option value="0">Selecione um estado</option>
            {ufInitials.map(item => {
              return (
                <option key={item} value={item}>{item}</option>
              );
            })}
          </select>
        </div>
        <div className="field">
          <label htmlFor="city">Cidade</label>
          <select
            name="city"
            id="city"
            value={props.selectedCity}
            onChange={handleChangeCity}
          >
            <option value="0">Selecione uma cidade</option>
            {municipios.map(item => {
              return (
                <option value={item} key={item}>{item}</option>
              )
            })}
          </select>
        </div>
      </div>
    </fieldset>
  );
}

export default CreatePointEndereco;