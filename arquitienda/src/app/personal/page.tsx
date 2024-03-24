import Link from 'next/link';

export default function personal() {
    return (
      <div className="centered-content">
        <main>
          <h1>Personal</h1>
          <li>
                <Link href="nomina">Nomina</Link>
              </li>
        </main>
      </div>
    );
  }
  