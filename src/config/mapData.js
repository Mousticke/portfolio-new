const mapData = [
  {
    id: '0',
    country: {
      code: 'FR',
      name: 'France',
    },
    places: [
      {
        id: '0',
        city: 'Fagnières',
        type: 'birth_place',
        lat: 48.9636,
        lng: 4.31833,
        description: 'Birth place : 18 Nov 1995',
      },
      {
        id: '1',
        city: 'Châlons en Champagne',
        type: 'school_life',
        lat: 48.95,
        lng: 4.3667,
        description:
          'From elementary school to Highschool I studied in Châlons en Champagne. I graduated with a scientific Baccalaureate',
      },
      {
        id: '2',
        city: 'Châlons en Champagne',
        type: 'previousWork_place',
        lat: 48.978353,
        lng: 4.36065,
        description: 'My first job as an Intern. I was a Full Stack developer. See information in "Experience section"',
      },
      {
        id: '3',
        city: 'Lille',
        type: 'school_life',
        lat: 50.608368,
        lng: 3.062928,
        description:
          'Master of Engineering at Centrale Lille Major in Computing science and Industrial Engineering. I graduated in 2019',
      },
      {
        id: '4',
        city: 'Lille',
        type: 'previousHome_place',
        lat: 50.635661,
        lng: 3.062928,
        description: 'Home when I was a student and intern',
      },
      {
        id: '5',
        city: 'Lille',
        type: 'previousWork_place',
        lat: 50.633222,
        lng: 3.020273,
        description: 'Internship at Everysens as a Front-end engineer. See Information in "Experience section"',
      },
      {
        id: '6',
        city: 'Perpignan',
        type: 'holidays',
        lat: 42.688448,
        lng: 2.894545,
        description: 'Place where I have family that lives there. I frequently go to Perpignan during my day off',
      },
      {
        id: '7',
        city: 'Paris',
        type: 'holidays',
        lat: 48.857708,
        lng: 2.279767,
        description: 'Place when I often go during my holidays or with friends to visit and enjoy the capital',
      },
    ],
  },

  {
    id: '2',
    country: {
      code: 'LU',
      name: 'Luxembourg',
    },
    places: [
      {
        id: '8',
        city: 'Luxembourg',
        type: 'currentWork_place',
        lat: 49.605708,
        lng: 6.127799,
        description:
          'Current location where I work as a Consultant at the state and saving bank of Luxembourg (Spuerkeess). See information in "Experience section"',
      },
      {
        id: '9',
        city: 'Luxembourg',
        type: 'current_home',
        lat: 49.600768,
        lng: 6.133756,
        description: 'Current place where I live',
      },
    ],
  },

  {
    id: '3',
    country: {
      code: 'SG',
      name: 'Singapore',
    },
    places: [
      {
        id: '10',
        city: 'Tao Payoh',
        type: 'previousHome_place',
        lat: 1.337041,
        lng: 103.856673,
        description: 'When I was in Singapore as an Intern, I lived in Tao Payoh.',
      },
      {
        id: '11',
        city: 'Kallang',
        type: 'previousWork_place',
        lat: 1.310458,
        lng: 103.864672,
        description:
          'Internship at Cloudzen where I was a Software Engineer. See more information in "Experience section"',
      },
      {
        id: '12',
        city: 'Marina Bay Sand',
        type: 'holidays',
        lat: 1.283599,
        lng: 103.859557,
        description:
          'During the time when I was in Singapore, I had to visit some famous place. On of those among Garden By the Bay, River Safari and so on, was the Marina Bay sand. I strongly recommend this place',
      },
    ],
  },

  {
    id: '4',
    country: {
      code: 'DE',
      name: 'Germany',
    },
    places: [
      {
        id: '13',
        city: 'Heidelberg',
        type: 'holidays',
        lat: 49.399005,
        lng: 8.673656,
        description:
          'When I was a volunteer tester for Gameforge, every year, we went to Heidelberg for the team event',
      },
      {
        id: '14',
        city: 'Frankfurt',
        type: 'holidays',
        lat: 50.117165,
        lng: 8.672263,
        description: "Place recommended by a friend. It's a beautiful city with a lot of history and nice buildings.",
      },
      {
        id: '15',
        city: 'Trier',
        type: 'holidays',
        lat: 49.762138,
        lng: 6.644877,
        description:
          "I often go to Trier for shopping and eat in restaurant. It's not too far from Luxembourg. It's totally worth it",
      },
      {
        id: '16',
        city: 'Köln',
        type: 'holidays',
        lat: 50.941343,
        lng: 6.957982,
        description: 'Everyone that live near Cologne has to visit the cathedral ;) ',
      },
    ],
  },

  {
    id: '5',
    country: {
      code: 'ES',
      name: 'Spain',
    },
    places: [
      {
        id: '18',
        city: 'Barcelona',
        type: 'holidays',
        lat: 41.41125,
        lng: 2.167306,
        description:
          'I have family near Spain. So when I go to see my family, we often go to Barcelona for chill and enjoy the city',
      },
      {
        id: '19',
        city: 'Madrid',
        type: 'holidays',
        lat: 40.41513,
        lng: -3.706323,
        description: 'I have been to Madrid only once for cultural purposes.',
      },
    ],
  },

  {
    id: '6',
    country: {
      code: 'PT',
      name: 'Portugal',
    },
    places: [
      {
        id: '19',
        city: 'Lisbon',
        type: 'holidays',
        lat: 38.737705,
        lng: -9.13705,
        description: '2 days visiting Lisbon and historical monument',
      },
      {
        id: '20',
        city: 'Porto',
        type: 'holidays',
        lat: 41.158139,
        lng: -8.629164,
        description:
          'I have been to Proto se visit my family that lives there. I strongly recommend Porto if you go to Portugal one day',
      },
    ],
  },

  {
    id: '7',
    country: {
      code: 'EP',
      name: 'Egypt',
    },
    places: [
      {
        id: '21',
        city: 'Sharm El-Sheikh',
        type: 'holidays',
        lat: 27.965811,
        lng: 34.362486,
        description: "Holiday with family to relax with the heat of the pharaoh's country",
      },
      {
        id: '22',
        city: 'Le Caire',
        type: 'holidays',
        lat: 30.046854,
        lng: 31.236835,
        description: "It's a must-see destination if you go to Egypt. You can learn a lot of the antique history",
      },
    ],
  },
]

export default mapData
