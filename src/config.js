const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmk2ljt5h000u01peeso670kk',
  
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,

  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Forests at the Edge',
    subtitle:
      "Tracking deforestation trends across isolated tribal lands worldwide. These are the 10 lands with the highest tree cover loss.",
    date: 'January 21, 2026',
    social: [
      {
        name: 'X',
        src: 'x.svg',
        href: 'https://x.com/mongabay',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/mongabay/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Produced by Latoya Abulu | Cartography by Andrés Alegría',
 
  chapters: [
    
    // chapter 01
    {
      id: 'chapter 01',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "<b>Uncontacted peoples</b> generally refers to Indigenous peoples who have remained largely isolated to the present day, maintaining their traditional lifestyles and functioning mostly independently from any political or governmental entities.<br><br><b>Peoples in initial contact</b> share the same characteristics but beginning to regularly communicate with and integrate into mainstream society.",
        location: {
        center: [75.126410, 12.462606],
        zoom: 11.2,
        pitch: 66,
        bearing: 63.2,
      },
      
       images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Mashco Piro people - Peruvian Amazon',
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
      description: "Legal protections make estimating the total number of uncontacted peoples challenging, but estimates from the Inter-American Commission on Human Rights in the UN and the nonprofit group Survival International point to between 100 and 200 uncontacted tribes numbering up to 10,000 individuals total.",
     
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


    // chapter 03
    {
      id: 'chapter 03',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Uncontacted peoples choose to live detached from the rest of the world, and their mobility patterns allow them to engage in gathering and hunting, thereby preserving their cultures and languages. <br><br>These peoples have a strict dependency on their ecological environment. Any changes to their natural habitat can harm both the survival of individual members and the group as a whole.",
       
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


    // chapter 04
    {
      id: 'chapter 04',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description: "Mongabay mapped legally recognized lands used by isolated Indigenous peoples worldwide and analyzed forest cover loss from 2010 to 2024. Boundaries were compiled and verified with Indigenous organizations, experts, and the international working group on Indigenous Peoples in Isolation and Initial Contact (GTI PIACI), using data from Global Forest Watch.<br><br><b>Below are the Top 10 lands used by isolated Indigenous peoples with highest tree cover loss.</b>",
       
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
