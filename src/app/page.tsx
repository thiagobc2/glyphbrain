import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Link href="/viewcards" style={{
        borderRadius: '5px',
        padding: '10px 20px',
        background: '#4f85eb',
        color: '#fff',
        fontWeight: 'bold'
      }}>
        Vocabulário Pág. 79
      </Link>

    </div>
  );
}
