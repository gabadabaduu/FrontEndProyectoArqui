"use client";

import React /* @client */ from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./paypal.module.css";
import Navbar from "../components/navbaruser";

interface Tarjeta {
    id: number;
    name: number;
    number: number;
    image: string;
    sueldo: number;
}

export default function paypal() {

    {/*const MyComponent = () => {
        // Estado local para almacenar los valores de los cuadros de texto
        const [fechaVencimiento, setFechaVencimiento] = React.useState('');
        const [cvv, setCvv] = React.useState('');

        // Manejador de cambio para el cuadro de texto de fecha de vencimiento
        const handleFechaVencimientoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
            setFechaVencimiento(event.target.value);
        };

        // Manejador de cambio para el cuadro de texto de CVV
        const handleCvvChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
            setCvv(event.target.value);
        };

        // Manejador de clic para el botón de guardar
        const handleGuardarClick = () => {
            // Aquí puedes hacer lo que necesites con los valores guardados
            console.log('Fecha de Vencimiento:', fechaVencimiento);
            console.log('CVV:', cvv);
        };*/}

    return (
        <div className={styles.pageLayout}>
            <Navbar />
            <main className={styles.Container}>
                <br></br>
                <br></br>
                <section>
                    <center>
                        <h1 className='letraTitulosBlanco'>Portal</h1>
                        <h1 className='letraTitulosVerde'>Facturacion</h1>
                    </center>
                </section>
                <section>
                    <div className={styles.contenedor}>
                        <center>
                            <br></br>
                            <p className='letraNormal'>
                                Ingrese su información de pago para continuar con la compra de monto $$$$
                                <br></br><br></br>
                            </p>
                        </center>
                        <br></br>
                        <br></br>
                        <section>
                            <p className='pMargin'>
                                Nombre en la Tarjeta
                            </p>
                            <br></br>
                            <input type="text" className={styles.textbox} placeholder="Ingrese el nombre que aparece en su tarjeta"></input>
                        </section>
                        <br></br>
                        <br></br>
                        <br></br>
                        <section>
                            <p className='pMargin'>
                                Numero de Tarjeta
                            </p>
                            <br></br>
                            <input type="text" className={styles.textbox} placeholder="Ingrese el numero de 16 digitos de su tarjeta"></input>
                        </section>
                        <br></br>
                        <br></br>
                        <br></br>
                        <section>
                            <p className='pMargin'>
                                Fecha De Vencimiento /// Codigo De Seguridad
                            </p>
                            <br></br>
                            <input type="text"
                                className={styles.textboxMid}
                                placeholder="MM/AA"></input>
                            <input type="text"
                                className={styles.textboxMid}
                                placeholder="CVV">
                            </input>
                        </section>
                        <br></br>
                        <br></br>
                        <center>
                            {/* Boton de pago y regreso */}
                            <Link href={"/Home"} legacyBehavior>
                                <button className={styles.botonPago}
                                >Regresar</button></Link>
                            <Link href={"/pago"} legacyBehavior>
                                <button className={styles.botonPago}
                                >Pagar</button></Link>
                        </center>
                        <br />
                        <br />
                        <div className={styles.imagenesTarjetas}>
                            <center>

                                <Image
                                    src={"/visalogo.png"}
                                    alt={"visa"}
                                    width={70}
                                    height={40}>
                                </Image>
                                <Image
                                    src={"/mastercardlogo.png"}
                                    alt={"visa"}
                                    width={70}
                                    height={40}>
                                </Image>
                                <Image
                                    src={"/paypallogo.png"}
                                    alt={"visa"}
                                    width={70}
                                    height={40}>
                                </Image>
                                <br />
                                <br />
                            </center>
                        </div>
                    </div>
                </section >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </main >
        </div >
    );
}
