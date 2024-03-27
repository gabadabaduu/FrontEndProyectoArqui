"use client";

import React /* @client */ from "react";
import Image from "next/image";
import Navbar from "../components/navbaruser";
import styles from "./nomina.module.css";

interface Empleado {
  id: number;
  name: string;
  cargo: string;
  image: string;
  sueldo: number;
}

const empleados: Empleado[] = [
  {
    id: 1,
    name: "Mariana Restrepo",
    cargo: "Secretaria",
    image: "/marianamov.gif", // Aquí proporciona la ruta de la imagen ubicada en public
    sueldo: 1250000,
  },
  {
    id: 2,
    name: "Beatriz Pinzon",
    cargo: "Secretaria",
    image: "/bettymov.gif", // Aquí proporciona la ruta de la imagen ubicada en public
    sueldo: 1250000,
  },
  {
    id: 3,
    name: "Armando Mendoza",
    cargo: "CEO",
    image: "/armandomov.gif", // Aquí proporciona la ruta de la imagen ubicada en public
    sueldo: 9584000,
  },
  {
    id: 4,
    name: "Mario Calderon",
    cargo: "Sub-Gerente",
    image: "/mariomov.gif", // Aquí proporciona la ruta de la imagen ubicada en public
    sueldo: 7963458,
  },
];


export default function Nomina() {
  const [isInfoVisible, setIsInfoVisible] = React.useState(false);


  const [selectedEmpleado, setselectedEmpleado] = React.useState<Empleado | null>(
    null
  );

  const handleMouseEnter = () => {
    setIsInfoVisible(true);
  };

  const handleMouseLeave = () => {
    setIsInfoVisible(false);
  };

  // Función para manejar el clic en un producto
  const handleProductClick = (empleado: any) => {
    setselectedEmpleado(empleado);
  };

  return (
    <div className={styles.pageLayout}>
      <Navbar />
      <main className={styles.Container}>
        <div className={styles.contenido}>
          <div className={styles.encabezado}>
            <h1 className={styles.titulo}>Empleados</h1>
          </div>
          <div className={styles.listadoYDetalle}>
            <div className={styles.listado}>
              {empleados.map((empleado) => (
                <div
                  key={empleado.id}
                  className={styles.producto}
                  onClick={() => handleProductClick(empleado)}
                >
                  <Image
                    src={empleado.image}
                    alt={empleado.name}
                    width={100}
                    height={100}
                  />
                  <div className={styles.productoInfo}>
                    <p>{empleado.name}</p>
                    <span>Sueldo: ${empleado.sueldo}</span>
                    <span>Cargo: {empleado.cargo}</span>
                  </div>

                </div>

              ))}

            </div>

            {selectedEmpleado && (
              <div
                className={styles.detalle}
              >
                <center>
                  <Image
                    src={selectedEmpleado.image}
                    alt={selectedEmpleado.name}
                    width={400}
                    height={400}
                    layout="intrinsic"
                  /></center>
                <center>
                  <br></br>
                  <button className="botonPago">Pagar Nomina</button>
                  <tab>==</tab>
                  <button className="botonPago">Cancelar</button>
                </center>
                <div
                  className={styles.info}
                  style={{ display: isInfoVisible ? "block" : "none" }}
                >
                  <center>
                    <h2>{selectedEmpleado.name}</h2>
                    <p>Sueldo: ${selectedEmpleado.sueldo}</p>
                    <p>Cargo: {selectedEmpleado.cargo}</p>
                  </center>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );

}
