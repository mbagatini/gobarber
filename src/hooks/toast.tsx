import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'error' | 'info' | 'success' | 'warning';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      type: message.type,
      title: message.title,
      description: message.description,
    };

    /**
     * Quando a dependência do useCallback é os valores anteriores do useState,
     * podemos setar os valores antigos usando uma função, assim não precisamos
     * colocar o messages como dependência
     */
    setMessages(currentState => [...currentState, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages(currentState =>
      currentState.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
}
