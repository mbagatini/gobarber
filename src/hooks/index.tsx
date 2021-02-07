import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

/**
 * Arquivo responsável por fazer a importação dos hooks que serão utilizados na aplicação
 */

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
