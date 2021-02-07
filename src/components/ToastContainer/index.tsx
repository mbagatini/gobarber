import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription type="info">
        <FiAlertCircle size={20} />

        <div>
          <span>title</span>
          <p>mensagem</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast hasDescription={false} type="error">
        <FiAlertCircle size={20} />

        <div>
          <span>title</span>
          <p>mensagem</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
