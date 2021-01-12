export default function Layout({ children }) {
  return (
    <div className='flex flex-col items-center content-center justify-between h-screen '>
      {children}
    </div>
  );
}
