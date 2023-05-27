// api routes

const artists = [
  {
    name: 'ipsum lorem',
    image: 'images/artists/ipsum_lorem.png',
    country: 'Lebanon',
    id: '0',
    portfolio: [
      {
        id: 1,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 2,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 3,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 4,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 5,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 6,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 7,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 8,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 9,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 10,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 11,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 12,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 13,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae placeat debitis. A obcaecati ipsam quaerat adipisci veritatis sed consectetur illo! Sapiente, est ipsa? Nisi tempora quibusdam fugit sequi doloribus.',
  },
  {
    name: 'lorem ipsum',
    image: 'images/artists/lorem_ipsum.png',
    country: 'Lebanon',
    id: '1',
    portfolio: [
      {
        id: 1,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 2,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 3,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 4,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 5,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 6,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 7,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 8,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 9,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 10,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 11,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 12,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 13,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae placeat debitis. A obcaecati ipsam quaerat adipisci veritatis sed consectetur illo! Sapiente, est ipsa? Nisi tempora quibusdam fugit sequi doloribus.',
  },
  {
    name: 'malek abyad',
    image: 'images/artists/malek_abyad.png',
    country: 'Lebanon',
    id: '2',
    portfolio: [
      {
        id: 1,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 2,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 3,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 4,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 5,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 6,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 7,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 8,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 9,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 10,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 11,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 12,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 13,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae placeat debitis. A obcaecati ipsam quaerat adipisci veritatis sed consectetur illo! Sapiente, est ipsa? Nisi tempora quibusdam fugit sequi doloribus.',
  },
  {
    name: 'robert marc',
    image: 'images/artists/robert_marc.png',
    country: 'Lebanon',
    id: '3',
    portfolio: [
      {
        id: 1,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 2,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 3,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 4,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 5,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 6,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 7,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 8,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 9,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 10,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 11,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 12,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 13,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae placeat debitis. A obcaecati ipsam quaerat adipisci veritatis sed consectetur illo! Sapiente, est ipsa? Nisi tempora quibusdam fugit sequi doloribus.',
  },
  {
    name: 'zena aswad',
    image: 'images/artists/zena_aswad.png',
    country: 'Lebanon',
    id: '4',
    portfolio: [
      {
        id: 1,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 2,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 3,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 4,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 5,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 6,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 7,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 8,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 9,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 10,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 11,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 12,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
      {
        id: 13,
        name: 'art 1',
        url: 'images/demos/demo_1.png',
      },
    ],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae placeat debitis. A obcaecati ipsam quaerat adipisci veritatis sed consectetur illo! Sapiente, est ipsa? Nisi tempora quibusdam fugit sequi doloribus.',
  },
];

function getArtist(id) {
  return artists.find((artist) => artist.id === id);
}

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      const artist = getArtist(id);
      return new Response(JSON.stringify({ artist }), { status: 200 });
    }

    return new Response(JSON.stringify(artists), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 404 });
  }
};
