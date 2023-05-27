import usePosition from '@app/hooks/usePosition';
import Link from '../Link';

export default function ArtistCard({ artist, diff, setDiff }) {
  const { name, country, image, id } = artist;

  if (setDiff)
    return (
      <SliderArtistCard
        name={name}
        country={country}
        image={image}
        id={id}
        diff={diff}
        setDiff={setDiff}
      />
    );
  return (
    <Link
      className={`artist-card flex flex-col w-56 sm:w-36 max-w-full h-max`}
      key={id}
      href={'artists/' + id}
    >
      <img src={'/' + image} alt={name} className=' d-shadow ' />
      <div className='flex flex-col items-end info'>
        <h2>{name}</h2>
        <p className='font-secondary italic text-xs font-thin'>{country}</p>
      </div>
    </Link>
  );
}

export function SliderArtistCard({ name, country, image, id, diff, setDiff }) {
  const position = usePosition(diff, setDiff, id);

  return (
    <div
      className={`artist-card flex flex-col w-56 sm:w-36 max-w-full absolute top-0 left-0 right-0 bottom-0 m-auto h-max n-${position}`}
      key={id}
      onClick={() => setDiff(() => position)}
    >
      <img src={'/' + image} alt={name} className=' d-shadow ' />
      <div className='flex flex-col items-end info'>
        <h2>{name}</h2>
        <p className='font-secondary italic text-xs font-thin'>{country}</p>
      </div>
    </div>
  );
}
