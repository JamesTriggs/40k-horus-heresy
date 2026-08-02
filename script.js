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
const PROGRESS_KEY = 'horusHeresyProgress';
const SPOILER_KEY = 'horusHeresyShowSpoilers';
const VIEW_KEY = 'horusHeresyView';

// Three views, because chronological order and reading order are different
// things and the site used to conflate them.
//
//   reading        what a newcomer should actually read, phase-grouped, opening
//                  quartet pinned first
//   chronological  in-universe date order, a reference index for people who
//                  already know the story
//   chart          the Legion lanes and prerequisite arrows from Daunt's
//                  Horus Heresy Timeline
//
// Strict chronology puts 31 books ahead of Horus Rising, one of which is
// A Thousand Sons. It is the wrong default and was labelled "story order".
const VIEWS = {
    reading: {
        note: 'Recommended reading order. Chronological order is not a reading order: it would put 31 books, including A Thousand Sons, ahead of Horus Rising and spoil the main arc.',
    },
    chronological: {
        note: 'Strict in-universe date order, earliest event first. This is a reference index, not reading advice. A newcomer should use Reading Order instead.',
    },
    chart: {
        note: 'Storyline chart. Each column is a Legion or faction, arrows mean read this before that. Adapted from Daunt\'s Horus Heresy Timeline v0.9.',
    },
};

let currentView = 'reading';
let readingOrder = null;      // populated from reading-order.json
let chartData = null;         // populated from daunt-chart.json

function loadView() {
    try {
        const saved = localStorage.getItem(VIEW_KEY);
        if (saved && VIEWS[saved]) return saved;
    } catch (error) {
        console.warn('View preference could not be read:', error);
    }
    return 'reading';
}

function saveView(view) {
    try {
        localStorage.setItem(VIEW_KEY, view);
    } catch (error) {
        console.warn('View preference could not be saved:', error);
    }
}

const readingProgress = {
    // Cached in memory. Previously every read hit localStorage and re-parsed
    // the whole payload, which happened 225 times per render.
    _cache: null,
    _storageBroken: false,

    load: function() {
        if (this._cache) return this._cache;

        let data = {};
        try {
            const saved = localStorage.getItem(PROGRESS_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                // Guard against 'null', arrays and primitives, all of which are
                // valid JSON but would throw on Object.keys or corrupt lookups.
                if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                    data = parsed;
                }
            }
        } catch (error) {
            // A corrupt value used to throw here and leave the page with zero
            // book cards and no error visible to the user.
            console.warn('Reading progress could not be read, starting empty:', error);
            this._storageBroken = true;
        }

        // Migrate the old boolean format, then persist so it happens once
        // rather than on every read.
        let migrated = false;
        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'boolean') {
                data[key] = data[key] ? 'finished' : null;
                migrated = true;
            }
        });

        this._cache = data;
        if (migrated) this.save(data);
        return this._cache;
    },

    save: function(progress) {
        this._cache = progress;
        try {
            localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
            return true;
        } catch (error) {
            // Quota exhausted, or private browsing. The in-memory cache still
            // works for this session, so say so rather than failing silently.
            console.warn('Reading progress could not be saved:', error);
            this._storageBroken = true;
            return false;
        }
    },

    isPersistent: function() {
        this.load();
        return !this._storageBroken;
    },

    setStatus: function(bookKey, status) {
        const progress = this.load();
        progress[bookKey] = status || null;
        this.save(progress);
        return progress[bookKey];
    },

    getStatus: function(bookKey) {
        return this.load()[bookKey] || null;
    },

    cycleStatus: function(bookKey) {
        const cycle = {null: 'reading', 'reading': 'finished', 'finished': null};
        return this.setStatus(bookKey, cycle[this.getStatus(bookKey)]);
    },

    getCount: function(status) {
        const values = Object.values(this.load());
        return status
            ? values.filter(v => v === status).length
            : values.filter(Boolean).length;
    },

    getTotalBooks: function() {
        return Object.keys(bookData).length;
    }
};

// ---------------------------------------------------------------------------
// Cross-device progress sync, with no server and no account.
//
// The site is a static page, so there is nothing to sync through. Instead the
// whole reading log is packed into a short code you can carry to another
// device by hand or as a link. Two bits per book over the alphabetically
// sorted key list gives 228 books in 57 bytes, about 76 base64 characters.
//
// Sorted alphabetically rather than by the displayed order, so re-sorting the
// chronology does not invalidate anyone's code. A short fingerprint of the key
// list is embedded, and a code from a different dataset is refused rather than
// silently decoded against shifted indices, which would corrupt the log.
// ---------------------------------------------------------------------------

const SYNC_PREFIX = 'HH2';
const SYNC_STATES = [null, 'reading', 'finished'];

function syncKeyList() {
    return Object.keys(bookData).slice().sort();
}

// A cheap, stable fingerprint. Not security, just a guard against decoding a
// code against a book list it was not written for.
function syncFingerprint(keys) {
    let h = 0x811c9dc5;
    for (const ch of keys.join('|')) {
        h ^= ch.charCodeAt(0);
        h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h.toString(36).padStart(7, '0').slice(0, 7);
}

const toBase64Url = (bytes) =>
    btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const fromBase64Url = (text) => {
    const padded = text.replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(padded + '='.repeat((4 - (padded.length % 4)) % 4));
    return Uint8Array.from(binary, (c) => c.charCodeAt(0));
};

function exportProgressCode() {
    const keys = syncKeyList();
    const progress = readingProgress.load();
    const bytes = new Uint8Array(Math.ceil(keys.length / 4));

    keys.forEach((key, i) => {
        const state = SYNC_STATES.indexOf(progress[key] || null);
        if (state > 0) bytes[i >> 2] |= state << ((i % 4) * 2);
    });

    return `${SYNC_PREFIX}-${syncFingerprint(keys)}-${toBase64Url(bytes)}`;
}

// Returns { ok, applied, reason }. Never partially applies.
function importProgressCode(code) {
    const cleaned = String(code || '').trim().replace(/\s+/g, '');
    const parts = cleaned.split('-');

    if (parts.length !== 3 || parts[0] !== SYNC_PREFIX) {
        return { ok: false, reason: 'That does not look like a progress code.' };
    }

    const keys = syncKeyList();
    if (parts[1] !== syncFingerprint(keys)) {
        return {
            ok: false,
            reason: 'That code was made from a different version of the archive. ' +
                    'Reload both devices so they hold the same books, then export again.',
        };
    }

    let bytes;
    try {
        bytes = fromBase64Url(parts[2]);
    } catch (error) {
        return { ok: false, reason: 'That code is damaged or incomplete.' };
    }
    if (bytes.length !== Math.ceil(keys.length / 4)) {
        return { ok: false, reason: 'That code is the wrong length for this archive.' };
    }

    const restored = {};
    let applied = 0;
    keys.forEach((key, i) => {
        const state = SYNC_STATES[(bytes[i >> 2] >> ((i % 4) * 2)) & 0b11];
        if (state) { restored[key] = state; applied++; }
    });

    readingProgress.save(restored);
    return { ok: true, applied };
}

// Modal scroll lock. Every overlay used to set and clear document.body.overflow
// independently, so closing a nested modal unlocked the page while its parent
// was still open.
//
// The state is derived from the DOM rather than counted, because several modals
// have three separate close paths (button, backdrop, Escape) and a counter
// would drift the first time two of them fired for one dismissal.
const MODAL_SELECTOR = '.modal-overlay.active, .character-modal-overlay.active';

// Focus management for modals.
//
// Previously nothing called .focus() anywhere: opening a dialog left focus on
// the page behind it, Tab walked straight out of the modal into content the
// user could not see, and closing never returned focus to what opened it.
const focusManager = {
    _stack: [],

    _focusable(container) {
        return [...container.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea, [tabindex]:not([tabindex="-1"])'
        )].filter((el) => el.offsetParent !== null || el === document.activeElement);
    },

    trap(container) {
        this._stack.push({ container, returnTo: document.activeElement });

        const first = container.querySelector('[data-autofocus]') || this._focusable(container)[0];
        if (first) first.focus();

        container._trapHandler = (event) => {
            if (event.key !== 'Tab') return;
            const items = this._focusable(container);
            if (!items.length) return;
            const firstItem = items[0];
            const lastItem = items[items.length - 1];

            if (event.shiftKey && document.activeElement === firstItem) {
                event.preventDefault();
                lastItem.focus();
            } else if (!event.shiftKey && document.activeElement === lastItem) {
                event.preventDefault();
                firstItem.focus();
            }
        };
        container.addEventListener('keydown', container._trapHandler);
    },

    release(container) {
        if (container && container._trapHandler) {
            container.removeEventListener('keydown', container._trapHandler);
            delete container._trapHandler;
        }
        const entry = this._stack.pop();

        // Clear the background's inert state before restoring focus. The
        // trigger lives inside that container, and an inert element cannot
        // take focus, so restoring first silently did nothing.
        scrollLock.sync();

        if (entry && entry.returnTo && document.contains(entry.returnTo)) {
            entry.returnTo.focus();
        }
    }
};

const scrollLock = {
    sync: function() {
        const anyOpen = document.querySelector(MODAL_SELECTOR) !== null;
        // Content behind an open dialog must be hidden from assistive tech too,
        // or a screen reader can still walk into it.
        const shell = document.querySelector('.dataslate-container');
        if (shell) shell.toggleAttribute('inert', anyOpen);
        // The class goes on <html>, which is the scrolling element. Setting
        // overflow on <body> alone does not stop the page scrolling.
        document.documentElement.classList.toggle('modal-open', anyOpen);
        document.body.style.overflow = anyOpen ? 'hidden' : '';
    },
    acquire: function() { this.sync(); },
    release: function() { this.sync(); }
};

