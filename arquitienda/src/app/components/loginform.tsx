"use client";

import React, { useState, useEffect } from 'react';

const LoginForm: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este efecto se ejecuta solo una vez en el lado del cliente
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  // Renderiza el formulario solo si `isClient` es true
  return isClient ? (
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
  ) : null;
};

export default LoginForm;
