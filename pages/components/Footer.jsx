export default function Footer({ children }) {
  return (
    <footer className='w-screen h-12 bg-black self-bottom'>
      <div className='py-4 font-mono text-xs text-center text-gray-200'>
        {children}
        Made with <span className=''>♥</span> by thiger
      </div>
    </footer>
  );
}
