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
            <strong>Main Characters:</strong> Roboute Guilliman, Kor Phaeron, Marius Gage, Remus Ventanus<br>
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
            <strong>Main Characters:</strong> Vulkan, Numeon, Magnus the Red, Eldrad Ulthran<br>
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
    'tales-of-heresy': {
        number: 'X',
        title: 'TALES OF HERESY',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/tales-of-heresy.jpg',
        legions: ["Various"],
        details: `
            <strong>Editors:</strong> Lindsey Priestley & Nick Kyme<br>
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Main Characters:</strong> Various characters across multiple Legions<br>
            <strong>Timeline:</strong> Various periods across the Heresy<br>
            <strong>Status:</strong> Multiple Perspectives
        `,
        blurb: `An anthology of short stories exploring different aspects and moments of the Horus Heresy. Includes tales of individual Space Marines, forgotten battles, and character studies of heroes and villains from across the Legions. These stories illuminate corners of the Heresy not covered in the main novels, from the perspective of mortal humans, minor characters, and warriors on both sides of the conflict.`,
        blurbSafe: `An anthology of short stories exploring different aspects and moments of the Horus Heresy. These tales illuminate corners of the conflict not covered in the main novels, from the perspective of mortal humans, minor characters, and warriors on both sides.`
    },
    'age-of-darkness': {
        number: 'XVI',
        title: 'AGE OF DARKNESS',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/age-of-darkness.jpg',
        legions: ["Various"],
        details: `
            <strong>Editor:</strong> Christian Dunn<br>
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Main Characters:</strong> Various characters across multiple Legions<br>
            <strong>Timeline:</strong> Various periods across the Heresy<br>
            <strong>Status:</strong> Galaxy in Flames
        `,
        blurb: `An anthology collecting stories that explore the wider impact of the Heresy across the galaxy. While the Primarchs wage their war, countless smaller conflicts rage. These tales show how ordinary people, forgotten warriors, and minor characters experience the Age of Darkness. From desperate last stands to acts of heroism that history will forget, these stories paint a comprehensive picture of a galaxy consumed by civil war.`,
        blurbSafe: `An anthology collecting stories that explore the wider impact of the Heresy across the galaxy. While the Primarchs wage their war, countless smaller conflicts rage, showing how ordinary people and forgotten warriors experience the Age of Darkness.`
    },
    'the-primarchs': {
        number: 'XX',
        title: 'THE PRIMARCHS',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/the-primarchs.jpg',
        legions: ["Various"],
        details: `
            <strong>Editor:</strong> Christian Dunn<br>
            <strong>Type:</strong> Novella Anthology<br>
            <strong>Main Characters:</strong> Fulgrim, Ferrus Manus, Lion El'Jonson, Konrad Curze, Alpharius<br>
            <strong>Timeline:</strong> Various periods<br>
            <strong>Status:</strong> Primarch Chronicles
        `,
        blurb: `Four novellas focusing on individual Primarchs and pivotal moments in their journey through the Heresy. Includes stories of Fulgrim's fall, Ferrus Manus's iron will, Lion El'Jonson's pursuit of Konrad Curze, and Alpharius's machinations. Each tale provides deep character insight into these godlike beings and the choices that damn or redeem them.`,
        blurbSafe: `Four novellas focusing on individual Primarchs and pivotal moments in their journey through the Heresy. Each tale provides deep character insight into these godlike beings and the choices they face during the conflict.`
    },
    'shadows-of-treachery': {
        number: 'XXII',
        title: 'SHADOWS OF TREACHERY',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/shadows-of-treachery.jpg',
        legions: ["Various"],
        details: `
            <strong>Editors:</strong> Christian Dunn & Nick Kyme<br>
            <strong>Type:</strong> Novella/Story Anthology<br>
            <strong>Main Characters:</strong> Various Raven Guard, Imperial Fists, and other Legions<br>
            <strong>Timeline:</strong> Various periods of the Heresy<br>
            <strong>Status:</strong> Hidden Betrayals
        `,
        blurb: `An anthology collecting novellas and short stories about the secret betrayals and shadow conflicts of the Heresy. Includes tales of the Raven Guard's shattered gene-seed, the Imperial Fists preparing Terra's defenses, and the covert operations that shaped the war's outcome. These are the stories of treachery that happened in the dark, away from the grand battlefields.`,
        blurbSafe: `An anthology collecting novellas and short stories about the secret betrayals and shadow conflicts of the Heresy. These are the stories of treachery that happened in the dark, away from the grand battlefields.`
    },
    'mark-of-calth': {
        number: 'XXV',
        title: 'MARK OF CALTH',
        author: 'Various (Anthology)',
        timeline: '007-009.M31',
        coverImage: 'images/mark-of-calth.jpg',
        legions: ["Ultramarines","Word Bearers"],
        details: `
            <strong>Editor:</strong> Laurie Goulding<br>
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Location:</strong> Calth and surrounding conflicts<br>
            <strong>Main Characters:</strong> Ultramarines and Word Bearers warriors<br>
            <strong>Timeline:</strong> 007-009.M31<br>
            <strong>Status:</strong> The Underworld War
        `,
        blurb: `Stories set during and after the Battle of Calth. After the orbital bombardment, the Ultramarines and Word Bearers continue fighting in Calth's underground arcologies. These tales explore the bitter guerrilla warfare in the dark, as both sides struggle for survival beneath the poisoned surface. The Mark of Calth—the brand of betrayal—burns deep in every Ultramarine's soul.`,
        blurbSafe: `Stories set during and after the Battle of Calth. After the orbital bombardment, the Ultramarines and Word Bearers continue fighting in Calth's underground arcologies in bitter guerrilla warfare beneath the poisoned surface.`
    },
    'legacies-of-betrayal': {
        number: 'XXXI',
        title: 'LEGACIES OF BETRAYAL',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/legacies-of-betrayal.jpg',
        legions: ["Various"],
        details: `
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Main Characters:</strong> Warriors from various Legions dealing with betrayal<br>
            <strong>Timeline:</strong> Various periods of the Heresy<br>
            <strong>Status:</strong> Echoes of Treachery
        `,
        blurb: `An anthology exploring how the Heresy's betrayals echo through the years and across the galaxy. Stories of warriors dealing with the aftermath of treachery, the weight of broken oaths, and the personal toll of civil war. These tales show that betrayal is not a single act but a wound that never truly heals.`,
        blurbSafe: `An anthology exploring how the Heresy's betrayals echo through the years and across the galaxy. Stories of warriors dealing with the aftermath of treachery, the weight of broken oaths, and the personal toll of civil war.`
    },
    'war-without-end': {
        number: 'XXXIII',
        title: 'WAR WITHOUT END',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/war-without-end.jpg',
        legions: ["Various"],
        details: `
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Main Characters:</strong> Various warriors in endless campaigns<br>
            <strong>Timeline:</strong> Various periods of the Heresy<br>
            <strong>Status:</strong> Endless Conflict
        `,
        blurb: `Stories depicting the grinding, endless nature of the Heresy. This anthology focuses on campaigns that drag on for years, sieges that never end, and the psychological toll of war without resolution. The Heresy is not just epic battles—it's exhaustion, attrition, and the slow death of hope.`,
        blurbSafe: `Stories depicting the grinding, endless nature of the Heresy. This anthology focuses on campaigns that drag on for years, sieges that never end, and the psychological toll of war without resolution or hope.`
    },
    'eye-of-terra': {
        number: 'XXXV',
        title: 'EYE OF TERRA',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/eye-of-terra.jpg',
        legions: ["Imperial Fists","Various"],
        details: `
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Focus:</strong> Terra and the Sol System<br>
            <strong>Main Characters:</strong> Terran defenders, Imperial Palace personnel<br>
            <strong>Timeline:</strong> Various periods leading to the Siege<br>
            <strong>Status:</strong> Watching from Terra
        `,
        blurb: `Stories focused on Terra and the Solar System as they prepare for Horus's arrival. These tales explore life on Terra as the Imperium's capital transforms into a fortress, the political machinations in the Imperial Palace, and the billions of ordinary humans who know the enemy is coming but can only wait and hope.`,
        blurbSafe: `Stories focused on Terra and the Solar System as they prepare for Horus's arrival. These tales explore life on Terra as the Imperium's capital transforms into a fortress, with billions knowing the enemy is coming.`
    },
    'the-silent-war': {
        number: 'XXXVII',
        title: 'THE SILENT WAR',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/the-silent-war.jpg',
        legions: ["Knights-Errant"],
        details: `
            <strong>Type:</strong> Novella/Story Anthology<br>
            <strong>Focus:</strong> Malcador and the Knights-Errant<br>
            <strong>Main Characters:</strong> Malcador, Nathaniel Garro, Knights-Errant operatives<br>
            <strong>Timeline:</strong> Various periods of the Heresy<br>
            <strong>Status:</strong> Shadow Operations
        `,
        blurb: `Chronicles Malcador the Sigillite's secret operations during the Heresy, particularly the formation of the Knights-Errant. These warriors from various Legions are recruited for covert missions that could change the war's outcome. This anthology lays the groundwork for the founding of the Inquisition and the Grey Knights.`,
        blurbSafe: `Chronicles Malcador the Sigillite's secret operations during the Heresy, particularly the formation of the Knights-Errant. These warriors from various Legions are recruited for covert missions that could change the war's outcome.`
    },
    'corax': {
        number: 'XL',
        title: 'CORAX',
        author: 'Gav Thorpe',
        timeline: '007-011.M31',
        coverImage: 'images/corax.jpg',
        legions: ["Raven Guard"],
        details: `
            <strong>Author:</strong> Gav Thorpe<br>
            <strong>Legion:</strong> Raven Guard<br>
            <strong>Primarch:</strong> Corvus Corax<br>
            <strong>Main Characters:</strong> Corvus Corax, Agapito, Navar Hef<br>
            <strong>Timeline:</strong> 007-011.M31<br>
            <strong>Status:</strong> Anthology Collection
        `,
        blurb: `A collection of novellas and short stories following Corvus Corax through his darkest hours. From the Dropsite Massacre to his gene-seed experiments' horrific failure, this anthology chronicles the Ravenlord's journey through betrayal, loss, and ultimately his quest for vengeance. The stories explore Corax's character and the Raven Guard's desperate struggle to remain relevant in the war while so diminished.`,
        blurbSafe: `A collection of novellas and short stories following Corvus Corax through his darkest hours. From the Dropsite Massacre to his desperate experiments, this anthology chronicles the Ravenlord's journey through betrayal, loss, and vengeance.`
    },
    'garro': {
        number: 'XLII',
        title: 'GARRO',
        author: 'James Swallow',
        timeline: '005-013.M31',
        coverImage: 'images/garro.jpg',
        legions: ["Knights-Errant","Death Guard"],
        details: `
            <strong>Author:</strong> James Swallow<br>
            <strong>Hero:</strong> Nathaniel Garro<br>
            <strong>Faction:</strong> Knights-Errant<br>
            <strong>Main Characters:</strong> Nathaniel Garro, Malcador, Amendera Kendel, Tylos Rubio<br>
            <strong>Timeline:</strong> 005-013.M31<br>
            <strong>Status:</strong> Anthology Collection
        `,
        blurb: `Chronicles the missions of Nathaniel Garro after his escape from Isstvan III. Now serving Malcador as a Knight-Errant, Garro undertakes dangerous covert operations across the war-torn galaxy. From recruiting other loyalists to hunting traitors, these stories show Garro's transformation from Death Guard Captain to one of the founding members of what will become the Grey Knights.`,
        blurbSafe: `Chronicles the missions of Nathaniel Garro after his escape from Isstvan III. Now serving Malcador as a Knight-Errant, Garro undertakes dangerous covert operations, recruiting other loyalists and hunting traitors across the war-torn galaxy.`
    },
    'shattered-legions': {
        number: 'XLIII',
        title: 'SHATTERED LEGIONS',
        author: 'Various (Anthology)',
        timeline: '006-012.M31',
        coverImage: 'images/shattered-legions.jpg',
        legions: ["Iron Hands","Salamanders","Raven Guard"],
        details: `
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Legions:</strong> Iron Hands, Salamanders, Raven Guard<br>
            <strong>Main Characters:</strong> Survivors from the Dropsite Massacre<br>
            <strong>Timeline:</strong> 006-012.M31<br>
            <strong>Status:</strong> Survivors' War
        `,
        blurb: `Stories of the survivors from the Dropsite Massacre—the Iron Hands, Salamanders, and Raven Guard who refused to die. Scattered across the galaxy, these shattered Legions wage guerrilla war against the traitors. Consumed by rage or driven by duty, they strike from the shadows, disrupting supply lines and hunting traitor champions. Though broken, they remain the Imperium's vengeance incarnate.`,
        blurbSafe: `Stories of the survivors from the Dropsite Massacre—the Iron Hands, Salamanders, and Raven Guard who refused to die. Scattered across the galaxy, these shattered Legions wage guerrilla war against the traitors.`
    },
    'the-burden-of-loyalty': {
        number: 'XLVIII',
        title: 'THE BURDEN OF LOYALTY',
        author: 'Various (Anthology)',
        timeline: 'Various',
        coverImage: 'images/the-burden-of-loyalty.jpg',
        legions: ["Various"],
        details: `
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Main Characters:</strong> Loyal warriors tested by the Heresy<br>
            <strong>Timeline:</strong> Various periods leading to the Siege<br>
            <strong>Status:</strong> The Weight of Duty
        `,
        blurb: `An anthology exploring the personal cost of loyalty during the Heresy. These stories examine what it means to remain true to one's oaths when everything is falling apart. From Space Marines witnessing their Legions' corruption to mortal soldiers defending worlds that cannot be saved, these are tales of loyalty tested to its limits.`,
        blurbSafe: `An anthology exploring the personal cost of loyalty during the Heresy. These stories examine what it means to remain true to one's oaths when everything is falling apart, from Space Marines to mortal soldiers.`
    },
    'born-of-flame': {
        number: 'L',
        title: 'BORN OF FLAME',
        author: 'Nick Kyme',
        timeline: '006-011.M31',
        coverImage: 'images/born-of-flame.jpg',
        legions: ["Salamanders"],
        details: `
            <strong>Author:</strong> Nick Kyme<br>
            <strong>Legion:</strong> Salamanders<br>
            <strong>Main Characters:</strong> Various Salamanders warriors, Numeon<br>
            <strong>Timeline:</strong> 006-011.M31<br>
            <strong>Status:</strong> Anthology Collection
        `,
        blurb: `A collection of Salamanders stories spanning the Heresy. From the Dropsite Massacre's immediate aftermath to the quest to recover Vulkan, these tales chronicle the XVIII Legion's trials. The Salamanders' devotion to their Primarch and their humanitarian values are tested by the war's brutality. Yet even in darkness, they strive to remain protectors of humanity rather than just warriors.`,
        blurbSafe: `A collection of Salamanders stories spanning the Heresy. From the Dropsite Massacre's aftermath to the quest to recover Vulkan, these tales chronicle the XVIII Legion's trials and their struggle to remain protectors of humanity.`
    },
    'heralds-of-the-siege': {
        number: 'LII',
        title: 'HERALDS OF THE SIEGE',
        author: 'Various (Anthology)',
        timeline: '012-013.M31',
        coverImage: 'images/heralds-of-the-siege.jpg',
        legions: ["Various"],
        details: `
            <strong>Type:</strong> Short Story Anthology<br>
            <strong>Main Characters:</strong> Warriors from both sides preparing for Terra<br>
            <strong>Timeline:</strong> 012-013.M31<br>
            <strong>Status:</strong> The Siege Approaches
        `,
        blurb: `The final anthology before the Siege of Terra begins. These stories depict the last battles before Horus's fleet arrives at the Solar System. Loyalists make desperate final stands to buy Terra more time. The traitor Legions eliminate the last obstacles in their path. Every moment matters, every battle could mean the difference between survival and extinction. The Siege is coming, and the galaxy holds its breath.`,
        blurbSafe: `The final anthology before the Siege of Terra begins. These stories depict the last battles before Horus's fleet arrives at the Solar System, as loyalists make desperate stands to buy Terra more time.`
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
        details: `<strong>Author:</strong> Gav Thorpe<br><strong>Series:</strong> Siege of Terra #3<br><strong>Legions:</strong> Imperial Fists, Iron Warriors<br><strong>Main Characters:</strong> Rogal Dorn, Perturabo, Sigismund<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Siege Intensifies`,
        blurb: `The Iron Warriors assault the Lion's Gate spaceport. Perturabo's siege engines grind against Dorn's fortifications in the ultimate test of defense versus offense. The battle becomes personal as master siege-breaker faces master fortifier. When the first wall falls, the defenders realize Terra itself may be conquered.`,
        blurbSafe: `The Iron Warriors assault the Lion's Gate spaceport in the ultimate test of defense versus offense. Perturabo's siege engines grind against Dorn's fortifications as master siege-breaker faces master fortifier.`
    },
    'sot-saturnine': {
        number: 'SoT 4', title: 'SATURNINE', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-saturnine.jpg', legions: ['Imperial Fists', 'Sons of Horus', 'Alpha Legion'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Series:</strong> Siege of Terra #4<br><strong>Legions:</strong> Imperial Fists, Sons of Horus, Alpha Legion<br><strong>Main Characters:</strong> Rogal Dorn, Horus Lupercal, Alpharius Omegon, Sigismund<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Turning Point`,
        blurb: `The Saturnine Gambit—Horus's desperate strike at the Saturnine Wall. The Alpha Legion infiltrates Terra's defenses, but Rogal Dorn has anticipated this. In a shocking confrontation, one of the twin Primarchs meets their end. Sigismund duels traitor champions. The Siege's momentum shifts at terrible cost.`,
        blurbSafe: `The Saturnine Gambit—Horus's desperate strike at the Saturnine Wall. The Alpha Legion infiltrates Terra's defenses, but Rogal Dorn has prepared for this. The Siege's momentum shifts in shocking confrontations and duels.`
    },
    'sot-mortis': {
        number: 'SoT 5', title: 'MORTIS', author: 'John French', timeline: '014.M31', coverImage: 'images/sot-mortis.jpg', legions: ['Collegia Titanica', 'Death Guard'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> John French<br><strong>Series:</strong> Siege of Terra #5<br><strong>Factions:</strong> Titan Legions, Death Guard<br><strong>Main Characters:</strong> Titan Princeps, Mortarion<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Titan War`,
        blurb: `The Titan Legions wage apocalyptic battles across Terra's wastelands. Loyalist legions face daemon-corrupted Titans and Mortarion's Death Guard. The war becomes existential as the Warp breaches reality. Time itself begins to break down. The defenders fight to keep reality intact.`,
        blurbSafe: `The Titan Legions wage apocalyptic battles across Terra's wastelands. Loyalist legions face daemon-corrupted Titans as the war becomes existential and the Warp breaches reality itself.`
    },
    'sot-warhawk': {
        number: 'SoT 6', title: 'WARHAWK', author: 'Chris Wraight', timeline: '014.M31', coverImage: 'images/sot-warhawk.jpg', legions: ['White Scars', 'Death Guard'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Chris Wraight<br><strong>Series:</strong> Siege of Terra #6<br><strong>Legions:</strong> White Scars, Death Guard<br><strong>Main Characters:</strong> Jaghatai Khan, Mortarion<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Khan's Vengeance`,
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
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Series:</strong> Siege of Terra #8 Part 1<br><strong>Legions:</strong> All Legions<br><strong>Main Characters:</strong> Horus Lupercal, The Emperor, Sanguinius, Rogal Dorn, Garviel Loken<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> Endgame Begins`,
        blurb: `The Siege reaches its climax. Horus lowers his shields and invites the Emperor to board the Vengeful Spirit. The Emperor, Sanguinius, and Dorn teleport to the flagship but are scattered across the ship. Loyalist heroes converge for the final battle. Reality warps as Warp and materium collide.`,
        blurbSafe: `The Siege reaches its climax as Horus lowers his shields and invites the Emperor to board the Vengeful Spirit. The Emperor, Sanguinius, and Dorn teleport to the flagship but are scattered. Loyalist heroes converge for the final battle.`
    },
    'sot-end-and-death-vol-2': {
        number: 'SoT 8b', title: 'THE END AND THE DEATH: VOLUME II', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-end-and-death-vol-2.jpg', legions: ['All Legions'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Series:</strong> Siege of Terra #8 Part 2<br><strong>Legions:</strong> All Legions<br><strong>Main Characters:</strong> The Emperor, Sanguinius, Horus Lupercal, Garviel Loken, Ollanius Pius<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> The Angel Falls`,
        blurb: `Aboard the Vengeful Spirit, Sanguinius confronts Horus knowing he walks to his death. The Great Angel fights valiantly, wounding the Warmaster before falling to his corrupted brother. Garviel Loken hunts through the flagship. Perpetuals and mortals fight alongside demigods as humanity's fate hangs by a thread.`,
        blurbSafe: `Aboard the Vengeful Spirit, Sanguinius confronts Horus knowing what fate may await him. The Great Angel fights valiantly while Garviel Loken hunts through the flagship. Perpetuals and mortals fight alongside demigods as humanity's fate hangs by a thread.`
    },
    'sot-end-and-death-vol-3': {
        number: 'SoT 8c', title: 'THE END AND THE DEATH: VOLUME III', author: 'Dan Abnett', timeline: '014.M31', coverImage: 'images/sot-end-and-death-vol-3.jpg', legions: ['All Legions'], series: 'siege-of-terra',
        details: `<strong>Author:</strong> Dan Abnett<br><strong>Series:</strong> Siege of Terra #8 Part 3<br><strong>Legions:</strong> All Legions<br><strong>Main Characters:</strong> The Emperor, Horus Lupercal, Ollanius Pius, Garviel Loken<br><strong>Timeline:</strong> 014.M31<br><strong>Status:</strong> Father Against Son`,
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
            return keys; // Already in chronological order
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

        bookCard.innerHTML = `
            <div class="book-cover" style="background-image: url('${book.coverImage}'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                <div class="book-number-overlay">${book.number}</div>
                <div class="chronological-badge">Chrono: ${chronologicalNumber}</div>
                ${statusBadge}
            </div>
            <div class="book-title">${book.title}</div>
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

// Add glitch effect to title on load
window.addEventListener('load', () => {
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
