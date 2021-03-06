import React, {
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  // Referência do objeto na DOM, é como o React irá encontrar o elemento na árvore
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  /**
   * o useCallback armazena na memória a função para não precisar recriar a função
   * na memória quando alguma propriedade no componente sofrer alguma modificação
   */
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    // Define que o campo está preenchido
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} hasError={!!error}>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
