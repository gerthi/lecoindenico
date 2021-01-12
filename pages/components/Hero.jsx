import styles from "../../styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className='p-32 bg-hero-pattern w-full bg-cover bg-center z-0 relative'>
        <img src='hero_txt.png' className='w-64 mx-auto' />
        <div className={styles.divider}>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
              className={styles.fill}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
