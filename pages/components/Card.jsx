export default function Card({ title, invert, circle, children, img, white }) {
  const direction = invert ? "flex-row-reverse" : "flex-row";
  const shape = circle ? "rounded-full" : "rounded";
  const background = white ? " bg-white rounded shadow-sm" : "";
  return (
    <div className={"max-w-screen-md px-0 m-8 md:px-8" + background}>
      <div
        className={"flex flex-col items-center justify-between sm:" + direction}
      >
        <img
          src={img}
          height='250px'
          width='250px'
          className={"pt-8 sm:pl-4 " + shape}
        />
        <div className='p-10 min-w-prose'>
          <h1 className='text-2xl font-medium uppercase highlight'>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
