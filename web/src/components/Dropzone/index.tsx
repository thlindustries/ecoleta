import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface CallBack {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<CallBack> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
      {
        selectedFileUrl ?
          <img src={selectedFileUrl} alt="Point thumbnail" />
          :
          isDragActive ? <p>Solte seus arquivos aqui ...</p> :
            (
              <p>
                <FiUpload />
              Arraste e solte algum arquivo aqui... ou clique em <strong className="dropzoneLink">Selecionar arquivos</strong>
              </p>
            )
      }
    </div>
  );
}

export default Dropzone;