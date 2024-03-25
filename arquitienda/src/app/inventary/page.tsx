// ContactForm.tsx
import React from 'react';
import styles from './ContactForm.module.css'; // Importa tus estilos personalizados

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contáctanos</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Datos generales</h2>
          <div className={styles.twoColumn}>
            <div className={styles.inputField}>
              <label htmlFor="region">Región</label>
              <input type="text" id="region" name="region" required />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="store">Tienda</label>
              <input type="text" id="store" name="store" required />
            </div>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="complaint">Queja</label>
            <textarea id="complaint" name="complaint" required></textarea>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Responsable</h2>
          <div className={styles.twoColumn}>
            <div className={styles.inputField}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="position">Cargo</label>
              <input type="text" id="position" name="position" required />
            </div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.inputField}>
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="telephone">Contacto telefónico</label>
              <input type="tel" id="telephone" name="telephone" required />
            </div>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <div className={styles.twoColumn}>
            <div className={styles.inputField}>
              <label htmlFor="date">Fecha</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="owner">Dueño del Establecimiento</label>
              <input type="text" id="owner" name="owner" required />
            </div>
          </div>
        </div>
        
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
