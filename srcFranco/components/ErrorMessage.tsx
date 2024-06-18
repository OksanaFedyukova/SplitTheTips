// ErrorMessage.tsx
import React, { useState, useEffect } from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  mensajeError: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ mensajeError }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5000); // Cambiar 5000 por el tiempo deseado en milisegundos

    return () => clearTimeout(timeout);
  }, [mensajeError]);

  if (!mensajeError) {
    return null;
  }

  return (
    <div className={`custom-error-message ${visible ? 'show' : ''}`}>
      {mensajeError}
    </div>
  );
};

export default ErrorMessage;
