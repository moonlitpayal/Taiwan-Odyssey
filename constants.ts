
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
        image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=800',
        tags: ['Modern', 'Skyline']
      },
      {
        id: 'jiufen',
        name: 'Jiufen Old Street',
        description: 'Labyrinthine alleys that inspired cinematic dreams and spirited wonders.',
        image: 'https://images.unsplash.com/photo-1571133331008-072338f9b964?auto=format&fit=crop&q=80&w=800',
        tags: ['History', 'Street Food']
      },
      {
        id: 'ximending',
        name: 'Ximending',
        description: 'The heartbeat of youth culture, fashion, and nocturnal energy.',
        image: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&q=80&w=800',
        tags: ['Neon', 'Vibrant']
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
        tags: ['Nature', 'Reflection']
      },
      {
        id: 'alishan',
        name: 'Alishan Forest',
        description: 'Ancient cedars and the world-renowned high-mountain sunrise.',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800',
        tags: ['Mist', 'Ancient']
      },
      {
        id: 'cingjing',
        name: 'Cingjing Farm',
        description: 'The "Misty Eden" of Taiwan, offering European-style pastures in the sky.',
        image: 'https://images.unsplash.com/photo-1606822472481-8178a99479e0?auto=format&fit=crop&q=80&w=800',
        tags: ['Highland', 'View']
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
        tags: ['Cliffs', 'Adventure']
      },
      {
        id: 'qixingtan',
        name: 'Qixingtan Beach',
        description: 'A crescent-shaped pebble beach overlooking the vast Pacific.',
        image: 'https://images.unsplash.com/photo-1583256038332-9df7b494d930?auto=format&fit=crop&q=80&w=800',
        tags: ['Ocean', 'Crescent']
      },
      {
        id: 'sanxiantai',
        name: 'Sanxiantai Bridge',
        description: 'An eight-arch bridge resembling a dragon connecting to an island.',
        image: 'https://images.unsplash.com/photo-1579543124119-a1b734791e3e?auto=format&fit=crop&q=80&w=800',
        tags: ['Iconic', 'Legend']
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
        tags: ['Legacy', 'Culture']
      },
      {
        id: 'kenting',
        name: 'Kenting Park',
        description: 'White sands and coral reefs at the southernmost tip of Taiwan.',
        image: 'https://images.unsplash.com/photo-1560942485-b2a11cc13456?auto=format&fit=crop&q=80&w=800',
        tags: ['Tropical', 'Surf']
      },
      {
        id: 'kaohsiung-port',
        name: 'Kaohsiung Harbor',
        description: 'A massive industrial port transformed into an art and design hub.',
        image: 'https://images.unsplash.com/photo-1610476044739-166d40398642?auto=format&fit=crop&q=80&w=800',
        tags: ['Art', 'Modern']
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
    backgroundImage: '/islands-bg.png', // Penghu Basalt or similar
    landmarks: [
      {
        id: 'penghu',
        name: 'Penghu Columns',
        description: 'Majestic basalt columns rising from the sea, a geological wonder.',
        image: 'https://images.unsplash.com/photo-1590059294247-4c7caf4524c9',
        tags: ['Geology', 'Ocean']
      }
    ]
  }
];
