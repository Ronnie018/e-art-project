import Link from './components/Link';

export default function Home() {
  return (
    <div className=''>
      <div className='min-h-c-screen flex justify-center text-white top-0 left-0 right-0 bottom-0 m-auto absolute'>
        <div className='h-max pt-24'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <div className='img-wrapper w-28 h-28 grid place-items-center'>
              <img src='/images/hero-logo.svg' alt='company logo' width={100} />
            </div>
            <h1 className='font-thin text-5xl'>Welcome to E-ART</h1>
            <h3 className='text-2xl'>Your Virtual Art Gallery</h3>
            <Link
              href='/artists'
              className='bg-purple px-14 py-1.5 rounded-full text-sm mt-4 cursor-pointer'
            >
              Click To Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
