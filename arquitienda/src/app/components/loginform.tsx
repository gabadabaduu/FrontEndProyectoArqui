import { useClient } from 'next/client';
import React from 'react';

const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  // Convierte parte del componente a un componente de cliente
  const ClientForm = useClient(() => (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" required />
      </label>
      <label>
        Password:
        <input type="password" required />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  ));

  return <ClientForm />;
};

export default LoginForm;
