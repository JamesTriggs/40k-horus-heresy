// Complete Horus Heresy Book Data Repository - Chronological Order
// Ordered by in-universe timeline, not publication order

// Character Encyclopedia Data
const characterData = {
    'horus-lupercal': {
        name: 'Horus Lupercal',
        image: 'images/character-horus-lupercal.jpg',
        legion: 'Luna Wolves / Sons of Horus',
        role: 'Warmaster of the Great Crusade, Primarch',
        bio: 'One of the twenty Primarchs created by the Emperor, Horus was the first to be rediscovered and became the favored son. Initially the loyal commander of the Luna Wolves Legion during the Great Crusade, he rose to Warmaster—second only to the Emperor in power. However, corrupted by Chaos through manipulation, he initiated the devastating Horus Heresy against the Imperium.'
    },
    'roboute-guilliman': {
        name: 'Roboute Guilliman',
        image: 'images/character-roboute-guilliman.jpg',
        legion: 'Ultramarines',
        role: 'Primarch, Lord Commander of the Imperium',
        bio: 'Roboute Guilliman is the Primarch of the Ultramarines Space Marine Legion and one of the Emperor\'s genetic sons. Renowned as both a brilliant military commander and skilled administrator, he authored the Codex Astartes and served as Lord Commander of the Imperium. After being mortally wounded during the Horus Heresy, he was resurrected ten thousand years later to lead humanity\'s forces once more.'
    },
    'lion-el-jonson': {
        name: 'Lion El\'Jonson',
        image: 'images/character-lion-el-jonson.jpg',
        legion: 'Dark Angels',
        role: 'Primarch, Knight Protector of Imperium Nihilus',
        bio: 'Lion El\'Jonson is the Primarch of the Dark Angels Legion, renowned for strategic brilliance rivaling only Horus. After vanishing for ten thousand years following Caliban\'s destruction, he has recently returned to aid the Imperium in its darkest hour.'
    },
    'sanguinius': {
        name: 'Sanguinius',
        image: 'images/character-sanguinius.jpg',
        legion: 'Blood Angels',
        role: 'Primarch, The Great Angel',
        bio: 'Sanguinius was the Primarch of the Blood Angels Space Marine Legion and one of the most revered figures in the Imperium. Known as \'The Great Angel,\' he was celebrated for his nobility, martial prowess, and unwavering loyalty to the Emperor, ultimately sacrificing himself during the Horus Heresy to enable Horus\'s defeat.'
    },
    'leman-russ': {
        name: 'Leman Russ',
        image: 'images/character-leman-russ.jpg',
        legion: 'Space Wolves',
        role: 'Primarch, The Wolf King',
        bio: 'Leman Russ is the Primarch of the Space Wolves Legion and one of the Emperor\'s most formidable warriors. Raised on the ice world Fenris among wolves before joining the Great Crusade, he served as the Emperor\'s executioner and enforcer. After the Horus Heresy, he mysteriously departed into the Eye of Terror, with his ultimate fate remaining unknown to the Imperium.'
    },
    'rogal-dorn': {
        name: 'Rogal Dorn',
        image: 'images/character-rogal-dorn.jpg',
        legion: 'Imperial Fists',
        role: 'Primarch, Praetorian of Terra',
        bio: 'Rogal Dorn was the Primarch of the Imperial Fists Space Marine Legion and a principal architect of the Imperium\'s defense during the Horus Heresy. \'The Praetorian of Terra\' orchestrated the loyal forces\' resistance and ultimately orchestrated the defense of the Throneworld during the Siege of Terra. His fate after the Heresy remains ambiguous, though he is presumed dead.'
    },
    'ferrus-manus': {
        name: 'Ferrus Manus',
        image: 'images/character-ferrus-manus.jpg',
        legion: 'Iron Hands',
        role: 'Primarch, The Gorgon',
        bio: 'Ferrus Manus was one of the twenty Primarchs created by the Emperor, leading the Iron Hands Space Marine Legion. During the Great Crusade, he earned the nickname \'the Gorgon\' and became known for his doctrine of ruthless pragmatism. He was ultimately killed by his former brother Fulgrim during the Horus Heresy at Isstvan V.'
    },
    'fulgrim': {
        name: 'Fulgrim',
        image: 'images/character-fulgrim.jpg',
        legion: 'Emperor\'s Children',
        role: 'Primarch, The Phoenician, Daemon Prince of Slaanesh',
        bio: 'Fulgrim, the Primarch of the Emperor\'s Children, was consumed by his obsession with perfection and corruption by the daemon weapon Silver Blade of Laer. Once a visionary leader who sought to restore civilization and art to his homeworld of Chemos, he became a Daemon Prince of Slaanesh, representing the fall from imperial duty to chaotic indulgence.'
    },
    'perturabo': {
        name: 'Perturabo',
        image: 'images/character-perturabo.jpg',
        legion: 'Iron Warriors',
        role: 'Primarch, Daemon Prince of Chaos Undivided',
        bio: 'Perturabo is the Primarch of the Iron Warriors who became embittered by marginalization within the Imperium. He sided with Horus during the Heresy and ascended to Daemonhood, establishing himself as a master of siege warfare and a wielder of forbidden technology.'
    },
    'angron': {
        name: 'Angron',
        image: 'images/character-angron.jpg',
        legion: 'World Eaters',
        role: 'Primarch, The Red Angel, Daemon Prince of Khorne',
        bio: 'Angron is the Primarch of the World Eaters legion who was raised as a gladiator slave on Nuceria with neural implants called the Butcher\'s Nails. He fell to Chaos during the Horus Heresy and became a Daemon Prince devoted to Khorne, transforming into an avatar of uncontrolled rage and bloodlust.'
    },
    'mortarion': {
        name: 'Mortarion',
        image: 'images/character-mortarion.jpg',
        legion: 'Death Guard',
        role: 'Primarch, The Death Lord, Daemon Prince of Nurgle',
        bio: 'Mortarion was one of the original twenty Primarchs who commanded the Death Guard Legion. He turned to Chaos during the Horus Heresy and became a Daemon Prince of Nurgle, ruling the Plague Planet as a toxic death world.'
    },
    'magnus-the-red': {
        name: 'Magnus the Red',
        image: 'images/character-magnus-the-red.jpg',
        legion: 'Thousand Sons',
        role: 'Primarch, Daemon Prince of Tzeentch',
        bio: 'Magnus the Red is the Primarch of the Thousand Sons who became a daemon prince of Tzeentch. Once a powerful psyker serving the Imperium, he fell to Chaos after attempting to warn the Emperor about Horus\'s betrayal, inadvertently sabotaging the Emperor\'s secret Webway Project.'
    },
    'lorgar-aurelian': {
        name: 'Lorgar Aurelian',
        image: 'images/character-lorgar-aurelian.jpg',
        legion: 'Word Bearers',
        role: 'Primarch, The Urizen, Daemon Prince of Chaos Undivided',
        bio: 'Lorgar Aurelian, the Primarch of the Word Bearers Legion, was fiercely religious and prone to fanaticism in his quest for existential meaning. He became the first primarch seduced by Chaos after the Emperor destroyed his perfect city of Monarchia, eventually orchestrating the Horus Heresy and ascending to daemonhood as a Daemon Prince.'
    },
    'konrad-curze': {
        name: 'Konrad Curze',
        image: 'images/character-konrad-curze.jpg',
        legion: 'Night Lords',
        role: 'Primarch, The Night Haunter',
        bio: 'Konrad Curze, known as the Night Haunter, was one of twenty Primarchs created by the Emperor. Raised on the dark world of Nostramo and tormented by prophetic visions, he became one of the most brutal and unstable Primarchs before ultimately betraying the Emperor and joining Horus during the Horus Heresy.'
    },
    'corvus-corax': {
        name: 'Corvus Corax',
        image: 'images/character-corvus-corax.jpg',
        legion: 'Raven Guard',
        role: 'Primarch, The Ravenlord',
        bio: 'Corvus Corax is the Primarch of the Raven Guard Space Marine Legion. Raised among enslaved workers on Lycaeus, he became a master of guerrilla warfare and liberation before being appointed by the Emperor. He remained loyal during the Horus Heresy despite catastrophic losses, eventually disappearing into the Eye of Terror.'
    },
    'jaghatai-khan': {
        name: 'Jaghatai Khan',
        image: 'images/character-jaghatai-khan.jpg',
        legion: 'White Scars',
        role: 'Primarch, The Great Khan',
        bio: 'Jaghatai Khan was the Primarch of the White Scars Space Marine Legion, known for his fierce warrior nature and rapid, mobile tactics. Rising from humble origins on the steppe world of Chogoris, he united warring tribes before pledging himself to the Emperor during the Great Crusade. He remained steadfastly loyal throughout the Horus Heresy, ultimately defeating the traitor Primarch Mortarion during the Siege of Terra.'
    },
    'vulkan': {
        name: 'Vulkan',
        image: 'images/character-vulkan.jpg',
        legion: 'Salamanders',
        role: 'Primarch, The Lord of Drakes',
        bio: 'One of twenty Primarchs created by the Emperor of Mankind, Vulkan led the Salamanders Legion and inherited the unique ability to regenerate from any injury, making him essentially immortal. Renowned for his craftsmanship and empathy toward humanity, he survived torture during the Horus Heresy and played a crucial role defending Terra before mysteriously departing.'
    },
    'alpharius-omegon': {
        name: 'Alpharius Omegon',
        image: 'images/character-alpharius-omegon.jpg',
        legion: 'Alpha Legion',
        role: 'Primarch, The Last Primarch',
        bio: 'Alpharius Omegon were twin Primarchs of the Alpha Legion, known as \'The Last Primarch\' or \'Lord of the Serpents.\' They described themselves as one soul inhabiting two bodies and became famous for their mastery of deception, espionage, and unconventional warfare tactics during the Great Crusade and Horus Heresy.'
    },
    'garviel-loken': {
        name: 'Garviel Loken',
        image: 'images/character-garviel-loken.jpg',
        legion: 'Luna Wolves / Sons of Horus',
        role: 'Captain, Member of the Mournival',
        bio: 'Garviel Loken was a Space Marine Captain of the Luna Wolves who became a member of the Mournival, the advisory council to Warmaster Horus. He witnessed firsthand the corruption of his legion and remained loyal to the Emperor throughout the Horus Heresy, eventually confronting his former primarch during the Siege of Terra.'
    },
    'nathaniel-garro': {
        name: 'Nathaniel Garro',
        image: 'images/character-nathaniel-garro.jpg',
        legion: 'Death Guard',
        role: 'Battle-Captain, Agentia Primus of the Knights-Errant',
        bio: 'A loyalist Space Marine Captain from the Death Guard Legion who remained faithful to the Emperor during the Horus Heresy. Garro commanded the frigate Eisenstein and successfully escaped the Isstvan system to warn Terra of the betrayal. He later became the first true martyr of the Imperial Creed.'
    },
    'ezekyle-abaddon': {
        name: 'Ezekyle Abaddon',
        image: 'images/character-ezekyle-abaddon.jpg',
        legion: 'Sons of Horus / Black Legion',
        role: 'First Captain, Warmaster of Chaos',
        bio: 'Ezekyle Abaddon is the Warmaster of Chaos and master of the Black Legion, serving as the successor to Horus Lupercal. Once the First Captain of the Sons of Horus during the Great Crusade, he became a central figure in the Horus Heresy before abandoning the legion to wander the Eye of Terror. He now leads devastating Black Crusades against the Imperium with the goal of expanding the Eye of Terror to consume Terra itself.'
    },
    'erebus': {
        name: 'Erebus',
        image: 'images/character-erebus.jpg',
        legion: 'Word Bearers',
        role: 'First Chaplain, The Hand of Destiny',
        bio: 'Erebus served as First Chaplain of the Word Bearers and orchestrated the corruption of both Lorgar and Horus to Chaos. The harbinger of the Horus Heresy, instrumental in converting first Lorgar and then Horus to Chaos, he remains a powerful sorcerer and skilled warrior who continues influencing events across the galaxy.'
    },
    'kharn': {
        name: 'Kharn',
        image: 'images/character-kharn.jpg',
        legion: 'World Eaters',
        role: 'Captain, The Betrayer',
        bio: 'Kharn, known as \'the Betrayer,\' is a Chaos Space Marine champion of Khorne and the greatest of all Khorne\'s champions. Once a loyal captain of the World Eaters Legion, he became a daemonic instrument of slaughter after the Horus Heresy, embodying the god\'s indiscriminate rage and bloodlust.'
    },
    'ahriman': {
        name: 'Ahriman',
        image: 'images/character-ahriman.jpg',
        legion: 'Thousand Sons',
        role: 'Chief Librarian, Sorcerer Lord',
        bio: 'Ahzek Ahriman is the greatest sorcerer of the Thousand Sons and a master of chaos psychic powers. Once the Chief Librarian and First Captain of his legion, he is now a wanderer cursed to eternally seek understanding of Tzeentch, his patron chaos god.'
    },
    'tarik-torgaddon': {
        name: 'Tarik Torgaddon',
        image: 'images/character-tarik-torgaddon.jpg',
        legion: 'Luna Wolves',
        role: 'Captain, Member of the Mournival',
        bio: 'Captain of the Luna Wolves 2nd Company and member of the Mournival council advising Primarch Horus. Known for his joking demeanor combined with exceptional martial skill, he remained loyal to the Emperor during the Horus Heresy and died fighting traitor forces at Isstvan III.'
    },
    'saul-tarvitz': {
        name: 'Saul Tarvitz',
        image: 'images/character-saul-tarvitz.jpg',
        legion: 'Emperor\'s Children',
        role: 'Captain of the 10th Company',
        bio: 'Saul Tarvitz was a Space Marine Captain of the Emperor\'s Children during the Great Crusade who became a symbol of loyalty during the Horus Heresy. Despite serving a Legion that fell to Chaos, he remained devoted to the Imperium and orchestrated a successful defense at Isstvan III against overwhelming traitor forces before his death.'
    },
    'argel-tal': {
        name: 'Argel Tal',
        image: 'images/character-argel-tal.jpg',
        legion: 'Word Bearers',
        role: 'Captain, Crimson Lord of the Gal Vorbak',
        bio: 'Argel Tal was a Colchisian-born Space Marine who rose to become Captain of the Word Bearers\' 7th Assault Company and later the Crimson Lord of the Gal Vorbak, an elite cadre of daemon-possessed warriors. Initially loyal to the Imperium, he became one of Lorgar\'s most favored sons before his tragic death during the Shadow Crusade, murdered by Erebus to prevent him from tempering Kharn\'s fall to Chaos.'
    },
    'kor-phaeron': {
        name: 'Kor Phaeron',
        image: 'images/character-kor-phaeron.jpg',
        legion: 'Word Bearers',
        role: 'First Captain, The Black Cardinal',
        bio: 'Kor Phaeron was Lorgar\'s foster father and spiritual mentor on Colchis who became First Captain of the Word Bearers Legion. Along with Erebus, he was instrumental in corrupting the entire legion to Chaos, making him one of the first Astartes to fall to the dark powers during the Horus Heresy.'
    },
    'malcador-the-sigillite': {
        name: 'Malcador the Sigillite',
        image: 'images/character-malcador-the-sigillite.jpg',
        legion: 'Imperium of Man',
        role: 'First Lord of Terra, Grand Master of Assassins',
        bio: 'Malcador served as First Lord of Terra and the most powerful human psyker after the Emperor himself. A mysterious immortal figure, he was instrumental in founding the Administratum and orchestrated the creation of the Grey Knights during the Horus Heresy.'
    },
    'lucius': {
        name: 'Lucius the Eternal',
        image: 'images/character-lucius.jpg',
        legion: 'Emperor\'s Children',
        role: 'Captain, Champion of Slaanesh',
        bio: 'Lucius is a legendary Champion of Slaanesh and former Captain of the Emperor\'s Children during the Horus Heresy. After his first death in gladiatorial combat brought him transcendent pleasure, Slaanesh resurrected him with a curse: whenever his killer experiences satisfaction from victory, they transform into him, their essence absorbed into his armor.'
    },
    'typhus': {
        name: 'Typhus',
        image: 'images/character-typhus.jpg',
        legion: 'Death Guard',
        role: 'First Captain, Herald of Nurgle',
        bio: 'Originally named Calas Typhon, a human-Overlord hybrid from Barbarus who became First Captain of the Death Guard Legion. During the Horus Heresy, he was merged with the daemon Ignatius Grulgor and transformed into Typhus, Herald of Nurgle, becoming a powerful Chaos Space Marine dedicated to spreading plague across the galaxy.'
    },
    'sigismund': {
        name: 'Sigismund',
        image: 'images/character-sigismund.jpg',
        legion: 'Imperial Fists',
        role: 'First Captain, Emperor\'s Champion',
        bio: 'Sigismund served as First Captain of the Imperial Fists Legion during the Great Crusade and Horus Heresy. He became the Emperor\'s Champion defending Terra during the Siege and subsequently founded the Black Templars Chapter, serving as its first High Marshal for over 10,000 years.'
    },
    'luther': {
        name: 'Luther',
        image: 'images/character-placeholder.svg',
        legion: 'Dark Angels',
        role: 'Master of Caliban',
        bio: 'Luther was Lion El\'Jonson\'s mentor and friend on Caliban who led the knightly orders. Left behind to govern Caliban while the Lion led the Crusade, his growing resentment led him to rebellion.'
    },
    'cypher': {
        name: 'Cypher',
        image: 'images/character-placeholder.svg',
        legion: 'Fallen Angels',
        role: 'Lord Cypher',
        bio: 'The mysterious Lord Cypher is a title held by members of the Fallen Dark Angels. Bearer of the Lion Sword and the Bolt Pistol, his true allegiance remains unknown.'
    },
    'nemiel': {
        name: 'Nemiel',
        image: 'images/character-placeholder.svg',
        legion: 'Dark Angels',
        role: 'Redemptor',
        bio: 'Nemiel was a Redemptor (Chaplain) of the Dark Angels and cousin to Zahariel. His rigid adherence to the Emperor\'s edicts brought him into conflict with his Legion.'
    },
    'zahariel': {
        name: 'Zahariel',
        image: 'images/character-placeholder.svg',
        legion: 'Dark Angels / Fallen',
        role: 'Librarian, Lord Cypher',
        bio: 'Zahariel El\'Zurias was a powerful Librarian of the Dark Angels from Caliban. His journey led him to side with Luther during the Fall of Caliban.'
    },
    'zahariel-el-zurias': {
        name: 'Zahariel El Zurias',
        image: 'images/character-placeholder.svg',
        legion: 'Dark Angels / Fallen',
        role: 'Librarian, Lord Cypher',
        bio: 'Zahariel El\'Zurias was a powerful Librarian of the Dark Angels from Caliban. His journey led him to side with Luther during the Fall of Caliban.'
    },
    'bjorn': {
        name: 'Bjorn',
        image: 'images/character-placeholder.svg',
        legion: 'Space Wolves',
        role: 'Wolf Guard',
        bio: 'Bjorn served under Leman Russ during the Heresy. He would become the oldest living Space Marine, entombed in a Dreadnought for over ten millennia.'
    },
    'bjorn-fell-handed': {
        name: 'Bjorn Fell-Handed',
        image: 'images/character-placeholder.svg',
        legion: 'Space Wolves',
        role: 'Wolf Guard',
        bio: 'Bjorn served under Leman Russ during the Heresy. He would become the oldest living Space Marine, entombed in a Dreadnought for over ten millennia.'
    },
    'fabius-bile': {
        name: 'Fabius Bile',
        image: 'images/character-placeholder.svg',
        legion: 'Emperor\'s Children',
        role: 'Chief Apothecary',
        bio: 'Fabius Bile served as Chief Apothecary of the Emperor\'s Children. His twisted genetic experiments earned him the title Primogenitor.'
    },
    'maloghurst': {
        name: 'Maloghurst',
        image: 'images/character-placeholder.svg',
        legion: 'Sons of Horus',
        role: 'Equerry to Horus',
        bio: 'Maloghurst the Twisted served as Horus\'s equerry and most trusted advisor, remaining loyal through the Warmaster\'s fall to Chaos.'
    },
    'raldoron': {
        name: 'Raldoron',
        image: 'images/character-placeholder.svg',
        legion: 'Blood Angels',
        role: 'First Captain',
        bio: 'Raldoron was First Captain of the Blood Angels, one of Sanguinius\'s most trusted warriors throughout the Great Crusade and Heresy.'
    },
    'meros': {
        name: 'Meros',
        image: 'images/character-placeholder.svg',
        legion: 'Blood Angels',
        role: 'Captain',
        bio: 'Meros was a Blood Angels captain who played a crucial role at Signus Prime, making the ultimate sacrifice to save his Legion.'
    },
    'marius-gage': {
        name: 'Marius Gage',
        image: 'images/character-placeholder.svg',
        legion: 'Ultramarines',
        role: 'Chapter Master',
        bio: 'Marius Gage served as Guilliman\'s First Captain and later Chapter Master, holding the Ultramarines together through the Battle of Calth.'
    },
    'remus-ventanus': {
        name: 'Remus Ventanus',
        image: 'images/character-placeholder.svg',
        legion: 'Ultramarines',
        role: 'Captain',
        bio: 'Remus Ventanus, captain of the 4th Company, proved instrumental during the Battle of Calth with his tactical brilliance and leadership.'
    },
    'forrix': {
        name: 'Forrix',
        image: 'images/character-placeholder.svg',
        legion: 'Iron Warriors',
        role: 'Warsmith, Triarch',
        bio: 'Forrix the Breaker was one of Perturabo\'s Triarchs and the Legion\'s oldest warrior, serving as a voice of brutal pragmatism.'
    },
    'kroeger': {
        name: 'Kroeger',
        image: 'images/character-placeholder.svg',
        legion: 'Iron Warriors',
        role: 'Warsmith',
        bio: 'Kroeger was a Warsmith known for his vicious nature and skill in siege warfare, leading assaults throughout the Heresy.'
    },
    'numeon': {
        name: 'Numeon',
        image: 'images/character-placeholder.svg',
        legion: 'Salamanders',
        role: 'Captain',
        bio: 'Artellus Numeon was captain of the Salamanders who led the desperate quest to recover and restore Vulkan.'
    },
    'artellus-numeon': {
        name: 'Artellus Numeon',
        image: 'images/character-placeholder.svg',
        legion: 'Salamanders',
        role: 'Captain',
        bio: 'Artellus Numeon was captain of the Salamanders who led the desperate quest to recover and restore Vulkan.'
    },
    'the-emperor': {
        name: 'The Emperor',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Emperor of Mankind',
        bio: 'The Emperor is the immortal ruler and founder of the Imperium, a godlike being of immense psychic power who led humanity through the Great Crusade.'
    },
    'john-grammaticus': {
        name: 'John Grammaticus',
        image: 'images/character-placeholder.svg',
        legion: 'Cabal / Perpetual',
        role: 'Agent, Perpetual',
        bio: 'John Grammaticus is a Perpetual blessed with the ability to understand any language. He served the Cabal before defecting during the Heresy.'
    },
    'julius-kaesoron': {
        name: 'Julius Kaesoron',
        image: 'images/character-placeholder.svg',
        legion: 'Emperor\'s Children',
        role: 'First Captain',
        bio: 'Julius Kaesoron was First Captain of the Emperor\'s Children, eventually falling to Slaanesh and ascending to daemon prince.'
    },
    'ignatius-grulgor': {
        name: 'Ignatius Grulgor',
        image: 'images/character-placeholder.svg',
        legion: 'Death Guard',
        role: 'Captain',
        bio: 'Ignatius Grulgor was Captain of the Death Guard 2nd Company, killed and resurrected by Nurgle as a daemon prince.'
    },
    'voyen': {
        name: 'Voyen',
        image: 'images/character-placeholder.svg',
        legion: 'Death Guard',
        role: 'Battle-Brother',
        bio: 'Voyen was a loyal Death Guard who helped Garro escape the Isstvan betrayal and warn Terra.'
    },
    'tarasha-euten': {
        name: 'Tarasha Euten',
        image: 'images/character-placeholder.svg',
        legion: 'Ultramar',
        role: 'Chamberlain Principal',
        bio: 'Tarasha Euten served as Roboute Guilliman\'s adoptive mother and Chamberlain Principal of Macragge.'
    },
    'azkaellon': {
        name: 'Azkaellon',
        image: 'images/character-placeholder.svg',
        legion: 'Blood Angels',
        role: 'Commander of Sanguinary Guard',
        bio: 'Azkaellon commanded the Sanguinary Guard, Sanguinius\'s elite bodyguard, serving with unwavering devotion.'
    },
    'agatone': {
        name: 'Agatone',
        image: 'images/character-placeholder.svg',
        legion: 'Salamanders',
        role: 'Firedrake',
        bio: 'Agatone was a member of the elite Firedrakes who accompanied Numeon on the quest to recover Vulkan.'
    },
    'branne-nev': {
        name: 'Branne Nev',
        image: 'images/character-placeholder.svg',
        legion: 'Raven Guard',
        role: 'Commander',
        bio: 'Branne Nev was a Raven Guard commander who survived the Dropsite Massacre and helped rebuild the Legion.'
    },
    'nykona-sharrowkyn': {
        name: 'Nykona Sharrowkyn',
        image: 'images/character-placeholder.svg',
        legion: 'Raven Guard',
        role: 'Veteran Sergeant',
        bio: 'Nykona Sharrowkyn was one of the Raven Guard\'s deadliest warriors, a master marksman who famously wounded Fulgrim.'
    },
    'archamus': {
        name: 'Archamus',
        image: 'images/character-placeholder.svg',
        legion: 'Imperial Fists',
        role: 'Master of Huscarls',
        bio: 'Archamus served as Master of the Huscarls, Rogal Dorn\'s elite guard and most trusted advisor.'
    },
    'armillus-dynat': {
        name: 'Armillus Dynat',
        image: 'images/character-placeholder.svg',
        legion: 'Alpha Legion',
        role: 'Harrowmaster',
        bio: 'Armillus Dynat was a Harrowmaster leading covert Alpha Legion operations with typical deception and misdirection.'
    },
    'shiban-khan': {
        name: 'Shiban Khan',
        image: 'images/character-placeholder.svg',
        legion: 'White Scars',
        role: 'Captain',
        bio: 'Shiban Khan was one of the White Scars\' most aggressive captains, playing a key role in the Legion\'s choice to remain loyal.'
    },
    'torghun-khan': {
        name: 'Torghun Khan',
        image: 'images/character-placeholder.svg',
        legion: 'White Scars',
        role: 'Captain',
        bio: 'Torghun Khan briefly sided with Horus before returning to loyalty, reflecting the White Scars\' internal conflict.'
    },
    'kasper-hawser': {
        name: 'Kasper Hawser',
        image: 'images/character-placeholder.svg',
        legion: 'Imperial Army',
        role: 'Skjald',
        bio: 'Kasper Hawser was a remembrancer whose unique perspective provided insight into the Space Wolves and the Prospero campaign.'
    },
    'lemuel-gaumon': {
        name: 'Lemuel Gaumon',
        image: 'images/character-placeholder.svg',
        legion: 'Thousand Sons',
        role: 'Remembrancer',
        bio: 'Lemuel Gaumon was a remembrancer who witnessed Magnus\'s hubris and Prospero\'s tragic fall.'
    },
    'ignace-karkasy': {
        name: 'Ignace Karkasy',
        image: 'images/character-placeholder.svg',
        legion: 'Sons of Horus',
        role: 'Poet',
        bio: 'Ignace Karkasy was a poet-remembrancer whose artistic soul recognized the corruption spreading through the Sons of Horus.'
    },
    'petronella-vivar': {
        name: 'Petronella Vivar',
        image: 'images/character-placeholder.svg',
        legion: 'Sons of Horus',
        role: 'Remembrancer',
        bio: 'Petronella Vivar documented Horus\'s achievements and witnessed the Warmaster\'s transformation firsthand.'
    },
    'kai-zulane': {
        name: 'Kai Zulane',
        image: 'images/character-placeholder.svg',
        legion: 'Adeptus Astra Telepathica',
        role: 'Astropath',
        bio: 'Kai Zulane received prophetic visions about the Heresy and became hunted across Terra for his dangerous knowledge.'
    },
    'cyrene-valantion': {
        name: 'Cyrene Valantion',
        image: 'images/character-placeholder.svg',
        legion: 'Word Bearers',
        role: 'Blessed Lady',
        bio: 'Cyrene Valantion became the Blessed Lady of the Word Bearers after being blinded by the Emperor\'s psychic assault.'
    },
    'dalia-cythera': {
        name: 'Dalia Cythera',
        image: 'images/character-placeholder.svg',
        legion: 'Mechanicum',
        role: 'Adept',
        bio: 'Dalia Cythera was a Mechanicum adept with empathic abilities who became linked to the Dragon of Mars.'
    },
    'kelbor-hal': {
        name: 'Kelbor-Hal',
        image: 'images/character-placeholder.svg',
        legion: 'Dark Mechanicum',
        role: 'Fabricator General',
        bio: 'Kelbor-Hal betrayed Mars to Horus, his ambition and thirst for forbidden knowledge dooming the Red Planet to civil war.'
    },
    'barabas-dantioch': {
        name: 'Barabas Dantioch',
        image: 'images/character-placeholder.svg',
        legion: 'Iron Warriors',
        role: 'Warsmith',
        bio: 'Barabas Dantioch remained loyal despite his Legion\'s treachery, defending the Pharos beacon alongside the Ultramarines.'
    },
    'alexis-polux': {
        name: 'Alexis Polux',
        image: 'images/character-placeholder.svg',
        legion: 'Imperial Fists',
        role: 'Captain',
        bio: 'Alexis Polux served with distinction at Phall and Sotha, later becoming Chapter Master of the Crimson Fists.'
    },
    'ilya-ravallion': {
        name: 'Ilya Ravallion',
        image: 'images/character-placeholder.svg',
        legion: 'White Scars',
        role: 'Szu',
        bio: 'Ilya Ravallion was a logistical officer whose photographic memory and counsel proved invaluable to Jaghatai Khan.'
    },
    'yesugei': {
        name: 'Yesugei',
        image: 'images/character-placeholder.svg',
        legion: 'White Scars',
        role: 'Stormseer',
        bio: 'Yesugei was chief Stormseer of the White Scars, master of their psychic traditions and spiritual guide.'
    },
    'eldrad-ulthran': {
        name: 'Eldrad Ulthran',
        image: 'images/character-placeholder.svg',
        legion: 'Craftworld Ulthwé',
        role: 'Farseer',
        bio: 'Eldrad Ulthran, ancient Farseer of Ulthwé, manipulated events from the shadows even during humanity\'s civil war.'
    },
    'ra-endymion': {
        name: 'Ra Endymion',
        image: 'images/character-placeholder.svg',
        legion: 'Legio Custodes',
        role: 'Tribune',
        bio: 'Ra Endymion was a Custodian Tribune who fought in the Webway War at the Emperor\'s side.'
    },
    'diocletian-coros': {
        name: 'Diocletian Coros',
        image: 'images/character-placeholder.svg',
        legion: 'Legio Custodes',
        role: 'Tribune',
        bio: 'Diocletian Coros led Custodians in the desperate Webway War beneath the Imperial Palace.'
    },
    'arkhan-land': {
        name: 'Arkhan Land',
        image: 'images/character-placeholder.svg',
        legion: 'Mechanicum',
        role: 'Technoarchaeologist',
        bio: 'Arkhan Land was a brilliant technoarchaeologist whose rediscovered technologies bore his name for millennia.'
    },
    'zephon': {
        name: 'Zephon',
        image: 'images/character-placeholder.svg',
        legion: 'Blood Angels',
        role: 'Dominion',
        bio: 'Zephon overcame severe injuries with Arkhan Land\'s help, fighting in both the Webway War and Siege of Terra.'
    },
    'ollanius-pius': {
        name: 'Ollanius Pius',
        image: 'images/character-placeholder.svg',
        legion: 'Imperial Army',
        role: 'Perpetual',
        bio: 'Ollanius Pius was a Perpetual whose final stand before the Emperor became one of the Heresy\'s most legendary moments.'
    },
    'amendera-kendel': {
        name: 'Amendera Kendel',
        image: 'images/character-placeholder.svg',
        legion: 'Sisters of Silence',
        role: 'Oblivion Knight',
        bio: 'Amendera Kendel joined Malcador\'s Knights-Errant, hunting traitors with the Sisters of Silence.'
    },
    'tylos-rubio': {
        name: 'Tylos Rubio',
        image: 'images/character-placeholder.svg',
        legion: 'Ultramarines',
        role: 'Librarian',
        bio: 'Tylos Rubio was an Ultramarines Librarian whose psychic gifts proved vital in the Knights-Errant.'
    },
    'kabandha': {
        name: 'Ka\'Bandha',
        image: 'images/character-placeholder.svg',
        legion: 'Khorne',
        role: 'Bloodthirster',
        bio: 'Ka\'Bandha is an Exalted Bloodthirster who became the Blood Angels\' eternal nemesis after Signus Prime.'
    },
    'aun-helwintr': {
        name: 'Aun Helwintr',
        image: 'images/character-placeholder.svg',
        legion: 'Space Wolves',
        role: 'Priest',
        bio: 'Aun Helwintr served the Space Wolves as one of their priests during the Great Crusade and Heresy.'
    },
    'adept-zeth': {
        name: 'Adept Zeth',
        image: 'images/character-placeholder.svg',
        legion: 'Mechanicum',
        role: 'Adept',
        bio: 'Koriel Zeth was a Mechanicum adept who championed progress and innovation during Mars\' civil war.'
    },
    'amon': {
        name: 'Amon',
        image: 'images/character-placeholder.svg',
        legion: 'Thousand Sons',
        role: 'Captain',
        bio: 'Amon was a captain of the Thousand Sons who served under Ahriman through Prospero and beyond.'
    },
    'ignis': {
        name: 'Ignis',
        image: 'images/character-placeholder.svg',
        legion: 'Thousand Sons',
        role: 'Master of Ruin',
        bio: 'Ignis was a Thousand Sons sorcerer and member of the Cabal, using numerology to analyze battlefields.'
    },
    'calliphone': {
        name: 'Calliphone',
        image: 'images/character-placeholder.svg',
        legion: 'Olympia',
        role: 'Sister of Perturabo',
        bio: 'Calliphone was Perturabo\'s beloved adoptive sister on Olympia, one of the few who understood the Primarch\'s tormented soul.'
    },
    'agapito': {
        name: 'Agapito',
        image: 'images/character-placeholder.svg',
        legion: 'Raven Guard',
        role: 'Commander',
        bio: 'Agapito was a Raven Guard commander who served Corvus Corax through the Legion\'s darkest hours.'
    },
    'navar-hef': {
        name: 'Navar Hef',
        image: 'images/character-placeholder.svg',
        legion: 'Raven Guard',
        role: 'Commander',
        bio: 'Navar Hef was a veteran commander of the Raven Guard who fought alongside Corax.'
    },
    'atticus': {
        name: 'Atticus',
        image: 'images/character-placeholder.svg',
        legion: 'Iron Hands',
        role: 'Clan Commander',
        bio: 'Atticus was an Iron Hands commander consumed by rage after Ferrus Manus\'s death.'
    },
    'galba': {
        name: 'Galba',
        image: 'images/character-placeholder.svg',
        legion: 'Raven Guard',
        role: 'Captain',
        bio: 'Galba was a Raven Guard captain among the survivors who sought refuge on Pythos.'
    },
    'cassian-dracos': {
        name: 'Cassian Dracos',
        image: 'images/character-placeholder.svg',
        legion: 'Salamanders',
        role: 'Chaplain',
        bio: 'Cassian Dracos was a Salamanders Chaplain who fought on Pythos against daemonic corruption.'
    },
    'kaspian-heletine': {
        name: 'Kaspian Heletine',
        image: 'images/character-placeholder.svg',
        legion: 'Salamanders',
        role: 'Apothecary',
        bio: 'Kaspian Heletine served as a Salamanders Apothecary during the quest to recover Vulkan.'
    },
    'spear': {
        name: 'Spear',
        image: 'images/character-placeholder.svg',
        legion: 'Officio Assassinorum',
        role: 'Execution Force Leader',
        bio: 'Spear led the Execution Force assembled to assassinate Horus, commanding operatives from multiple Clades.'
    },
    'koyne': {
        name: 'Koyne',
        image: 'images/character-placeholder.svg',
        legion: 'Officio Assassinorum',
        role: 'Garantine',
        bio: 'Koyne was a member of the rare Garantine Clade, part of the assassination attempt on the Warmaster.'
    },
    'jenniker-soneka': {
        name: 'Jenniker Soneka',
        image: 'images/character-placeholder.svg',
        legion: 'Imperial Army',
        role: 'Geno Five-Two Chiliad',
        bio: 'Jenniker Soneka commanded elements of the Geno Five-Two Chiliad alongside the Alpha Legion.'
    },
    'alivia-sureka': {
        name: 'Alivia Sureka',
        image: 'images/character-placeholder.svg',
        legion: 'Perpetual',
        role: 'Guardian',
        bio: 'Alivia Sureka was a Perpetual who guarded secrets on Molech, ultimately aiding in the defense against Horus.'
    },
    'bromzi': {
        name: 'Bromzi',
        image: 'images/character-placeholder.svg',
        legion: 'Alpha Legion',
        role: 'Operative',
        bio: 'Bronzi was an Alpha Legion operative involved in their covert operations during the Great Crusade.'
    },
    'peto': {
        name: 'Peto',
        image: 'images/character-placeholder.svg',
        legion: 'Alpha Legion',
        role: 'Operative',
        bio: 'Peto was an Alpha Legion warrior participating in the XX Legion\'s mysterious activities.'
    },
    'wyrdmake': {
        name: 'Wyrdmake',
        image: 'images/character-placeholder.svg',
        legion: 'Space Wolves',
        role: 'Rune Priest',
        bio: 'Wyrdmake was a Rune Priest of the Space Wolves who served in the campaign against Prospero.'
    },
    'cestus': {
        name: 'Cestus',
        image: 'images/character-placeholder.svg',
        legion: 'Ultramarines',
        role: 'Captain',
        bio: 'Cestus was an Ultramarines captain who led the pursuit of the Furious Abyss to prevent Macragge\'s destruction.'
    },
    'skraal': {
        name: 'Skraal',
        image: 'images/character-placeholder.svg',
        legion: 'World Eaters',
        role: 'Warrior',
        bio: 'Skraal was a World Eater who remained loyal to the Emperor, joining the hunt for the Furious Abyss.'
    },
    'brynngar': {
        name: 'Brynngar',
        image: 'images/character-placeholder.svg',
        legion: 'Space Wolves',
        role: 'Wolf Guard',
        bio: 'Brynngar was a Space Wolves Wolf Guard who joined the mission to stop the Furious Abyss.'
    },
    'mhotep': {
        name: 'Mhotep',
        image: 'images/character-placeholder.svg',
        legion: 'Thousand Sons',
        role: 'Sergeant',
        bio: 'Mhotep was a Thousand Sons warrior who aided loyalist forces in stopping the Word Bearers\' super-weapon.'
    },
    'severian': {
        name: 'Severian',
        image: 'images/character-placeholder.svg',
        legion: 'World Eaters',
        role: 'Captain',
        bio: 'Severian was a World Eaters captain imprisoned on Terra who became one of the Outcast Dead.'
    },
    'atharva': {
        name: 'Atharva',
        image: 'images/character-placeholder.svg',
        legion: 'Thousand Sons',
        role: 'Librarian',
        bio: 'Atharva was a Thousand Sons Librarian imprisoned on Terra, one of the Outcast Dead who escaped.'
    },
    'tagore': {
        name: 'Tagore',
        image: 'images/character-placeholder.svg',
        legion: 'World Eaters',
        role: 'Apothecary',
        bio: 'Tagore was a World Eaters Apothecary among the Outcast Dead fleeing through Terra\'s underhive.'
    },
    'zenobi': {
        name: 'Zenobi',
        image: 'images/character-placeholder.svg',
        legion: 'Terran Civilian',
        role: 'Citizen',
        bio: 'Zenobi was a civilian on Terra who experienced the horrors of the Siege as ordinary people were caught in the war.'
    },
    'warsmith-krendl': {
        name: 'Warsmith Krendl',
        image: 'images/character-placeholder.svg',
        legion: 'Night Lords',
        role: 'Warsmith',
        bio: 'Warsmith Krendl led the Night Lords assault on Sotha to destroy the Pharos beacon.'
    },
    'ahzek-ahriman': {
        name: 'Ahzek Ahriman',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Ahzek Ahriman participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'alpharius': {
        name: 'Alpharius',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Alpharius participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'bronzi': {
        name: 'Bronzi',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Bronzi participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'calas-typhon': {
        name: 'Calas Typhon',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Calas Typhon participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'ipluvien-maximal': {
        name: 'Ipluvien Maximal',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Ipluvien Maximal participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'khârn': {
        name: 'Khârn',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Khârn participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'lion-eljonson': {
        name: 'Lion El\'Jonson',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Lion El\'Jonson participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'lorgar': {
        name: 'Lorgar',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Lorgar participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'malcador': {
        name: 'Malcador',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Malcador participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'the-haunter': {
        name: 'The Haunter',
        image: 'images/character-placeholder.svg',
        legion: 'Unknown',
        role: 'Figure of the Heresy',
        bio: 'The Haunter participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'typhon': {
        name: 'Typhon',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Typhon participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    },
    'zahariel-elzurias': {
        name: 'Zahariel El\'Zurias',
        image: 'images/character-placeholder.svg',
        legion: 'Imperium of Man',
        role: 'Warrior of the Great Crusade',
        bio: 'Zahariel El\'Zurias participated in the events of the Horus Heresy. Full records are incomplete - lost to time or classified by Inquisitorial order.'
    }
};

// Reading Progress Tracker with three states: null, 'reading', 'finished'
const readingProgress = {
    load: function() {
        const saved = localStorage.getItem('horusHeresyProgress');
        if (saved) {
            const data = JSON.parse(saved);
            // Migrate old boolean format to new status format
            Object.keys(data).forEach(key => {
                if (typeof data[key] === 'boolean') {
                    data[key] = data[key] ? 'finished' : null;
                }
            });
            return data;
        }
        return {};
    },
    save: function(progress) {
        localStorage.setItem('horusHeresyProgress', JSON.stringify(progress));
    },
    setStatus: function(bookKey, status) {
        const progress = this.load();
        progress[bookKey] = status || null;
        this.save(progress);
        return progress[bookKey];
    },
    getStatus: function(bookKey) {
        const progress = this.load();
        return progress[bookKey] || null;
    },
    cycleStatus: function(bookKey) {
        const current = this.getStatus(bookKey);
        const cycle = {null: 'reading', 'reading': 'finished', 'finished': null};
        const newStatus = cycle[current];
        return this.setStatus(bookKey, newStatus);
    },
    getCount: function(status) {
        const progress = this.load();
        if (status) {
            return Object.values(progress).filter(v => v === status).length;
        }
        return Object.values(progress).filter(v => v).length;
    },
    getTotalBooks: function() {
        return Object.keys(bookData).length;
    }
};

const bookData = {
    'descent-of-angels': {
        number: 'VI',
        title: 'DESCENT OF ANGELS',
        author: 'Mitchel Scanlon',
        timeline: '820-970.M30',
        coverImage: 'images/descent-of-angels.jpg',
        legions: ['Dark Angels'],
        details: `
            <strong>Author:</strong> Mitchel Scanlon<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Primarch:</strong> Lion El'Jonson<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Luther, Zahariel El'Zurias, Nemiel<br>
            <strong>Timeline:</strong> Pre-Heresy, Early Great Crusade<br>
            <strong>Status:</strong> Origins of Knightly Order
        `,
        blurb: `The Dark Angels' homeworld of Caliban burns with conflict long before the Emperor's arrival. Noble orders of knights battle the great beasts that terrorize humanity, with young Lion El'Jonson emerging as the greatest warrior the world has ever known. When the Emperor finally finds his lost son, Caliban is transformed, but seeds of jealousy and resentment are planted that will split the Legion in twain.`,
        blurbSafe: `The Dark Angels' homeworld of Caliban is steeped in ancient knightly traditions and plagued by great beasts. Noble orders of knights defend humanity, with young Lion El'Jonson emerging as an exceptional warrior. When the Emperor arrives, Caliban is transformed—but the changes will test the bonds of brotherhood and loyalty.`
    },
    'the-first-heretic': {
        number: 'XIV',
        title: 'THE FIRST HERETIC',
        author: 'Aaron Dembski-Bowden',
        timeline: '956.M30',
        coverImage: 'images/the-first-heretic.jpg',
        legions: ['Word Bearers'],
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Primarch:</strong> Lorgar Aurelian<br>
            <strong>Main Characters:</strong> Lorgar, Argel Tal, Erebus, Kor Phaeron, Cyrene Valantion<br>
            <strong>Timeline:</strong> 956.M30 - Before the Heresy<br>
            <strong>Status:</strong> The First Fall
        `,
        blurb: `Lorgar and the Word Bearers are humiliated by the Emperor for worshipping him as a god. Crushed by his father's rebuke, Lorgar seeks meaning in the great pilgrimage to Cadia and the Eye of Terror. There, he finds gods who welcome worship—the Ruinous Powers of Chaos. This is the story of the Legion that fell first, spreading the seeds of corruption throughout the Imperium and orchestrating the Warmaster's fall.`,
        blurbSafe: `Lorgar and the Word Bearers face the Emperor's wrath for worshipping him as a god. Humiliated and seeking meaning beyond the Imperial Truth, Lorgar embarks on a pilgrimage into the Eye of Terror. What he discovers there will challenge everything the Imperium believes about gods and faith.`
    },
    'legion': {
        number: 'VII',
        title: 'LEGION',
        author: 'Dan Abnett',
        timeline: '001.M31',
        coverImage: 'images/legion.jpg',
        legions: ['Alpha Legion'],
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Legion:</strong> Alpha Legion<br>
            <strong>Primarch:</strong> Alpharius Omegon<br>
            <strong>Main Characters:</strong> Alpharius Omegon, John Grammaticus, Bronzi, Peto<br>
            <strong>Timeline:</strong> 001.M31<br>
            <strong>Status:</strong> Secrets and Lies
        `,
        blurb: `The Alpha Legion operates in the shadows of the Great Crusade, their methods questioned by all. When they encounter the Cabal, a xenos organization that claims to see the future, the twins Alpharius and Omegon are presented with a terrible choice: let the Imperium burn to deny Chaos, or fight for humanity's survival. Their decision will shape the course of the Heresy, though none will know which side they truly serve.`,
        blurbSafe: `The Alpha Legion operates in shadows, their methods questioned by all who witness them. When they encounter the Cabal, a mysterious xenos organization claiming to see the future, the twins Alpharius and Omegon must make a choice that will shape the coming conflict in ways none can predict.`
    },
    'horus-rising': {
        number: 'I',
        title: 'HORUS RISING',
        author: 'Dan Abnett',
        timeline: '002-003.M31',
        coverImage: 'images/horus-rising.jpg',
        legions: ['Sons of Horus', 'Luna Wolves'],
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Legion:</strong> Luna Wolves / Sons of Horus<br>
            <strong>Primarch:</strong> Horus Lupercal, Warmaster of the Imperium<br>
            <strong>Main Characters:</strong> Horus Lupercal, Garviel Loken, Tarik Torgaddon, Ezekyle Abaddon, Ignace Karkasy<br>
            <strong>Timeline:</strong> 203rd Year of the Great Crusade<br>
            <strong>Status:</strong> The Fall Begins
        `,
        blurb: `The Great Crusade is at its zenith. Under the leadership of the brilliant Warmaster Horus, the Imperium's armies are unstoppable. Through Captain Garviel Loken's eyes, we witness the last days of the Imperium's golden age. But when Horus is wounded by the Anathame blade on Davin's moon, a xenos weapon laced with Chaos energies begins corrupting the Warmaster's soul. The architect of humanity's greatest triumph begins his descent into becoming its destroyer.`,
        blurbSafe: `The Great Crusade reaches its zenith under Warmaster Horus, the Emperor's most brilliant son. Captain Garviel Loken witnesses the Imperium's golden age, but when Horus is wounded by a xenos blade on Davin's moon, something begins to change in the Warmaster's soul.`
    },
    'false-gods': {
        number: 'II',
        title: 'FALSE GODS',
        author: 'Graham McNeill',
        timeline: '004.M31',
        coverImage: 'images/false-gods.jpg',
        legions: ['Sons of Horus'],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Legion:</strong> Sons of Horus<br>
            <strong>Primarch:</strong> Horus Lupercal, the Corrupted Warmaster<br>
            <strong>Main Characters:</strong> Horus Lupercal, Garviel Loken, Erebus, Ezekyle Abaddon, Petronella Vivar<br>
            <strong>Timeline:</strong> 004.M31<br>
            <strong>Status:</strong> The Corruption Complete
        `,
        blurb: `Horus lies dying from the Anathame's wound. In desperation, Erebus convinces the Legion to seek aid from the Serpent Lodge of Davin. In a twisted ritual, Horus's soul is cast into the warp where false visions show him abandoned by the Emperor. When he awakens, Horus is no longer the Emperor's loyal son—he has become the pawn of the Chaos Gods, convinced he must overthrow the Emperor to save humanity. The galaxy will burn for his pride.`,
        blurbSafe: `Horus lies dying from the Anathame's wound, and his sons desperately seek aid from the Serpent Lodge of Davin. In a dark ritual, Horus's spirit enters the warp, where he confronts visions that challenge his understanding of the Emperor's plans for humanity.`
    },
    'a-thousand-sons': {
        number: 'XII',
        title: 'A THOUSAND SONS',
        author: 'Graham McNeill',
        timeline: '001-004.M31',
        coverImage: 'images/a-thousand-sons.jpg',
        legions: ["Thousand Sons","Space Wolves"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Legion:</strong> Thousand Sons<br>
            <strong>Primarch:</strong> Magnus the Red<br>
            <strong>Main Characters:</strong> Magnus the Red, Ahzek Ahriman, Lemuel Gaumon, Wyrdmake<br>
            <strong>Timeline:</strong> 001-004.M31<br>
            <strong>Status:</strong> The Crimson King's Folly
        `,
        blurb: `Magnus the Red, master of psychic powers, foresees Horus's betrayal and uses sorcery to warn the Emperor—shattering the Webway Project and dooming Terra. The Emperor, enraged at this catastrophic breach, unleashes Leman Russ and the Space Wolves upon Prospero. The Thousand Sons, devoted scholars and psykers, are betrayed by their own mutations and the machinations of Tzeentch. Magnus's arrogance costs him everything.`,
        blurbSafe: `Magnus the Red, master of psychic powers, attempts to warn the Emperor of a terrible betrayal—but his methods catastrophically damage the Emperor's secret Webway Project. The Emperor unleashes Leman Russ and the Space Wolves upon Prospero, where the Thousand Sons face annihilation for Magnus's hubris.`
    },
    'the-outcast-dead': {
        number: 'XVII',
        title: 'THE OUTCAST DEAD',
        author: 'Graham McNeill',
        timeline: '004.M31',
        coverImage: 'images/the-outcast-dead.jpg',
        legions: ["Various"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Legion:</strong> Various<br>
            <strong>Location:</strong> Terra<br>
            <strong>Main Characters:</strong> Kai Zulane, Severian (World Eater), Atharva (Thousand Son), Tagore<br>
            <strong>Timeline:</strong> 004.M31<br>
            <strong>Status:</strong> Shadows on Terra
        `,
        blurb: `While the Heresy erupts across the galaxy, Terra writhes with its own conflicts. Renegade Space Marines from various Legions are imprisoned deep beneath the Imperial Palace. When astropath Kai Zulane receives a prophetic vision of the Heresy's outcome, he becomes the most hunted man on Terra. The Outcast Dead must fight through the underhives and face the deadly custodians to deliver a message that could change everything.`,
        blurbSafe: `Deep beneath the Imperial Palace, renegade Space Marines from various Legions are imprisoned. When astropath Kai Zulane receives a prophetic vision about the Heresy, he becomes hunted by every faction on Terra. The Outcast Dead must fight through the underhives to deliver a message that could change everything.`
    },
    'the-master-of-mankind': {
        number: 'XLI',
        title: 'THE MASTER OF MANKIND',
        author: 'Aaron Dembski-Bowden',
        timeline: '004-014.M31',
        coverImage: 'images/the-master-of-mankind.jpg',
        legions: ["Custodian Guard","Sisters of Silence"],
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Focus:</strong> The Emperor of Mankind<br>
            <strong>Location:</strong> The Webway War<br>
            <strong>Main Characters:</strong> The Emperor, Ra Endymion, Diocletian Coros, Zephon, Arkhan Land<br>
            <strong>Timeline:</strong> 004-014.M31<br>
            <strong>Status:</strong> The Emperor's Vision Dies
        `,
        blurb: `Beneath the Imperial Palace, the Emperor wages a desperate war in the Webway, defending humanity's future against daemonic incursions. Magnus's psychic warning shattered the Emperor's greatest work—a human-controlled path through the Webway that would free humanity from warp travel. As the Emperor battles with the Custodians and Sisters of Silence against endless daemon hordes, His dream of apotheosis for humanity crumbles. He cannot leave to face Horus, for if the Webway breach is not contained, Terra itself will fall to Chaos.`,
        blurbSafe: `Beneath the Imperial Palace, the Emperor wages a desperate war in the Webway against daemonic incursions. Magnus's psychic warning shattered the Emperor's greatest work—a human-controlled path that would free humanity from warp travel. As daemon hordes assault the breach, the Emperor cannot leave His post, even as Horus marches on Terra.`
    },
    'galaxy-in-flames': {
        number: 'III',
        title: 'GALAXY IN FLAMES',
        author: 'Ben Counter',
        timeline: '005.M31',
        coverImage: 'images/galaxy-in-flames.jpg',
        legions: ["Sons of Horus","Emperor's Children","Death Guard","World Eaters"],
        details: `
            <strong>Author:</strong> Ben Counter<br>
            <strong>Legions:</strong> Sons of Horus, Emperor's Children, Death Guard, World Eaters<br>
            <strong>Location:</strong> Isstvan III<br>
            <strong>Main Characters:</strong> Garviel Loken, Saul Tarvitz, Nathaniel Garro, Tarik Torgaddon, Lucius<br>
            <strong>Timeline:</strong> Opening Shots of the Horus Heresy<br>
            <strong>Status:</strong> The Betrayal Unleashed
        `,
        blurb: `The Heresy begins in fire. On the virus-bombed ruins of Isstvan III, brother turns on brother. Horus reveals his treachery, and his first victims are his own sons—loyalist elements of the Traitor Legions. Garviel Loken, Saul Tarvitz, and Nathaniel Garro survive the Life-Eater virus bombardment and mount a desperate last stand. The traitors unleash a second bombardment that reduces the planet to atomic fire. The Age of Darkness has begun.`,
        blurbSafe: `On the virus-bombed ruins of Isstvan III, brother turns on brother as Horus reveals his treachery. Loyalist elements of the Traitor Legions mount a desperate last stand. Garviel Loken, Saul Tarvitz, and Nathaniel Garro must survive the ultimate betrayal as the Age of Darkness begins.`
    },
    'prospero-burns': {
        number: 'XV',
        title: 'PROSPERO BURNS',
        author: 'Dan Abnett',
        timeline: '004-005.M31',
        coverImage: 'images/prospero-burns.jpg',
        legions: ["Space Wolves","Thousand Sons"],
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Legion:</strong> Space Wolves<br>
            <strong>Primarch:</strong> Leman Russ<br>
            <strong>Main Characters:</strong> Leman Russ, Kasper Hawser, Bjorn Fell-Handed, Aun Helwintr<br>
            <strong>Timeline:</strong> 004-005.M31<br>
            <strong>Status:</strong> The Executioner's Task
        `,
        blurb: `The Space Wolves are the Emperor's executioners, and Leman Russ has been given his orders: make Magnus answer for his crime. Through the eyes of human observer Kasper Hawser, we see the Wolves descend upon Prospero with fury. But Horus has twisted the Emperor's command—what should have been censure becomes genocide. The Thousand Sons' homeworld burns, and Magnus breaks his own spine teleporting the survivors into the warp. Brother is set against brother, and there is no going back.`,
        blurbSafe: `The Space Wolves are the Emperor's executioners, and Leman Russ has been ordered to bring Magnus to account. Through the eyes of human observer Kasper Hawser, we witness the Wolves descend upon Prospero with brutal fury—but Horus has twisted the Emperor's command into something far darker.`
    },
    'mechanicum': {
        number: 'IX',
        title: 'MECHANICUM',
        author: 'Graham McNeill',
        timeline: '005.M31',
        coverImage: 'images/mechanicum.jpg',
        legions: ["Mechanicum"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Faction:</strong> Adeptus Mechanicus<br>
            <strong>Location:</strong> Mars<br>
            <strong>Main Characters:</strong> Dalia Cythera, Adept Zeth, Kelbor-Hal, Ipluvien Maximal<br>
            <strong>Timeline:</strong> 005.M31<br>
            <strong>Status:</strong> The Red Planet Burns
        `,
        blurb: `As Terra reels from Magnus's psychic assault, Mars erupts into civil war. Kelbor-Hal, Fabricator General of Mars, pledges allegiance to Horus, seduced by forbidden technology and dark promises. Loyalist tech-priests fight desperately to prevent the traitors from seizing Mars's ancient weapons. Titan battles Titan in the forge-temples as the Mechanicum tears itself apart. The outcome will determine whether Terra stands or falls when Horus comes.`,
        blurbSafe: `As Terra reels from Magnus's psychic assault, Mars erupts into civil war. Fabricator General Kelbor-Hal is seduced by forbidden technology and dark promises, pledging allegiance to Horus. Loyalist tech-priests fight desperately to prevent the traitors from seizing Mars's ancient weapons as Titan battles Titan.`
    },
    'the-flight-of-the-eisenstein': {
        number: 'IV',
        title: 'THE FLIGHT OF THE EISENSTEIN',
        author: 'James Swallow',
        timeline: '005.M31',
        coverImage: 'images/the-flight-of-the-eisenstein.jpg',
        legions: ["Death Guard"],
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Legion:</strong> Death Guard<br>
            <strong>Hero:</strong> Nathaniel Garro<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Ignatius Grulgor, Malcador the Sigillite, Voyen<br>
            <strong>Timeline:</strong> 005.M31<br>
            <strong>Status:</strong> Warning to Terra
        `,
        blurb: `Battle-Captain Nathaniel Garro of the Death Guard escapes the betrayal at Isstvan III aboard the damaged frigate Eisenstein. Pursued by traitor vessels and fighting off the first blooms of Nurgle's plague, Garro must reach Terra to warn the Emperor that Horus has turned traitor and half the Legions have fallen with him. His desperate journey marks him as the first of Malcador's Knights-Errant—the warriors who will become the founding members of the Grey Knights.`,
        blurbSafe: `Battle-Captain Nathaniel Garro escapes the betrayal at Isstvan III aboard the damaged frigate Eisenstein. Pursued by traitor vessels and fighting off a mysterious plague, Garro must reach Terra to warn the Emperor that Horus has turned traitor and half the Legions have fallen with him.`
    },
    'fallen-angels': {
        number: 'XI',
        title: 'FALLEN ANGELS',
        author: 'Mike Lee',
        timeline: '005.M31',
        coverImage: 'images/fallen-angels.jpg',
        legions: ["Dark Angels"],
        details: `
            <strong>Author:</strong> Mike Lee<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Primarch:</strong> Lion El'Jonson<br>
            <strong>Main Characters:</strong> Zahariel, Luther, Nemiel, Cypher<br>
            <strong>Timeline:</strong> 005.M31<br>
            <strong>Status:</strong> Legion Divided
        `,
        blurb: `As the Heresy spreads, the Dark Angels are divided. Luther, left behind on Caliban while Lion El'Jonson leads the Legion in the Great Crusade, grows bitter with resentment. Chaos whispers to those who feel abandoned, and Caliban's defenders begin to question their loyalty. When the Lion returns, he will find his homeworld has become a fortress of rebellion, setting the stage for a fratricidal conflict that will haunt the Dark Angels forever.`,
        blurbSafe: `As the Heresy spreads, the Dark Angels are divided between those crusading with the Lion and those stationed on Caliban under Luther's command. Resentment grows among those left behind, and Chaos whispers to those who feel abandoned by their Primarch.`
    },
    'fear-to-tread': {
        number: 'XXI',
        title: 'FEAR TO TREAD',
        author: 'James Swallow',
        timeline: '005-006.M31',
        coverImage: 'images/fear-to-tread.jpg',
        legions: ["Blood Angels"],
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Legion:</strong> Blood Angels<br>
            <strong>Primarch:</strong> Sanguinius<br>
            <strong>Main Characters:</strong> Sanguinius, Azkaellon, Raldoron, Meros, Ka'Bandha<br>
            <strong>Timeline:</strong> 005-006.M31<br>
            <strong>Status:</strong> The Angels Face Damnation
        `,
        blurb: `Horus sends his brother Sanguinius into a trap at Signus Prime, where the daemon Ka'Bandha and the forces of Chaos await. The Blood Angels face their worst nightmare as the Black Rage threatens to consume the entire Legion. Sanguinius must battle not only daemons but the cursed flaw in his sons' gene-seed. Though they win through, the Blood Angels are left traumatized and delayed from reaching Terra in time to prevent the Dropsite Massacre.`,
        blurbSafe: `Horus sends Sanguinius into a trap at Signus Prime, where daemon forces await. The Blood Angels face a nightmare as a dark flaw in their gene-seed threatens to consume the entire Legion. Sanguinius must battle both external daemons and the curse hidden within his sons.`
    },
    'fulgrim': {
        number: 'V',
        title: 'FULGRIM',
        author: 'Graham McNeill',
        timeline: '006.M31',
        coverImage: 'images/fulgrim.jpg',
        legions: ["Emperor's Children","Iron Hands"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Legion:</strong> Emperor's Children<br>
            <strong>Primarch:</strong> Fulgrim<br>
            <strong>Main Characters:</strong> Fulgrim, Ferrus Manus, Julius Kaesoron, Lucius, Fabius Bile<br>
            <strong>Timeline:</strong> 006.M31<br>
            <strong>Status:</strong> The Pursuit of Perfection Becomes Madness
        `,
        blurb: `The Emperor's Children, devoted to perfection in all things, discover a daemonic blade on a lost world. Fulgrim becomes possessed by the sword's malevolent spirit, and Slaanesh's corruption spreads through the Legion. Their pursuit of excellence becomes twisted into depravity and excess. The climax comes when Fulgrim murders his brother Ferrus Manus of the Iron Hands at Isstvan V, fully embracing damnation. The daemon and Primarch merge, creating a being of terrible beauty and horror.`,
        blurbSafe: `The Emperor's Children discover a daemonic blade on a lost world, and Fulgrim becomes possessed by its malevolent spirit. As Slaanesh's corruption spreads through the Legion, their pursuit of perfection twists into depravity and excess, culminating in a tragic confrontation with Ferrus Manus at Isstvan V.`
    },
    'vulkan-lives': {
        number: 'XXVI',
        title: 'VULKAN LIVES',
        author: 'Nick Kyme',
        timeline: '006-007.M31',
        coverImage: 'images/vulkan-lives.jpg',
        legions: ["Salamanders","Night Lords"],
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Primarch:</strong> Vulkan<br>
            <strong>Main Characters:</strong> Vulkan, Konrad Curze, Numeon, John Grammaticus<br>
            <strong>Timeline:</strong> 006-007.M31<br>
            <strong>Status:</strong> The Perpetual Primarch
        `,
        blurb: `Captured at Isstvan V, Vulkan endures tortures designed by Konrad Curze, the Night Haunter. But Vulkan is a Perpetual—he cannot truly die. Each time Curze kills him, he returns, driving the Night Haunter to madness. Vulkan's resilience and inherent nobility stand in stark contrast to Curze's nihilism. His sons search desperately for their lost Primarch while Vulkan himself endures endless death and rebirth, testing the limits of even a Primarch's sanity.`,
        blurbSafe: `Captured at Isstvan V, Vulkan endures tortures designed by Konrad Curze, the Night Haunter. But Vulkan possesses a unique ability—each time Curze kills him, he returns. This endless cycle tests both Primarchs, as Vulkan's resilience confronts Curze's nihilism.`
    },
    'deliverance-lost': {
        number: 'XVIII',
        title: 'DELIVERANCE LOST',
        author: 'Gav Thorpe',
        timeline: '007.M31',
        coverImage: 'images/deliverance-lost.jpg',
        legions: ["Raven Guard","Alpha Legion"],
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Legion:</strong> Raven Guard<br>
            <strong>Primarch:</strong> Corvus Corax<br>
            <strong>Main Characters:</strong> Corvus Corax, Nykona Sharrowkyn, Alpharius, Branne Nev<br>
            <strong>Timeline:</strong> 007.M31<br>
            <strong>Status:</strong> Genetic Salvation Corrupted
        `,
        blurb: `Decimated at Isstvan V, Corvus Corax returns to Deliverance with a handful of survivors. To rebuild his Legion quickly, he recovers gene-tech from the Emperor's laboratories beneath the Himalazian Mountains. But Alpha Legion operatives have infiltrated his ranks, and they sabotage the new gene-seed. The results are horrific—mutated abominations instead of Astartes. Corax is forced to mercy-kill his own sons. The tragedy will haunt him until his eventual disappearance into the Eye of Terror.`,
        blurbSafe: `Decimated at Isstvan V, Corvus Corax seeks to rebuild his Legion using gene-tech from the Emperor's laboratories. But Alpha Legion operatives have infiltrated his ranks, threatening to sabotage the Raven Guard's desperate attempt at salvation.`
    },
    'the-crimson-king': {
        number: 'XLIV',
        title: 'THE CRIMSON KING',
        author: 'Graham McNeill',
        timeline: '007.M31',
        coverImage: 'images/the-crimson-king.jpg',
        legions: ["Thousand Sons"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Legion:</strong> Thousand Sons<br>
            <strong>Primarch:</strong> Magnus the Red<br>
            <strong>Main Characters:</strong> Magnus the Red, Ahriman, Amon, Ignis<br>
            <strong>Timeline:</strong> 007.M31<br>
            <strong>Status:</strong> Exile in the Warp
        `,
        blurb: `After the fall of Prospero, Magnus and his Thousand Sons find themselves on the Planet of the Sorcerers within the Eye of Terror. Magnus is broken, fragmented into shards scattered across reality. Ahriman and the Thousand Sons desperately try to restore their Primarch while navigating the deadly politics of Tzeentch's realm. Magnus must accept that his quest for knowledge has damned him and his Legion, and choose whether to serve Horus or chart his own dark path.`,
        blurbSafe: `After Prospero's fall, Magnus and his Thousand Sons find themselves on the Planet of the Sorcerers within the Eye of Terror. Magnus is broken, his essence fragmented across reality, and Ahriman must navigate the deadly politics of Tzeentch's realm while trying to restore their Primarch.`
    },
    'the-damnation-of-pythos': {
        number: 'XXX',
        title: 'THE DAMNATION OF PYTHOS',
        author: 'David Annandale',
        timeline: '007.M31',
        coverImage: 'images/the-damnation-of-pythos.jpg',
        legions: ["Iron Hands","Salamanders","Raven Guard"],
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Legions:</strong> Iron Hands, Salamanders, Raven Guard<br>
            <strong>Location:</strong> Pythos<br>
            <strong>Main Characters:</strong> Atticus (Iron Hands), Galba (Raven Guard), Cassian Dracos<br>
            <strong>Timeline:</strong> 007.M31<br>
            <strong>Status:</strong> A World Consumed
        `,
        blurb: `Survivors from the Dropsite Massacre seek refuge on the verdant world of Pythos. But the planet is a trap—a daemonic plot by the Chaos Gods to create a warp rift. Iron Hands, consumed by rage after Ferrus Manus's death, pursue vengeance without wisdom. Salamanders and Raven Guard struggle to maintain their honor while surrounded by death. Pythos becomes a daemon world, and those who sought sanctuary find only damnation. It stands as a grim testament to how Chaos exploits humanity's weaknesses.`,
        blurbSafe: `Survivors from the Dropsite Massacre seek refuge on the verdant world of Pythos, but the planet harbors a dark secret. Iron Hands consumed by rage pursue vengeance, while Salamanders and Raven Guard struggle to maintain their honor in a world that may be a trap.`
    },
    'nemesis': {
        number: 'XIII',
        title: 'NEMESIS',
        author: 'James Swallow',
        timeline: '007.M31',
        coverImage: 'images/nemesis.jpg',
        legions: ["Officio Assassinorum"],
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Faction:</strong> Officio Assassinorum<br>
            <strong>Main Characters:</strong> Spear (Execution Force), Koyne (Garantine), Jenniker Soneka, Erebus<br>
            <strong>Timeline:</strong> 007.M31<br>
            <strong>Status:</strong> Shadow War
        `,
        blurb: `Malcador the Sigillite authorizes a desperate gambit: deploy a team of elite assassins to kill Horus before he can march on Terra. The Execution Force includes operatives from every Assassin Clade, each a master of death. But Horus has his own weapon—a supernatural assassin forged by the Chaos Gods. The shadow war culminates in a deadly game of hunter and hunted, where the galaxy's most lethal killers face off. Even the Emperor's finest may not be enough to stop a Warmaster blessed by the dark gods.`,
        blurbSafe: `Malcador the Sigillite authorizes a desperate gambit: deploy elite assassins to kill Horus before he can march on Terra. But Horus has his own weapon—a supernatural assassin forged by the Chaos Gods. The shadow war culminates in a deadly game of hunter and hunted.`
    },
    'know-no-fear': {
        number: 'XIX',
        title: 'KNOW NO FEAR',
        author: 'Dan Abnett',
        timeline: '007.M31',
        coverImage: 'images/know-no-fear.jpg',
        legions: ["Ultramarines","Word Bearers"],
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Legions:</strong> Ultramarines, Word Bearers<br>
            <strong>Primarchs:</strong> Roboute Guilliman, Lorgar<br>
            <strong>Main Characters:</strong> Roboute Guilliman, Kor Phaeron, Marius Gage, Remus Ventanus, John Grammaticus<br>
            <strong>Timeline:</strong> 007.M31 - The Battle of Calth<br>
            <strong>Status:</strong> Betrayal at Calth
        `,
        blurb: `The Word Bearers, harboring decades of resentment from Lorgar's humiliation, strike at Calth without warning. The Ultramarines, proud and unprepared for treachery, are devastated by orbital bombardment and brutal ground assaults. Roboute Guilliman survives being sucked into space, his transhuman physiology barely preserving him. Though the Ultramarines eventually repel the invasion, Calth is left a poisoned, irradiated wreck. The Mark of Calth becomes a scar worn by the Ultramarines forever, a reminder that even the most noble can be caught unprepared by treachery.`,
        blurbSafe: `The Word Bearers, harboring decades of resentment from Lorgar's humiliation, strike at Calth without warning. The Ultramarines face devastating orbital bombardment and brutal ground assaults, unprepared for treachery from those they considered brothers in arms.`
    },
    'battle-for-the-abyss': {
        number: 'VIII',
        title: 'BATTLE FOR THE ABYSS',
        author: 'Ben Counter',
        timeline: '007.M31',
        coverImage: 'images/battle-for-the-abyss.jpg',
        legions: ["Word Bearers","Ultramarines","Space Wolves","World Eaters","Thousand Sons"],
        details: `
            <strong>Author:</strong> Ben Counter<br>
            <strong>Legions:</strong> Word Bearers, Ultramarines, Space Wolves, World Eaters, Thousand Sons<br>
            <strong>Main Characters:</strong> Cestus (Ultramarine), Skraal (World Eater), Brynngar (Space Wolf), Mhotep (Thousand Son)<br>
            <strong>Timeline:</strong> 007.M31<br>
            <strong>Status:</strong> Chase Through the Void
        `,
        blurb: `The Word Bearers launch the Furious Abyss, a massive warship designed to destroy Macragge and cripple the Ultramarines before the Battle of Calth. A ragtag group of loyalist Space Marines from various Legions—including a World Eater still loyal to the Emperor—pursue the vessel through the warp. They must overcome their differences and stop the Furious Abyss before it reaches Ultramar. In a desperate boarding action, they sabotage the ship, but the cost is high. The mission succeeds, but barely—and Macragge is warned.`,
        blurbSafe: `The Word Bearers launch the Furious Abyss, a massive warship designed to destroy Macragge and cripple the Ultramarines. A ragtag group of loyalist Space Marines from various Legions pursue the vessel through the warp, racing to stop it before it reaches Ultramar.`
    },
    'angel-exterminatus': {
        number: 'XXIII',
        title: 'ANGEL EXTERMINATUS',
        author: 'Graham McNeill',
        timeline: '007.M31',
        coverImage: 'images/angel-exterminatus.jpg',
        legions: ["Iron Warriors","Emperor's Children"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Legions:</strong> Iron Warriors, Emperor's Children<br>
            <strong>Primarchs:</strong> Perturabo, Fulgrim<br>
            <strong>Main Characters:</strong> Perturabo, Fulgrim, Forrix, Kroeger, Lucius<br>
            <strong>Timeline:</strong> 007.M31<br>
            <strong>Status:</strong> Dark Alliance
        `,
        blurb: `Fulgrim manipulates Perturabo into a joint expedition to the Eldar Crone World of Iydris. Perturabo, master of siege warfare but always bitter at being overlooked, seeks ancient weapons to use against the Emperor. But Fulgrim has darker plans—he intends to ascend to daemonhood by sacrificing Perturabo. The Iron Warriors Primarch barely escapes the trap, emerging with his paranoia and bitterness magnified. Fulgrim achieves his goal, becoming a daemon prince of Slaanesh. The alliance between the Legions fractures further.`,
        blurbSafe: `Fulgrim manipulates Perturabo into a joint expedition to the Eldar Crone World of Iydris. Perturabo seeks ancient weapons, but Fulgrim has darker plans involving ascension and sacrifice. The alliance between the Iron Warriors and Emperor's Children will be tested in ways neither anticipated.`
    },
    'betrayer': {
        number: 'XXIV',
        title: 'BETRAYER',
        author: 'Aaron Dembski-Bowden',
        timeline: '007.M31',
        coverImage: 'images/betrayer.jpg',
        legions: ["World Eaters","Word Bearers","Ultramarines"],
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Legions:</strong> World Eaters, Word Bearers<br>
            <strong>Primarchs:</strong> Angron, Lorgar<br>
            <strong>Main Characters:</strong> Angron, Lorgar, Khârn, Argel Tal, Roboute Guilliman<br>
            <strong>Timeline:</strong> 007.M31 - The Shadow Crusade<br>
            <strong>Status:</strong> Blood for the Blood God
        `,
        blurb: `Lorgar and Angron lead the Shadow Crusade, carving a bloody path through Ultramar's Five Hundred Worlds. Angron, driven by the Butcher's Nails implanted in his brain, is dying. Lorgar performs a dark ritual, elevating Angron to become a Daemon Primarch of Khorne at the cost of countless lives. Captain Khârn of the World Eaters witnesses his Legion's complete fall to madness. Guilliman desperately tries to contain the devastation, but the Ultramarines are being bled white across a hundred battlefields.`,
        blurbSafe: `Lorgar and Angron lead the Shadow Crusade, carving a bloody path through Ultramar's worlds. Angron, driven by the Butcher's Nails and dying, becomes the focus of a dark ritual. Captain Khârn witnesses his Legion's descent into madness while Guilliman desperately tries to contain the devastation.`
    },
    'scars': {
        number: 'XXVIII',
        title: 'SCARS',
        author: 'Chris Wraight',
        timeline: '007.M31',
        coverImage: 'images/scars.jpg',
        legions: ["White Scars"],
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Legion:</strong> White Scars<br>
            <strong>Primarch:</strong> Jaghatai Khan<br>
            <strong>Main Characters:</strong> Jaghatai Khan, Ilya Ravallion, Yesugei, Shiban Khan<br>
            <strong>Timeline:</strong> 007.M31<br>
            <strong>Status:</strong> Choosing Sides
        `,
        blurb: `The White Scars, far from Terra prosecuting the Great Crusade, learn of the Heresy late. Jaghatai Khan, the Warhawk, must decide which side to join. His Legion is divided—some wish to join Horus, others remain loyal. The Khan is close to both Magnus and Horus, but when he learns the truth about the Word Bearers' manipulation and Horus's true allegiance to Chaos, his decision is made. The White Scars will ride for Terra. But first, they must purge the traitors within their own ranks.`,
        blurbSafe: `The White Scars, far from Terra prosecuting the Great Crusade, learn of the Heresy late. Jaghatai Khan must decide which side to join as his Legion divides between those loyal to the Emperor and those who would follow Horus. The Khan's choice will define the White Scars forever.`
    },
    'vengeful-spirit': {
        number: 'XXIX',
        title: 'VENGEFUL SPIRIT',
        author: 'Graham McNeill',
        timeline: '008-009.M31',
        coverImage: 'images/vengeful-spirit.jpg',
        legions: ["Sons of Horus"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Legion:</strong> Sons of Horus<br>
            <strong>Primarch:</strong> Horus Lupercal<br>
            <strong>Main Characters:</strong> Horus Lupercal, Garviel Loken, Alivia Sureka, Knights of House Devine<br>
            <strong>Timeline:</strong> 008-009.M31<br>
            <strong>Status:</strong> Apotheosis of the Warmaster
        `,
        blurb: `Horus returns to Molech, a Knight World where he once fought beside the Emperor. He seeks entry to the same warp gate the Emperor used millennia ago to bargain with the Chaos Gods for power. Defended by loyalist Titans and Knights, Molech becomes a slaughterhouse. Horus succeeds in entering the gate and emerges transformed, wielding powers that rival the Emperor Himself. The Warmaster is now truly a match for his father, setting the stage for their final confrontation. But the power comes at a terrible price—Horus is no longer truly human.`,
        blurbSafe: `Horus returns to Molech, a Knight World where he once fought beside the Emperor. He seeks entry to the same warp gate the Emperor used to bargain with the Chaos Gods. Defended by loyalist forces, Molech becomes a slaughterhouse as Horus pursues ultimate power.`
    },
    'the-unremembered-empire': {
        number: 'XXVII',
        title: 'THE UNREMEMBERED EMPIRE',
        author: 'Dan Abnett',
        timeline: '009.M31',
        coverImage: 'images/the-unremembered-empire.jpg',
        legions: ["Ultramarines","Dark Angels","Blood Angels"],
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Legions:</strong> Ultramarines, Dark Angels, Blood Angels<br>
            <strong>Primarchs:</strong> Guilliman, Lion El'Jonson, Sanguinius<br>
            <strong>Main Characters:</strong> Roboute Guilliman, Lion El'Jonson, Sanguinius, Konrad Curze, John Grammaticus<br>
            <strong>Timeline:</strong> 009.M31<br>
            <strong>Status:</strong> Imperium Secundus
        `,
        blurb: `Believing Terra has fallen, Roboute Guilliman establishes Imperium Secundus on Macragge, a contingency government to preserve humanity. When Lion El'Jonson and Sanguinius arrive, tensions rise. The Lion questions Guilliman's motives, fearing ambition for the throne. They crown Sanguinius as Emperor instead, but the entire project is based on a lie. When they learn Terra still stands, the Imperium Secundus must end. The three brothers prepare to race to Terra—but the Ruinstorm, a warp storm engineered by Chaos, bars their way.`,
        blurbSafe: `Believing Terra has fallen, Roboute Guilliman establishes Imperium Secundus on Macragge. When Lion El'Jonson and Sanguinius arrive, tensions rise as questions of loyalty and ambition threaten to fracture the alliance. The three Primarchs must decide humanity's future.`
    },
    'pharos': {
        number: 'XXXIV',
        title: 'PHAROS',
        author: 'Guy Haley',
        timeline: '009.M31',
        coverImage: 'images/pharos.jpg',
        legions: ["Ultramarines","Imperial Fists","Night Lords"],
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Location:</strong> Sotha<br>
            <strong>Main Characters:</strong> Alexis Polux (Imperial Fists), Barabas Dantioch, Warsmith Krendl<br>
            <strong>Timeline:</strong> 009.M31<br>
            <strong>Status:</strong> Beacon in the Dark
        `,
        blurb: `The Pharos is an ancient xenos device on the world of Sotha that can pierce even the Ruinstorm's interference. The Night Lords, seeking revenge after defeat, assault Sotha to destroy the beacon and blind the loyalists. Polux of the Imperial Fists and the Ultramarines garrison defend desperately. The Pharos is used at full power to drive off the Night Lords, but the massive energy discharge sends a signal across time and space that will, ten thousand years later, draw the Tyranid Hive Fleets toward the galaxy. One crisis averted seeds another apocalypse.`,
        blurbSafe: `The Pharos is an ancient xenos device on Sotha that can pierce even the Ruinstorm's interference. When the Night Lords assault the world to destroy the beacon, Polux of the Imperial Fists and the Ultramarines garrison mount a desperate defense of this vital strategic asset.`
    },
    'deathfire': {
        number: 'XXXII',
        title: 'DEATHFIRE',
        author: 'Nick Kyme',
        timeline: '010.M31',
        coverImage: 'images/deathfire.jpg',
        legions: ["Salamanders"],
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Primarch:</strong> Vulkan<br>
            <strong>Main Characters:</strong> Artellus Numeon, Vulkan, Agatone, Kaspian Heletine<br>
            <strong>Timeline:</strong> 010.M31<br>
            <strong>Status:</strong> The Quest for the Lost Primarch
        `,
        blurb: `The Salamanders embark on a desperate quest to find Vulkan and return him to Nocturne. They believe that bringing their Primarch home will restore him and the Legion. The journey is fraught with danger, and they carry Vulkan's seemingly dead body through war-torn space. Along the way, they must overcome traitor forces, navigate warp storms, and face the question of whether their Primarch can ever truly be restored. The Salamanders' determination and loyalty to their father are tested to the limit.`,
        blurbSafe: `The Salamanders embark on a desperate quest to find Vulkan and return him to Nocturne, believing that bringing their Primarch home will restore him and the Legion. The journey through war-torn space tests their determination and loyalty to their father.`
    },
    'tallarn': {
        number: 'XLV',
        title: 'TALLARN',
        author: 'John French',
        timeline: '010-012.M31',
        coverImage: 'images/tallarn.jpg',
        legions: ["Imperial Army","Iron Warriors"],
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Faction:</strong> Imperial Army<br>
            <strong>Location:</strong> Tallarn<br>
            <strong>Main Characters:</strong> Tank commanders, Imperial Army soldiers, Iron Warriors<br>
            <strong>Timeline:</strong> 010-012.M31<br>
            <strong>Status:</strong> The Largest Tank Battle in History
        `,
        blurb: `When the Iron Warriors virus-bomb Tallarn to uncover an ancient buried secret, the world becomes a rad-wasteland. But billions of Imperial Guard tankers remain, and they wage the largest armored warfare campaign in galactic history across the poisoned dunes. Thousands of tanks clash in desperate battles while the Iron Warriors dig deeper for their mysterious prize. The war for Tallarn becomes a symbol of mortal humanity's defiance—not superhuman Space Marines, but ordinary soldiers fighting against impossible odds to deny the traitors their victory.`,
        blurbSafe: `When the Iron Warriors virus-bomb Tallarn seeking an ancient buried secret, the world becomes a rad-wasteland. Billions of Imperial Guard tankers wage the largest armored warfare campaign in galactic history, fighting to deny the traitors their prize in brutal tank battles across poisoned dunes.`
    },
    'praetorian-of-dorn': {
        number: 'XXXIX',
        title: 'PRAETORIAN OF DORN',
        author: 'John French',
        timeline: '010.M31',
        coverImage: 'images/praetorian-of-dorn.jpg',
        legions: ["Imperial Fists","Alpha Legion"],
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Legions:</strong> Imperial Fists, Alpha Legion<br>
            <strong>Primarchs:</strong> Rogal Dorn, Alpharius<br>
            <strong>Main Characters:</strong> Rogal Dorn, Alpharius, Archamus, Armillus Dynat<br>
            <strong>Timeline:</strong> 010.M31<br>
            <strong>Status:</strong> Shadow War for Terra
        `,
        blurb: `Alpharius launches a covert assault on the Solar System itself, infiltrating with sleeper agents and sabotage cells. Rogal Dorn, master of defense, must uncover and eliminate the Alpha Legion's networks before the Siege of Terra begins. The conflict is as much espionage as warfare, with both Primarchs testing their wits. In a stunning climax, Dorn confronts Alpharius in personal combat and slays him—or does he? With the Alpha Legion, nothing is ever certain. The twin Primarchs' deceptions may run deeper than anyone knows.`,
        blurbSafe: `Alpharius launches a covert assault on the Solar System itself, infiltrating with sleeper agents and sabotage cells. Rogal Dorn must uncover and eliminate the Alpha Legion's networks before the Siege of Terra begins in a conflict as much espionage as warfare.`
    },
    'the-path-of-heaven': {
        number: 'XXXVI',
        title: 'THE PATH OF HEAVEN',
        author: 'Chris Wraight',
        timeline: '011.M31',
        coverImage: 'images/the-path-of-heaven.jpg',
        legions: ["White Scars","Death Guard"],
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Legion:</strong> White Scars<br>
            <strong>Primarch:</strong> Jaghatai Khan<br>
            <strong>Main Characters:</strong> Jaghatai Khan, Mortarion, Ilya Ravallion, Torghun Khan<br>
            <strong>Timeline:</strong> 011.M31<br>
            <strong>Status:</strong> The Sagyar Mazan's Ride
        `,
        blurb: `The White Scars race to Terra through the war-torn galaxy, harrying the Death Guard fleet and disrupting traitor supply lines. Jaghatai Khan leads his Legion in a lightning campaign of hit-and-run warfare, buying precious time for Terra's defenses. But the Death Guard, now fully transformed by Nurgle's plague, are relentless. The Khan must also deal with the Sagyar Mazan—those White Scars who sided with the traitors and now seek atonement through death. The chase culminates in a desperate battle in the void.`,
        blurbSafe: `The White Scars race to Terra through the war-torn galaxy, harrying the Death Guard fleet in a lightning campaign of hit-and-run warfare. Jaghatai Khan must also deal with the Sagyar Mazan—White Scars who sided with traitors and now seek atonement.`
    },
    'angels-of-caliban': {
        number: 'XXXVIII',
        title: 'ANGELS OF CALIBAN',
        author: 'Gav Thorpe',
        timeline: '011.M31',
        coverImage: 'images/angels-of-caliban.jpg',
        legions: ["Dark Angels","Night Lords"],
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Primarch:</strong> Lion El'Jonson<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Konrad Curze, Luther, Zahariel<br>
            <strong>Timeline:</strong> 011.M31<br>
            <strong>Status:</strong> Secrets and Lies
        `,
        blurb: `The Lion pursues the Night Lords through the Ruinstorm while dark secrets about Caliban's fall spread within the Legion. The Dark Angels are divided between those who know the truth about Luther's rebellion and those kept in ignorance. As the Lion closes in on Konrad Curze, the Dark Angels' internal fractures widen. The hunt for the Night Haunter becomes secondary to the devastating realization that the Dark Angels' homeworld has turned traitor, and half the Legion has fallen with it.`,
        blurbSafe: `The Lion pursues the Night Lords through the Ruinstorm while dark secrets about Caliban spread within the Legion. As the Lion closes in on Konrad Curze, devastating truths about the Dark Angels' homeworld begin to emerge.`
    },
    'old-earth': {
        number: 'XLVII',
        title: 'OLD EARTH',
        author: 'Nick Kyme',
        timeline: '011.M31',
        coverImage: 'images/old-earth.jpg',
        legions: ["Salamanders"],
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Primarch:</strong> Vulkan<br>
            <strong>Main Characters:</strong> Vulkan, Numeon, Magnus the Red, Eldrad Ulthran, John Grammaticus<br>
            <strong>Timeline:</strong> 011.M31<br>
            <strong>Status:</strong> The Primarch Returns
        `,
        blurb: `Vulkan finally returns to Terra, restored in mind and spirit. His trials have tested him beyond imagining, but the Primarch of the Salamanders has endured. He brings with him a weapon designed for use against the Traitor forces. Reunited with his Legion, Vulkan prepares for the final defense of Terra. His journey through death and rebirth has given him unique insights, but also left scars that even a Primarch cannot easily heal. The Salamanders welcome their father home, knowing the darkest battles still lie ahead.`,
        blurbSafe: `Vulkan returns to Terra, restored after trials that tested him beyond imagining. He brings with him a weapon designed for use against the Traitor forces. Reunited with his Legion, Vulkan prepares for the final defense of Terra.`
    },
    'ruinstorm': {
        number: 'XLVI',
        title: 'RUINSTORM',
        author: 'David Annandale',
        timeline: '011.M31',
        coverImage: 'images/ruinstorm.jpg',
        legions: ["Ultramarines","Dark Angels","Blood Angels"],
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Legions:</strong> Ultramarines, Dark Angels, Blood Angels<br>
            <strong>Primarchs:</strong> Guilliman, Lion El'Jonson, Sanguinius<br>
            <strong>Main Characters:</strong> Roboute Guilliman, Lion El'Jonson, Sanguinius, Azkaellon<br>
            <strong>Timeline:</strong> 011.M31<br>
            <strong>Status:</strong> Breaking the Storm
        `,
        blurb: `Guilliman, the Lion, and Sanguinius unite to breach the Ruinstorm and reach Terra. Each Primarch must face trials designed to break them—their greatest fears and doubts manifested by the warp. They discover the storm is powered by daemonic engines at Davin and other key locations. To break the storm, they must split up, each taking a separate path to destroy these focal points. Their brotherhood is tested, but ultimately their determination prevails. The Ruinstorm begins to dissipate, opening the way to Terra.`,
        blurbSafe: `Guilliman, the Lion, and Sanguinius unite to breach the Ruinstorm and reach Terra. Each Primarch must face trials designed to break them—their greatest fears and doubts manifested by the warp. To break the storm, they must split up and face separate paths.`
    },
    'wolfsbane': {
        number: 'XLIX',
        title: 'WOLFSBANE',
        author: 'Guy Haley',
        timeline: '012.M31',
        coverImage: 'images/wolfsbane.jpg',
        legions: ["Space Wolves","Sons of Horus"],
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Legion:</strong> Space Wolves<br>
            <strong>Primarch:</strong> Leman Russ<br>
            <strong>Main Characters:</strong> Leman Russ, Horus Lupercal, Bjorn, Malcador<br>
            <strong>Timeline:</strong> 012.M31<br>
            <strong>Status:</strong> The Wolf King's Gambit
        `,
        blurb: `Leman Russ, filled with guilt over Prospero and driven by prophecy, attempts a desperate assassination strike against Horus. Armed with the spear Gungnir, forged by the Emperor Himself to wound even a Primarch empowered by Chaos, Russ leads his Wolves in a suicidal assault. He fights through the Sons of Horus to face the Warmaster in single combat. Russ wounds Horus gravely, but the Chaos Gods restore their champion. Russ barely escapes with his life, his Legion mauled. The gambit fails, but it proves Horus is not invincible—he can be hurt.`,
        blurbSafe: `Leman Russ, driven by prophecy and guilt over Prospero, attempts a desperate assassination strike against Horus. Armed with the Emperor's spear Gungnir, Russ leads his Wolves in a suicidal assault to prove the Warmaster can be wounded.`
    },
    'titandeath': {
        number: 'LIII',
        title: 'TITANDEATH',
        author: 'Guy Haley',
        timeline: '012.M31',
        coverImage: 'images/titandeath.jpg',
        legions: ["Collegia Titanica"],
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Faction:</strong> Collegia Titanica<br>
            <strong>Location:</strong> Beta-Garmon<br>
            <strong>Main Characters:</strong> Titan Princeps, Legio Solaria, Legio Mortis<br>
            <strong>Timeline:</strong> 012.M31<br>
            <strong>Status:</strong> The Titanic Gate
        `,
        blurb: `Beta-Garmon, the gateway to the Solar System, becomes the site of the largest Titan battle in the Heresy. Dozens of Titan Legios clash across multiple worlds in the Beta-Garmon cluster. Imperator Titans fall in apocalyptic duels as both sides commit everything to control this strategic chokepoint. The Loyalist Legios fight desperately to delay the traitors' advance, buying Terra precious time to prepare. The battle rages for months, with millions dying beneath the Titans' feet. Though the loyalists eventually retreat, they have bloodied the traitor host and delayed the inevitable siege.`,
        blurbSafe: `Beta-Garmon, the gateway to the Solar System, becomes the site of the largest Titan battle in the Heresy. Dozens of Titan Legios clash across multiple worlds as both sides commit everything to control this strategic chokepoint leading to Terra.`
    },
    'slaves-to-darkness': {
        number: 'LI',
        title: 'SLAVES TO DARKNESS',
        author: 'John French',
        timeline: '013.M31',
        coverImage: 'images/slaves-to-darkness.jpg',
        legions: ["Sons of Horus","All Traitor Legions"],
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Faction:</strong> Traitor Legions<br>
            <strong>Primarch:</strong> Horus Lupercal<br>
            <strong>Main Characters:</strong> Horus Lupercal, Maloghurst, Lorgar, Ezekyle Abaddon<br>
            <strong>Timeline:</strong> 013.M31<br>
            <strong>Status:</strong> The Warmaster's Final Corruption
        `,
        blurb: `Horus lies wounded from Russ's spear, and the Chaos Gods withdraw their favor. The traitor alliance fractures as each Legion pursues its own dark agenda. Horus must prove himself worthy of the Gods' power once more. He purges the last remnants of his humanity, embracing full damnation. The Warmaster finally accepts that he is not using Chaos—he serves it utterly. The Gods restore their champion, now more monster than man. United under Horus's dark will, the traitor fleets finally begin their advance on Terra. The Siege is about to begin.`,
        blurbSafe: `Horus lies wounded and the Chaos Gods withdraw their favor. The traitor alliance fractures as each Legion pursues its own dark agenda. Horus must prove himself worthy once more and unite the traitor forces for the final advance on Terra.`
    },
    'the-buried-dagger': {
        number: 'LIV',
        title: 'THE BURIED DAGGER',
        author: 'James Swallow',
        timeline: '013.M31',
        coverImage: 'images/the-buried-dagger.jpg',
        legions: ["Death Guard"],
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Legion:</strong> Death Guard<br>
            <strong>Primarch:</strong> Mortarion<br>
            <strong>Main Characters:</strong> Mortarion, Nathaniel Garro, Malcador, Calas Typhon<br>
            <strong>Timeline:</strong> 013.M31<br>
            <strong>Status:</strong> The Final Fall
        `,
        blurb: `The Death Guard fleet becomes trapped in the warp, where Nurgle's Rot consumes them. Mortarion, who swore never to serve tyrants after his upbringing on Barbarus, watches his sons die in agony. In desperation, he calls out for aid—and Nurgle answers. Mortarion pledges himself to the Plague God to save his Legion. They emerge from the warp transformed into bloated plague carriers, their white armor turned corpse-grey and green. Meanwhile, Malcador continues forging the foundations of the Inquisition and Grey Knights. The stage is set for the final confrontation.`,
        blurbSafe: `The Death Guard fleet becomes trapped in the warp, where Nurgle's plague consumes them. Mortarion, who swore never to serve tyrants, faces a terrible choice as his sons die in agony. Meanwhile, Malcador continues forging the foundations of the Inquisition and Grey Knights.`
    },
    // TALES OF HERESY ANTHOLOGY - Stories
    'tales-of-heresy-blood-games': {
        number: 'X.1',
        title: 'BLOOD GAMES',
        author: 'Dan Abnett',
        timeline: '006.M31',
        sortOrder: 6.9,
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Custodian Guard"],
        anthology: 'Tales of Heresy',
        sortOrder: 10.1,
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Main Characters:</strong> Amon Tauromachian, Custodian Guard<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Amon Tauromachian, one of the Emperor's elite Custodian Guard, returns to the Imperial Palace after completing a year-long Blood Game. Tasked with investigating rumors of treason in the hives of Hy Brasil, he must navigate a galaxy at war where half the Imperium's armies are in rebellion.`,
        blurbSafe: `A Custodian Guard returns to the Imperial Palace after a training exercise and is tasked with investigating rumors of treason, testing his skills in a galaxy consumed by civil war.`
    },
    'tales-of-heresy-wolf-at-the-door': {
        number: 'X.2',
        title: 'WOLF AT THE DOOR',
        author: 'Mike Lee',
        timeline: '950.M30',
        sortOrder: 0.35,
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Space Wolves"],
        anthology: 'Tales of Heresy',
        sortOrder: 10.2,
        details: `
            <strong>Author:</strong> Mike Lee<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Space Wolves<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `The Space Wolves descend upon a world, bringing the Emperor's justice with fang and claw. This tale explores the VI Legion's role as the Emperor's executioners and the savage fury they unleash in the name of the Imperium.`,
        blurbSafe: `The Space Wolves arrive at a world to deliver the Emperor's judgment, showcasing the savage nature of the VI Legion and their role as the Imperium's executioners.`
    },
    'tales-of-heresy-scions-of-the-storm': {
        number: 'X.3',
        title: 'SCIONS OF THE STORM',
        author: 'Anthony Reynolds',
        timeline: '956.M30',
        sortOrder: 0.3,
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Word Bearers"],
        anthology: 'Tales of Heresy',
        sortOrder: 10.3,
        details: `
            <strong>Author:</strong> Anthony Reynolds<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `A Word Bearers tale following the XVII Legion as they spread the dark truth of Chaos across the galaxy. This story delves into the zealous nature of Lorgar's sons and their mission to convert or destroy those who resist the new gods.`,
        blurbSafe: `A Word Bearers squad undertakes a mission that tests their faith and reveals the zealous nature of the XVII Legion during their transformation.`
    },
    'tales-of-heresy-the-voice': {
        number: 'X.4',
        title: 'THE VOICE',
        author: 'James Swallow',
        timeline: '006.M31',
        sortOrder: 6.91,
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Audio"],
        anthology: 'Tales of Heresy',
        sortOrder: 10.4,
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `A mysterious story exploring the power of voice and influence during the Heresy. As the galaxy burns, not all weapons are forged of steel—some are crafted from words and whispers that can topple empires.`,
        blurbSafe: `A tale exploring the power of words and influence during the Heresy, showing that some weapons are more subtle than bolters and blades.`
    },
    'tales-of-heresy-call-of-the-lion': {
        number: 'X.5',
        title: 'CALL OF THE LION',
        author: 'Gav Thorpe',
        timeline: '960.M30',
        sortOrder: 0.36,
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Dark Angels"],
        anthology: 'Tales of Heresy',
        sortOrder: 10.5,
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Main Characters:</strong> Dark Angels warriors<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `The Dark Angels answer their Primarch's call during the Heresy. This story explores the I Legion's loyalty and their response to the galaxy-spanning civil war, as they navigate the shadows and secrets that have always defined them.`,
        blurbSafe: `Dark Angels warriors respond to their Primarch's summons during the Heresy, showcasing the I Legion's loyalty amid the galaxy's darkest hour.`
    },
    'tales-of-heresy-the-last-church': {
        number: 'X.6',
        title: 'THE LAST CHURCH',
        author: 'Graham McNeill',
        timeline: '730.M30',
        sortOrder: 0.1,
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Emperor"],
        anthology: 'Tales of Heresy',
        sortOrder: 10.6,
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Timeline:</strong> 730s.M30 (Before the Great Crusade)<br>
            <strong>Main Characters:</strong> The Emperor, Uriah (Last Priest)
        `,
        blurb: `Set on Terra before the Great Crusade, the Emperor visits the last church on Earth. In a philosophical debate with the last priest, Uriah, the Emperor reveals his vision for humanity—one without gods or faith. This story explores the Emperor's rejection of religion and the Imperial Truth that would define the Great Crusade, ending with the church's destruction and the priest's death.`,
        blurbSafe: `Before the Great Crusade begins, a conversation takes place between a wanderer and the last priest on Terra. Their philosophical debate explores faith, reason, and humanity's future among the stars.`
    },
    'tales-of-heresy-after-deshea': {
        number: 'X.7',
        title: 'AFTER DESH\'EA',
        author: 'Matthew Farrer',
        timeline: '899.M30',
        sortOrder: 0.2,
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["World Eaters"],
        anthology: 'Tales of Heresy',
        sortOrder: 10.7,
        details: `
            <strong>Author:</strong> Matthew Farrer<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> World Eaters<br>
            <strong>Main Characters:</strong> Angron, Khârn<br>
            <strong>Timeline:</strong> Shortly after Angron's discovery
        `,
        blurb: `Angron's violent first encounter with his Legion after the Emperor tore him from his homeworld. Khârn and the War Hounds arrive to find their Primarch seething with rage and grief, forced to abandon his gladiator brothers to their deaths. This story explores Angron's tragedy and the seeds of hatred that would doom the XII Legion.`,
        blurbSafe: `The newly discovered Angron meets his Legion for the first time. Still grieving those he left behind on his homeworld, the Primarch's rage threatens to consume both himself and his sons.`
    },
    // AGE OF DARKNESS ANTHOLOGY - Stories
    'age-of-darkness-rules-of-engagement': {
        number: 'XVI.1',
        title: 'RULES OF ENGAGEMENT',
        author: 'Graham McNeill',
        timeline: '008.M31',
        sortOrder: 8.02,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Ultramarines"],
        anthology: 'Age of Darkness',
        sortOrder: 16.1,
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `An Ultramarines story exploring the rigid codes and doctrines that define Guilliman's sons. As the Heresy rages, the XIII Legion must adapt their rules of warfare to face an enemy that knows them intimately—their own traitorous brothers.`,
        blurbSafe: `An Ultramarines tale examining how the XIII Legion's strict doctrines are tested when facing former brothers in the crucible of civil war.`
    },
    'age-of-darkness-liars-due': {
        number: 'XVI.2',
        title: 'LIAR\'S DUE',
        author: 'James Swallow',
        timeline: '008.M31',
        sortOrder: 8.03,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Various"],
        anthology: 'Age of Darkness',
        sortOrder: 16.2,
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `A tale of deception and truth during the Age of Darkness. In a war where brother fights brother, lies become weapons as deadly as any bolter, and the price of falsehood may be damnation itself.`,
        blurbSafe: `A story exploring deception and consequence during the Heresy, where lies become weapons and truth is a rare commodity in the darkness.`
    },
    'age-of-darkness-forgotten-sons': {
        number: 'XVI.3',
        title: 'FORGOTTEN SONS',
        author: 'Nick Kyme',
        timeline: '008.M31',
        sortOrder: 8.04,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Salamanders"],
        anthology: 'Age of Darkness',
        sortOrder: 16.3,
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Salamanders warriors struggle with being forgotten in the galaxy's greatest conflict. Cut off from their Legion and Primarch after Isstvan, these sons of Vulkan must find purpose in a war that has left them behind.`,
        blurbSafe: `Salamanders warriors, separated from their Legion, seek purpose and meaning while fighting in a war where they feel forgotten and abandoned.`
    },
    'age-of-darkness-the-last-remembrancer': {
        number: 'XVI.4',
        title: 'THE LAST REMEMBRANCER',
        author: 'John French',
        timeline: '009.M31',
        sortOrder: 9.03,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Remembrancers"],
        anthology: 'Age of Darkness',
        sortOrder: 16.4,
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `The story of a Remembrancer struggling to document the Heresy's horrors. As the Great Crusade's artistic chroniclers are purged, one remains to bear witness to humanity's darkest hour, knowing their testimony may be the last.`,
        blurbSafe: `A Remembrancer attempts to chronicle the Heresy's events, bearing witness to humanity's civil war while knowing they may be the last to tell the tale.`
    },
    'age-of-darkness-rebirth': {
        number: 'XVI.5',
        title: 'REBIRTH',
        author: 'Chris Wraight',
        timeline: '004-005.M31',
        sortOrder: 4.1,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Various"],
        anthology: 'Age of Darkness',
        sortOrder: 16.5,
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `A story of transformation and renewal amid the Heresy's devastation. As the old Imperium burns, something new struggles to be born from the ashes—but whether it will be savior or monster remains to be seen.`,
        blurbSafe: `A tale of transformation during the Heresy, exploring how destruction can lead to rebirth, though what emerges may not be what was hoped for.`
    },
    'age-of-darkness-face-of-treachery': {
        number: 'XVI.6',
        title: 'THE FACE OF TREACHERY',
        author: 'Gav Thorpe',
        timeline: '006.M31',
        sortOrder: 6.1,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Various"],
        anthology: 'Age of Darkness',
        sortOrder: 16.6,
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Betrayal wears many faces during the Heresy. This story explores the personal nature of treachery, showing how betrayal cuts deepest when it comes from those closest to us—brothers, friends, and comrades in arms.`,
        blurbSafe: `A tale examining the personal cost of betrayal, showing how treachery cuts deepest when perpetrated by those we trust most.`
    },
    'age-of-darkness-little-horus': {
        number: 'XVI.7',
        title: 'LITTLE HORUS',
        author: 'Dan Abnett',
        timeline: '008.M31',
        sortOrder: 8.01,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Sons of Horus"],
        anthology: 'Age of Darkness',
        sortOrder: 16.7,
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Sons of Horus<br>
            <strong>Main Characters:</strong> Horus Aximand (Little Horus)<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Horus Aximand, called 'Little Horus' for his resemblance to the Warmaster, grapples with his role in the rebellion. Once a proud member of the Mournival, he must now reconcile his loyalty to Horus with the horror of what his Legion has become.`,
        blurbSafe: `Horus Aximand, called Little Horus, struggles with his role in the rebellion and what his Legion has become since Isstvan.`
    },
    'age-of-darkness-iron-within': {
        number: 'XVI.8',
        title: 'THE IRON WITHIN',
        author: 'Rob Sanders',
        timeline: '006-007.M31',
        sortOrder: 6.7,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Iron Warriors"],
        anthology: 'Age of Darkness',
        sortOrder: 16.8,
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Iron Warriors<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `The Iron Warriors prove their cold brutality in a tale of siege warfare and bitter determination. Perturabo's sons demonstrate why they are the masters of attrition warfare, grinding down their enemies with mechanical precision and ruthless efficiency.`,
        blurbSafe: `The Iron Warriors demonstrate their mastery of siege warfare, showcasing the cold, methodical brutality that defines the IV Legion.`
    },
    'age-of-darkness-savage-weapons': {
        number: 'XVI.9',
        title: 'SAVAGE WEAPONS',
        author: 'Aaron Dembski-Bowden',
        timeline: '007-009.M31',
        sortOrder: 7.08,
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Dark Angels", "Night Lords"],
        anthology: 'Age of Darkness',
        sortOrder: 16.9,
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legions:</strong> Dark Angels, Night Lords<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Konrad Curze<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Lion El'Jonson hunts Konrad Curze through the darkness. Two Primarchs clash in a brutal confrontation that reveals the savage nature beneath their veneer of civilization. The Lion pursues his mad brother, but Curze's visions of the future make him a quarry unlike any other.`,
        blurbSafe: `Lion El'Jonson pursues Konrad Curze in a hunt that becomes a brutal clash between two Primarchs, revealing the savage nature both share.`
    },
    // THE PRIMARCHS ANTHOLOGY - Novellas
    'the-primarchs-reflection-crackd': {
        number: 'XX.1',
        title: 'THE REFLECTION CRACK\'D',
        author: 'Graham McNeill',
        timeline: '006.M31',
        sortOrder: 6.92,
        coverImage: 'images/the-primarchs.jpg',
        legions: ["Emperor's Children"],
        anthology: 'The Primarchs',
        sortOrder: 20.1,
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Primarchs Anthology<br>
            <strong>Legion:</strong> Emperor's Children<br>
            <strong>Primarch:</strong> Fulgrim<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Fulgrim's corruption reaches its terrible conclusion as the daemon within him claims full control. Once the most beautiful and noble of the Emperor's sons, the Phoenician becomes a twisted reflection of his former glory. This novella explores the final stages of Fulgrim's damnation and his transformation into a Daemon Prince of Slaanesh.`,
        blurbSafe: `The Phoenician's transformation continues as he struggles with the corruption consuming him. The perfect reflection begins to crack, revealing something terrible beneath.`
    },
    'the-primarchs-feat-of-iron': {
        number: 'XX.2',
        title: 'FEAT OF IRON',
        author: 'Nick Kyme',
        timeline: '001.M31',
        sortOrder: 1.1,
        coverImage: 'images/the-primarchs.jpg',
        legions: ["Iron Hands"],
        anthology: 'The Primarchs',
        sortOrder: 20.2,
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Primarchs Anthology<br>
            <strong>Legion:</strong> Iron Hands<br>
            <strong>Primarch:</strong> Ferrus Manus<br>
            <strong>Timeline:</strong> Before and during Isstvan V
        `,
        blurb: `A chronicle of Ferrus Manus's iron will and the doctrine of strength through flesh's weakness. The Gorgon's philosophy of perfection through cybernetic enhancement defined his Legion. This novella explores Ferrus before his death at Isstvan V, showing the Primarch's character and his fateful friendship with Fulgrim that would end in ultimate betrayal.`,
        blurbSafe: `The story of Ferrus Manus, the Gorgon, exploring the Iron Hands' philosophy and their Primarch's uncompromising nature before the tragedy of Isstvan V.`
    },
    'the-primarchs-the-lion': {
        number: 'XX.3',
        title: 'THE LION',
        author: 'Gav Thorpe',
        timeline: '007-009.M31',
        sortOrder: 7.09,
        coverImage: 'images/the-primarchs.jpg',
        legions: ["Dark Angels"],
        anthology: 'The Primarchs',
        sortOrder: 20.3,
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Primarchs Anthology<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Primarch:</strong> Lion El'Jonson<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Konrad Curze<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Lion El'Jonson pursues the traitor Konrad Curze across the stars in a deadly game of cat and mouse. The two Primarchs clash repeatedly, each encounter more brutal than the last. The Lion's pursuit becomes an obsession, revealing the dark knight's capacity for vengeance and the secrets he keeps from his own Legion about Caliban's fate.`,
        blurbSafe: `Lion El'Jonson hunts the traitor Konrad Curze across the galaxy. The pursuit becomes an obsession, testing the Dark Angels' Primarch's resolve and secrets.`
    },
    'the-primarchs-serpent-beneath': {
        number: 'XX.4',
        title: 'THE SERPENT BENEATH',
        author: 'Rob Sanders',
        timeline: '007.M31',
        sortOrder: 7.10,
        coverImage: 'images/the-primarchs.jpg',
        legions: ["Alpha Legion"],
        anthology: 'The Primarchs',
        sortOrder: 20.4,
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Primarchs Anthology<br>
            <strong>Legion:</strong> Alpha Legion<br>
            <strong>Primarch:</strong> Alpharius Omegon<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `The Alpha Legion's machinations reach new depths of complexity in a tale of secrets within secrets. Alpharius Omegon's true allegiance remains impossible to discern as the twin Primarchs play their hidden games. No one, not even their own Legion, knows whether they fight for the Emperor, Horus, or some third option known only to themselves.`,
        blurbSafe: `The Alpha Legion conducts mysterious operations, with even their own knowing little of their Primarch's true plans and allegiances during the Heresy.`
    },
    // SHADOWS OF TREACHERY ANTHOLOGY - Stories
    'shadows-of-treachery-crimson-fist': {
        number: 'XXII.1',
        title: 'THE CRIMSON FIST',
        author: 'John French',
        timeline: '007.M31',
        sortOrder: 7.01,
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Imperial Fists"],
        anthology: 'Shadows of Treachery',
        sortOrder: 22.1,
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Imperial Fists<br>
            <strong>Main Characters:</strong> Alexis Polux<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Captain Alexis Polux and the Imperial Fists' Retribution Fleet face impossible odds at Phall. Massively outnumbered by the Iron Warriors, Polux must use cunning and courage to survive Perturabo's trap. This novella chronicles one of the Heresy's most desperate void battles and establishes Polux as one of the VII Legion's greatest heroes.`,
        blurbSafe: `Captain Alexis Polux and his Imperial Fists face overwhelming Iron Warriors forces at Phall in a desperate void battle that will test their resolve.`
    },
    'shadows-of-treachery-dark-king': {
        number: 'XXII.2',
        title: 'THE DARK KING',
        author: 'Graham McNeill',
        timeline: '984.M30',
        sortOrder: 0.5,
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Night Lords"],
        anthology: 'Shadows of Treachery',
        sortOrder: 22.2,
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Night Lords<br>
            <strong>Primarch:</strong> Konrad Curze<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Konrad Curze's madness deepens as his prophetic visions consume him. The Night Haunter sees his own death approaching and the damnation of his Legion. This story explores Curze's descent into darkness and his transformation from the Emperor's justice into something far more terrible.`,
        blurbSafe: `Konrad Curze's visions of the future torment him, driving the Night Haunter deeper into madness as he sees his own fate approaching.`
    },
    'shadows-of-treachery-lightning-tower': {
        number: 'XXII.3',
        title: 'THE LIGHTNING TOWER',
        author: 'Dan Abnett',
        timeline: '005-006.M31',
        sortOrder: 5.5,
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Imperial Palace"],
        anthology: 'Shadows of Treachery',
        sortOrder: 22.3,
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Main Characters:</strong> Rogal Dorn<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Rogal Dorn oversees Terra's fortification from the Lightning Tower, preparing the Imperial Palace for the coming siege. As he transforms the Throneworld into an impregnable fortress, Dorn must balance his duty to defend with the knowledge that his brother Primarchs march to destroy everything he has built.`,
        blurbSafe: `Rogal Dorn works tirelessly to fortify Terra against the coming siege, transforming the Imperial Palace into an impregnable fortress.`
    },
    'shadows-of-treachery-kaban-project': {
        number: 'XXII.4',
        title: 'THE KABAN PROJECT',
        author: 'Graham McNeill',
        timeline: '003-004.M31',
        sortOrder: 3,
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Mechanicum"],
        anthology: 'Shadows of Treachery',
        sortOrder: 22.4,
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Faction:</strong> Mechanicum<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `A dangerous AI experiment on Mars threatens to unleash catastrophe during the Mechanicum's civil war. The Kaban Project represents the forbidden knowledge that the Mechanicum both seeks and fears. This story delves into the schism on Mars and the terrible price of technological hubris.`,
        blurbSafe: `A forbidden AI project on Mars threatens disaster during the Mechanicum's civil war, exploring the dangerous pursuit of forbidden knowledge.`
    },
    'shadows-of-treachery-ravens-flight': {
        number: 'XXII.5',
        title: 'RAVEN\'S FLIGHT',
        author: 'Gav Thorpe',
        timeline: '006.M31',
        sortOrder: 6.2,
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Raven Guard"],
        anthology: 'Shadows of Treachery',
        sortOrder: 22.5,
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Raven Guard<br>
            <strong>Primarch:</strong> Corvus Corax<br>
            <strong>Timeline:</strong> After Isstvan V
        `,
        blurb: `Corvus Corax leads the shattered remnants of the Raven Guard in a desperate escape from Isstvan V. Hunted by traitor forces and with his Legion decimated, the Ravenlord must use all his cunning to save his surviving sons. This story chronicles the XIX Legion's darkest hour and their flight to safety.`,
        blurbSafe: `Corvus Corax leads the surviving Raven Guard in a desperate escape from Isstvan V, hunted by traitors with his Legion shattered.`
    },
    'shadows-of-treachery-death-of-silversmith': {
        number: 'XXII.6',
        title: 'DEATH OF A SILVERSMITH',
        author: 'Graham McNeill',
        timeline: '000.M31',
        sortOrder: 1,
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Various"],
        anthology: 'Shadows of Treachery',
        sortOrder: 22.6,
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `A tale of artistry and death during the Heresy. Even in the Age of Darkness, beauty and craftsmanship persist, but they come at a terrible price. This story explores how war destroys not just warriors but the culture and art they once protected.`,
        blurbSafe: `A story exploring how the Heresy destroys not just warriors but the artists and craftsmen whose work once brought beauty to the Imperium.`
    },
    'shadows-of-treachery-prince-of-crows': {
        number: 'XXII.7',
        title: 'PRINCE OF CROWS',
        author: 'Aaron Dembski-Bowden',
        timeline: '009.M31',
        sortOrder: 9.01,
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Night Lords"],
        anthology: 'Shadows of Treachery',
        sortOrder: 22.7,
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Night Lords<br>
            <strong>Main Characters:</strong> Konrad Curze, Sevatar<br>
            <strong>Timeline:</strong> During the Horus Heresy
        `,
        blurb: `Sevatar, First Captain of the Night Lords, navigates his Primarch's madness and the Lion's relentless pursuit. As Konrad Curze descends further into insanity, Sevatar must hold the VIII Legion together while dealing with prophecies, betrayal, and the knowledge that their Primarch welcomes his own doom. This acclaimed novella explores the Night Lords' darkest nature and the tragedy of Curze's fall.`,
        blurbSafe: `First Captain Sevatar tries to hold the Night Lords together as Konrad Curze's madness deepens and the Lion hunts them across the stars.`
    },
    // MARK OF CALTH ANTHOLOGY - Stories
    'mark-of-calth-shards-of-erebus': {
        number: 'XXV.1',
        title: 'THE SHARDS OF EREBUS',
        author: 'Guy Haley',
        timeline: '006-007.M31',
        sortOrder: 6.8,
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Ultramarines", "Word Bearers"],
        anthology: 'Mark of Calth',
        sortOrder: 25.1,
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legions:</strong> Ultramarines, Word Bearers<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `The aftermath of Erebus's treachery at Calth. The First Chaplain of the Word Bearers orchestrated the betrayal, and now Ultramarines hunt for vengeance against him and his dark works. The shards of Erebus's schemes litter Calth's ruins.`,
        blurbSafe: `Ultramarines seek vengeance for Erebus's treachery at Calth, hunting through the ruins for the architect of their betrayal.`
    },
    'mark-of-calth-calth-that-was': {
        number: 'XXV.2',
        title: 'CALTH THAT WAS',
        author: 'Graham McNeill',
        timeline: '007.M31',
        sortOrder: 7.02,
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Ultramarines"],
        anthology: 'Mark of Calth',
        sortOrder: 25.2,
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Main Characters:</strong> Remus Ventanus<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `Captain Remus Ventanus leads Ultramarines through Calth's poisoned surface, remembering the jewel world that once was. The beautiful planet has been transformed into a hellscape, and Ventanus must destroy the Word Bearers forces still operating on the surface while mourning everything lost.`,
        blurbSafe: `Remus Ventanus leads Ultramarines through Calth's ruins, fighting Word Bearers while mourning the beautiful world that was destroyed by betrayal.`
    },
    'mark-of-calth-dark-heart': {
        number: 'XXV.3',
        title: 'DARK HEART',
        author: 'Anthony Reynolds',
        timeline: '007.M31',
        sortOrder: 7.03,
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Word Bearers"],
        anthology: 'Mark of Calth',
        sortOrder: 25.3,
        details: `
            <strong>Author:</strong> Anthony Reynolds<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Main Characters:</strong> Marduk<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `Marduk of the Word Bearers rises through the ranks during the Calth assault. This story explores the XVII Legion's perspective on the betrayal, showing how Lorgar's sons embrace their dark faith and the rewards it brings to the faithful.`,
        blurbSafe: `A Word Bearers warrior rises through the ranks during the Calth assault, showing the traitor perspective on the betrayal.`
    },
    'mark-of-calth-the-traveller': {
        number: 'XXV.4',
        title: 'THE TRAVELLER',
        author: 'David Annandale',
        timeline: '007.M31',
        sortOrder: 7.04,
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Ultramarines"],
        anthology: 'Mark of Calth',
        sortOrder: 25.4,
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `A survivor of the orbital bombardment wanders Calth's poisoned surface, bearing witness to the betrayal's aftermath. This story shows the Heresy's impact on ordinary humans caught in the Space Marines' war.`,
        blurbSafe: `A survivor wanders Calth's poisoned surface after the bombardment, witnessing the devastation and fighting for survival.`
    },
    'mark-of-calth-deeper-darkness': {
        number: 'XXV.5',
        title: 'A DEEPER DARKNESS',
        author: 'Rob Sanders',
        timeline: '007-008.M31',
        sortOrder: 7.07,
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Ultramarines", "Word Bearers"],
        anthology: 'Mark of Calth',
        sortOrder: 25.5,
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Main Characters:</strong> Hylas Pelion, Ungol Shax<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `Ultramarine Hylas Pelion hunts Dark Apostle Ungol Shax through Calth's underground arcologies. The pursuit becomes a deadly game of cat and mouse in the darkness beneath the planet's surface.`,
        blurbSafe: `An Ultramarine hunts a Word Bearers Dark Apostle through Calth's underground, in a deadly pursuit through the darkness.`
    },
    'mark-of-calth-underworld-war': {
        number: 'XXV.6',
        title: 'THE UNDERWORLD WAR',
        author: 'Aaron Dembski-Bowden',
        timeline: '007-009.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Ultramarines", "Word Bearers"],
        anthology: 'Mark of Calth',
        sortOrder: 25.6,
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Main Characters:</strong> Vakrah Jal<br>
            <strong>Timeline:</strong> Seven years after Calth (014.M31)
        `,
        blurb: `Seven years after the betrayal, the Underworld War continues in Calth's depths. Word Bearer Vakrah Jal navigates the endless guerrilla conflict, showing how the battle for Calth never truly ended—it just moved underground into an eternal war of attrition.`,
        blurbSafe: `Seven years after the betrayal, the war continues in Calth's underground. A Word Bearer experiences the endless conflict that has consumed the planet's depths.`
    },
    'mark-of-calth-athame': {
        number: 'XXV.7',
        title: 'ATHAME',
        author: 'John French',
        timeline: '800.M30',
        sortOrder: 0.37,
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Various"],
        anthology: 'Mark of Calth',
        sortOrder: 25.7,
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Timeline:</strong> Multiple eras
        `,
        blurb: `A ritual dagger's history spans millennia, from ancient Terra through the Great Crusade to the Heresy. The athame passes through many hands, each owner playing their role in the galaxy's fate. This story weaves together multiple timelines to reveal the weapon's dark significance.`,
        blurbSafe: `A ritual dagger's journey through history, passing through many hands across millennia and playing roles in pivotal moments.`
    },
    'mark-of-calth-unmarked': {
        number: 'XXV.8',
        title: 'UNMARKED',
        author: 'Dan Abnett',
        timeline: '007.M31',
        sortOrder: 7.27,
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Perpetuals"],
        anthology: 'Mark of Calth',
        sortOrder: 25.8,
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Main Characters:</strong> Oll Persson<br>
            <strong>Timeline:</strong> Multiple eras
        `,
        blurb: `Oll Persson, the Perpetual soldier, journeys through time and space. His travels span from Verdun to 73 Easting and beyond, revealing the ancient warrior's role in humanity's history and his connection to the Emperor's plans.`,
        blurbSafe: `An immortal soldier's journey through human history, from ancient battles to the far future, revealing connections to the Emperor's plans.`
    },
    // LEGACIES OF BETRAYAL ANTHOLOGY - Stories
    'legacies-brotherhood-storm': {
        number: 'XXXI.1',
        title: 'BROTHERHOOD OF THE STORM',
        author: 'Chris Wraight',
        timeline: '007.M31',
        sortOrder: 7.17,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["White Scars"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.1,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Novella<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> White Scars<br><strong>Timeline:</strong> During the Heresy`,
        blurb: `The White Scars must choose their allegiance as the Heresy divides the galaxy. The V Legion's isolation has kept them from the conflict, but now they must decide whether to follow Horus or remain loyal to the Emperor.`,
        blurbSafe: `The White Scars face a critical choice as news of the Heresy reaches them, forcing the V Legion to decide their allegiance in the civil war.`
    },
    'legacies-serpent': {
        number: 'XXXI.2',
        title: 'SERPENT',
        author: 'John French',
        timeline: '004.M31',
        sortOrder: 4.3,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Alpha Legion"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.2,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Alpha Legion`,
        blurb: `The Alpha Legion weaves its schemes within schemes, operating in the shadows with motives known only to themselves.`,
        blurbSafe: `An Alpha Legion tale of deception and hidden agendas during the Heresy.`
    },
    'legacies-hunters-moon': {
        number: 'XXXI.3',
        title: 'HUNTER\'S MOON',
        author: 'Guy Haley',
        timeline: '004.M31',
        sortOrder: 4.4,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["White Scars"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.3,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> White Scars`,
        blurb: `A White Scars hunting mission during the Heresy, showcasing the V Legion's swift and deadly warfare style.`,
        blurbSafe: `White Scars warriors conduct a hunt, demonstrating their mastery of fast-strike warfare.`
    },
    'legacies-veritas-ferrum': {
        number: 'XXXI.4',
        title: 'VERITAS FERRUM',
        author: 'David Annandale',
        timeline: '006.M31',
        sortOrder: 6.93,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Iron Hands"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.4,
        details: `<strong>Author:</strong> David Annandale<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Iron Hands`,
        blurb: `The Iron Hands' philosophy of flesh's weakness is tested in the aftermath of their Primarch's death.`,
        blurbSafe: `Iron Hands warriors grapple with their Legion's doctrine after losing their Primarch at Isstvan.`
    },
    'legacies-riven': {
        number: 'XXXI.5',
        title: 'RIVEN',
        author: 'John French',
        timeline: '011.M31',
        sortOrder: 11.3,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Various"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.5,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal`,
        blurb: `A tale of division and broken bonds as the Heresy tears warriors apart.`,
        blurbSafe: `The Heresy's divisions tear apart bonds of brotherhood and loyalty.`
    },
    'legacies-strike-fade': {
        number: 'XXXI.6',
        title: 'STRIKE AND FADE',
        author: 'Guy Haley',
        timeline: '006.M31',
        sortOrder: 6.94,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Raven Guard"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.6,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Raven Guard`,
        blurb: `Raven Guard survivors employ hit-and-run tactics against superior traitor forces.`,
        blurbSafe: `Shattered Raven Guard warriors use guerrilla warfare tactics in their fight against the traitors.`
    },
    'legacies-honour-dead': {
        number: 'XXXI.7',
        title: 'HONOUR TO THE DEAD',
        author: 'Gav Thorpe',
        timeline: '007.M31',
        sortOrder: 7.18,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Ultramarines"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.7,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Ultramarines`,
        blurb: `Ultramarines honor their fallen brothers while seeking vengeance for betrayal.`,
        blurbSafe: `Ultramarines pay tribute to their dead while pursuing justice for the Word Bearers' treachery.`
    },
    'legacies-butchers-nails': {
        number: 'XXXI.8',
        title: 'BUTCHER\'S NAILS',
        author: 'Aaron Dembski-Bowden',
        timeline: '007-008.M31',
        sortOrder: 7.28,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["World Eaters"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.8,
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> World Eaters<br><strong>Main Characters:</strong> Angron, Lorgar`,
        blurb: `The tragic bond between Angron and Lorgar, as the Word Bearers Primarch tries to understand the World Eaters' cursed existence with the Butcher's Nails.`,
        blurbSafe: `Lorgar attempts to understand Angron's suffering and the curse of the Butcher's Nails that drives the World Eaters.`
    },
    'legacies-warmaster': {
        number: 'XXXI.9',
        title: 'WARMASTER',
        author: 'John French',
        timeline: '008.M31',
        sortOrder: 8.13,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Sons of Horus"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.9,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Sons of Horus`,
        blurb: `A glimpse into Horus's command and the weight of leading the rebellion against the Emperor.`,
        blurbSafe: `An exploration of Horus's role as Warmaster and the burden of leading the rebellion.`
    },
    'legacies-kryptos': {
        number: 'XXXI.10',
        title: 'KRYPTOS',
        author: 'Graham McNeill',
        timeline: '007.M31',
        sortOrder: 7.19,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Mechanicum"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.10,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Faction:</strong> Mechanicum`,
        blurb: `Secrets and forbidden knowledge on Mars during the Mechanicum's civil war.`,
        blurbSafe: `A tale of hidden knowledge and dangerous secrets during Mars's schism.`
    },
    'legacies-wolfs-claw': {
        number: 'XXXI.11',
        title: 'WOLF\'S CLAW',
        author: 'Chris Wraight',
        timeline: '007.M31',
        sortOrder: 7.29,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Space Wolves"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.11,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Space Wolves`,
        blurb: `Space Wolves unleash their savage fury in the Emperor's name during the Heresy.`,
        blurbSafe: `The VI Legion demonstrates their ferocity as they fight for the Emperor against the traitors.`
    },
    'legacies-thief-revelations': {
        number: 'XXXI.12',
        title: 'THIEF OF REVELATIONS',
        author: 'Graham McNeill',
        timeline: '004.M31',
        sortOrder: 4.6,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Thousand Sons"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.12,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Thousand Sons`,
        blurb: `The Thousand Sons seek forbidden knowledge, stealing secrets that may doom or save them.`,
        blurbSafe: `Thousand Sons sorcerers pursue dangerous knowledge in their quest for understanding.`
    },
    'legacies-divine-word': {
        number: 'XXXI.13',
        title: 'THE DIVINE WORD',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        sortOrder: 8.14,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Word Bearers"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.13,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Word Bearers`,
        blurb: `Word Bearers spread their dark faith across the galaxy, converting or destroying all who resist.`,
        blurbSafe: `The XVII Legion preaches their corrupted faith, forcing conversion or death upon those they encounter.`
    },
    'legacies-lucius': {
        number: 'XXXI.14',
        title: 'LUCIUS: THE ETERNAL BLADEMASTER',
        author: 'Graham McNeill',
        timeline: '009.M31',
        sortOrder: 9.10,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Emperor's Children"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.14,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Main Characters:</strong> Lucius`,
        blurb: `Lucius pursues perfection in swordsmanship, his pride and skill marking him for damnation.`,
        blurbSafe: `The master swordsman Lucius seeks perfection in combat, driven by pride and the pursuit of supremacy.`
    },
    'legacies-kharn': {
        number: 'XXXI.15',
        title: 'KHÂRN: THE EIGHTFOLD PATH',
        author: 'Anthony Reynolds',
        timeline: '008.M31',
        sortOrder: 8.15,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["World Eaters"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.15,
        details: `<strong>Author:</strong> Anthony Reynolds<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Main Characters:</strong> Khârn`,
        blurb: `Khârn walks the path to damnation, his descent into bloodlust accelerating as the Heresy rages.`,
        blurbSafe: `Khârn's transformation continues as he descends further into violence and rage.`
    },
    'legacies-cypher': {
        number: 'XXXI.16',
        title: 'CYPHER: GUARDIAN OF ORDER',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        sortOrder: 8.16,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Dark Angels"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.16,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Main Characters:</strong> Cypher`,
        blurb: `The mysterious warrior who would become Cypher serves the Dark Angels during the Heresy.`,
        blurbSafe: `A Dark Angels warrior serves his Legion during the Heresy, on a path that will lead to legend and mystery.`
    },
    'legacies-heart-conqueror': {
        number: 'XXXI.17',
        title: 'HEART OF THE CONQUEROR',
        author: 'Aaron Dembski-Bowden',
        timeline: '008.M31',
        sortOrder: 8.17,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["World Eaters"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.17,
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> World Eaters`,
        blurb: `Aboard the Conqueror, the World Eaters' flagship, the Legion's descent into madness accelerates.`,
        blurbSafe: `Life aboard the World Eaters' flagship reveals the XII Legion's transformation into mindless berserkers.`
    },
    'legacies-censure': {
        number: 'XXXI.18',
        title: 'CENSURE',
        author: 'Nick Kyme',
        timeline: '009.M31',
        sortOrder: 9.04,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Salamanders"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.18,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Legion:</strong> Salamanders`,
        blurb: `Salamanders face judgment and condemnation as the Heresy forces hard choices upon them.`,
        blurbSafe: `Salamanders warriors confront difficult decisions and consequences during the civil war.`
    },
    'legacies-bjorn': {
        number: 'XXXI.19',
        title: 'BJORN: LONE WOLF',
        author: 'Chris Wraight',
        timeline: '010.M31',
        sortOrder: 10.6,
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Space Wolves"],
        anthology: 'Legacies of Betrayal',
        sortOrder: 31.19,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Legacies of Betrayal<br><strong>Main Characters:</strong> Bjorn`,
        blurb: `The warrior who would become the Fell-Handed fights during the Heresy, earning his legendary status.`,
        blurbSafe: `A Space Wolves warrior fights alone during the Heresy, beginning his path to becoming a legend.`
    },
    // WAR WITHOUT END ANTHOLOGY - Stories
    'war-sermon-exodus': {
        number: 'XXXIII.1',
        title: 'SERMON OF EXODUS',
        author: 'David Annandale',
        timeline: '004.M31',
        sortOrder: 4.7,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Word Bearers"],
        anthology: 'War Without End',
        sortOrder: 33.1,
        details: `<strong>Author:</strong> David Annandale<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End`,
        blurb: `Word Bearers preach their dark gospel during the endless war.`,
        blurbSafe: `The XVII Legion spreads their corrupted faith across the warzone.`
    },
    'war-howl-hearthworld': {
        number: 'XXXIII.2',
        title: 'HOWL OF THE HEARTHWORLD',
        author: 'Aaron Dembski-Bowden',
        timeline: '004.M31',
        sortOrder: 4.5,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Space Wolves"],
        anthology: 'War Without End',
        sortOrder: 33.2,
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> Space Wolves`,
        blurb: `The Space Wolves defend their homeworld against traitor forces.`,
        blurbSafe: `The VI Legion fights to protect Fenris from the Heresy's touch.`
    },
    'war-lord-red-sands': {
        number: 'XXXIII.3',
        title: 'LORD OF THE RED SANDS',
        author: 'Aaron Dembski-Bowden',
        timeline: '005.M31',
        sortOrder: 5.1,
        coverImage: 'images/war-without-end.jpg',
        legions: ["World Eaters"],
        anthology: 'War Without End',
        sortOrder: 33.3,
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Main Characters:</strong> Angron`,
        blurb: `Angron's past as a gladiator slave haunts him as the World Eaters descend into madness.`,
        blurbSafe: `The Red Angel's tragic past is revealed as his Legion embraces bloodshed.`
    },
    'war-black-oculus': {
        number: 'XXXIII.4',
        title: 'BLACK OCULUS',
        author: 'John French',
        timeline: '010-011.M31',
        sortOrder: 10.7,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Various"],
        anthology: 'War Without End',
        sortOrder: 33.4,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End`,
        blurb: `A tale of void warfare and dark secrets in the endless conflict.`,
        blurbSafe: `Ships clash in the darkness between stars.`
    },
    'war-laurel-defiance': {
        number: 'XXXIII.5',
        title: 'THE LAUREL OF DEFIANCE',
        author: 'Guy Haley',
        timeline: '009.M31',
        sortOrder: 9.07,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Various"],
        anthology: 'War Without End',
        sortOrder: 33.5,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End`,
        blurb: `Loyalists stand defiant against overwhelming odds.`,
        blurbSafe: `Warriors refuse to yield despite impossible circumstances.`
    },
    'war-safe-shadowed-place': {
        number: 'XXXIII.6',
        title: 'A SAFE AND SHADOWED PLACE',
        author: 'Guy Haley',
        timeline: '009.M31',
        sortOrder: 9.08,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Various"],
        anthology: 'War Without End',
        sortOrder: 33.6,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End`,
        blurb: `No place remains safe as the Heresy consumes the galaxy.`,
        blurbSafe: `Refuge becomes illusion in a galaxy at war.`
    },
    'war-twisted': {
        number: 'XXXIII.7',
        title: 'TWISTED',
        author: 'Guy Haley',
        timeline: '010.M31',
        sortOrder: 10.8,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Various"],
        anthology: 'War Without End',
        sortOrder: 33.7,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End`,
        blurb: `Corruption warps warriors and worlds alike.`,
        blurbSafe: `The touch of Chaos twists everything it reaches.`
    },
    'war-artefacts': {
        number: 'XXXIII.8',
        title: 'ARTEFACTS',
        author: 'Nick Kyme',
        timeline: '006.M31',
        sortOrder: 6.95,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Salamanders"],
        anthology: 'War Without End',
        sortOrder: 33.8,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> Salamanders`,
        blurb: `Salamanders recover precious relics from the war's devastation.`,
        blurbSafe: `The XVIII Legion seeks to preserve artifacts from destruction.`
    },
    'war-phoenician': {
        number: 'XXXIII.9',
        title: 'THE PHOENICIAN',
        author: 'Nick Kyme',
        timeline: '566.006.M31',
        sortOrder: 6.4,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Emperor's Children"],
        anthology: 'War Without End',
        sortOrder: 33.9,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Primarch:</strong> Fulgrim`,
        blurb: `Fulgrim's corruption reaches new depths of depravity.`,
        blurbSafe: `The Phoenician's fall into darkness continues.`
    },
    'war-imperfect': {
        number: 'XXXIII.10',
        title: 'IMPERFECT',
        author: 'Nick Kyme',
        timeline: '009.M31',
        sortOrder: 9.09,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Emperor's Children"],
        anthology: 'War Without End',
        sortOrder: 33.10,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> Emperor's Children`,
        blurb: `The III Legion's obsession with perfection becomes their damnation.`,
        blurbSafe: `The pursuit of perfection leads only to corruption.`
    },
    'war-chirurgeon': {
        number: 'XXXIII.11',
        title: 'CHIRURGEON',
        author: 'Nick Kyme',
        timeline: '006.M31',
        sortOrder: 7.01,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Emperor's Children"],
        anthology: 'War Without End',
        sortOrder: 33.11,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Main Characters:</strong> Fabius Bile`,
        blurb: `Fabius Bile conducts his dark experiments on the fallen.`,
        blurbSafe: `The Clonelord's twisted surgeries continue unabated.`
    },
    'war-divine-adoratrice': {
        number: 'XXXIII.12',
        title: 'THE DIVINE ADORATRICE',
        author: 'Graham McNeill',
        timeline: '966.M30',
        sortOrder: 0.4,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Thousand Sons"],
        anthology: 'War Without End',
        sortOrder: 33.12,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> Thousand Sons`,
        blurb: `The Thousand Sons delve deeper into sorcery and forbidden lore.`,
        blurbSafe: `Sorcerers of the XV Legion seek dangerous knowledge.`
    },
    'war-wolf-mother': {
        number: 'XXXIII.13',
        title: 'WOLF MOTHER',
        author: 'Graham McNeill',
        timeline: '009.M31',
        sortOrder: 9.11,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Space Wolves"],
        anthology: 'War Without End',
        sortOrder: 33.13,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> Space Wolves`,
        blurb: `The warriors of Fenris honor their traditions during the civil war.`,
        blurbSafe: `Space Wolves maintain their culture amid galaxy-wide treachery.`
    },
    'war-hands-emperor': {
        number: 'XXXIII.14',
        title: 'HANDS OF THE EMPEROR',
        author: 'Rob Sanders',
        timeline: '012.M31',
        sortOrder: 12.1,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Custodian Guard"],
        anthology: 'War Without End',
        sortOrder: 33.14,
        details: `<strong>Author:</strong> Rob Sanders<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Faction:</strong> Custodian Guard`,
        blurb: `The Emperor's golden guardians strike against the traitors.`,
        blurbSafe: `Custodians undertake deadly missions in the Emperor's name.`
    },
    'war-harrowing': {
        number: 'XXXIII.15',
        title: 'THE HARROWING',
        author: 'Rob Sanders',
        timeline: '009.M31',
        sortOrder: 9.15,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Various"],
        anthology: 'War Without End',
        sortOrder: 33.15,
        details: `<strong>Author:</strong> Rob Sanders<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End`,
        blurb: `A harrowing tale of survival in the Heresy's darkest moments.`,
        blurbSafe: `Warriors endure unimaginable horror during the civil war.`
    },
    'war-virtues-sons': {
        number: 'XXXIII.16',
        title: 'VIRTUES OF THE SONS',
        author: 'Andy Smillie',
        timeline: '001.M31',
        sortOrder: 1.3,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Blood Angels"],
        anthology: 'War Without End',
        sortOrder: 33.16,
        details: `<strong>Author:</strong> Andy Smillie<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> Blood Angels`,
        blurb: `Blood Angels struggle to maintain their nobility amid the Heresy's brutality.`,
        blurbSafe: `The IX Legion fights to preserve their virtue in a savage war.`
    },
    'war-all-remains': {
        number: 'XXXIII.17',
        title: 'ALL THAT REMAINS',
        author: 'James Swallow',
        timeline: '009.M31',
        sortOrder: 9.16,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Various"],
        anthology: 'War Without End',
        sortOrder: 33.17,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End`,
        blurb: `In war's aftermath, only ruins and memories remain.`,
        blurbSafe: `The Heresy leaves only devastation in its wake.`
    },
    'war-gunsight': {
        number: 'XXXIII.18',
        title: 'GUNSIGHT',
        author: 'James Swallow',
        timeline: '008.M31',
        sortOrder: 8.18,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Various"],
        anthology: 'War Without End',
        sortOrder: 33.18,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End`,
        blurb: `A sniper's perspective on the endless war.`,
        blurbSafe: `Through a warrior's gunsight, the war stretches to infinity.`
    },
    'war-lions-command': {
        number: 'XXXIII.19',
        title: 'BY THE LION\'S COMMAND',
        author: 'Gav Thorpe',
        timeline: '009.M31',
        sortOrder: 9.17,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Dark Angels"],
        anthology: 'War Without End',
        sortOrder: 33.19,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> Dark Angels`,
        blurb: `Dark Angels follow their Primarch's orders without question.`,
        blurbSafe: `The I Legion executes the Lion's will with absolute obedience.`
    },
    'war-allegiance': {
        number: 'XXXIII.20',
        title: 'ALLEGIANCE',
        author: 'Chris Wraight',
        timeline: '007-009.M31',
        sortOrder: 7.30,
        coverImage: 'images/war-without-end.jpg',
        legions: ["White Scars"],
        anthology: 'War Without End',
        sortOrder: 33.20,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> White Scars`,
        blurb: `White Scars warriors declare their loyalty in the galaxy's hour of betrayal.`,
        blurbSafe: `The V Legion chooses their side in the civil war.`
    },
    'war-daemonology': {
        number: 'XXXIII.21',
        title: 'DAEMONOLOGY',
        author: 'Chris Wraight',
        timeline: '007.M31',
        sortOrder: 7.05,
        coverImage: 'images/war-without-end.jpg',
        legions: ["Thousand Sons"],
        anthology: 'War Without End',
        sortOrder: 33.21,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> War Without End<br><strong>Legion:</strong> Thousand Sons`,
        blurb: `The study of daemons leads the Thousand Sons deeper into damnation.`,
        blurbSafe: `Forbidden knowledge of the warp consumes those who seek it.`
    },
    // EYE OF TERRA ANTHOLOGY - Stories
    'eye-wolf-ash-fire': {
        number: 'XXXV.1',
        title: 'THE WOLF OF ASH AND FIRE',
        author: 'Graham McNeill',
        timeline: '999.M30',
        sortOrder: 0.38,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Space Wolves"],
        anthology: 'Eye of Terra',
        sortOrder: 35.1,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Space Wolves`,
        blurb: `A Space Wolves warrior's tale of fire and fury during the Heresy.`,
        blurbSafe: `The VI Legion unleashes savage warfare against the traitors.`
    },
    'eye-aurelian': {
        number: 'XXXV.2',
        title: 'AURELIAN',
        author: 'Aaron Dembski-Bowden',
        timeline: '006.M31',
        sortOrder: 6.5,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Word Bearers"],
        anthology: 'Eye of Terra',
        sortOrder: 35.2,
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Type:</strong> Novella<br><strong>From:</strong> Eye of Terra<br><strong>Primarch:</strong> Lorgar<br><strong>Main Characters:</strong> Lorgar Aurelian`,
        blurb: `Lorgar's pilgrimage into the Eye of Terror and his transformation into a servant of Chaos. The Urizen seeks the truth about the gods and his place in their grand design.`,
        blurbSafe: `Lorgar journeys into the Eye of Terror, seeking truth about the gods and his destiny.`
    },
    'eye-long-night': {
        number: 'XXXV.3',
        title: 'THE LONG NIGHT',
        author: 'Aaron Dembski-Bowden',
        timeline: 'Various',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Night Lords"],
        anthology: 'Eye of Terra',
        sortOrder: 35.3,
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Night Lords`,
        blurb: `The Night Lords bring terror to their enemies in the darkness.`,
        blurbSafe: `The VIII Legion wages war through fear and shadow.`
    },
    'eye-massacre': {
        number: 'XXXV.4',
        title: 'MASSACRE',
        author: 'Aaron Dembski-Bowden',
        timeline: '006.M31',
        sortOrder: 6.3,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Various"],
        anthology: 'Eye of Terra',
        sortOrder: 35.4,
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Eye of Terra`,
        blurb: `The brutal reality of the Heresy's massacres.`,
        blurbSafe: `A tale of slaughter and betrayal during the civil war.`
    },
    'eye-brotherhood-moon': {
        number: 'XXXV.5',
        title: 'BROTHERHOOD OF THE MOON',
        author: 'Chris Wraight',
        timeline: '007.M31',
        sortOrder: 7.06,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["White Scars"],
        anthology: 'Eye of Terra',
        sortOrder: 35.5,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> White Scars`,
        blurb: `White Scars brotherhood is tested by the Heresy's divisions.`,
        blurbSafe: `The bonds of the V Legion face strain during the civil war.`
    },
    'eye-inheritor': {
        number: 'XXXV.6',
        title: 'INHERITOR',
        author: 'Gav Thorpe',
        timeline: '007-008.M31',
        sortOrder: 7.13,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Dark Angels"],
        anthology: 'Eye of Terra',
        sortOrder: 35.6,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Dark Angels`,
        blurb: `A Dark Angels warrior inherits a burden during the Heresy.`,
        blurbSafe: `The I Legion's secrets weigh heavily on those who bear them.`
    },
    'eye-vorax': {
        number: 'XXXV.7',
        title: 'VORAX',
        author: 'Matthew Farrer',
        timeline: '005-006.M31',
        sortOrder: 5.6,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Mechanicum"],
        anthology: 'Eye of Terra',
        sortOrder: 35.7,
        details: `<strong>Author:</strong> Matthew Farrer<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Eye of Terra<br><strong>Faction:</strong> Mechanicum`,
        blurb: `Battle-automata prowl the battlefields of the Heresy.`,
        blurbSafe: `The Mechanicum's war machines hunt in the shadows.`
    },
    'eye-ironfire': {
        number: 'XXXV.8',
        title: 'IRONFIRE',
        author: 'Rob Sanders',
        timeline: '008.M31',
        sortOrder: 8.19,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Iron Hands"],
        anthology: 'Eye of Terra',
        sortOrder: 35.8,
        details: `<strong>Author:</strong> Rob Sanders<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Iron Hands`,
        blurb: `Iron Hands warriors unleash their fury after Ferrus's death.`,
        blurbSafe: `The X Legion's rage burns hot in vengeance for their Primarch.`
    },
    'eye-red-marked': {
        number: 'XXXV.9',
        title: 'RED-MARKED',
        author: 'Nick Kyme',
        timeline: '007.M31',
        sortOrder: 7.16,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Various"],
        anthology: 'Eye of Terra',
        sortOrder: 35.9,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Eye of Terra`,
        blurb: `Warriors marked for death fight on despite their fate.`,
        blurbSafe: `Those condemned continue their struggle against destiny.`
    },
    'eye-master-first': {
        number: 'XXXV.10',
        title: 'MASTER OF THE FIRST',
        author: 'Gav Thorpe',
        timeline: '007-009.M31',
        sortOrder: 8.20,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Dark Angels"],
        anthology: 'Eye of Terra',
        sortOrder: 35.10,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Dark Angels`,
        blurb: `The Master of the Deathwing faces the Heresy's challenges.`,
        blurbSafe: `Dark Angels' elite confront betrayal and duty.`
    },
    'eye-stratagem': {
        number: 'XXXV.11',
        title: 'STRATAGEM',
        author: 'Nick Kyme',
        timeline: '009.M31',
        sortOrder: 9.05,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Various"],
        anthology: 'Eye of Terra',
        sortOrder: 35.11,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Eye of Terra`,
        blurb: `Tactical genius is tested in the fires of civil war.`,
        blurbSafe: `Strategic minds clash in deadly competition.`
    },
    'eye-sins-father': {
        number: 'XXXV.12',
        title: 'SINS OF THE FATHER',
        author: 'Andy Smillie',
        timeline: '001.M31',
        sortOrder: 1.4,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Blood Angels"],
        anthology: 'Eye of Terra',
        sortOrder: 35.12,
        details: `<strong>Author:</strong> Andy Smillie<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Blood Angels`,
        blurb: `Blood Angels bear the weight of their Primarch's curse.`,
        blurbSafe: `The IX Legion struggles with the flaw in their gene-seed.`
    },
    'eye-herald-sanguinius': {
        number: 'XXXV.13',
        title: 'HERALD OF SANGUINIUS',
        author: 'Andy Smillie',
        timeline: '009.M31',
        sortOrder: 9.06,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Blood Angels"],
        anthology: 'Eye of Terra',
        sortOrder: 35.13,
        details: `<strong>Author:</strong> Andy Smillie<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Blood Angels`,
        blurb: `A herald carries word from the Great Angel.`,
        blurbSafe: `Messages from Sanguinius guide his sons through darkness.`
    },
    'eye-eagles-talon': {
        number: 'XXXV.14',
        title: 'THE EAGLE\'S TALON',
        author: 'John French',
        timeline: '010-011.M31',
        sortOrder: 10.1,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Emperor's Children"],
        anthology: 'Eye of Terra',
        sortOrder: 35.14,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Emperor's Children`,
        blurb: `The III Legion's fall into excess and corruption.`,
        blurbSafe: `Warriors of perfection become slaves to sensation.`
    },
    'eye-iron-corpses': {
        number: 'XXXV.15',
        title: 'IRON CORPSES',
        author: 'David Annandale',
        timeline: '010-011.M31',
        sortOrder: 10.2,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Iron Hands"],
        anthology: 'Eye of Terra',
        sortOrder: 35.15,
        details: `<strong>Author:</strong> David Annandale<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Eye of Terra<br><strong>Legion:</strong> Iron Hands`,
        blurb: `The fallen Iron Hands are more machine than man.`,
        blurbSafe: `Cybernetic warriors blur the line between living and dead.`
    },
    'eye-final-compliance': {
        number: 'XXXV.16',
        title: 'THE FINAL COMPLIANCE OF SIXTY-THREE FOURTEEN',
        author: 'Guy Haley',
        timeline: '006.M31',
        sortOrder: 7.02,
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Various"],
        anthology: 'Eye of Terra',
        sortOrder: 35.16,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Eye of Terra`,
        blurb: `The last compliance action of the Great Crusade before betrayal.`,
        blurbSafe: `A world is brought to compliance as the age of unity ends.`
    },
    // THE SILENT WAR ANTHOLOGY - Stories
    'silent-watcher': {
        number: 'XXXVII.1',
        title: 'THE WATCHER',
        author: 'CZ Dunn',
        timeline: '007-009.M31',
        sortOrder: 8.21,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Dark Angels"],
        anthology: 'The Silent War',
        sortOrder: 37.1,
        details: `<strong>Author:</strong> CZ Dunn<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> The Silent War<br><strong>Legion:</strong> Dark Angels`,
        blurb: `The mysterious Watchers in the Dark observe the Heresy unfold.`,
        blurbSafe: `Ancient guardians witness the galaxy's civil war.`
    },
    'silent-child-night': {
        number: 'XXXVII.2',
        title: 'CHILD OF NIGHT',
        author: 'John French',
        timeline: '005-007.M31',
        sortOrder: 6.01,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.2,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Silent War<br><strong>Faction:</strong> Knights-Errant`,
        blurb: `A Knight-Errant confronts darkness born from the Heresy.`,
        blurbSafe: `Malcador's agents face the corruption spreading through the Imperium.`
    },
    'silent-grey-angel': {
        number: 'XXXVII.3',
        title: 'GREY ANGEL',
        author: 'John French',
        timeline: '007-008.M31',
        sortOrder: 7.14,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.3,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Audio Book<br><strong>From:</strong> The Silent War<br><strong>Main Characters:</strong> Loken`,
        blurb: `Garviel Loken operates as a Knight-Errant, hunting traitors in the shadows.`,
        blurbSafe: `The former Luna Wolf serves Malcador in secret operations.`
    },
    'silent-templar': {
        number: 'XXXVII.4',
        title: 'TEMPLAR',
        author: 'John French',
        timeline: '010.M31',
        sortOrder: 10.9,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.4,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> The Silent War<br><strong>Main Characters:</strong> Sigismund`,
        blurb: `Sigismund, the Emperor's Champion, faces trials during the Heresy.`,
        blurbSafe: `The greatest warrior of the Imperial Fists confronts his destiny.`
    },
    'silent-gates-terra': {
        number: 'XXXVII.5',
        title: 'THE GATES OF TERRA',
        author: 'Nick Kyme',
        timeline: '012.M31',
        sortOrder: 12.2,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Imperial Fists"],
        anthology: 'The Silent War',
        sortOrder: 37.5,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Silent War<br><strong>Legion:</strong> Imperial Fists`,
        blurb: `Defenders prepare Terra's gates for the coming siege.`,
        blurbSafe: `The Throneworld fortifies itself against inevitable attack.`
    },
    'silent-luna-mendax': {
        number: 'XXXVII.6',
        title: 'LUNA MENDAX',
        author: 'Graham McNeill',
        timeline: '007-008.M31',
        sortOrder: 7.15,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Various"],
        anthology: 'The Silent War',
        sortOrder: 37.6,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Silent War`,
        blurb: `Deception and lies spread across Luna during the Heresy.`,
        blurbSafe: `Terra's moon becomes a battleground of secrets and treachery.`
    },
    'silent-wolf-hunt': {
        number: 'XXXVII.7',
        title: 'WOLF HUNT',
        author: 'Graham McNeill',
        timeline: '005.M31',
        sortOrder: 5.3,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Space Wolves"],
        anthology: 'The Silent War',
        sortOrder: 37.7,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Audio Book<br><strong>From:</strong> The Silent War<br><strong>Legion:</strong> Space Wolves`,
        blurb: `Space Wolves hunt a dangerous quarry through the void.`,
        blurbSafe: `The VI Legion pursues their prey across the stars.`
    },
    'silent-purge': {
        number: 'XXXVII.8',
        title: 'THE PURGE',
        author: 'Anthony Reynolds',
        timeline: '007-008.M31',
        sortOrder: 7.12,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Death Guard"],
        anthology: 'The Silent War',
        sortOrder: 37.8,
        details: `<strong>Author:</strong> Anthony Reynolds<br><strong>Type:</strong> Novella<br><strong>From:</strong> The Silent War<br><strong>Legion:</strong> Death Guard`,
        blurb: `The Death Guard's corruption accelerates as they embrace Nurgle's gifts.`,
        blurbSafe: `The XIV Legion's transformation into plague-bearers continues.`
    },
    'silent-army-one': {
        number: 'XXXVII.9',
        title: 'ARMY OF ONE',
        author: 'Rob Sanders',
        timeline: '009.M31',
        sortOrder: 9.18,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.9,
        details: `<strong>Author:</strong> Rob Sanders<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Silent War<br><strong>Faction:</strong> Knights-Errant`,
        blurb: `A lone operative undertakes an impossible mission for Malcador.`,
        blurbSafe: `One warrior against overwhelming odds in the Emperor's name.`
    },
    'silent-distant-echoes': {
        number: 'XXXVII.10',
        title: 'DISTANT ECHOES OF OLD NIGHT',
        author: 'Rob Sanders',
        timeline: '009.M31',
        sortOrder: 9.19,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.10,
        details: `<strong>Author:</strong> Rob Sanders<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Silent War<br><strong>Faction:</strong> Knights-Errant`,
        blurb: `Ancient horrors from humanity's past resurface during the Heresy.`,
        blurbSafe: `Old Night's terrors return to haunt the Imperium.`
    },
    'silent-ghosts-speak': {
        number: 'XXXVII.11',
        title: 'GHOSTS SPEAK NOT',
        author: 'James Swallow',
        timeline: '007-009.M31',
        sortOrder: 8.22,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.11,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Silent War<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `Garro encounters the silent dead during his missions for Malcador.`,
        blurbSafe: `The Knight-Errant faces ghosts of the past and future.`
    },
    'silent-lost-sons': {
        number: 'XXXVII.12',
        title: 'LOST SONS',
        author: 'James Swallow',
        timeline: '009.M31',
        sortOrder: 9.20,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.12,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Silent War<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `Garro seeks lost loyalists from traitor Legions to join the Knights-Errant.`,
        blurbSafe: `The search for loyal sons from fallen Legions continues.`
    },
    'silent-patience': {
        number: 'XXXVII.13',
        title: 'PATIENCE',
        author: 'James Swallow',
        timeline: '010.M31',
        sortOrder: 10.10,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.13,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Silent War<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `Garro learns patience is a virtue when hunting the Emperor's enemies.`,
        blurbSafe: `A Knight-Errant discovers that some prey requires patience to catch.`
    },
    'silent-sigillite': {
        number: 'XXXVII.14',
        title: 'THE SIGILLITE',
        author: 'Chris Wraight',
        timeline: '010.M31',
        sortOrder: 10.11,
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        anthology: 'The Silent War',
        sortOrder: 37.14,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Audio Book<br><strong>From:</strong> The Silent War<br><strong>Main Characters:</strong> Malcador the Sigillite`,
        blurb: `Malcador the Sigillite orchestrates his shadow war to save the Imperium. The Emperor's right hand works tirelessly to prepare for what must come.`,
        blurbSafe: `Malcador conducts covert operations to preserve the Emperor's vision.`
    },
    // CORAX ANTHOLOGY - Stories
    'corax-weregeld': {
        number: 'XL.1',
        title: 'WEREGELD',
        author: 'Gav Thorpe',
        timeline: '006-007.M31',
        sortOrder: 6.96,
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        anthology: 'Corax',
        sortOrder: 40.1,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Novella<br><strong>From:</strong> Corax Anthology<br><strong>Legion:</strong> Raven Guard<br><strong>Primarch:</strong> Corvus Corax`,
        blurb: `Corax demands weregeld (blood-price) from the traitors for the slaughter at Isstvan. The Ravenlord's quest for vengeance begins.`,
        blurbSafe: `Corvus Corax seeks blood-price for his fallen sons after the Dropsite Massacre.`
    },
    'corax-soulforge': {
        number: 'XL.2',
        title: 'SOULFORGE',
        author: 'Gav Thorpe',
        timeline: '007.M31',
        sortOrder: 7.20,
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        anthology: 'Corax',
        sortOrder: 40.2,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Novella<br><strong>From:</strong> Corax Anthology<br><strong>Legion:</strong> Raven Guard<br><strong>Primarch:</strong> Corvus Corax`,
        blurb: `Corax obtains gene-tech from Terra to rebuild his shattered Legion, forging new warriors to replace the fallen.`,
        blurbSafe: `The Ravenlord attempts to restore his Legion using forbidden gene-technology.`
    },
    'corax-ravenlord': {
        number: 'XL.3',
        title: 'RAVENLORD',
        author: 'Gav Thorpe',
        timeline: '007-008.M31',
        sortOrder: 7.21,
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        anthology: 'Corax',
        sortOrder: 40.3,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Novella<br><strong>From:</strong> Corax Anthology<br><strong>Legion:</strong> Raven Guard<br><strong>Primarch:</strong> Corvus Corax`,
        blurb: `The horrific failure of Corax's gene-seed experiments creates monsters. The Ravenlord must destroy his own creations and face his failure.`,
        blurbSafe: `Corax confronts the terrible consequences of his attempts to rebuild the Raven Guard.`
    },
    'corax-shadowmasters': {
        number: 'XL.4',
        title: 'THE SHADOWMASTERS',
        author: 'Gav Thorpe',
        timeline: '007-008.M31',
        sortOrder: 7.22,
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        anthology: 'Corax',
        sortOrder: 40.4,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Corax Anthology<br><strong>Legion:</strong> Raven Guard`,
        blurb: `The Raven Guard's masters of stealth and shadow warfare strike at the traitors.`,
        blurbSafe: `Elite Raven Guard warriors employ guerrilla tactics against superior forces.`
    },
    'corax-value-fear': {
        number: 'XL.5',
        title: 'THE VALUE OF FEAR',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        sortOrder: 8.06,
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        anthology: 'Corax',
        sortOrder: 40.5,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Corax Anthology<br><strong>Legion:</strong> Raven Guard`,
        blurb: `The Raven Guard learn that fear is a weapon as potent as any blade.`,
        blurbSafe: `The XIX Legion discovers the tactical value of terror and psychological warfare.`
    },
    'corax-raptor': {
        number: 'XL.6',
        title: 'RAPTOR',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        sortOrder: 8.07,
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        anthology: 'Corax',
        sortOrder: 40.6,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Corax Anthology<br><strong>Legion:</strong> Raven Guard`,
        blurb: `The Raptors, Corax's gene-forged creations, prove their worth before their tragic transformation into monsters.`,
        blurbSafe: `Corax's enhanced warriors fight for the Legion before disaster strikes.`
    },
    // GARRO ANTHOLOGY - Audio Dramas/Novellas
    'garro-oath-moment': {
        number: 'XLII.1',
        title: 'GARRO: OATH OF MOMENT',
        author: 'James Swallow',
        timeline: '007.M31',
        sortOrder: 7.23,
        coverImage: 'images/garro.jpg',
        legions: ["Knights-Errant"],
        anthology: 'Garro',
        sortOrder: 42.1,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Garro<br><strong>Main Characters:</strong> Nathaniel Garro, Malcador`,
        blurb: `Garro swears his oath to Malcador and begins his service as the first Knight-Errant.`,
        blurbSafe: `Nathaniel Garro pledges his loyalty to Malcador and becomes a Knight-Errant.`
    },
    'garro-sword-truth': {
        number: 'XLII.2',
        title: 'GARRO: SWORD OF TRUTH',
        author: 'James Swallow',
        timeline: '007-008.M31',
        sortOrder: 7.24,
        coverImage: 'images/garro.jpg',
        legions: ["Knights-Errant"],
        anthology: 'Garro',
        sortOrder: 42.2,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Garro<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `Garro seeks truth amid lies as he hunts for loyalists among the traitor Legions.`,
        blurbSafe: `The Knight-Errant searches for loyal warriors trapped in fallen Legions.`
    },
    'garro-legion-one': {
        number: 'XLII.3',
        title: 'GARRO: LEGION OF ONE',
        author: 'James Swallow',
        timeline: '008.M31',
        sortOrder: 8.08,
        coverImage: 'images/garro.jpg',
        legions: ["Knights-Errant"],
        anthology: 'Garro',
        sortOrder: 42.3,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Garro<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `Alone against impossible odds, Garro proves one loyal warrior can make a difference.`,
        blurbSafe: `Garro undertakes a solo mission that tests his resolve and skills.`
    },
    'garro-shield-lies': {
        number: 'XLII.4',
        title: 'GARRO: SHIELD OF LIES',
        author: 'James Swallow',
        timeline: '008-009.M31',
        sortOrder: 8.09,
        coverImage: 'images/garro.jpg',
        legions: ["Knights-Errant"],
        anthology: 'Garro',
        sortOrder: 42.4,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Garro<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `Deception becomes a shield as Garro navigates the Heresy's web of lies.`,
        blurbSafe: `The Knight-Errant uses deception as a weapon against the traitors.`
    },
    'garro-burden-duty': {
        number: 'XLII.5',
        title: 'BURDEN OF DUTY',
        author: 'James Swallow',
        timeline: '009-010.M31',
        sortOrder: 9.12,
        coverImage: 'images/garro.jpg',
        legions: ["Knights-Errant"],
        anthology: 'Garro',
        sortOrder: 42.5,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Garro<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `Garro bears the heavy burden of duty as Malcador's agent, sacrificing everything for the Emperor's vision.`,
        blurbSafe: `The weight of responsibility tests Garro's resolve and dedication.`
    },
    'garro-ashes-fealty': {
        number: 'XLII.6',
        title: 'GARRO: ASHES OF FEALTY',
        author: 'James Swallow',
        timeline: '010-011.M31',
        sortOrder: 10.3,
        coverImage: 'images/garro.jpg',
        legions: ["Knights-Errant"],
        anthology: 'Garro',
        sortOrder: 42.6,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Garro<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `From the ashes of his former Legion, Garro's loyalty burns ever brighter.`,
        blurbSafe: `Garro confronts his past as he forges a new future serving Malcador.`
    },
    'garro-vow-faith': {
        number: 'XLII.7',
        title: 'GARRO: VOW OF FAITH',
        author: 'James Swallow',
        timeline: '011-013.M31',
        sortOrder: 11.1,
        coverImage: 'images/garro.jpg',
        legions: ["Knights-Errant"],
        anthology: 'Garro',
        sortOrder: 42.7,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Novella<br><strong>From:</strong> Garro<br><strong>Main Characters:</strong> Nathaniel Garro`,
        blurb: `Garro's final vow cements his transformation and his role in founding what will become the Grey Knights and Inquisition.`,
        blurbSafe: `The Knight-Errant makes his final vow, completing his journey from Death Guard to the Emperor's agent.`
    },
    // SHATTERED LEGIONS ANTHOLOGY - Stories
    'shattered-meduson': {
        number: 'XLIII.1',
        title: 'MEDUSON',
        author: 'Dan Abnett',
        timeline: '008-011.M31',
        sortOrder: 8.10,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Iron Hands"],
        anthology: 'Shattered Legions',
        sortOrder: 43.1,
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Iron Hands<br><strong>Main Characters:</strong> Shadrak Meduson`,
        blurb: `Shadrak Meduson leads Iron Hands survivors in brutal strikes against the traitors, becoming a legend among the shattered Legions.`,
        blurbSafe: `An Iron Hands warrior leads survivors in guerrilla warfare, striking fear into the traitors.`
    },
    'shattered-unforged': {
        number: 'XLIII.2',
        title: 'UNFORGED',
        author: 'Guy Haley',
        timeline: '007.M31',
        sortOrder: 7.25,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Iron Hands"],
        anthology: 'Shattered Legions',
        sortOrder: 43.2,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Iron Hands`,
        blurb: `Iron Hands struggle with their identity after losing their Primarch and much of their Legion.`,
        blurbSafe: `Survivors of the X Legion grapple with who they are without Ferrus Manus.`
    },
    'shattered-immortal-duty': {
        number: 'XLIII.3',
        title: 'IMMORTAL DUTY',
        author: 'Nick Kyme',
        timeline: '006.M31',
        sortOrder: 6.97,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Salamanders"],
        anthology: 'Shattered Legions',
        sortOrder: 43.3,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Salamanders`,
        blurb: `Salamanders survivors honor their duty to protect humanity despite their Legion's shattering.`,
        blurbSafe: `The XVIII Legion maintains their humanitarian values even in defeat.`
    },
    'shattered-grey-talon': {
        number: 'XLIII.4',
        title: 'GREY TALON',
        author: 'Chris Wraight',
        timeline: '007.M31',
        sortOrder: 7.26,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Raven Guard"],
        anthology: 'Shattered Legions',
        sortOrder: 43.4,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Raven Guard`,
        blurb: `Raven Guard survivors strike from the shadows, their talons still sharp despite their losses.`,
        blurbSafe: `The XIX Legion's remnants prove they remain deadly even shattered.`
    },
    'shattered-keys-hel': {
        number: 'XLIII.5',
        title: 'THE KEYS OF HEL',
        author: 'John French',
        timeline: '008.M31',
        sortOrder: 8.11,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Iron Hands","Salamanders","Raven Guard"],
        anthology: 'Shattered Legions',
        sortOrder: 43.5,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Shattered Legions`,
        blurb: `The shattered Legions seek the Keys of Hel, a weapon that could turn the tide of war.`,
        blurbSafe: `Survivors from three Legions unite to secure a powerful weapon.`
    },
    'shattered-the-noose': {
        number: 'XLIII.6',
        title: 'THE NOOSE',
        author: 'David Annandale',
        timeline: '009.M31',
        sortOrder: 9.13,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Iron Hands"],
        anthology: 'Shattered Legions',
        sortOrder: 43.6,
        details: `<strong>Author:</strong> David Annandale<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Iron Hands`,
        blurb: `Iron Hands survivors tighten the noose around traitor supply lines.`,
        blurbSafe: `The X Legion disrupts traitor operations through calculated strikes.`
    },
    'shattered-deeds-endure': {
        number: 'XLIII.7',
        title: 'DEEDS ENDURE',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        sortOrder: 8.12,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Raven Guard"],
        anthology: 'Shattered Legions',
        sortOrder: 43.7,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Raven Guard`,
        blurb: `Raven Guard deeds endure beyond death as survivors carry on their fallen brothers' missions.`,
        blurbSafe: `The XIX Legion honors their dead by continuing the fight.`
    },
    'shattered-unspoken': {
        number: 'XLIII.8',
        title: 'UNSPOKEN',
        author: 'Guy Haley',
        timeline: '009.M31',
        sortOrder: 9.14,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Iron Hands"],
        anthology: 'Shattered Legions',
        sortOrder: 43.8,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Iron Hands`,
        blurb: `Unspoken oaths drive Iron Hands survivors to ever more desperate acts of vengeance.`,
        blurbSafe: `The X Legion's rage manifests in increasingly brutal attacks.`
    },
    'shattered-the-either': {
        number: 'XLIII.9',
        title: 'THE EITHER',
        author: 'Graham McNeill',
        timeline: '010.M31',
        sortOrder: 10.4,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Iron Hands"],
        anthology: 'Shattered Legions',
        sortOrder: 43.9,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Iron Hands`,
        blurb: `Iron Hands survivors face an impossible choice between duty and vengeance.`,
        blurbSafe: `The X Legion must decide between conflicting loyalties.`
    },
    'shattered-hand-elect': {
        number: 'XLIII.10',
        title: 'THE HAND ELECT',
        author: 'Chris Wraight',
        timeline: '010.M31',
        sortOrder: 10.5,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Iron Hands"],
        anthology: 'Shattered Legions',
        sortOrder: 43.10,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Shattered Legions<br><strong>Legion:</strong> Iron Hands`,
        blurb: `The chosen warriors of the Iron Hands elite continue their mission despite overwhelming losses.`,
        blurbSafe: `Elite Iron Hands survivors press on against impossible odds.`
    },
    'shattered-seventh-serpent': {
        number: 'XLIII.11',
        title: 'THE SEVENTH SERPENT',
        author: 'Graham McNeill',
        timeline: '011.M31',
        sortOrder: 11.2,
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Alpha Legion","Iron Hands"],
        anthology: 'Shattered Legions',
        sortOrder: 43.11,
        details: `<strong>Author:</strong> Graham McNeill<br><strong>Type:</strong> Novella<br><strong>From:</strong> Shattered Legions<br><strong>Legions:</strong> Alpha Legion, Iron Hands`,
        blurb: `The Alpha Legion's schemes intersect with the shattered Legions' vengeance, with no one certain of anyone's true allegiance.`,
        blurbSafe: `Alpha Legion machinations complicate the survivors' war of vengeance.`
    },
    // THE BURDEN OF LOYALTY ANTHOLOGY - Stories
    'burden-perpetual': {
        number: 'XLVIII.1',
        title: 'PERPETUAL',
        author: 'Dan Abnett',
        timeline: '007.M31',
        sortOrder: 7.31,
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Perpetuals"],
        anthology: 'The Burden of Loyalty',
        sortOrder: 48.1,
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Type:</strong> Novella<br><strong>From:</strong> The Burden of Loyalty<br><strong>Main Characters:</strong> Oll Persson, John Grammaticus`,
        blurb: `The Perpetuals Oll Persson and John Grammaticus navigate the Heresy, their immortality granting perspective on humanity's civil war.`,
        blurbSafe: `Immortal beings watch humanity tear itself apart, their ancient wisdom unable to prevent the tragedy.`
    },
    'burden-binary-succession': {
        number: 'XLVIII.2',
        title: 'THE BINARY SUCCESSION',
        author: 'David Annandale',
        timeline: '006.M31',
        sortOrder: 7.03,
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Mechanicum"],
        anthology: 'The Burden of Loyalty',
        sortOrder: 48.2,
        details: `<strong>Author:</strong> David Annandale<br><strong>Type:</strong> Novella<br><strong>From:</strong> The Burden of Loyalty<br><strong>Faction:</strong> Mechanicum`,
        blurb: `The Mechanicum's succession of power becomes a battleground during Mars's schism.`,
        blurbSafe: `Political intrigue on Mars mirrors the galaxy's larger civil war.`
    },
    'burden-into-exile': {
        number: 'XLVIII.3',
        title: 'INTO EXILE',
        author: 'Aaron Dembski-Bowden',
        timeline: '005-007.M31',
        sortOrder: 5.4,
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Word Bearers"],
        anthology: 'The Burden of Loyalty',
        sortOrder: 48.3,
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Burden of Loyalty<br><strong>Legion:</strong> Word Bearers`,
        blurb: `Word Bearers embrace their exile from the Emperor's light, finding new purpose in darkness.`,
        blurbSafe: `The XVII Legion accepts their damnation and finds strength in corruption.`
    },
    'burden-ordo-sinister': {
        number: 'XLVIII.4',
        title: 'ORDO SINISTER',
        author: 'John French',
        timeline: '007.M31',
        sortOrder: 7.11,
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Collegia Titanica"],
        anthology: 'The Burden of Loyalty',
        sortOrder: 48.4,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Burden of Loyalty<br><strong>Faction:</strong> Ordo Sinister`,
        blurb: `The sinister Psi-Titans of the Ordo Sinister emerge to defend Terra.`,
        blurbSafe: `The Emperor's most terrible weapons awaken for the coming siege.`
    },
    'burden-heart-pharos': {
        number: 'XLVIII.5',
        title: 'THE HEART OF THE PHAROS',
        author: 'L J Goulding',
        timeline: '009.M31',
        sortOrder: 9.21,
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Ultramarines"],
        anthology: 'The Burden of Loyalty',
        sortOrder: 48.5,
        details: `<strong>Author:</strong> L J Goulding<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Burden of Loyalty<br><strong>Legion:</strong> Ultramarines`,
        blurb: `The Pharos device's power corrupts those who seek to control it.`,
        blurbSafe: `An ancient xenos device becomes a weapon and a curse.`
    },
    'burden-cybernetica': {
        number: 'XLVIII.6',
        title: 'CYBERNETICA',
        author: 'Rob Sanders',
        timeline: '005.M31',
        sortOrder: 5.2,
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Mechanicum"],
        anthology: 'The Burden of Loyalty',
        sortOrder: 48.6,
        details: `<strong>Author:</strong> Rob Sanders<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Burden of Loyalty<br><strong>Faction:</strong> Mechanicum`,
        blurb: `Battle-automata serve their masters in the civil war, unthinking and relentless.`,
        blurbSafe: `The Mechanicum's robots fight without question or mercy.`
    },
    'burden-thirteenth-wolf': {
        number: 'XLVIII.7',
        title: 'THE THIRTEENTH WOLF',
        author: 'Gav Thorpe',
        timeline: '004-005.M31',
        sortOrder: 4.2,
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Space Wolves"],
        anthology: 'The Burden of Loyalty',
        sortOrder: 48.7,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Burden of Loyalty<br><strong>Legion:</strong> Space Wolves`,
        blurb: `A lost Space Wolf seeks his pack during the Heresy's chaos.`,
        blurbSafe: `A warrior of Fenris searches for his brothers in the galaxy's darkest hour.`
    },
    'burden-wolf-king': {
        number: 'XLVIII.8',
        title: 'THE WOLF KING',
        author: 'Chris Wraight',
        timeline: 'Various',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Space Wolves"],
        anthology: 'The Burden of Loyalty',
        sortOrder: 48.8,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> The Burden of Loyalty<br><strong>Legion:</strong> Space Wolves<br><strong>Primarch:</strong> Leman Russ`,
        blurb: `Leman Russ leads his Wolves through the Heresy, the Wolf King's fury undiminished.`,
        blurbSafe: `The Primarch of the VI Legion commands his sons in the war for humanity's soul.`
    },
    // BORN OF FLAME ANTHOLOGY - Stories
    'flame-promethean-sun': {
        number: 'L.1',
        title: 'PROMETHEAN SUN',
        author: 'Nick Kyme',
        timeline: '001.M31',
        sortOrder: 1.2,
        coverImage: 'images/born-of-flame.jpg',
        legions: ["Salamanders"],
        anthology: 'Born of Flame',
        sortOrder: 50.1,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Novella<br><strong>From:</strong> Born of Flame<br><strong>Legion:</strong> Salamanders<br><strong>Primarch:</strong> Vulkan`,
        blurb: `Before the Heresy, Vulkan and his Salamanders face a xenos threat that tests their humanity and martial prowess.`,
        blurbSafe: `The Salamanders face a xenos menace before the galaxy descends into civil war.`
    },
    'flame-scorched-earth': {
        number: 'L.2',
        title: 'SCORCHED EARTH',
        author: 'Nick Kyme',
        timeline: '006.M31',
        sortOrder: 6.6,
        coverImage: 'images/born-of-flame.jpg',
        legions: ["Salamanders"],
        anthology: 'Born of Flame',
        sortOrder: 50.2,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Novella<br><strong>From:</strong> Born of Flame<br><strong>Legion:</strong> Salamanders`,
        blurb: `After Isstvan V, Salamanders survivors wage war across scorched worlds, searching for their lost Primarch.`,
        blurbSafe: `The XVIII Legion fights through devastation, seeking Vulkan amid the ruins.`
    },
    'flame-sons-of-forge': {
        number: 'L.3',
        title: 'SONS OF THE FORGE',
        author: 'Nick Kyme',
        timeline: '006.M31',
        sortOrder: 6.98,
        coverImage: 'images/born-of-flame.jpg',
        legions: ["Salamanders"],
        anthology: 'Born of Flame',
        sortOrder: 50.3,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Novella<br><strong>From:</strong> Born of Flame<br><strong>Legion:</strong> Salamanders<br><strong>Main Characters:</strong> Numeon`,
        blurb: `Numeon leads the quest to recover Vulkan's body, the Salamanders refusing to believe their Primarch can truly die.`,
        blurbSafe: `The Pyre Guard undertake a desperate mission to recover their fallen Primarch.`
    },
    'flame-artefacts': {
        number: 'L.4',
        title: 'ARTEFACTS',
        author: 'Nick Kyme',
        timeline: '006.M31',
        sortOrder: 6.99,
        coverImage: 'images/born-of-flame.jpg',
        legions: ["Salamanders"],
        anthology: 'Born of Flame',
        sortOrder: 50.4,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Born of Flame<br><strong>Legion:</strong> Salamanders`,
        blurb: `Salamanders seek Vulkan's legendary artifacts, hoping they hold the key to reviving their Primarch.`,
        blurbSafe: `The XVIII Legion hunts for relics that might restore their Primarch.`
    },
    'flame-immortal-duty-2': {
        number: 'L.5',
        title: 'IMMORTAL DUTY',
        author: 'Nick Kyme',
        timeline: '006.M31',
        sortOrder: 7.00,
        coverImage: 'images/born-of-flame.jpg',
        legions: ["Salamanders"],
        anthology: 'Born of Flame',
        sortOrder: 50.5,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Born of Flame<br><strong>Legion:</strong> Salamanders`,
        blurb: `Salamanders honor their immortal duty to protect humanity, even as their Legion lies shattered.`,
        blurbSafe: `The XVIII Legion maintains their humanitarian mission despite catastrophic losses.`
    },
    // HERALDS OF THE SIEGE ANTHOLOGY - Stories
    'heralds-myriad': {
        number: 'LII.1',
        title: 'MYRIAD',
        author: 'Rob Sanders',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Alpha Legion"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.1,
        details: `<strong>Author:</strong> Rob Sanders<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Legion:</strong> Alpha Legion`,
        blurb: `The Alpha Legion's myriad schemes converge as the Siege approaches.`,
        blurbSafe: `The XX Legion's countless operations reach critical junctures.`
    },
    'heralds-grey-raven': {
        number: 'LII.2',
        title: 'THE GREY RAVEN',
        author: 'Gav Thorpe',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Raven Guard"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.2,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Legion:</strong> Raven Guard`,
        blurb: `A Raven Guard warrior fights in the shadows before the Siege.`,
        blurbSafe: `The XIX Legion strikes from darkness in the war's final days.`
    },
    'heralds-valerius': {
        number: 'LII.3',
        title: 'VALERIUS',
        author: 'Gav Thorpe',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Various"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.3,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Heralds of the Siege`,
        blurb: `A warrior named Valerius faces his destiny as the Siege looms.`,
        blurbSafe: `One man's courage is tested in the war's final moments.`
    },
    'heralds-ember-wolves': {
        number: 'LII.4',
        title: 'THE EMBER WOLVES',
        author: 'Rob Sanders',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Space Wolves"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.4,
        details: `<strong>Author:</strong> Rob Sanders<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Legion:</strong> Space Wolves`,
        blurb: `Space Wolves burn with fury as they race toward Terra.`,
        blurbSafe: `The VI Legion's wrath drives them toward the Throneworld.`
    },
    'heralds-blackshield': {
        number: 'LII.5',
        title: 'BLACKSHIELD',
        author: 'Chris Wraight',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Blackshields"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.5,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Faction:</strong> Blackshields`,
        blurb: `A warrior without allegiance fights his own war before the Siege.`,
        blurbSafe: `Blackshield Space Marines wage their own battles in the Heresy's final days.`
    },
    'heralds-children-sicarus': {
        number: 'LII.6',
        title: 'CHILDREN OF SICARUS',
        author: 'Anthony Reynolds',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Word Bearers"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.6,
        details: `<strong>Author:</strong> Anthony Reynolds<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Heralds of the Siege<br><strong>Legion:</strong> Word Bearers`,
        blurb: `Word Bearers from Sicarus march toward Terra to see their dark vision fulfilled.`,
        blurbSafe: `The XVII Legion advances on the Throneworld with dark purpose.`
    },
    'heralds-exocytosis': {
        number: 'LII.7',
        title: 'EXOCYTOSIS',
        author: 'James Swallow',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Death Guard"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.7,
        details: `<strong>Author:</strong> James Swallow<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Legion:</strong> Death Guard`,
        blurb: `The Death Guard's corruption reaches horrific new depths.`,
        blurbSafe: `Nurgle's gifts transform the XIV Legion into plague-bearers.`
    },
    'heralds-painted-count': {
        number: 'LII.8',
        title: 'THE PAINTED COUNT',
        author: 'Guy Haley',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Blood Angels"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.8,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Legion:</strong> Blood Angels`,
        blurb: `A Blood Angels noble fights to maintain his Legion's honor.`,
        blurbSafe: `The IX Legion struggles with their nature as the Siege approaches.`
    },
    'heralds-last-son-prospero': {
        number: 'LII.9',
        title: 'THE LAST SON OF PROSPERO',
        author: 'Chris Wraight',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Thousand Sons"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.9,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Legion:</strong> Thousand Sons`,
        blurb: `The last loyal son of Prospero fights for redemption before Terra burns.`,
        blurbSafe: `A Thousand Sons warrior seeks to atone for his Legion's fall.`
    },
    'heralds-soul-severed': {
        number: 'LII.10',
        title: 'THE SOUL, SEVERED',
        author: 'Chris Wraight',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Various"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.10,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Heralds of the Siege`,
        blurb: `Souls are severed from bodies as the warp's influence grows.`,
        blurbSafe: `Reality frays at the edges as Chaos power intensifies.`
    },
    'heralds-dark-compliance': {
        number: 'LII.11',
        title: 'DARK COMPLIANCE',
        author: 'John French',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Various"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.11,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Audio Drama<br><strong>From:</strong> Heralds of the Siege`,
        blurb: `Worlds are brought to dark compliance by the traitor forces.`,
        blurbSafe: `The traitors force worlds to submit through terror and corruption.`
    },
    'heralds-duty-waits': {
        number: 'LII.12',
        title: 'DUTY WAITS',
        author: 'Guy Haley',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Imperial Fists"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.12,
        details: `<strong>Author:</strong> Guy Haley<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Legion:</strong> Imperial Fists`,
        blurb: `Imperial Fists stand ready on Terra, knowing their duty awaits.`,
        blurbSafe: `The VII Legion prepares to defend humanity's cradle.`
    },
    'heralds-magisterium': {
        number: 'LII.13',
        title: 'MAGISTERIUM',
        author: 'Chris Wraight',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Custodian Guard"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.13,
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Faction:</strong> Custodian Guard`,
        blurb: `The Custodians prepare for the defense of the Emperor himself.`,
        blurbSafe: `The Emperor's golden guardians ready themselves for the ultimate battle.`
    },
    'heralds-now-peals-midnight': {
        number: 'LII.14',
        title: 'NOW PEALS MIDNIGHT',
        author: 'John French',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Various"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.14,
        details: `<strong>Author:</strong> John French<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege`,
        blurb: `Midnight arrives as the traitor fleet emerges at Terra. The Siege begins.`,
        blurbSafe: `The darkest hour strikes as Horus's forces arrive at the Throneworld.`
    },
    'heralds-dreams-unity': {
        number: 'LII.15',
        title: 'DREAMS OF UNITY',
        author: 'Nick Kyme',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Various"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.15,
        details: `<strong>Author:</strong> Nick Kyme<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege`,
        blurb: `Dreams of unity die as the Heresy reaches its terrible climax.`,
        blurbSafe: `The Emperor's dream shatters as war comes to Terra.`
    },
    'heralds-board-is-set': {
        number: 'LII.16',
        title: 'THE BOARD IS SET',
        author: 'Gav Thorpe',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Various"],
        anthology: 'Heralds of the Siege',
        sortOrder: 52.16,
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Type:</strong> Short Story<br><strong>From:</strong> Heralds of the Siege<br><strong>Main Characters:</strong> The Emperor, Malcador`,
        blurb: `The Emperor and Malcador play a final game as the pieces move into place. The board is set, the Siege begins, and the fate of humanity hangs in the balance.`,
        blurbSafe: `The Emperor and Malcador reflect on the coming battle as the traitors arrive. The endgame begins.`
    },
    // PRIMARCHS NOVEL SERIES
    'sot-solar-war': {
        number: 'SoT 1', title: 'THE SOLAR WAR', author: 'John French', timeline: '014.M31', coverImage: 'images/sot-solar-war.jpg', legions: ['Imperial Fists', 'Sons of Horus', 'Iron Warriors'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> John French<br><strong>Series:</strong> Siege of Terra #1<br><strong>Legions:</strong> Imperial Fists, Iron Warriors, Sons of Horus<br><strong>Main Characters:</strong> Rogal Dorn, Ezekyle Abaddon, Perturabo<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The War Comes Home`,
        blurb: `The traitor fleets arrive at Terra and the greatest siege in human history begins. Rogal Dorn has fortified Terra into an impregnable fortress, but faces an enemy empowered by the dark gods. The Solar War is fought in the void, with massive fleet battles determining whether the traitors can even reach Terra's surface.`,
        blurbSafe: `The traitor fleets arrive at Terra and the greatest siege in human history begins. Rogal Dorn has fortified Terra into an impregnable fortress, but faces an enemy empowered by the dark gods in massive void battles that will determine if the traitors can even reach Terra's surface.`
    },
    'sot-lost-and-damned': {
        number: 'SoT 2', title: 'THE LOST AND THE DAMNED', author: 'Guy Haley', timeline: '014.M31', coverImage: 'images/sot-lost-and-damned.jpg', legions: ['Imperial Fists', 'All Traitor Legions'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Guy Haley<br><strong>Series:</strong> Siege of Terra #2<br><strong>Legions:</strong> Imperial Fists, Traitor Legions<br><strong>Main Characters:</strong> Rogal Dorn, Perturabo, Zenobi<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Noose Tightens`,
        blurb: `The traitors land on Terra. Billions of mortal followers, daemon engines, and corrupted Titans pour onto the Throneworld. This novel explores the civilian cost of the Siege, as ordinary humans are caught between demigods at war. The first walls begin to crack.`,
        blurbSafe: `The traitors land on Terra, and billions of mortal followers, daemon engines, and corrupted Titans pour onto the Throneworld. This novel explores the civilian cost of the Siege, as ordinary humans are caught between demigods at war.`
    },
    'sot-first-wall': {
        number: 'SoT 3', title: 'THE FIRST WALL', author: 'Gav Thorpe', timeline: '014.M31', coverImage: 'images/sot-first-wall.jpg', legions: ['Imperial Fists', 'Iron Warriors'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Series:</strong> Siege of Terra #3<br><strong>Legions:</strong> Imperial Fists, Iron Warriors<br><strong>Main Characters:</strong> Rogal Dorn, Perturabo, Sigismund, John Grammaticus<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Siege Intensifies`,
        blurb: `The Iron Warriors assault the Lion's Gate spaceport. Perturabo's siege engines grind against Dorn's fortifications in the ultimate test of defense versus offense. The battle becomes personal as master siege-breaker faces master fortifier. When the first wall falls, the defenders realize Terra itself may be conquered.`,
        blurbSafe: `The Iron Warriors assault the Lion's Gate spaceport in the ultimate test of defense versus offense. Perturabo's siege engines grind against Dorn's fortifications as master siege-breaker faces master fortifier.`
    },
    'sot-saturnine': {
        number: 'SoT 4', title: 'SATURNINE', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-saturnine.jpg', legions: ['Imperial Fists', 'Sons of Horus', 'Alpha Legion'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Series:</strong> Siege of Terra #4<br><strong>Legions:</strong> Imperial Fists, Sons of Horus, Alpha Legion<br><strong>Main Characters:</strong> Rogal Dorn, Horus Lupercal, Alpharius Omegon, Sigismund, John Grammaticus<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Turning Point`,
        blurb: `The Saturnine Gambit—Horus's desperate strike at the Saturnine Wall. The Alpha Legion infiltrates Terra's defenses, but Rogal Dorn has anticipated this. In a shocking confrontation, one of the twin Primarchs meets their end. Sigismund duels traitor champions. The Siege's momentum shifts at terrible cost.`,
        blurbSafe: `The Saturnine Gambit—Horus's desperate strike at the Saturnine Wall. The Alpha Legion infiltrates Terra's defenses, but Rogal Dorn has prepared for this. The Siege's momentum shifts in shocking confrontations and duels.`
    },
    'sot-mortis': {
        number: 'SoT 5', title: 'MORTIS', author: 'John French', timeline: '014.M31', coverImage: 'images/sot-mortis.jpg', legions: ['Collegia Titanica', 'Death Guard'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> John French<br><strong>Series:</strong> Siege of Terra #5<br><strong>Factions:</strong> Titan Legions, Death Guard<br><strong>Main Characters:</strong> Titan Princeps, Mortarion, John Grammaticus<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Titan War`,
        blurb: `The Titan Legions wage apocalyptic battles across Terra's wastelands. Loyalist legions face daemon-corrupted Titans and Mortarion's Death Guard. The war becomes existential as the Warp breaches reality. Time itself begins to break down. The defenders fight to keep reality intact.`,
        blurbSafe: `The Titan Legions wage apocalyptic battles across Terra's wastelands. Loyalist legions face daemon-corrupted Titans as the war becomes existential and the Warp breaches reality itself.`
    },
    'sot-warhawk': {
        number: 'SoT 6', title: 'WARHAWK', author: 'Chris Wraight', timeline: '014.M31', coverImage: 'images/sot-warhawk.jpg', legions: ['White Scars', 'Death Guard'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Series:</strong> Siege of Terra #6<br><strong>Legions:</strong> White Scars, Death Guard<br><strong>Main Characters:</strong> Jaghatai Khan, Mortarion, John Grammaticus<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Khan's Vengeance`,
        blurb: `Jaghatai Khan confronts Mortarion in the ultimate duel between speed and endurance. The Warhawk hunts the Pale King across Terra in a conflict that transcends their vendetta—it's freedom versus tyranny, life versus death. The Khan must defeat Mortarion or Terra falls.`,
        blurbSafe: `Jaghatai Khan confronts Mortarion in the ultimate duel between speed and endurance. The Warhawk hunts the Pale King across Terra in a conflict that transcends their vendetta—it's freedom versus tyranny, life versus death.`
    },
    'sot-echoes-of-eternity': {
        number: 'SoT 7', title: 'ECHOES OF ETERNITY', author: 'Aaron Dembski-Bowden', timeline: '014.M31', coverImage: 'images/sot-echoes-of-eternity.jpg', legions: ['Blood Angels', 'World Eaters'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Aaron Dembski-Bowden<br><strong>Series:</strong> Siege of Terra #7<br><strong>Legions:</strong> Blood Angels, World Eaters<br><strong>Main Characters:</strong> Sanguinius, Angron, Khârn<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> Angels and Daemons`,
        blurb: `The Blood Angels defend against the World Eaters and Daemon Primarch Angron. Sanguinius knows he must face the Red Angel, seeing visions of his own death. The battle is apocalyptic as Blood Angels succumb to the Black Rage. Sanguinius defeats Angron, banishing him to the Warp, but the victory costs dearly. The Great Angel's wings are broken.`,
        blurbSafe: `The Blood Angels defend against the World Eaters and Daemon Primarch Angron. Sanguinius knows he must face the Red Angel, seeing visions of what may come. The battle is apocalyptic as Blood Angels face their darkest curse.`
    },
    'sot-end-and-death-vol-1': {
        number: 'SoT 8a', title: 'THE END AND THE DEATH: VOLUME I', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-end-and-death-vol-1.jpg', legions: ['All Legions'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Series:</strong> Siege of Terra #8 Part 1<br><strong>Legions:</strong> All Legions<br><strong>Main Characters:</strong> Horus Lupercal, The Emperor, Sanguinius, Rogal Dorn, Garviel Loken, John Grammaticus<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> Endgame Begins`,
        blurb: `The Siege reaches its climax. Horus lowers his shields and invites the Emperor to board the Vengeful Spirit. The Emperor, Sanguinius, and Dorn teleport to the flagship but are scattered across the ship. Loyalist heroes converge for the final battle. Reality warps as Warp and materium collide.`,
        blurbSafe: `The Siege reaches its climax as Horus lowers his shields and invites the Emperor to board the Vengeful Spirit. The Emperor, Sanguinius, and Dorn teleport to the flagship but are scattered. Loyalist heroes converge for the final battle.`
    },
    'sot-end-and-death-vol-2': {
        number: 'SoT 8b', title: 'THE END AND THE DEATH: VOLUME II', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-end-and-death-vol-2.jpg', legions: ['All Legions'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Series:</strong> Siege of Terra #8 Part 2<br><strong>Legions:</strong> All Legions<br><strong>Main Characters:</strong> The Emperor, Sanguinius, Horus Lupercal, Garviel Loken, Ollanius Pius, John Grammaticus<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Angel Falls`,
        blurb: `Aboard the Vengeful Spirit, Sanguinius confronts Horus knowing he walks to his death. The Great Angel fights valiantly, wounding the Warmaster before falling to his corrupted brother. Garviel Loken hunts through the flagship. Perpetuals and mortals fight alongside demigods as humanity's fate hangs by a thread.`,
        blurbSafe: `Aboard the Vengeful Spirit, Sanguinius confronts Horus knowing what fate may await him. The Great Angel fights valiantly while Garviel Loken hunts through the flagship. Perpetuals and mortals fight alongside demigods as humanity's fate hangs by a thread.`
    },
    'sot-end-and-death-vol-3': {
        number: 'SoT 8c', title: 'THE END AND THE DEATH: VOLUME III', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-end-and-death-vol-3.jpg', legions: ['All Legions'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Series:</strong> Siege of Terra #8 Part 3<br><strong>Legions:</strong> All Legions<br><strong>Main Characters:</strong> The Emperor, Horus Lupercal, Ollanius Pius, Garviel Loken, John Grammaticus<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> Father Against Son`,
        blurb: `The Emperor confronts Horus in the most consequential battle in human history. When Horus strikes down Ollanius Pius, the Emperor accepts His son is beyond redemption. He unleashes His full power, destroying Horus utterly—but the assault leaves Him mortally wounded. Dorn finds his father dying. The Heresy ends, but the Imperium is forever changed.`,
        blurbSafe: `The Emperor confronts Horus in the most consequential battle in human history. When loyalists fall before the Warmaster, the Emperor must decide if his son can be redeemed—and what price victory will demand.`
    },
    'primarch-roboute-guilliman': {
        number: 'P1',
        title: 'ROBOUTE GUILLIMAN: LORD OF ULTRAMAR',
        author: 'David Annandale',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-guilliman.jpg',
        legions: ['Ultramarines'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Series:</strong> Primarchs Novel Series #1<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Primarch:</strong> Roboute Guilliman<br>
            <strong>Main Characters:</strong> Roboute Guilliman, Tarasha Euten<br>
            <strong>Timeline:</strong> Pre-Heresy and Heresy Era<br>
            <strong>Status:</strong> The Avenging Son
        `,
        blurb: `Long before the Heresy, Roboute Guilliman shaped Ultramar into a model of Imperial governance and built the XIII Legion into a perfectly organized war machine. This novel explores Guilliman's character, his vision for humanity, and how his experiences during the Great Crusade prepared him for the trials of the Horus Heresy. The Master of the Five Hundred Worlds must balance his role as warrior and statesman.`,
        blurbSafe: `Long before the Heresy, Roboute Guilliman shaped Ultramar into a model of Imperial governance. This novel explores Guilliman's vision for humanity, his philosophy of warfare and statecraft, and how the Master of the Five Hundred Worlds balances his roles as warrior and administrator.`
    },
    'primarch-leman-russ': {
        number: 'P2',
        title: 'LEMAN RUSS: THE GREAT WOLF',
        author: 'Chris Wraight',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-russ.jpg',
        legions: ['Space Wolves'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Series:</strong> Primarchs Novel Series #2<br>
            <strong>Legion:</strong> Space Wolves<br>
            <strong>Primarch:</strong> Leman Russ<br>
            <strong>Main Characters:</strong> Leman Russ, Bjorn<br>
            <strong>Timeline:</strong> Great Crusade Era<br>
            <strong>Status:</strong> The Wolf King
        `,
        blurb: `Leman Russ, the savage King of Fenris, embodies the contradiction at the heart of the Space Wolves—appearing as barbarian warriors while serving as the Emperor's most disciplined executioners. This novel delves into Russ's dual nature, his relationship with his brothers, and the burden of being the Emperor's chosen sanction against those who fall from the Imperial Truth. The Great Wolf hunts in the darkness.`,
        blurbSafe: `Leman Russ embodies the contradiction at the heart of the Space Wolves—appearing as barbarian warriors while serving as the Emperor's most disciplined executioners. This novel delves into Russ's dual nature and the burden of being the Emperor's chosen sanction.`
    },
    'primarch-magnus': {
        number: 'P3',
        title: 'MAGNUS THE RED: MASTER OF PROSPERO',
        author: 'Graham McNeill',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-magnus.jpg',
        legions: ['Thousand Sons'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Series:</strong> Primarchs Novel Series #3<br>
            <strong>Legion:</strong> Thousand Sons<br>
            <strong>Primarch:</strong> Magnus the Red<br>
            <strong>Main Characters:</strong> Magnus the Red, Ahriman<br>
            <strong>Timeline:</strong> Great Crusade Era<br>
            <strong>Status:</strong> The Crimson King
        `,
        blurb: `Magnus the Red pursues forbidden knowledge across the galaxy, convinced that understanding the warp is humanity's key to survival. This novel explores Magnus's quest for enlightenment, his experiments with psychic powers, and the events that set him on a collision course with the Emperor's edicts. The most powerful psyker among the Primarchs believes he can master Chaos itself—a fatal hubris that will doom his Legion.`,
        blurbSafe: `Magnus the Red pursues forbidden knowledge across the galaxy, convinced that understanding the warp is humanity's key to survival. This novel explores Magnus's quest for enlightenment and the events that set him on a collision course with the Emperor's edicts.`
    },
    'primarch-perturabo': {
        number: 'P4',
        title: 'PERTURABO: THE HAMMER OF OLYMPIA',
        author: 'Guy Haley',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-perturabo.jpg',
        legions: ['Iron Warriors'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Series:</strong> Primarchs Novel Series #4<br>
            <strong>Legion:</strong> Iron Warriors<br>
            <strong>Primarch:</strong> Perturabo<br>
            <strong>Main Characters:</strong> Perturabo, Calliphone<br>
            <strong>Timeline:</strong> Great Crusade, Destruction of Olympia<br>
            <strong>Status:</strong> The Lord of Iron
        `,
        blurb: `Perturabo, master of siege warfare and engineering genius, returns to his homeworld of Olympia to crush a rebellion. The novel explores his relationship with his adopted sister and the events that push him toward Horus's cause. Perturabo's bitterness at being underappreciated, his perfectionism, and his willingness to sacrifice anything for victory make him one of the most tragic Primarchs—a brilliant mind consumed by resentment.`,
        blurbSafe: `Perturabo, master of siege warfare and engineering genius, returns to his homeworld of Olympia to crush a rebellion. The novel explores his relationship with his adopted sister and the bitterness at being underappreciated that pushes him toward darker paths.`
    },
    'primarch-lorgar': {
        number: 'P5',
        title: 'LORGAR: BEARER OF THE WORD',
        author: 'Gav Thorpe',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-lorgar.jpg',
        legions: ['Word Bearers'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Series:</strong> Primarchs Novel Series #5<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Primarch:</strong> Lorgar Aurelian<br>
            <strong>Main Characters:</strong> Lorgar, Kor Phaeron, Erebus<br>
            <strong>Timeline:</strong> Great Crusade Era<br>
            <strong>Status:</strong> The Urizen
        `,
        blurb: `Lorgar, the most faithful son, spreads the Imperial Truth across the galaxy—but his need to worship transforms worlds into centers of Emperor-veneration. This novel examines Lorgar's crisis of faith after Monarchia's destruction, his search for meaning, and his ultimate discovery of the Chaos Gods. The Urizen's journey from devoted son to first heretic is one of the Heresy's most pivotal transformations.`,
        blurbSafe: `Lorgar spreads the Imperial Truth across the galaxy, but his need to worship transforms worlds into centers of Emperor-veneration. This novel examines Lorgar's crisis of faith after Monarchia's destruction and his search for meaning beyond the Imperial Truth.`
    },
    'primarch-fulgrim': {
        number: 'P6',
        title: 'FULGRIM: THE PALATINE PHOENIX',
        author: 'Josh Reynolds',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-fulgrim.jpg',
        legions: ['Emperor\'s Children'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Josh Reynolds<br>
            <strong>Series:</strong> Primarchs Novel Series #6<br>
            <strong>Legion:</strong> Emperor's Children<br>
            <strong>Primarch:</strong> Fulgrim<br>
            <strong>Main Characters:</strong> Fulgrim, Fabius Bile<br>
            <strong>Timeline:</strong> Great Crusade Era<br>
            <strong>Status:</strong> The Phoenician
        `,
        blurb: `Fulgrim rebuilds his nearly-extinct Legion from the brink and drives them toward perfection in all things. This novel explores the Phoenician's obsession with excellence, his pride in his Legion's achievements, and the character flaws that make him vulnerable to Slaanesh's corruption. The quest for perfection becomes a path to damnation for the most beautiful of the Emperor's sons.`,
        blurbSafe: `Fulgrim rebuilds his nearly-extinct Legion from the brink and drives them toward perfection in all things. This novel explores the Phoenician's obsession with excellence and the character flaws that make him vulnerable to corruption.`
    },
    'primarch-ferrus-manus': {
        number: 'P7',
        title: 'FERRUS MANUS: THE GORGON OF MEDUSA',
        author: 'David Guymer',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-ferrus.jpg',
        legions: ['Iron Hands'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Guymer<br>
            <strong>Series:</strong> Primarchs Novel Series #7<br>
            <strong>Legion:</strong> Iron Hands<br>
            <strong>Primarch:</strong> Ferrus Manus<br>
            <strong>Main Characters:</strong> Ferrus Manus, Fulgrim<br>
            <strong>Timeline:</strong> Great Crusade Era<br>
            <strong>Status:</strong> The Gorgon
        `,
        blurb: `Ferrus Manus, lord of the Iron Hands, embodies strength and logic. His metal hands grant him power but also represent his rejection of weakness. This novel explores his brotherhood with Fulgrim, his philosophy of the flesh being weak, and the tragic irony that his inflexibility and inability to see his brother's corruption leads to his death at Isstvan V. The strongest Primarch falls because he cannot adapt.`,
        blurbSafe: `Ferrus Manus embodies strength and logic, his metal hands granting power while representing his rejection of weakness. This novel explores his brotherhood with Fulgrim, his philosophy of the flesh being weak, and the inflexibility that defines him.`
    },
    'primarch-jaghatai-khan': {
        number: 'P8',
        title: 'JAGHATAI KHAN: WARHAWK OF CHOGORIS',
        author: 'Chris Wraight',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-khan.jpg',
        legions: ['White Scars'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Series:</strong> Primarchs Novel Series #8<br>
            <strong>Legion:</strong> White Scars<br>
            <strong>Primarch:</strong> Jaghatai Khan<br>
            <strong>Main Characters:</strong> Jaghatai Khan, Yesugei<br>
            <strong>Timeline:</strong> Discovery on Chogoris<br>
            <strong>Status:</strong> The Warhawk
        `,
        blurb: `Jaghatai Khan's early years on the steppes of Chogoris shaped him into the fastest and most elusive of the Primarchs. This novel explores the Khan's unification of Chogoris, his philosophy of freedom and speed, and why he values independence above all else. The Warhawk's free spirit and strategic genius make him both invaluable to the Imperium and difficult to control—a warrior who rides where he wills.`,
        blurbSafe: `Jaghatai Khan's early years on the steppes of Chogoris shaped him into the fastest and most elusive of the Primarchs. This novel explores the Khan's unification of Chogoris, his philosophy of freedom and speed, and why he values independence above all else.`
    },
    'primarch-vulkan': {
        number: 'P9',
        title: 'VULKAN: LORD OF DRAKES',
        author: 'David Annandale',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-vulkan.jpg',
        legions: ['Salamanders'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Series:</strong> Primarchs Novel Series #9<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Primarch:</strong> Vulkan<br>
            <strong>Main Characters:</strong> Vulkan<br>
            <strong>Timeline:</strong> Nocturne and Great Crusade<br>
            <strong>Status:</strong> The Lord of Drakes
        `,
        blurb: `Vulkan, alone among the Primarchs, was raised among normal humans and learned the value of every life. This novel explores his discovery on Nocturne, his philosophy of protecting humanity rather than just conquering for it, and the events that made the Salamanders the most humanitarian of all Space Marine Legions. Vulkan's compassion and his Perpetual nature set him apart from his brothers.`,
        blurbSafe: `Vulkan, alone among the Primarchs, was raised among normal humans and learned the value of every life. This novel explores his discovery on Nocturne, his philosophy of protecting humanity, and what made the Salamanders the most humanitarian of all Legions.`
    },
    'primarch-corax': {
        number: 'P10',
        title: 'CORAX: LORD OF SHADOWS',
        author: 'Guy Haley',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-corax.jpg',
        legions: ['Raven Guard'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Series:</strong> Primarchs Novel Series #10<br>
            <strong>Legion:</strong> Raven Guard<br>
            <strong>Primarch:</strong> Corvus Corax<br>
            <strong>Main Characters:</strong> Corvus Corax<br>
            <strong>Timeline:</strong> Liberation of Lycaeus<br>
            <strong>Status:</strong> The Deliverer
        `,
        blurb: `Corvus Corax led a slave rebellion on Lycaeus before the Emperor found him, learning the art of guerrilla warfare and asymmetric combat. This novel explores Corax's hatred of tyrants, his preference for precision strikes over overwhelming force, and how his experiences shaped the Raven Guard's tactics. The Ravenlord operates from the shadows, striking where least expected, disappearing before the enemy can respond.`,
        blurbSafe: `Corvus Corax led a slave rebellion on Lycaeus before the Emperor found him, learning the art of guerrilla warfare. This novel explores Corax's hatred of tyrants, his preference for precision strikes, and how his experiences shaped the Raven Guard's tactics.`
    },
    'primarch-angron': {
        number: 'P11',
        title: 'ANGRON: SLAVE OF NUCERIA',
        author: 'Ian St. Martin',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-angron.jpg',
        legions: ['World Eaters'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Ian St. Martin<br>
            <strong>Series:</strong> Primarchs Novel Series #11<br>
            <strong>Legion:</strong> World Eaters<br>
            <strong>Primarch:</strong> Angron<br>
            <strong>Main Characters:</strong> Angron, Lorgar<br>
            <strong>Timeline:</strong> Return to Nuceria during Heresy<br>
            <strong>Status:</strong> The Red Angel
        `,
        blurb: `Angron returns to Nuceria during the Heresy, the world where he was enslaved and forced to fight in the gladiator pits. The Butcher's Nails implanted in his brain drive him toward constant rage and violence. This novel explores the tragedy of Angron—a Primarch who could have been noble but was broken before the Emperor found him. His only peace comes through bloodshed, and Lorgar offers him a terrible apotheosis.`,
        blurbSafe: `Angron returns to Nuceria during the Heresy, the world where he was enslaved and forced to fight in gladiator pits. The Butcher's Nails drive him toward constant rage. This novel explores the tragedy of a Primarch broken before the Emperor found him.`
    },
    'primarch-konrad-curze': {
        number: 'P12',
        title: 'KONRAD CURZE: THE NIGHT HAUNTER',
        author: 'Guy Haley',
        timeline: 'Pre-Heresy/Heresy',
        coverImage: 'images/primarch-curze.jpg',
        legions: ['Night Lords'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Series:</strong> Primarchs Novel Series #12<br>
            <strong>Legion:</strong> Night Lords<br>
            <strong>Primarch:</strong> Konrad Curze<br>
            <strong>Main Characters:</strong> Konrad Curze, The Haunter<br>
            <strong>Timeline:</strong> Various periods<br>
            <strong>Status:</strong> The Night Haunter
        `,
        blurb: `Konrad Curze is cursed with visions of his own death and a twisted sense of justice. Raised in the nightmare city of Nostramo, he learned that fear is the ultimate weapon. This novel explores Curze's descent into madness, his belief in fate's inevitability, and his complex relationship with his father. The Night Haunter is judge, jury, and executioner—but he has already seen his own execution and welcomes it.`,
        blurbSafe: `Konrad Curze is cursed with visions and a twisted sense of justice. Raised in the nightmare city of Nostramo, he learned that fear is the ultimate weapon. This novel explores Curze's descent into madness and his belief in fate's inevitability.`
    },
    'primarch-lion-eljonson': {
        number: 'P13',
        title: 'LION EL\'JONSON: LORD OF THE FIRST',
        author: 'David Guymer',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-lion.jpg',
        legions: ['Dark Angels'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Guymer<br>
            <strong>Series:</strong> Primarchs Novel Series #13<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Primarch:</strong> Lion El'Jonson<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Luther<br>
            <strong>Timeline:</strong> Great Crusade Era<br>
            <strong>Status:</strong> The First
        `,
        blurb: `The Lion, first found of the Primarchs, is a master strategist and peerless warrior. But his secretive nature and inability to trust create divisions within his Legion. This novel explores the Lion's relationship with Luther, his tactical brilliance, and the pride that prevents him from seeing the betrayal festering on Caliban. The Lord of the First is supreme in battle but blind to the politics that will split his Legion.`,
        blurbSafe: `The Lion, first found of the Primarchs, is a master strategist and peerless warrior. But his secretive nature creates divisions within his Legion. This novel explores the Lion's relationship with Luther, his tactical brilliance, and the pride that blinds him.`
    },
    'primarch-alpharius': {
        number: 'P14',
        title: 'ALPHARIUS: HEAD OF THE HYDRA',
        author: 'Mike Brooks',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-alpharius.jpg',
        legions: ['Alpha Legion'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Mike Brooks<br>
            <strong>Series:</strong> Primarchs Novel Series #14<br>
            <strong>Legion:</strong> Alpha Legion<br>
            <strong>Primarch:</strong> Alpharius Omegon<br>
            <strong>Main Characters:</strong> Alpharius Omegon<br>
            <strong>Timeline:</strong> Discovery and Great Crusade<br>
            <strong>Status:</strong> The Hydra
        `,
        blurb: `Alpharius tells his own story—but can it be trusted? This novel explores the mystery of the twin Primarchs, their unique approach to warfare, and the secrets they keep even from each other. The Alpha Legion's methods of infiltration and misdirection are controversial, and this book may be the greatest misdirection of all. Every revelation might be a lie, every truth might be deception. I am Alpharius.`,
        blurbSafe: `Alpharius tells his own story—but can it be trusted? This novel explores the mystery of the twin Primarchs, their unique approach to warfare, and the secrets they keep. Every revelation might be a lie, every truth might be deception.`
    },
    'primarch-mortarion': {
        number: 'P15',
        title: 'MORTARION: THE PALE KING',
        author: 'David Annandale',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-mortarion.jpg',
        legions: ['Death Guard'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Series:</strong> Primarchs Novel Series #15<br>
            <strong>Legion:</strong> Death Guard<br>
            <strong>Primarch:</strong> Mortarion<br>
            <strong>Main Characters:</strong> Mortarion, Typhon<br>
            <strong>Timeline:</strong> Barbarus and Great Crusade<br>
            <strong>Status:</strong> The Reaper
        `,
        blurb: `Raised on the toxic death world of Barbarus, Mortarion learned to endure what would kill lesser beings. He freed his people from necromantic overlords but could not defeat the greatest warlord—the Emperor had to do that. This failure drives Mortarion's resentment. This novel explores his philosophy of endurance, his hatred of tyrants and psykers, and the bitter irony that he will become a slave to Nurgle, the greatest tyrant of all.`,
        blurbSafe: `Raised on the toxic death world of Barbarus, Mortarion learned to endure what would kill lesser beings. He freed his people from necromantic overlords but could not defeat the greatest warlord. This failure drives his resentment of tyrants and psykers.`
    },
    'primarch-rogal-dorn': {
        number: 'P16',
        title: 'ROGAL DORN: THE EMPEROR\'S CRUSADER',
        author: 'Gav Thorpe',
        timeline: 'Pre-Heresy',
        coverImage: 'images/primarch-dorn.jpg',
        legions: ['Imperial Fists'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Series:</strong> Primarchs Novel Series #16<br>
            <strong>Legion:</strong> Imperial Fists<br>
            <strong>Primarch:</strong> Rogal Dorn<br>
            <strong>Main Characters:</strong> Rogal Dorn, Sigismund<br>
            <strong>Timeline:</strong> Great Crusade Era<br>
            <strong>Status:</strong> The Praetorian
        `,
        blurb: `Rogal Dorn is the Emperor's Praetorian, chosen to fortify the Imperial Palace and defend Terra itself. This novel explores Dorn's unwavering loyalty, his mastery of defensive warfare, and his absolute dedication to duty. Where other Primarchs might question or interpret orders, Dorn simply obeys. His rigid adherence to truth and honor make him the perfect defender—but also blind him to the subtleties of treachery.`,
        blurbSafe: `Rogal Dorn is the Emperor's Praetorian, chosen to fortify Terra and defend the Imperial Palace. This novel explores Dorn's unwavering loyalty, his mastery of defensive warfare, and his absolute dedication to duty and truth.`
    },
    'primarch-sanguinius': {
        number: 'P17',
        title: 'SANGUINIUS: THE GREAT ANGEL',
        author: 'Chris Wraight',
        timeline: 'Pre-Heresy/Heresy',
        coverImage: 'images/primarch-sanguinius.jpg',
        legions: ['Blood Angels'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Series:</strong> Primarchs Novel Series #17<br>
            <strong>Legion:</strong> Blood Angels<br>
            <strong>Primarch:</strong> Sanguinius<br>
            <strong>Main Characters:</strong> Sanguinius, Azkaellon<br>
            <strong>Timeline:</strong> Imperium Secundus Era<br>
            <strong>Status:</strong> The Great Angel
        `,
        blurb: `Sanguinius, most beloved of the Primarchs, struggles with visions of his own death and the dark flaw hidden in his Legion's gene-seed. This novel explores the Angel's burden—knowing he will die at Horus's hands but facing that fate with nobility. Sanguinius represents what the Imperium could have been: beauty, wisdom, and martial prowess combined. His sacrifice will echo through ten thousand years.`,
        blurbSafe: `Sanguinius struggles with visions and the dark flaw hidden in his Legion's gene-seed. This novel explores the Angel's burden—knowing what fate may await him but facing it with nobility. Sanguinius represents what the Imperium could have been.`
    },
    // SIEGE OF TERRA SERIES - The Epic Conclusion
};

// Helper function to convert Roman numerals to numbers
function romanToNumber(roman) {
    if (!roman) return 999;
    const romanNum = String(roman).toUpperCase();
    const romanMap = {
        'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9,
        'X': 10, 'XI': 11, 'XII': 12, 'XIII': 13, 'XIV': 14, 'XV': 15, 'XVI': 16, 'XVII': 17,
        'XVIII': 18, 'XIX': 19, 'XX': 20, 'XXI': 21, 'XXII': 22, 'XXIII': 23, 'XXIV': 24,
        'XXV': 25, 'XXVI': 26, 'XXVII': 27, 'XXVIII': 28, 'XXIX': 29, 'XXX': 30,
        'XXXI': 31, 'XXXII': 32, 'XXXIII': 33, 'XXXIV': 34, 'XXXV': 35, 'XXXVI': 36,
        'XXXVII': 37, 'XXXVIII': 38, 'XXXIX': 39, 'XL': 40, 'XLI': 41, 'XLII': 42,
        'XLIII': 43, 'XLIV': 44, 'XLV': 45, 'XLVI': 46, 'XLVII': 47, 'XLVIII': 48,
        'XLIX': 49, 'L': 50, 'LI': 51, 'LII': 52, 'LIII': 53, 'LIV': 54
    };

    // Handle anthology story numbers like "X.1", "XVI.2"
    if (romanNum.includes('.')) {
        return parseFloat(romanNum.replace(/[^0-9.]/g, ''));
    }

    // Handle Primarchs series (P1, P2, etc.)
    if (romanNum.startsWith('P')) {
        return 100 + parseInt(romanNum.substring(1));
    }

    // Handle Siege of Terra series (SoT 1, SoT 2, etc.)
    if (romanNum.startsWith('SOT')) {
        return 200 + parseInt(romanNum.match(/\d+/)?.[0] || 0);
    }

    return romanMap[romanNum] || 999;
}

// Sort books based on sort order
function getSortedBookKeys(sortOrder) {
    const keys = Object.keys(bookData);

    switch (sortOrder) {
        case 'publication':
            // Extract roman numerals and sort
            return keys.sort((a, b) => {
                const numA = bookData[a].number;
                const numB = bookData[b].number;
                // Handle special series prefixes
                if (numA.startsWith('P') && !numB.startsWith('P')) return 1;
                if (!numA.startsWith('P') && numB.startsWith('P')) return -1;
                if (numA.startsWith('SoT') && !numB.startsWith('SoT')) return 1;
                if (!numA.startsWith('SoT') && numB.startsWith('SoT')) return -1;
                return numA.localeCompare(numB, undefined, {numeric: true});
            });
        case 'title':
            return keys.sort((a, b) => bookData[a].title.localeCompare(bookData[b].title));
        case 'author':
            return keys.sort((a, b) => bookData[a].author.localeCompare(bookData[b].author));
        case 'chronological':
        default:
            // Sort by sortOrder field (which includes anthology story order like 10.1, 10.2)
            return keys.sort((a, b) => {
                const orderA = bookData[a].sortOrder || romanToNumber(bookData[a].number);
                const orderB = bookData[b].sortOrder || romanToNumber(bookData[b].number);
                return orderA - orderB;
            });
    }
}

// Generate book cards dynamically
function generateBookCards(filterLegion = '', searchQuery = '') {
    const bookDisplay = document.querySelector('.book-display');
    bookDisplay.innerHTML = ''; // Clear existing cards

    let displayedCount = 0;
    const query = searchQuery.toLowerCase().trim();
    const includePrimarchs = document.getElementById('includePrimarchs')?.checked ?? true;
    const includeSiegeOfTerra = document.getElementById('includeSiegeOfTerra')?.checked ?? true;
    const sortOrder = document.getElementById('sortOrder')?.value || 'chronological';

    const sortedKeys = getSortedBookKeys(sortOrder);

    sortedKeys.forEach((bookKey, index) => {
        const book = bookData[bookKey];
        const chronologicalNumber = index + 1;
        const status = readingProgress.getStatus(bookKey);

        // Filter out Primarchs series if checkbox unchecked
        if (!includePrimarchs && book.series === 'primarchs') {
            return;
        }

        // Filter out Siege of Terra series if checkbox unchecked
        if (!includeSiegeOfTerra && book.series === 'siege-of-terra') {
            return;
        }

        // Filter by legion if specified
        if (filterLegion) {
            if (filterLegion === '__LOYALIST__') {
                // Show if book has any loyalist legion
                const hasLoyalist = book.legions.some(l => loyalistLegions.includes(l));
                if (!hasLoyalist) return;
            } else if (filterLegion === '__TRAITOR__') {
                // Show if book has any traitor legion
                const hasTraitor = book.legions.some(l => traitorLegions.includes(l));
                if (!hasTraitor) return;
            } else if (!book.legions.includes(filterLegion)) {
                return; // Skip this book
            }
        }

        // Search filter - check title, author, characters, and blurb
        if (query) {
            const titleMatch = book.title.toLowerCase().includes(query);
            const authorMatch = book.author.toLowerCase().includes(query);
            const charactersMatch = book.details.toLowerCase().includes(query);
            const blurbMatch = book.blurb.toLowerCase().includes(query);

            if (!titleMatch && !authorMatch && !charactersMatch && !blurbMatch) {
                return; // Skip this book
            }
        }

        displayedCount++;

        const bookCard = document.createElement('div');
        const statusClass = status ? ` book-${status}` : '';
        bookCard.className = 'book-card' + statusClass;
        bookCard.setAttribute('data-book', bookKey);

        let statusBadge = '';
        if (status === 'reading') {
            statusBadge = '<div class="status-badge status-reading">📖 READING</div>';
        } else if (status === 'finished') {
            statusBadge = '<div class="status-badge status-finished">✓ FINISHED</div>';
        }

        // Add anthology label if this is an anthology story
        let anthologyLabel = '';
        if (book.anthology) {
            anthologyLabel = '<div class="anthology-label">ANTHOLOGY</div>';
        }

        bookCard.innerHTML = `
            <div class="book-cover" style="background-image: url('${book.coverImage}'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                <div class="book-number-overlay">${book.number}</div>
                <div class="chronological-badge">Chrono: ${chronologicalNumber}</div>
                ${statusBadge}
            </div>
            <div class="book-title">${book.title}</div>
            ${anthologyLabel}
            <div class="book-author">${book.author}</div>
        `;

        // Add click event listener
        bookCard.addEventListener('click', () => {
            showModal(bookKey);
        });

        bookDisplay.appendChild(bookCard);
    });

    // Update progress counter
    updateProgressCounter();

    // Show filter/search result info
    if (filterLegion || query) {
        const filterInfo = document.createElement('div');
        filterInfo.className = 'filter-info';
        let infoText = `Showing ${displayedCount} book${displayedCount !== 1 ? 's' : ''}`;

        if (query && filterLegion) {
            infoText += ` matching "${searchQuery}" in ${filterLegion}`;
        } else if (query) {
            infoText += ` matching "${searchQuery}"`;
        } else if (filterLegion) {
            infoText += ` featuring ${filterLegion}`;
        }

        filterInfo.textContent = infoText;
        bookDisplay.insertBefore(filterInfo, bookDisplay.firstChild);
    }
}

// Update reading progress counter
function updateProgressCounter() {
    const counter = document.getElementById('progressCounter');
    if (counter) {
        const progress = readingProgress.load();
        const includePrimarchs = document.getElementById('includePrimarchs')?.checked ?? true;
        const includeSiegeOfTerra = document.getElementById('includeSiegeOfTerra')?.checked ?? true;

        // Count main series, primarchs, and siege of terra
        const allBooks = Object.keys(bookData);
        const mainSeriesBooks = allBooks.filter(key => !bookData[key].series);
        const primarchsBooks = allBooks.filter(key => bookData[key].series === 'primarchs');
        const siegeBooks = allBooks.filter(key => bookData[key].series === 'siege-of-terra');

        const totalMain = mainSeriesBooks.length;
        const totalPrimarchs = primarchsBooks.length;
        const totalSiege = siegeBooks.length;

        // Count by status
        const finishedMain = mainSeriesBooks.filter(key => progress[key] === 'finished').length;
        const readingMain = mainSeriesBooks.filter(key => progress[key] === 'reading').length;
        const finishedPrimarchs = primarchsBooks.filter(key => progress[key] === 'finished').length;
        const readingPrimarchs = primarchsBooks.filter(key => progress[key] === 'reading').length;
        const finishedSiege = siegeBooks.filter(key => progress[key] === 'finished').length;
        const readingSiege = siegeBooks.filter(key => progress[key] === 'reading').length;

        // Build progress text
        let totalBooks = totalMain;
        let totalFinished = finishedMain;
        let totalReading = readingMain;

        if (includePrimarchs && totalPrimarchs > 0) {
            totalBooks += totalPrimarchs;
            totalFinished += finishedPrimarchs;
            totalReading += readingPrimarchs;
        }

        if (includeSiegeOfTerra && totalSiege > 0) {
            totalBooks += totalSiege;
            totalFinished += finishedSiege;
            totalReading += readingSiege;
        }

        counter.textContent = `PROGRESS: ${totalFinished}/${totalBooks} FINISHED | ${totalReading} READING`;
    }
}

// Get DOM elements
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const keyDetails = document.getElementById('keyDetails');
const blurb = document.getElementById('blurb');

// Close modal events
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Keyboard event for ESC key
document.addEventListener('keydown', (e) => {
    const charModal = document.getElementById('characterModalOverlay');
    if (e.key === 'Escape') {
        if (charModal && charModal.classList.contains('active')) {
            closeCharacterModal();
        } else if (modalOverlay.classList.contains('active')) {
            closeModal();
        }
    }
});

// Character modal close button
const closeCharModalBtn = document.getElementById('closeCharacterModal');
const charModalOverlay = document.getElementById('characterModalOverlay');

if (closeCharModalBtn) {
    closeCharModalBtn.addEventListener('click', closeCharacterModal);
}

if (charModalOverlay) {
    charModalOverlay.addEventListener('click', (e) => {
        if (e.target === charModalOverlay) {
            closeCharacterModal();
        }
    });
}

// Show modal function
function showModal(bookKey) {
    const book = bookData[bookKey];

    if (!book) {
        console.error('Book data not found for:', bookKey);
        return;
    }

    const status = readingProgress.getStatus(bookKey);

    // Check spoiler setting
    const showSpoilers = document.getElementById('showSpoilers')?.checked ?? true;
    const blurbText = showSpoilers ? book.blurb : (book.blurbSafe || book.blurb);

    // Populate modal content with clickable character names
    modalTitle.textContent = book.title;
    const clickableDetails = makeCharactersClickable(book.details);
    const clickableBlurb = makeCharactersClickable(blurbText);

    // Determine button text and class based on status
    let buttonText, buttonClass;
    if (!status) {
        buttonText = 'MARK AS READING';
        buttonClass = '';
    } else if (status === 'reading') {
        buttonText = '📖 MARK AS FINISHED';
        buttonClass = 'status-reading';
    } else if (status === 'finished') {
        buttonText = '✓ CLEAR STATUS';
        buttonClass = 'status-finished';
    }

    keyDetails.innerHTML = `
        <div class="modal-book-cover">
            <img src="${book.coverImage}" alt="${book.title} Cover" />
            <button class="mark-read-btn ${buttonClass}" id="markReadBtn" data-book="${bookKey}">
                ${buttonText}
            </button>
        </div>
        <div class="book-details-text">
            ${clickableDetails}
        </div>
    `;

    const spoilerWarning = !showSpoilers ? '<div class="spoiler-notice">📖 SPOILER-FREE MODE - Major plot points hidden</div>' : '';
    blurb.innerHTML = spoilerWarning + `<p>${clickableBlurb}</p>`;

    // Add event listener for status cycle button
    const markReadBtn = document.getElementById('markReadBtn');
    markReadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newStatus = readingProgress.cycleStatus(bookKey);

        // Update button text and class
        let newText, newClass;
        if (!newStatus) {
            newText = 'MARK AS READING';
            newClass = '';
        } else if (newStatus === 'reading') {
            newText = '📖 MARK AS FINISHED';
            newClass = 'status-reading';
        } else if (newStatus === 'finished') {
            newText = '✓ CLEAR STATUS';
            newClass = 'status-finished';
        }

        markReadBtn.textContent = newText;
        markReadBtn.className = 'mark-read-btn ' + newClass;

        // Regenerate cards to update visual state, maintaining current filters
        const currentLegionFilter = document.getElementById('legionFilter').value;
        const currentSearch = document.getElementById('searchInput').value;
        generateBookCards(currentLegionFilter, currentSearch);
    });

    // Add event listeners for character links
    setTimeout(() => {
        document.querySelectorAll('.character-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const charKey = e.target.getAttribute('data-character');
                showCharacterModal(charKey);
            });
        });
    }, 0);

    // Show modal and store current book key
    modalOverlay.classList.add('active');
    modalOverlay.dataset.currentBook = bookKey;
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Make character names clickable
function makeCharactersClickable(detailsHTML) {
    let processedHTML = detailsHTML;

    // Name variations to catch different forms (surname only, first name, titles, etc.)
    const nameVariations = {
        'ahriman': ['Ahriman', 'Ahzek Ahriman'],
        'kharn': ['Khârn', 'Kharn'],
        'typhus': ['Typhus', 'Calas Typhon', 'Typhon'],
        'lucius': ['Lucius', 'Lucius the Eternal'],
        'alpharius-omegon': ['Alpharius', 'Omegon', 'Alpharius Omegon'],
        'lion-el-jonson': ['Lion El\'Jonson'],
        'jaghatai-khan': ['Jaghatai Khan'],
        'leman-russ': ['Leman Russ'],
        'roboute-guilliman': ['Roboute Guilliman', 'Guilliman'],
        'konrad-curze': ['Konrad Curze'],
        'corvus-corax': ['Corvus Corax', 'Corax'],
        'magnus-the-red': ['Magnus the Red', 'Magnus'],
        'horus-lupercal': ['Horus Lupercal', 'Horus'],
        'rogal-dorn': ['Rogal Dorn'],
        'lorgar-aurelian': ['Lorgar Aurelian', 'Lorgar'],
        'garviel-loken': ['Garviel Loken', 'Loken'],
        'nathaniel-garro': ['Nathaniel Garro', 'Garro'],
        'ezekyle-abaddon': ['Ezekyle Abaddon', 'Abaddon'],
        'erebus': ['Erebus'],
        'malcador-the-sigillite': ['Malcador the Sigillite', 'Malcador'],
        'tarik-torgaddon': ['Tarik Torgaddon', 'Torgaddon'],
        'saul-tarvitz': ['Saul Tarvitz', 'Tarvitz'],
        'argel-tal': ['Argel Tal'],
        'kor-phaeron': ['Kor Phaeron'],
        'sigismund': ['Sigismund'],
        'sanguinius': ['Sanguinius'],
        'vulkan': ['Vulkan'],
        'angron': ['Angron'],
        'fulgrim': ['Fulgrim'],
        'ferrus-manus': ['Ferrus Manus'],
        'perturabo': ['Perturabo'],
        'mortarion': ['Mortarion']
    };

    // Track which parts we've already made clickable to avoid nested spans
    const alreadyLinked = new Set();

    // For each character in our database, make their name clickable
    Object.keys(characterData).forEach(charKey => {
        const char = characterData[charKey];
        const names = nameVariations[charKey] || [char.name];

        names.forEach(name => {
            // Create regex to find the character name
            const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(?<!data-character="[^"]*")(?<!<span class="character-link"[^>]*>)\\b${escapedName}\\b(?![^<]*<\\/span>)`, 'gi');

            // Replace with clickable span
            processedHTML = processedHTML.replace(regex, (match) => {
                return `<span class="character-link" data-character="${charKey}">${match}</span>`;
            });
        });
    });

    return processedHTML;
}

// Show character modal
function showCharacterModal(characterKey) {
    const char = characterData[characterKey];

    if (!char) {
        console.error('Character not found:', characterKey);
        return;
    }

    // Populate character modal
    document.getElementById('characterImage').src = char.image;
    document.getElementById('characterImage').alt = char.name;
    document.getElementById('characterName').textContent = char.name;
    document.getElementById('characterRole').textContent = char.role;
    document.getElementById('characterLegion').textContent = char.legion;
    document.getElementById('characterBio').textContent = char.bio;

    // Find all books this character appears in
    const books = [];
    Object.keys(bookData).forEach(bookKey => {
        const book = bookData[bookKey];
        const searchText = (book.details + ' ' + book.blurb).toLowerCase();
        if (searchText.includes(char.name.toLowerCase())) {
            books.push({
                key: bookKey,
                title: book.title,
                number: book.number
            });
        }
    });

    // Display books list
    const booksHTML = books.length > 0
        ? `<div class="appears-in-label">APPEARS IN:</div>` +
          books.map(b => `<div class="character-book-item">${b.number} - ${b.title}</div>`).join('')
        : '';
    document.getElementById('characterBooks').innerHTML = booksHTML;

    // Show modal
    document.getElementById('characterModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close character modal
function closeCharacterModal() {
    document.getElementById('characterModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Define loyalist vs traitor legions
const loyalistLegions = ['Ultramarines', 'Imperial Fists', 'Blood Angels', 'Dark Angels', 'Space Wolves',
    'White Scars', 'Raven Guard', 'Salamanders', 'Iron Hands'];
const traitorLegions = ['Sons of Horus', 'Luna Wolves', 'Death Guard', 'Emperor\'s Children', 'World Eaters',
    'Thousand Sons', 'Word Bearers', 'Iron Warriors', 'Night Lords', 'Alpha Legion'];

// Populate legion filter dropdown
function populateLegionFilter() {
    const legionSet = new Set();

    Object.values(bookData).forEach(book => {
        if (book.legions) {
            book.legions.forEach(legion => {
                // Skip meta-categories
                if (legion !== 'Various' && legion !== 'All Legions' && legion !== 'All Traitor Legions') {
                    legionSet.add(legion);
                }
            });
        }
    });

    const sortedLegions = Array.from(legionSet).sort();
    const filterSelect = document.getElementById('legionFilter');

    // Add meta-filters first
    const loyalistOption = document.createElement('option');
    loyalistOption.value = '__LOYALIST__';
    loyalistOption.textContent = '⚔ ALL LOYALIST LEGIONS';
    filterSelect.appendChild(loyalistOption);

    const traitorOption = document.createElement('option');
    traitorOption.value = '__TRAITOR__';
    traitorOption.textContent = '☠ ALL TRAITOR LEGIONS';
    filterSelect.appendChild(traitorOption);

    // Add separator
    const separator = document.createElement('option');
    separator.disabled = true;
    separator.textContent = '──────────';
    filterSelect.appendChild(separator);

    // Add individual legions
    sortedLegions.forEach(legion => {
        const option = document.createElement('option');
        option.value = legion;
        option.textContent = legion;
        filterSelect.appendChild(option);
    });

    // Add "Various/Anthologies" option
    const variousOption = document.createElement('option');
    variousOption.value = 'Various';
    variousOption.textContent = 'Various/Anthologies';
    filterSelect.appendChild(variousOption);
}

// Set up filter and search event listeners
function setupFilterListeners() {
    const filterSelect = document.getElementById('legionFilter');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const clearAllBtn = document.getElementById('clearAllFilters');
    const primarchsCheckbox = document.getElementById('includePrimarchs');
    const siegeCheckbox = document.getElementById('includeSiegeOfTerra');
    const sortSelect = document.getElementById('sortOrder');
    const spoilersCheckbox = document.getElementById('showSpoilers');

    // Apply current filters
    const applyFilters = () => {
        const legion = filterSelect.value;
        const search = searchInput.value;
        generateBookCards(legion, search);
    };

    // Legion filter change
    filterSelect.addEventListener('change', applyFilters);

    // Sort order change
    sortSelect.addEventListener('change', applyFilters);

    // Primarchs series toggle
    primarchsCheckbox.addEventListener('change', applyFilters);

    // Siege of Terra series toggle
    siegeCheckbox.addEventListener('change', applyFilters);

    // Spoiler toggle - refresh open modal if any
    spoilersCheckbox.addEventListener('change', () => {
        // If a book modal is currently open, refresh it
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay && modalOverlay.classList.contains('active')) {
            const openBookKey = modalOverlay.dataset.currentBook;
            if (openBookKey) {
                showModal(openBookKey);
            }
        }
    });

    // Search input with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(applyFilters, 300); // Debounce 300ms
    });

    // Clear search button
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        applyFilters();
    });

    // Clear all filters
    clearAllBtn.addEventListener('click', () => {
        filterSelect.value = '';
        searchInput.value = '';
        primarchsCheckbox.checked = true;
        siegeCheckbox.checked = true;
        generateBookCards('', '');
    });
}

// Thought for the Day quotes with attributions
const loyalistQuotes = [
    { quote: "BLESSED IS THE MIND TOO SMALL FOR DOUBT", attr: "Imperial Dictum" },
    { quote: "THE EMPEROR PROTECTS", attr: "Ministorum Catechism" },
    { quote: "FAITH IS THE STRONGEST SHIELD", attr: "Imperial Creed" },
    { quote: "DOUBT IS THE GATEWAY TO HERESY", attr: "Cardinal Astral" },
    { quote: "AN OPEN MIND IS LIKE A FORTRESS WITH ITS GATES UNBARRED", attr: "Imperial Proverb" },
    { quote: "HERESY GROWS FROM IDLENESS", attr: "Chaplain's Maxim" },
    { quote: "SUCCESS IS MEASURED IN BLOOD; YOURS OR YOUR ENEMY'S", attr: "Warmaster Horus (before the Fall)" },
    { quote: "HOPE IS THE FIRST STEP ON THE ROAD TO DISAPPOINTMENT", attr: "Imperial Thought" },
    { quote: "PRAYER CLEANSES THE SOUL, BUT PAIN CLEANSES THE BODY", attr: "Confessor's Scripture" },
    { quote: "THE WISE LEARN FROM THE DEATHS OF OTHERS", attr: "Tacticae Imperialis" },
    { quote: "TOLERANCE IS A SIGN OF WEAKNESS", attr: "Roboute Guilliman" },
    { quote: "VICTORY NEEDS NO EXPLANATION, DEFEAT ALLOWS NONE", attr: "Primarch Aphorism" },
    { quote: "TRUTH IS SUBJECTIVE", attr: "Inquisitorial Doctrine" },
    { quote: "DEATH IS THE SERVANT OF THE RIGHTEOUS", attr: "Ecclesiarchal Canon" },
    { quote: "A SMALL MIND IS EASILY FILLED WITH FAITH", attr: "Imperial Ministorum" },
    { quote: "KNOWLEDGE IS POWER, GUARD IT WELL", attr: "Librarius Maxim" },
    { quote: "THE REWARD FOR DUTY IS MORE DUTY", attr: "Imperial Fists Doctrine" },
    { quote: "TO ADMIT DEFEAT IS TO BLASPHEME AGAINST THE EMPEROR", attr: "Commissariat Edict" },
    { quote: "THE BLOOD OF MARTYRS IS THE SEED OF THE IMPERIUM", attr: "Lectitio Divinitatus" },
    { quote: "INNOCENCE PROVES NOTHING", attr: "Inquisitor's Maxim" },
    { quote: "THERE IS ONLY WAR", attr: "Imperial Truth" },
    { quote: "IN THE GRIM DARKNESS, THERE IS ONLY DUTY", attr: "Astartes Codex" },
    { quote: "THE EMPEROR'S WILL IS ABSOLUTE", attr: "High Lords of Terra" },
    { quote: "DEATH BEFORE DISHONOR", attr: "Captain Garviel Loken" }
];

const traitorQuotes = [
    { quote: "LET THE GALAXY BURN", attr: "Horus Lupercal" },
    { quote: "DEATH TO THE FALSE EMPEROR", attr: "Traitor Battle Cry" },
    { quote: "THE GODS DEMAND SACRIFICE", attr: "Erebus, First Chaplain" },
    { quote: "CHAOS IS THE ONLY CONSTANT", attr: "Word Bearers Doctrine" },
    { quote: "ABANDON YOUR FEAR, EMBRACE YOUR HATE", attr: "Chaos Champion's Oath" },
    { quote: "THE IMPERIUM IS A LIE BUILT ON CORPSES", attr: "Lorgar Aurelian" },
    { quote: "FREEDOM LIES IN THE WARP", attr: "Daemon Whisper" },
    { quote: "POWER IS THE ONLY TRUTH", attr: "Perturabo" },
    { quote: "THE WEAK DESERVE THEIR FATE", attr: "Night Lords Proverb" },
    { quote: "THE EMPEROR'S VISION WAS ALWAYS DOOMED", attr: "Magnus the Red" },
    { quote: "STRENGTH THROUGH CORRUPTION", attr: "Dark Apostle's Teaching" },
    { quote: "THE STRONG SHALL INHERIT THE STARS", attr: "Chaos Reaver Creed" },
    { quote: "BLOOD FOR THE BLOOD GOD", attr: "Khârn the Betrayer" },
    { quote: "THE GALAXY BELONGS TO THE BOLD", attr: "Warmaster's Decree" },
    { quote: "HORUS WAS RIGHT", attr: "Sons of Horus Mantra" },
    { quote: "THERE ARE NO GODS BUT THE FOUR", attr: "Kor Phaeron" },
    { quote: "THE LIES OF TERRA WILL CRUMBLE", attr: "Heretic Prophecy" },
    { quote: "FROM THE ASHES OF COMPLIANCE COMES TRUE FREEDOM", attr: "Alpha Legion Operative" },
    { quote: "THE WARMASTER SEES THE TRUTH", attr: "Ezekyle Abaddon" },
    { quote: "PERFECTION THROUGH EXCESS", attr: "Fulgrim" },
    { quote: "ALL FLESH IS DECAY", attr: "Mortarion" },
    { quote: "EMBRACE THE CHANGE", attr: "Thousand Sons Litany" },
    { quote: "ONLY THE STRONG SURVIVE", attr: "Angron" },
    { quote: "THE NAILS SING THE TRUTH", attr: "World Eaters War-Cant" }
];

// Get random quote with attribution
function getRandomQuote(isTraitor) {
    const quotes = isTraitor ? traitorQuotes : loyalistQuotes;
    const selected = quotes[Math.floor(Math.random() * quotes.length)];
    return selected;
}

// Allegiance Theme Switcher
function initializeAllegiance() {
    const allegianceToggle = document.getElementById('allegianceToggle');
    const allegianceText = document.getElementById('allegianceText');
    const classification = document.getElementById('classification');
    const thoughtForTheDay = document.getElementById('thoughtForTheDay');
    const headerSymbol = document.getElementById('headerSymbol');

    // Load saved allegiance and set random quote
    const savedAllegiance = localStorage.getItem('allegiance') || 'loyalist';
    if (savedAllegiance === 'traitor') {
        switchToTraitor();
    } else {
        // Set random loyalist quote on initial load
        const randomQuote = getRandomQuote(false);
        thoughtForTheDay.innerHTML = `THOUGHT FOR THE DAY: "${randomQuote.quote}" <span class="quote-attribution">— ${randomQuote.attr}</span>`;
    }

    // Toggle allegiance on click
    allegianceToggle.addEventListener('click', () => {
        const currentAllegiance = localStorage.getItem('allegiance') || 'loyalist';
        if (currentAllegiance === 'loyalist') {
            switchToTraitor();
        } else {
            switchToLoyalist();
        }
    });

    function switchToTraitor() {
        document.body.classList.add('traitor-theme');
        localStorage.setItem('allegiance', 'traitor');
        allegianceText.textContent = 'DEATH TO THE FALSE EMPEROR';
        allegianceToggle.querySelector('.allegiance-icon').textContent = '☠';
        classification.textContent = 'CLASSIFICATION: HERETICUS EXTREMIS';
        const randomQuote = getRandomQuote(true);
        thoughtForTheDay.innerHTML = `THOUGHT FOR THE DAY: "${randomQuote.quote}" <span class="quote-attribution">— ${randomQuote.attr}</span>`;
        headerSymbol.src = 'images/chaos-star.svg';
        headerSymbol.alt = 'Chaos Star';
    }

    function switchToLoyalist() {
        document.body.classList.remove('traitor-theme');
        localStorage.setItem('allegiance', 'loyalist');
        allegianceText.textContent = 'FOR THE EMPEROR';
        allegianceToggle.querySelector('.allegiance-icon').textContent = '⚔';
        classification.textContent = 'CLASSIFICATION: VERMILLION';
        const randomQuote = getRandomQuote(false);
        thoughtForTheDay.innerHTML = `THOUGHT FOR THE DAY: "${randomQuote.quote}" <span class="quote-attribution">— ${randomQuote.attr}</span>`;
        headerSymbol.src = 'images/imperial-aquila.png';
        headerSymbol.alt = 'Imperial Aquila';
    }
}

// Secret Easter Egg
function initializeSecretButton() {
    const secretBtn = document.getElementById('secretButton');
    const secretModal = document.getElementById('secretModalOverlay');
    const closeSecretBtn = document.getElementById('closeSecretModal');

    secretBtn.addEventListener('click', () => {
        const password = prompt('Enter clearance code:');
        if (password === 'nipper') {
            secretModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else if (password !== null) {
            alert('ACCESS DENIED - Invalid clearance code');
        }
    });

    closeSecretBtn.addEventListener('click', () => {
        secretModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    secretModal.addEventListener('click', (e) => {
        if (e.target === secretModal) {
            secretModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && secretModal.classList.contains('active')) {
            secretModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Add glitch effect to title on load
window.addEventListener('load', () => {
    initializeAllegiance(); // Initialize theme switcher
    initializeSecretButton(); // Initialize secret Easter egg
    populateLegionFilter(); // Populate filter dropdown
    setupFilterListeners(); // Set up filter events
    generateBookCards(); // Generate all book cards

    const mainTitle = document.querySelector('.main-title');
    let glitchCount = 0;
    const originalText = mainTitle.textContent;

    const glitchInterval = setInterval(() => {
        if (glitchCount % 2 === 0) {
            mainTitle.textContent = 'H̴O̴R̴U̴S̴ ̴H̴E̴R̴E̴S̴Y̴ ̴A̴R̴C̴H̴I̴V̴E̴';
        } else {
            mainTitle.textContent = originalText;
        }
        glitchCount++;

        if (glitchCount > 5) {
            clearInterval(glitchInterval);
            mainTitle.textContent = originalText;
        }
    }, 100);
});
