
import { Region } from './types';

export const REGIONS: Region[] = [
  {
    id: 'north',
    name: 'North',
    title: 'Neon & Tradition',
    description: 'Where the glow of Taipei 101 meets the whispers of ancient tea houses. A collision of high-tech future and preserved heritage.',
    color: 'blue',
    accentColor: '#3b82f6',
    backgroundImage: '/north-bg.jpg',
    landmarks: [
      {
        id: 'taipei-101',
        name: 'Taipei 101',
        description: 'Once the world\'s tallest, a bamboo-inspired icon of resilience.',
        image: '/images/taipei-101/01.jpg',
        tags: ['Modern', 'Skyline'],
        gallery: [
          { url: '/images/taipei-101/01.jpg', caption: 'The Bamboo Obelisk' },
          { url: '/images/taipei-101/02.jpg', caption: 'Touching the Sky' },
          { url: '/images/taipei-101/03.jpg', caption: 'Aerial Majesty' },
          { url: '/images/taipei-101/04.jpg', caption: 'Night Glow' },
          { url: '/images/taipei-101/05.png', caption: 'Interior Atrium' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/7TCMZfqQCueKTG1t9',
        quiz: [
          {
            id: 'q1',
            question: 'What distinctive object was Taipei 101 designed to resemble?',
            options: ['A Pagoda', 'A Bamboo Stalk', 'A Dragon', 'A Sword'],
            correctAnswer: 1,
            fact: 'Taipei 101 was designed to look like a growing bamboo stalk, a symbol of eternal strength in Asian culture.'
          }
        ]
      },
      {
        id: 'national-palace-museum',
        name: 'National Palace Museum',
        description: 'Home to the world\'s finest collection of Chinese art and artifacts, spanning 8,000 years of history.',
        image: '/images/national-palace-museum/01.jpg',
        tags: ['History', 'Art'],
        gallery: [
          { url: '/images/national-palace-museum/01.jpg', caption: 'Museum Facade' },
          { url: '/images/national-palace-museum/02.jpg', caption: 'Aerial View' },
          { url: '/images/national-palace-museum/03.png', caption: 'Palace Grounds' },
          { url: '/images/national-palace-museum/04.png', caption: 'Internal Architecture' },
          { url: '/images/national-palace-museum/05.jpg', caption: 'Exhibition Hall' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/a927dZjgN8FNaVtz6',
        quiz: [
          {
            id: 'q1',
            question: 'The National Palace Museum houses artifacts originally from where?',
            options: ['The Forbidden City', 'The Great Wall', 'The Summer Palace', 'The Ming Tombs'],
            correctAnswer: 0,
            fact: 'Most of the collection was originally housed in the Palace Museum in the Forbidden City in Beijing.'
          }
        ]
      },
      {
        id: 'chiang-kai-shek-memorial',
        name: 'Chiang Kai-shek Memorial',
        description: 'A monument erected in memory of Chiang Kai-shek, former President of the Republic of China.',
        image: '/images/chiang-kai-shek-memorial/01.png',
        tags: ['History', 'Monument'],
        gallery: [
          { url: '/images/chiang-kai-shek-memorial/01.png', caption: 'Memorial Hall' },
          { url: '/images/chiang-kai-shek-memorial/02.jpg', caption: 'Liberty Square' },
          { url: '/images/chiang-kai-shek-memorial/03.png', caption: 'Main Archway' },
          { url: '/images/chiang-kai-shek-memorial/04.png', caption: 'Sunset View' },
          { url: '/images/chiang-kai-shek-memorial/05.png', caption: 'Statue' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/HcLmoX8HCdgCp91j6',
        quiz: [
          {
            id: 'q1',
            question: 'The roof of the memorial is blue and octagonal. What does the number 8 represent?',
            options: ['Infinity', 'Wealth', 'Power', 'Abundance'],
            correctAnswer: 3,
            fact: 'The number 8 represents abundance and good fortune in Chinese culture. The octagon shape also avoids the "4" which is associated with death.'
          }
        ]
      },
      {
        id: 'jiufen',
        name: 'Jiufen Old Street',
        description: 'Labyrinthine alleys that inspired cinematic dreams and spirited wonders.',
        image: 'https://images.unsplash.com/photo-1571133331008-072338f9b964?auto=format&fit=crop&q=80&w=800',
        tags: ['History', 'Street Food'],
        quiz: [
          {
            id: 'q1',
            question: 'Which famous animated movie is Jiufen often incorrectly rumored to have inspired?',
            options: ['My Neighbor Totoro', 'Spirited Away', 'Princess Mononoke', 'Your Name'],
            correctAnswer: 1,
            fact: 'While visually similar, Hayao Miyazaki has denied that Jiufen was the direct model for Spirited Away, though the resemblance is striking!'
          }
        ]
      },
      {
        id: 'ximending',
        name: 'Ximending',
        description: 'The heartbeat of youth culture, fashion, and nocturnal energy.',
        image: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&q=80&w=800',
        tags: ['Neon', 'Vibrant'],
        quiz: [
          {
            id: 'q1',
            question: 'Ximending is often called the "what" of Taipei?',
            options: ['The Times Square', 'The Harajuku', 'The Silicon Valley', 'The Wall Street'],
            correctAnswer: 1,
            fact: 'It is known as the "Harajuku of Taipei" due to its rich mix of youth subcultures and Japanese culture.'
          }
        ]
      }
    ]
  },
  {
    id: 'central',
    name: 'Central',
    title: 'Mist & Mountains',
    description: 'Serenity found in the high altitude clouds. Discover the spiritual heart of the island amidst reflective waters and tea-soaked slopes.',
    color: 'emerald',
    accentColor: '#10b981',
    backgroundImage: 'https://images.fineartamerica.com/images-medium-large-5/alishan-national-scenic-area-taipei-taiwan-by-balmung.jpg',
    landmarks: [
      {
        id: 'sun-moon-lake',
        name: 'Sun Moon Lake',
        description: 'A crystalline alpine lake where the sun and moon meet on the water.',
        image: 'https://images.unsplash.com/photo-1621255753909-66c303f29402?auto=format&fit=crop&q=80&w=800',
        tags: ['Nature', 'Reflection'],
        quiz: [
          {
            id: 'q1',
            question: 'Sun Moon Lake is named because...',
            options: ['It changes color day and night', 'Its east side resembles a sun and west side a moon', 'It was discovered by an astronomer', 'The reflection shows the celestial bodies'],
            correctAnswer: 1,
            fact: 'The east side of the lake resembles a sun while the west side resembles a crescent moon.'
          }
        ]
      },
      {
        id: 'alishan',
        name: 'Alishan Forest',
        description: 'Ancient cedars and the world-renowned high-mountain sunrise.',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800',
        tags: ['Mist', 'Ancient'],
        quiz: [
          {
            id: 'q1',
            question: 'Alishan is famous for its historic...',
            options: ['Cable Cars', 'Forest Railway', 'Bullet Train', 'Subway'],
            correctAnswer: 1,
            fact: 'The Alishan Forest Railway is a narrow-gauge train built in 1912 during the Japanese colonial era.'
          }
        ]
      },
      {
        id: 'cingjing',
        name: 'Cingjing Farm',
        description: 'The "Misty Eden" of Taiwan, offering European-style pastures in the sky.',
        image: 'https://images.unsplash.com/photo-1606822472481-8178a99479e0?auto=format&fit=crop&q=80&w=800',
        tags: ['Highland', 'View'],
        quiz: [
          {
            id: 'q1',
            question: 'Because of its architecture and sheep, Cingjing is known as...',
            options: ['Little Switzerland', 'Mini Paris', 'Tiny Tokyo', 'Small Scotland'],
            correctAnswer: 0,
            fact: 'It is often called "Little Switzerland" for its alpine atmosphere and European-style manors.'
          }
        ]
      }
    ]
  },
  {
    id: 'east',
    name: 'East',
    title: 'Majestic Cliffs',
    description: 'Raw power of the Pacific meeting marble giants. A wild, untamed coastline carved by time and tide.',
    color: 'cyan',
    accentColor: '#06b6d4',
    backgroundImage: 'https://wallpaperaccess.com/full/2689076.jpg',
    landmarks: [
      {
        id: 'taroko',
        name: 'Taroko Gorge',
        description: 'A vertical marble canyon carved by the Liwu River.',
        image: 'https://images.unsplash.com/photo-1584988081190-7f284a1e9444?auto=format&fit=crop&q=80&w=800',
        tags: ['Cliffs', 'Adventure'],
        quiz: [
          {
            id: 'q1',
            question: ' "Taroko" means "human" in the language of which indigenous tribe?',
            options: ['Amis', 'Atayal', 'Truku', 'Bunun'],
            correctAnswer: 2,
            fact: 'The name originates from the Truku tribe who reside in the area.'
          }
        ]
      },
      {
        id: 'qixingtan',
        name: 'Qixingtan Beach',
        description: 'A crescent-shaped pebble beach overlooking the vast Pacific.',
        image: 'https://images.unsplash.com/photo-1583256038332-9df7b494d930?auto=format&fit=crop&q=80&w=800',
        tags: ['Ocean', 'Crescent'],
        quiz: [
          {
            id: 'q1',
            question: 'Why is it strictly forbidden to take stones from Qixingtan?',
            options: ['They are radioactive', 'To preserve the coastline', 'They are sacred spirits', 'They belong to the military'],
            correctAnswer: 1,
            fact: 'Taking stones accelerates coastal erosion. It is strictly enforced to protect the natural landscape.'
          }
        ]
      },
      {
        id: 'sanxiantai',
        name: 'Sanxiantai Bridge',
        description: 'An eight-arch bridge resembling a dragon connecting to an island.',
        image: 'https://images.unsplash.com/photo-1579543124119-a1b734791e3e?auto=format&fit=crop&q=80&w=800',
        tags: ['Iconic', 'Legend'],
        quiz: [
          {
            id: 'q1',
            question: 'The bridge has exactly how many arches?',
            options: ['Six', 'Eight', 'Ten', 'Twelve'],
            correctAnswer: 1,
            fact: 'The eight arches are designed to resemble the movement of a dragon over the sea.'
          }
        ]
      }
    ]
  },
  {
    id: 'south',
    name: 'South',
    title: 'History & Heat',
    description: 'The soul of Taiwan where traditions are deepest and the sun shines brightest. A journey through temple incense and tropical shores.',
    color: 'orange',
    accentColor: '#f97316',
    backgroundImage: 'https://wallpapers.com/images/featured/taiwan-kdq37yluc9yj47v2.jpg',
    landmarks: [
      {
        id: 'tainan-old',
        name: 'Tainan Old Town',
        description: 'The oldest city on the island, a living museum of temples and forts.',
        image: 'https://images.unsplash.com/photo-1594917573516-4f40f9947be7?auto=format&fit=crop&q=80&w=800',
        tags: ['Legacy', 'Culture'],
        quiz: [
          {
            id: 'q1',
            question: 'Tainan was the capital of Taiwan during which dynasty?',
            options: ['Qing Dynasty', 'Ming Dynasty', 'Tang Dynasty', 'Han Dynasty'],
            correctAnswer: 0,
            fact: 'Tainan served as the capital for over 200 years, primarily during the Qing Dynasty rule.'
          }
        ]
      },
      {
        id: 'kenting',
        name: 'Kenting Park',
        description: 'White sands and coral reefs at the southernmost tip of Taiwan.',
        image: 'https://images.unsplash.com/photo-1560942485-b2a11cc13456?auto=format&fit=crop&q=80&w=800',
        tags: ['Tropical', 'Surf'],
        quiz: [
          {
            id: 'q1',
            question: 'Kenting is famous for hosting wind-based festivals because of...',
            options: ['The Downhill Winds', 'The Typhoons', 'The Gentle Breeze', 'The Humidity'],
            correctAnswer: 0,
            fact: 'The strong "Downhill Winds" (Katabatic winds) in winter make it perfect for kite festivals.'
          }
        ]
      },
      {
        id: 'kaohsiung-port',
        name: 'Kaohsiung Harbor',
        description: 'A massive industrial port transformed into an art and design hub.',
        image: 'https://images.unsplash.com/photo-1610476044739-166d40398642?auto=format&fit=crop&q=80&w=800',
        tags: ['Art', 'Modern'],
        quiz: [
          {
            id: 'q1',
            question: 'The Pier-2 Art Center in Kaohsiung was originally...',
            options: ['A School', 'Abandoned Warehouses', 'A Military Fort', 'A Shopping Mall'],
            correctAnswer: 1,
            fact: 'It was a cluster of abandoned sugar warehouses before being revitalized into an arts district.'
          }
        ]
      }
    ]
  },
  {
    id: 'islands',
    name: 'Islands',
    title: 'Hidden Gems',
    description: 'Beyond the main island lies a world of basalt columns, coral reefs, and indigenous secrets. The true explorer\'s final frontier.',
    color: 'purple', // Using purple/violet for the 'hidden/special' vibe
    accentColor: '#8b5cf6',
    backgroundImage: 'https://biglittleisland.com/wp-content/uploads/2020/01/sanxiantai-island-taiwan.jpg', // Updated by user request
    landmarks: [
      {
        id: 'penghu',
        name: 'Penghu Columns',
        description: 'Majestic basalt columns rising from the sea, a geological wonder.',
        image: 'https://images.unsplash.com/photo-1590059294247-4c7caf4524c9',
        tags: ['Geology', 'Ocean'],
        quiz: [
          {
            id: 'q1',
            question: 'The basalt columns in Penghu are formed by...',
            options: ['Cooling Lava', 'Erosion by Wind', 'Man-made carving', 'Coral growth'],
            correctAnswer: 0,
            fact: 'They were formed by cooling lava from volcanic eruptions millions of years ago.'
          }
        ]
      }
    ]
  }
];
