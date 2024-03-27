"use client";

import Navmenu from "../components/navmenu";
import Navbar from "../components/navbar";
import styles from "./home.module.css";
import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function home() {
  return (
    <div className={styles.pageLayout}>
      <Navbar />
      <main className={styles.pricingContainer}>
        <section className={styles.plans}>
          <h1 className={styles.tiendaPlanes}>Bienvenida</h1>
          <h1 className={styles.tiendaPlanes}>User</h1>
          <Navmenu />

          <div className={styles.cajas}>
            <div className={styles.contenido}>
              <div className={styles.encabezado}>
                <h1 className={styles.titulo}>Inventario</h1>
                {/* dame una lista con datos */}
                <ul>
                  <li>Producto 1: 500 unidades</li>
                  <li>Producto 2 : 500 unidades</li>
                  <li>Producto 3 : 500 unidades</li>
                </ul>
              </div>
            </div>

            <div className={styles.contenido}>
              <div className={styles.encabezado}>
                <h1 className={styles.titulo}>Nóminas</h1>
                {/* dame una lista con datos de nombres empleados */}
                <ul>
                  <li>Empleado 1: 1.250.000</li>
                  <li>Empleado 2: 1.250.000</li>
                  <li>Empleado 3: 9.584.000</li>
                  <li>Empleado 4: 7.963.458</li>
                </ul>
              </div>
            </div>

            <div className={styles.contenido}>
              <div className={styles.encabezado}>
                <h1 className={styles.titulo}>Análisis de negocio</h1>
              </div>
              <Line
                data={{
                  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
                  datasets: [
                    {
                      label: "Ventas 2024",
                      data: [20, 35, 30, 50, 90],
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      tension: 0.1,
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>

            <div className={styles.contenido}>
              <div className={styles.encabezado}>
                <h1 className={styles.titulo}>Gestion Contable</h1>
              </div>
            </div>

            <div className={styles.contenido}>
              <div className={styles.encabezado}>
                <h1 className={styles.titulo}>Ventas</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
