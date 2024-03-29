import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Navmenu from "../components/navmenu";
import styles from "./PricingPage.module.css";

export default function PricingPage() {
  return (

    <div className={styles.pageLayout}>
      <main className={styles.pricingContainer}>
        <section className={styles.plans}>
          <h1 className={styles.tiendaPlanes}>Tienda</h1>
          <h1 className={styles.tiendaPlanes}>Planes</h1>

          <div className={styles.pricingPage}>
            <div className={`${styles.pricingOption} ${styles.basic}`}>
              <h2 className={styles.price}>$0.00</h2>
              <h3 className={styles.planName}>Básico - Plan de Cuenta</h3>
              <p className={styles.parrafo}>
              PRUEBA GRATIS DE NUESTROS SERVICIOS GOLD POR UN MES COMPLETO:
              </p>

              <ul className={styles.parrafo}> 
                <li>Nomina</li>
                <li>Inventario</li>
                <li>Analisis</li>
                <li>5+ Usuario</li>
              </ul>

              <p className={styles.parrafo}>
              TENGA EN CUENTA QUE DE NO CAMBIAR DE PLAN DE PAGO EN EL PLAZO ACORDADO DE UN MES El PROGRESO              
              </p>

              <button className={styles.subscribeButton}>
                Pagar Mensualidad
              </button>
            </div>

            <div className={`${styles.pricingOption} ${styles.silver}`}>
              <h2 className={styles.price}>$25.00</h2>
              <h3 className={styles.planName}>SILVER</h3>
              <p className={styles.parrafo}>
              EL PLAN DE GESTIÓN “SILVER” TIENE DIFERENTES MODULOS PARA OFRECER:               </p>

              <ul className={styles.parrafo}> 
                <li>Nomina</li>
                <li>Inventario</li>
                <li>Analisis</li>
              </ul>

              <p className={styles.parrafo}>
              LA ACTUALIZACIÓN DEL PLAN PUEDE DARSE EN CUALQUIER PUNTO CON ESTA MISMA PAGINA  
              </p>

              <button className={styles.subscribeButton}>
                Pagar Mensualidad
              </button>
            </div>

            <div className={`${styles.pricingOption} ${styles.gold}`}>
              <h2 className={styles.price}>$50.00</h2>
              <h3 className={styles.planName}>GOLD</h3>
              
              <p className={styles.parrafo}>
              PRUEBA GRATIS DE NUESTROS SERVICIOS GOLD POR UN MES COMPLETO:
              </p>

              <ul className={styles.parrafo}> 
                <li>Nomina</li>
                <li>Inventario</li>
                <li>Analisis</li>
                <li>5+ Usuario</li>
              </ul>

              <p className={styles.parrafo}>
              TENGA EN CUENTA QUE DE NO CAMBIAR DE PLAN DE PAGO EN EL PLAZO ACORDADO DE UN MES El PROGRESO              
              </p>
              <button className={styles.subscribeButton}>
                Pagar Mensualidad
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
