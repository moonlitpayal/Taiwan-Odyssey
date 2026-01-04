
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
          { url: '/images/chiang-kai-shek-memorial/03_v2.png', caption: 'Main Archway' },
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
        image: '/images/jiufen-old-street/01.jpg',
        tags: ['History', 'Street Food'],
        gallery: [
          { url: '/images/jiufen-old-street/01.jpg', caption: 'Tea House View' },
          { url: '/images/jiufen-old-street/02.jpg', caption: 'Night Lights' },
          { url: '/images/jiufen-old-street/03.jpg', caption: 'Old Street' },
          { url: '/images/jiufen-old-street/04.jpg', caption: 'Misty Mountains' },
          { url: '/images/jiufen-old-street/05.jpg', caption: 'Narrow Alleys' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/w1oWuRH9MFNxjdvz5',
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
        image: '/images/ximending/01.jpg',
        tags: ['Neon', 'Vibrant'],
        gallery: [
          { url: '/images/ximending/01.jpg', caption: 'The Harajuku of Taipei' },
          { url: '/images/ximending/02.jpg', caption: 'Rainbow Crossing' },
          { url: '/images/ximending/03.png', caption: 'Street Food Stalls' },
          { url: '/images/ximending/04.png', caption: 'Neon Nights' },
          { url: '/images/ximending/05.jpg', caption: 'Walking District' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/t1EEY4ZB2Dh2m6dK9',
        quiz: [
          {
            id: 'q1',
            question: 'Ximending is often called the "what" of Taipei?',
            options: ['The Times Square', 'The Harajuku', 'The Silicon Valley', 'The Wall Street'],
            correctAnswer: 1,
            fact: 'It is known as the "Harajuku of Taipei" due to its rich mix of youth subcultures and Japanese culture.'
          }
        ]
      },
      {
        id: 'shilin-night-market',
        name: 'Shilin Night Market',
        description: 'The largest and most famous night market in the city, a labyrinth of food and fun.',
        image: '/images/shilin-night-market/01_v2.jpg',
        tags: ['Food', 'Bustling'],
        gallery: [
          { url: '/images/shilin-night-market/01_v2.jpg', caption: 'Market Entrance' },
          { url: '/images/shilin-night-market/02.jpg', caption: 'Food Stalls' },
          { url: '/images/shilin-night-market/03.jpg', caption: 'Lanterns' },
          { url: '/images/shilin-night-market/04.jpg', caption: 'Crowded Alleys' },
          { url: '/images/shilin-night-market/05.jpg', caption: 'Market View' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/vh9gwEBenK9eZoM7A',
        quiz: [
          {
            id: 'q1',
            question: 'Which famous crispy snack is Shilin Market known for?',
            options: ['Stinky Tofu', 'XXL Fried Chicken', 'Oyster Omelet', 'Bubble Tea'],
            correctAnswer: 1,
            fact: 'The "Hot-Star Large Fried Chicken" is a legendary snack that originated here and is bigger than a human face!'
          }
        ]
      },
      {
        id: 'raohe-night-market',
        name: 'Raohe Night Market',
        description: 'One of the oldest night markets in Taipei, famous for its black pepper buns and Ciyou Temple.',
        image: '/images/raohe-night-market/01.jpg',
        tags: ['History', 'Food'],
        gallery: [
          { url: '/images/raohe-night-market/01.jpg', caption: 'Market Entrance Gate' },
          { url: '/images/raohe-night-market/02.jpg', caption: 'Bustling Street' },
          { url: '/images/raohe-night-market/03.jpg', caption: 'Food Stalls' },
          { url: '/images/raohe-night-market/04.png', caption: 'Ciyou Temple' },
          { url: '/images/raohe-night-market/05.jpg', caption: 'Night View' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/k1MNuDZZuYCK9QWP9',
        quiz: [
          {
            id: 'q1',
            question: 'What is the must-try signature snack at the entrance of Raohe Night Market?',
            options: ['Stinky Tofu', 'Black Pepper Bun', 'Bubble Tea', 'Oyster Omelet'],
            correctAnswer: 1,
            fact: 'The "Fuzhou Black Pepper Buns" are cooked in a tandoor-like oven and often have long queues right at the entrance.'
          }
        ]
      },
      {
        id: 'longshan-temple',
        name: 'Longshan Temple',
        description: 'A masterpiece of traditional Chinese architecture and a spiritual haven in the city.',
        image: '/images/longshan-temple/01.jpg',
        tags: ['History', 'Spirituality'],
        gallery: [
          { url: '/images/longshan-temple/01.jpg', caption: 'Main Courtyard' },
          { url: '/images/longshan-temple/02_v2.jpg', caption: 'Temple Roof' },
          { url: '/images/longshan-temple/03_v2.jpg', caption: 'Intricate Carvings' },
          { url: '/images/longshan-temple/04.jpg', caption: 'Altar' },
          { url: '/images/longshan-temple/05.jpg', caption: 'Stone Lions' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/WqB1CBgrGjPUnGn59',
        quiz: [
          {
            id: 'q1',
            question: 'Longshan Temple was built in 1738 by settlers from which Chinese province?',
            options: ['Fujian', 'Guangdong', 'Sichuan', 'Hunan'],
            correctAnswer: 0,
            fact: 'It was built by settlers from Fujian as a gathering place for Chinese settlers.'
          }
        ]
      },
      {
        id: 'yehliu-geopark',
        name: 'Yehliu Geopark',
        description: 'A landscape of otherworldly rock formations sculpted by sea and wind.',
        image: '/images/yehliu-geopark/01.png',
        tags: ['Nature', 'Wonders'],
        gallery: [
          { url: '/images/yehliu-geopark/01.png', caption: 'Costal Formations' },
          { url: '/images/yehliu-geopark/02_v2.png', caption: 'The Queens Head' },
          { url: '/images/yehliu-geopark/03_v2.jpg', caption: 'Rock Landscape' },
          { url: '/images/yehliu-geopark/04.jpg', caption: 'Cape Aerial View' },
          { url: '/images/yehliu-geopark/05.png', caption: 'Observation Deck' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/2pMcqFCjbLtp6otE9',
        quiz: [
          {
            id: 'q1',
            question: 'What is the most famous rock formation at Yehliu Geopark known as?',
            options: ['The King\'s Crown', 'The Queen\'s Head', 'The Princess\'s Slipper', 'The Dragon\'s Tooth'],
            correctAnswer: 1,
            fact: 'The "Queen\'s Head" is an iconic mushroom rock that resembles the profile of Queen Elizabeth I.'
          }
        ]
      },
      {
        id: 'houtong-cat-village',
        name: 'Houtong Cat Village',
        description: 'A former coal mining town transformed into a sanctuary for hundreds of friendly cats.',
        image: '/images/houtong-cat-village/01.jpg',
        tags: ['Nature', 'Animals'],
        gallery: [
          { url: '/images/houtong-cat-village/01.jpg', caption: 'Hillside Village' },
          { url: '/images/houtong-cat-village/02.png', caption: 'Village Guardian' },
          { url: '/images/houtong-cat-village/03.png', caption: 'Cat Walkway' },
          { url: '/images/houtong-cat-village/04.jpg', caption: 'Kitty Corner' },
          { url: '/images/houtong-cat-village/05.png', caption: 'Mining Cart Cats' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/VbPJVVeF9AB15EPD7',
        quiz: [
          {
            id: 'q1',
            question: 'Before becoming a cat sanctuary, what was Houtong famous for?',
            options: ['Gold Mining', 'Coal Mining', 'Tea Farming', 'Fishing'],
            correctAnswer: 1,
            fact: 'It was once Taiwan\'s largest coal mining site before the mines closed in the 1990s.'
          }
        ]
      },
      {
        id: 'national-taiwan-university',
        name: 'National Taiwan University',
        description: 'Taiwan\'s most prestigious university, known for its royal palm boulevard and historic colonial architecture.',
        image: '/images/national-taiwan-university/01.jpg',
        tags: ['History', 'Education'],
        gallery: [
          { url: '/images/national-taiwan-university/01.jpg', caption: 'Campus Overview' },
          { url: '/images/national-taiwan-university/02.jpg', caption: 'Main Library' },
          { url: '/images/national-taiwan-university/03.jpg', caption: 'Drunken Moon Lake' },
          { url: '/images/national-taiwan-university/04.jpg', caption: 'Social Sciences Building' },
          { url: '/images/national-taiwan-university/05.png', caption: 'Library Interior' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/xy7LiqYLdb33HvG19',
        quiz: [
          {
            id: 'q1',
            question: 'What is the famous nickname of the main road entering NTU?',
            options: ['Cherry Blossom Path', 'Royal Palm Boulevard', 'Golden Rain Avenue', 'Banyan Tree Walk'],
            correctAnswer: 1,
            fact: 'The majestic Royal Palm Boulevard is the iconic entrance to the university, lined with tall royal palm trees.'
          }
        ]
      },
      {
        id: 'national-tsing-hua-university',
        name: 'National Tsing Hua University',
        description: 'A top research university in Hsinchu with a beautiful campus featuring lakes and lush greenery.',
        image: '/images/national-tsing-hua-university/01.jpg',
        tags: ['Education', 'Tech'],
        gallery: [
          { url: '/images/national-tsing-hua-university/01.jpg', caption: 'Main Auditorium' },
          { url: '/images/national-tsing-hua-university/02.jpg', caption: 'General Building II' },
          { url: '/images/national-tsing-hua-university/03.jpg', caption: 'Library and Campus' },
          { url: '/images/national-tsing-hua-university/04.png', caption: 'Campus View' },
          { url: '/images/national-tsing-hua-university/05.png', caption: 'Laboratory' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/XHWdZWCqsRH91ZKKA',
        quiz: [
          {
            id: 'q1',
            question: 'NTHU is located in which city, known as Taiwan\'s "Silicon Valley"?',
            options: ['Taipei', 'Hsinchu', 'Taichung', 'Kaohsiung'],
            correctAnswer: 1,
            fact: 'Hsinchu Science Park, located nearby, is the hub of Taiwan\'s high-tech industry.'
          }
        ]
      },
      {
        id: 'beitou-thermal-valley',
        name: 'Beitou Thermal Valley',
        description: 'A steaming geothermal valley with turquoise hot spring waters, often called "Hell Valley".',
        image: '/images/beitou-thermal-valley/01.jpg',
        tags: ['Nature', 'Hot Springs'],
        gallery: [
          { url: '/images/beitou-thermal-valley/01.jpg', caption: 'Steaming Valley' },
          { url: '/images/beitou-thermal-valley/02.png', caption: 'Turquoise Waters' },
          { url: '/images/beitou-thermal-valley/03.png', caption: 'Hot Spring Source' },
          { url: '/images/beitou-thermal-valley/04.png', caption: 'Mist over Valley' },
          { url: '/images/beitou-thermal-valley/05.jpg', caption: 'Observation Deck' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/vogq2DrYe9hvDKwi7',
        quiz: [
          {
            id: 'q1',
            question: 'What mineral, discovered in Beitou, is named after the area?',
            options: ['Beitou Stone', 'Taiwan Jade', 'Sulfur Crystal', 'Jadeite'],
            correctAnswer: 0,
            fact: 'Hokutolite, also known as Beitou Stone, is a rare radioactive mineral first discovered here.'
          }
        ]
      },
      {
        id: 'tamsui-fishermans-wharf',
        name: 'Tamsui Fisherman\'s Wharf',
        description: 'Famous for its beautiful sunsets, seafood, and the iconic Lover\'s Bridge.',
        image: '/images/tamsui-fishermans-wharf/01.png',
        tags: ['Scenic', 'Romance'],
        gallery: [
          { url: '/images/tamsui-fishermans-wharf/01.png', caption: 'Lover\'s Bridge Sunset' },
          { url: '/images/tamsui-fishermans-wharf/02.png', caption: 'Wharf Boardwalk' },
          { url: '/images/tamsui-fishermans-wharf/03.png', caption: 'Bridge Illumination' },
          { url: '/images/tamsui-fishermans-wharf/04.png', caption: 'Estuary View' },
          { url: '/images/tamsui-fishermans-wharf/05.png', caption: 'LOVE Signage' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/4zFAH9WbgobKcsQe9',
        quiz: [
          {
            id: 'q1',
            question: 'What is the name of the white cable-stayed bridge at Fisherman\'s Wharf?',
            options: ['Rainbow Bridge', 'Lover\'s Bridge', 'Sunset Bridge', 'Harbor Bridge'],
            correctAnswer: 1,
            fact: 'The "Lover\'s Bridge" is illuminated with changing colored lights at night and is a popular romantic spot.'
          }
        ]
      },
      {
        id: 'yangmingshan-national-park',
        name: 'Yangmingshan National Park',
        description: 'A stunning national park known for its volcanic terrain, hot springs, and flower festivals.',
        image: '/images/yangmingshan-national-park/01.png',
        tags: ['Nature', 'Hiking'],
        gallery: [
          { url: '/images/yangmingshan-national-park/01.png', caption: 'Flower Clock' },
          { url: '/images/yangmingshan-national-park/02.png', caption: 'Xiaoyoukeng Fumaroles' },
          { url: '/images/yangmingshan-national-park/03.png', caption: 'Cherry Blossom Path' },
          { url: '/images/yangmingshan-national-park/04.png', caption: 'Qingtiangang Grassland' },
          { url: '/images/yangmingshan-national-park/05.png', caption: 'Calla Lilies Field' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/1eqMZARx7ubf2Ap49',
        quiz: [
          {
            id: 'q1',
            question: 'Yangmingshan is famous for its active volcanic geology. What are the steam vents called?',
            options: ['Geysers', 'Fumaroles', 'Hot Springs', 'Lava Tubes'],
            correctAnswer: 1,
            fact: 'Xiaoyoukeng looks like a "small oil pit" and is a post-volcanic landscape with fumaroles emitting sulfurous gas.'
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
        image: '/images/sun-moon-lake/01.jpg',
        tags: ['Nature', 'Reflection'],
        gallery: [
          { url: '/images/sun-moon-lake/01.jpg', caption: 'Lake Panorama' },
          { url: '/images/sun-moon-lake/02.jpg', caption: 'Lakeside View' },
          { url: '/images/sun-moon-lake/03.jpg', caption: 'Temple Overlooking Lake' },
          { url: '/images/sun-moon-lake/04.png', caption: 'Bike Path' },
          { url: '/images/sun-moon-lake/05.png', caption: 'Sunset Reflection' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/6dvVK55gqcE14hrz6',
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
        image: '/images/alishan-forest/01.jpg',
        tags: ['Mist', 'Ancient'],
        gallery: [
          { url: '/images/alishan-forest/01.jpg', caption: 'Forest Trail' },
          { url: '/images/alishan-forest/02.jpg', caption: 'Sunrise Over Clouds' },
          { url: '/images/alishan-forest/03.png', caption: 'Ancient Trees' },
          { url: '/images/alishan-forest/04.jpg', caption: 'Sacred Tree' },
          { url: '/images/alishan-forest/05.png', caption: 'Sea of Clouds' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/uL8pFkpAoYWkQmne6',
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
        id: 'yushan',
        name: 'Yushan (Jade Mountain)',
        description: 'The highest peak in Taiwan and Northeast Asia, a holy sanctuary above the clouds.',
        image: '/images/yushan-jade-mountain/01.png',
        tags: ['Mountain', 'Peak'],
        gallery: [
          { url: '/images/yushan-jade-mountain/01.png', caption: 'Main Peak Summit' },
          { url: '/images/yushan-jade-mountain/02.jpg', caption: 'Ridge Line' },
          { url: '/images/yushan-jade-mountain/03.png', caption: 'Winter Snow' },
          { url: '/images/yushan-jade-mountain/04.jpg', caption: 'Sunrise View' },
          { url: '/images/yushan-jade-mountain/05.jpg', caption: 'Mountain Range' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/PCKHDfdibiViDRNq6',
        quiz: [
          {
            id: 'q1',
            question: 'Yushan is known as "Jade Mountain" because...',
            options: ['It is made of jade', 'It looks like jade in winter snow', 'It was a jade mine', 'The trees are jade green'],
            correctAnswer: 1,
            fact: 'When covered in winter snow, the peak shines like white jade under the sunlight.'
          }
        ]
      },
      {
        id: 'cingjing',
        name: 'Cingjing Farm',
        description: 'The "Misty Eden" of Taiwan, offering European-style pastures in the sky.',
        image: '/images/cingjing-farm/01.png',
        tags: ['Highland', 'View'],
        gallery: [
          { url: '/images/cingjing-farm/01.png', caption: 'Green Green Grasslands' },
          { url: '/images/cingjing-farm/02.png', caption: 'Sheep Grazing' },
          { url: '/images/cingjing-farm/03.jpg', caption: 'Autumn Colors' },
          { url: '/images/cingjing-farm/04.png', caption: 'Cherry Blossoms' },
          { url: '/images/cingjing-farm/05.jpg', caption: 'Sheep Close-up' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/ajsquZUT6PTbtnQs5',
        quiz: [
          {
            id: 'q1',
            question: 'Because of its architecture and sheep, Cingjing is known as...',
            options: ['Little Switzerland', 'Mini Paris', 'Tiny Tokyo', 'Small Scotland'],
            correctAnswer: 0,
            fact: 'It is often called "Little Switzerland" for its alpine atmosphere and European-style manors.'
          }
        ]
      },
      {
        id: 'gaomei-wetlands',
        name: 'Gaomei Wetlands',
        description: 'A vast wetland famous for its windmills, boardwalk, and stunning sunsets.',
        image: '/images/gaomei-wetlands/01.jpg',
        tags: ['Nature', 'Sunset'],
        gallery: [
          { url: '/images/gaomei-wetlands/01.jpg', caption: 'Wetlands Boardwalk' },
          { url: '/images/gaomei-wetlands/02.png', caption: 'Windmills at Sunset' },
          { url: '/images/gaomei-wetlands/03.png', caption: 'Sunset Reflection' },
          { url: '/images/gaomei-wetlands/04.png', caption: 'Winding Boardwalk' },
          { url: '/images/gaomei-wetlands/05.png', caption: 'Colorful Sunset' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/BxGCfPbzKaPnQmwMA',
        quiz: [
          {
            id: 'q1',
            question: 'The Gaomei Wetlands are famous for a row of...',
            options: ['Lighthouses', 'Wind Turbines', 'Ancient Statues', 'Cherry Trees'],
            correctAnswer: 1,
            fact: 'The row of giant wind turbines along the coast creates a unique and recognizable silhouette against the sunset.'
          }
        ]
      },
      {
        id: 'lugang-old-street',
        name: 'Lugang Old Street',
        description: 'A historic street lined with traditional architecture, ancient temples, and local delicacies.',
        image: '/images/lugang-old-street/01.jpg',
        tags: ['History', 'Culture'],
        gallery: [
          { url: '/images/lugang-old-street/01.jpg', caption: 'Historic Street View' },
          { url: '/images/lugang-old-street/02.jpg', caption: 'Traditional Architecture' },
          { url: '/images/lugang-old-street/03.jpg', caption: 'Old Doorway' },
          { url: '/images/lugang-old-street/04.jpg', caption: 'Lanterns' },
          { url: '/images/lugang-old-street/05.png', caption: 'Temple Entrance' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/sRvsBxBjafZRgkZQA',
        quiz: [
          {
            id: 'q1',
            question: 'Lugang was once one of Taiwan\'s most important...',
            options: ['Ports', 'Gold Mines', 'Tea Plantations', 'Military Forts'],
            correctAnswer: 0,
            fact: 'The saying "First Tainan, Second Lugang, Third Bangka" reflects its status as a major trading port in the Qing Dynasty.'
          }
        ]
      },
      {
        id: 'taichung-opera-house',
        name: 'Taichung Opera House',
        description: 'An architectural marvel known for its curved walls and "Sound Cave" design.',
        image: '/images/taichung-opera-house/01.jpg',
        tags: ['Architecture', 'Art'],
        gallery: [
          { url: '/images/taichung-opera-house/01.jpg', caption: 'Curved Facade' },
          { url: '/images/taichung-opera-house/02.jpg', caption: 'Modern Design' },
          { url: '/images/taichung-opera-house/03.png', caption: 'Night Illumination' },
          { url: '/images/taichung-opera-house/04.jpg', caption: 'Grand Auditorium' },
          { url: '/images/taichung-opera-house/05.png', caption: 'Interior Lobby' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/ewh7TVSn4QxzjPy89',
        quiz: [
          {
            id: 'q1',
            question: 'The National Taichung Theater is famous for having no...',
            options: ['Windows', 'Beams or Pillars', 'Doors', 'Stairs'],
            correctAnswer: 1,
            fact: 'Designed by Toyo Ito, it features a "Sound Cave" concept with curved walls and virtually no straight lines or pillars.'
          }
        ]
      },
      {
        id: 'xitou-monster-village',
        name: 'Xitou Monster Village',
        description: 'A Japanese-style village in the forest filled with quirky monster statues and themed shops.',
        image: '/images/xitou-monster-village/01.jpg',
        tags: ['Theme Park', 'Culture'],
        gallery: [
          { url: '/images/xitou-monster-village/01.jpg', caption: 'Monster Statue' },
          { url: '/images/xitou-monster-village/02.jpg', caption: 'Village Entrance' },
          { url: '/images/xitou-monster-village/03.jpg', caption: 'Lantern Street' },
          { url: '/images/xitou-monster-village/04.jpg', caption: 'Themed Building' },
          { url: '/images/xitou-monster-village/05.jpg', caption: 'Monster Post Office' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/K79hmgmTMSHK6b617',
        quiz: [
          {
            id: 'q1',
            question: 'The "monsters" in Xitou Monster Village are inspired by...',
            options: ['Greek Mythology', 'Japanese Folklore', 'Alien Movies', 'Dinosaur Fossils'],
            correctAnswer: 1,
            fact: 'The village was built to honor the friendship between a local resident and a Japanese man, incorporating elements of Japanese folklore and "yokai".'
          }
        ]
      },
      {
        id: 'hehuanshan',
        name: 'Hehuanshan',
        description: 'A magnificent high-mountain area famous for sunrise views, sea of clouds, and winter snow.',
        image: '/images/hehuanshan/01.png',
        tags: ['Nature', 'Mountain', 'Snow'],
        gallery: [
          { url: '/images/hehuanshan/01.png', caption: 'Sea of Clouds' },
          { url: '/images/hehuanshan/02.jpg', caption: 'Mountain Steps' },
          { url: '/images/hehuanshan/03.jpg', caption: 'Winding Road' },
          { url: '/images/hehuanshan/04.png', caption: 'High Altitude View' },
          { url: '/images/hehuanshan/05.png', caption: 'Snowy Peak' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/PVcZfkvq2TkxBAP17',
        quiz: [
          {
            id: 'q1',
            question: 'Hehuanshan is one of the few places in Taiwan where you can clearly see...',
            options: ['Snow in Winter', 'Active Volcanoes', 'Desert Dunes', 'Tropical Reefs'],
            correctAnswer: 0,
            fact: 'Due to its high altitude (over 3000m) and moisture, it is the most popular spot in Taiwan for snow chasing in winter.'
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
        id: 'taroko-gorge',
        name: 'Taroko Gorge',
        description: 'A magnificent marble canyon featuring towering cliffs, turquoise waters, and cultural trails.',
        image: '/images/taroko-gorge/01.jpg',
        tags: ['Nature', 'Cliffs', 'Adventure'],
        gallery: [
          { url: '/images/taroko-gorge/01.jpg', caption: 'Suspension Bridge' },
          { url: '/images/taroko-gorge/02.jpg', caption: 'Swallow Grotto' },
          { url: '/images/taroko-gorge/03.jpg', caption: 'Liwu River' },
          { url: '/images/taroko-gorge/04.jpg', caption: 'Tunnel of Nine Turns' },
          { url: '/images/taroko-gorge/05.jpg', caption: 'Eternal Spring Shrine' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/apTowZBt1zTbWhC59',
        quiz: [
          {
            id: 'q1',
            question: '"Taroko" means "human" in the language of which indigenous tribe?',
            options: ['Amis', 'Atayal', 'Truku', 'Bunun'],
            correctAnswer: 2,
            fact: 'The name originates from the Truku tribe who reside in the area and have a deep connection to the land.'
          }
        ]
      },
      {
        id: 'qixingtan-beach',
        name: 'Qixingtan Beach',
        description: 'A crescent-shaped pebble beach overlooking the vast Pacific, known for its deep blue waters.',
        image: '/images/qixingtan-beach/01.png',
        tags: ['Ocean', 'Crescent', 'Relax'],
        gallery: [
          { url: '/images/qixingtan-beach/01.png', caption: 'Blue Coastline' },
          { url: '/images/qixingtan-beach/02.jpg', caption: 'Pebble Beach' },
          { url: '/images/qixingtan-beach/03.jpg', caption: 'Cloudy Horizon' },
          { url: '/images/qixingtan-beach/04.png', caption: 'Clean Shore' },
          { url: '/images/qixingtan-beach/05.png', caption: 'Aerial View' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/SRydEk3KRWWQNWsbA',
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
        id: 'sanxiantai-bridge',
        name: 'Sanxiantai Bridge',
        description: 'An eight-arch bridge resembling a dragon connecting the mainland to a small island.',
        image: '/images/sanxiantai-bridge/01.jpg',
        tags: ['Iconic', 'Legend', 'Sea'],
        gallery: [
          { url: '/images/sanxiantai-bridge/01.jpg', caption: 'Dragon Bridge' },
          { url: '/images/sanxiantai-bridge/02.png', caption: 'Island Connection' },
          { url: '/images/sanxiantai-bridge/03.jpg', caption: 'Sunset Silhouette' },
          { url: '/images/sanxiantai-bridge/04.png', caption: 'Side Profile' },
          { url: '/images/sanxiantai-bridge/05.png', caption: 'Bridge at Dawn' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/QFtHre9v3cTomnd37',
        quiz: [
          {
            id: 'q1',
            question: 'The bridge has exactly how many arches?',
            options: ['Six', 'Eight', 'Ten', 'Twelve'],
            correctAnswer: 1,
            fact: 'The eight arches are designed to resemble the movement of a dragon over the sea.'
          }
        ]
      },
      {
        id: 'mr-brown-avenue',
        name: 'Mr. Brown Avenue',
        description: 'A picturesque road running through vast golden rice paddies, made famous by a coffee commercial.',
        image: '/images/mr-brown-avenue/01.jpg',
        tags: ['Nature', 'Scenic', 'Rice Paddies'],
        gallery: [
          { url: '/images/mr-brown-avenue/01.jpg', caption: 'The Winding Road' },
          { url: '/images/mr-brown-avenue/02.png', caption: 'Golden Rice Fields' },
          { url: '/images/mr-brown-avenue/03.jpg', caption: 'Takeshi Kaneshiro Tree' },
          { url: '/images/mr-brown-avenue/04.png', caption: 'Photo Frame' },
          { url: '/images/mr-brown-avenue/05.jpg', caption: 'Cycling Path' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/L76zUJybgfQhHUzs8',
        quiz: [
          {
            id: 'q1',
            question: 'Why is this road called "Mr. Brown Avenue"?',
            options: ['Named after a Mayor', 'Coffee Commercial', 'A famous painter', 'The color of the soil'],
            correctAnswer: 1,
            fact: 'It became famous after "Mr. Brown Coffee" filmed a commercial here, showcasing its pristine beauty.'
          }
        ]
      },
      {
        id: 'liyu-lake',
        name: 'Liyu Lake',
        description: 'The largest inland lake in Hualien, famous for its serene waters, bicycle loop, and seasonal fireflies.',
        image: '/images/liyu-lake/01.jpg',
        tags: ['Lake', 'Nature', 'Cycling'],
        gallery: [
          { url: '/images/liyu-lake/01.jpg', caption: 'Lakeside Reflection' },
          { url: '/images/liyu-lake/02.jpg', caption: 'Mountain View' },
          { url: '/images/liyu-lake/03.png', caption: 'Swan Boats' },
          { url: '/images/liyu-lake/04.png', caption: 'Serene Waters' },
          { url: '/images/liyu-lake/05.jpg', caption: 'Aerial Panorama' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/zxmbYHd7T7PC3tuu5',
        quiz: [
          {
            id: 'q1',
            question: '"Liyu" translates to which animal, describing the shape of the mountain beside the lake?',
            options: ['Carp', 'Dragon', 'Tiger', 'Turtle'],
            correctAnswer: 0,
            fact: 'Liyu Mountain resembles a carp lying by the lake, hence the name "Carp Lake".'
          }
        ]
      },
      {
        id: 'qingshui-cliffs',
        name: 'Qingshui Cliffs',
        description: 'Spectacular coastal cliffs dropping vertically into the azure Pacific Ocean, offering breathtaking views.',
        image: '/images/qingshui-cliffs/01.jpg',
        tags: ['Cliffs', 'Ocean', 'Scenic'],
        gallery: [
          { url: '/images/qingshui-cliffs/01.jpg', caption: 'Azure Waters' },
          { url: '/images/qingshui-cliffs/02.jpg', caption: 'Dramatic Cliffs' },
          { url: '/images/qingshui-cliffs/03.jpg', caption: 'Coastal Highway' },
          { url: '/images/qingshui-cliffs/04.png', caption: 'Observation Deck' },
          { url: '/images/qingshui-cliffs/05.png', caption: 'Cliff Face' }
        ],
        googleMapsUrl: 'https://maps.app.goo.gl/J3QEdbqZFSpbHrpZA',
        quiz: [
          {
            id: 'q1',
            question: 'The Qingshui Cliffs are part of which National Park?',
            options: ['Kenting', 'Yushan', 'Taroko', 'Yangmingshan'],
            correctAnswer: 2,
            fact: 'These majestic cliffs are one of the eight wonders of Taiwan and are within Taroko National Park.'
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
