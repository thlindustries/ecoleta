import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiArrowLeft, FiXCircle, FiAirplay, FiAlertOctagon, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';
import './styles.css';

/* Componentes */
import Dados from './pageComponents/dados';
import Endereco from './pageComponents/endereco';
import Items from './pageComponents/items';
import Dropzone from '../../components/Mols/Dropzone';
import Overlay from '../../components/Atoms/Overlay';

/* API */
import api from '../../services/Api';

const CreatePoint: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [open, setOpen] = useState(false);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const [status, setStatus] = useState(true);
  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();


    setOpen(true);

    const newData = new FormData();

    newData.append('name', formData.name);
    newData.append('email', formData.email);
    newData.append('whatsapp', formData.whatsapp);
    newData.append('uf', selectedUf);
    newData.append('city', selectedCity);
    newData.append('latitude', String(selectedPosition[0]));
    newData.append('longitude', String(selectedPosition[1]));
    newData.append('items', selectedItems.join(','));

    if (selectedFile) {
      newData.append('image', selectedFile);
    }

    try {
      setStatus(true);
      setOpen(true);
      await api.post('points', newData);

      setTimeout(() => {

      }, 4000);
    }
    catch (err) {
      setStatus(false);
      setOpen(true);
      console.log(err.message)
    }
  }

  return (
    <div id="page-create-point">
      <header>
        <img className="createPointLogo" onClick={() => history.goBack()} src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para a página inicial
        </Link>
      </header>

      <form onSubmit={handleSubmit} action="">
        <h1>Cadastro do <br /> ponto de coleta</h1>

        <Dropzone onFileUploaded={setSelectedFile} />

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
        <button className='page-create-point-button' type="submit">Cadastrar ponto de coleta</button>
      </form>
      <Overlay
        Icon={status ? FiCheckCircle : FiXCircle}
        text={status ? 'Cadastro concluído!' : 'Erro ao cadastrar ponto, corrija as informações!'}
        open={open}
        setOpen={setOpen}
        setClose={() => history.goBack()}
        status={status}
      />
    </div >
  );
}

export default CreatePoint;