import Link from "next/link";
import Navbar from "../components/navbar";

export default function personal() {
  return (
    <main>
      <Navbar />
      <div className="centered-content">
        <h1>Personal</h1>
        <li>
          <Link href="nomina">Nomina</Link>
        </li>
      </div>
    </main>
  );
}
