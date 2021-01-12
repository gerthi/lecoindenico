import menu from "../../content/menu.js";

export default function Menu() {
  return (
    <div className='container p-4 mx-8 mb-8 antialiased text-white bg-black shadow-orange w-content sm:mx-auto md:min-w-0 md:max-w-3xl font-menu'>
      <h3 className='py-4 text-xl font-bold tracking-widest text-yellow-500 sm:text-2xl'>
        📝 MENU
      </h3>
      {menu.map((tartine) => (
        <div key={tartine.nom} className='flex items-end justify-between'>
          <span className='text-sm font-semibold tracking-widest uppercase sm:text-base md:text-lg'>
            ❍ La {tartine.nom}
          </span>
          <span className='text-xs italic tracking-wide sm:text-base md:text-lg'>
            {tartine.description}
          </span>
        </div>
      ))}
    </div>
  );
}
