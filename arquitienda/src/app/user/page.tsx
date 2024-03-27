import Link from "next/link";
import Navbar from "../components/navbar";
import Navmenu from "../components/navmenu";

export default function User() {
  return (
    <main>
      <Navbar />
      <Navmenu />
      <div className="centered-content">
        <h1>Bi</h1>
        <li>
          <Link href="personal">Personal</Link>
        </li>
      </div>
    </main>
  );
}
