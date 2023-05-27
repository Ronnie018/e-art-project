const artists = [
  {
    name: 'ipsum lorem',
    image: 'images/artists/ipsum_lorem.png',
    country: 'Lebanon',
  },
  {
    name: 'lorem ipsum',
    image: 'images/artists/lorem_ipsum.png',
    country: 'Lebanon',
  },
  {
    name: 'malek abyad',
    image: 'images/artists/malek_abyad.png',
    country: 'Lebanon',
  },
  {
    name: 'robert marc',
    image: 'images/artists/robert_marc.png',
    country: 'Lebanon',
  },
  {
    name: 'zena aswad',
    image: 'images/artists/zena_aswad.png',
    country: 'Lebanon',
  },
];

export const GET = async (req) => {
  try {
    return new Response(JSON.stringify(artists), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 404 });
  }
};
