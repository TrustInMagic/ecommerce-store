const games = [
  {
    name: 'WoW Dragonflight',
    price: '49.99',
    about:
      "The dragonflights of Azeroth have returned, called upon to defend their ancestral home, the Dragon Isles. Surging with elemental magic and the life energies of Azeroth, the Isles are awakening once more, and it's up to you to explore their primordial wonder and discover long-forgotten secrets.",
    more: {
      released: 'November 28, 2022',
      platforms: 'Windows, Mac',
      mainGenre: 'RPG',
      developers: 'Blizzard Entertainment',
      publishers: 'Blizzard Entertainment',
    },
    websiteUrl: 'https://dragonflight.blizzard.com/en-us/',
    imgUrl: [
      'assets/game-img/wow-dragonflight/wow-dragonflight_1.webp',
      'assets/game-img/wow-dragonflight/wow-dragonflight_2.webp',
      'assets/game-img/wow-dragonflight/wow-dragonflight_3.webp',
      'assets/game-img/wow-dragonflight/wow-dragonflight_4.webp',
    ],
    rating: 8.5,
  },
  {
    name: 'Starcraft II',
    price: '14.99',
    about:
      "Welcome the Koprulu sector. You are Jim Raynor, and you're on a crusade to bring down the Dominion and its nefarious leader, Arcturus Mengsk. Haunted by betrayal and remorse, some believe you've given up the fight. But you have promises to keep – and a need for vengeance that’s long overdue.",
    more: {
      released: 'July 27, 2010',
      platforms: 'Windows, Mac',
      mainGenre: 'RPG',
      developers: 'Blizzard Entertainment',
      publishers: 'Blizzard Entertainment',
    },
    websiteUrl: 'https://starcraft2.com/en-us/',
    imgUrl: [
      'assets/game-img/starcraft/starcraft_1.jpg',
      'assets/game-img/starcraft/starcraft_2.jpg',
      'assets/game-img/starcraft/starcraft_3.jpg',
      'assets/game-img/starcraft/starcraft_4.jpg',
    ],
    rating: 8.3,
  },
  {
    name: 'Cyberpunk 2077',
    price: '59.99',
    about:
      'Cyberpunk 2077 is a continuation of the events of Cyberpunk 2020, taking an alternate path to that of Cyberpunk V3.0. The game is set in the dystopian metropolis of Night City. It is set in the Free State of Northern California. Night City is located south of San Francisco around the area of Morro Bay, CA. During Cyberpunk 2020, Night City is said to have a population of more than five million inhabitants. However, this number is suspected to be considerably larger in 2077. Following an economic collapse sometime during the early 21st century, the United States is forced to rely on large corporations to survive. These corporations deal in a wide range of areas, such as weapons, robotics, cybernetics, pharmaceuticals, communications, and biotechnology; many of these companies operate above the law. The game follows the story of V — a hired gun on the rise in Night City, the most violent and dangerous metropolis of the corporate-ruled future. A robust character creator will allow players to choose Vs gender, visual appearance, as well as historical background — all of which may influence the shape of the game. The world is inspired by the works of authors such as William Gibson (author of Neuromancer) and Phillip K Dick, whose novel Do Androids Dream of Electric Sheep? and subsequent movie adaption Blade Runner heavily influenced the creator, Mike Pondsmith, in creating the original tabletop RPG.',
    more: {
      released: '10th of December, 2020',
      platforms: 'Playstation 4, PC, Xbox Series S/X, Playstation 5, Xbox One',
      mainGenre: 'RPG',
      developers: 'CD PROJECT RED, CD PROJECT',
      publishers: 'CD PROJECT RED',
    },
    websiteUrl: 'https://www.cyberpunk.net/ro/en/',
    imgUrl: [
      'assets/game-img/cyberpunk/cyberpunk_1.jpg',
      'assets/game-img/cyberpunk/cyberpunk_2.jpg',
      'assets/game-img/cyberpunk/cyberpunk_3.jpg',
      'assets/game-img/cyberpunk/cyberpunk_4.jpg',
    ],
    rating: 6.9,
  },
  {
    name: 'Battlefield V',
    price: '29.99',
    about:
      'The Battlefield series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet.',
    more: {
      released: '9th of November, 2018',
      platforms: 'Playstation 4, PC, Xbox Series S/X, Xbox One',
      mainGenre: 'Shooter',
      developers: 'EA Digital Illusions CE',
      publishers: 'Electronic Arts',
    },
    websiteUrl: 'https://www.ea.com/games/battlefield/battlefield-5',
    imgUrl: [
      'assets/game-img/battlefield/battlefield_1.jpg',
      'assets/game-img/battlefield/battlefield_2.jpg',
      'assets/game-img/battlefield/battlefield_3.jpg',
      'assets/game-img/battlefield/battlefield_4.jpg',
    ],
    rating: 7.1,
  },
  {
    name: 'Grand Theft Auto: V',
    price: '39.99',
    about:
      'Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the games three lead characters, playing all sides of the games interwoven story.',
    more: {
      released: '17th of September, 2013',
      platforms:
        'Xbox One, PlayStation 4, Xbox 360, PlayStation 5, PC, PlayStation 3, Xbox Series S/X',
      mainGenre: 'Action',
      developers: 'Rockstar North',
      publishers: 'Rockstar Games',
    },
    websiteUrl: 'https://www.rockstargames.com/gta-v',
    imgUrl: [
      'assets/game-img/gta/gta_1.jpg',
      'assets/game-img/gta/gta_2.jpg',
      'assets/game-img/gta/gta_3.jpg',
      'assets/game-img/gta/gta_4.jpg',
    ],
    rating: 7.1,
  },
  {
    name: 'The Elder Scrolls: Skyrim',
    price: '19.99',
    about:
      'Two hundred years have passed since the events of The Elder Scrolls IV: Oblivion, and it is now 4E 201. The High King of Skyrim has been killed, and the threat of Civil War looms over the land of Skyrim; One side wishes to secede from the weakened Third Empire, while the other wishes to remain a part of it. To make matters worse, this schism is the final event in a prophecy foretold by the Elder Scrolls that will lead to the return of the dragons under Alduin, the Nordic god of destruction. The player starts the game on a cart heading for the chopping block after being caught with the Stormcloaks in an ambush by the Imperial Legion. As the player lays their head on the chopping block, the dragon Alduin attacks. In the midst of the chaos, Hadvar, several Stormcloaks, along with their leader and fellow prisoner, Ulfric Stormcloak, assist in the players escape. The player may choose between the assistance of Ralof, the Stormcloak who arrived with Ulfric, or Hadvar, the Imperial soldier tasked with reading off the names of the prisoners being sent to their execution. After assisting and gaining the favor of Jarl Balgruuf the Greater, The player later learns that they are Dovahkiin, or Dragonborn, a person charged with the duty of defeating Alduin and the dragons. Eventually, the player meets Delphine, and Esbern, two of the last remaining Blades, and becomes the pupil of the esteemed Greybeards of High Hrothgar.',
    more: {
      released: '10th of November, 2011',
      platforms: 'Xbox 360, PC (Microsoft Windows), PlayStation 3',
      mainGenre: 'RPG',
      developers: 'Bethesda Game Studios',
      publishers: 'Bethesda Softworks',
    },
    websiteUrl: 'https://elderscrolls.bethesda.net/de/',
    imgUrl: [
      'assets/game-img/skyrim/skyrim_1.jpg',
      'assets/game-img/skyrim/skyrim_2.jpg',
      'assets/game-img/skyrim/skyrim_3.jpg',
      'assets/game-img/skyrim/skyrim_4.jpg',
    ],
    rating: 6.8,
  },
  {
    name: 'Warframe',
    price: '5.99',
    about:
      'Warframe situates players as members of the Tenno race, newly awoken after years of cryo-sleep into a solar system at war. Reborn into a corrupt era, the Tenno are sought by the oppressive Grineer Empire for annihilation. Warframe armor is the key to overthrowing the Grineer by providing players with unique offensive and defensive powers to explore, upgrade and master during purpose-driven radical raids.',
    more: {
      released: '25th of March, 2013',
      platforms:
        'Xbox One, PlayStation 4, PlayStation 5, PC, Nintendo Switch, Xbox Series S/X',
      mainGenre: 'Action',
      developers: 'Digital Extremes',
      publishers: 'Digital Extremes',
    },
    websiteUrl: 'https://www.warframe.com/landing',
    imgUrl: [
      'assets/game-img/warframe/warframe_1.jpg',
      'assets/game-img/warframe/warframe_2.jpg',
      'assets/game-img/warframe/warframe_3.jpg',
      'assets/game-img/warframe/warframe_4.jpg',
    ],
    rating: 7.5,
  },
  {
    name: 'Rise of the Tomb Raider',
    price: '12.99',
    about:
      'Rise of the Tomb Raider is a third-person action-adventure game in which players control Lara Croft, who is on a quest to discover the legendary city of Kitezh. Combat is a major gameplay mechanic; Lara has a large variety of weapons at her disposal (including assault rifles, shotguns, and pistols), some of which have an alternate firing mode. Players may also utilize stealth to progress through portions of the game, using bows and arrows to take out enemies, creating distractions to draw enemy attention away from Lara, or hiding in bushes to evade enemies. Lara can use the environment to fight enemies, shooting explosive barrels, tearing down rope-wrapped structures with rope arrows, or ambushing enemies from high ground. She can also use her ice axe and combat knife to engage in melee combat with enemies.',
    more: {
      released: '10th of November, 2015',
      platforms:
        'Xbox One, PlayStation 4, Linux, Xbox 360, Mac, PC, Google Stadia',
      mainGenre: 'Adventure',
      developers: 'Crystal Dynamics',
      publishers: 'Microsoft Studios / Square Enix Europe',
    },
    websiteUrl: 'https://tombraider.square-enix-games.com/en-us',
    imgUrl: [
      'assets/game-img/tomb-rider/tomb-rider_1.jpg',
      'assets/game-img/tomb-rider/tomb-rider_2.jpg',
      'assets/game-img/tomb-rider/tomb-rider_3.jpg',
      'assets/game-img/tomb-rider/tomb-rider_4.jpg',
    ],
    rating: 6.9,
  },
  {
    name: 'Metro Exodus',
    price: '37.99',
    about:
      'Metro Exodus is an epic, story-driven first person shooter from 4A Games that blends deadly combat and stealth with exploration and survival horror in one of the most immersive game worlds ever created. Explore the Russian wilderness across vast, non-linear levels and follow a thrilling story-line that spans an entire year through spring, summer and autumn to the depths of nuclear winter. Inspired by the novels of Dmitry Glukhovsky, Metro Exodus continues Artyoms story in the greatest Metro adventure yet.',
    more: {
      released: '15th of February, 2019',
      platforms:
        'Xbox One, PlayStation 4, PlayStation 5, PC, Xbox Series S/X, Google Stadia',
      mainGenre: 'Shooter',
      developers: '4A Games',
      publishers: 'Deep Silver',
    },
    websiteUrl: 'https://www.metrothegame.com',
    imgUrl: [
      'assets/game-img/metro/metro_1.jpg',
      'assets/game-img/metro/metro_2.jpg',
      'assets/game-img/metro/metro_3.jpg',
      'assets/game-img/metro/metro_4.jpg',
    ],
    rating: 7.9,
  },
  {
    name: 'Rocket League',
    price: '23.99',
    about:
      'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special “Mutators” that let you change the rules entirely, hockey and basketball-inspired Extra Modes, and more than 500 trillion possible cosmetic customization combinations.',
    more: {
      released: '7th of July, 2015',
      platforms:
        'Xbox One, PlayStation 4, Linux, Mac, PlayStation 5, PC, Nintendo Switch, Xbox Series S/X',
      mainGenre: 'Sports',
      developers: 'Psyonix',
      publishers: 'Psyonix',
    },
    websiteUrl: 'https://www.rocketleague.com/',
    imgUrl: [
      'assets/game-img/rocket-league/rocket-league_1.jpg',
      'assets/game-img/rocket-league/rocket-league_2.jpg',
      'assets/game-img/rocket-league/rocket-league_3.jpg',
      'assets/game-img/rocket-league/rocket-league_4.jpg',
    ],
    rating: 6.1,
  },
  {
    name: 'The Witcher 3: Wild Hunt',
    price: '19.99',
    about:
      'RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.',
    more: {
      released: '19th of May, 2015',
      platforms: 'Xbox One, PlayStation 4, PC, Nintendo Switch',
      mainGenre: 'RPG',
      developers: 'CD PROJECT RED',
      publishers: 'CD PROJECT',
    },
    websiteUrl: 'https://www.thewitcher.com/ro/en/',
    imgUrl: [
      'assets/game-img/witcher/witcher_1.jpg',
      'assets/game-img/witcher/witcher_2.jpg',
      'assets/game-img/witcher/witcher_3.jpg',
      'assets/game-img/witcher/witcher_4.jpg',
    ],
    rating: 6.9,
  },
  {
    name: 'Hitman',
    price: '12.99',
    about:
      'Become the Master Assassin in an intense spy-thriller story. As Agent 47, you perform contract hits on powerful, high-profile targets in exotic locations around the world. Gameplay focuses on taking out targets in huge and intricate sandbox levels with complete freedom of approach. Where to go, when to strike and who to kill – it is all up to you.',
    more: {
      released: '11th of March, 2016',
      platforms: 'Xbox One, PlayStation 4, Linux, Mac, PC, Google Stadia',
      mainGenre: 'Strategy',
      developers: 'IO Interactive',
      publishers: 'Square Enix Europe',
    },
    websiteUrl: 'https://ioi.dk/hitman',
    imgUrl: [
      'assets/game-img/hitman/hitman_1.jpg',
      'assets/game-img/hitman/hitman_2.jpg',
      'assets/game-img/hitman/hitman_3.jpg',
      'assets/game-img/hitman/hitman_4.jpg',
    ],
    rating: 7,
  },
  {
    name: 'Fallout 4',
    price: '26.99',
    about:
      'The story of Fallout 4 focuses on a spouse, the Sole Survivor of Vault 111, as they search for their missing child, Shaun. Fallout 4 is set in and around the Boston area in 2287, 10 years after Fallout 3. Along the way, the Sole Survivor discovers a world in fear of a mysterious organization known as the Institute, consumed by paranoia of a race of robotic yet also biological human-like beings known as synths. As a result of the synth-focused narrative, the Sole Survivor, as well as the player, are faced with ethical questions such as how far people should experiment with science, the morality of creating sentient living machines that express emotions and suffering, and what it means to be human.',
    more: {
      released: '10th of November, 2015',
      platforms: 'Xbox One, PlayStation 4, PC',
      mainGenre: 'RPG',
      developers: 'Bethesda Game Studios',
      publishers: 'Bethesda Softworks',
    },
    websiteUrl: 'https://fallout.bethesda.net/en/games/fallout-4',
    imgUrl: [
      'assets/game-img/fallout/fallout_1.jpg',
      'assets/game-img/fallout/fallout_2.jpg',
      'assets/game-img/fallout/fallout_3.jpg',
      'assets/game-img/fallout/fallout_4.jpg',
    ],
    rating: 7.5,
  },
  {
    name: 'GTA: San Andreas',
    price: '3.99',
    about:
      'Returning after his mothers murder to the semi-fictional city of Los Santos (based on Los Angeles), Carl Johnson, a former gang banger, must take back the streets for his family and friends by gaining respect and once again gaining control over the streets. However, a story filled with crime, lies and corruption will lead him to trudge the entire state of San Andreas (based on California and Nevada) to rebuild his life.',
    more: {
      released: '26th of October, 2004',
      platforms:
        'Android, PlayStation 4, PlayStation 2, Xbox 360, Xbox, PC, PlayStation 3',
      mainGenre: 'Action',
      developers: 'Rockstar North',
      publishers: 'Rockstar Games',
    },
    websiteUrl: 'https://www.rockstargames.com/games/sanandreas',
    imgUrl: [
      'assets/game-img/gta-san/gta-san_1.jpg',
      'assets/game-img/gta-san/gta-san_2.jpg',
      'assets/game-img/gta-san/gta-san_3.jpg',
      'assets/game-img/gta-san/gta-san_4.jpg',
    ],
    rating: 6.4,
  },
  {
    name: 'Dota 2',
    price: '12.99',
    about:
      'Dota 2 is an RTS-styled MOBA-type competitive team game with RPG elements. Two competing teams (Radiant and Dire) consist of five players each. The main objective in Dota 2 is to destroy the enemy Ancient inside their stronghold. These strongholds are protected by multiple towers down 3 lanes. Instead of building armies of units like in classical RTS games, each player controls a single Hero, a strategically-powerful unit with unique abilities and characteristics which can be improved over the course of the game. Experience is earned when nearby creeps and heroes die, and once collecting enough experience, the hero gains a level, which increases the heros stats, and at most levels the hero gains a skill point which can be spent to unlock or upgrade one of the heros abilities. Alongside a heros fixed abilities, each hero has 6 inventory slots which can be filled with Items which provide various benefits and abilities. To purchase these items, Gold is gained passively over time, by killing creeps, by killing enemy heroes and by destroying buildings.',
    more: {
      released: '9th of July, 2013',
      platforms: 'Linux, Mac, PC',
      mainGenre: 'Strategy',
      developers: 'Valve',
      publishers: 'Valve',
    },
    websiteUrl: 'https://www.dota2.com/home',
    imgUrl: [
      'assets/game-img/dota/dota_1.jpg',
      'assets/game-img/dota/dota_2.jpg',
      'assets/game-img/dota/dota_3.jpg',
      'assets/game-img/dota/dota_4.jpg',
    ],
    rating: 8,
  },
  {
    name: 'Portal 2',
    price: '44.99',
    about:
      'Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Guns mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs.',
    more: {
      released: '19th of April, 2011',
      platforms: 'Linux, Xbox 360, Mac, PC, PlayStation 3',
      mainGenre: 'Puzzle',
      developers: 'Valve',
      publishers: 'Valve',
    },
    websiteUrl: 'https://www.thinkwithportals.com/',
    imgUrl: [
      'assets/game-img/portal/portal_1.jpg',
      'assets/game-img/portal/portal_2.jpg',
      'assets/game-img/portal/portal_3.jpg',
      'assets/game-img/portal/portal_4.jpg',
    ],
    rating: 7.2,
  },
  {
    name: 'God of War',
    price: '41.99',
    about:
      'Many years have passed since Kratos took his vengeance against the Olympian gods. Having survived his final encounter with his father Zeus, Kratos has since travelled to Midgard in Ancient Norway and now lives with his young son Atreus in the world of the Norse gods, a savage land inhabited by many ferocious monsters and warriors. In order to teach his son, whose mother (and Kratoss second wife) has recently died, how to survive in such a world, Kratos must master the rage that has driven him for many years and embrace his newfound role as a father and a mentor.',
    more: {
      released: '20th of April, 2018',
      platforms: 'PlayStation 4, PC',
      mainGenre: 'Adventure',
      developers: 'Santa Monica Studio',
      publishers: 'Sony Interactive Entertainment',
    },
    websiteUrl: 'https://www.playstation.com/de-de/god-of-war/',
    imgUrl: [
      'assets/game-img/gow/gow_1.jpg',
      'assets/game-img/gow/gow_2.jpg',
      'assets/game-img/gow/gow_3.jpg',
      'assets/game-img/gow/gow_4.jpg',
    ],
    rating: 7.9,
  },
  {
    name: 'Counter Strike: GO',
    price: '4.99',
    about:
      'Counter-Strike: Global Offensive (CS:GO) is a first-person shooter video game which is a part of the Counter-Strike series. It was announced to the public on August 12, 2011, and is developed by Valve Corporation and their partner, Hidden Path Entertainment. The game was later released on August 21, 2012 for the Playstation 3, Xbox 360, Microsoft Windows, macOS and later Linux as a downloadable title.',
    more: {
      released: '21st of August, 2012',
      platforms: 'Linux, Xbox 360, Mac, PC, PlayStation 3',
      mainGenre: 'Shooter',
      developers: 'Valve / Hidden Path Entertainment',
      publishers: 'Valve',
    },
    websiteUrl: 'https://blog.counter-strike.net/',
    imgUrl: [
      'assets/game-img/cs-go/cs-go_1.jpg',
      'assets/game-img/cs-go/cs-go_2.jpg',
      'assets/game-img/cs-go/cs-go_3.jpg',
      'assets/game-img/cs-go/cs-go_4.jpg',
    ],
    rating: 6.9,
  },
];

export default games