import Link from 'next/link';

export default function User() {
    return (
      <div className="centered-content">
        <main>
          <h1>Personal</h1>
          <li>
                <Link href="personal">Personal</Link>
              </li>
        </main>
      </div>
    );
  }