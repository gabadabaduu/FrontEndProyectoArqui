"use client";

import React, { useEffect } from "react";
import "./login.css"; // Asegúrate de que la ruta a tu archivo CSS es correcta

const LoginScreen: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");

    signUpButton?.addEventListener("click", () => {
      container?.classList.add("right-panel-active");
    });

    signInButton?.addEventListener("click", () => {
      container?.classList.remove("right-panel-active");
    });

    return () => {
      signUpButton?.removeEventListener("click", () => {
        container?.classList.add("right-panel-active");
      });

      signInButton?.removeEventListener("click", () => {
        container?.classList.remove("right-panel-active");
      });
    };
  }, []);

  return (
      <div className="contenedor">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form id="signUp-form">
              <h1>Crear Cuenta</h1>
              <div className="social-container"></div>
              <input type="text" id="Nombre" placeholder="Nombres" />
              <input type="text" id="Apellido" placeholder="Apellidos" />
              <input type="text" id="NDocumento" placeholder="Numero de documento" />
              <input type="email" placeholder="Correo" id="signUp-email" />
              <input type="password" placeholder="Contraseña" id="signUp-password" />
              <input type="password" placeholder="Confirmar Contraseña" id="signUp-password2" />

              <button>Registrate</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form id="signIn-form">
              <h1>Inicio Sesión</h1>
              <div className="social-container"></div>
              <input type="text" placeholder="Correo" id="signIn-email" />
              <input
                type="password"
                placeholder="Contraseña"
                id="signIn-password"
              />
              <i className="bx bx-show-alt" id="icon"></i>
              <button> Iniciar Sesión</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Bienvenido!</h1>
                <p>
                  Si ya tienes una cuenta, inicia sesión con tu correo y
                  contraseña
                </p>
                <button className="ghost" id="signIn">
                  Inicia Sesión
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Bienvenido!</h1>
                <p>
                  No te has registrado? Regístrate para validar los empleados
                </p>
                <button className="ghost" id="signUp">
                  Regístrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginScreen;
