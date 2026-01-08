const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmk2ljt5h000u01peeso670kk',
  
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,

  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Shifting Sands',
    subtitle:
      'Kerala’s 2016 ban on river sand mining was meant to save its waterways and lifelines. However, it had an unintended consequence.',
    date: 'November 11, 2025',
    social: [
      {
        name: 'X',
        src: 'x.svg',
        href: 'https://x.com/mongabayindia',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/mongabayindia/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://india.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Produced by Kartik Chandramouli | Cartography by Andrés Alegría | Copy edits by Divya Kilikar | Banner image by AP Photo',
 
  chapters: [
    
    // chapter 01
    {
      id: 'chapter 01',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "The construction industry is Kerala’s largest consumer of river sand. Rampant sand mining led to falling groundwater levels, disrupted stream flows, and weakened bridges. <b>In June 2015, the Kerala government banned sand mining</b> in 6 rivers and restricted it in 5 others.",
        location: {
        center: [75.126410, 12.462606],
        zoom: 11.2,
        pitch: 66,
        bearing: 63.2,
      },
      
       images: [
        {
          src: 'photo0.jpg',
          position: 'top',
          title: 'Chandragiri River',
        },
      ],
      mapAnimation: 'easeTo',
      onChapterEnter: [
        {
          layer: 'waterway',
          opacity: 0,
        },
                    {
          layer: 'Glad points',
          opacity: 1,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },

      ],
        onChapterExit: [
                 {
          layer: 'Glad points',
          opacity: 1,
        }, 
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        ],
    },


    // chapter 02
    {
      id: 'chapter 02',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "After the ban on river sand mining, miners turned to the hills of the Western Ghats, crushing quarried hard rock to produce manufactured sand, also known as <b>m-sand</b>. It is considered a sustainable alternative to natural sand.",
       legend: [
        {
          title: 'tree-cover',
          fromLayer: 'tree-cover',
        },
      ],
      location: {
        center: [75.75, 10.75],
        zoom: 6.25,
        pitch: 25,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [
            {
          layer: 'tree-cover',
          opacity: 1,
        }, 
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },

      ],
        onChapterExit: [
         {
          layer: 'tree-cover',
          opacity: 1,
        }, 
        {
          layer: 'waterway',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },
        {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },
        ],
    },



  ],
};
