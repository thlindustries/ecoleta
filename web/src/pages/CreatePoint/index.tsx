import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

/* Componentes */
import Dados from './pageComponents/dados';
import Endereco from './pageComponents/endereco';
import Items from './pageComponents/items';
import api from '../../services/Api';

const CreatePoint: React.FC = () => {
  const [data, setData] = useState({});
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newData = {
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      uf: selectedUf,
      city: selectedCity,
      latitude: selectedPosition[0],
      longitude: selectedPosition[1],
      items: selectedItems
    }
    setData(newData)

    await api.post('points', newData);

    history.push('/');

    alert('Ponto de coleta criado com sucesso!');
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para a página inicial
        </Link>
      </header>

      <form onSubmit={handleSubmit} action="">
        <h1>Cadastro do <br /> ponto de coleta</h1>

        <Dados
          formData={formData}
          setFormData={setFormData}
        />
        <Endereco
          selectedUf={selectedUf}
          setSelectedUf={setSelectedUf}
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
        />
        <Items
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div >
  );
}

export default CreatePoint;