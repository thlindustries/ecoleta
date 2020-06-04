import React, { useState, useEffect } from 'react';
import api from '../../../services/Api';
import '../styles.css';

interface Item {
  id: number;
  name: string;
  image_url: string;
}

interface CallBack {
  setSelectedItems: Function;
  selectedItems: number[];
}

const CreatePointItemsGrid: React.FC<CallBack> = (props) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  function handleSelectitem(id: number) {
    const alreadyExist = props.selectedItems.findIndex(item => item === id);

    if (alreadyExist >= 0) {
      const newSelectedItems = props.selectedItems.filter(item => item !== id);
      props.setSelectedItems(newSelectedItems);
    } else {
      props.setSelectedItems([...props.selectedItems, id]);
    }
  }

  return (
    <fieldset>
      <legend>
        <h2>Ítens de coleta</h2>
        <span>Selecione um ou mais ítens abaixo</span>
      </legend>
      <ul className="items-grid">
        {items.map(item =>
          <li
            key={item.id}
            onClick={() => handleSelectitem(item.id)}
            className={props.selectedItems.includes(item.id) ? 'selected' : ''}
          >
            <img src={item.image_url} alt={item.name} />
            <span>{item.name}</span>
          </li>)}
      </ul>
    </fieldset>
  );
}

export default CreatePointItemsGrid;