const bookData = {
    'tales-of-heresy-the-last-church': {
        number: 'X.6',
        title: 'THE LAST CHURCH',
        author: 'Graham McNeill',
        timeline: '730.M30',
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Emperor"],
        anthology: 'Tales of Heresy',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Emperor<br>
            <strong>Main Characters:</strong> The Emperor (as Revelation), Uriah Olathaire<br>
            <strong>Timeline:</strong> 730.M30
        `,
        blurb: `On Terra in the closing years of the Unification Wars, a stranger calling himself Revelation walks into the Church of the Lightning Stone, the last place of worship left on the planet, and spends the night arguing theology with its priest, Uriah Olathaire. The visitor is the Emperor, and he reveals that the vision which made Uriah a believer was his own psychic handiwork. Offered his life if he recants, Uriah chooses to burn with his church.`,
        blurbSafe: `In the last years of the Unification Wars, the sole surviving church on Terra receives a night-time visitor who calls himself Revelation. Over a shared bottle of wine the two men argue faith, reason and what humanity should become once it reaches the stars.`
    },
    'descent-of-angels': {
        number: 'VI',
        title: 'DESCENT OF ANGELS',
        author: 'Mitchel Scanlon',
        timeline: '820-945.M30',
        coverImage: 'images/descent-of-angels.jpg',
        legions: ['Dark Angels'],
        details: `
            <strong>Author:</strong> Mitchel Scanlon<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Main Characters:</strong> Zahariel El'Zurias, Nemiel, Lion El'Jonson, Luther<br>
            <strong>Timeline:</strong> 820-945.M30
        `,
        blurb: `On the forest world of Caliban the knightly orders hunt the great beasts that prey on humanity, and the aspirant Zahariel El'Zurias rises through the Order under its master, Lion El'Jonson. Then the Emperor arrives, Caliban is folded into the Imperium, and the Lion leads the newly named Dark Angels out into the Great Crusade. Zahariel takes the black himself, and a schism that will one day split the First Legion begins to take shape.`,
        blurbSafe: `On the forest world of Caliban, knightly orders defend a low-technology people from the beasts of the endless woods, and the aspirant Zahariel El'Zurias dreams of joining the greatest order of all, led by the warrior Lion El'Jonson. When the Great Crusade reaches Caliban, the world and its knights are remade, and the sons of Caliban must decide whether to follow the Lion to the stars.`
    },
    'primarch-vulkan': {
        number: 'P9',
        title: 'VULKAN: LORD OF DRAKES',
        author: 'David Annandale',
        timeline: '845-855.M30',
        coverImage: 'images/primarch-vulkan.jpg',
        legions: ['Salamanders'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Main Characters:</strong> Vulkan, Cassian Vaughn, Artellus Numeon, Rhy'tan<br>
            <strong>Timeline:</strong> 845-855.M30
        `,
        blurb: `The XVIII Legion exists as two halves that have never met. In the Taras Division, Lord Commander Cassian Vaughn's Terran legionaries are being annihilated by a vast ork invasion at Antaeum, unaware their primarch has already been found. On Nocturne, Vulkan has spent years raising and training a second force in secret. The book is the story of the two halves being welded into one Legion, and of Vulkan stepping fully into the role of primarch for the first time.`,
        blurbSafe: `The XVIII Legion still does not know that its own lord has been found. On one front its Terran warriors face extinction against a monstrous ork invasion, while on Nocturne Vulkan has quietly raised and trained a new force of his own. This is the story of how two halves became one indivisible Legion, and of Vulkan taking up the mantle of primarch.`
    },
    'primarch-fulgrim': {
        number: 'P6',
        title: 'FULGRIM: THE PALATINE PHOENIX',
        author: 'Josh Reynolds',
        timeline: '850-868.M30',
        coverImage: 'images/primarch-fulgrim.jpg',
        legions: ['Emperor\'s Children'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Josh Reynolds<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Emperor's Children<br>
            <strong>Main Characters:</strong> Fulgrim, Fabius, Abdemon<br>
            <strong>Timeline:</strong> 850-868.M30
        `,
        blurb: `Breaking away from Horus to take the 28th Expedition, Fulgrim brings only seven Emperor's Children with him to Byzas, a world whose byzantine aristocracy plays to his strengths. What follows is largely negotiation, intrigue and ham-fisted assassination attempts rather than open war, though plenty of blood is spilled by the end. With the III Legion still small and its confidence only recently rebuilt, this is Fulgrim proving his methods work. A young apothecary named Fabius is among the seven.`,
        blurbSafe: `Determined to prove himself to his brothers, Fulgrim takes just seven of his finest warriors to bring the world of Byzas into compliance by persuasion rather than annihilation. A story of intrigue, diplomacy and sharply pointed conversation more than battle, it studies the Phoenician's pride, charm and hunger to be recognised, and the price of even a bloodless triumph.`
    },
    'primarch-magnus': {
        number: 'P3',
        title: 'MAGNUS THE RED: MASTER OF PROSPERO',
        author: 'Graham McNeill',
        timeline: '853.M30',
        coverImage: 'images/primarch-magnus.jpg',
        legions: ['Thousand Sons', 'Iron Warriors'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Thousand Sons, Iron Warriors<br>
            <strong>Main Characters:</strong> Magnus the Red, Perturabo, Ahriman, Atharva, Forrix<br>
            <strong>Timeline:</strong> 853.M30
        `,
        blurb: `In the 55th year of the Great Crusade the world of Morningstar is tearing itself apart, and Magnus and Perturabo bring the Thousand Sons and Iron Warriors together to evacuate it. Perturabo handles the logistics while Magnus hunts for the cause, and the heart of the book is the genuine affection between the two brothers and the friendship growing between Ahriman and Forrix. A prologue and epilogue show Magnus brooding on the Planet of the Sorcerers long afterwards.`,
        blurbSafe: `On the doomed world of Morningstar, Magnus and his brother Perturabo bring their Legions together for a rescue rather than a conquest. Seen through his own eyes and those of his sons, it catches the Crimson King at a hopeful moment, a complicated man of good intentions, restless curiosity and no small hubris.`
    },
    'primarch-ferrus-manus': {
        number: 'P7',
        title: 'FERRUS MANUS: THE GORGON OF MEDUSA',
        author: 'David Guymer',
        timeline: '869.M30',
        coverImage: 'images/primarch-ferrus.jpg',
        legions: ['Iron Hands', 'Emperor\'s Children'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Guymer<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Iron Hands, Emperor's Children<br>
            <strong>Main Characters:</strong> Ferrus Manus<br>
            <strong>Timeline:</strong> 869.M30
        `,
        blurb: `In 869.M30, with rumours spreading that the Emperor means to step back and raise one of his sons to lead the Crusade, Ferrus Manus learns that the 413th Expedition has stalled against the stubborn human empire of Gardinaal. Rather than wait for reinforcements he takes the war himself, commanding a leaderless host of Iron Hands, Emperor's Children, Ultramarines and Thousand Sons to make an example his father cannot ignore. A rare long look at the Gorgon, and at Terran-versus-Medusan tension inside the X Legion.`,
        blurbSafe: `With rumours spreading that the Emperor will hand the Great Crusade to one of his sons, Ferrus Manus seizes a stalled campaign against the human empire of Gardinaal to make a statement his father cannot ignore. A rare extended study of the Gorgon, of his Legion's rivalry with the Emperor's Children, and of the divisions growing within the Iron Hands.`
    },
    'tales-of-heresy-after-deshea': {
        number: 'X.7',
        title: 'AFTER DESH\'EA',
        author: 'Matthew Farrer',
        timeline: '899.M30',
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["World Eaters"],
        anthology: 'Tales of Heresy',
        details: `
            <strong>Author:</strong> Matthew Farrer<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> World Eaters<br>
            <strong>Main Characters:</strong> Khârn, Angron, Captain Dreagher<br>
            <strong>Timeline:</strong> 899.M30
        `,
        blurb: `Aboard the War Hounds' flagship, the newly recovered Angron is shut in a darkened hold, maddened with grief at having been torn away from the slave army he meant to die beside on Desh'ea. One by one his captains go in to greet their primarch and are killed for it. Eighth Captain Khârn goes in unarmed, refuses to fight back and takes a beating until Angron will talk, and the Legion takes a new name from his dead gladiator army: the World Eaters.`,
        blurbSafe: `The XII Legion has just been reunited with its primarch, and Angron is not grateful. Shut in a darkened chamber aboard the War Hounds' flagship, he is still raging over the comrades he was torn away from, and someone has to walk in there and talk to him.`
    },
    'primarch-angron': {
        number: 'P11',
        title: 'ANGRON: SLAVE OF NUCERIA',
        author: 'Ian St. Martin',
        timeline: '900-905.M30',
        coverImage: 'images/primarch-angron.jpg',
        legions: ['World Eaters'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Ian St. Martin<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> World Eaters<br>
            <strong>Main Characters:</strong> Angron, Mago, Kharn, Lhorke<br>
            <strong>Timeline:</strong> 900-905.M30
        `,
        blurb: `A Great Crusade novel, set at the compliance of Ghenna soon after Angron is given command of the XII Legion. Contemptuous of sons who cannot match the gladiators he lost, he demands they remake themselves in his image by taking the Butcher's Nails. The present-day thread follows Mago, a centurion who embodies everything honourable about the old War Hounds, while flashbacks show Angron enslaved in Nuceria's fighting pits. It is the story of the World Eaters becoming what they became.`,
        blurbSafe: `Placed in command of a Legion he never wanted, in service to a father he cannot forgive, Angron gives his sons an ultimatum that will set them on a path they can never leave. Interleaved with his youth in the fighting pits of Nuceria, it is the tragedy of a primarch broken long before the Emperor found him, and of warriors desperate to earn his regard.`
    },
    'primarch-mortarion': {
        number: 'P15',
        title: 'MORTARION: THE PALE KING',
        author: 'David Annandale',
        timeline: '930-939.M30',
        coverImage: 'images/primarch-mortarion.jpg',
        legions: ['Death Guard'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Death Guard<br>
            <strong>Main Characters:</strong> Mortarion<br>
            <strong>Timeline:</strong> 930-939.M30
        `,
        blurb: `Newly raised to command of the Death Guard, Mortarion volunteers to break the Galaspar system, whose ruling Order he sees as a version of the tyrants who enslaved Barbarus. He drives his barque the Fourth Horseman into Galaspar's hive spires and the primary hive falls in a night and a day, at a cost that appals the Imperium. Two of his brother primarchs then summon him to answer for the slaughter, and the Pale King brooks no challenge to his methods.`,
        blurbSafe: `Newly raised to command of the Death Guard, Mortarion answers the tyranny of the Galaspar system with a campaign of shocking speed and ferocity. Its cost appals even the Imperium, and two of his brother primarchs come to make him account for his methods. A study of a primarch whose hatred of tyrants shapes every judgement he makes.`
    },
    'tales-of-heresy-wolf-at-the-door': {
        number: 'X.2',
        title: 'WOLF AT THE DOOR',
        author: 'Mike Lee',
        timeline: '950.M30',
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ['Space Wolves', 'Dark Eldar'],
        anthology: 'Tales of Heresy',
        details: `
            <strong>Author:</strong> Mike Lee<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Space Wolves, Dark Eldar<br>
            <strong>Main Characters:</strong> Bulveye, Halvdan Bale Eye, Darragh Shakkar, Andras Santanno<br>
            <strong>Timeline:</strong> 950.M30
        `,
        blurb: `Wolf Lord Bulveye's 13th Great Company, sailing with the 954th Expedition, finds the human colony of Antimon in the Lammas subsector, a world long hidden by warp storms and farmed for tribute by the Dark Eldar Kabal of the Shrieking Heart. When the raiders return the Space Wolves' ships are destroyed and the pack is marooned, fighting a guerrilla campaign until Bulveye kills Archon Darragh Shakkar. A relief fleet drives the raiders off, but Antimon's governor refuses Imperial allegiance and Bulveye destroys the world regardless.`,
        blurbSafe: `A Space Wolves force under Wolf Lord Bulveye discovers a long-lost human colony in the Lammas subsector, a world that has survived its isolation only by paying a terrible tribute to Dark Eldar raiders. Driving the raiders off turns out to be far easier than bringing the colony into the Imperium.`
    },
    'primarch-corax': {
        number: 'P10',
        title: 'CORAX: LORD OF SHADOWS',
        author: 'Guy Haley',
        timeline: '954.M30',
        coverImage: 'images/primarch-corax.jpg',
        legions: ['Raven Guard'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Raven Guard<br>
            <strong>Main Characters:</strong> Corvus Corax, Caius Valerius, Agapito<br>
            <strong>Timeline:</strong> 954.M30
        `,
        blurb: `Not an origin story. The 27th Expedition has stalled trying to bring the Carinae Sodality's thousand void-cities to compliance, and Corax answers the call rather than let the Night Lords take the job. Stubborn resistance, and an ancient bio-weapon unleashed at the void-city of Zenith, force him into escalating brutality. A parallel thread on Kiavahr and an exploration of the Raven Guard's genetic 'Sable Brand' probe the darkness in the Legion, with several fine conversations between Corax and Guilliman.`,
        blurbSafe: `Corax takes on a stalled compliance against the vast void-cities of the Carinae Sodality, determined to succeed without resorting to terror. Their defenders are well armed and utterly without remorse, and the campaign pushes him steadily further than he wishes to go. A study of the line between justice and vengeance, and of the darkness the Raven Guard carry within them.`
    },
    'the-first-heretic': {
        number: 'XIV',
        title: 'THE FIRST HERETIC',
        author: 'Aaron Dembski-Bowden',
        timeline: '959.M30',
        coverImage: 'images/the-first-heretic.jpg',
        legions: ['Word Bearers'],
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Main Characters:</strong> Argel Tal, Lorgar, Erebus, Kor Phaeron, Cyrene Valantion<br>
            <strong>Timeline:</strong> 959.M30
        `,
        blurb: `Lorgar and the Word Bearers are humiliated by the Emperor for worshipping him as a god. Crushed by his father's rebuke, Lorgar seeks meaning in the great pilgrimage to Cadia and the Eye of Terror. There, he finds gods who welcome worship—the Ruinous Powers of Chaos. This is the story of the Legion that fell first, spreading the seeds of corruption throughout the Imperium and orchestrating the Warmaster's fall.`,
        blurbSafe: `Lorgar and the Word Bearers face the Emperor's wrath for worshipping him as a god. Humiliated and seeking meaning beyond the Imperial Truth, Lorgar embarks on a pilgrimage into the Eye of Terror. What he discovers there will challenge everything the Imperium believes about gods and faith.`
    },
    'primarch-lorgar': {
        number: 'P5',
        title: 'LORGAR: BEARER OF THE WORD',
        author: 'Gav Thorpe',
        timeline: '959-964.M30',
        coverImage: 'images/primarch-lorgar.jpg',
        legions: ['Word Bearers'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Main Characters:</strong> Lorgar, Kor Phaeron, Nairo<br>
            <strong>Timeline:</strong> 959-964.M30
        `,
        blurb: `Almost all of this takes place on Colchis, long before the Emperor arrives. The disgraced priest Kor Phaeron finds a strange infant among desert nomads and raises him as a weapon for his own ambitions, and the book follows that abusive father-and-son relationship through the religious war that unites the planet under one faith. It is told through Kor Phaeron and the slave Nairo rather than Lorgar himself, and structured in short chapter-and-verse sections. Brief interludes jump forward to the Word Bearers after Monarchia.`,
        blurbSafe: `On Colchis, mighty religions rule a decaying society in the name of absent gods until Kor Phaeron finds an extraordinary child among the nomads and raises him to serve his own ends. Seen almost entirely through other people's eyes, this is a character study of Lorgar's upbringing and the religious war that made him, rather than a Legion war story.`
    },
    'tales-of-heresy-call-of-the-lion': {
        number: 'X.5',
        title: 'CALL OF THE LION',
        author: 'Gav Thorpe',
        timeline: '960.M30',
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Dark Angels"],
        anthology: 'Tales of Heresy',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Main Characters:</strong> Merir Astelan, Belath, Galedan<br>
            <strong>Timeline:</strong> 960.M30
        `,
        blurb: `Deep in the Great Crusade, Terran-born Chapter Commander Merir Astelan has spent five years bringing worlds to compliance by negotiation when the Calibanite Chapter Commander Belath arrives with reinforcements and a preference for conquest. Over Byzanthis, an advanced but politically fractured world, their methods collide: Belath stations warships above every capital, the Committee of Nations responds by taking hostages, and the talks collapse into executions and orbital bombardment. The feud seeds Astelan's later reassignment to Caliban.`,
        blurbSafe: `Two Dark Angels commanders, one raised on Terra and one on Caliban, meet over Byzanthis, a technologically advanced world split between six squabbling nation states. One wants a negotiated compliance and the other wants a conquest, and the rift inside the Legion matters as much as the enemy in front of it.`
    },
    'tales-of-heresy-scions-of-the-storm': {
        number: 'X.3',
        title: 'SCIONS OF THE STORM',
        author: 'Anthony Reynolds',
        timeline: '962-965.M30',
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Word Bearers"],
        anthology: 'Tales of Heresy',
        details: `
            <strong>Author:</strong> Anthony Reynolds<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Main Characters:</strong> Sor Talgron, Kor Phaeron, Erebus, Lorgar<br>
            <strong>Timeline:</strong> 962-965.M30
        `,
        blurb: `Captain Sor Talgron of the Word Bearers 34th Company leads the assault on Forty-Seven Sixteen, an isolated human world whose crystalline soldiers fight back with lightning. Battling into the capital, Talgron finds the population are not heathens at all but devout worshippers of the Emperor, and Kor Phaeron and Erebus order them massacred anyway. Talgron realises his Legion's masters have already turned against Terra, and puts his faith in Lorgar rather than the Emperor.`,
        blurbSafe: `Sor Talgron, captain of the Word Bearers 34th Company, leads a compliance assault on a long-isolated human world defended by crystal soldiers that hurl lightning. What his warriors find inside the enemy capital forces him to question the orders coming down from his own Legion's command.`
    },
    'primarch-roboute-guilliman': {
        number: 'P1',
        title: 'ROBOUTE GUILLIMAN: LORD OF ULTRAMAR',
        author: 'David Annandale',
        timeline: '964-970.M30',
        coverImage: 'images/primarch-guilliman.jpg',
        legions: ['Ultramarines'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Main Characters:</strong> Roboute Guilliman, Marius Gage<br>
            <strong>Timeline:</strong> 964-970.M30
        `,
        blurb: `Deliberately not an origin story. Guilliman leads the XIII Legion against the last remnants of an ork empire on Thoas, determined to honour the vanished human civilisation that built the world, while quietly reshuffling parts of his own Legion. The war refuses to behave, testing his doctrine that precision and adaptability beat brute force. Each chapter opens with an excerpt from Guilliman's own treatises on war and culture.`,
        blurbSafe: `Guilliman takes the XIII Legion to the ork-held world of Thoas, set on honouring the civilisation that once lived there. It is a study of the Master of Ultramar as both planner and warrior, his doctrine of precision and adaptability tested by a war that will not go to plan.`
    },
    'war-divine-adoratrice': {
        number: 'XXXIII.12',
        title: 'THE DEVINE ADORATRICE',
        author: 'Graham McNeill',
        timeline: '966.M30',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Imperial Knights'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Imperial Knights<br>
            <strong>Main Characters:</strong> Raeven Devine, Lyx, Cebella Devine, Albard Devine, Cyprian Devine<br>
            <strong>Timeline:</strong> 966.M30
        `,
        blurb: `Decades before the Heresy, Raeven Devine, second son of House Devine on the knight world of Molech, prepares for the Becoming that will bond him to his first Knight. A Sacristan of the hidden Serpent Cult detonates an electromagnetic charge during the ceremony, and in the confusion Raeven is acclaimed a hero while his elder brother Albard is broken. His mistress Lyx and his mother Cebella engineered all of it.`,
        blurbSafe: `On the knight world of Molech, generations before Horus turns on the Emperor, Raeven Devine prepares for the rite that will bond him to his first Knight. Not everyone at his family's court wants the ceremony to go as tradition demands.`
    },
    'primarch-alpharius': {
        number: 'P14',
        title: 'ALPHARIUS: HEAD OF THE HYDRA',
        author: 'Mike Brooks',
        timeline: '981.M30',
        coverImage: 'images/primarch-alpharius.jpg',
        legions: ['Alpha Legion'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Mike Brooks<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Alpha Legion<br>
            <strong>Main Characters:</strong> Alpharius, Omegon, Horus<br>
            <strong>Timeline:</strong> 981.M30
        `,
        blurb: `A first-person account narrated by Alpharius himself, which makes it the least trustworthy document in the Heresy. It opens and closes on the moment 'Alpharius' presents himself to Horus late in the Great Crusade, the public discovery of the XX Legion's primarch. Between those bookends he recounts being found on Terra before the Crusade had even begun, his dealings with Valdor and the Sigillite, the secret recovery of Omegon during the Rangdan wars, and the Legion's early clandestine work.`,
        blurbSafe: `Almost nothing is reliably known about the primarch of the Alpha Legion, so here he tells the story himself, in the first person. Covering his rediscovery and the XX Legion's early years, it is a masterclass in obfuscation in which every revelation might be another layer of deceit. When the tale comes from the serpent's mouth, where does the deception end and the truth begin?`
    },
    'shadows-of-treachery-dark-king': {
        number: 'XXII.2',
        title: 'THE DARK KING',
        author: 'Graham McNeill',
        timeline: '984.M30',
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ['Night Lords', 'Imperial Fists'],
        anthology: 'Shadows of Treachery',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Night Lords, Imperial Fists<br>
            <strong>Main Characters:</strong> Konrad Curze, Rogal Dorn, Sigismund, Shang<br>
            <strong>Timeline:</strong> 984.M30
        `,
        blurb: `Konrad Curze beats Rogal Dorn almost to death in front of Sigismund and is imprisoned aboard a void ship, brooding on the compliance of Osmium, the massacres on Cheraut and the visions that Fulgrim betrayed to Dorn. His equerry Shang brings word that Nostramo has slid back into corruption. Curze butchers his guards, drops the pretence of being a dutiful son and has his fleet destroy the planet as the Imperial Fists arrive.`,
        blurbSafe: `Konrad Curze's methods in the Great Crusade have set him at odds with Rogal Dorn, and the prophetic visions that torment him are becoming impossible to hide from his brothers. Then word arrives from Nostramo, the sunless world he once ruled as its monarch.`
    },
    'primarch-lion-eljonson': {
        number: 'P13',
        title: 'LION EL\'JONSON: LORD OF THE FIRST',
        author: 'David Guymer',
        timeline: '997.M30',
        coverImage: 'images/primarch-lion.jpg',
        legions: ['Dark Angels'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> David Guymer<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Duriel, Aravain, Savine<br>
            <strong>Timeline:</strong> 997.M30
        `,
        blurb: `In 997.M30, while the Emperor gathers his mightiest sons for the assault on Ullanor Prime, the Lion takes the Dark Angels to the far Northern Fringe to subdue what looks like one minor rebellious world, in the Muspel system on the edge of the Ghoul Stars. Many of his senior officers think they belong at Ullanor instead. Told partly through a Techmarine, a young Librarian in a secret order and a disillusioned remembrancer, it is Guymer's answer to the charge that the Lion is merely secretive and passive.`,
        blurbSafe: `While the Emperor masses his sons for the assault on Ullanor Prime, the Lord of the First instead draws his Legion to the farthest reaches of the known galaxy to subdue a single rebellious world. Is this another example of the Lion's infamous pride, or is there more afoot in that graveyard of empires than he will share even with his own sons?`
    },
    'eye-wolf-ash-fire': {
        number: 'XXXV.1',
        title: 'THE WOLF OF ASH AND FIRE',
        author: 'Graham McNeill',
        timeline: '999.M30',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Luna Wolves', 'Orks'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Luna Wolves, Orks<br>
            <strong>Main Characters:</strong> Horus Lupercal, The Emperor, Hastur Sejanus<br>
            <strong>Timeline:</strong> 999.M30
        `,
        blurb: `Two centuries into the Great Crusade and shortly before the Ullanor campaign, Horus Lupercal leads the Luna Wolves against the ork-held planetoid of Gorro. The Emperor joins the assault in person, fighting beside his favoured son for the first time in a very long while. Framed by Horus's exchanges with the Mournival, it is a portrait of the XVI Legion and its primarch at their loyal height.`,
        blurbSafe: `Shortly before Ullanor, Horus Lupercal takes the Luna Wolves to war against the orks of Gorro, and the Emperor himself takes the field alongside them. A glimpse of the XVI Legion, its primarch and the Mournival during the Great Crusade.`
    },
    'primarch-perturabo': {
        number: 'P4',
        title: 'PERTURABO: THE HAMMER OF OLYMPIA',
        author: 'Guy Haley',
        timeline: '999.M30',
        coverImage: 'images/primarch-perturabo.jpg',
        legions: ['Iron Warriors'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Iron Warriors<br>
            <strong>Main Characters:</strong> Perturabo, Dantioch, Fortreidon<br>
            <strong>Timeline:</strong> 999.M30
        `,
        blurb: `Two interleaved threads: Perturabo's boyhood and rise among the fractious city states of Olympia, and the Iron Warriors' grinding late-Crusade campaign against the time-warping hrud, seen through Warsmith Dantioch and a newly inducted legionary. When word reaches him of turmoil on his adoptive home world, Perturabo abandons the xenos war to deal with it himself. A bleak, honest study of how a prodigy's resentment and self-pity took root, and what that cost his Legion.`,
        blurbSafe: `Cutting between Perturabo's prodigious youth on Olympia and the Iron Warriors' brutal campaign against the xenos hrud, this is the origin story of the most bitter of the Emperor's sons. When trouble stirs on his adoptive home world, he turns his Legion around to answer it. A bleak look at how a genius came to feel so thanklessly used.`
    },
    'primarch-jaghatai-khan': {
        number: 'P8',
        title: 'JAGHATAI KHAN: WARHAWK OF CHOGORIS',
        author: 'Chris Wraight',
        timeline: '000.M31',
        coverImage: 'images/primarch-khan.jpg',
        legions: ['White Scars'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> White Scars<br>
            <strong>Main Characters:</strong> Jaghatai Khan, Yesugei, Hasik Noyan-Khan<br>
            <strong>Timeline:</strong> 000.M31
        `,
        blurb: `A sequence of discrete episodes spanning more than a century of the Great Crusade, from the newly found Khan meeting his Legion on Terra to the days just after the Ullanor Triumph, by way of Hoadh, Chogoris and a summit on Baal. Throughout, Jaghatai fights to keep the White Scars' warrior mysticism intact in an Imperium that prizes cold rationality, and is slowly dragged into the argument over the Librarius that will lead to Nikaea. A direct prequel to Wraight's other White Scars books.`,
        blurbSafe: `Told as a series of episodes across the Great Crusade, this follows the Khan and his Legion as their culture of warrior mysticism sits ever more awkwardly with the Imperium's ideals of Unity. Drawn against his instincts into the growing argument over psychic power in the Legions, Jaghatai must decide where his deepest allegiance really lies.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Alpha Legion<br>
            <strong>Main Characters:</strong> Alpharius, Omegon, John Grammaticus, Hurtado Bronzi, Peto Soneka<br>
            <strong>Timeline:</strong> 001.M31
        `,
        blurb: `The Alpha Legion operates in the shadows of the Great Crusade, their methods questioned by all. When they encounter the Cabal, a xenos organization that claims to see the future, the twins Alpharius and Omegon are presented with a terrible choice: let the Imperium burn to deny Chaos, or fight for humanity's survival. Their decision will shape the course of the Heresy, though none will know which side they truly serve.`,
        blurbSafe: `The Alpha Legion operates in shadows, their methods questioned by all who witness them. When they encounter the Cabal, a mysterious xenos organization claiming to see the future, the twins Alpharius and Omegon must make a choice that will shape the coming conflict in ways none can predict.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Thousand Sons, Space Wolves<br>
            <strong>Main Characters:</strong> Magnus the Red, Ahzek Ahriman, Lemuel Gaumon, Leman Russ<br>
            <strong>Timeline:</strong> 001-004.M31
        `,
        blurb: `Magnus the Red, master of psychic powers, foresees Horus's betrayal and uses sorcery to warn the Emperor—shattering the Webway Project and dooming Terra. The Emperor, enraged at this catastrophic breach, unleashes Leman Russ and the Space Wolves upon Prospero. The Thousand Sons, devoted scholars and psykers, are betrayed by their own mutations and the machinations of Tzeentch. Magnus's arrogance costs him everything.`,
        blurbSafe: `Magnus the Red, master of psychic powers, attempts to warn the Emperor of a terrible betrayal—but his methods catastrophically damage the Emperor's secret Webway Project. The Emperor unleashes Leman Russ and the Space Wolves upon Prospero, where the Thousand Sons face annihilation for Magnus's hubris.`
    },
    'the-primarchs-feat-of-iron': {
        number: 'XX.2',
        title: 'FEAT OF IRON',
        author: 'Nick Kyme',
        timeline: '001.M31',
        coverImage: 'images/the-primarchs.jpg',
        legions: ['Iron Hands', 'Salamanders', 'Death Guard', 'Imperial Army'],
        anthology: 'The Primarchs',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Primarchs Anthology<br>
            <strong>Legion:</strong> Iron Hands, Salamanders, Death Guard, Imperial Army<br>
            <strong>Main Characters:</strong> Ferrus Manus, Gabriel Santar, Bion Henricos, Shadrak Meduson<br>
            <strong>Timeline:</strong> 001.M31
        `,
        blurb: `At the height of the Great Crusade, Ferrus Manus drives the Iron Hands through the deserts of One-Five-Four Four while Vulkan and Mortarion fight elsewhere on the same world. Eldar farseers turn the Legion's bionics against them and pull the Gorgon into a psychic labyrinth, meaning to warn him of the Heresy and his own death. He refuses to listen. Above ground, Sergeant Bion Henricos strikes off his iron hand and leads unaugmented Imperial Army troops to break the enemy.`,
        blurbSafe: `Ferrus Manus is running behind schedule on a hostile desert world, campaigning alongside Vulkan and Mortarion and increasingly convinced that Eldar witchcraft is to blame for his Legion's poor showing. When the enemy turns the Iron Hands' own augmetics against them, the Gorgon's creed is put on trial.`
    },
    'war-virtues-sons': {
        number: 'XXXIII.16',
        title: 'VIRTUES OF THE SONS',
        author: 'Andy Smillie',
        timeline: '001.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Blood Angels', 'Emperor\'s Children', 'World Eaters'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Andy Smillie<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Blood Angels, Emperor's Children, World Eaters<br>
            <strong>Main Characters:</strong> Sanguinius, Amit, Azkaellon, Khârn, Lucius, Horus<br>
            <strong>Timeline:</strong> 001.M31
        `,
        blurb: `Troubled that each Legion has been allowed to embody only a single ideal, Sanguinius sends two of his most single-minded captains to learn from others. Azkaellon of the Sanguinary Guard duels Lucius of the Emperor's Children aboard an oceanic warship, while Amit the Flesh Tearer fights Khârn of the World Eaters in a trench on a jointly conquered world. Sanguinius then watches what the two men bring back to the IX Legion.`,
        blurbSafe: `Worried that his Legion is growing too narrow in temperament, Sanguinius arranges duels for two of his most extreme captains against warriors of the Emperor's Children and the World Eaters. What the pair learn matters far more to the Angel than who wins.`
    },
    'eye-sins-father': {
        number: 'XXXV.12',
        title: 'SINS OF THE FATHER',
        author: 'Andy Smillie',
        timeline: '001.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Blood Angels"],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Andy Smillie<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Blood Angels<br>
            <strong>Main Characters:</strong> Azkaellon, Nassir Amit<br>
            <strong>Timeline:</strong> 001.M31
        `,
        blurb: `Azkaellon and Nassir Amit, two of Sanguinius's most favoured sons, face one another in the Blood Angels' ritual duel known as the Tempest of Angels. The contest measures temperament as much as skill, setting Azkaellon's disciplined control against Amit's ferocity. Each comes away having learned something uncomfortable about the other's virtues and about his own weaknesses. Black Library frames it as the prequel to Virtues of the Sons.`,
        blurbSafe: `Two of Sanguinius's favoured warriors, Azkaellon and Nassir Amit, meet in the Blood Angels' ritual duel called the Tempest of Angels. A short, character-driven piece about what the IX Legion's finest see in one another.`
    },
    'flame-promethean-sun': {
        number: 'L.1',
        title: 'PROMETHEAN SUN',
        author: 'Nick Kyme',
        timeline: '001.M31',
        coverImage: 'images/born-of-flame.jpg',
        legions: ['Salamanders', 'Iron Hands', 'Death Guard'],
        anthology: 'Born of Flame',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Born of Flame Anthology<br>
            <strong>Legion:</strong> Salamanders, Iron Hands, Death Guard<br>
            <strong>Main Characters:</strong> Vulkan, Ferrus Manus, Mortarion<br>
            <strong>Timeline:</strong> 001.M31
        `,
        blurb: `During the Great Crusade the Imperium moves against One-Five-Four Four, a world held in thrall by the eldar. Ferrus Manus's Iron Hands and Mortarion's Death Guard grind at the xenos in the open, while Vulkan takes the Salamanders into the deepest jungle against monstrous reptilian beasts and alien witchery. Ultimately it falls to Vulkan himself to unpick the sinister eldar design behind the war.`,
        blurbSafe: `A Great Crusade campaign to prise an eldar-held jungle world out of xenos hands. Three Legions fight it, and it is the Salamanders who are sent into the deadliest ground of all.`
    },
    'shadows-of-treachery-death-of-silversmith': {
        number: 'XXII.6',
        title: 'DEATH OF A SILVERSMITH',
        author: 'Graham McNeill',
        timeline: '002.M31',
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ['Luna Wolves', 'Remembrancers'],
        anthology: 'Shadows of Treachery',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Luna Wolves, Remembrancers<br>
            <strong>Main Characters:</strong> The Silversmith, Hastur Sejanus<br>
            <strong>Timeline:</strong> 002.M31
        `,
        blurb: `A remembrancer lies dying on the floor of his workshop aboard the Vengeful Spirit, recalling the career that took him from the Sahyadri foothills to Horus's 63rd Expeditionary Fleet. He made four silver moon-phase rings for Hastur Sejanus and the Mournival, then a cruder mould of wolf medallions for a second Luna Wolves captain, who inspected the work, called it perfect and crushed his throat. Asked who did it, he can only repeat his killer's answer.`,
        blurbSafe: `A silversmith swept up into the newly founded Order of Remembrancers looks back over the commissions of his life, from the piece that first brought him to the Imperium's attention to the delicate work he has been doing for the Luna Wolves aboard the Warmaster's flagship.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Sons of Horus, Luna Wolves<br>
            <strong>Main Characters:</strong> Garviel Loken, Horus, Tarik Torgaddon, Erebus, Euphrati Keeler<br>
            <strong>Timeline:</strong> 002-003.M31
        `,
        blurb: `The Great Crusade is at its zenith. The Emperor has withdrawn to Terra and left Warmaster Horus in command, and Captain Garviel Loken of the Luna Wolves is raised to the Mournival as the 63rd Expeditionary Fleet fights its way from one compliance to the next, including the killing world of Murder. It ends among the Interex on Xenobia, where diplomacy collapses after Erebus of the Word Bearers steals a Chaos-tainted xenos blade from their Hall of Devices.`,
        blurbSafe: `The Great Crusade is at its height. The Emperor has returned to Terra, leaving his favoured son Horus as Warmaster in command of the Imperium's armies, and Captain Garviel Loken of the Luna Wolves is elevated to the Warmaster's inner circle. Through Loken's eyes the 63rd Expeditionary Fleet fights its way across the stars in the last golden days before everything changes.`
    },
    'primarch-sanguinius': {
        number: 'P17',
        title: 'SANGUINIUS: THE GREAT ANGEL',
        author: 'Chris Wraight',
        timeline: '002-003.M31',
        coverImage: 'images/primarch-sanguinius.jpg',
        legions: ['Blood Angels'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Blood Angels<br>
            <strong>Main Characters:</strong> Sanguinius<br>
            <strong>Timeline:</strong> 002-003.M31
        `,
        blurb: `A discredited remembrancer joins the expeditionary fleets to chronicle the most beloved of the primarchs, and finds the Blood Angels' origins, their lord's unique physical form and their off-limits home world all hedged about with rumour. Narrated in the first person, it follows the IX Legion out of Baal fresh from Nikaea into the six-month war against the megarachnids on Murder, making it a companion piece to Horus Rising. A short prologue and epilogue are set long after the Heresy.`,
        blurbSafe: `A discredited remembrancer is sent to chronicle the deeds of the most beloved of the Emperor's sons and finds the Blood Angels' origins, their primarch's strange form and their guarded home world all wrapped in rumour and secrecy. Accompanying the Ninth Legion to war, he learns far more than he bargained for, about the Great Angel and about the nature of the Imperium itself.`
    },
    'shadows-of-treachery-kaban-project': {
        number: 'XXII.4',
        title: 'THE KABAN PROJECT',
        author: 'Graham McNeill',
        timeline: '003-004.M31',
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Mechanicum"],
        anthology: 'Shadows of Treachery',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Mechanicum<br>
            <strong>Main Characters:</strong> Pallas Ravachol, Lukas Chrom, Remiare, Urtzi Malevolus<br>
            <strong>Timeline:</strong> 003-004.M31
        `,
        blurb: `Adept Third Class Pallas Ravachol works out that the war machine his master Lukas Chrom is building in a Martian forge is genuinely sentient, an abominable intelligence commissioned by Horus. When Chrom's Protectors come to arrest him the machine kills them on his behalf, and Ravachol runs, hunted across Mars by the assassin Remiare. The sanctuary he finally reaches belongs to another of the discontents, and the Kaban machine finishes what Chrom began.`,
        blurbSafe: `A junior Mechanicum adept realises that the secret weapon he has been servicing in Master Adept Lukas Chrom's forge is thinking for itself, in flat defiance of the Emperor's ban on artificial intelligence. Raising the alarm turns him into a fugitive on his own world.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Sons of Horus<br>
            <strong>Main Characters:</strong> Horus, Garviel Loken, Erebus, Eugan Temba, Tarik Torgaddon<br>
            <strong>Timeline:</strong> 004.M31
        `,
        blurb: `Sent to bring the rebel world of Davin back to compliance, Horus descends alone on the plague moon and fights Eugan Temba, a governor rotted by Nurgle's gift, who cuts him with the anathame Erebus stole from the Interex. Dying of a wound Imperial medicine cannot touch, the Warmaster is carried to the Temple of the Serpent Lodge, where a ritual casts his spirit into the warp. There Erebus shows him a future in which the Emperor ascends to godhood and discards his sons, and Horus chooses rebellion.`,
        blurbSafe: `Sent to reconquer the rebel world of Davin, the Warmaster is struck down by a xenos blade that no Imperial medicine can heal, and his sons turn in desperation to the Serpent Lodge. In a dark ritual, Horus's spirit walks the warp, where he is shown visions that challenge everything he believes about his father's plans for humanity.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Various<br>
            <strong>Main Characters:</strong> Kai Zulane, Atharva, Severian, Yasu Nagasena<br>
            <strong>Timeline:</strong> 004.M31
        `,
        blurb: `While the Heresy erupts across the galaxy, Terra writhes with its own conflicts. Renegade Space Marines from various Legions are imprisoned deep beneath the Imperial Palace. When astropath Kai Zulane receives a prophetic vision of the Heresy's outcome, he becomes the most hunted man on Terra. The Outcast Dead must fight through the underhives and face the deadly custodians to deliver a message that could change everything.`,
        blurbSafe: `Deep beneath the Imperial Palace, renegade Space Marines from various Legions are imprisoned. When astropath Kai Zulane receives a prophetic vision about the Heresy, he becomes hunted by every faction on Terra. The Outcast Dead must fight through the underhives to deliver a message that could change everything.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Space Wolves, Thousand Sons<br>
            <strong>Main Characters:</strong> Kasper Hawser, Leman Russ, Magnus the Red<br>
            <strong>Timeline:</strong> 004-005.M31
        `,
        blurb: `The Space Wolves are the Emperor's executioners, and Leman Russ has been given his orders: make Magnus answer for his crime. Through the eyes of the Terran scholar Kasper Hawser, taken into the VI Legion as its skjald, we watch the Wolves fall on Prospero. But Horus has twisted the Emperor's command, and what should have been an arrest becomes annihilation. Russ breaks Magnus over his knee, and Tzeentch takes what is left of the Thousand Sons.`,
        blurbSafe: `The Emperor is enraged. Magnus the Red has made a terrible mistake that endangers Terra itself, and Leman Russ is charged with bringing his brother to account. Through the eyes of Kasper Hawser, a Terran scholar who becomes the Space Wolves' oral historian, we see the VI Legion as few outsiders ever have, and follow them to the sorcerous world of Prospero.`
    },
    'age-of-darkness-rebirth': {
        number: 'XVI.5',
        title: 'REBIRTH',
        author: 'Chris Wraight',
        timeline: '004-005.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ['Thousand Sons', 'World Eaters'],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Thousand Sons, World Eaters<br>
            <strong>Main Characters:</strong> Menes Kalliston, Khârn, Revuel Arvida<br>
            <strong>Timeline:</strong> 004-005.M31
        `,
        blurb: `Captain Menes Kalliston of the Thousand Sons returns against orders to the ruins of Tizca after the Burning of Prospero and is captured. His interrogator, whom he slowly realises is Khârn of the World Eaters rather than a Space Wolf, wants the Moon Wolf pendant Magnus used to reach Horus. Kalliston offers to use his powers to still the Butcher's Nails, Khârn hesitates, then the rage wins and he beats Kalliston to death. Elsewhere in the ruins, Sergeant Revuel Arvida foresees his way out alive.`,
        blurbSafe: `In the ashes of Tizca, after the invaders have moved on, a Thousand Sons captain comes back to a world that no longer exists and finds he is not alone in the ruins. His captor wants something Magnus the Red left behind, and is willing to take the city apart to get it.`
    },
    'legacies-serpent': {
        number: 'XXXI.2',
        title: 'SERPENT',
        author: 'John French',
        timeline: '004.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Various'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Various<br>
            <strong>Main Characters:</strong> Thoros<br>
            <strong>Timeline:</strong> 004.M31
        `,
        blurb: `A very short piece first printed in the programme for the 2013 Horus Heresy Weekender. Thoros, a priest of the serpent cult of Davin, breaks in on a gathering of the Warmaster's new religion and calls openly on the favour of his patron powers. The raw display of the Primordial Truth cows the assembled faithful and casts out the pretenders, establishing the Davinites as the true masters of the cult that now underpins the traitor cause.`,
        blurbSafe: `A Davinite cult priest confronts his rivals inside the Warmaster's fledgling religion, in a brief and unsettling glimpse of how Chaos worship took hold on the traitor side.`
    },
    'war-sermon-exodus': {
        number: 'XXXIII.1',
        title: 'SERMON OF EXODUS',
        author: 'David Annandale',
        timeline: '004.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Various'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Various<br>
            <strong>Timeline:</strong> 004.M31
        `,
        blurb: `Human pilgrims journey from across the wastes of Davin, flocking together to prove themselves worthy in the eyes of dark gods. No Space Marine Legion features in the story, which Black Library published as a direct prequel to David Annandale's novel The Damnation of Pythos and to the doomed refugee exodus that novel opens with.`,
        blurbSafe: `On Davin, the faithful travel from across the wastes to gather and prove their devotion to powers the Imperium refuses to name. A short prelude to the events of The Damnation of Pythos.`
    },
    'war-howl-hearthworld': {
        number: 'XXXIII.2',
        title: 'HOWL OF THE HEARTHWORLD',
        author: 'Aaron Dembski-Bowden',
        timeline: '004.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ["Space Wolves"],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Space Wolves<br>
            <strong>Main Characters:</strong> Thirteen Stars Falling, Laughing Jaurmag, Leman Russ<br>
            <strong>Timeline:</strong> 004.M31
        `,
        blurb: `After Prospero burns, Leman Russ scatters Space Wolves watch packs to shadow every primarch. Veteran sergeant Thirteen Stars Falling is furious to draw Terra and Rogal Dorn, and the senior commander Laughing Jaurmag talks his way into joining the pack. Aboard the transport an Administratum clerk requests their names and ranks, and the Wolves lie, offering birth-names instead of true ones. Jaurmag warns them the clerk almost certainly answers to Malcador.`,
        blurbSafe: `In the wake of Prospero, Leman Russ assigns watch packs to shadow each of his brother primarchs for any sign of treachery. One pack draws what looks like the dullest posting of all: Terra, and Rogal Dorn.`
    },
    'burden-thirteenth-wolf': {
        number: 'XLVIII.7',
        title: 'THE THIRTEENTH WOLF',
        author: 'Gav Thorpe',
        timeline: '004-005.M31',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ['Space Wolves', 'Thousand Sons'],
        anthology: 'The Burden of Loyalty',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Burden of Loyalty Anthology<br>
            <strong>Legion:</strong> Space Wolves, Thousand Sons<br>
            <strong>Main Characters:</strong> Bulveye, Izzakar Orr<br>
            <strong>Timeline:</strong> 004-005.M31
        `,
        blurb: `Set during the razing of Prospero, Gav Thorpe's audio drama follows Wolf Lord Bulveye and the Space Wolves' Thirteenth Great Company as they storm the librarium temple of the Thousand Sons Librarian Izzakar Orr. Orr escapes through a hidden webway gate and the Wolves give chase into the Portal Maze, blundering through unwarded gateways and scattering. Bulveye kills Orr, but his warriors are left lost in the webway for ten thousand years.`,
        blurbSafe: `During the burning of Prospero, Wolf Lord Bulveye's Great Company batters its way into a Thousand Sons library defended by a stubborn Librarian. The pursuit carries the Fenrisians off Prospero entirely and into an alien maze of portals, where ferocity counts for very little.`
    },
    'legacies-thief-revelations': {
        number: 'XXXI.12',
        title: 'THIEF OF REVELATIONS',
        author: 'Graham McNeill',
        timeline: '005.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Thousand Sons"],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Thousand Sons<br>
            <strong>Main Characters:</strong> Magnus the Red, Ahzek Ahriman<br>
            <strong>Timeline:</strong> 005.M31
        `,
        blurb: `An audio drama set after the burning of Prospero. Magnus the Red and Ahzek Ahriman cast their psychic sight across the galaxy, hunting any clue to what the future holds and where the broken XV Legion's allegiance should finally rest. Magnus broods over the Legion's direction while Ahriman concentrates on arresting its decline, and the gap between primarch and Chief Librarian starts to open into the split that will define them both.`,
        blurbSafe: `In the wake of Prospero, Magnus the Red and Ahzek Ahriman use their psychic gifts to search for the Thousand Sons' future, and discover they do not read it the same way.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Sons of Horus, Emperor's Children, Death Guard, World Eaters<br>
            <strong>Main Characters:</strong> Garviel Loken, Saul Tarvitz, Nathaniel Garro, Horus, Tarik Torgaddon<br>
            <strong>Timeline:</strong> 005.M31
        `,
        blurb: `Horus leads the Imperial fleet against the rebel world of Isstvan III, then turns its guns on his own. Life-eater virus bombs fall on the Choral City to purge the loyalists within the Sons of Horus, Emperor's Children, Death Guard and World Eaters, but Saul Tarvitz's warning saves thousands, and Garviel Loken leads a hopeless resistance in the ruins. Nathaniel Garro, kept from the drop by his wounds, seizes a frigate in orbit and runs for Terra while Horus pounds the city flat.`,
        blurbSafe: `On the rebel world of Isstvan III, Horus at last shows his hand, and the loyalists within four Legions find themselves the target. Saul Tarvitz, Garviel Loken and Nathaniel Garro each have a part to play in the hours that follow, and the Age of Darkness begins.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Mechanicum<br>
            <strong>Main Characters:</strong> Dalia Cythera, Koriel Zeth, Kelbor-Hal<br>
            <strong>Timeline:</strong> 005.M31
        `,
        blurb: `As Horus's treachery spreads, Mars tears itself apart. Fabricator General Kelbor-Hal declares for the Warmaster in exchange for the forbidden knowledge sealed away under the Treaty of Mars, loyalist magi such as Koriel Zeth are hunted through their own forge-temples, and Titan fights Titan. Meanwhile the menial Dalia Cythera builds a machine that reads the warp and uncovers the Dragon of Mars, the ancient thing the Emperor buried beneath the Red Planet.`,
        blurbSafe: `As Horus's rebellion spreads, the forges of Mars become the greatest prize in the galaxy, and the Mechanicum's own factions begin to circle one another. Amid the gathering storm a young menial named Dalia Cythera is brought to the Red Planet to build a device that should not be possible, while whispers speak of something ancient stirring far below.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Death Guard<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Ignatius Grulgor, Solun Decius<br>
            <strong>Timeline:</strong> 005.M31
        `,
        blurb: `Battle-Captain Nathaniel Garro of the Death Guard seizes the frigate Eisenstein over Isstvan III and runs for Terra with seventy loyal warriors and the news of Horus's betrayal. Traitor ships hunt them, the life-eater virus gets loose aboard and turns Ignatius Grulgor's men into something worse than dead, and the crippled ship is left adrift in the warp until Rogal Dorn's Imperial Fists find it. Garro reaches Terra, where nobody wants to believe him.`,
        blurbSafe: `Battle-Captain Nathaniel Garro of the Death Guard escapes the Isstvan system aboard the frigate Eisenstein, carrying warning of a betrayal that will tear the Imperium apart. Hunted through the void and stalked by something far worse aboard his own ship, Garro must somehow reach Terra with news that no one on the Throneworld will want to believe.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Main Characters:</strong> Zahariel El'Zurias, Luther, Lion El'Jonson, Nemiel<br>
            <strong>Timeline:</strong> 005.M31
        `,
        blurb: `Two stories run in parallel. On Caliban, Luther and the Librarian Zahariel put down an insurgency against Imperial rule and find something far older stirring beneath the forests, while the resentment of a garrison left behind by its primarch hardens into something worse. Across the galaxy, Lion El'Jonson moves to deny the forge world Diamat and its secret siege engines to Horus, sending Chaplain Nemiel and a small strike force into a Dark Mechanicum trap.`,
        blurbSafe: `With news of Horus's treachery spreading, the Dark Angels are split between the Lion's crusade among the stars and the garrison Luther commands on their home world of Caliban. The Lion moves to keep a vital forge world out of traitor hands, while on Caliban an insurgency, and something far older beneath the forests, test the loyalty of those left behind.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Blood Angels<br>
            <strong>Main Characters:</strong> Sanguinius, Meros, Raldoron, Azkaellon<br>
            <strong>Timeline:</strong> 005-006.M31
        `,
        blurb: `Horus sends Sanguinius and the whole IX Legion to cleanse the Signus Cluster, and the Blood Angels sail into a trap built to break them. Daemons hold the system, the bloodthirster Ka'Bandha waits for the Angel, and the flaw hidden in the Legion's gene-seed, the Red Thirst, is turned against them. They win through at ruinous cost, but the Signus trap keeps them out of the war while the loyalist Legions are butchered at the Isstvan V dropsite massacre.`,
        blurbSafe: `Horus sends Sanguinius and the Blood Angels to liberate the distant Signus Cluster, and what waits there is nothing any son of Baal has faced before. Isolated and outnumbered, the IX Legion must fight a war against horrors out of the warp, and against a secret hidden in their own blood.`
    },
    'shadows-of-treachery-lightning-tower': {
        number: 'XXII.3',
        title: 'THE LIGHTNING TOWER',
        author: 'Dan Abnett',
        timeline: '005-006.M31',
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ['Imperial Fists'],
        anthology: 'Shadows of Treachery',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Imperial Fists<br>
            <strong>Main Characters:</strong> Rogal Dorn, Malcador the Sigillite, Archamus<br>
            <strong>Timeline:</strong> 005-006.M31
        `,
        blurb: `With Horus's betrayal known on Terra, Rogal Dorn is stripping the beauty out of the Imperial Palace and rebuilding it as a fortress, insisting the ornament be crated up for a restoration he may never see. His huscarl Archamus asks him what he is afraid of. Malcador the Sigillite puts the same question in the Investiary, then produces Konrad Curze's tarot deck and draws out the story of the brothers' fight on Cheraut.`,
        blurbSafe: `As the Imperial Palace is disfigured into a fortress, Rogal Dorn is twice asked a question he cannot easily answer: what is he afraid of? A quiet evening with Malcador the Sigillite turns into a gentle interrogation of the Praetorian of Terra.`
    },
    'war-lord-red-sands': {
        number: 'XXXIII.3',
        title: 'LORD OF THE RED SANDS',
        author: 'Aaron Dembski-Bowden',
        timeline: '005.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ["World Eaters"],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> World Eaters<br>
            <strong>Main Characters:</strong> Angron, Kauragar<br>
            <strong>Timeline:</strong> 005.M31
        `,
        blurb: `On Isstvan III, Angron rampages through the ruins killing loyalist Emperor's Children, Death Guard and his own World Eaters without much distinction. Captain Kauragar manages to open a small wound in his gene-father's throat before falling, which pleases the primarch enough that he stays with the dying man. Asked why he now fights for Horus, Angron answers that he does not: Nuceria taught him that only freedom is worth having.`,
        blurbSafe: `Amid the ruins of Isstvan III, Angron cuts through loyalists and his own World Eaters alike, finding a strange serenity in the carnage. One of his captains gets close enough to ask the primarch why he now follows the Warmaster.`
    },
    'eye-vorax': {
        number: 'XXXV.7',
        title: 'VORAX',
        author: 'Matthew Farrer',
        timeline: '005-006.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Dark Mechanicum', 'Imperial Fists'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Matthew Farrer<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Dark Mechanicum, Imperial Fists<br>
            <strong>Timeline:</strong> 005-006.M31
        `,
        blurb: `Mars is broken and the Ring of Iron is the last contested outpost still in Dark Mechanicum hands, a shattered halo of forges and shipyards with an Imperial Fists blockade closing around the planet. Rogue priests and adepts survive in its depths. Matthew Farrer's story turns on a reversal of hunter and hunted as those holdouts encounter something they had not counted on.`,
        blurbSafe: `In the wreckage of the Ring of Iron above Mars, holdouts of the Dark Mechanicum shelter in the depths while the Imperial Fists blockade the planet. Deep in the machinery, the roles of hunter and hunted are not what they appear.`
    },
    'silent-child-night': {
        number: 'XXXVII.2',
        title: 'CHILD OF NIGHT',
        author: 'John French',
        timeline: '005-007.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Night Lords'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Night Lords<br>
            <strong>Main Characters:</strong> Fel Zharost, Sevatar, Calliope<br>
            <strong>Timeline:</strong> 005-007.M31
        `,
        blurb: `Fel Zharost, former Chief Librarian of the Night Lords, has hidden in the hive sumps beneath Terra ever since Sevatar and the Edict of Nikaea drove him out of the VIII Legion. An armoured hunter tracks him through the depths while psychic flashbacks lay bare the atrocities he committed in Curze's name. Cornered, Zharost finally learns why he is being pursued, and that his Legion has followed Horus into heresy.`,
        blurbSafe: `An exiled Night Lords Librarian has spent years buried in the hive sumps beneath Terra, far enough down that the galaxy's civil war has passed him by. Someone in power armour is now hunting him through the dark, and he does not know what he is supposed to have done.`
    },
    'silent-wolf-hunt': {
        number: 'XXXVII.7',
        title: 'WOLF HUNT',
        author: 'Graham McNeill',
        timeline: '005.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Luna Wolves', 'Imperial Army', 'Knights-Errant'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Luna Wolves, Imperial Army, Knights-Errant<br>
            <strong>Main Characters:</strong> Severian, Yasu Nagasena<br>
            <strong>Timeline:</strong> 005.M31
        `,
        blurb: `Severian, the last survivor of the Outcast Dead, is loose on Terra and trying to get off the Throneworld as news of the Isstvan V massacre spreads. The former Luna Wolf is tracked through the Petitioner's City by Yasu Nagasena, a patient Imperial hunter backed by the Black Sentinels. Neither man realises that others are watching the chase, and that the real purpose of it only becomes clear once the hunt is over.`,
        blurbSafe: `A fugitive legionary, sole survivor of the Outcast Dead, moves through the underside of Terra hoping to slip off-world before the net closes. An unhurried Imperial hunter and his Black Sentinel escort are already on his trail.`
    },
    'burden-into-exile': {
        number: 'XLVIII.3',
        title: 'INTO EXILE',
        author: 'Aaron Dembski-Bowden',
        timeline: '005-006.M31',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ['Mechanicum', 'Imperial Fists'],
        anthology: 'The Burden of Loyalty',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Burden of Loyalty Anthology<br>
            <strong>Legion:</strong> Mechanicum, Imperial Fists<br>
            <strong>Main Characters:</strong> Arkhan Land, Nicanor<br>
            <strong>Timeline:</strong> 005-006.M31
        `,
        blurb: `As the Dark Mechanicum seize Mars, the technoarchaeologist Arkhan Land, finder of lost Dark Age treasures, becomes a target for hunters sent to capture or kill him. An Imperial Fists squad under Nicanor is sent to lift him off the burning red planet while a pursuer closes in behind them. Told in reverse, the story strips away Land's arrogance to reveal the frightened man beneath and sets up his exile on Terra.`,
        blurbSafe: `Mars is aflame and one of the Imperium's most valuable minds is a prize both sides want. Space Marines arrive to carry the technoarchaeologist Arkhan Land clear, though he has his own reasons to be wary of his apparent rescuers.`
    },
    'burden-cybernetica': {
        number: 'XLVIII.6',
        title: 'CYBERNETICA',
        author: 'Rob Sanders',
        timeline: '005.M31',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ['Mechanicum', 'Raven Guard', 'Imperial Fists'],
        anthology: 'The Burden of Loyalty',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Burden of Loyalty Anthology<br>
            <strong>Legion:</strong> Mechanicum, Raven Guard, Imperial Fists<br>
            <strong>Main Characters:</strong> The Carrion, Rogal Dorn, Malcador the Sigillite<br>
            <strong>Timeline:</strong> 005.M31
        `,
        blurb: `Rob Sanders returns to the Schism of Mars through the Carrion, a Raven Guard maimed so badly that his Legion sent him to the red planet to train as a Techmarine. He watches the forge world turn on itself, then he and a handful of fellow Techmarines fight clear through waves of corrupted skitarii. His testimony reaches Terra, where Rogal Dorn and Malcador weigh a final solution, the extermination of all life on Mars.`,
        blurbSafe: `A grievously wounded Raven Guard, sent away from his Legion to train as a Techmarine on Mars, is on the red planet when the Mechanicum begins to tear itself apart. What he lives through there will shape how Terra chooses to deal with a forge world that has slipped its leash.`
    },
    'fulgrim': {
        number: 'V',
        title: 'FULGRIM',
        author: 'Graham McNeill',
        timeline: '005-006.M31',
        coverImage: 'images/fulgrim.jpg',
        legions: ["Emperor's Children","Iron Hands"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Emperor's Children, Iron Hands<br>
            <strong>Main Characters:</strong> Fulgrim, Ferrus Manus, Lucius, Eidolon<br>
            <strong>Timeline:</strong> 005-006.M31
        `,
        blurb: `The Emperor's Children conquer the Laer temple-world, and Fulgrim carries away a daemon-possessed blade from its shrine. As Slaanesh's influence spreads, the Legion's pursuit of perfection curdles into excess, and at Isstvan V Fulgrim beheads his closest brother, Ferrus Manus of the Iron Hands. Broken by grief, he lets the sword's daemon take his body outright, and his own soul is sealed inside a portrait aboard the Pride of the Emperor.`,
        blurbSafe: `The Emperor's Children discover a daemonic blade on a lost world, and Fulgrim becomes possessed by its malevolent spirit. As Slaanesh's corruption spreads through the Legion, their pursuit of perfection twists into depravity and excess, culminating in a tragic confrontation with Ferrus Manus at Isstvan V.`
    },
    'legacies-hunters-moon': {
        number: 'XXXI.3',
        title: 'HUNTER\'S MOON',
        author: 'Guy Haley',
        timeline: '006.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Space Wolves', 'Alpha Legion'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Space Wolves, Alpha Legion<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `An audio drama set on the primitive ocean world of Pelago. The Space Wolves, appointed by the Emperor as sanctioned executioners of the Legions, have been quietly keeping watch on Alpharius and the XX Legion. A stolen Alpha Legion dropship crashes on Pelago carrying news of the war erupting among the stars, along with a lone survivor and the traitors hunting him, and the Wolves must face whether they could truly carry out a death sentence on one of the Emperor's own sons.`,
        blurbSafe: `On a remote ocean world, Space Wolves charged with watching the secretive XX Legion have their long vigil broken by a crashed dropship and the news it brings.`
    },
    'vulkan-lives': {
        number: 'XXVI',
        title: 'VULKAN LIVES',
        author: 'Nick Kyme',
        timeline: '006-007.M31',
        coverImage: 'images/vulkan-lives.jpg',
        legions: ['Salamanders', 'Night Lords', 'Word Bearers'],
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Salamanders, Night Lords, Word Bearers<br>
            <strong>Main Characters:</strong> Vulkan, Konrad Curze, Artellus Numeon, John Grammaticus, Barthusa Narek<br>
            <strong>Timeline:</strong> 006-007.M31
        `,
        blurb: `Captured at Isstvan V, Vulkan endures tortures designed by Konrad Curze, the Night Haunter. But Vulkan is a Perpetual—he cannot truly die. Each time Curze kills him, he returns, driving the Night Haunter to madness. Vulkan's resilience and inherent nobility stand in stark contrast to Curze's nihilism. His sons search desperately for their lost Primarch while Vulkan himself endures endless death and rebirth, testing the limits of even a Primarch's sanity.`,
        blurbSafe: `Captured at Isstvan V, Vulkan endures tortures designed by Konrad Curze, the Night Haunter. But Vulkan possesses a unique ability—each time Curze kills him, he returns. This endless cycle tests both Primarchs, as Vulkan's resilience confronts Curze's nihilism.`
    },
    'tales-of-heresy-blood-games': {
        number: 'X.1',
        title: 'BLOOD GAMES',
        author: 'Dan Abnett',
        timeline: '006.M31',
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ['Custodian Guard', 'Imperial Fists'],
        anthology: 'Tales of Heresy',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Custodian Guard, Imperial Fists<br>
            <strong>Main Characters:</strong> Amon Tauromachian, Constantin Valdor, Pherom Sichar, Rogal Dorn<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Custodian Amon Tauromachian completes a Blood Game, the Custodian Guard's standing exercise in defeating the Imperial Palace's own defences, and is handed a real assignment: gather evidence that Pherom Sichar, ruler of the continental realm of Hy Brasil, is passing information to Horus. With Terra on a war footing and Rogal Dorn fortifying the Palace, Amon's investigation unravels a layered piece of espionage in which the suspected traitor turns out to have been working for the Imperium all along.`,
        blurbSafe: `Amon Tauromachian of the Custodian Guard has just finished a Blood Game, the exercise in which Custodians try to breach the Imperial Palace's security so it can be improved. His reward is a genuine treason hunt among Terra's own rulers, at the worst possible moment for the Imperium.`
    },
    'tales-of-heresy-the-voice': {
        number: 'X.4',
        title: 'THE VOICE',
        author: 'James Swallow',
        timeline: '006.M31',
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ['Sisters of Silence'],
        anthology: 'Tales of Heresy',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Tales of Heresy Anthology<br>
            <strong>Legion:</strong> Sisters of Silence<br>
            <strong>Main Characters:</strong> Amendera Kendel, Leilani Mollitas, Emrilia Herkaaze<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `The Black Ship Validus vanishes into the warp and is later found derelict. Oblivion Knight Amendera Kendel of the Sisters of Silence boards her with the novice Leilani Mollitas and discovers the psykers in the holds have been freed and fused into one gestalt mind, which claims to be Mollitas herself, sent back from the future with a warning that could stop the coming war. A rival Oblivion Knight, Emrilia Herkaaze, kills Mollitas and destroys the entity, then breaks her vow of silence to admit she follows the Lectitio Divinitatus.`,
        blurbSafe: `A Black Ship carrying a cargo of captured psykers is lost in the warp and later recovered adrift. Amendera Kendel of the Sisters of Silence leads the boarding party into its holds, and what is waiting there has a message for her rather than a fight.`
    },
    'age-of-darkness-face-of-treachery': {
        number: 'XVI.6',
        title: 'THE FACE OF TREACHERY',
        author: 'Gav Thorpe',
        timeline: '006.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ['Raven Guard', 'Alpha Legion', 'World Eaters', 'Imperial Army'],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Raven Guard, Alpha Legion, World Eaters, Imperial Army<br>
            <strong>Main Characters:</strong> Branne, Corax, Marcus Valerius, Delerax<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Picking up from the audio drama Raven's Flight, Commander Branne brings a Raven Guard relief fleet, with Imperial Army officer Marcus Valerius, back to Isstvan V to lift Corax and the survivors of the Dropsite Massacre off the black sand. Their path through the traitor blockade opens when the World Eaters commander Delerax is murdered by his own second in command, who is really an Alpha Legion infiltrator wearing a dead man's face. Corax escapes and sets course for Terra, and the story leads directly into Deliverance Lost.`,
        blurbSafe: `In the immediate aftermath of the Dropsite Massacre, a Raven Guard relief force races to Isstvan V to pull Corax and any survivors out from under the guns of the traitor fleet. Whether they get through rests on one warrior aboard a rebel ship who is not who he appears to be.`
    },
    'age-of-darkness-iron-within': {
        number: 'XVI.8',
        title: 'THE IRON WITHIN',
        author: 'Rob Sanders',
        timeline: '006-007.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ['Iron Warriors', 'Ultramarines', 'Imperial Army'],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Iron Warriors, Ultramarines, Imperial Army<br>
            <strong>Main Characters:</strong> Barabas Dantioch, Idriss Krendl, Tauro Nicodemus, Vastopol<br>
            <strong>Timeline:</strong> 006-007.M31
        `,
        blurb: `Warsmith Barabas Dantioch was left on the dead world of Lesser Damantyne, crippled by a hrud ambush and holding the Schadenhold, a fortress the Iron Warriors themselves carved into a vast cavern. When Perturabo declares for Horus, Dantioch refuses to follow, and with the Ultramarines champion Tauro Nicodemus, a Dreadnought and an Imperial Army garrison he holds the Schadenhold for a year against a besieging Iron Warriors host under Warsmith Idriss Krendl, finally bringing the fortress down on his attackers.`,
        blurbSafe: `On the lifeless world of Lesser Damantyne, a disgraced and disfigured Warsmith commands a fortress his own Legion built. When the Iron Warriors come back to Damantyne he has to decide what his oath was really to, and then hold a siege nobody expects him to survive.`
    },
    'the-primarchs-reflection-crackd': {
        number: 'XX.1',
        title: 'THE REFLECTION CRACK\'D',
        author: 'Graham McNeill',
        timeline: '006.M31',
        coverImage: 'images/the-primarchs.jpg',
        legions: ["Emperor's Children"],
        anthology: 'The Primarchs',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Primarchs Anthology<br>
            <strong>Legion:</strong> Emperor's Children<br>
            <strong>Main Characters:</strong> Lucius, Fulgrim, Julius Kaesoron, Fabius, Marius Vairosean, Eidolon<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `After the Drop Site Massacre, Lucius decides that the Fulgrim leading the Emperor's Children is an impostor and talks Julius Kaesoron, Fabius and Marius Vairosean into seizing their primarch and torturing the daemon out of him. Fulgrim submits to all of it, then rises from the rack unharmed. He had already forced the possessing daemon into the portrait hanging in La Fenice, and the whole episode was a lesson for his favoured sons.`,
        blurbSafe: `The Emperor's Children are sliding into excess and their primarch's behaviour has grown erratic and capricious. Lucius, of all people, is the first to work out that something about Fulgrim does not add up, and persuading the Brotherhood of the Phoenix to act on that suspicion is dangerous work.`
    },
    'shadows-of-treachery-ravens-flight': {
        number: 'XXII.5',
        title: 'RAVEN\'S FLIGHT',
        author: 'Gav Thorpe',
        timeline: '006.M31',
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ['Raven Guard', 'Iron Warriors', 'World Eaters', 'Imperial Army'],
        anthology: 'Shadows of Treachery',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Raven Guard, Iron Warriors, World Eaters, Imperial Army<br>
            <strong>Main Characters:</strong> Corvus Corax, Marcus Valerius, Branne Nev, Agapito<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Two threads run in parallel. On Isstvan V after the Drop Site Massacre, Corvus Corax leads the surviving Raven Guard in ambushes on Iron Warriors columns and has them loot the dead to stay in the field. On Deliverance, Praefector Marcus Valerius is woken night after night by the same dream of fire and blood and defies Commander Branne to launch an unauthorised relief fleet, arriving on the ninety-eighth day as the World Eaters close in.`,
        blurbSafe: `In the mountains of Isstvan V, Corvus Corax and the remnants of the Raven Guard fight a scavenging guerrilla war with no prospect of rescue. Light years away on Deliverance, a mortal Imperial Army officer keeps having the same dream and cannot get anyone to listen to him.`
    },
    'mark-of-calth-shards-of-erebus': {
        number: 'XXV.1',
        title: 'THE SHARDS OF EREBUS',
        author: 'Guy Haley',
        timeline: '006-007.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ['Word Bearers'],
        anthology: 'Mark of Calth',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Main Characters:</strong> Erebus, Kor Phaeron, Quor Vondar, Hol Beloth, Kolos Undil<br>
            <strong>Timeline:</strong> 006-007.M31
        `,
        blurb: `Before the ambush at Calth, Erebus takes the anathame that mortally wounded Horus, hammers eight shards from it and grows them into daggers in a vat of blood. He gives one to each of the six commanders Lorgar has chosen to lead the attack and keeps two back. Interleaved flashbacks cover his training under the Davinite priestess who taught him to step through the warp, and how he repaid her once the lessons ended.`,
        blurbSafe: `On the eve of the attack on Calth, Erebus works a notorious relic blade in a forge and prepares gifts for the Word Bearers commanders Lorgar has chosen to lead the ambush. Woven through the acrimonious council of war is the story of how the Dark Apostle learned his craft.`
    },
    'legacies-veritas-ferrum': {
        number: 'XXXI.4',
        title: 'VERITAS FERRUM',
        author: 'David Annandale',
        timeline: '006.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Iron Hands"],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Iron Hands<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `An audio drama named for the Iron Hands strike cruiser that reaches the Isstvan system with the second wave of the loyalist fleet. Battered by the traitors and forced to withdraw, the ship's command must weigh the survival of the vessel and its crew against the survivors of the Dropsite Massacre calling for rescue. It is a direct prequel to the novel The Damnation of Pythos.`,
        blurbSafe: `An Iron Hands warship arrives at Isstvan with the second wave and, driven back by the traitors, its crew faces a hard decision when survivors on the ground beg for aid.`
    },
    'legacies-strike-fade': {
        number: 'XXXI.6',
        title: 'STRIKE AND FADE',
        author: 'Guy Haley',
        timeline: '006.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Salamanders', 'Night Lords'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Salamanders, Night Lords<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `A short audio drama set in the aftermath of the Isstvan V massacre. A handful of surviving Salamanders, cut off and hunted across the ruined dropsite, lay an ambush for a Night Lords warband that believes it is stalking easy prey. Revenge counts for more with them than survival does, and the trap they spring costs some of them sooner than they expected.`,
        blurbSafe: `Stranded Salamanders survivors of the Dropsite Massacre turn the tables on their pursuers, setting an ambush for a Night Lords warband roaming the ruined battlefield.`
    },
    'war-artefacts': {
        number: 'XXXIII.8',
        title: 'ARTEFACTS',
        author: 'Nick Kyme',
        timeline: '006.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ["Salamanders"],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Main Characters:</strong> Vulkan, T'kell<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Before leaving for Isstvan V, Vulkan returns to Nocturne and takes his Master of the Forge, T'kell, into the secret vault beneath the fortress-monastery. Shaken by Konrad Curze's murder of Nostramo, and by a conversation with Horus he now reads very differently, Vulkan orders the thousands of unique weapons he has made destroyed rather than risk them. T'kell argues for them, and is named the Legion's first Forgefather.`,
        blurbSafe: `On the eve of Isstvan V, Vulkan comes home to Nocturne and looks at his personal armoury with new eyes, wondering what his life's work as a weaponsmith would mean in the wrong hands.`
    },
    'war-chirurgeon': {
        number: 'XXXIII.11',
        title: 'CHIRURGEON',
        author: 'Nick Kyme',
        timeline: '006.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ["Emperor's Children"],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Emperor's Children<br>
            <strong>Main Characters:</strong> Fabius, Lycaeon<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Fabius, chief Apothecary of the Emperor's Children, works through a surgery while recalling the genetic blight that nearly ended the III Legion before Fulgrim was found, and the executions he ordered to contain it, including that of his friend Lycaeon. Fulgrim's gene-seed halted the decay but never cured it. The patient on the slab turns out to be Fabius himself, assisted by Lycaeon's mindless reanimated body.`,
        blurbSafe: `Fabius of the Emperor's Children operates, and remembers the genetic flaw that almost wiped out the III Legion in its earliest days. His Legion believes that flaw was cured long ago, but its chief Apothecary knows something they do not.`
    },
    'eye-aurelian': {
        number: 'XXXV.2',
        title: 'AURELIAN',
        author: 'Aaron Dembski-Bowden',
        timeline: '006.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Word Bearers', 'Chaos Daemons'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Word Bearers, Chaos Daemons<br>
            <strong>Main Characters:</strong> Lorgar Aurelian, Argel Tal, Ingethel, Magnus the Red<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Four days after the Drop Site Massacre, Lorgar assaults the daemon-possessed Fulgrim in front of the assembled traitor primarchs, then recounts to Magnus the pilgrimage he made into the Eye of Terror forty-three years earlier. Guided by the daemon Ingethel, the Word Bearers primarch walked dead worlds and a ruined craftworld, was tested by a champion of Khorne, and was shown visions of Calth, Terra and his Legion's damnation.`,
        blurbSafe: `Aaron Dembski-Bowden's novella follows Lorgar of the Word Bearers on the pilgrimage into the Eye of Terror that shaped him, guided by a daemon through dead worlds and impossible visions. It is framed by a gathering of the traitor primarchs in the aftermath of Isstvan V.`
    },
    'eye-massacre': {
        number: 'XXXV.4',
        title: 'MASSACRE',
        author: 'Aaron Dembski-Bowden',
        timeline: '006.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Night Lords'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Night Lords<br>
            <strong>Main Characters:</strong> Talos, Konrad Curze<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Talos and First Claw of the Night Lords' 10th Company muster for the drop site massacre on Isstvan V, fighting once more alongside Konrad Curze, a primarch the VIII Legion has campaigned without for years. Told as a series of vignettes, it carries the squad through the slaughter of the loyalist Legions and stands as the direct prequel to Dembski-Bowden's Night Lords trilogy.`,
        blurbSafe: `The Night Lords of First Claw muster for Isstvan V, reunited with a primarch they have fought without for many years. A short prequel introducing Talos and his squad from the Night Lords trilogy.`
    },
    'eye-final-compliance': {
        number: 'XXXV.16',
        title: 'THE FINAL COMPLIANCE OF SIXTY-THREE FOURTEEN',
        author: 'Guy Haley',
        timeline: '006.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Sons of Horus'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Sons of Horus<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `With the Heresy under way, emissaries of the XVI Legion return to worlds brought into compliance during the Great Crusade and demand they swear their oaths again, this time to the Warmaster rather than to the Emperor and with the Imperial Truth declared a lie. On Sixty-Three Fourteen the population must answer while the Sons of Horus stand at battle readiness above them, and a grim decision follows.`,
        blurbSafe: `Worlds that swore compliance to Horus during the Great Crusade are asked to renew their oaths now that he has turned against the Emperor. On Sixty-Three Fourteen the Sons of Horus wait at battle readiness for the answer.`
    },
    'shattered-immortal-duty': {
        number: 'XLIII.3',
        title: 'IMMORTAL DUTY',
        author: 'Nick Kyme',
        timeline: '006.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Iron Hands', 'World Eaters'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Iron Hands, World Eaters<br>
            <strong>Main Characters:</strong> Ahrem Gallikus<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Ahrem Gallikus, a Medusan Immortal of the Iron Hands, stands condemned before his own brothers and is made to account for himself before they kill him. His testimony returns to the void battle above Isstvan V and a boarding action against the traitor warship Retiarius, where he fought the World Eaters and something in him gave way. What he did aboard that ship is what has brought him here.`,
        blurbSafe: `A disgraced Medusan Immortal of the Iron Hands is called on to give an account of his greatest battle, a boarding action fought in the void above Isstvan V.`
    },
    'flame-scorched-earth': {
        number: 'L.2',
        title: 'SCORCHED EARTH',
        author: 'Nick Kyme',
        timeline: '006.M31',
        coverImage: 'images/born-of-flame.jpg',
        legions: ['Salamanders', 'Iron Hands', 'Raven Guard', 'Emperor\'s Children'],
        anthology: 'Born of Flame',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Born of Flame Anthology<br>
            <strong>Legion:</strong> Salamanders, Iron Hands, Raven Guard, Emperor's Children<br>
            <strong>Main Characters:</strong> Ra'stan, Usabius<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `In the days after the Dropsite Massacre, Salamanders legionaries Ra'stan and Usabius leave the other loyalist survivors behind and strike out into the Urgall Depression to learn what, if anything, remains of Vulkan. Their path crosses those of Iron Hands and Raven Guard survivors, and of the Emperor's Children still working over the battlefield. The search becomes a study in grief, faith and the will to endure.`,
        blurbSafe: `Two Salamanders defy their fellow survivors and walk back into the killing fields of Isstvan V, determined to find out what became of their primarch.`
    },
    'flame-artefacts': {
        number: 'L.4',
        title: 'ARTEFACTS',
        author: 'Nick Kyme',
        timeline: '006.M31',
        coverImage: 'images/born-of-flame.jpg',
        legions: ["Salamanders"],
        anthology: 'Born of Flame',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Born of Flame Anthology<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Main Characters:</strong> Vulkan, T'kell<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Before leaving for Isstvan V, Vulkan returns to Nocturne and takes his Master of the Forge, T'kell, into the secret vault beneath the fortress-monastery. Shaken by Konrad Curze's murder of Nostramo, and by a conversation with Horus he now reads very differently, Vulkan orders the thousands of unique weapons he has made destroyed rather than risk them. T'kell argues for them, and is named the Legion's first Forgefather.`,
        blurbSafe: `On the eve of Isstvan V, Vulkan comes home to Nocturne and looks at his personal armoury with new eyes, wondering what his life's work as a weaponsmith would mean in the wrong hands.`
    },
    'flame-immortal-duty-2': {
        number: 'L.5',
        title: 'IMMORTAL DUTY',
        author: 'Nick Kyme',
        timeline: '006.M31',
        coverImage: 'images/born-of-flame.jpg',
        legions: ['Iron Hands', 'World Eaters'],
        anthology: 'Born of Flame',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Born of Flame Anthology<br>
            <strong>Legion:</strong> Iron Hands, World Eaters<br>
            <strong>Main Characters:</strong> Ahrem Gallikus<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Ahrem Gallikus, a Medusan Immortal of the Iron Hands, stands condemned before his own brothers and is made to account for himself before they kill him. His testimony returns to the void battle above Isstvan V and a boarding action against the traitor warship Retiarius, where he fought the World Eaters and something in him gave way. What he did aboard that ship is what has brought him here.`,
        blurbSafe: `A disgraced Medusan Immortal of the Iron Hands is called on to give an account of his greatest battle, a boarding action fought in the void above Isstvan V.`
    },
    'war-phoenician': {
        number: 'XXXIII.9',
        title: 'THE PHOENICIAN',
        author: 'Nick Kyme',
        timeline: '006.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Iron Hands', 'Emperor\'s Children'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Iron Hands, Emperor's Children<br>
            <strong>Main Characters:</strong> Gabriel Santar, Fulgrim, Ferrus Manus, Julius Kaesoron<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `On the black sands of Isstvan V, Iron Hands first captain Gabriel Santar lies dying, struck down by his former battle-brother Julius Kaesoron of the Emperor's Children. Helpless, he watches Fulgrim murder his primarch Ferrus Manus. In his last moments Santar's failing sight shows him what the supposedly perfect Phoenician has actually become, a revelation that may never reach the X Legion.`,
        blurbSafe: `The Dropsite Massacre seen from the black sand, through the eyes of a fallen Iron Hands officer. As Fulgrim and Ferrus Manus come face to face, he glimpses something about the Phoenician that nobody else has seen.`
    },
    'the-damnation-of-pythos': {
        number: 'XXX',
        title: 'THE DAMNATION OF PYTHOS',
        author: 'David Annandale',
        timeline: '006.M31',
        coverImage: 'images/the-damnation-of-pythos.jpg',
        legions: ["Iron Hands","Salamanders","Raven Guard"],
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Iron Hands, Salamanders, Raven Guard<br>
            <strong>Main Characters:</strong> Durun Atticus<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Survivors of the Drop Site Massacre, a company of Iron Hands under Captain Durun Atticus with smaller Salamanders and Raven Guard contingents, make landfall on the death world Pythos and carve a sanctuary out of the jungle for human refugees fleeing the war. The monsters outside the walls are the least of it. Buried beneath Pythos is a gateway to the warp, and the Iron Hands' grief-blinded refusal to see it damns everyone who sheltered there.`,
        blurbSafe: `Survivors of the Drop Site Massacre from three shattered Legions regroup on an insignificant death world and carve out a refuge for human refugees adrift on the tides of the war. The jungle and its monstrous creatures are dangerous enough, but something far darker is gathering beneath the surface of Pythos.`
    },
    'silent-purge': {
        number: 'XXXVII.8',
        title: 'THE PURGE',
        author: 'Anthony Reynolds',
        timeline: '006-008.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Word Bearers', 'Ultramarines', 'Imperial Fists'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> Anthony Reynolds<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Word Bearers, Ultramarines, Imperial Fists<br>
            <strong>Main Characters:</strong> Sor Talgron, Rogal Dorn, Aecus Decimus, Jarulek<br>
            <strong>Timeline:</strong> 006-008.M31
        `,
        blurb: `Sor Talgron, captain of the Word Bearers' 34th Company, is recalled from Terra where he has spent years playing the trusted ally to Rogal Dorn. Before he leaves he murders the Terran-born Predicant Volkhar Wreth and has a daemon bound into the corpse. He then takes his company to Percepton Primus in Ultramar, where a 163-day war against the Ultramarines ends with the defenders scouring their own world with phosphex.`,
        blurbSafe: `A Word Bearers captain has spent the years before the Heresy stationed on Terra, treated as a friend by the Imperial Fists. Recalled to Lorgar's side for the Shadow Crusade, he leads his company into a long and vicious siege against the Ultramarines in Ultramar.`
    },
    'shattered-meduson': {
        number: 'XLIII.1',
        title: 'MEDUSON',
        author: 'Dan Abnett',
        timeline: '006.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Iron Hands', 'Sons of Horus'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Iron Hands, Sons of Horus<br>
            <strong>Main Characters:</strong> Shadrak Meduson, Jebez Aug, Amadeus DuCaine, Tybalt Marr<br>
            <strong>Timeline:</strong> 006.M31
        `,
        blurb: `Watching the Dropsite Massacre from orbit aboard the Ironside, Clan-Commander Shadrak Meduson loses a hand, his old friend the Legion Master and his primarch in a single day. In the leaderless fleet that follows he argues against the Clan Fathers' retreat into tradition, wanting a mongrel force built from all the survivors. A Sons of Horus trap sprung by Tybalt Marr costs the Iron Hands their Clan Fathers and leaves Meduson warleader.`,
        blurbSafe: `Among the leaderless Iron Hands who escaped the Dropsite Massacre, one outspoken clan-commander refuses to accept that the Legion should simply rebuild along the old lines.`
    },
    'shattered-the-either': {
        number: 'XLIII.9',
        title: 'THE EITHER',
        author: 'Graham McNeill',
        timeline: '006-009.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Sons of Horus', 'Iron Hands'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Sons of Horus, Iron Hands<br>
            <strong>Main Characters:</strong> Tybalt Marr, Horus, Shadrak Meduson<br>
            <strong>Timeline:</strong> 006-009.M31
        `,
        blurb: `The Shattered Legions war told from the other side. Tybalt Marr of the Sons of Horus, forever overlooked beside more celebrated captains, retells the void trap that destroyed the Iron Hands Clan Fathers and returns to his Legion boasting that he has killed Shadrak Meduson. On conquered Dwell his triumph curdles when he learns of the attempt on Horus's own life, and hunting Meduson becomes his sole duty.`,
        blurbSafe: `Graham McNeill turns the Shattered Legions story around and follows a Sons of Horus captain, the least regarded of the Warmaster's officers, as he tries to make a name that will outlast him.`
    },
    'heralds-myriad': {
        number: 'LII.1',
        title: 'MYRIAD',
        author: 'Rob Sanders',
        timeline: '006-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Mechanicum', 'Dark Mechanicum', 'Collegia Titanica'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Mechanicum, Dark Mechanicum, Collegia Titanica<br>
            <strong>Main Characters:</strong> Kallistra Lennox, Ramann Synk, Galahax Zarco, Omnek-70<br>
            <strong>Timeline:</strong> 006-013.M31
        `,
        blurb: `On blockaded Mars, former Collegia Titanica princeps Kallistra Lennox leads a loyalist cell of Titan crew, enginseers and tech-adepts in guerrilla raids against the Dark Mechanicum of Kelbor-Hal. Out in the wastes they recover an uncorrupted Kastelan robot and find it houses the Tabula Myriad, an abominable intelligence from the Dark Age of Technology. Their lexorcist frees it anyway, and it begins turning traitor Titans against their masters.`,
        blurbSafe: `A ragged loyalist resistance of Titan crew, enginseers and tech-adepts wages a guerrilla war against the Dark Mechanicum on blockaded Mars. Out in the wastes they recover a battle automaton that is not what it appears to be, and must weigh how far they will go to break the stalemate.`
    },
    'mark-of-calth-athame': {
        number: 'XXV.7',
        title: 'ATHAME',
        author: 'John French',
        timeline: '007.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ['Word Bearers', 'Perpetuals'],
        anthology: 'Mark of Calth',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Word Bearers, Perpetuals<br>
            <strong>Main Characters:</strong> Gog, Magritte, Anacreon, Criol Fowst, Oll Persson<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `An unnamed narrator addresses the blade itself, tracing a flint knife from the dying man who knapped it on ancient Terra to the deathless killer Gog, the Cognitae scholar Magritte and the Word Bearer Anacreon. Every owner kills with it and is killed in turn. The chain ends on Calth, where the cultist Criol Fowst dies and the Perpetual Oll Persson takes the blade to cut his way into the warp.`,
        blurbSafe: `A disembodied narrator speaks directly to an object, recounting the succession of hands that carried it across thousands of years, from pre-Imperial Terra through the archaeology of the early Great Crusade and on into the Word Bearers Legion. The chain of owners finally reaches Calth.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Raven Guard, Alpha Legion<br>
            <strong>Main Characters:</strong> Corvus Corax, Omegon, Branne Nev, Vincente Sixx<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Three months after the Drop Site Massacre, Corax is lifted off Isstvan V with a fraction of his Legion and wins from the Emperor the secret gene-stock of the Primarch Project. The first accelerated cadre, the Raptors, is a triumph, but Alpha Legion infiltrators taint the remaining gene-tech with a daemon-touched virus. The next two thousand recruits emerge hideously mutated, Omegon escapes with the stolen primarch DNA, and Corax abandons the shortcut for good.`,
        blurbSafe: `Decimated at Isstvan V, Corvus Corax seeks to rebuild his Legion using gene-tech from the Emperor's laboratories. But Alpha Legion operatives have infiltrated his ranks, threatening to sabotage the Raven Guard's desperate attempt at salvation.`
    },
    'nemesis': {
        number: 'XIII',
        title: 'NEMESIS',
        author: 'James Swallow',
        timeline: '007-008.M31',
        coverImage: 'images/nemesis.jpg',
        legions: ['Officio Assassinorum', 'Word Bearers'],
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Officio Assassinorum, Word Bearers<br>
            <strong>Main Characters:</strong> Malcador the Sigillite, Spear, Erebus, Iota<br>
            <strong>Timeline:</strong> 007-008.M31
        `,
        blurb: `Malcador the Sigillite, secret Grand Master of the Assassin clades, authorises the first Execution Force: six killers, one from every clade, sent to Dagonet to murder Horus after eight lone assassins have already failed. Unknown to them, Erebus has loosed a weapon of his own, a daemon-bonded pariah called Spear whose real target is the Emperor. The two hunts collide on Dagonet, and the strike on Horus fails with all but one assassin dead.`,
        blurbSafe: `In the shadows of the Imperial Palace, powerful figures authorise a desperate gambit: an Execution Force drawn from every Assassin clade, sent to end the war by killing Horus before it can spread further. What they cannot know is that another assassin is already abroad, with his sights set on a very different target.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Ultramarines, Word Bearers<br>
            <strong>Main Characters:</strong> Roboute Guilliman, Lorgar, Kor Phaeron, Remus Ventanus<br>
            <strong>Timeline:</strong> 007.M31
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Word Bearers, Ultramarines, Space Wolves, World Eaters, Thousand Sons<br>
            <strong>Main Characters:</strong> Lysimachus Cestus, Zadkiel, Skraal, Brynngar<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `The Word Bearers unleash the Furious Abyss, a secretly built battleship meant to devastate Macragge and gut the Ultramarines while Kor Phaeron strikes at Calth. A scratch band of loyalists drawn from several Legions, led by Ultramarines Captain Lysimachus Cestus, pursues it across the warp. They finally board the leviathan and overload its plasma generatorium, destroying it short of Ultramar, but Cestus kills Zadkiel and dies in the wreck.`,
        blurbSafe: `The Word Bearers launch the Furious Abyss, a massive warship designed to destroy Macragge and cripple the Ultramarines. A ragtag group of loyalist Space Marines from various Legions pursue the vessel through the warp, racing to stop it before it reaches Ultramar.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> World Eaters, Word Bearers, Ultramarines<br>
            <strong>Main Characters:</strong> Angron, Lorgar, Khârn, Roboute Guilliman, Argel Tal<br>
            <strong>Timeline:</strong> 007.M31
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
        legions: ['White Scars', 'Alpha Legion', 'Death Guard', 'Space Wolves'],
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> White Scars, Alpha Legion, Death Guard, Space Wolves<br>
            <strong>Main Characters:</strong> Jaghatai Khan, Shiban Khan, Hasik Noyan-Khan, Mortarion, Revuel Arvida<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Pinned at Chondax by an Alpha Legion blockade and a storm of contradictory astropathic messages, Jaghatai Khan refuses to pick a side until he knows the truth. He breaks out and takes his fleet to Prospero, finds it a burned ruin, and there Mortarion comes to recruit him; the two primarchs duel among the ashes. Meanwhile the Legion's warrior lodges stage a coup for Horus, and the Khan must break his own sons before riding for Terra.`,
        blurbSafe: `The White Scars, far from Terra prosecuting the Great Crusade, learn of the Heresy late. Jaghatai Khan must decide which side to join as his Legion divides between those loyal to the Emperor and those who would follow Horus. The Khan's choice will define the White Scars forever.`
    },
    'age-of-darkness-savage-weapons': {
        number: 'XVI.9',
        title: 'SAVAGE WEAPONS',
        author: 'Aaron Dembski-Bowden',
        timeline: '007-009.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Dark Angels", "Night Lords"],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Dark Angels, Night Lords<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Konrad Curze, Sevatar, Corswain<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `Two years into the Thramas Crusade, with the Dark Angels and Night Lords grinding each other down across the sector, Konrad Curze calls Lion El'Jonson to a parlay on the abandoned world of Tsagualsa. Each primarch brings champions, Corswain and Alajos against Sevatar and Sheng. Curze goads the Lion into striking first and the meeting collapses into a savage brawl between primarchs and their chosen warriors, breaking off unresolved as reinforcements arrive from both fleets.`,
        blurbSafe: `The Dark Angels and the Night Lords have been tearing at each other across the Thramas sector for two years when Konrad Curze proposes a face-to-face meeting with Lion El'Jonson on a barren world. Each primarch is to bring only a handful of warriors, and neither believes a word the other says.`
    },
    'the-primarchs-the-lion': {
        number: 'XX.3',
        title: 'THE LION',
        author: 'Gav Thorpe',
        timeline: '007-009.M31',
        coverImage: 'images/the-primarchs.jpg',
        legions: ['Dark Angels', 'Death Guard', 'Iron Hands'],
        anthology: 'The Primarchs',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Primarchs Anthology<br>
            <strong>Legion:</strong> Dark Angels, Death Guard, Iron Hands<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Corswain, Calas Typhon, Nemiel, Theralyn Fiana, Lasko Midoa<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `Eighty-two days after fighting Konrad Curze at Tsagualsa, the Lion turns aside from the Thramas Crusade for Perditus, where Calas Typhon's Death Guard and a stranded Iron Hands force are contesting a Mechanicum facility that houses Tuchulcha, a sentient warp engine. En route the Invincible Reason is boarded by daemons, and the Lion beheads the Chaplain Nemiel for refusing to let the Librarians fight, setting aside the Edict of Nikaea. He takes the machine and destroys the planet.`,
        blurbSafe: `Deep into the Thramas Crusade and unable to shake a pursuer through the warp, Lion El'Jonson diverts to a remote Mechanicum research world where Death Guard and Iron Hands forces are already fighting over a secret device. Working out who to believe will cost the Dark Angels a great deal more than a battle.`
    },
    'the-primarchs-serpent-beneath': {
        number: 'XX.4',
        title: 'THE SERPENT BENEATH',
        author: 'Rob Sanders',
        timeline: '007.M31',
        coverImage: 'images/the-primarchs.jpg',
        legions: ["Alpha Legion"],
        anthology: 'The Primarchs',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Primarchs Anthology<br>
            <strong>Legion:</strong> Alpha Legion<br>
            <strong>Main Characters:</strong> Omegon, Sheed Ranko, Goran Setebos, Xalmagundi, Volkern Auguramus, Alpharius<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Omegon assembles Sigma Squad, a rogue telekinetic named Xalmagundi and a Mechanicum adept to infiltrate and destroy Tenebrae Station, an Alpha Legion warp-manipulation facility that has kept the White Scars blind and contained on Chondax. The raid succeeds at ruinous cost, and the survivors learn only at the end that the Omegon leading them is Captain Sheed Ranko in disguise. The real Omegon then lies to Alpharius about why the station had to die.`,
        blurbSafe: `Omegon puts together a team of Alpha Legion operatives, a rogue psyker and a Mechanicum adept for a raid on a top-secret installation, one that the Alpha Legion itself controls. Nobody on the mission is told more than they need to know, and that includes who is really giving the orders.`
    },
    'shadows-of-treachery-crimson-fist': {
        number: 'XXII.1',
        title: 'THE CRIMSON FIST',
        author: 'John French',
        timeline: '007.M31',
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ['Imperial Fists', 'Iron Warriors'],
        anthology: 'Shadows of Treachery',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Imperial Fists, Iron Warriors<br>
            <strong>Main Characters:</strong> Alexis Polux, Rogal Dorn, Sigismund, Perturabo, Amandus Tyr<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Becalmed by warp storms in the Phall system, Captain Alexis Polux inherits command of Dorn's Retribution Fleet and holds a defensive sphere for months while his astropaths burn themselves out reaching for Terra. On Terra, Sigismund admits he asked to stay behind because Euphrati Keeler prophesied he would die at Phall. Perturabo attacks expecting to face Sigismund. Polux obeys the recall order, loses Amandus Tyr and the Tribune, and escapes aboard a captured Iron Warriors ship.`,
        blurbSafe: `Trapped in the Phall system for months and cut off from Terra, Captain Alexis Polux has to choose between forcing a way home and holding the Retribution Fleet where it is. The Iron Warriors have already found him, and on Terra his primarch is dealing with a confession he did not want to hear.`
    },
    'mark-of-calth-calth-that-was': {
        number: 'XXV.2',
        title: 'CALTH THAT WAS',
        author: 'Graham McNeill',
        timeline: '007.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ['Ultramarines', 'Word Bearers'],
        anthology: 'Mark of Calth',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Ultramarines, Word Bearers<br>
            <strong>Main Characters:</strong> Remus Ventanus<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Graham McNeill returns to Remus Ventanus, the Saviour of Calth, as the war drags on across the poisoned surface and down in the arcologies below. Moving to destroy a large Word Bearers contingent still operating above ground, Ventanus is drawn into a trap that could end every remaining life on the planet, and into an encounter that will shape the Ultramarines for ten thousand years to come.`,
        blurbSafe: `The war on Calth is far from finished, above ground and below it, and Remus Ventanus sets out against a Word Bearers force still operating on the surface. What he meets there will matter to his Legion for a very long time afterwards.`
    },
    'mark-of-calth-dark-heart': {
        number: 'XXV.3',
        title: 'DARK HEART',
        author: 'Anthony Reynolds',
        timeline: '007.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Word Bearers"],
        anthology: 'Mark of Calth',
        details: `
            <strong>Author:</strong> Anthony Reynolds<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Word Bearers<br>
            <strong>Main Characters:</strong> Marduk, Kor Phaeron<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Anthony Reynolds drops the antihero of his Word Bearers novels into the Heresy. Marduk, a young acolyte of Kor Phaeron, fights on Calth, but his ambitions are not aimed at Guilliman's sons at all. Called to account for leaving his mentor for dead, he reaches for infernal pacts and daemonic power to carve out a place for himself inside his own Legion, the first steps of a name that will still be spoken with awe millennia later.`,
        blurbSafe: `The assault on Calth is meant to be a campaign of vengeance against the Ultramarines, but one young acolyte of Kor Phaeron is chasing something else entirely. This is an early appearance of Marduk, later the lead of Anthony Reynolds's Word Bearers series.`
    },
    'mark-of-calth-the-traveller': {
        number: 'XXV.4',
        title: 'THE TRAVELLER',
        author: 'David Annandale',
        timeline: '007.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ['Ultramarines', 'Word Bearers'],
        anthology: 'Mark of Calth',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Ultramarines, Word Bearers<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `David Annandale follows a survivor of the Word Bearers' opening strike on Calth's orbital defences down into the arcology shelters, among the ordinary people the Ultramarines built them to protect. He did not come through it alone. What follows is a claustrophobic horror piece about one man's mind buckling under the daemonic pressure the traitors' rituals have let into the deep places of the planet.`,
        blurbSafe: `A survivor of the Word Bearers' opening attack on Calth's orbital defences shelters with the civilians in the arcologies below the ruined surface. He may not have survived alone.`
    },
    'mark-of-calth-deeper-darkness': {
        number: 'XXV.5',
        title: 'A DEEPER DARKNESS',
        author: 'Rob Sanders',
        timeline: '007-008.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Ultramarines", "Word Bearers"],
        anthology: 'Mark of Calth',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Ultramarines, Word Bearers<br>
            <strong>Main Characters:</strong> Hylas Pelion, Ungol Shax<br>
            <strong>Timeline:</strong> 007-008.M31
        `,
        blurb: `Ultramarines sergeant Hylas Pelion develops an obsessive need to run down the Word Bearers Dark Apostle Ungol Shax, and the hunt draws him into the deepest caverns beneath Calth while his Legion works to secure the arcologies. Rob Sanders plays it as gothic horror. What Pelion learns is that the traitors have called up things from the warp that even the Word Bearers should be afraid to summon.`,
        blurbSafe: `An Ultramarines sergeant becomes fixated on hunting down one particular Word Bearers Dark Apostle, and the chase takes him steadily further beneath Calth. The traitors have been summoning, and not everything they called up answers to them.`
    },
    'mark-of-calth-unmarked': {
        number: 'XXV.8',
        title: 'UNMARKED',
        author: 'Dan Abnett',
        timeline: '007.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Perpetuals"],
        anthology: 'Mark of Calth',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Perpetuals<br>
            <strong>Main Characters:</strong> Oll Persson, M'kar<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Picking up directly from Know No Fear, the Perpetual Oll Persson leads a handful of Calth survivors away from the ruined world, cutting portals with a stolen athame and following the winds of the aether towards a goal he will not explain. Their road runs through swamps, woods and empty cities, and through Oll's own past, from the Argonauts to Verdun and 73 Easting, with the daemon M'kar behind them the whole way.`,
        blurbSafe: `Carrying straight on from Know No Fear, Oll Persson leads a small band of Calth survivors on a journey he refuses to explain, using a stolen blade to cut his way from one place to the next. He has been walking a very long time, and something has been following him for much of it.`
    },
    'legacies-brotherhood-storm': {
        number: 'XXXI.1',
        title: 'BROTHERHOOD OF THE STORM',
        author: 'Chris Wraight',
        timeline: '007.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["White Scars"],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> White Scars<br>
            <strong>Main Characters:</strong> Shiban Khan, Jaghatai Khan<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `A novella and the first substantial look at the Heresy-era White Scars, written as a direct prequel to the novel Scars. On the ork-held world of Chondax, Shiban Khan leads his warriors in the fast, joyous war of speed and lance the V Legion prefers, while a Stormseer wrestles with his waking gifts and an outsider struggles to keep the Legion supplied. Half the galaxy has already chosen sides, and Jaghatai Khan's silence is starting to look like a choice of its own.`,
        blurbSafe: `On the ork battlefields of Chondax, Shiban Khan leads his White Scars in a war of speed and lance, while the rest of the Imperium waits to learn where Jaghatai Khan stands.`
    },
    'legacies-honour-dead': {
        number: 'XXXI.7',
        title: 'HONOUR TO THE DEAD',
        author: 'Gav Thorpe',
        timeline: '007.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Collegia Titanica', 'Ultramarines'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Collegia Titanica, Ultramarines<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `An audio drama set during the burning of Calth. Traitor Battle Titans of the Fire Masters stalk the streets of the city of Ithraca, intent on massacring the fleeing civilian population for their new dark masters, and only the loyalist engines of Legio Praesagius, the True Messengers, stand against them. With the nearby Ultramarines scattered, the story is told largely from ground level, following a mortal woman and her family caught beneath the god-machines.`,
        blurbSafe: `As Calth burns, traitor and loyalist Titan legions duel across the ruined city of Ithraca, and the civilians trapped beneath them have to fend for themselves.`
    },
    'legacies-butchers-nails': {
        number: 'XXXI.8',
        title: 'BUTCHER\'S NAILS',
        author: 'Aaron Dembski-Bowden',
        timeline: '007-008.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['World Eaters', 'Word Bearers'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> World Eaters, Word Bearers<br>
            <strong>Main Characters:</strong> Angron, Lorgar<br>
            <strong>Timeline:</strong> 007-008.M31
        `,
        blurb: `An audio drama in which Angron and Lorgar travel together on a covert mission of the Word Bearers primarch's devising. The World Eaters' berserk fury, and the endless grinding of the Butcher's Nails in Angron's skull, draw xenos raiders down on them, and the killing only feeds him further. Lorgar watches, tries to understand the ruin in his brother's head, and reads in it the portents of the Blood God's son.`,
        blurbSafe: `Angron and Lorgar set out together on a secretive voyage, and the World Eaters primarch's rage soon attracts attention from xenos raiders who will not let him pass.`
    },
    'legacies-kryptos': {
        number: 'XXXI.10',
        title: 'KRYPTOS',
        author: 'Graham McNeill',
        timeline: '007.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Raven Guard', 'Iron Hands', 'Mechanicum'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Raven Guard, Iron Hands, Mechanicum<br>
            <strong>Main Characters:</strong> Nykona Sharrowkyn, Sabik Wayland<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `A short story set after the Dropsite Massacre on the doomed forge world of Cavor Sarta. Nykona Sharrowkyn of the Raven Guard and Sabik Wayland of the Iron Hands infiltrate Dark Mechanicum territory to seize the enemy's most valued asset, the strange thing called the Kryptos, by which the traitors encode their fleet communications. It explains how the Shattered Legions came by the asset they use in Angel Exterminatus.`,
        blurbSafe: `Two veterans of the shattered loyalist Legions, one Raven Guard and one Iron Hand, strike deep into Dark Mechanicum territory on a dying forge world to take the enemy's most prized possession.`
    },
    'legacies-wolfs-claw': {
        number: 'XXXI.11',
        title: 'WOLF\'S CLAW',
        author: 'Chris Wraight',
        timeline: '007.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Space Wolves', 'Alpha Legion'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Space Wolves, Alpha Legion<br>
            <strong>Main Characters:</strong> Bjorn<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `A short audio drama set in the Alaxxes Nebula, where the VI Legion has gone to ground after being caught by the renegade Alpha Legion. The young pack leader Bjorn, freshly maimed and now called the One-Handed by his warriors, is desperate to fight again, but the Iron Priests have little time for replacing a proud legionary's limbs. He goes looking for new claws of his own, and for traitor blood to christen them in.`,
        blurbSafe: `Sheltering in a nebula after a mauling by the Alpha Legion, a young and newly maimed Space Wolves pack leader sets out to find his own way back into the fight.`
    },
    'war-allegiance': {
        number: 'XXXIII.20',
        title: 'ALLEGIANCE',
        author: 'Chris Wraight',
        timeline: '007-009.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['White Scars', 'Thousand Sons'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> White Scars, Thousand Sons<br>
            <strong>Main Characters:</strong> Revuel Arvida, Targutai Yesugei, Jaghatai Khan, Orzun<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `Aboard the Swordstorm after the second battle of Prospero, Revuel Arvida, sole Thousand Sons survivor of the Wolf King's wrath, recovers under Stormseer Targutai Yesugei, who quietly presses him to join the V Legion. Arvida hides the onset of the flesh-change while dreaming of ruined Prospero. He is brought to the kurultai where Jaghatai Khan judges the White Scars who swore the blood oath, and one condemned man's refusal to break an oath settles Arvida's own choice.`,
        blurbSafe: `Carried away from Prospero by the White Scars, the Thousand Sons sorcerer Revuel Arvida slowly recovers his strength and his powers under Stormseer Yesugei's care. The V Legion has its own reckoning to hold, and Arvida must work out where he now belongs.`
    },
    'war-daemonology': {
        number: 'XXXIII.21',
        title: 'DAEMONOLOGY',
        author: 'Chris Wraight',
        timeline: '007.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Death Guard'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Death Guard<br>
            <strong>Main Characters:</strong> Mortarion, Lermenta, Malcador the Sigillite<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Beaten by Jaghatai Khan above Prospero, Mortarion leads the Death Guard on a punitive rampage and annihilates the library world Terathalion. He is hunting one thing: a daemon that has spent twenty-five years wearing the skin of an archivist called Lermenta. Interleaved with memories of arguing with Malcador on Terra, his interrogation goes wrong, and the primarch who despises sorcery is forced to use it, then to start learning it from her.`,
        blurbSafe: `Smarting from his defeat by the Khan, Mortarion turns the Death Guard loose on the worlds of the Prosperine empire, though his own attention is plainly elsewhere. On the library world of Terathalion, the insular primarch is looking for something very specific.`
    },
    'eye-brotherhood-moon': {
        number: 'XXXV.5',
        title: 'BROTHERHOOD OF THE MOON',
        author: 'Chris Wraight',
        timeline: '007.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["White Scars"],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> White Scars<br>
            <strong>Main Characters:</strong> Torghun Khan, Jaghatai Khan<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `In the aftermath of the Terran lodge rebellion inside the V Legion, Torghun Khan is brought before his accusers and his primarch to explain himself. Jaghatai Khan has ordered the hearing, and Torghun must account for how far he went and whether his conduct amounts to outright heresy. Chris Wraight's story runs alongside the events of the novel Scars.`,
        blurbSafe: `After the rebellion within the White Scars, the Terran legionary Torghun Khan is put on trial before Jaghatai Khan and made to account for his part in it. A companion piece to Chris Wraight's Scars.`
    },
    'eye-inheritor': {
        number: 'XXXV.6',
        title: 'INHERITOR',
        author: 'Gav Thorpe',
        timeline: '007-008.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Word Bearers', 'World Eaters', 'Ultramarines'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Word Bearers, World Eaters, Ultramarines<br>
            <strong>Main Characters:</strong> Torquill Eliphas, Lorgar Aurelian<br>
            <strong>Timeline:</strong> 007-008.M31
        `,
        blurb: `Torquill Eliphas of the Word Bearers, the legionary who will later be known as the Inheritor, pursues his own designs on Kronus deep inside Ultramar. Fighting as part of Lorgar's Shadow Crusade and supported by World Eaters berserkers, he wars on the Ultramarines, but his real objective is the Templum Daemonarchia, a structure raised to harness the power of the warp.`,
        blurbSafe: `During Lorgar's Shadow Crusade, the Word Bearer Torquill Eliphas leads an assault on the world of Kronus in Ultramar with World Eaters at his side. Killing Ultramarines is not the whole of what he wants from the place.`
    },
    'eye-red-marked': {
        number: 'XXXV.9',
        title: 'RED-MARKED',
        author: 'Nick Kyme',
        timeline: '007.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Ultramarines', 'Word Bearers'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Ultramarines, Word Bearers<br>
            <strong>Main Characters:</strong> Aeonid Thiel<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Sergeant Aeonid Thiel, still wearing the red mark of censure, is stranded on the Ultramar garrison world of Oran on his way back to Macragge. Traitor warband activity is rising, listening posts have fallen silent, and his warnings about gaps in the defences only irritate his superiors. With a handful of rogue veterans he sets out to find the truth behind something called the Nightfane.`,
        blurbSafe: `Held up on the garrison world of Oran, the censured Ultramarines sergeant Aeonid Thiel notices traitor activity rising and outposts going quiet. He gathers a few veterans to investigate what is stirring on the borders of Ultramar.`
    },
    'eye-master-first': {
        number: 'XXXV.10',
        title: 'MASTER OF THE FIRST',
        author: 'Gav Thorpe',
        timeline: '007-009.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Dark Angels"],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Main Characters:</strong> Merir Astelan, Luther, Zahariel El'Zurias, Cypher<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `On Caliban, with the I Legion scattered and bled by the Thramas Crusade, Luther tightens his grip and a group of Dark Angels officers plot armed rebellion against him. Former Chapter Master Merir Astelan agrees to lead a bloodless coup, seizing the communications relays to reach Terra and the Lion. Instead he betrays the conspirators to Luther and helps crush them, keeping his own ambitions for another day.`,
        blurbSafe: `With the Dark Angels scattered by the Thramas Crusade, Luther consolidates power on Caliban and officers of the First begin to conspire against him. Merir Astelan is asked to lead them, and he has his own view of what the Legion needs.`
    },
    'silent-watcher': {
        number: 'XXXVII.1',
        title: 'THE WATCHER',
        author: 'CZ Dunn',
        timeline: '007-009.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Knights-Errant', 'Space Wolves', 'Night Lords'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> CZ Dunn<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Space Wolves, Night Lords<br>
            <strong>Main Characters:</strong> Ison, Konrad Curze<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `A shuttle limps back into the Solar System carrying a single broken Space Wolf, the last of a VI Legion watch-pack posted to keep eyes on Konrad Curze and the Night Lords. His account is too fragmented to act on, so Ison, a Knight-Errant and former Legion Librarian, goes into the dying warrior's mind and relives the pack's mission and the traitor attack that destroyed it.`,
        blurbSafe: `A shuttle returns to the Solar System carrying one gravely wounded Space Wolf from a pack sent to watch over the most unstable of the Emperor's sons. What he says makes little sense, so one of Malcador's Knights-Errant goes looking for the truth inside his head.`
    },
    'silent-ghosts-speak': {
        number: 'XXXVII.11',
        title: 'GHOSTS SPEAK NOT',
        author: 'James Swallow',
        timeline: '007-009.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Knights-Errant', 'Sisters of Silence', 'Death Guard'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Sisters of Silence, Death Guard<br>
            <strong>Main Characters:</strong> Amendera Kendel, Helig Gallor, Nathaniel Garro<br>
            <strong>Timeline:</strong> 007-009.M31
        `,
        blurb: `Amendera Kendel, once a Sister of Silence and now Malcador's Agentia Tertius, is sent into the Proxima system to run down reports that the Warmaster's agents have taken root on Terra's doorstep. For the work she calls on the Seventy, the loyalist Death Guard who fled Isstvan with Nathaniel Garro and have been kept in quarantine on Luna, Helig Gallor among them. What she uncovers is less straightforward than the infiltration she went looking for.`,
        blurbSafe: `A former Sister of Silence, now one of the Sigillite's senior agents, investigates signs that Horus's people have reached a system close to Terra. To do it she has to draw on the mistrusted loyalist Death Guard who escaped Isstvan III.`
    },
    'corax-soulforge': {
        number: 'XL.1',
        title: 'SOULFORGE',
        author: 'Gav Thorpe',
        timeline: '007.M31',
        coverImage: 'images/corax.jpg',
        legions: ['Raven Guard', 'Word Bearers', 'Mechanicum'],
        anthology: 'Corax',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Corax Anthology<br>
            <strong>Legion:</strong> Raven Guard, Word Bearers, Mechanicum<br>
            <strong>Main Characters:</strong> Corvus Corax, Agapito<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Fighting a shadow war after the Dropsite Massacre, Corax's Raven Guard board a stricken Word Bearers vessel and find proof of an alliance between the traitors and the Mechanicum forge world of Constanix II, which is turning out terrifying new war machines. Corax takes the Legion to the forge world in a hit-and-run campaign, infiltrates the Mechanicum priesthood to win allies, and meets the first daemon engines of the Dark Mechanicum. Commander Agapito's unspent rage over Isstvan tests his primarch's methods throughout.`,
        blurbSafe: `The surviving Raven Guard remain defiant after Isstvan V, and evidence recovered behind enemy lines points to a pact between the Word Bearers and a Mechanicum forge world supplying dreadful new war machines. Corvus Corax judges the threat too great to ignore.`
    },
    'corax-ravenlord': {
        number: 'XL.3',
        title: 'RAVENLORD',
        author: 'Gav Thorpe',
        timeline: '007-008.M31',
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        anthology: 'Corax',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Corax Anthology<br>
            <strong>Legion:</strong> Raven Guard<br>
            <strong>Main Characters:</strong> Corvus Corax<br>
            <strong>Timeline:</strong> 007-008.M31
        `,
        blurb: `Corax and the remnants of his Legion now wage a war of liberation, freeing worlds held down by traitor forces, gathering followers and disrupting the Warmaster's influence wherever they can. An unexpected reunion with another survivor of Isstvan V leads the Raven Guard to the prison colony of Carandiru, and to an assault that makes them confront the ghosts of their own uprising on Deliverance. Corax must rally warriors still weighed down by the massacre and by the disaster at Ravendelve.`,
        blurbSafe: `Corax's diminished Legion fights a very different kind of war, liberating oppressed worlds and drawing recruits to the Raven Guard banner. A chance reunion with a fellow survivor of Isstvan V sets them on course for a prison colony and for their own past.`
    },
    'corax-shadowmasters': {
        number: 'XL.2',
        title: 'THE SHADOWMASTERS',
        author: 'Gav Thorpe',
        timeline: '007.M31',
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        anthology: 'Corax',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Corax Anthology<br>
            <strong>Legion:</strong> Raven Guard<br>
            <strong>Main Characters:</strong> Chamell<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `The Mor Deythan stand apart from the rest of the Raven Guard, so secretive that many deny they exist at all. Sharing their primarch's gift for becoming one with the shadows, Sergeant Chamell leads his self-styled Shadowmasters behind enemy lines to sow fear and confusion in support of a wider Legion assault. The piece revisits an engagement from Corax: Soulforge from the perspective of the warriors who made it possible.`,
        blurbSafe: `The Mor Deythan are the Raven Guard's most secretive cadre, warriors who share Corax's ability to slip through any battlefield unseen and unheard. This short piece follows one sergeant and his squad working far behind enemy lines.`
    },
    'garro-oath-moment': {
        number: 'XLII.1',
        title: 'GARRO: OATH OF MOMENT',
        author: 'James Swallow',
        timeline: '007.M31',
        coverImage: 'images/garro.jpg',
        legions: ['Knights-Errant', 'Death Guard', 'Ultramarines', 'Word Bearers'],
        anthology: 'Garro',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Garro Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard, Ultramarines, Word Bearers<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Malcador the Sigillite, Tylos Rubio<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Newly returned to Terra after the flight of the Eisenstein, Nathaniel Garro is given a secret mission by Malcador the Sigillite and sent to a warzone where the Ultramarines are supposedly fighting greenskins. He arrives at Calth in the middle of the Word Bearers' betrayal, fights alongside the XIII Legion's 21st Company defending the approaches to Numinus, and only then reveals his real objective: to demand an oath of moment from Tylos Rubio, a Codicier silenced by the Edict of Nikaea.`,
        blurbSafe: `Having proved his loyalty aboard the Eisenstein, Nathaniel Garro accepts an assignment from Malcador the Sigillite that sends him back among the stars to an Ultramarines warzone. What the Sigillite actually wants from him there is not what Garro has been told.`
    },
    'garro-sword-truth': {
        number: 'XLII.2',
        title: 'GARRO: SWORD OF TRUTH',
        author: 'James Swallow',
        timeline: '007-008.M31',
        coverImage: 'images/garro.jpg',
        legions: ['Knights-Errant', 'Death Guard', 'Ultramarines', 'World Eaters', 'Emperor\'s Children', 'White Scars'],
        anthology: 'Garro',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Garro Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard, Ultramarines, World Eaters, Emperor's Children, White Scars<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Tylos Rubio, Macer Varren<br>
            <strong>Timeline:</strong> 007-008.M31
        `,
        blurb: `Back from Calth and operating out of the Somnus Citadel on Luna, Garro is sent with Tylos Rubio and a Custodian to intercept a ragged flotilla of legionaries loitering at the edge of the Solar System. Boarding the World Eaters warship Daggerline, he meets captains of the World Eaters, Emperor's Children and White Scars, all claiming to be loyalists in flight from Isstvan. Falsified orders point to a conspiracy, and Garro must look beneath the obvious to tell friend from foe.`,
        blurbSafe: `Returning from one battlefield to find another mission waiting, Nathaniel Garro is sent to assess a ragged fleet of legionaries from several Legions gathered near Terra. Their presence alarms the loyalist defenders, and their word alone will not settle whether they are friends or foes.`
    },
    'shattered-unforged': {
        number: 'XLIII.2',
        title: 'UNFORGED',
        author: 'Guy Haley',
        timeline: '007.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Salamanders'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Main Characters:</strong> Jo'Phor, Hae'Phast, Donak<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Guy Haley returns to the Salamanders resistance cell of his audio drama Strike and Fade, still waging a hopeless guerrilla war in the ruins of Isstvan V long after the massacre ended. A group of untested Salamanders investigates a homing beacon deep in a planetary ravine, hoping it means friendly survivors. The ambush that closes on Jo'Phor and his brothers is sprung by loyalists who never realise who they are killing.`,
        blurbSafe: `A handful of Salamanders are still fighting a guerrilla war in the ruins of Isstvan V long after the massacre. A homing beacon deep in a ravine promises they may not be alone.`
    },
    'shattered-grey-talon': {
        number: 'XLIII.4',
        title: 'GREY TALON',
        author: 'Chris Wraight',
        timeline: '007.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Iron Hands', 'White Scars', 'Sons of Horus'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Iron Hands, White Scars, Sons of Horus<br>
            <strong>Main Characters:</strong> Bion Henricos, Hibou Khan, Shadrak Meduson<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `The Grey Talon is a captured Sons of Horus destroyer still flying the traitors' colours, commanded by Bion Henricos of the Iron Hands and crewed by disgraced White Scars doing penance under Hibou Khan. Cold towards each other, the two work out how to stalk a traitor ship through the warp and board it. The attack goes badly wrong until Shadrak Meduson's warriors teleport aboard, and Henricos is offered a place in something larger.`,
        blurbSafe: `A captured traitor warship prowls the void under a loyalist crew, an Iron Hand in command and White Scars penitents in her holds, striking covertly at isolated enemy vessels.`
    },
    'burden-perpetual': {
        number: 'XLVIII.1',
        title: 'PERPETUAL',
        author: 'Dan Abnett',
        timeline: '007.M31',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Perpetuals"],
        anthology: 'The Burden of Loyalty',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Burden of Loyalty Anthology<br>
            <strong>Legion:</strong> Perpetuals<br>
            <strong>Main Characters:</strong> Oll Persson<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Dan Abnett's short audio drama picks up from UNMARKED, with Oll Persson leading his small band of Calth refugees along the backways of time and space towards Terra. The road ends abruptly at a city perched on the edge of oblivion, with no way onward and enemies closing in. Reflective rather than action driven, it deepens the mystery of what the Perpetuals are without giving any firm answers.`,
        blurbSafe: `Oll Persson, the undying man who walked away from Calth, is still shepherding his handful of survivors through time and space towards Terra. Their journey stalls in a strange place at the edge of everything, and whatever is hunting them has not given up.`
    },
    'burden-wolf-king': {
        number: 'XLVIII.8',
        title: 'THE WOLF KING',
        author: 'Chris Wraight',
        timeline: '007.M31',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ['Space Wolves', 'Alpha Legion', 'Dark Angels'],
        anthology: 'The Burden of Loyalty',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> The Burden of Loyalty Anthology<br>
            <strong>Legion:</strong> Space Wolves, Alpha Legion, Dark Angels<br>
            <strong>Main Characters:</strong> Leman Russ, Bjorn, Gunnar Gunnhilt, Kva<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `Bridging SCARS and VENGEFUL SPIRIT, Wraight's novella finds the Space Wolves still bleeding from the razing of Prospero and run to ground in the Alaxxes Nebula by the Alpha Legion fleet. Jaghatai Khan refuses to come, and a demoralised Leman Russ shuts himself away, leaving First Captain Gunnar Gunnhilt to fight the breakout and young Bjorn to talk his primarch back from despair. Gunnhilt dies buying time, and a Dark Angels fleet hidden in the nebula finally turns the battle.`,
        blurbSafe: `Battered by Prospero and cornered in a corrosive nebula by an Alpha Legion fleet, the Space Wolves call on a brother Legion for aid. With his ships trapped and supplies failing, Leman Russ must work out what the Emperor's executioner is actually for.`
    },
    'heralds-children-sicarus': {
        number: 'LII.6',
        title: 'CHILDREN OF SICARUS',
        author: 'Anthony Reynolds',
        timeline: '007.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Word Bearers', 'Chaos Daemons'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Anthony Reynolds<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Word Bearers, Chaos Daemons<br>
            <strong>Main Characters:</strong> Kor Phaeron, Jepeth, Larazzar<br>
            <strong>Timeline:</strong> 007.M31
        `,
        blurb: `After the Infidus Imperator is destroyed while duelling Macragge's Honour, Kor Phaeron cuts a hole in reality and escapes to the daemon world of Sicarus with a remnant of Word Bearers. Their new refuge is no sanctuary: the hordes of the Kairic adept Larazzar besiege them until only six legionaries and twelve mortal servants remain. A reincarnating prophet offers salvation through an ancient prophecy, at a price the Black Cardinal will not pay.`,
        blurbSafe: `Driven out of Ultramar with his flagship destroyed, Kor Phaeron leads his surviving Word Bearers into the Eye of Terror and onto a daemon world that proves anything but safe. Their salvation may lie in the ancient legends of Sicarus, if the Black Cardinal is the one to lead them to it.`
    },
    'silent-grey-angel': {
        number: 'XXXVII.3',
        title: 'GREY ANGEL',
        author: 'John French',
        timeline: '008.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Knights-Errant', 'Dark Angels'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Dark Angels<br>
            <strong>Main Characters:</strong> Garviel Loken, Iacton Qruze, Luther, Cypher<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `On his first assignment as a Knight-Errant, Garviel Loken travels to Caliban with Iacton Qruze to judge whether Luther and the Dark Angels left behind there can still be trusted. Loken lets himself be taken prisoner so he can question Luther face to face while Qruze works deeper into the fortress of Aldurukh. Cypher and a Watcher in the Dark help them get clear, and they leave with more questions than answers.`,
        blurbSafe: `Two of Malcador's newly recruited Knights-Errant are sent to Caliban to work out where the loyalty of Luther and the Dark Angels left on the home world really lies. Getting close enough to ask means walking into the fortress of Aldurukh on the Order's terms.`
    },
    'silent-luna-mendax': {
        number: 'XXXVII.6',
        title: 'LUNA MENDAX',
        author: 'Graham McNeill',
        timeline: '008.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Knights-Errant'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Knights-Errant<br>
            <strong>Main Characters:</strong> Garviel Loken, Tarik Torgaddon, Iacton Qruze<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `Back from Caliban and badly frayed, Garviel Loken has withdrawn to an abandoned bio-dome on Luna, tending a garden and picking at the holes in his own memory. There he is visited by Tarik Torgaddon, the friend killed on Isstvan III, who presses him to remember the oath he swore to the Emperor. When Iacton Qruze arrives with a fresh summons from Malcador, Loken takes it.`,
        blurbSafe: `Withdrawn to a deserted dome on Luna, a former Luna Wolves captain tends a garden and tries to piece himself back together after a mission that went badly. Then he receives a visitor whose presence he cannot account for.`
    },
    'age-of-darkness-rules-of-engagement': {
        number: 'XVI.1',
        title: 'RULES OF ENGAGEMENT',
        author: 'Graham McNeill',
        timeline: '008.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Ultramarines"],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Main Characters:</strong> Remus Ventanus, Roboute Guilliman<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `Captain Remus Ventanus of the Ultramarines 4th Company fights a run of increasingly desperate campaigns across the worlds of Ultramar, on Talassar, Prandium, Quintarn and Macragge, against Death Guard, World Eaters and Salamanders. Each engagement is fought under a different doctrine and each goes wrong in a different way. The reveal is that they are live rehearsals staged by Roboute Guilliman to stress-test the battlefield doctrine he is writing, the Codex Astartes, and to prepare for an Imperium in which Terra may already be lost.`,
        blurbSafe: `Remus Ventanus and the Ultramarines 4th Company are thrown into one battle after another across the worlds of Ultramar, each against a different Legion and each fought to a different set of tactical rules. Guilliman is watching closely, and the pattern behind the fighting is the real subject of the story.`
    },
    'age-of-darkness-liars-due': {
        number: 'XVI.2',
        title: 'LIAR\'S DUE',
        author: 'James Swallow',
        timeline: '008.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ['Alpha Legion'],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Alpha Legion<br>
            <strong>Main Characters:</strong> Mendacs, Leon Kyyter, Silas Cincade<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `On the agricultural backwater of Virger-Mos II, a quiet, helpful lodger called Mendacs has been living in Town 44 for eight weeks. Then word arrives that Horus has killed the Emperor and now rules the galaxy. Over roughly a day the town turns on itself, neighbours shoot neighbours, and the boy Leon Kyyter works out that Mendacs is an Alpha Legion operative who has taken a world without a shot being fired by his Legion.`,
        blurbSafe: `Virger-Mos II is a farming world so remote that news arrives slowly and cannot easily be checked. When word comes that the Emperor is dead and Horus has won, the people of Town 44 have only each other, and one very helpful outsider, to help them work out what to believe.`
    },
    'age-of-darkness-forgotten-sons': {
        number: 'XVI.3',
        title: 'FORGOTTEN SONS',
        author: 'Nick Kyme',
        timeline: '008.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ['Salamanders', 'Ultramarines', 'Iron Warriors'],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Salamanders, Ultramarines, Iron Warriors<br>
            <strong>Main Characters:</strong> Heka'tan, Arcadese, Ortane Vorkellen, Persephia<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `Captain Heka'tan of the Salamanders and Captain Arcadese of the Ultramarines are sent with the iterator Ortane Vorkellen to Bastion, a non-aligned world first brought to compliance by the Iron Warriors, to argue the Emperor's case against the Warmaster's envoy. Two separate traitor plots run against them, a lacrymole shapeshifter working the negotiations and an Iron Warrior seeding the crust with atomics. The marines unpick the conspiracy but cannot save Bastion, and Heka'tan dies saving the rival ambassador as they flee the dying world.`,
        blurbSafe: `A Salamander and an Ultramarine, both carrying the losses their Legions have already taken, are sent as ambassadors to a neutral world that must choose between the Emperor and Horus. Neither is a diplomat, and they are not the only interested parties working the room.`
    },
    'age-of-darkness-little-horus': {
        number: 'XVI.7',
        title: 'LITTLE HORUS',
        author: 'Dan Abnett',
        timeline: '008.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ['Sons of Horus', 'Iron Hands', 'White Scars'],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Sons of Horus, Iron Hands, White Scars<br>
            <strong>Main Characters:</strong> Horus Aximand, Shadrak Meduson, Hibou Khan, Ezekyle Abaddon<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `Horus Aximand leads the Sons of Horus assault on Dwell against a loyalist force built around Shadrak Meduson's Iron Hands and White Scars under Hibou Khan, all the while stalked in his sleep by a figure he cannot place. The fighting turns, and a White Scars blade takes off the front of his helm and his face with it. Lying unconscious while the medicae reattach it, Aximand finally recognises the man in the dream: Garviel Loken.`,
        blurbSafe: `Horus Aximand, the Mournival captain they call Little Horus, takes the Sons of Horus to the world of Dwell to break a loyalist remnant that refuses to stay broken. He has not slept well since Isstvan III, and there is someone in his dreams he cannot put a name to.`
    },
    'legacies-warmaster': {
        number: 'XXXI.9',
        title: 'WARMASTER',
        author: 'John French',
        timeline: '008.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Sons of Horus"],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Sons of Horus<br>
            <strong>Main Characters:</strong> Horus<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `A nine-minute audio drama delivered almost entirely as a single monologue. In the strategium of the Vengeful Spirit, Horus lays out his assault on his father's Imperium, weighing his brothers loyal and traitorous alike, his ambitions for the war and the fears he admits to nobody. The piece turns dark when the identity of the listener he has been addressing all along is revealed.`,
        blurbSafe: `Alone in the strategium of his flagship, the Warmaster talks through his brothers, his war and his private misgivings, in a short piece carried almost entirely by his own voice.`
    },
    'legacies-divine-word': {
        number: 'XXXI.13',
        title: 'THE DIVINE WORD',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Raven Guard', 'Imperial Army'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Raven Guard, Imperial Army<br>
            <strong>Main Characters:</strong> Marcus Valerius<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `A short story following Marcus Valerius, commander of the Therion Cohort, fighting alongside the Raven Guard. A lifelong adherent of the Imperial Truth who has always scorned those who would make a god of the Emperor, Valerius acts on a sudden flash of intuition that saves his troops from annihilation against overwhelming odds. Badly shaken, he turns to the forbidden Lectitio Divinitatus, and the first seeds of the Imperial Church are sown.`,
        blurbSafe: `An Imperial Army officer serving beside the Raven Guard, and a firm believer in the Imperial Truth, finds his certainties tested when instinct saves his command from destruction.`
    },
    'legacies-kharn': {
        number: 'XXXI.15',
        title: 'KHÂRN: THE EIGHTFOLD PATH',
        author: 'Anthony Reynolds',
        timeline: '008.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["World Eaters"],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Anthony Reynolds<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> World Eaters<br>
            <strong>Main Characters:</strong> Khârn<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `An audio drama set in the fighting pits aboard the World Eaters flagship Conqueror. Khârn and his brothers stage ever bloodier contests of carnage against one another as the Butcher's Nails tighten their hold on the Legion. The XII have forsaken the Crimson Path they once walked and taken up a darker road in its place, and Khârn stands at the centre of what they are turning into.`,
        blurbSafe: `In the fighting pits of the Conqueror, Khârn and his fellow World Eaters test themselves against each other while the Butcher's Nails reshape what the Legion is becoming.`
    },
    'legacies-cypher': {
        number: 'XXXI.16',
        title: 'CYPHER: GUARDIAN OF ORDER',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Dark Angels"],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Dark Angels<br>
            <strong>Main Characters:</strong> Zahariel, Luther, Lord Cypher<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `An audio drama set on Caliban rather than at the war front. Luther summons the young Librarian Zahariel and sends him into the unknown depths of the Northwilds in the company of Lord Cypher, keeper of the First Legion's traditions, because only a select few know what dark secret the old forests still hold. Something ancient and malevolent is stirring there just as rumours of the galactic civil war reach the home world.`,
        blurbSafe: `On Caliban, a young Dark Angels Librarian is sent into the northern forests alongside the enigmatic Lord Cypher, to look into a secret that only a handful of the First Legion share.`
    },
    'legacies-heart-conqueror': {
        number: 'XXXI.17',
        title: 'HEART OF THE CONQUEROR',
        author: 'Aaron Dembski-Bowden',
        timeline: '008.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['World Eaters', 'Word Bearers'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> World Eaters, Word Bearers<br>
            <strong>Main Characters:</strong> Nisha Andrasta, Lorgar<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `A short story first printed in the 2014 Horus Heresy Weekender programme and set after the events of Betrayer. It is told by Nisha Andrasta, the Navigator responsible for guiding Angron's flagship, who recalls the pride and purpose she felt on first taking the post and cannot reconcile it with what the ship and its Legion have since become. An unsettling encounter with Lorgar offers her no comfort at all.`,
        blurbSafe: `The Navigator who guides Angron's flagship looks back on why she first took the post, and measures that memory against the vessel and Legion she now serves.`
    },
    'war-gunsight': {
        number: 'XXXIII.18',
        title: 'GUNSIGHT',
        author: 'James Swallow',
        timeline: '008.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Officio Assassinorum', 'Sons of Horus'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Officio Assassinorum, Sons of Horus<br>
            <strong>Main Characters:</strong> Eristede Kell, Horus, Letae<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `Vindicare assassin Eristede Kell has been hiding in the underdecks of the Vengeful Spirit for years since the failed Dagonet operation, injured, half-amnesiac and hearing whispers he attributes to Samus. He befriends a secretly loyal ship serf, Letae, then kills him in a delusional fit and uses the body as bait. When Horus comes, Kell fires, the Warmaster plucks the round out of the air, and Kell is turned rather than killed.`,
        blurbSafe: `An Officio Assassinorum killer has spent a very long time hidden in the bowels of Horus's flagship, waiting for a single shot at the Warmaster himself. Injury and isolation have not left his mind intact.`
    },
    'eye-ironfire': {
        number: 'XXXV.8',
        title: 'IRONFIRE',
        author: 'Rob Sanders',
        timeline: '008.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Iron Warriors'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Iron Warriors<br>
            <strong>Main Characters:</strong> Idriss Krendl, Perturabo<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `Warsmith Idriss Krendl of the Iron Warriors, broken and disgraced by his failure at the Schadenhold, means to buy his way back into Perturabo's favour. Commanding two enormous siege guns taken from the forge world Diamat, he tests a new siege-breaking doctrine, the Ironfire protocol, against the Great Selenic Palace on Euphorus, spending subordinates and allies freely to prove the method works.`,
        blurbSafe: `Disgraced after the fall of the Schadenhold, the Iron Warriors warsmith Idriss Krendl sets out to prove a new siege doctrine and win back his primarch's regard. He brings two colossal guns to bear on the Great Selenic Palace of Euphorus.`
    },
    'corax-value-fear': {
        number: 'XL.4',
        title: 'THE VALUE OF FEAR',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        coverImage: 'images/corax.jpg',
        legions: ['Raven Guard', 'Night Lords', 'Alpha Legion'],
        anthology: 'Corax',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Corax Anthology<br>
            <strong>Legion:</strong> Raven Guard, Night Lords, Alpha Legion<br>
            <strong>Main Characters:</strong> Ashel<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `Corax's Raven Guard are gathering leaderless loyalists to their banner wherever they find them. In the industrial nightmare of an underhive, Sergeant Ashel's squad fights beside the unlikeliest of allies, a loyal Night Lord, to put down an Alpha Legion-fomented rebellion. Watching his counterpart work, Ashel is unsettled by how effectively terror achieves what the XIX Legion's own shadow tactics do not. A very short 2014 Advent Calendar piece.`,
        blurbSafe: `The Raven Guard are drawing every leaderless loyalist they can find to Corax's banner. Deep in an underhive, one of their sergeants receives a lesson in terror tactics from the most unlikely of allies.`
    },
    'corax-raptor': {
        number: 'XL.5',
        title: 'RAPTOR',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        coverImage: 'images/corax.jpg',
        legions: ['Raven Guard', 'Space Wolves'],
        anthology: 'Corax',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Corax Anthology<br>
            <strong>Legion:</strong> Raven Guard, Space Wolves<br>
            <strong>Main Characters:</strong> Navar Hef, Corvus Corax<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `After Isstvan V, Corax sanctioned an accelerated implantation process to make new Raven Guard, and his enemies subverted it in secret. Horrendously mutated but unwavering, the Raptors still stand ready to serve. When a watch-pack of Space Wolves legionaries arrives unannounced, Lieutenant Navar Hef must greet these warlike kinsmen, endure their scrutiny of his malformed brothers, and decide whether the Wolves are hiding flaws of their own.`,
        blurbSafe: `The Raptors are Corax's newest legionaries, products of a rushed gene-seed process and viewed with suspicion by almost everyone. When Space Wolves arrive without warning, one Raptor lieutenant is left to host warriors who have come to take their measure.`
    },
    'garro-legion-one': {
        number: 'XLII.3',
        title: 'GARRO: LEGION OF ONE',
        author: 'James Swallow',
        timeline: '008.M31',
        coverImage: 'images/garro.jpg',
        legions: ['Knights-Errant', 'Death Guard', 'Ultramarines', 'World Eaters', 'Sons of Horus'],
        anthology: 'Garro',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Garro Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard, Ultramarines, World Eaters, Sons of Horus<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Tylos Rubio, Macer Varren, Garviel Loken<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `Almost a year after the betrayal, Garro sets foot on the ruin of Isstvan III with fellow Knights-Errant Tylos Rubio and Macer Varren, hunting a feral survivor the loyalists call Cerberus who strikes at friend and foe alike. Beset by the horrors left on the dead world, the three are nearly killed by Cerberus himself. Garro holds him off and urges him to remember who he truly is: Garviel Loken, once captain of the Luna Wolves.`,
        blurbSafe: `Nathaniel Garro and two fellow Knights-Errant walk the ruins of the world where the Heresy began, searching for a lone survivor who has been killing indiscriminately ever since. What they find there matters far beyond one lost warrior.`
    },
    'garro-shield-lies': {
        number: 'XLII.4',
        title: 'GARRO: SHIELD OF LIES',
        author: 'James Swallow',
        timeline: '008-009.M31',
        coverImage: 'images/garro.jpg',
        legions: ['Knights-Errant', 'Death Guard', 'Mechanicum'],
        anthology: 'Garro',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Garro Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard, Mechanicum<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Katanoh Tallery<br>
            <strong>Timeline:</strong> 008-009.M31
        `,
        blurb: `Katanoh Tallery, a humble Administratum adept on the orbital plate Riga, uncovers evidence of a conspiracy inside the monolithic bureaucracy and flees into the shadows, hunted by Mechanicum automata. She falls instead into the hands of the Knight-Errant Nathaniel Garro, who must weigh whether she is a threat or a witness while the two of them evade her pursuers. For Garro it opens a personal quest to find his own place in the war.`,
        blurbSafe: `For most people on Terra the war exists only as rumour, until a junior Administratum adept stumbles on evidence of a conspiracy reaching into the heart of the Imperium's bureaucracy. Running for her life, she finds herself at the mercy of the mysterious Knight-Errant Nathaniel Garro.`
    },
    'shattered-keys-hel': {
        number: 'XLIII.5',
        title: 'THE KEYS OF HEL',
        author: 'John French',
        timeline: '008.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Iron Hands', 'Death Guard'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Iron Hands, Death Guard<br>
            <strong>Main Characters:</strong> Crius, Soter<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `A sequel to John French's Riven. Crius, once of the Crusader Host and now a revenant reanimated by the very technologies Ferrus Manus sealed away, fights on with the Iron Hands who have turned the Keys of Hel. With Clan-Father Soter of Clan Kadoran among them, the undead legionaries assault a space station held by the Death Guard. What the Iron Hands are letting themselves become matters more than the battle.`,
        blurbSafe: `John French returns to the darkest secret of the Iron Hands, the forbidden technologies their primarch locked away, as a strike force moves against a traitor-held void station.`
    },
    'shattered-deeds-endure': {
        number: 'XLIII.7',
        title: 'DEEDS ENDURE',
        author: 'Gav Thorpe',
        timeline: '008.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Salamanders', 'Iron Hands', 'World Eaters'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Salamanders, Iron Hands, World Eaters<br>
            <strong>Timeline:</strong> 008.M31
        `,
        blurb: `A joint Salamanders and Iron Hands force, spared the slaughter at Isstvan V, finds a World Eaters facility sitting in the middle of a civilian population. The far larger Iron Hands contingent wants an orbital bombardment and will accept the collateral damage. The Salamanders will not spend mortal lives that way. The argument lays bare how differently the two Legions understand the war, and how close allies can come to blows.`,
        blurbSafe: `Salamanders and Iron Hands survivors have made common cause against the traitors, until a World Eaters target surrounded by civilians forces them to agree on how it should be attacked.`
    },
    'angel-exterminatus': {
        number: 'XXIII',
        title: 'ANGEL EXTERMINATUS',
        author: 'Graham McNeill',
        timeline: '009.M31',
        coverImage: 'images/angel-exterminatus.jpg',
        legions: ['Iron Warriors', 'Emperor\'s Children', 'Iron Hands', 'Raven Guard'],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Iron Warriors, Emperor's Children, Iron Hands, Raven Guard<br>
            <strong>Main Characters:</strong> Perturabo, Fulgrim, Nykona Sharrowkyn, Sabak Wayland<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Fulgrim manipulates Perturabo into a joint expedition to the Eldar Crone World of Iydris. Perturabo, master of siege warfare but always bitter at being overlooked, seeks ancient weapons to use against the Emperor. But Fulgrim has darker plans—he intends to ascend to daemonhood by sacrificing Perturabo. The Iron Warriors Primarch barely escapes the trap, emerging with his paranoia and bitterness magnified. Fulgrim achieves his goal, becoming a daemon prince of Slaanesh. The alliance between the Legions fractures further.`,
        blurbSafe: `Fulgrim manipulates Perturabo into a joint expedition to the Eldar Crone World of Iydris. Perturabo seeks ancient weapons, but Fulgrim has darker plans involving ascension and sacrifice. The alliance between the Iron Warriors and Emperor's Children will be tested in ways neither anticipated.`
    },
    'vengeful-spirit': {
        number: 'XXIX',
        title: 'VENGEFUL SPIRIT',
        author: 'Graham McNeill',
        timeline: '009.M31',
        coverImage: 'images/vengeful-spirit.jpg',
        legions: ['Sons of Horus', 'Death Guard'],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Sons of Horus, Death Guard<br>
            <strong>Main Characters:</strong> Horus, Garviel Loken, Mortarion, Raeven Devine<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Horus returns to Molech, a Knight World he helped bring to compliance beside the Emperor generations earlier, hunting the warp gate his father once used to bargain with the Chaos Gods for power. Titan Legions, Knight houses and a small Ultramarines and Blood Angels garrison make the invasion a slaughterhouse, until House Devine turns traitor. Horus passes through the gate and returns transformed, no longer truly human but a match for the Emperor himself.`,
        blurbSafe: `Horus returns to Molech, a Knight World where he once fought beside the Emperor. He seeks entry to the same warp gate the Emperor used to bargain with the Chaos Gods. Defended by loyalist forces, Molech becomes a slaughterhouse as Horus pursues ultimate power.`
    },
    'the-unremembered-empire': {
        number: 'XXVII',
        title: 'THE UNREMEMBERED EMPIRE',
        author: 'Dan Abnett',
        timeline: '009-010.M31',
        coverImage: 'images/the-unremembered-empire.jpg',
        legions: ['Ultramarines', 'Dark Angels', 'Blood Angels', 'Night Lords', 'Salamanders'],
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Ultramarines, Dark Angels, Blood Angels, Night Lords, Salamanders<br>
            <strong>Main Characters:</strong> Roboute Guilliman, Lion El'Jonson, Konrad Curze, Vulkan, Sanguinius, John Grammaticus<br>
            <strong>Timeline:</strong> 009-010.M31
        `,
        blurb: `Believing Terra fallen and the Emperor dead, Guilliman raises Imperium Secundus on Macragge behind the Ruinstorm, navigating by the xenos beacon of the Pharos. Lion El'Jonson arrives suspecting his brother of usurpation, a burned and half-mad Vulkan falls out of the sky, and Konrad Curze stalks the city, coming within a blade's length of killing Guilliman. Curze is finally run down, Grammaticus spears Vulkan with the fulgurite, and Sanguinius arrives to be crowned.`,
        blurbSafe: `Believing Terra has fallen, Roboute Guilliman establishes Imperium Secundus on Macragge. When Lion El'Jonson and Sanguinius arrive, tensions rise as questions of loyalty and ambition threaten to fracture the alliance. The three Primarchs must decide humanity's future.`
    },
    'pharos': {
        number: 'XXXIV',
        title: 'PHAROS',
        author: 'Guy Haley',
        timeline: '009.M31',
        coverImage: 'images/pharos.jpg',
        legions: ['Ultramarines', 'Imperial Fists', 'Night Lords', 'Iron Warriors'],
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Ultramarines, Imperial Fists, Night Lords, Iron Warriors<br>
            <strong>Main Characters:</strong> Barabas Dantioch, Alexis Polux, Krukesh the Pale, Gendor Skraivok, Oberdeii<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `On Sotha, the loyalist Iron Warriors warsmith Barabas Dantioch and Imperial Fists captain Alexis Polux tend the Pharos, the xenos beacon that holds Imperium Secundus together. Krukesh the Pale's scattered Night Lords attack not to destroy it but to seize it, hoping to use it to locate Curze's flagship Nightfall and reunite their broken Legion. Dantioch overloads the device to wreck the invasion fleet and dies doing it. The psychic shockwave carries far beyond the galaxy, where the Tyranid hive fleets take notice.`,
        blurbSafe: `The Pharos is an ancient xenos device on Sotha, the one thing that pierces the Ruinstorm and holds Imperium Secundus together. When a scattered Night Lords fleet moves against it for reasons of their own, a thin garrison of Ultramarines, Imperial Fists and the exiled warsmith who studies the machine must hold the mountain.`
    },
    'age-of-darkness-the-last-remembrancer': {
        number: 'XVI.4',
        title: 'THE LAST REMEMBRANCER',
        author: 'John French',
        timeline: '009.M31',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ['Imperial Fists', 'Remembrancers', 'Knights-Errant'],
        anthology: 'Age of Darkness',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Age of Darkness Anthology<br>
            <strong>Legion:</strong> Imperial Fists, Remembrancers, Knights-Errant<br>
            <strong>Main Characters:</strong> Rogal Dorn, Solomon Voss, Iacton Qruze<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `A traitor ship enters the Solar System to deliver one passenger: Solomon Voss, the most celebrated remembrancer of the Great Crusade, who has spent the war at Horus's side. In a cell beneath the Imperial Palace, Rogal Dorn and Iacton Qruze, now a Knight-Errant in Malcador's service, question him. Voss tells Dorn the Imperium's ideals are already ashes running through his hands, and Dorn, refusing to let that testimony survive, kills him himself.`,
        blurbSafe: `Horus sends a single man back to Terra: Solomon Voss, the Great Crusade's most famous chronicler, who has seen everything the Warmaster has done since. Rogal Dorn must decide what to do with a witness whose account no one in the Imperium can afford to hear.`
    },
    'shadows-of-treachery-prince-of-crows': {
        number: 'XXII.7',
        title: 'PRINCE OF CROWS',
        author: 'Aaron Dembski-Bowden',
        timeline: '009.M31',
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ['Night Lords', 'Dark Angels'],
        anthology: 'Shadows of Treachery',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Shadows of Treachery Anthology<br>
            <strong>Legion:</strong> Night Lords, Dark Angels<br>
            <strong>Main Characters:</strong> Sevatar, Konrad Curze, Lion El'Jonson, Alastor Rushal<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `With Konrad Curze comatose after the Lion mauled him at Sheol, First Captain Jago Sevatarion takes the Night Lords. He has two Kyroptera captains murdered to end the argument about revenge, reorganises the Legion into six autonomous Great Companies, and walks into his primarch's mind, where he sees the boy who became the Night Haunter. Curze wakes, orders a boarding of the Invincible Reason, and Sevatar ends the novella a prisoner.`,
        blurbSafe: `The Thramas Crusade has gone badly for the Night Lords and Konrad Curze lies comatose, leaving First Captain Sevatar in charge of a Legion whose surviving captains want revenge. Sevatar has his own ideas about how the VIII survives, and about what is really wrong with their primarch.`
    },
    'legacies-lucius': {
        number: 'XXXI.14',
        title: 'LUCIUS: THE ETERNAL BLADEMASTER',
        author: 'Graham McNeill',
        timeline: '009.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Emperor\'s Children', 'Thousand Sons'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Emperor's Children, Thousand Sons<br>
            <strong>Main Characters:</strong> Lucius, Sanakht<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `An audio drama set after Fulgrim's apotheosis on Iydris scattered the III Legion. Lucius, who holds himself the finest blade in the galaxy, falls in with Sanakht of the Thousand Sons, another duellist of legendary reputation. The two take each other's measure, and the real question between them is which one stands higher in the regard of the new masters they now serve.`,
        blurbSafe: `With the Emperor's Children scattered after their primarch's transformation, the swordsman Lucius crosses paths with a celebrated duellist of the Thousand Sons.`
    },
    'legacies-censure': {
        number: 'XXXI.18',
        title: 'CENSURE',
        author: 'Nick Kyme',
        timeline: '009.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Ultramarines', 'Word Bearers'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Ultramarines, Word Bearers<br>
            <strong>Main Characters:</strong> Aeonid Thiel, Kurtha Sedd<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `An audio drama set years into the Underworld War in the arcology network beneath Calth. Aeonid Thiel, formerly an honoured sergeant of the Ultramarines and never far from trouble with his own Legion, is pitted against the daemonic forces of the Word Bearers under Dark Apostle Kurtha Sedd. To get at them he has no choice but to return to the ravaged surface and brave the solar flares that have scoured all life from the world.`,
        blurbSafe: `Deep in the arcologies beneath Calth, an Ultramarines sergeant with a gift for falling foul of his superiors faces the Word Bearers, and finds the only route open to him leads back to the lethal surface.`
    },
    'war-laurel-defiance': {
        number: 'XXXIII.5',
        title: 'THE LAUREL OF DEFIANCE',
        author: 'Guy Haley',
        timeline: '009.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Ultramarines'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Main Characters:</strong> Lucretius Corvo, Roboute Guilliman<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `With the Shadow Crusade over and the Word Bearers and World Eaters driven out of Ultramar, the Ultramarines captain Lucretius Corvo is to be decorated by the primarchs with the Laurel of Defiance for his heroism. Corvo is privately uneasy about Guilliman and his brothers declaring themselves rulers of a new Imperium, but a ceremony in his own honour is no place to voice doubts.`,
        blurbSafe: `Ultramar is at peace again after the horrors of the Shadow Crusade, and an Ultramarines captain is to be honoured by the primarchs for his part in saving it. He is rather less certain about what those primarchs have declared in the meantime.`
    },
    'war-safe-shadowed-place': {
        number: 'XXXIII.6',
        title: 'A SAFE AND SHADOWED PLACE',
        author: 'Guy Haley',
        timeline: '009.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Night Lords', 'Ultramarines'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Night Lords, Ultramarines<br>
            <strong>Main Characters:</strong> Gendor Skraivok, Krukesh the Pale, Kellendvar, Kellenkir<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Gendor Skraivok, a middling Night Lords commander, shelters a crippled splinter fleet in hidden space at the edge of the Sotha system after the Legion's defeat by the Dark Angels. His remaining captains desert him, and he sends the brothers Kellendvar and Kellenkir to salvage what they can. Krukesh the Pale then arrives and forces their allegiance, just as Sotha throws out a psychic beam that Macragge answers.`,
        blurbSafe: `Scattered and leaderless, the remnants of a Night Lords fleet gather in the dark on the fringes of Ultramar and take stock of what is left of them. What they see shining out of the Sotha system is not what they came looking for.`
    },
    'war-imperfect': {
        number: 'XXXIII.10',
        title: 'IMPERFECT',
        author: 'Nick Kyme',
        timeline: '009.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ["Emperor's Children"],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Emperor's Children<br>
            <strong>Main Characters:</strong> Fulgrim, Fabius, Ferrus Manus<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Fulgrim plays a game of regicide against Ferrus Manus, needling his old friend across the board, then reveals his daemonic form and kills him. The Ferrus at the table is one of hundreds of clones grown by Apothecary Fabius from blood left on Fulgrim's sword, so the Phoenician can keep testing whether he could ever have turned the Gorgon. Fabius returns to his laboratory, where a clone of Horus is growing.`,
        blurbSafe: `A game of regicide between Fulgrim and Ferrus Manus, played long after the Gorgon should have been able to sit at any board. Fabius, Apothecary of the III Legion, has rather more to do with the arrangement than either player admits.`
    },
    'war-wolf-mother': {
        number: 'XXXIII.13',
        title: 'WOLF MOTHER',
        author: 'Graham McNeill',
        timeline: '009.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Knights-Errant', 'Perpetuals'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Perpetuals<br>
            <strong>Main Characters:</strong> Alivia Sureka, Severian, Vivyen Sureka, Shargali-Shi<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Aboard the refugee ship Molech's Enlightenment, the Perpetual Alivia Sureka hunts the Serpent Cult that fled Molech with the survivors and has taken her daughter Vivyen. The Knight-Errant Severian, tracking the same cult, keeps wrecking her plans. They fight through cultists and corrupted Thalaxii to the cult leader Shargali-Shi, whose ritual is turning the stolen children into a daemon of Slaanesh.`,
        blurbSafe: `Among the civilians fleeing Molech aboard the Molech's Enlightenment, the cult that brought House Devine to its knees is still at work. Alivia Sureka intends to root it out, with unwelcome help from the lone Knight-Errant Severian.`
    },
    'war-harrowing': {
        number: 'XXXIII.15',
        title: 'THE HARROWING',
        author: 'Rob Sanders',
        timeline: '009.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Alpha Legion', 'Mechanicum'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Alpha Legion, Mechanicum<br>
            <strong>Main Characters:</strong> Dartarion Varix, 55/Phi-silon, Manus Cruciam<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Alpha Legion strike commander Dartarion Varix and his sleeper cell wake early aboard the Mechanicum ark freighter Omnissiax, which is carrying the Warmonger Titan Abyssus Edax and a new Legio Perennia battlegroup. Diverted to relieve the Alpha Legion's own rebellion on Callistra Mundi, the ship has to be seized now rather than en route to Terra. Varix sows confusion, wakes a princeps to claim the Titan, and turns the freighter's guns on its escort.`,
        blurbSafe: `A garrison world is in revolt and a Mechanicum ark freighter is diverted to relieve it, a Titan battlegroup still in its hold. The Alpha Legion do not fight the way other Legions fight, and the loyalists aboard are about to find out how.`
    },
    'war-all-remains': {
        number: 'XXXIII.17',
        title: 'ALL THAT REMAINS',
        author: 'James Swallow',
        timeline: '009.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Imperial Army'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Imperial Army<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `As Horus's rebellion consumes the galaxy the dead run into the billions, but far more are pulled off the front line to be treated and eventually returned to the fight. Aboard one hospital vessel cast adrift in the warp, a handful of ragged Imperial Army soldiers make a discovery that answers the question of why so many of their wounded comrades were never seen again. No Space Marine Legion features.`,
        blurbSafe: `For every soldier killed in the Heresy, many more are shipped away from the front to be patched up and sent back. On one such vessel, lost in the warp, a few Imperial Army survivors start wondering where all the other casualties went.`
    },
    'war-lions-command': {
        number: 'XXXIII.19',
        title: 'BY THE LION\'S COMMAND',
        author: 'Gav Thorpe',
        timeline: '009.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Dark Angels', 'Death Guard'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Dark Angels, Death Guard<br>
            <strong>Main Characters:</strong> Corswain, Typhon<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `After the Dark Angels fleet splits in the aftermath of Perditus, Seneschal Corswain continues hunting the Death Guard forces under Typhon. The chase becomes a tense standoff in orbit above Terra Nullius, a world claiming independence from the Imperium. Corswain must either bend its population to his cause or make an example of them for every other world tempted to secede. In this war there are no innocent bystanders.`,
        blurbSafe: `Corswain of the Dark Angels pursues Typhon's Death Guard across a splintering Imperium and ends up in a standoff above a world that wants no part of either side. Neutrality is not a position the Lion's seneschal finds easy to accept.`
    },
    'eye-stratagem': {
        number: 'XXXV.11',
        title: 'STRATAGEM',
        author: 'Nick Kyme',
        timeline: '009.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Ultramarines'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Ultramarines<br>
            <strong>Main Characters:</strong> Aeonid Thiel, Roboute Guilliman<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Back from Calth and the Underworld War, Sergeant Aeonid Thiel is summoned before Roboute Guilliman himself. Traitor warbands left behind by the Shadow Crusade are picking at the fragile peace of Imperium Secundus, and the primarch wants the censured sergeant's mind on the problem. A new order of battle for the Ultramarines has to be written, and Thiel is the man asked to help write it.`,
        blurbSafe: `Returned from Calth, Aeonid Thiel is called before Roboute Guilliman while traitor warbands gnaw at the edges of Imperium Secundus. The primarch has a use for a legionary who thinks about war differently.`
    },
    'eye-herald-sanguinius': {
        number: 'XXXV.13',
        title: 'HERALD OF SANGUINIUS',
        author: 'Andy Smillie',
        timeline: '009.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Blood Angels"],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Andy Smillie<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Blood Angels<br>
            <strong>Main Characters:</strong> Sanguinius, Azkaellon<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Sanguinius has taken the throne of Imperium Secundus, and the danger to him is no longer only outside the realm. Commander Azkaellon and the Sanguinary Guard, sworn to keep the Great Angel alive, are driven to desperate measures to shield their primarch from betrayal within his own new empire.`,
        blurbSafe: `Newly seated on the throne of Imperium Secundus, Sanguinius faces threats from inside his own realm. Azkaellon and the Sanguinary Guard must decide how far they will go to keep him safe.`
    },
    'silent-army-one': {
        number: 'XXXVII.9',
        title: 'ARMY OF ONE',
        author: 'Rob Sanders',
        timeline: '009.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Officio Assassinorum'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Officio Assassinorum<br>
            <strong>Main Characters:</strong> Ganimus, Malcador the Sigillite, Chravius Blumolotov<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `The hive world of Proxima Apocryphis declares for Horus, and Malcador answers by dropping one Eversor assassin onto it. In fragments of memory the killer recalls his life as Ganimus, a drosshill urchin turned gang runner turned pit fighter, before the Clade rebuilt him into a drug-flooded weapon. His target is the planetary Lord-Governor Chravius Blumolotov, the man who once bought him, and he butchers his way up through the hive to reach him.`,
        blurbSafe: `When a hive world turns to the Warmaster, the Sigillite's answer is not an army but a single man. Told from inside the head of an Officio Assassinorum operative, this very short piece follows his descent to the surface and the memories that made him what he is.`
    },
    'silent-distant-echoes': {
        number: 'XXXVII.10',
        title: 'DISTANT ECHOES OF OLD NIGHT',
        author: 'Rob Sanders',
        timeline: '009.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Death Guard', 'Imperial Fists'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Death Guard, Imperial Fists<br>
            <strong>Main Characters:</strong> Morgax Murnau<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Chaplain Morgax Murnau of the Death Guard hunts the survivors of a downed Imperial Fists ship across Algonquis, a forest moon rotting away into swamp. When the VII Legion warriors prove too well dug in to shift, Murnau unleashes his Legion's Destroyers, whose chem and rad weapons strip the ground bare. The whole thing is steeped in the rot and decay that will one day swallow the XIV Legion entirely.`,
        blurbSafe: `A Death Guard Chaplain pursues a small force of Imperial Fists across a decaying forest moon. When his quarry keeps eluding him, he reaches for one of the XIV Legion's most feared and least discriminating assets.`
    },
    'garro-burden-duty': {
        number: 'XLII.5',
        title: 'BURDEN OF DUTY',
        author: 'James Swallow',
        timeline: '009-010.M31',
        coverImage: 'images/garro.jpg',
        legions: ['Knights-Errant', 'Death Guard', 'Imperial Fists'],
        anthology: 'Garro',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Garro Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard, Imperial Fists<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Massak<br>
            <strong>Timeline:</strong> 009-010.M31
        `,
        blurb: `While the Knights-Errant fight a quiet war in the Imperium's dark places, Garro uses a false identity and a single-person craft to infiltrate the Imperial Fists' star fort Phalanx, armed only with his power sword. He makes for the Seclusium, the sealed chamber where Rogal Dorn has confined his Legion's Librarians since the Edict of Nikaea, intending to recruit the psyker Massak for Malcador. The imprisoned Librarians, locked in from outside, turn on him.`,
        blurbSafe: `The Knights-Errant move quietly in places others cannot reach. Malcador's next errand takes Nathaniel Garro aboard the Imperial Fists' mighty star fort Phalanx, seeking one more kindred soul for his growing band of warriors.`
    },
    'shattered-the-noose': {
        number: 'XLIII.6',
        title: 'THE NOOSE',
        author: 'David Annandale',
        timeline: '009.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Iron Hands', 'Emperor\'s Children'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Iron Hands, Emperor's Children<br>
            <strong>Main Characters:</strong> Khalybus<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Captain Khalybus of the Iron Hands is being run down through the void by Emperor's Children warships, and answers with a long game of feints, traps and bluffs in which neither commander can be sure who is hunting whom. Annandale sets the X Legion's blunt attrition against the III Legion's preening, increasingly deranged obsession with perfection. Khalybus finally draws his pursuers into an ambush.`,
        blurbSafe: `An Iron Hands captain is being hunted through the void by Emperor's Children warships, and neither commander can be certain which of them is really closing the trap.`
    },
    'shattered-unspoken': {
        number: 'XLIII.8',
        title: 'UNSPOKEN',
        author: 'Guy Haley',
        timeline: '009.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Salamanders', 'Iron Hands', 'Alpha Legion'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Salamanders, Iron Hands, Alpha Legion<br>
            <strong>Main Characters:</strong> Donak, Tarkan, Ishmal Sulnar<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Narrated in the first person by Donak, the mute Salamander who alone survived the friendly-fire ambush of Unforged, this longer sequel places him in a mixed Iron Hands and Salamanders force alongside Tarkan and Sulnar from Scorched Earth. They assault a traitor-held astropathic relay station and find something stranger waiting: Alpha Legionnaires disguised as Iron Hands, fighting other Alpha Legionnaires who claim to be loyal.`,
        blurbSafe: `Guy Haley's follow-up to Unforged is narrated by a mute Salamander who has taken his place among a mixed Shattered Legions force as it moves against a traitor-held astropathic relay station.`
    },
    'burden-heart-pharos': {
        number: 'XLVIII.5',
        title: 'THE HEART OF THE PHAROS',
        author: 'L J Goulding',
        timeline: '009.M31',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ['Ultramarines', 'Iron Warriors'],
        anthology: 'The Burden of Loyalty',
        details: `
            <strong>Author:</strong> L J Goulding<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Burden of Loyalty Anthology<br>
            <strong>Legion:</strong> Ultramarines, Iron Warriors<br>
            <strong>Main Characters:</strong> Oberdeii, Tebecai, Barabas Dantioch<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Laurie Goulding's audio drama is effectively chapter zero of Guy Haley's PHAROS. On Sotha, the Ultramarines Scouts Oberdeii and Tebecai of the 199th Company are sent down into the tunnels beneath Mount Pharos, because the masters of Ultramar understand almost nothing about the xenos beacon on which Imperium Secundus now depends. What the two find in the dark is never fully explained to them, and it haunts them afterwards.`,
        blurbSafe: `The beacon on Sotha keeps Imperium Secundus alive, yet nobody in Ultramar truly grasps how it works or what dangers it holds. Two young Ultramarines Scouts are sent into the tunnels beneath the mountain to find out, with Warsmith Dantioch overseeing the descent.`
    },
    'eye-long-night': {
        number: 'XXXV.3',
        title: 'THE LONG NIGHT',
        author: 'Aaron Dembski-Bowden',
        timeline: '009.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Night Lords', 'Dark Angels'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Night Lords, Dark Angels<br>
            <strong>Main Characters:</strong> Jago Sevatarion, Altani<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `Captured at the close of the Thramas Crusade, Night Lords First Captain Jago Sevatarion is held prisoner aboard the Dark Angels flagship Invincible Reason, in agony from psychic powers he believes are killing him. A young astropath named Altani reaches out to ease his pain and is savagely punished for it by the Master of the Choir. Sevatar escapes during a prisoner transfer and takes his own kind of justice.`,
        blurbSafe: `The Night Lords First Captain Sevatar sits in a Dark Angels cell after the Thramas Crusade, tormented by newly woken psychic powers. An astropath aboard the ship makes contact with him, which neither of them is supposed to do.`
    },
    'heralds-blackshield': {
        number: 'LII.5',
        title: 'BLACKSHIELD',
        author: 'Chris Wraight',
        timeline: '009-011.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Death Guard', 'Blackshields'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Death Guard, Blackshields<br>
            <strong>Main Characters:</strong> Khorak, Crysos Morturg, Hesch<br>
            <strong>Timeline:</strong> 009-011.M31
        `,
        blurb: `Khorak, an ex-Deathshroud Terminator sergeant who broke from the Death Guard after watching Mortarion embrace sorcery at Molech, is hunted down by unmarked ships and forced to land on the toxic swamp world of Agarvian. He and four surviving legionaries make a stand in a gorge and kill dozens before their pursuers stop firing and their leader steps forward: Crysos Morturg, another fallen son of Barbarus. The parley ends in blood.`,
        blurbSafe: `A renegade Death Guard sergeant who considers himself the last of the 'true' XIV Legion is run to ground on a toxic swamp world by warriors in crudely painted black armour. Cornered and badly outnumbered, he discovers that the leader of his hunters shares his origins, if not his purpose.`
    },
    'heralds-painted-count': {
        number: 'LII.8',
        title: 'THE PAINTED COUNT',
        author: 'Guy Haley',
        timeline: '009.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Night Lords'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Night Lords<br>
            <strong>Main Characters:</strong> Gendor Skraivok, Shang<br>
            <strong>Timeline:</strong> 009.M31
        `,
        blurb: `After the failed invasion of Sotha and the dimming of the Pharos, Night Lords captain Gendor Skraivok languishes aboard the VIII Legion flagship Nightfall, unable to rid himself of the daemon-bound blade that has chosen him. Distrusted by his allies and despised by his rivals, he is cast into the labyrinth deep inside the ship by Curze's equerry Shang. Only by accepting the sword's power does he escape, kill Shang and seize the Legion.`,
        blurbSafe: `Stranded aboard the Night Lords flagship after the disaster at Sotha, a disgraced captain finds he cannot be rid of the daemonic sword that has attached itself to him. Distrusted by his allies and despised by his rivals, he still intends to claw back the leadership of the VIII Legion by fair means or foul.`
    },
    'burden-binary-succession': {
        number: 'XLVIII.2',
        title: 'THE BINARY SUCCESSION',
        author: 'David Annandale',
        timeline: '010-011.M31',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Mechanicum"],
        anthology: 'The Burden of Loyalty',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Burden of Loyalty Anthology<br>
            <strong>Legion:</strong> Mechanicum<br>
            <strong>Main Characters:</strong> Vethorel, Zagreus Kane, Kelbor-Hal<br>
            <strong>Timeline:</strong> 010-011.M31
        `,
        blurb: `David Annandale's audio drama plays out in council chambers on Terra rather than on a battlefield. Ambassador Vethorel speaks for Fabricator General Zagreus Kane, whose title is still claimed by the traitor Kelbor-Hal on Mars, leaving the Mechanicum's standing in the Imperium unresolved while the High Lords bicker. Vethorel works through obstruction, xenophobia and Martian infighting to force a new alliance before Horus reaches the Throneworld.`,
        blurbSafe: `With Kelbor-Hal still holding Mars, the Mechanicum's envoy to Terra must argue her masters' case before a Council of Terra paralysed by bureaucracy and suspicion. This is a story of committee rooms and cold politics rather than war, set as the Warmaster draws nearer.`
    },
    'flame-sons-of-forge': {
        number: 'L.3',
        title: 'SONS OF THE FORGE',
        author: 'Nick Kyme',
        timeline: '010.M31',
        coverImage: 'images/born-of-flame.jpg',
        legions: ['Salamanders', 'Iron Hands', 'Sons of Horus', 'Mechanicum'],
        anthology: 'Born of Flame',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Born of Flame Anthology<br>
            <strong>Legion:</strong> Salamanders, Iron Hands, Sons of Horus, Mechanicum<br>
            <strong>Main Characters:</strong> T'kell, Rahz Obek, Kastigan Ulok, Regulus<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Forgefather T'kell was left on Nocturne when Vulkan went to Isstvan, and saved seven of his primarch's greatest weapons from the destruction Vulkan ordered. Once Numeon has brought Vulkan's body home, T'kell gathers the Firedrakes of the Unscarred and sets out to seal the relics in the hidden vault called the Wrought. The Dark Mechanicum adept Regulus, Sons of Horus raiders and Iron Father Kastigan Ulok all want them first.`,
        blurbSafe: `Charged with a solemn duty by Vulkan himself, the Salamanders' first Forgefather leads a chosen few of the Legion's Firedrakes on a journey to place the last of his primarch's greatest weapons beyond anyone's reach.`
    },
    'the-crimson-king': {
        number: 'XLIV',
        title: 'THE CRIMSON KING',
        author: 'Graham McNeill',
        timeline: '010.M31',
        coverImage: 'images/the-crimson-king.jpg',
        legions: ["Thousand Sons"],
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Thousand Sons<br>
            <strong>Main Characters:</strong> Magnus the Red, Ahzek Ahriman, Amon, Yasu Nagasena, Lemuel Gaumon<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Exiled to the Planet of the Sorcerers, Magnus is a hollowed-out thing, his soul shattered into shards flung across reality. Ahriman leads a quest to gather them, raiding the black ship prison of Kamiti Sona and returning to Nikaea and the ashes of Prospero, while Malcador sets his own hunters on the Legion's trail. Magnus is largely made whole by the end, but one last shard of him still lies on Terra.`,
        blurbSafe: `Exiled to the Planet of the Sorcerers within the Eye of Terror, Magnus is a broken soul whose mind and memories are slipping away into the warp. Ahriman leads the Thousand Sons on a desperate quest to make their primarch whole again, returning to the scenes of the Legion's greatest triumphs and tragedies. Malcador, meanwhile, sets his own agents against them.`
    },
    'silent-lost-sons': {
        number: 'XXXVII.12',
        title: 'LOST SONS',
        author: 'James Swallow',
        timeline: '010-011.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Blood Angels', 'Knights-Errant'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Blood Angels, Knights-Errant<br>
            <strong>Main Characters:</strong> Warden Arkad, Tylos Rubio<br>
            <strong>Timeline:</strong> 010-011.M31
        `,
        blurb: `Warden Arkad and nineteen Blood Angels were left to hold Baal while Sanguinius took the Legion to Signus. Five years on and blinded by the Ruinstorm, they receive Tylos Rubio, a Knight-Errant carrying the Sigillite's black scroll: the IX Legion is presumed dead and is to be struck from the rolls, its remnants folded into Malcador's new order. Arkad refuses, and readies a suicidal run to find his primarch or kill Horus.`,
        blurbSafe: `Twenty Blood Angels were left behind to keep watch over Baal while their primarch took the Legion to Signus, and the Ruinstorm has kept them blind ever since. An agent of the Sigillite arrives with orders from Terra that they never expected to hear.`
    },
    'deathfire': {
        number: 'XXXII',
        title: 'DEATHFIRE',
        author: 'Nick Kyme',
        timeline: '010.M31',
        coverImage: 'images/deathfire.jpg',
        legions: ['Salamanders', 'Ultramarines', 'Word Bearers', 'Death Guard'],
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Salamanders, Ultramarines, Word Bearers, Death Guard<br>
            <strong>Main Characters:</strong> Artellus Numeon, Vulkan, Barthusa Narek, Quor Gallek, Aeonid Thiel<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Vulkan already lies in state beneath the Fortress of Hera, and Artellus Numeon, once captain of the Pyre Guard, refuses to accept it. Against the wishes of Imperium Secundus he takes his primarch's stasis casket off Macragge aboard the Charybdis, bound for Nocturne and the fires of Mount Deathfire. Word Bearers under Quor Gallek and the renegade vigilator Barthusa Narek hunt the convoy, wanting the body for rites of their own. Numeon's own death on the mountain proves to be the sacrifice that brings Vulkan back.`,
        blurbSafe: `Many of Vulkan's sons still refuse to believe their primarch is truly dead. Led by Artellus Numeon, they set out to carry his body from Macragge home to Nocturne and the flames of Mount Deathfire, hunted across war-torn space while Numeon wrestles with his own doubts about what waits at the end of the journey.`
    },
    'tallarn': {
        number: 'XLV',
        title: 'TALLARN',
        author: 'John French',
        timeline: '010-011.M31',
        coverImage: 'images/tallarn.jpg',
        legions: ['Iron Warriors', 'Imperial Army', 'Alpha Legion', 'Iron Hands', 'Sons of Horus'],
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Anthology<br>
            <strong>Legion:</strong> Iron Warriors, Imperial Army, Alpha Legion, Iron Hands, Sons of Horus<br>
            <strong>Main Characters:</strong> Perturabo, Tahirah, Kinor Argonis, Menoetius, Iaeo<br>
            <strong>Timeline:</strong> 010-011.M31
        `,
        blurb: `A single collected volume gathering John French's whole Tallarn cycle. Perturabo virus-bombs the agri world of Tallarn, killing millions and entrenching the survivors underground, then lands to dig for the Cursus of Alganar, a buried blackstone artefact that is his real reason for coming. Because the poisoned air makes infantry work impossible, what follows is fought in tanks: some ten million armoured vehicles and more than a year of grinding attrition, waged largely by ordinary Imperial Army crews rather than Space Marines. The Iron Warriors are eventually driven off.`,
        blurbSafe: `The Iron Warriors virus-bomb Tallarn from orbit and then land, and Perturabo has a purpose here he shares with almost nobody. With the poisoned surface making infantry work impossible, the fighting falls to tank crews, and the result is the largest armoured battle in Imperial history, ground out over more than a year across the dunes of a dead world.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Imperial Fists, Alpha Legion<br>
            <strong>Main Characters:</strong> Archamus, Rogal Dorn, Alpharius, Kestros, Andromeda-17<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Archamus, master of Dorn's Huscarls and last of the First, hunts Alpha Legion sleeper cells through the Solar System while Alpharius mounts the first attack on Sol since the war began. It is a war of deduction as much as firepower, and it leads to Pluto. There Alpharius impales Archamus, and Rogal Dorn deliberately steps into a killing blow to pin his brother in place long enough to cut him down with Storm's Teeth. With the Alpha Legion, of course, nothing is ever quite certain.`,
        blurbSafe: `The Solar System comes under attack for the first time since the war began, and defences the Imperial Fists thought impregnable are proving anything but. While every eye is fixed on the threat beyond the gates, Archamus, master of Dorn's Huscarls, works inward, unpicking an infiltration that has been in place far longer than anyone realised.`
    },
    'legacies-bjorn': {
        number: 'XXXI.19',
        title: 'BJORN: LONE WOLF',
        author: 'Chris Wraight',
        timeline: '010.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Space Wolves"],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Space Wolves<br>
            <strong>Main Characters:</strong> Bjorn, Leman Russ<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `A very short story first released in the 2013 Black Library Advent Calendar. Bjorn has taken a vow of silence and fights without a pack, sworn to stay alone until he has killed the daemon that slaughtered his packmates. On the fields of Velbayne, where Leman Russ and the Rout stand arrayed against a daemonic tide, he finally runs the thing down and speaks his brothers' names over it.`,
        blurbSafe: `A Space Wolf who fights apart from any pack, bound by a vow sworn after his brothers were killed, hunts one particular enemy across the daemon-swarmed fields of Velbayne.`
    },
    'war-black-oculus': {
        number: 'XXXIII.4',
        title: 'BLACK OCULUS',
        author: 'John French',
        timeline: '010-011.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Iron Warriors'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Iron Warriors<br>
            <strong>Main Characters:</strong> Prime Navigator of the Iron Warriors flagship, Perturabo<br>
            <strong>Timeline:</strong> 010-011.M31
        `,
        blurb: `Told as the monologue of the Prime Navigator of Perturabo's flagship, this recounts how the Iron Warriors escaped the collapsing Iydris system by steering straight into the singularity at its heart. The crossing threw the fleet clear across the warp to the Tallarn system and left the Navigators irreversibly deranged by what they perceived. The narrator now speaks from a hidden place beneath Tallarn's surface, warning of humanity's insignificance.`,
        blurbSafe: `One of the Iron Warriors' Navigators recounts guiding Perturabo's fleet through something no vessel should have survived. He is speaking from somewhere he should not be, and he has a warning about how little any of it matters.`
    },
    'war-twisted': {
        number: 'XXXIII.7',
        title: 'TWISTED',
        author: 'Guy Haley',
        timeline: '010.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Sons of Horus'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Sons of Horus<br>
            <strong>Main Characters:</strong> Maloghurst, Horus<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Maloghurst the Twisted, Horus's crippled equerry, keeps rebuffing the Davinite priests aboard the Vengeful Spirit while a daemon of oil and smoke stalks him for a body. He goes to the Davinites for warding rituals, and they chain him to an eight-pointed cross to invite the possession themselves. Maloghurst breaks free, has them slaughtered, banishes the daemon, and reports another quietly foiled plot to an indifferent Warmaster.`,
        blurbSafe: `Despised as a cripple inside his own Legion, Maloghurst survives on the Warmaster's favour and his own guile. When something aboard the Vengeful Spirit begins hunting him, the only allies left are ones he has spent years refusing.`
    },
    'eye-eagles-talon': {
        number: 'XXXV.14',
        title: 'THE EAGLE\'S TALON',
        author: 'John French',
        timeline: '010-011.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Imperial Fists', 'Iron Warriors'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Imperial Fists, Iron Warriors<br>
            <strong>Main Characters:</strong> Gamus, Theophon, Arcad<br>
            <strong>Timeline:</strong> 010-011.M31
        `,
        blurb: `Deep into the armoured war on Tallarn, three Imperial Fists reconnaissance squads infiltrate an Iron Warriors macro-transporter to stop it landing reinforcements on the poisoned surface. The account is assembled from seven recovered vox transmissions. Secondary objectives fall, then the mission unravels as the legionaries are overrun, and Theophon fires the charges anyway, destroying himself, the ship and, in effect, the battle for the planet.`,
        blurbSafe: `As the tank war on Tallarn grinds on, Imperial Fists recon squads board an Iron Warriors macro-transporter to keep its cargo off the surface. Their mission is reconstructed entirely from the vox traffic they left behind.`
    },
    'eye-iron-corpses': {
        number: 'XXXV.15',
        title: 'IRON CORPSES',
        author: 'David Annandale',
        timeline: '010-011.M31',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ['Iron Warriors', 'Collegia Titanica'],
        anthology: 'Eye of Terra',
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Eye of Terra Anthology<br>
            <strong>Legion:</strong> Iron Warriors, Collegia Titanica<br>
            <strong>Main Characters:</strong> Koparnos, Benwrath<br>
            <strong>Timeline:</strong> 010-011.M31
        `,
        blurb: `After the macro-transporter Eagle's Talon comes down on Tallarn, Iron Warriors Warsmith Koparnos is left alone on the poisoned southern continent among the wreckage of dead god-machines. Dying of virus contamination, he finds a Warlord Titan, Ostentio Contritio, that still has power in it, and takes it by force, wiring its loyalist princeps Benwrath directly into the machine until she is barely distinguishable from it.`,
        blurbSafe: `Stranded on Tallarn's poisoned southern continent amid the wreckage of dead god-machines, an Iron Warriors warsmith finds one Titan that still has power in it. Getting it moving will demand something no princeps would ever agree to.`
    },
    'silent-templar': {
        number: 'XXXVII.4',
        title: 'TEMPLAR',
        author: 'John French',
        timeline: '010.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Imperial Fists', 'Word Bearers'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Imperial Fists, Word Bearers<br>
            <strong>Main Characters:</strong> Sigismund<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Sigismund, First Captain of the Imperial Fists, leads an assault on a comet-shrine consecrated to Unity that a band of Word Bearers has seized as a stepping stone back towards the Solar System. The killing is cut through with duels and conversations he keeps returning to, and with the doubt he carries about the oath that chains his sword to his arm. Whether his skill at arms or that doubt wins out is the point of the piece.`,
        blurbSafe: `The Imperial Fists' First Captain takes a strike force against Word Bearers who have taken a shrine on the approaches to the Solar System. Between the fighting, he turns over the duels, conversations and doubts that have made him what he is.`
    },
    'silent-patience': {
        number: 'XXXVII.13',
        title: 'PATIENCE',
        author: 'James Swallow',
        timeline: '010.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Knights-Errant', 'Death Guard'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard<br>
            <strong>Main Characters:</strong> Helig Gallor, Nathaniel Garro<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Helig Gallor, once a Death Guard under Nathaniel Garro and now a Knight-Errant, leads troops of Malcador's Chosen across the bombarded surface of Nolec Trinus in search of his old battle-captain. Garro has gone ahead alone to face a daemon and his vox has gone quiet. Gallor finds him alive but unable to speak through a wrecked helm, and the two have to work out between them how to stop the thing regenerating.`,
        blurbSafe: `A former Death Guard legionary, now serving Malcador, picks his way across a shelled-out world looking for the commander he once followed, who pressed on alone and then went silent. He is also hoping to find some footing with the others from his old Legion.`
    },
    'silent-sigillite': {
        number: 'XXXVII.14',
        title: 'THE SIGILLITE',
        author: 'Chris Wraight',
        timeline: '010.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Imperial Army'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Imperial Army<br>
            <strong>Main Characters:</strong> Khalid Hassan, Malcador the Sigillite<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Khalid Hassan, an Imperial Army captain of the Fourth Clandestine Orta, returns to the Imperial Palace after a secret mission into the wastelands of Gyptus that went badly wrong. Expecting to answer for the failure, he is instead walked through the Palace to an audience with Malcador himself. As Hassan recounts the operation in flashback, the Sigillite is quietly weighing him for something else, with the Emperor conspicuously absent throughout.`,
        blurbSafe: `An Imperial Army officer comes back to the Palace from a disastrous covert operation in the Gyptus wastes, braced for punishment. Instead he is brought before Malcador the Sigillite, regent of a Terra whose Emperor is nowhere to be seen.`
    },
    'garro-ashes-fealty': {
        number: 'XLII.6',
        title: 'GARRO: ASHES OF FEALTY',
        author: 'James Swallow',
        timeline: '010-011.M31',
        coverImage: 'images/garro.jpg',
        legions: ['Knights-Errant', 'Death Guard'],
        anthology: 'Garro',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Garro Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Meric Voyen<br>
            <strong>Timeline:</strong> 010-011.M31
        `,
        blurb: `Meric Voyen, once an Apothecary of the XIV Legion and one of the Eisenstein's survivors, returns bearing a deadly cargo into the Solar System: his research towards a cure for the plague consuming their former brothers. Garro, who knows too well how readily the warp corrupts, must decide whether any good can come of Voyen's work or whether it is already too late to act. Two old comrades clash over single-minded science and hard pragmatism.`,
        blurbSafe: `An old comrade from the Eisenstein reappears in the Solar System, carrying dangerous cargo and a purpose he will not be talked out of. Garro must judge what to do about a former brother's work before the warp's influence settles the question for him.`
    },
    'shattered-hand-elect': {
        number: 'XLIII.10',
        title: 'THE HAND ELECT',
        author: 'Chris Wraight',
        timeline: '010.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Iron Hands', 'Mechanicum'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Iron Hands, Mechanicum<br>
            <strong>Main Characters:</strong> Jebez Aug, Shadrak Meduson<br>
            <strong>Timeline:</strong> 010.M31
        `,
        blurb: `Iron Father Jebez Aug, Hand Elect and second to warleader Shadrak Meduson, carries wounds no Legion apothecary can mend. He travels to a loyalist forge world and puts himself into the hands of the Mechanicum, and the price of being made whole is not paid only in flesh. All the while other Iron Hands are quietly manoeuvring to have Meduson replaced at the head of the Shattered Legions.`,
        blurbSafe: `Grievously wounded, the second-in-command of the Shattered Legions makes for a loyalist forge world in the hope of being made whole again, while politics stir behind him.`
    },
    'burden-ordo-sinister': {
        number: 'XLVIII.4',
        title: 'ORDO SINISTER',
        author: 'John French',
        timeline: '011.M31',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Collegia Titanica"],
        anthology: 'The Burden of Loyalty',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Burden of Loyalty Anthology<br>
            <strong>Legion:</strong> Collegia Titanica<br>
            <strong>Main Characters:</strong> Prefect Hydragyrum<br>
            <strong>Timeline:</strong> 011.M31
        `,
        blurb: `John French follows Prefect Hydragyrum, who commands the Psi-Titan Borealis Thoon, one of the Ordo Sinister god-machines driven by a bound psychic mind. Deep inside the webway, where Magnus the Red's blunder has torn open the Emperor's wards, the single Titan holds back an entire daemonic incursion. Flashbacks interleaved with the battle reveal the disturbing process by which a man is made fit to operate such a weapon.`,
        blurbSafe: `Inside the webway the Emperor's protective wards have been breached and daemons are pouring through. One of the Imperium's least discussed war machines, a Psi-Titan of the Ordo Sinister, is committed to hold the line, and its commander's account shows what operating such a weapon costs.`
    },
    'the-master-of-mankind': {
        number: 'XLI',
        title: 'THE MASTER OF MANKIND',
        author: 'Aaron Dembski-Bowden',
        timeline: '011.M31',
        coverImage: 'images/the-master-of-mankind.jpg',
        legions: ['Custodian Guard', 'Sisters of Silence', 'Mechanicum', 'Thousand Sons'],
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Custodian Guard, Sisters of Silence, Mechanicum, Thousand Sons<br>
            <strong>Main Characters:</strong> The Emperor, Ra Endymion, Diocletian Coros, Arkhan Land, Magnus the Red<br>
            <strong>Timeline:</strong> 011.M31
        `,
        blurb: `Beneath the Imperial Palace, the Emperor wages a desperate war in the Webway, defending humanity's future against daemonic incursions. Magnus's psychic warning shattered the Emperor's greatest work, a human-controlled path through the Webway that would free humanity from warp travel. As the Emperor battles alongside the Custodians, the Sisters of Silence and Fabricator-General Kane's Mechanicum against endless daemon hordes, His dream of apotheosis for humanity crumbles. He cannot leave to face Horus, for if the Webway breach is not contained, Terra itself will fall to Chaos.`,
        blurbSafe: `Beneath the Imperial Palace, the Emperor wages a desperate war in the Webway against daemonic incursions. Magnus's psychic warning shattered the Emperor's greatest work, a human-controlled path that would free humanity from warp travel. As daemon hordes assault the breach, the Emperor cannot leave His post, even as Horus marches on Terra.`
    },
    'the-path-of-heaven': {
        number: 'XXXVI',
        title: 'THE PATH OF HEAVEN',
        author: 'Chris Wraight',
        timeline: '011.M31',
        coverImage: 'images/the-path-of-heaven.jpg',
        legions: ['White Scars', 'Death Guard', 'Emperor\'s Children'],
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> White Scars, Death Guard, Emperor's Children<br>
            <strong>Main Characters:</strong> Jaghatai Khan, Targutai Yesugei, Shiban Khan, Torghun Khan, Eidolon, Revuel Arvida, Ilya Ravallion<br>
            <strong>Timeline:</strong> 011.M31
        `,
        blurb: `Four years of attritional warfare against the Death Guard and the Emperor's Children have broken the V Legion's spirit, and the Khan's stormseers are hunting a road to Terra rather than a battle. They find it in the Dark Glass, an ancient webway station, and Eidolon's Emperor's Children come for them at Catallus. When a Navis Nobilite agent destroys the station, Targutai Yesugei binds himself to its command throne and burns his own life to force the portal open, sending the White Scars home.`,
        blurbSafe: `Four years of grinding warfare against the Death Guard and the Emperor's Children have worn the White Scars down, and Jaghatai Khan's stormseers must find a clear route to Terra if the Legion is to reach the final battle at all. Riding with them are the Sagyar Mazan, once-traitors seeking redemption through death.`
    },
    'angels-of-caliban': {
        number: 'XXXVIII',
        title: 'ANGELS OF CALIBAN',
        author: 'Gav Thorpe',
        timeline: '011.M31',
        coverImage: 'images/angels-of-caliban.jpg',
        legions: ['Dark Angels', 'Night Lords', 'Ultramarines', 'Blood Angels'],
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Dark Angels, Night Lords, Ultramarines, Blood Angels<br>
            <strong>Main Characters:</strong> Lion El'Jonson, Konrad Curze, Luther, Zahariel, Roboute Guilliman, Sanguinius<br>
            <strong>Timeline:</strong> 011.M31
        `,
        blurb: `As Lord Protector of Ultramar, the Lion hunts Konrad Curze across the worlds of Imperium Secundus, and his methods are brutal enough to push the Triumvirate to the brink of civil war. He runs Curze down at last and breaks his spine rather than kill him. At the public trial that follows, Guilliman snaps the Lion's sword and Sanguinius banishes him, ending the Triumvirate. Far away on Caliban, Luther and Zahariel bend the Legion's homeworld to their own purpose, and the Lion resolves to go back.`,
        blurbSafe: `The Lion stands as Lord Protector of Ultramar, hunting the Night Haunter across the worlds of Imperium Secundus by means his brother primarchs find hard to stomach. Old rivalries back on Caliban threaten to tear the Dark Angels in half, and not even the Dreadwing can guarantee the Lion victory if he sets himself against his loyal brothers.`
    },
    'old-earth': {
        number: 'XLVII',
        title: 'OLD EARTH',
        author: 'Nick Kyme',
        timeline: '011.M31',
        coverImage: 'images/old-earth.jpg',
        legions: ['Salamanders', 'Iron Hands', 'Raven Guard', 'Word Bearers', 'Imperial Fists'],
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Salamanders, Iron Hands, Raven Guard, Word Bearers, Imperial Fists<br>
            <strong>Main Characters:</strong> Vulkan, Shadrak Meduson, John Grammaticus, Eldrad Ulthran, Barthusa Narek, Rogal Dorn<br>
            <strong>Timeline:</strong> 011.M31
        `,
        blurb: `Reborn beneath Mount Deathfire with almost no memory of why, Vulkan takes three legionaries as his Draaksward and walks the webway towards Terra. On the way he fights through a fringe realm of Commorragh, finds Shadrak Meduson's Shattered Legions tearing themselves apart over a fraudulent resurrected Ferrus Manus, and kills a Great Unclean One at Calastar. Eldrad Ulthran delivers him to the Imperial Palace, where the Emperor reveals that the talisman Vulkan forged is a dead man's switch, built to destroy Terra rather than let Horus have it.`,
        blurbSafe: `Reborn beneath Mount Deathfire and haunted by a sense of destiny he cannot yet name, Vulkan gathers a handful of trusted sons and sets out on the last stage of his journey. The road runs past the feuding remnants of the legions shattered at Isstvan V, where rumours of Ferrus Manus's return are spreading, and Vulkan must choose between their war of vengeance and a path of his own.`
    },
    'ruinstorm': {
        number: 'XLVI',
        title: 'RUINSTORM',
        author: 'David Annandale',
        timeline: '011.M31',
        coverImage: 'images/ruinstorm.jpg',
        legions: ['Ultramarines', 'Dark Angels', 'Blood Angels', 'Word Bearers'],
        details: `
            <strong>Author:</strong> David Annandale<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Ultramarines, Dark Angels, Blood Angels, Word Bearers<br>
            <strong>Main Characters:</strong> Sanguinius, Roboute Guilliman, Lion El'Jonson, Konrad Curze, Madail<br>
            <strong>Timeline:</strong> 011.M31
        `,
        blurb: `Imperium Secundus stands revealed as a heretical folly, and Guilliman, the Lion and Sanguinius take their Legions into the Ruinstorm, steering by captured traitor Navigators and dragging the chained Konrad Curze along. A vision sends Sanguinius to Davin, the world where Horus fell, and there the daemon Madail offers him the Warmaster's place. He refuses, the Sanguinor takes his place in the portal, and Davin is destroyed. The storm thins, and the three primarchs part ways for Terra.`,
        blurbSafe: `Imperium Secundus is finished, Terra still stands, and Sanguinius, Guilliman and the Lion mean to reach it whatever the cost. The Ruinstorm hides the Throneworld from them, and something inside the storm is watching every move and working patiently on each primarch's private weakness.`
    },
    'legacies-riven': {
        number: 'XXXI.5',
        title: 'RIVEN',
        author: 'John French',
        timeline: '011.M31',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ['Iron Hands'],
        anthology: 'Legacies of Betrayal',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Legacies of Betrayal Anthology<br>
            <strong>Legion:</strong> Iron Hands<br>
            <strong>Main Characters:</strong> Crius<br>
            <strong>Timeline:</strong> 011.M31
        `,
        blurb: `A short story first published online in November 2013. Brother Crius of the Iron Hands has spent the war so far on Terra with the Crusader Host, effectively a hostage, when word reaches him that Ferrus Manus is dead at Isstvan V. Rogal Dorn sends him out into the stars to find whatever remains of the X Legion and bring it back for the defence of Terra, and what he finds is a Legion tearing itself apart over what it should now become.`,
        blurbSafe: `An Iron Hand long held on Terra with the Crusader Host is sent out into the stars to seek survivors of his shattered Legion and bring them home.`
    },
    'garro-vow-faith': {
        number: 'XLII.7',
        title: 'GARRO: VOW OF FAITH',
        author: 'James Swallow',
        timeline: '011-013.M31',
        coverImage: 'images/garro.jpg',
        legions: ['Knights-Errant', 'Death Guard'],
        anthology: 'Garro',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Garro Anthology<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Euphrati Keeler, Malcador the Sigillite<br>
            <strong>Timeline:</strong> 011-013.M31
        `,
        blurb: `Beset by doubt about Malcador and about his own place in the war, Garro sets aside his duties as the Sigillite's Agentia Primus and searches Terra for Euphrati Keeler, the Living Saint who once saved his life and set him on his path. He spends most of the story out of armour and without authority, while the Warmaster's agents hunt Keeler too, knowing her death would wound the Throneworld's spirit as surely as any assault.`,
        blurbSafe: `Filled with doubts about the war and his place in it, Nathaniel Garro abandons his duties and goes looking for the woman who once saved his life. His search takes him across more of Terra than he has ever seen.`
    },
    'shattered-seventh-serpent': {
        number: 'XLIII.11',
        title: 'THE SEVENTH SERPENT',
        author: 'Graham McNeill',
        timeline: '011.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ['Iron Hands', 'Raven Guard', 'Salamanders', 'Alpha Legion'],
        anthology: 'Shattered Legions',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Shattered Legions Anthology<br>
            <strong>Legion:</strong> Iron Hands, Raven Guard, Salamanders, Alpha Legion<br>
            <strong>Main Characters:</strong> Cadmus Tyro, Wayland, Nykona Sharrowkyn, Alpharius<br>
            <strong>Timeline:</strong> 011.M31
        `,
        blurb: `The battered crew of the Sisypheum, Iron Hands, Raven Guard and Salamanders survivors under Cadmus Tyro, are drawn into a covert assault on a hidden Alpha Legion outpost, an operation apparently orchestrated by Shadrak Meduson himself. Wayland and the Raven Guard shadow-killer Nykona Sharrowkyn go in expecting Alpha Legion deception and find rather more of it than they bargained for: the Meduson leading them is Alpharius wearing his face.`,
        blurbSafe: `The survivors aboard the Sisypheum are offered a real chance to hurt the traitors, a joint operation against a hidden Alpha Legion outpost. Nothing involving the sons of Alpharius is ever quite what it appears.`
    },
    'wolfsbane': {
        number: 'XLIX',
        title: 'WOLFSBANE',
        author: 'Guy Haley',
        timeline: '012.M31',
        coverImage: 'images/wolfsbane.jpg',
        legions: ['Space Wolves', 'Sons of Horus', 'Mechanicum'],
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Space Wolves, Sons of Horus, Mechanicum<br>
            <strong>Main Characters:</strong> Leman Russ, Bjorn, Belisarius Cawl, Horus Lupercal, Kva<br>
            <strong>Timeline:</strong> 012.M31
        `,
        blurb: `Russ withdraws the Space Wolves from Terra over his brothers' objections, having learned in the Underverse beneath Fenris that the Spear of Russ, which holds a fragment of the Emperor's power, can wound Horus even though it cannot kill him. The Wolves ambush the Vengeful Spirit over Trisolian. Russ lets himself be wounded to open a gap and drives the spear home, burning away the corruption Horus has carried since Molech, but he hesitates at the last instant. The beating that follows leaves him comatose and his fleet shattered.`,
        blurbSafe: `The time has come for Leman Russ to make good on his vow and try to stop the Warmaster before he breaks through to the Segmentum Solar. Against the opposition of three of his brothers he takes his Legion from Terra, carrying one weapon that might touch a being no mortal blade can harm.`
    },
    'titandeath': {
        number: 'LIII',
        title: 'TITANDEATH',
        author: 'Guy Haley',
        timeline: '012-013.M31',
        coverImage: 'images/titandeath.jpg',
        legions: ['Collegia Titanica', 'Imperial Army', 'Blood Angels', 'White Scars', 'Sons of Horus'],
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Collegia Titanica, Imperial Army, Blood Angels, White Scars, Sons of Horus<br>
            <strong>Main Characters:</strong> Esha Ani Mohana, Abhani Lus Mohana, Mohana Mankata Vi, Terent Harrtek, Sanguinius, Jaghatai Khan<br>
            <strong>Timeline:</strong> 012-013.M31
        `,
        blurb: `Beta-Garmon is the only viable road left to the Solar System, so Dorn commits most of his non-Astartes strength and a vast mustering of Titans to hold it, fearing what god-machine warfare would do to Terra itself. The book follows the all-female Legio Solaria, and princeps Esha Ani Mohana in particular, through the slaughter on Beta-Garmon III against Terent Harrtek's Legio Vulpa. Sanguinius and the Khan arrive late and take the loyalist war effort in hand. The Great Mother of the Solaria is killed, and Beta-Garmon falls to Horus.`,
        blurbSafe: `Beta-Garmon is the most direct and only viable route to the Solar System, and both sides commit Titans in numbers never seen before or since. Among the loyalist god-machines are the Imperial Hunters of Legio Solaria, whose princeps are drawn from a single genetic line and who carry an old grudge against the traitor Legio Vulpa.`
    },
    'war-hands-emperor': {
        number: 'XXXIII.14',
        title: 'HANDS OF THE EMPEROR',
        author: 'Rob Sanders',
        timeline: '012.M31',
        coverImage: 'images/war-without-end.jpg',
        legions: ['Custodian Guard', 'Imperial Fists'],
        anthology: 'War Without End',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> War Without End Anthology<br>
            <strong>Legion:</strong> Custodian Guard, Imperial Fists<br>
            <strong>Main Characters:</strong> Enobar Stentonox<br>
            <strong>Timeline:</strong> 012.M31
        `,
        blurb: `Shield-Captain Enobar Stentonox of the Custodian Guard has the watch over the Imperial Palace when a full alert sounds: secure airspace over Terra has been breached, not by traitors but by the Emperor's other praetorians, the Imperial Fists. With neither side willing to accept the blame for the mistake, the disputed skies become a battlefield between two entirely loyal forces.`,
        blurbSafe: `A Custodian shield-captain stands watch over the Imperial Palace when the alarm goes up that the skies above Terra have been violated. The intruders are not who anyone expected, and neither party is inclined to back down.`
    },
    'silent-gates-terra': {
        number: 'XXXVII.5',
        title: 'THE GATES OF TERRA',
        author: 'Nick Kyme',
        timeline: '012.M31',
        coverImage: 'images/the-silent-war.jpg',
        legions: ['Ultramarines', 'Imperial Fists'],
        anthology: 'The Silent War',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> The Silent War Anthology<br>
            <strong>Legion:</strong> Ultramarines, Imperial Fists<br>
            <strong>Main Characters:</strong> Arcadese, Malcador the Sigillite, Rogal Dorn<br>
            <strong>Timeline:</strong> 012.M31
        `,
        blurb: `Captain Arcadese of the Ultramarines, heavily augmented and increasingly certain his Legion has abandoned him, holds an orbital bastion in the Ardent Reef as the Vengeful Spirit arrives and World Eaters and daemons board. The siege is not real. It is a scenario driven into his mind by Librarians working for Malcador and Rogal Dorn, conditioning loyalist officers for an assault on Terra that has not yet come.`,
        blurbSafe: `An augmented Ultramarines captain defends a bastion in the Ardent Reef against the Warmaster's vanguard, nagged by the feeling that his own Legion has left him to it. Framing the battle is a conversation between Malcador and Rogal Dorn about what they are willing to do to win the war.`
    },
    'heralds-grey-raven': {
        number: 'LII.2',
        title: 'THE GREY RAVEN',
        author: 'Gav Thorpe',
        timeline: '012.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Raven Guard"],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Raven Guard<br>
            <strong>Main Characters:</strong> Balsar Kurthuri, Corvus Corax, Malcador the Sigillite<br>
            <strong>Timeline:</strong> 012.M31
        `,
        blurb: `Balsar Kurthuri, Chief Librarian of the Raven Guard, is stripped of his rank when Corax disbands the Legion's Librarius for a second time and orders him to Terra to face Malcador's judgement for wielding psychic powers after the Edict of Nikaea. Travelling with the other psykers his primarch no longer trusts, Kurthuri reaches a Sol System braced for invasion and finds his unswerving loyalty repaid with suspicion.`,
        blurbSafe: `The Raven Guard's Chief Librarian has obeyed every order his primarch ever gave him, including the one that took his powers away and the one that gave them back. Now Corax sends him to Terra to answer to the Sigillite, and a Sol System expecting invasion has little warmth for a returning psyker.`
    },
    'heralds-valerius': {
        number: 'LII.3',
        title: 'VALERIUS',
        author: 'Gav Thorpe',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Imperial Army', 'Raven Guard'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Imperial Army, Raven Guard<br>
            <strong>Main Characters:</strong> Marcus Valerius, Corvus Corax<br>
            <strong>Timeline:</strong> 012-013.M31
        `,
        blurb: `Vice-Caesari Marcus Valerius of the Therion Cohort has been banished from Corax's sight for preaching that the Emperor is a god. Sent to the great slaughter at Beta-Garmon, he leads his Imperial Army soldiers into a Titan war they cannot win, sustained by the Lectitio Divinitatus and by visions he believes are divine guidance. Every man and woman under his command knows the end is near.`,
        blurbSafe: `An Imperial Army commander who has come to worship the Emperor as a god is sent to the vast Titan slaughter at Beta-Garmon. His forbidden visions shape every order he gives, and his soldiers must decide how much faith to place in them.`
    },
    'heralds-ember-wolves': {
        number: 'LII.4',
        title: 'THE EMBER WOLVES',
        author: 'Rob Sanders',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Collegia Titanica', 'Legio Audax', 'Legio Castigatra'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Rob Sanders<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Collegia Titanica, Legio Audax, Legio Castigatra<br>
            <strong>Main Characters:</strong> Balthus Voltemand<br>
            <strong>Timeline:</strong> 012-013.M31
        `,
        blurb: `On the hive world of Absalom, loyalist Titans flying the banner of the Fabricator General of Terra fight the Warmaster's engines through the ruins. Princeps Balthus Voltemand's six-strong Warhound battle-pack of the Legio Audax, the traitor Titan Legion called the Ember Wolves, stalks and brings down the far larger loyalist Warmonger Tantorus Magnificat of Legio Castigatra with their Ursus Claws. Gathering around their kill, the princeps find the fight is not over.`,
        blurbSafe: `God-machines go to war in the ruined hives of Absalom, loyalist Titans against the engines of the Warmaster. A pack of traitor Warhounds has been lying in wait, and when it sights prey worthy of the battle-pack it attacks at once.`
    },
    'heralds-exocytosis': {
        number: 'LII.7',
        title: 'EXOCYTOSIS',
        author: 'James Swallow',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Death Guard', 'Dark Angels'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Death Guard, Dark Angels<br>
            <strong>Main Characters:</strong> Calas Typhon, Luther<br>
            <strong>Timeline:</strong> 012-013.M31
        `,
        blurb: `Hounded across the galaxy by the Dark Angels, First Captain Calas Typhon has limped the Death Guard fleet into Segmentum Obscurus and been granted asylum by his old friend Luther of Caliban. Resting in the forests of Zaramund while his ships are repaired, Typhon feels a new corruption working through his flesh and mind, and Luther's Fallen watch their guests closely while laying plans of their own.`,
        blurbSafe: `A battered Death Guard fleet finds sanctuary in Segmentum Obscurus as the guest of Luther of Caliban, on a world long held as a symbol of brotherhood between the Legions. Waiting there for repairs, the XIV Legion's First Captain begins to suspect something has followed him out of the wider war.`
    },
    'heralds-last-son-prospero': {
        number: 'LII.9',
        title: 'THE LAST SON OF PROSPERO',
        author: 'Chris Wraight',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Thousand Sons', 'White Scars'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Thousand Sons, White Scars<br>
            <strong>Main Characters:</strong> Revuel Arvida, Malcador the Sigillite, Jaghatai Khan<br>
            <strong>Timeline:</strong> 012-013.M31
        `,
        blurb: `His body ravaged by the flesh-change after he guided the White Scars fleet home through the warp, Thousand Sons sorcerer Revuel Arvida lies dying deep in the Imperial Dungeon on Terra. Jaghatai Khan demands that Malcador save his ward, but the Sigillite has a design of his own: to bind a lingering shard of Magnus the Red into Arvida and set the result to guard the broken webway gate. What emerges is neither man nor primarch.`,
        blurbSafe: `The last surviving son of Prospero clings to life on Terra, his body consumed by his Legion's curse after he brought the White Scars through the horrors of the ruinstorm. The Khan demands he be saved whatever the cost, and Malcador the Sigillite agrees, for reasons that are entirely his own.`
    },
    'heralds-soul-severed': {
        number: 'LII.10',
        title: 'THE SOUL, SEVERED',
        author: 'Chris Wraight',
        timeline: '012.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Emperor\'s Children'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Emperor's Children<br>
            <strong>Main Characters:</strong> Eidolon, Archorian, Lecus Phodion<br>
            <strong>Timeline:</strong> 012.M31
        `,
        blurb: `With Fulgrim vanished into daemonhood, Lord Commander Primus Eidolon rules a third of the Emperor's Children and is challenged by Lord Commander Archorian, an able officer who thinks him a prideful usurper and would return the III Legion to its old glory. The two meet above the chem-world of Horvia, where Archorian springs an ambush. Eidolon has prepared a counter-ambush, and looses the Kakophoni on his own brethren.`,
        blurbSafe: `In their primarch's absence, one lord commander of the Emperor's Children holds a third of the III Legion and another disputes his right to it. Dissent is not acceptable, and Eidolon is willing to set his Kakophoni against warriors who were once his brothers.`
    },
    'heralds-dark-compliance': {
        number: 'LII.11',
        title: 'DARK COMPLIANCE',
        author: 'John French',
        timeline: '012.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Sons of Horus', 'Mechanicum'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Audio Drama<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Sons of Horus, Mechanicum<br>
            <strong>Main Characters:</strong> Horus Lupercal, Argonis<br>
            <strong>Timeline:</strong> 012.M31
        `,
        blurb: `As world after world swears to the Warmaster out of fear or malice, the heavily fortified Mechanicum world of Accazzar-Beta refuses. Two fleets engage across the void and Horus makes an example of it. His emissary Argonis of the Sons of Horus then recounts exactly what happened there to another defiant planetary ruler, so that the meaning of a dark compliance is understood without another shot being fired.`,
        blurbSafe: `Late in the Heresy most worlds swear fealty to Horus rather than face annihilation, and any that consider resistance are given one chance. A Sons of Horus emissary sets out for a wavering ruler precisely what a refusal costs, and how far the Warmaster is willing to go.`
    },
    'corax-weregeld': {
        number: 'XL.6',
        title: 'WEREGELD',
        author: 'Gav Thorpe',
        timeline: '013.M31',
        coverImage: 'images/corax.jpg',
        legions: ['Raven Guard', 'Space Wolves', 'Sons of Horus', 'Thousand Sons', 'Alpha Legion'],
        anthology: 'Corax',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novella<br>
            <strong>From:</strong> Corax Anthology<br>
            <strong>Legion:</strong> Raven Guard, Space Wolves, Sons of Horus, Thousand Sons, Alpha Legion<br>
            <strong>Main Characters:</strong> Corvus Corax, Leman Russ, Ezekyle Abaddon, Marcus Valerius, Agapito, Bjorn<br>
            <strong>Timeline:</strong> 013.M31
        `,
        blurb: `Corax leads the Raven Guard to Yarant III, breaking a traitor blockade to reach the Space Wolves, who are making a last stand under Ezekyle Abaddon's Sons of Horus, Thousand Sons and Alpha Legion while Leman Russ lies comatose. Learning that Marcus Valerius's visions have steered him for years, Corax breaks, sends the Raptors and most of his Legion clear, and leads a suicidal charge alongside Bjorn. He survives, parts from the Wolves and vows to fight Horus from the shadows.`,
        blurbSafe: `Corvus Corax takes the Raven Guard to the aid of the Space Wolves, besieged on a distant world by a traitor host under Ezekyle Abaddon. Concluding Gav Thorpe's Raven Guard arc, it forces Corax to reckon with everything his shadow war has cost him.`
    },
    'heralds-duty-waits': {
        number: 'LII.12',
        title: 'DUTY WAITS',
        author: 'Guy Haley',
        timeline: '013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Imperial Fists"],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Imperial Fists<br>
            <strong>Main Characters:</strong> Maximus Thane<br>
            <strong>Timeline:</strong> 013.M31
        `,
        blurb: `The Imperial Palace waits for a war that will not arrive. Since the Alpha Legion infiltrated the Palace the Imperial Fists have doubled their patrols and tightened every defence, and four primarchs stand ready, but boredom and dread erode morale faster than any enemy could. When Captain Maximus Thane's company is ordered to put down a civilian riot, the waiting ends in tragedy of the defenders' own making.`,
        blurbSafe: `Terra is sealed, the defences are complete and four primarchs stand ready, but Horus does not come. A study of how Space Marines endure the strain of waiting on the walls, and how much harder the mortals beside them find it.`
    },
    'heralds-magisterium': {
        number: 'LII.13',
        title: 'MAGISTERIUM',
        author: 'Chris Wraight',
        timeline: '013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Custodian Guard', 'Imperial Fists'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Custodian Guard, Imperial Fists<br>
            <strong>Main Characters:</strong> Samonas, Constantin Valdor, Rogal Dorn<br>
            <strong>Timeline:</strong> 013.M31
        `,
        blurb: `The war in the webway beneath the Imperial Palace is over and the Custodian Guard have been gutted by the daemonic hordes that poured through it. Seen through the survivor Samonas, Constantin Valdor gathers what is left of the Ten Thousand and finds himself in conflict with Rogal Dorn over the defence of Terra, while his memories of Prospero remind him this is not the first primarch he has been set against.`,
        blurbSafe: `With the fighting beneath the Palace ended and the Emperor's guardians terribly reduced, Constantin Valdor must reckon with the Lord Commander of the Imperium over how Terra will be held. It is not the first time the Emperor's magisterium has found himself pitted against a primarch.`
    },
    'heralds-now-peals-midnight': {
        number: 'LII.14',
        title: 'NOW PEALS MIDNIGHT',
        author: 'John French',
        timeline: '013-014.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Imperial Fists'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Imperial Fists<br>
            <strong>Main Characters:</strong> Rogal Dorn<br>
            <strong>Timeline:</strong> 013-014.M31
        `,
        blurb: `The last quiet hours before the Siege of Terra. Rogal Dorn walks the finished defences of the Imperial Palace and makes his final dispositions while his brother primarchs, his sons and billions of mortals wait for the storm to break. There is no battle in it, only the sun going down on the Throneworld and the sense of inevitability as the Warmaster's armada closes on Sol.`,
        blurbSafe: `For long years the defenders of Terra have stood sentinel against a foe who never came, and now the waiting is almost over. A quiet, measured portrait of the Imperial Palace and its people as the sun sets on the Throneworld.`
    },
    'heralds-dreams-unity': {
        number: 'LII.15',
        title: 'DREAMS OF UNITY',
        author: 'Nick Kyme',
        timeline: '013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Thunder Warriors', 'Custodian Guard', 'Alpha Legion'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Thunder Warriors, Custodian Guard, Alpha Legion<br>
            <strong>Main Characters:</strong> Dahren Heruk, Tagiomalchian, Tarrigata, Kabe<br>
            <strong>Timeline:</strong> 013.M31
        `,
        blurb: `Dahren Heruk is one of the last Thunder Warriors, surviving as a pit fighter in The Maw beneath the Imperial Palace while his gene-forged body rots and his mind slides into memories of Ararat, Sibir and the siege of Abyssna. When his ludus is burned and his few remaining brothers are killed, his search for the culprit runs into the Custodian Tagiomalchian, who is hunting a possessed Alpha Legionary and its cultists in the catacombs.`,
        blurbSafe: `Long after the Emperor's Custodians slaughtered the Thunder Warriors on his orders, a handful still survive in the slums beneath the Imperial Palace, scraping a living as gladiators as their bodies fail them. With the Throneworld bracing for Horus, one of the last of them is drawn into events far larger than the fighting pits, and hunted in turn by one of the Emperor's praetorians.`
    },
    'heralds-board-is-set': {
        number: 'LII.16',
        title: 'THE BOARD IS SET',
        author: 'Gav Thorpe',
        timeline: '013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ['Emperor', 'Custodian Guard'],
        anthology: 'Heralds of the Siege',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Heralds of the Siege Anthology<br>
            <strong>Legion:</strong> Emperor, Custodian Guard<br>
            <strong>Main Characters:</strong> Malcador the Sigillite, The Emperor<br>
            <strong>Timeline:</strong> 013.M31
        `,
        blurb: `Troubled by the approach of the traitor fleets and by the darkness the Emperor holds back beneath the Palace, Malcador the Sigillite goes to commune with him. Over a wargame board the two range across what has happened, what might have been, and the unorthodox strategies that three Space Marine Legions on Terra may yet need. Malcador also weighs the part he himself will have to play.`,
        blurbSafe: `War on the Throneworld is now inevitable, and Malcador the Sigillite seeks counsel from the Emperor before the fleets arrive. Their conversation over a wargame board is a rare glimpse of the Sigillite with his usual walls down, and it leaves as many questions as answers.`
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
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Sons of Horus, All Traitor Legions<br>
            <strong>Main Characters:</strong> Horus Lupercal, Maloghurst, Lorgar, Perturabo, Fulgrim, Angron, Mortarion<br>
            <strong>Timeline:</strong> 013.M31
        `,
        blurb: `Horus lies close to death from the Spear of Russ, which tore away the power that had been carrying him, and the traitor alliance starts to come apart. Lorgar and Perturabo must marshal Fulgrim and Angron, now daemon primarchs answerable to nobody, while Mortarion is sent ahead as vanguard. It falls to Maloghurst to hold the fractious Legion together. He finally walks into the immaterium himself, spending his life to persuade the last resisting fragment of Horus's soul to take the rebellion up again.`,
        blurbSafe: `With Guilliman and the Lion returning at speed, the traitors have very little time left in which to strike at Terra, and the Warmaster's scattered hosts must be united before they can move. Horus lies wounded, Fulgrim and Angron have become things beyond anyone's command, and it falls to Maloghurst to hold the Sons of Horus together.`
    },
    'the-buried-dagger': {
        number: 'LIV',
        title: 'THE BURIED DAGGER',
        author: 'James Swallow',
        timeline: '013.M31',
        coverImage: 'images/the-buried-dagger.jpg',
        legions: ['Death Guard', 'Knights-Errant'],
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Death Guard, Knights-Errant<br>
            <strong>Main Characters:</strong> Mortarion, Calas Typhon, Nathaniel Garro, Malcador the Sigillite, Garviel Loken, Tylos Rubio<br>
            <strong>Timeline:</strong> 013.M31
        `,
        blurb: `Calas Typhon has the fleet's Navigators executed and steers the Death Guard into the warp himself, where the Destroyer Hive leaves the Legion bloated, rotting and unable to die. Mortarion, who swore never to serve a tyrant again, cuts Typhon down twice and it changes nothing. Broken at last, he hears Nurgle's offer and takes it. On Terra, Malcador's Knights-Errant break a plague cult at White Mountain, and the survivors become the Nine Who Are Named, seed of the Grey Knights.`,
        blurbSafe: `Sent ahead as the Warmaster's vanguard, Mortarion's fleet becomes lost in the warp and a terrible sickness takes hold of the supposedly unbreakable Death Guard. Meanwhile, in the cloisters of Holy Terra, Malcador the Sigillite uncovers a plot meant to sow sedition and carnage ahead of Horus's armies, and turns to his Knights-Errant to stop it.`
    },
    'mark-of-calth-underworld-war': {
        number: 'XXV.6',
        title: 'THE UNDERWORLD WAR',
        author: 'Aaron Dembski-Bowden',
        timeline: '014.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Ultramarines", "Word Bearers"],
        anthology: 'Mark of Calth',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Short Story<br>
            <strong>From:</strong> Mark of Calth Anthology<br>
            <strong>Legion:</strong> Ultramarines, Word Bearers<br>
            <strong>Main Characters:</strong> Vakrah Jal, Argel Tal<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Seven years after the betrayal, the fighting beneath Calth has become an endless attritional grind. A war-weary Word Bearer of the Kaurtal, Vakrah Jal, makes the climb up to the blasted surface and remembers his rebirth at Argel Tal's hands and the making of the Gal Vorbak. Aaron Dembski-Bowden keeps the chronology deliberately unstable, so it is never settled whether this is memory or a telling of what is still to come.`,
        blurbSafe: `Years into the war beneath Calth, one exhausted Word Bearer makes the long climb up to the ruined surface and dwells on how he was remade, and on the brother who remade him. Time does not run entirely straight in the telling.`
    },
    'sot-solar-war': {
        number: 'SoT 1', title: 'THE SOLAR WAR', author: 'John French', timeline: '014.M31', coverImage: 'images/sot-solar-war.jpg', legions: ['Imperial Fists', 'Sons of Horus', 'Iron Warriors'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Imperial Fists, Sons of Horus, Iron Warriors<br>
            <strong>Main Characters:</strong> Rogal Dorn, Sigismund, Ezekyle Abaddon, Mersadie Oliton, Niora Su-Kassen, Horus<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `The Siege opens not on Terra but across the whole Sol System, as Horus's armada fights its way inward past the outer bulwarks Rogal Dorn has spent years building. Sigismund leads the first line of defence in the void, Abaddon holds to the path his father set him, and the remembrancer Mersadie Oliton struggles to reach Terra before the way closes. Only by winning this void war can the traitors earn a foothold on Terran soil.`,
        blurbSafe: `The last act of the Heresy opens with a colossal void war for the Sol System, as Horus's armada drives inward against defences Rogal Dorn has spent years building. Before a single traitor boot touches the Throneworld, the fleets must settle who controls the approaches to Terra.`
    },
    'sot-sons-of-selenar': {
        number: 'SoT 1.5',
        title: 'SONS OF THE SELENAR',
        author: 'Graham McNeill',
        timeline: '014.M31',
        coverImage: 'images/cover-placeholder.svg',
        legions: ['Shattered Legions', 'Iron Hands', 'Salamanders', 'Raven Guard'],
        series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Shattered Legions, Iron Hands, Salamanders, Raven Guard<br>
            <strong>Main Characters:</strong> Nykona Sharrowkyn, Sabik Wayland, Cadmus Tyro, Ulrach Branthan, Atesh Tarsa, Heliosa-78<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Returning to the Sol System as the void war rages, the Shattered Legions crew of the Sisypheum come apart, torn between following their resurrected captain on a suicidal mission and obeying orders to rejoin their brothers on Terra. A garbled signal drives them down to the shattered surface of Luna, where horrors from the earliest days of gene-manipulation are unleashed and a long-buried secret is uncovered, one that will shape the galaxy no matter who claims Terra.`,
        blurbSafe: `The battered Shattered Legions crew of the Sisypheum reach the Sol System divided, torn between a suicidal mission and orders to return to Terra and rejoin their Legion brothers. A strange signal pulls them down to embattled Luna and the secretive Selenar gene-cults, where their bonds of loyalty and devotion to one another are tested one final time.`
    },
    'sot-lost-and-damned': {
        number: 'SoT 2', title: 'THE LOST AND THE DAMNED', author: 'Guy Haley', timeline: '014.M31', coverImage: 'images/sot-lost-and-damned.jpg', legions: ['Imperial Fists', 'All Traitor Legions'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Imperial Fists, All Traitor Legions<br>
            <strong>Main Characters:</strong> Katsuhiro, Rogal Dorn, Sanguinius, Jaghatai Khan, Mortarion, Angron, Zardu Layak<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `On the thirteenth day of Secundus the bombardment of Terra begins, and the first barrier Horus must break is not a wall but the Imperial Palace's aegis shield. Guy Haley tells the ground war largely through Katsuhiro, a conscript shovelled into the outer redoubts, while Mortarion's plague weapons and Angron's fury are unleashed and the traitor primarchs bicker over precedence. The outer defences hold, but every inch is paid for in the lives of billions.`,
        blurbSafe: `The bombardment of Terra begins and Horus's ground assault falls on the outer redoubts of the Imperial Palace. Told largely through the eyes of a terrified conscript, this is the Siege at its most human, as ordinary people are fed into a war fought between demigods.`
    },
    'sot-first-wall': {
        number: 'SoT 3', title: 'THE FIRST WALL', author: 'Gav Thorpe', timeline: '014.M31', coverImage: 'images/sot-first-wall.jpg', legions: ['Imperial Fists', 'Iron Warriors'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Imperial Fists, Iron Warriors<br>
            <strong>Main Characters:</strong> Perturabo, Kroeger, Forrix, Fafnir Rann, Amon Tauromachian, Zenobi Adedeji<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Determined to humble Dorn, Perturabo sets Warsmith Kroeger to take the Lion's Gate space port, the one prize that would let Horus land his heavy forces at will. Iron Warriors and Imperial Fists grind against each other in their thousands, with Fafnir Rann making the traitors pay for every level gained. Away from the walls a Custodian probes the spreading Lectitio Divinitatus, and a conscript regiment from Afrik marches towards the Palace for reasons of its own.`,
        blurbSafe: `Perturabo turns the Iron Warriors on the Lion's Gate space port, the prize that would let Horus land his heavy forces at will, and Dorn's sons must hold it. Away from the walls, a Custodian probes the spreading cult of the Emperor while a conscript regiment from Afrik marches on the Palace for reasons of its own.`
    },
    'sot-saturnine': {
        number: 'SoT 4', title: 'SATURNINE', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-saturnine.jpg', legions: ['Imperial Fists', 'Sons of Horus', 'Alpha Legion'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Imperial Fists, Sons of Horus, Alpha Legion<br>
            <strong>Main Characters:</strong> Rogal Dorn, Perturabo, Sigismund, Ezekyle Abaddon, Garviel Loken, Sanguinius<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `The Lion's Gate space port has fallen, and the traitor host now drives at the Lion's Gate fortifications and the Eternity Wall space port at once. Stretched past breaking, Rogal Dorn accepts that he cannot defend everything and stakes a gambit at the Saturnine Gate, surrendering ground he cannot hold to buy one chance to strike back at Perturabo. It is the hinge of the whole Siege, and big names do not survive it.`,
        blurbSafe: `With the Lion's Gate space port lost and the traitors driving at two fronts at once, Rogal Dorn is forced to admit he can no longer defend everything. His answer is a gambit at the Saturnine Gate, trading ground he cannot hold for a single chance to turn his battle of wits with Perturabo.`
    },
    'sot-fury-of-magnus': {
        number: 'SoT 4.5',
        title: 'FURY OF MAGNUS',
        author: 'Graham McNeill',
        timeline: '014.M31',
        coverImage: 'images/cover-placeholder.svg',
        legions: ['Thousand Sons', 'Space Wolves', 'Salamanders', 'Iron Warriors'],
        series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Thousand Sons, Space Wolves, Salamanders, Iron Warriors<br>
            <strong>Main Characters:</strong> Magnus the Red, Ahzek Ahriman, Bodvar Bjarki, Vulkan, Malcador the Sigillite, Alivia Sureka<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Magnus the Red comes to Terra with the Warmaster's besieging armies, but revenge is not the only thing that draws him. Shattered to his very elements, the Crimson King seeks the missing fragment of himself, and it lies inside the inner sanctum of the Imperial Palace. McNeill surrounds that infiltration with Ahriman's sorcerers, Bodvar Bjarki's Space Wolves, Vulkan and his Draaksward, Perturabo, Malcador and the perpetual Alivia Sureka, while Magnus fights an inner battle of his own.`,
        blurbSafe: `Of all the Emperor's sons who fell to Chaos, Magnus the Red's tale is perhaps the most tragic. He comes to Terra with the besieging armies seeking not vengeance but a fragment of himself, locked away inside the most impregnable place on the planet. To be whole once more he must first overcome the fiercest defences in the Imperium.`
    },
    'sot-mortis': {
        number: 'SoT 5', title: 'MORTIS', author: 'John French', timeline: '014.M31', coverImage: 'images/sot-mortis.jpg', legions: ['Collegia Titanica', 'Death Guard'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> John French<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Collegia Titanica, Death Guard<br>
            <strong>Main Characters:</strong> Horus<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Horus turns the god-engines loose. Legio Mortis is ordered to breach the Mercury Wall, and only Legio Ignatum, their ancient rivals from Mars, stands in the way. Around that Titan duel John French tracks the metaphysical siege as well, with the defenders' waking hours filled with despair and their dreams luring them towards a false paradise, while lost warriors cross the wastelands and warp-grown gardens of a dying Terra.`,
        blurbSafe: `Horus orders Legio Mortis to breach the Mercury Wall, where their ancient Martian rivals of Legio Ignatum stand against them and the god-engines of both Legios meet in battle. Running alongside the Titan war is a stranger one, as the power of Chaos waxes and the defenders' despair and dreams become weapons turned against them.`
    },
    'sot-warhawk': {
        number: 'SoT 6', title: 'WARHAWK', author: 'Chris Wraight', timeline: '014.M31', coverImage: 'images/sot-warhawk.jpg', legions: ['White Scars', 'Death Guard'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> White Scars, Death Guard<br>
            <strong>Main Characters:</strong> Jaghatai Khan, Mortarion, Sigismund, Ilya Ravallion, Shiban Khan<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `The Inner Walls are breached and traitor vanguards are tearing towards the heart of the Palace. Jaghatai Khan answers with the most audacious stroke of the whole Siege, an unsupported counter-offensive to liberate the Lion's Gate space port, launched against an old enemy who has been made far greater than he ever was. Elsewhere a black sword is forged from spite, and both an unwilling saint and an enthusiastic sinner are loosed into the ruins.`,
        blurbSafe: `With the Inner Walls breached, Jaghatai Khan stakes everything on the boldest stroke of the Siege: an unsupported counter-offensive to liberate the Lion's Gate space port. He launches it cut off from any help, against an old enemy who has been made far greater than he ever was, knowing that defeat dooms not only the White Scars but Terra itself.`
    },
    'sot-echoes-of-eternity': {
        number: 'SoT 7', title: 'ECHOES OF ETERNITY', author: 'Aaron Dembski-Bowden', timeline: '014.M31', coverImage: 'images/sot-echoes-of-eternity.jpg', legions: ['Blood Angels', 'World Eaters'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Aaron Dembski-Bowden<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> Blood Angels, World Eaters<br>
            <strong>Main Characters:</strong> Sanguinius, Angron, Zephon, Amit, Lotara Sarrin, Kargos Bloodspitter, Arkhan Land<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `The walls are down and the Inner Palace is rubble. With the Khan on the edge of death, Dorn encircled at Bhab Bastion and Guilliman too far out to arrive in time, Sanguinius rallies a broken band of defenders and refugees on the last battlements before the Emperor's sanctum. Dembski-Bowden narrows the focus to two Legions and their people, from Zephon and Amit to Lotara Sarrin and Kargos, as Angron leads the armies of the damned against the Eternity Gate. The Gate holds, and the Angel pays for it.`,
        blurbSafe: `The walls have fallen, the Inner Palace lies in ruins and the loyalists are forced back to the last battlements before the Emperor's sanctum. Angron leads the armies of the damned forward in a wrathful tide, and with his brothers stricken, encircled or too far away, it falls to Sanguinius to rally a desperate band of defenders and refugees for one last stand.`
    },
    'sot-garro-knight-of-grey': {
        number: 'SoT 7.5',
        title: 'GARRO: KNIGHT OF GREY',
        author: 'James Swallow',
        timeline: '014.M31',
        coverImage: 'images/cover-placeholder.svg',
        legions: ['Knights-Errant', 'Death Guard'],
        series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Knights-Errant, Death Guard<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Euphrati Keeler, Helig Gallor, Mortarion, Typhus<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Nathaniel Garro's long road, from the betrayal at Isstvan III and the flight of the Eisenstein to his missions as Malcador's Agentia Primus, ends in the ash and fire of the embattled Imperial Palace. Guarding Euphrati Keeler at Marmax Bastion, he is caught when Mortarion and Typhus lead the Death Guard against it, and he walks out alone to parley with his gene-father so that Keeler can escape. The parley becomes a duel.`,
        blurbSafe: `As the battle for Terra rages, the former Knight-Errant Nathaniel Garro fights among the ashes of the embattled Imperial Palace, struggling to shield Euphrati Keeler, first saint of the Imperial Cult, from the horrors of the war. Everything since Isstvan has drawn him towards his gene-father Mortarion and a destiny that can only end in bloodshed.`
    },
    'sot-end-and-death-vol-1': {
        number: 'SoT 8a', title: 'THE END AND THE DEATH: VOLUME I', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-end-and-death-vol-1.jpg', legions: ['All Legions'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> All Legions<br>
            <strong>Main Characters:</strong> Malcador the Sigillite, Sanguinius, Rogal Dorn, Garviel Loken, Euphrati Keeler, Kyril Sindermann, Oll Persson, Horus<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Horus lowers the void shields of the Vengeful Spirit and dares his father to come to him. Volume one is the long approach to that moment, following Malcador, Keeler and Sindermann, Loken, Fafnir Rann, and Oll Persson and his Argonauts, with rare glimpses from the Warmaster himself. At the final hour of the final day the Emperor rises at last, and with Him go His Angel, His Praetorian and His Captain.`,
        blurbSafe: `The walls have fallen, the gates are breached and the Warmaster stands on the verge of victory. Horus has come to murder his father, and at the final hour of the final day the Emperor rises to answer him, with His Angel, His Praetorian and His Captain at His side.`
    },
    'sot-end-and-death-vol-2': {
        number: 'SoT 8b', title: 'THE END AND THE DEATH: VOLUME II', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-end-and-death-vol-2.jpg', legions: ['All Legions'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> All Legions<br>
            <strong>Main Characters:</strong> Sanguinius, Horus, Garviel Loken, Rogal Dorn, Sigismund, Ezekyle Abaddon, Oll Persson, Euphrati Keeler<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Sanguinius braves the Vengeful Spirit with one purpose, to reach Horus and decapitate the Heresy at a stroke. Loken stalks the same corridors, Oll Persson's long road converges on the ship, and below on Terra Dorn, Sigismund, Rann, Abaddon and Keeler fight their own endings. The Angel gets his duel and wounds the Warmaster, and Horus kills him.`,
        blurbSafe: `Sanguinius braves the horrors of the Warmaster's flagship with a single purpose: to reach his brother Horus and end the Heresy at its head. The Dark Gods will not make that easy, and as the war edges towards its conclusion, events unfold that could save humanity or plunge it into an eternity of darkness.`
    },
    'sot-end-and-death-vol-3': {
        number: 'SoT 8c', title: 'THE END AND THE DEATH: VOLUME III', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-end-and-death-vol-3.jpg', legions: ['All Legions'], series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Type:</strong> Novel<br>
            <strong>Legion:</strong> All Legions<br>
            <strong>Main Characters:</strong> The Emperor of Mankind, Horus, Malcador the Sigillite, Rogal Dorn, Roboute Guilliman, Typhus, Euphrati Keeler<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `Terra burns and reality itself unravels. Malcador sits ablaze on the Golden Throne buying his master a little more time, the Dark Angels hold the Hollow Mountain and Keeler's pilgrims against Typhus, and Guilliman races across the stars not knowing what he will find. Aboard the Vengeful Spirit the Emperor destroys Horus utterly, soul and all, and pays for it with His body and ten thousand years interred in the Golden Throne.`,
        blurbSafe: `Terra burns and reality itself is coming apart. Malcador sits ablaze on the Golden Throne to buy his master a little more time, the last redoubts hold out against the traitor hordes, and Guilliman races for the Throneworld not knowing what he will find there. Aboard the Vengeful Spirit, father and son meet at last.`
    },
    'sot-era-of-ruin': {
        number: 'SoT 9',
        title: 'ERA OF RUIN',
        author: 'Various, introduction by Jacob Youngs',
        timeline: '014.M31',
        coverImage: 'images/cover-placeholder.svg',
        legions: ['White Scars', 'Thousand Sons', 'Custodian Guard', 'Imperial Army'],
        series: 'siege-of-terra',
        details: `
            <strong>Author:</strong> Various, introduction by Jacob Youngs<br>
            <strong>Type:</strong> Anthology<br>
            <strong>Legion:</strong> White Scars, Thousand Sons, Custodian Guard, Imperial Army<br>
            <strong>Main Characters:</strong> Ilya Ravallion, Ahzek Ahriman<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `The epilogue to the whole saga: eight new stories from the writers of the Siege of Terra, set both during the battle for the Throneworld and in the wreckage afterwards. Horus is dead and his Heresy is over, but the scars will never fully heal. Chris Wraight's Homebound leaves Ilya Ravallion choosing between the decimated White Scars and a quiet retirement, while John French's Ex Libris has Ahriman racing to learn what he can of the Warp before its gates close to him forever.`,
        blurbSafe: `The closing volume of the Siege of Terra sequence is not a novel but an anthology, eight new stories from the writers of the series set during the battle for the Throneworld and in the years that follow. Custodians, scheming sorcerers and the lowly footsoldiers of the Imperial Army must all live with what this war has made of them.`
    },
    'primarch-rogal-dorn': {
        number: 'P16',
        title: 'ROGAL DORN: THE EMPEROR\'S CRUSADER',
        author: 'Gav Thorpe',
        timeline: '014.M31',
        coverImage: 'images/primarch-dorn.jpg',
        legions: ['Imperial Fists', 'Luna Wolves', 'Emperor\'s Children', 'Dark Angels'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Imperial Fists, Luna Wolves, Emperor's Children, Dark Angels<br>
            <strong>Main Characters:</strong> Rogal Dorn, Sigismund, Fafnir Rann<br>
            <strong>Timeline:</strong> 014.M31
        `,
        blurb: `As the Great Crusade enters its sixth decade, the Emperor sends four primarchs into the Occluda Noctis, hundreds of systems hidden behind a warp storm that blinds even his psychic sight. Dorn leads the Imperial Fists into that darkness against a foe nobody has met before, alongside Horus, Fulgrim and the Lion. Told in short, snappy sections through his Legion and the Remembrancer Order, it studies Dorn almost entirely from the outside, and is framed by scenes on Terra shortly before Horus's armada reaches Sol.`,
        blurbSafe: `As the Great Crusade enters its sixth decade, the Emperor sends four primarchs beyond a vast warp storm into the Occluda Noctis, a region his psychic sight cannot pierce. Dorn takes the Imperial Fists into that darkness against an enemy unlike any encountered before. Told in quick, snappy sections and largely from other people's perspectives, it is a patient study of who Dorn is and why.`
    },
    'primarch-leman-russ': {
        number: 'P2',
        title: 'LEMAN RUSS: THE GREAT WOLF',
        author: 'Chris Wraight',
        timeline: '015-021.M31',
        coverImage: 'images/primarch-russ.jpg',
        legions: ['Space Wolves', 'Dark Angels'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Chris Wraight<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Space Wolves, Dark Angels<br>
            <strong>Main Characters:</strong> Leman Russ, Lion El'Jonson, Jorin Bloodhowl<br>
            <strong>Timeline:</strong> 015-021.M31
        `,
        blurb: `At the height of the Great Crusade the VI Legion grinds the technologically capable human empire of Dulan towards compliance, with Russ sworn to kill the tyrant Durath himself and the Lion counselling caution. Much of the book follows Jorin Bloodhowl, Jarl of the 13th Company, and a secret the Wolves are hiding from the Dark Angels. Wraight bookends it with post-Heresy scenes on Fenris, where Russ recounts the campaign to a young Blood Claw.`,
        blurbSafe: `The VI Legion fight to bring the defiant human empire of Dulan to compliance, with the Dark Angels alongside them and Russ pledged to strike down the tyrant Durath personally. This is the origin of the famous rivalry between the Wolf and the Lion, and a look at the secrets, honour and brotherhood beneath the Space Wolves' barbarian reputation.`
    },
    'primarch-konrad-curze': {
        number: 'P12',
        title: 'KONRAD CURZE: THE NIGHT HAUNTER',
        author: 'Guy Haley',
        timeline: '036.M31',
        coverImage: 'images/primarch-curze.jpg',
        legions: ['Night Lords'],
        series: 'primarchs',
        details: `
            <strong>Author:</strong> Guy Haley<br>
            <strong>Type:</strong> Novella<br>
            <strong>Legion:</strong> Night Lords<br>
            <strong>Main Characters:</strong> Konrad Curze<br>
            <strong>Timeline:</strong> 036.M31
        `,
        blurb: `The narrative present is Curze alone in his palace on Tsagualsa, long after the Heresy has ended, spending his final hours justifying himself to a distant and contemptuous father. Around that frame Haley assembles vignettes from across his life: Nostramo before his rediscovery, his reading of his role in the Great Crusade, the changes in his Legion, the destruction of his home world and how he came to Tsagualsa. Fractured by design, and narrated by the least reliable voice imaginable.`,
        blurbSafe: `Born in the shadows of Nostramo, a world of murderers and worse, Konrad Curze became the figure of dread known as the Night Haunter. Told in fractured vignettes by a deeply unreliable narrator, it pieces together how he saw himself, his Legion and the Imperium. It offers no verdict, and leaves you to decide how far to sympathise.`
    }
};

// Convert a series number into a numeric publication-order key.
// Returns UNKNOWN_NUMBER for anything unrecognised so bad data sorts last
// and is visible to the validator rather than silently landing mid-list.
const UNKNOWN_NUMBER = 999999;

function romanToNumber(roman) {
    if (!roman) return UNKNOWN_NUMBER;
    const romanNum = String(roman).toUpperCase().trim();
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

    // Anthology story numbers like "X.6" or "LII.14". The story index is kept
    // as a scaled component rather than a decimal fraction, because
    // parseFloat('10.10') === 10.1, which made story 10 collide with story 1.
    const dotted = romanNum.match(/^([IVXLCDM]+)\.(\d+)$/);
    if (dotted) {
        const volume = romanMap[dotted[1]];
        if (volume === undefined) return UNKNOWN_NUMBER;
        return volume + parseInt(dotted[2], 10) / 1000;
    }

    // The Primarchs series (P1 to P17)
    const primarch = romanNum.match(/^P\s*(\d+)$/);
    if (primarch) {
        return 100 + parseInt(primarch[1], 10);
    }

    // Siege of Terra. Three shapes to handle: plain numbers (SoT 5), the
    // three-volume finale (SoT 8a/8b/8c), and the interleaved novellas that sit
    // between numbered books (SoT 1.5, SoT 4.5, SoT 7.5).
    const sot = romanNum.match(/^SOT\s*(\d+)(?:\.(\d+))?([A-Z]?)$/);
    if (sot) {
        const between = sot[2] ? Number('0.' + sot[2]) : 0;
        const volume = sot[3] ? (sot[3].charCodeAt(0) - 64) / 100 : 0;
        return 200 + parseInt(sot[1], 10) + between + volume;
    }

    return romanMap[romanNum] ?? UNKNOWN_NUMBER;
}

// The chronological order IS the key insertion order of bookData, which is the
// curated sequence documented in ORDERING_DECISIONS.md. Derive the rank once.
//
// Do not reintroduce a per-entry `sortOrder` field. The previous scheme stored
// `<volume>.<story>` floats, which could not distinguish story 10 from story 1,
// and a duplicated property in 139 entries silently shadowed the intended value
// so that 223 of 224 books rendered in the wrong position.
const chronologicalRank = new Map(
    Object.keys(bookData).map((key, index) => [key, index + 1])
);

// Reading order rank, from reading-order.json. Falls back to chronological if
// the file could not be fetched, so the grid always renders something.
function readingRank(key) {
    if (!readingOrder) return chronologicalRank.get(key);
    const entry = readingOrder.byKey.get(key);
    return entry ? entry.rank : Number.MAX_SAFE_INTEGER;
}

// Sort books based on sort order
function getSortedBookKeys(sortOrder) {
    const keys = Object.keys(bookData);

    switch (sortOrder) {
        case 'publication':
            return keys.sort((a, b) =>
                romanToNumber(bookData[a].number) - romanToNumber(bookData[b].number));
        case 'title':
            return keys.sort((a, b) => bookData[a].title.localeCompare(bookData[b].title));
        case 'author':
            return keys.sort((a, b) => bookData[a].author.localeCompare(bookData[b].author));
        case 'chronological':
            return keys.sort((a, b) => chronologicalRank.get(a) - chronologicalRank.get(b));
        case 'reading':
            return keys.sort((a, b) => readingRank(a) - readingRank(b));
        case 'view':
        default:
            return currentView === 'chronological'
                ? keys.sort((a, b) => chronologicalRank.get(a) - chronologicalRank.get(b))
                : keys.sort((a, b) => readingRank(a) - readingRank(b));
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

    // Phase headings, but only when the reading view is showing its own order.
    // Under a title or author sort the phases would be meaningless.
    const showPhases = currentView === 'reading'
        && readingOrder
        && (sortOrder === 'view' || sortOrder === 'reading');
    let lastPhase = null;

    sortedKeys.forEach((bookKey) => {
        const book = bookData[bookKey];
        // The book's fixed position in the chronology, not its position in the
        // current view. Sorting by title must not renumber the chronology.
        const chronologicalNumber = chronologicalRank.get(bookKey);
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
                if (!allegiancesFor(bookKey, book).has('loyalist')) return;
            } else if (filterLegion === '__TRAITOR__') {
                if (!allegiancesFor(bookKey, book).has('traitor')) return;
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

        if (showPhases) {
            const entry = readingOrder.byKey.get(bookKey);
            const phaseId = entry ? entry.phase : null;
            if (phaseId && phaseId !== lastPhase) {
                lastPhase = phaseId;
                const phase = readingOrder.phases.get(phaseId);
                if (phase) {
                    const heading = document.createElement('div');
                    heading.className = 'phase-heading';
                    heading.innerHTML = `
                        <h2 class="phase-title">${escapeHtml(phase.title)}</h2>
                        <p class="phase-blurb">${escapeHtml(phase.blurb)}</p>
                    `;
                    bookDisplay.appendChild(heading);
                }
            }
        }

        // A button, not a div. The catalogue was the site's primary interaction
        // and could not be reached or activated without a mouse.
        const bookCard = document.createElement('button');
        bookCard.type = 'button';
        const statusClass = status ? ` book-${status}` : '';
        bookCard.className = 'book-card' + statusClass;
        bookCard.setAttribute('data-book', bookKey);
        bookCard.setAttribute('aria-label',
            `${book.title} by ${book.author}${status ? ', ' + status : ''}`);

        let statusBadge = '';
        if (status === 'reading') {
            statusBadge = '<div class="status-badge status-reading">📖 READING</div>';
        } else if (status === 'finished') {
            statusBadge = '<div class="status-badge status-finished">✓ FINISHED</div>';
        }

        // Name the parent volume. Printing the literal word "ANTHOLOGY" threw
        // away book.anthology, so a card for MYRIAD never told you it lives in
        // Heralds of the Siege, which is the one fact needed to buy it. Up to 21
        // entries share a single cover image, so the name is the only way to
        // tell many of these cards apart.
        let anthologyLabel = '';
        if (book.anthology) {
            anthologyLabel = `<div class="anthology-label">IN: ${escapeHtml(book.anthology)}</div>`;
        }

        // A real img, not a CSS background: backgrounds cannot be lazy-loaded,
        // carry no alt text and are invisible to assistive technology.
        bookCard.innerHTML = `
            <div class="book-cover">
                <img class="book-cover-img" src="${encodeURI(optimisedImage(book.coverImage))}"
                     alt="Cover of ${escapeHtml(book.title)}"
                     loading="lazy" decoding="async" width="315" height="508">
                <div class="book-number-overlay">${escapeHtml(book.number)}</div>
                <div class="chronological-badge">Chrono: ${chronologicalNumber}</div>
                ${statusBadge}
            </div>
            <div class="book-title">${escapeHtml(book.title)}</div>
            ${anthologyLabel}
            <div class="book-author">${escapeHtml(book.author)}</div>
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

        // Resolve the internal sentinels, or the UI prints "__LOYALIST__"
        const legionLabel = {
            __LOYALIST__: 'the Loyalist Legions',
            __TRAITOR__: 'the Traitor Legions'
        }[filterLegion] || filterLegion;

        if (query && filterLegion) {
            infoText += ` matching "${searchQuery}" in ${legionLabel}`;
        } else if (query) {
            infoText += ` matching "${searchQuery}"`;
        } else if (filterLegion) {
            infoText += ` featuring ${legionLabel}`;
        }

        filterInfo.textContent = infoText;
        bookDisplay.insertBefore(filterInfo, bookDisplay.firstChild);
    }
}

// Load the derived reading order. Generated by tools/build-reading-order.mjs,
// fetched rather than inlined so the derivation stays in one place.
async function loadReadingOrder() {
    try {
        const response = await fetch('reading-order.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const data = await response.json();

        readingOrder = {
            phases: new Map(data.phases.map((p) => [p.id, p])),
            byKey: new Map(data.entries.map((e) => [e.bookKey, e])),
            // Books the phase ordering places ahead of a stated prerequisite.
            // Surfaced on the card rather than silently reordered.
            warnings: new Map((data.meta.prerequisiteViolations || [])
                .map((v) => [v.dependentKey, v])),
            meta: data.meta,
        };
        return true;
    } catch (error) {
        // fetch fails on file:// origins. Reading order then falls back to
        // chronological, which is wrong but not broken, so say so.
        console.warn('Reading order could not be loaded, falling back to chronological:', error);
        return false;
    }
}

// Switch view, persist it, and re-render.
function setView(view, { persist = true } = {}) {
    if (!VIEWS[view]) return;
    currentView = view;
    if (persist) saveView(view);

    document.querySelectorAll('.view-btn').forEach((btn) => {
        const active = btn.dataset.view === view;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
    });

    const subtitle = document.getElementById('subtitleSeries');
    if (subtitle) {
        subtitle.textContent = {
            reading: 'THE COMPLETE HERESY - RECOMMENDED READING ORDER',
            chronological: 'THE COMPLETE HERESY - IN-UNIVERSE CHRONOLOGY',
            chart: 'THE COMPLETE HERESY - STORYLINE CHART',
        }[view];
    }

    const note = document.getElementById('viewNote');
    if (note) {
        let text = VIEWS[view].note;
        if (view === 'reading' && !readingOrder) {
            text = 'Reading order data could not be loaded, so this is showing chronological order. Serve the site over HTTP rather than opening the file directly.';
        }
        note.textContent = text;
    }

    const chartHost = document.getElementById('chartView');
    const grid = document.querySelector('.book-display');
    const filters = document.querySelector('.filter-section');
    // The mobile disclosure button lives outside .filter-section, so it needs
    // hiding separately or it sits there controlling nothing.
    const filterToggle = document.getElementById('filterDisclosure');

    if (view === 'chart') {
        if (grid) grid.hidden = true;
        if (filters) filters.hidden = true;
        if (filterToggle) filterToggle.hidden = true;
        if (chartHost) chartHost.hidden = false;
        renderChartView();
    } else {
        if (chartHost) chartHost.hidden = true;
        if (grid) grid.hidden = false;
        if (filters) filters.hidden = false;
        if (filterToggle) filterToggle.hidden = false;
        const legion = document.getElementById('legionFilter')?.value || '';
        const search = document.getElementById('searchInput')?.value || '';
        generateBookCards(legion, search);
    }
}

// The storyline chart.
//
// Node positions come from the geometry extracted out of the source PDF, so the
// layout is Daunt's own rather than a re-flow. Everything else is re-styled: the
// original fills are pastel and neon on white, which reads badly on a dark
// ground and leaves several labels unreadable.
//
// Faction is carried by colour, not by horizontal position, because the source
// reuses vertical bands as the timeline descends and its column extents overlap
// far too much to draw as swimlanes.

// A curated accent per faction, keyed on the original fill so the mapping stays
// traceable back to the PDF. Chosen for separation at small sizes rather than
// strict heraldry: Space Wolves and Ultramarines are both canonically blue, so
// one takes ice and the other cobalt.
const FACTION_ACCENTS = {
    '#dae8fc': '#3f9e8c',   // Sons of Horus / Luna Wolves, main Horus arc
    '#126b96': '#8fb3d9',   // Space Wolves and Thousand Sons, Prospero arc
    '#1478a8': '#8fb3d9',   // same arc, second blue in the source
    '#cccccc': '#d9d2c2',   // White Scars
    '#ff66ff': '#c064c8',   // Emperor's Children
    '#ccff99': '#b9a05a',   // Iron Warriors, Tallarn arc
    '#000000': '#79838f',   // Raven Guard
    '#009900': '#5fb04a',   // Salamanders
    '#6e3600': '#c0453f',   // Word Bearers / World Eaters, Calth and Betrayer
    '#cc6600': '#3f6fd8',   // Ultramarines / Imperium Secundus
    '#003300': '#2b6b52',   // Dark Angels, Thramas Crusade
    '#e3c800': '#e0b23a',   // Imperial Fists
    '#ffff33': '#cfd6de',   // Terra / Imperium
    '#4c0099': '#6f8a6a',   // Death Guard / Garro and the Knights-Errant
    '#4d4d4d': '#b4653a',   // Mechanicum
    '#ffffff': '#8b929b',   // no faction colour assigned
};

const CHART_INK = '#f2eee4';
const CHART_BASE = [22, 23, 26];
const FALLBACK_ACCENT = '#8b929b';

function hexToRgb(hex) {
    const h = String(hex || '').replace('#', '');
    const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
    const n = parseInt(full, 16);
    return Number.isNaN(n) ? [139, 146, 155] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Blend an accent over the dark ground so the fill reads as a tint of the
// faction rather than a flat pastel block.
function tint(accent, amount) {
    const [r, g, b] = hexToRgb(accent);
    const mix = (c, base) => Math.round(base + (c - base) * amount);
    return `rgb(${mix(r, CHART_BASE[0])}, ${mix(g, CHART_BASE[1])}, ${mix(b, CHART_BASE[2])})`;
}

// Share Tech Mono is monospace, so the advance width is a fixed fraction of the
// font size and text can be measured exactly without rendering it. That is what
// makes the fitting below reliable rather than approximate.
const CHAR_ADVANCE = 0.52;

// Wrap to a character budget, breaking over-long words so nothing can overflow.
function wrapToWidth(text, maxChars) {
    const words = String(text).split(/\s+/).filter(Boolean);
    const lines = [];
    let line = '';

    for (let word of words) {
        while (word.length > maxChars) {
            if (line) { lines.push(line); line = ''; }
            lines.push(word.slice(0, maxChars - 1) + '-');
            word = word.slice(maxChars - 1);
        }
        if (line && (line + ' ' + word).length > maxChars) { lines.push(line); line = word; }
        else line = line ? line + ' ' + word : word;
    }
    if (line) lines.push(line);
    return lines.length ? lines : [''];
}

// Lay out one node: wrap its label, then grow the box so the text actually fits.
// Height growth is preferred over width growth because the lanes are tight
// horizontally and there is usually vertical room between rows.
function layoutNode(node) {
    const FS = 9;
    const LINE = FS * 1.18;
    const PAD_X = 5;
    const PAD_Y = 4;
    const MIN_W = 62;

    let boxW = Math.max(node.w, MIN_W);
    let maxChars = Math.max(6, Math.floor((boxW - PAD_X * 2) / (FS * CHAR_ADVANCE)));

    const parts = [node.label];
    if (node.anthologyBook) parts.push(`(Book ${node.anthologyBook})`);

    let lines = parts.flatMap((part) => wrapToWidth(part, maxChars));

    // If a line still needs more room than the box allows, widen just enough.
    const longest = Math.max(...lines.map((l) => l.length));
    const neededW = longest * FS * CHAR_ADVANCE + PAD_X * 2;
    if (neededW > boxW) {
        boxW = Math.ceil(neededW);
        maxChars = Math.max(6, Math.floor((boxW - PAD_X * 2) / (FS * CHAR_ADVANCE)));
        lines = parts.flatMap((part) => wrapToWidth(part, maxChars));
    }

    const boxH = Math.max(node.h, lines.length * LINE + PAD_Y * 2);

    return {
        lines,
        fontSize: FS,
        lineHeight: LINE,
        // Grow about the original centre so the layout stays true to the source.
        x: node.x + (node.w - boxW) / 2,
        y: node.y + (node.h - boxH) / 2,
        w: boxW,
        h: boxH,
    };
}

let chartZoom = 1;

async function renderChartView() {
    const host = document.getElementById('chartView');
    if (!host) return;
    if (host.dataset.rendered === 'true') { fitChartToWidth(); return; }

    host.innerHTML = '<p class="chart-loading">RETRIEVING SCHEMATIC...</p>';

    if (!chartData) {
        try {
            const response = await fetch('daunt-chart.json', { cache: 'no-cache' });
            if (!response.ok) throw new Error('HTTP ' + response.status);
            chartData = await response.json();
        } catch (error) {
            console.error('Storyline chart could not be loaded:', error);
            host.innerHTML =
                '<div class="chart-error"><h2>SCHEMATIC UNAVAILABLE</h2>' +
                '<p>The storyline chart could not be retrieved. If you opened this page ' +
                'directly from disk, serve it over HTTP instead.</p></div>';
            return;
        }
    }

    const nodes = chartData.nodes;
    const layouts = new Map(nodes.map((n) => [n.id, layoutNode(n)]));

    // Match chart nodes to books so a node can open the existing book modal.
    const normalise = (s) => String(s).toLowerCase()
        .replace(/^(garro|bjorn):\s*/, '').replace(/[^a-z0-9]+/g, '');
    const ALIASES = {
        'thief of revelation': 'thief of revelations',
        'vulcan lives': 'vulkan lives',
        'the heart of pharos': 'the heart of the pharos',
        wolfhunt: 'wolf hunt',
        'guardian of the order': 'cypher: guardian of order',
        'herald of sangiunius': 'herald of sanguinius',
        'the devine adoratrice': 'the divine adoratrice',
    };
    const titleToKey = new Map();
    Object.keys(bookData).forEach((key) => {
        const n = normalise(bookData[key].title);
        if (!titleToKey.has(n)) titleToKey.set(n, key);
    });
    const keyForNode = (node) =>
        titleToKey.get(normalise(ALIASES[node.label.toLowerCase()] ?? node.label)) || null;

    const PAD = 46;
    const boxes = [...layouts.values()];
    const minX = Math.min(...boxes.map((b) => b.x)) - PAD;
    const minY = Math.min(...boxes.map((b) => b.y)) - PAD;
    const viewW = Math.max(...boxes.map((b) => b.x + b.w)) - minX + PAD;
    const viewH = Math.max(...boxes.map((b) => b.y + b.h)) - minY + PAD;

    const progress = readingProgress.load();
    const svgParts = [];

    // Edges first so nodes paint over them. Routed orthogonally with rounded
    // corners, which reads far more cleanly than straight diagonals at this
    // density.
    chartData.edges.forEach((edge) => {
        const a = layouts.get(edge.from);
        const b = layouts.get(edge.to);
        const nodeA = nodes.find((n) => n.id === edge.from);
        const nodeB = nodes.find((n) => n.id === edge.to);
        if (!a || !b) return;

        const ax = a.x + a.w / 2;
        const bx = b.x + b.w / 2;
        const downwards = (b.y + b.h / 2) >= (a.y + a.h / 2);
        const ay = downwards ? a.y + a.h : a.y;
        const by = downwards ? b.y : b.y + b.h;
        const r = 6;

        let d;
        if (Math.abs(ax - bx) < 3) {
            d = `M ${ax} ${ay} L ${bx} ${by}`;
        } else {
            const mid = ay + (by - ay) / 2;
            const sweepX = bx > ax ? 1 : -1;
            const sweepY = by > ay ? 1 : -1;
            d = `M ${ax} ${ay} V ${mid - r * sweepY}` +
                ` Q ${ax} ${mid} ${ax + r * sweepX} ${mid}` +
                ` H ${bx - r * sweepX}` +
                ` Q ${bx} ${mid} ${bx} ${mid + r * sweepY}` +
                ` L ${bx} ${by}`;
        }

        const accentFrom = FACTION_ACCENTS[(nodeA?.colour || '').toLowerCase()] || FALLBACK_ACCENT;
        svgParts.push(
            `<path class="edge" d="${d}" marker-end="url(#arrow)" ` +
            `data-from="${escapeHtml(edge.from)}" data-to="${escapeHtml(edge.to)}" ` +
            `data-colour="${escapeHtml(nodeA?.colour || '')}" ` +
            `style="--edge-accent:${accentFrom}" />`
        );
    });

    nodes.forEach((node) => {
        const box = layouts.get(node.id);
        const key = keyForNode(node);
        const status = key ? progress[key] : null;
        const accent = FACTION_ACCENTS[(node.colour || '').toLowerCase()] || FALLBACK_ACCENT;
        const isShort = node.format === 'short-story';
        const fill = tint(accent, isShort ? 0.13 : 0.2);

        const classes = [
            'chart-node',
            `format-${node.format || 'unknown'}`,
            key ? 'is-linked' : 'is-unlinked',
            status ? `is-${status}` : '',
        ].filter(Boolean).join(' ');

        const cx = box.x + box.w / 2;
        const firstDy = -((box.lines.length - 1) * box.lineHeight) / 2 + box.fontSize * 0.34;
        const label = node.label + (node.anthologyBook ? ` (Book ${node.anthologyBook})` : '');

        const shape = node.format === 'audio-drama'
            ? `<ellipse cx="${cx}" cy="${box.y + box.h / 2}" rx="${box.w / 2}" ry="${box.h / 2}" ` +
              `fill="${fill}" stroke="${accent}" />`
            : `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" ` +
              `rx="${node.format === 'novella' ? 9 : 3}" fill="${fill}" stroke="${accent}" />`;

        // A left edge bar gives the faction a second, non-colour-only cue and
        // makes the columns readable when zoomed out.
        const bar = node.format === 'audio-drama' ? '' :
            `<rect class="node-bar" x="${box.x}" y="${box.y}" width="2.5" height="${box.h}" ` +
            `rx="1" fill="${accent}" />`;

        const text = box.lines.map((line, i) =>
            `<tspan x="${cx}" dy="${i === 0 ? firstDy : box.lineHeight}">${escapeHtml(line)}</tspan>`
        ).join('');

        svgParts.push(
            `<g class="${classes}" ${key ? `data-book="${escapeHtml(key)}"` : ''} ` +
            `data-node="${escapeHtml(node.id)}" data-colour="${escapeHtml(node.colour || '')}" ` +
            `tabindex="${key ? 0 : -1}" role="${key ? 'button' : 'presentation'}" ` +
            `aria-label="${escapeHtml(label)}" style="--node-accent:${accent}">` +
            shape + bar +
            // Inline style, not a presentation attribute, so the stylesheet
            // cannot override the size the fitting calculation depends on.
            `<text x="${cx}" y="${box.y + box.h / 2}" style="font-size:${box.fontSize}px">${text}</text>` +
            `</g>`
        );
    });

    // One entry per faction, deduplicated because two blues map to one arc.
    const factions = [];
    const seenFaction = new Set();
    for (const [colour, label] of Object.entries(chartData.meta.colourToFaction || {})) {
        if (seenFaction.has(label)) continue;
        seenFaction.add(label);
        factions.push({ colour, label, accent: FACTION_ACCENTS[colour.toLowerCase()] || FALLBACK_ACCENT });
    }

    host.innerHTML = `
        <div class="chart-toolbar">
            <div class="chart-toolbar-row">
                <div class="chart-controls">
                    <button type="button" class="chart-ctrl" id="chartZoomOut" aria-label="Zoom out">&minus;</button>
                    <span class="chart-zoom-label" id="chartZoomLabel" aria-live="polite">100%</span>
                    <button type="button" class="chart-ctrl" id="chartZoomIn" aria-label="Zoom in">+</button>
                    <button type="button" class="chart-ctrl chart-ctrl-wide" id="chartFit">FIT WIDTH</button>
                    <button type="button" class="chart-ctrl chart-ctrl-wide" id="chartFullscreen" aria-pressed="false">FULLSCREEN</button>
                </div>
                <span class="chart-hint">${nodes.length} entries, ${chartData.edges.length} prerequisites. Drag to pan, tap a book for details.</span>
            </div>

            <!-- The legend and the 15 faction keys are tall on a phone, so they
                 collapse behind a disclosure below the breakpoint. -->
            <button type="button" class="chart-key-toggle" id="chartKeyToggle"
                    aria-expanded="false" aria-controls="chartKey">KEY &amp; FACTIONS</button>

            <div class="chart-key" id="chartKey">
                <p class="chart-legend">
                    <span class="key key-novel">Novel</span>
                    <span class="key key-novella">Novella</span>
                    <span class="key key-short">Short story</span>
                    <span class="key key-audio">Audio drama</span>
                    <span class="key key-arrow">&rarr; read before</span>
                </p>
                <div class="chart-factions" role="group" aria-label="Highlight a faction">
                    ${factions.map((f) => `
                        <button type="button" class="faction-key" data-colour="${escapeHtml(f.colour)}"
                                aria-pressed="false" title="Highlight ${escapeHtml(f.label)}">
                            <span class="faction-swatch" style="background:${f.accent}"></span>
                            <span class="faction-label">${escapeHtml(f.label)}</span>
                        </button>`).join('')}
                </div>
            </div>
        </div>
        <div class="chart-scroll" id="chartScroll">
            <svg class="chart-svg" id="chartSvg" viewBox="${minX} ${minY} ${viewW} ${viewH}"
                 data-view-w="${viewW}" data-view-h="${viewH}"
                 role="img" aria-label="Storyline chart of the Horus Heresy by faction, with reading prerequisites">
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="8.5" refY="5"
                            markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M 0 1 L 9 5 L 0 9 z" />
                    </marker>
                </defs>
                ${svgParts.join('\n')}
            </svg>
        </div>
    `;

    const svg = document.getElementById('chartSvg');

    const open = (target) => {
        const group = target.closest('.chart-node[data-book]');
        if (group) showModal(group.dataset.book);
    };
    svg.addEventListener('click', (e) => open(e.target));
    svg.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(e.target); }
    });

    // Highlight one faction at a time. With 185 nodes and 205 crossing edges,
    // following a single Legion's storyline by eye is otherwise very hard.
    host.querySelectorAll('.faction-key').forEach((btn) => {
        btn.addEventListener('click', () => {
            const wasActive = btn.getAttribute('aria-pressed') === 'true';
            host.querySelectorAll('.faction-key').forEach((b) => b.setAttribute('aria-pressed', 'false'));

            if (wasActive) svg.removeAttribute('data-highlight');
            else {
                btn.setAttribute('aria-pressed', 'true');
                svg.setAttribute('data-highlight', btn.dataset.colour);
            }

            const target = svg.getAttribute('data-highlight');
            svg.querySelectorAll('.chart-node').forEach((g) => {
                g.classList.toggle('is-dimmed', Boolean(target) && g.dataset.colour !== target);
            });
            svg.querySelectorAll('.edge').forEach((e) => {
                e.classList.toggle('is-dimmed', Boolean(target) && e.dataset.colour !== target);
            });
        });
    });

    const keyToggle = document.getElementById('chartKeyToggle');
    const keyPanel = document.getElementById('chartKey');
    keyToggle.addEventListener('click', () => {
        const open = keyToggle.getAttribute('aria-expanded') === 'true';
        keyToggle.setAttribute('aria-expanded', String(!open));
        keyPanel.classList.toggle('is-open', !open);
    });

    document.getElementById('chartZoomIn').addEventListener('click', () => setChartZoom(chartZoom * 1.25));
    document.getElementById('chartZoomOut').addEventListener('click', () => setChartZoom(chartZoom / 1.25));
    document.getElementById('chartFit').addEventListener('click', () => fitChartToWidth({ exact: true }));

    const fsButton = document.getElementById('chartFullscreen');
    fsButton.addEventListener('click', () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else if (host.requestFullscreen) host.requestFullscreen().catch((err) =>
            console.warn('Fullscreen was refused:', err));
    });

    host.dataset.rendered = 'true';
    fitChartToWidth();
    scrollChartToEntryPoint();
}

// Open the chart looking at Horus Rising. The spine sits in the middle of the
// drawing, so at anything above fit-width the default scroll position of 0,0
// shows empty margin instead of the entry point.
function scrollChartToEntryPoint() {
    const scroll = document.getElementById('chartScroll');
    const svg = document.getElementById('chartSvg');
    if (!scroll || !svg) return;

    const entry = svg.querySelector('.chart-node[data-book="horus-rising"] rect')
        || svg.querySelector('.chart-node rect');
    if (!entry) return;

    const nodeBox = entry.getBBox();
    const scale = Number(svg.getAttribute('width')) / Number(svg.dataset.viewW);
    const [vbX] = svg.getAttribute('viewBox').split(/\s+/).map(Number);

    const centre = (nodeBox.x + nodeBox.width / 2 - vbX) * scale;
    scroll.scrollLeft = Math.max(0, centre - scroll.clientWidth / 2);
    scroll.scrollTop = 0;
}

// Zoom is applied as an explicit pixel size on the SVG rather than a transform,
// so the scroll container gets real scrollbars at every zoom level.
function setChartZoom(zoom) {
    const svg = document.getElementById('chartSvg');
    if (!svg) return;

    chartZoom = Math.min(3, Math.max(0.15, zoom));
    const viewW = Number(svg.dataset.viewW);
    const viewH = Number(svg.dataset.viewH);
    svg.setAttribute('width', Math.round(viewW * chartZoom));
    svg.setAttribute('height', Math.round(viewH * chartZoom));

    const label = document.getElementById('chartZoomLabel');
    if (label) label.textContent = Math.round(chartZoom * 100) + '%';
}

// Below this the 9px node labels stop being readable, so an automatic fit is
// clamped and the chart scrolls sideways inside its own box instead. A phone
// fitting the full 2210 unit width lands at about 16 percent, which renders the
// labels at roughly one and a half pixels.
const CHART_MIN_AUTO_ZOOM = 0.62;

// Fill whatever width is available. `exact` is used by the FIT WIDTH button,
// where the user has explicitly asked to see the whole thing however small.
function fitChartToWidth({ exact = false } = {}) {
    const scroll = document.getElementById('chartScroll');
    const svg = document.getElementById('chartSvg');
    if (!scroll || !svg) return;

    const available = scroll.clientWidth - 4;
    if (available <= 0) return;

    const fitted = available / Number(svg.dataset.viewW);
    setChartZoom(exact ? fitted : Math.max(fitted, CHART_MIN_AUTO_ZOOM));
}

// Re-fit when the viewport changes or fullscreen is entered or left.
window.addEventListener('resize', () => {
    if (currentView === 'chart') fitChartToWidth();
});

document.addEventListener('fullscreenchange', () => {
    const host = document.getElementById('chartView');
    const button = document.getElementById('chartFullscreen');
    const inFullscreen = document.fullscreenElement === host;
    if (button) {
        button.setAttribute('aria-pressed', String(inFullscreen));
        button.textContent = inFullscreen ? 'EXIT FULLSCREEN' : 'FULLSCREEN';
    }
    if (host) host.classList.toggle('is-fullscreen', inFullscreen);
    // Layout settles a frame after the transition, so re-fit on the next tick.
    requestAnimationFrame(() => { if (currentView === 'chart') fitChartToWidth(); });
});


function initializeSyncPanel() {
    const button = document.getElementById('syncBtn');
    const overlay = document.getElementById('syncModalOverlay');
    if (!button || !overlay) return;

    const codeField = document.getElementById('syncCode');
    const linkField = document.getElementById('syncLink');
    const pasteField = document.getElementById('syncPaste');
    const status = document.getElementById('syncStatus');
    const summary = document.getElementById('syncSummary');

    const say = (message, kind) => {
        status.textContent = message;
        status.className = 'sync-status' + (kind ? ' is-' + kind : '');
    };

    const refresh = () => {
        const code = exportProgressCode();
        codeField.value = code;
        linkField.value = `${location.origin}${location.pathname}#s=${code}`;
        const counts = readingProgress.load();
        const finished = Object.values(counts).filter((v) => v === 'finished').length;
        const reading = Object.values(counts).filter((v) => v === 'reading').length;
        summary.textContent = `${finished} finished, ${reading} reading, out of ${Object.keys(bookData).length} entries.`;
    };

    const copy = async (field, btn) => {
        field.select();
        try {
            await navigator.clipboard.writeText(field.value);
        } catch (error) {
            document.execCommand('copy');   // older browsers and non-secure origins
        }
        const original = btn.textContent;
        btn.textContent = 'COPIED';
        setTimeout(() => { btn.textContent = original; }, 1400);
    };

    const open = () => {
        refresh();
        say('');
        pasteField.value = '';
        overlay.classList.add('active');
        scrollLock.acquire();
        focusManager.trap(overlay);
    };

    const close = () => {
        overlay.classList.remove('active');
        focusManager.release(overlay);
        scrollLock.release();
    };

    button.addEventListener('click', open);
    document.getElementById('closeSyncModal').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) close();
    });

    document.getElementById('copyCodeBtn').addEventListener('click', (e) => copy(codeField, e.currentTarget));
    document.getElementById('copyLinkBtn').addEventListener('click', (e) => copy(linkField, e.currentTarget));

    document.getElementById('restoreBtn').addEventListener('click', () => {
        const result = importProgressCode(pasteField.value);
        if (!result.ok) { say(result.reason, 'error'); return; }
        say(`Restored ${result.applied} book${result.applied === 1 ? '' : 's'}.`, 'ok');
        refresh();
        rerenderCurrentView();
    });

    // A sync link lands here. Ask first, because restoring replaces whatever
    // this device already has.
    const fromUrl = /[#&]s=([^&]+)/.exec(location.hash);   // still present at this point
    if (fromUrl) {
        history.replaceState(null, '', location.pathname + location.search);
        const existing = Object.values(readingProgress.load()).filter(Boolean).length;
        const proceed = existing === 0 || confirm(
            `This link carries reading progress. Restoring will replace the ${existing} book(s) already marked on this device. Continue?`);
        if (proceed) {
            const result = importProgressCode(decodeURIComponent(fromUrl[1]));
            open();
            say(result.ok ? `Restored ${result.applied} books from the link.` : result.reason,
                result.ok ? 'ok' : 'error');
            if (result.ok) { refresh(); rerenderCurrentView(); }
        }
    }
}

// Re-render whichever view is showing, after progress changes wholesale.
function rerenderCurrentView() {
    if (currentView === 'chart') {
        const host = document.getElementById('chartView');
        if (host) { host.dataset.rendered = 'false'; renderChartView(); }
    } else {
        const legion = document.getElementById('legionFilter')?.value || '';
        const search = document.getElementById('searchInput')?.value || '';
        generateBookCards(legion, search);
    }
    updateProgressCounter();
}

// Captured once, at parse time. The sync panel strips the hash with
// replaceState as soon as it initialises, so anything checking location.hash
// later sees a clean URL and cannot tell a restore link from a normal visit.
const ARRIVED_WITH_SYNC_CODE = /[#&]s=/.test(location.hash);

const WELCOME_KEY = 'horusHeresySeenWelcome';
const TOAST_KEY = 'horusHeresySeenSaveHint';

const flag = {
    get(key) {
        try { return localStorage.getItem(key) === '1'; } catch (e) { return false; }
    },
    set(key) {
        try { localStorage.setItem(key, '1'); } catch (e) { /* private browsing */ }
    },
};

// Shown once. Deliberately not a blocking tour: one panel, one button out.
function initializeWelcome() {
    const overlay = document.getElementById('welcomeOverlay');
    if (!overlay) return;

    const dismiss = () => {
        overlay.classList.remove('active');
        focusManager.release(overlay);
        scrollLock.release();
        flag.set(WELCOME_KEY);
    };

    document.getElementById('closeWelcome').addEventListener('click', dismiss);
    document.getElementById('welcomeBegin').addEventListener('click', dismiss);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) dismiss();
    });

    // Someone arriving on a sync link has come to restore progress, not to read
    // an introduction, so stay out of the way.
    const hasProgress = Object.values(readingProgress.load()).some(Boolean);

    if (!flag.get(WELCOME_KEY) && !ARRIVED_WITH_SYNC_CODE && !hasProgress) {
        overlay.classList.add('active');
        scrollLock.acquire();
        focusManager.trap(overlay);
    } else if (!flag.get(WELCOME_KEY)) {
        // Returning user with existing progress: do not show it later either.
        flag.set(WELCOME_KEY);
    }
}

// The one-time save hint. Called after a status change.
function maybeShowSaveHint() {
    if (flag.get(TOAST_KEY)) return;
    const toast = document.getElementById('progressToast');
    if (!toast) return;

    flag.set(TOAST_KEY);
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('is-visible'));

    const hide = () => {
        toast.classList.remove('is-visible');
        setTimeout(() => { toast.hidden = true; }, 300);
    };
    document.getElementById('toastDismiss').addEventListener('click', hide, { once: true });
    document.getElementById('toastSync').addEventListener('click', () => {
        hide();
        document.getElementById('syncBtn')?.click();
    }, { once: true });

    // Long enough to read, and it never returns.
    setTimeout(hide, 12000);
}

function initializeProgressHint() {
    const hint = document.getElementById('progressHint');
    if (!hint) return;
    hint.addEventListener('click', () => document.getElementById('syncBtn')?.click());
}

function initializeViewSwitcher() {
    document.querySelectorAll('.view-btn').forEach((btn) => {
        btn.addEventListener('click', () => setView(btn.dataset.view));
    });
}

// Collapsible filters on small screens only. The button is display: none above
// the breakpoint, so the desktop filter bar is unaffected.
function initializeFilterDisclosure() {
    const button = document.getElementById('filterDisclosure');
    const section = document.getElementById('filterSection');
    if (!button || !section) return;

    button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!open));
        section.classList.toggle('is-open', !open);
    });
}

// Map a source image to its web-sized WebP derivative, generated by
// tools/optimise-images.mjs. The originals are full-resolution wiki downloads
// and were costing 18.1 MB on first paint. SVGs are already tiny and are
// passed straight through.
function optimisedImage(path) {
    if (!path) return 'images/cover-placeholder.svg';
    if (path.endsWith('.svg')) return path;
    return 'images/opt/' + path.replace(/^images\//, '').replace(/\.(jpe?g|png)$/i, '.webp');
}

// Escape text destined for innerHTML. No current field contains <, >, & or ",
// so the card markup is safe by luck of the data rather than by construction.
// One book title with an ampersand would otherwise break a card.
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Reflect a status change on a single card, in place.
function updateBookCardStatus(bookKey, status) {
    const card = document.querySelector(`.book-card[data-book="${bookKey}"]`);
    if (!card) return;   // filtered out of the current view

    card.className = 'book-card' + (status ? ` book-${status}` : '');

    const cover = card.querySelector('.book-cover');
    if (!cover) return;

    cover.querySelector('.status-badge')?.remove();
    if (status) {
        const badge = document.createElement('div');
        badge.className = `status-badge status-${status}`;
        badge.textContent = status === 'reading' ? '📖 READING' : '✓ FINISHED';
        cover.appendChild(badge);
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
            <img src="${encodeURI(optimisedImage(book.coverImage))}"
                 alt="Cover of ${escapeHtml(book.title)}"
                 decoding="async" width="315" height="508" />
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

        // Update just this card. Rebuilding all 224 reset the scroll position,
        // so marking book 90 as finished sent you back to book 1.
        updateBookCardStatus(bookKey, newStatus);
        updateProgressCounter();
        if (newStatus) maybeShowSaveHint();
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
    focusManager.trap(modalOverlay);
    modalOverlay.dataset.currentBook = bookKey;
    scrollLock.acquire();
}

// Close modal function
function closeModal() {
    modalOverlay.classList.remove('active');
    focusManager.release(modalOverlay);
    scrollLock.release();
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
            const regex = new RegExp(`(?<!data-character="[^"]*")(?<!<button type="button" class="character-link"[^>]*>)\\b${escapedName}\\b(?![^<]*<\\/span>)`, 'gi');

            // Replace with clickable span
            processedHTML = processedHTML.replace(regex, (match) => {
                return `<button type="button" class="character-link" data-character="${charKey}">${match}</button>`;
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
    document.getElementById('characterImage').src = optimisedImage(char.image);
    document.getElementById('characterImage').alt = char.name
        ? `Portrait of ${char.name}` : '';
    document.getElementById('characterImage').decoding = 'async';
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
    const charOverlay = document.getElementById('characterModalOverlay');
    charOverlay.classList.add('active');
    focusManager.trap(charOverlay);
    scrollLock.acquire();
}

// Close character modal
function closeCharacterModal() {
    document.getElementById('characterModalOverlay').classList.remove('active');
    focusManager.release(document.getElementById('characterModalOverlay'));
    scrollLock.release();
}

// Define loyalist vs traitor legions
// Which side each faction fought on.
//
// The old version listed only the 19 Legions, so 22 further faction values
// matched neither filter and 64 books were invisible under both. Knights-Errant
// alone accounts for 17 entries.
//
// 'both' is for factions that genuinely split, such as the Mechanicum and the
// Titan Legions. 'neutral' is for those outside the war. Luna Wolves are 'both'
// because the Legion was the Emperor's finest before it fell, and books like
// HORUS RISING are set while they still were.
const FACTION_ALLEGIANCE = {
    // Loyalist Legions
    'Ultramarines': 'loyalist', 'Imperial Fists': 'loyalist', 'Blood Angels': 'loyalist',
    'Dark Angels': 'loyalist', 'Space Wolves': 'loyalist', 'White Scars': 'loyalist',
    'Raven Guard': 'loyalist', 'Salamanders': 'loyalist', 'Iron Hands': 'loyalist',
    // Traitor Legions
    'Sons of Horus': 'traitor', 'Death Guard': 'traitor', 'Emperor\'s Children': 'traitor',
    'World Eaters': 'traitor', 'Thousand Sons': 'traitor', 'Word Bearers': 'traitor',
    'Iron Warriors': 'traitor', 'Night Lords': 'traitor', 'Alpha Legion': 'traitor',
    'Luna Wolves': 'both',
    // Loyalist Imperial forces outside the Legions
    'Knights-Errant': 'loyalist', 'Custodian Guard': 'loyalist', 'Sisters of Silence': 'loyalist',
    'Imperial Army': 'loyalist', 'Officio Assassinorum': 'loyalist', 'Emperor': 'loyalist',
    'Thunder Warriors': 'loyalist', 'Legio Castigatra': 'loyalist',
    // Traitor forces outside the Legions
    'Dark Mechanicum': 'traitor', 'Chaos Daemons': 'traitor', 'Legio Audax': 'traitor',
    'All Traitor Legions': 'traitor',
    // Split down the middle
    'Mechanicum': 'both', 'Collegia Titanica': 'both', 'Imperial Knights': 'both',
    'All Legions': 'both',
    // Outside the war
    'Perpetuals': 'neutral', 'Remembrancers': 'neutral', 'Blackshields': 'neutral',
    'Various': 'neutral',
    // The Shattered Legions are the loyalist Isstvan V survivors fighting on
    // as a combined force.
    'Shattered Legions': 'loyalist',
    // Xenos
    'Orks': 'xenos', 'Dark Eldar': 'xenos',
};

// Per-entry overrides, because faction and allegiance are not the same thing.
// A story can feature a traitor Legion entirely from a loyalist viewpoint, and
// tagging it accurately would otherwise file it on the wrong side.
//
// Without this the research had to be made less accurate to protect the filter:
// correct faction tags were being withheld precisely to avoid these misfilings.
const ALLEGIANCE_OVERRIDES = {
    // Warsmith Dantioch is a loyalist Iron Warrior, besieged by traitor
    // Iron Warriors. The story belongs on both sides.
    'age-of-darkness-iron-within': 'both',
    // The Death Guard here are the loyalist Eisenstein Seventy.
    'silent-ghosts-speak': 'loyalist',
    // Dantioch again, holding the Pharos for Imperium Secundus.
    'burden-heart-pharos': 'loyalist',
    // Helig Gallor is a Knight-Errant drawn from the loyalist Death Guard.
    'silent-patience': 'loyalist',
    // Loyalist Night Lords working alongside the Raven Guard.
    'corax-value-fear': 'loyalist',
};

// Resolve which sides a book belongs to. Returns a Set of 'loyalist' and/or
// 'traitor'. An explicit override always wins over the faction mapping.
function allegiancesFor(bookKey, book) {
    const override = ALLEGIANCE_OVERRIDES[bookKey];
    if (override) {
        return new Set(override === 'both' ? ['loyalist', 'traitor'] : [override]);
    }

    const sides = new Set();
    for (const faction of book.legions || []) {
        const side = FACTION_ALLEGIANCE[faction];
        if (side === 'both') { sides.add('loyalist'); sides.add('traitor'); }
        else if (side === 'loyalist' || side === 'traitor') sides.add(side);
    }
    return sides;
}

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

    // Restore the saved spoiler preference before anything renders. This is a
    // safety preference, so losing it silently on reload is the worst possible
    // failure for a reader who deliberately opted out of spoilers.
    try {
        const savedSpoilers = localStorage.getItem(SPOILER_KEY);
        if (savedSpoilers !== null) {
            spoilersCheckbox.checked = savedSpoilers === 'true';
        }
    } catch (error) {
        console.warn('Spoiler preference could not be read:', error);
    }

    // Spoiler toggle - persist, then refresh open modal if any
    spoilersCheckbox.addEventListener('change', () => {
        try {
            localStorage.setItem(SPOILER_KEY, String(spoilersCheckbox.checked));
        } catch (error) {
            console.warn('Spoiler preference could not be saved:', error);
        }

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
        // Reset the sort too. "Clear all" that left the sort alone made the
        // list look unchanged for no visible reason.
        sortSelect.value = 'view';
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

// Ordering Guide Modal functionality
function initializeOrderingGuide() {
    const orderingBtn = document.getElementById('orderingGuideBtn');
    const orderingModal = document.getElementById('orderingModalOverlay');
    const closeOrderingBtn = document.getElementById('closeOrderingModal');
    const orderingModalBody = document.getElementById('orderingModalBody');

    if (!orderingBtn || !orderingModal || !closeOrderingBtn || !orderingModalBody) {
        return;
    }

    // Simple markdown parser for ORDERING_DECISIONS.md content
    function parseMarkdown(markdown) {
        let html = markdown;

        // Convert headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // Convert bold and italic
        html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Convert inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Convert links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

        // Convert horizontal rules
        html = html.replace(/^---$/gim, '<hr>');

        // Convert blockquotes. Consecutive '>' lines become one blockquote.
        html = html.replace(/(?:^>[ \t]?.*(?:\n|$))+/gm, (block) => {
            const text = block
                .replace(/^>[ \t]?/gm, '')
                .trim()
                .replace(/\n/g, ' ');
            return `<blockquote>${text}</blockquote>\n`;
        });

        // Convert lists. Mark each item with its type first, then wrap each run
        // of adjacent items in a single container, so that ordered and
        // unordered lists keep their own wrapper instead of sharing one.
        html = html.replace(/^[-*] +(.*)$/gim, '<li data-list="ul">$1</li>');
        html = html.replace(/^\d+\. +(.*)$/gim, '<li data-list="ol">$1</li>');
        html = html.replace(
            /(?:<li data-list="(ul|ol)">.*<\/li>(?:\n|$))+/g,
            (run, type) => `<${type}>${run.replace(/ data-list="(?:ul|ol)"/g, '').trim()}</${type}>\n`
        );

        // Convert tables
        const tableRegex = /(\|[^\n]+\|\n)(\|[-:\s|]+\|\n)((\|[^\n]+\|\n)+)/g;
        html = html.replace(tableRegex, function(match, header, separator, body) {
            // Parse header
            const headerCells = header.trim().split('|').filter(cell => cell.trim());
            let tableHTML = '<table><thead><tr>';
            headerCells.forEach(cell => {
                tableHTML += `<th>${cell.trim()}</th>`;
            });
            tableHTML += '</tr></thead><tbody>';

            // Parse body rows
            const rows = body.trim().split('\n');
            rows.forEach(row => {
                const cells = row.trim().split('|').filter(cell => cell.trim());
                if (cells.length > 0) {
                    tableHTML += '<tr>';
                    cells.forEach(cell => {
                        tableHTML += `<td>${cell.trim()}</td>`;
                    });
                    tableHTML += '</tr>';
                }
            });

            tableHTML += '</tbody></table>';
            return tableHTML;
        });

        // Convert paragraphs
        html = html.split('\n\n').map(para => {
            para = para.trim();
            if (!para) return '';
            if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<ol') ||
                para.startsWith('<table') || para.startsWith('<hr') || para.startsWith('<li>') ||
                para.startsWith('<blockquote')) {
                return para;
            }
            return `<p>${para}</p>`;
        }).join('\n');

        return html;
    }

    // Load and display the generated ordering document.
    // This is fetched rather than embedded, because an embedded copy drifted
    // from the data until the two disagreed in 212 of 213 places.
    let cachedGuide = null;

    async function loadOrderingGuide() {
        if (cachedGuide) {
            orderingModalBody.innerHTML = cachedGuide;
            return;
        }

        orderingModalBody.innerHTML = '<p>RETRIEVING RECORDS...</p>';

        try {
            const response = await fetch('ORDERING_DECISIONS.md', { cache: 'no-cache' });
            if (!response.ok) throw new Error('HTTP ' + response.status);
            cachedGuide = parseMarkdown(await response.text());
            orderingModalBody.innerHTML = cachedGuide;
        } catch (error) {
            // fetch fails on file:// origins, so say so rather than showing nothing
            orderingModalBody.innerHTML =
                '<h2>RECORDS UNAVAILABLE</h2>' +
                '<p>The ordering log could not be retrieved. If you opened this page ' +
                'directly from disk, serve it over HTTP instead, for example ' +
                '<code>python3 -m http.server</code>.</p>' +
                '<p>The full log is in <code>ORDERING_DECISIONS.md</code>.</p>';
            console.error('Failed to load ORDERING_DECISIONS.md:', error);
        }
    }

    // Open modal
    orderingBtn.addEventListener('click', () => {
        void loadOrderingGuide();
        orderingModal.classList.add('active');
        focusManager.trap(orderingModal);
        scrollLock.acquire();
    });

    // Close modal - close button
    closeOrderingBtn.addEventListener('click', () => {
        orderingModal.classList.remove('active');
        focusManager.release(orderingModal);
        scrollLock.release();
    });

    // Close modal - click outside
    orderingModal.addEventListener('click', (e) => {
        if (e.target === orderingModal) {
            orderingModal.classList.remove('active');
            focusManager.release(orderingModal);
            scrollLock.release();
        }
    });

    // Close modal - Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && orderingModal.classList.contains('active')) {
            orderingModal.classList.remove('active');
            focusManager.release(orderingModal);
            scrollLock.release();
        }
    });
}

// Add glitch effect to title on load
window.addEventListener('load', async () => {
    initializeAllegiance(); // Initialize theme switcher
    initializeOrderingGuide(); // Initialize ordering guide modal
    populateLegionFilter(); // Populate filter dropdown
    setupFilterListeners(); // Set up filter events
    initializeViewSwitcher();
    initializeFilterDisclosure();
    initializeSyncPanel();
    initializeProgressHint();
    initializeWelcome();

    // Await the reading order before the first render, so a first-time visitor
    // never sees chronological order flash up as if it were the recommendation.
    await loadReadingOrder();
    setView(loadView(), { persist: false });

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
