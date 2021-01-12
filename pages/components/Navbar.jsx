import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className='shadow flex w-screen justify-between p-4'>
        <img src='coindenico.png' width='120px' />
        <div className='w-1/2 flex justify-around items-end max-w-sm font-menu uppercase'>
          <Link href='#'>Concept</Link>
          <Link href='#'>Menu</Link>
          <Link href='#'>Prestations</Link>
          <Link href='#'>Contact</Link>
        </div>
      </nav>
    </>
  );
}
