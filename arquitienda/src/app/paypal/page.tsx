import React from 'react';
import Image from "next/image";
import Link from "next/link";


export default function paypal() {
  return (
    <main>
      {/*<h1><center>Plataforma De Pago</center></h1>
      <br></br>
      <header>
        <nav>
          <ul className="link-container">
            <li>
              <Link href={""}>
                Pagina Principal
              </Link>
              <Link href={""}>
                Nomina
              </Link>
              <Link href={""}>
                Personal
              </Link>
              <Link href={""}>
                Ventas
              </Link>
              <Link href={""}>
                Tienda
              </Link>
            </li>
          </ul>
        </nav>
  </header>*/}
      <br></br>
      <br></br>
      <section>
        <center>
          <h1 className='letraTitulosBlanco'>Portal</h1>
          <h1 className='letraTitulosVerde'>Facturacion</h1>
        </center>
      </section>
      <section>
        <div className="contenedor">
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
            <input type="text" className="textbox" placeholder="Ingrese el nombre que aparece en su tarjeta"></input>
          </section>
          <br></br>
          <br></br>
          <br></br>
          <section>
            <p className='pMargin'>
              Numero de Tarjeta
            </p>
            <br></br>
            <input type="text" className="textbox" placeholder="Ingrese el numero de 16 digitos de su tarjeta"></input>
          </section>
          <br></br>
          <br></br>
          <br></br>
          <section>
            <p className='pMargin'>
              Numero de Tarjeta /// Expiration day
            </p>
            <br></br>
            <input type="text" className="textboxMid" placeholder="MM/AA"></input>
            <input type="text" className="textboxMid" placeholder="CVV"></input>
          </section>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </main>
  );
}
