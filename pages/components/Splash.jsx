import Head from "next/head";

export default function Splash() {
  return (
    <div className='flex flex-col justify-between h-screen bg-center bg-cover bg-splash-pattern'>
      <Head>
        <title>Le Coin de Nico - Delémont</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='m-auto'>
        <img src='/coindenico.png' width='300px'></img>
        <br />
        <p className='font-serif text-xl text-shadow'>
          Bientôt dans la région de Delémont
        </p>
      </main>

      <footer className='h-12 bg-black self-bottom'>
        <div className='py-4 font-mono text-xs text-center text-gray-200'>
          Made with <span className=''>♥</span> by thiger
        </div>
      </footer>
    </div>
  );
}
