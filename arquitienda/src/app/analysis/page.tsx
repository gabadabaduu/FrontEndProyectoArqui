"use client";

import Navmenu from "../components/navmenu";
import Navbar from "../components/navbar";
import styles from "./analysis.module.css";
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
          <h1 className={styles.tiendaPlanes}>Analisis</h1>
          <h1 className={styles.tiendaPlanes}>Negocio</h1>
          <Navmenu />

          <div className={styles.cajas}>
            <div className={styles.contenido}>
              <div className={styles.encabezado}>
                <h1 className={styles.titulo}>Inventario</h1>
                <ul>
                  <li>Producto 1: 500 unidades</li>
                  <li>Producto 2 : 500 unidades</li>
                  <li>Producto 3 : 500 unidades</li>
                </ul>
              </div>
            </div>

            <div className={styles.contenido}>
              <div className={styles.encabezado}>
                <h1 className={styles.titulo}>Informacion</h1>
                {/* dame una lista con datos de nombres empleados */}
                <ul>
                  <li>Producto 1: 50 % subio</li>
                  <li>Producto 2 : 40 % subio</li>
                  <li>Producto 3 : 30 % subio</li>
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
                <h1 className={styles.titulo}>Recomendacion</h1>
                {/* dame recomendaciones*/}
                <p> Mejorar el marketing</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
