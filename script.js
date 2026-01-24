// Book Data Repository
const bookData = {
    'horus-rising': {
        title: 'HORUS RISING',
        details: `
            <strong>Author:</strong> Dan Abnett<br>
            <strong>Legion:</strong> Luna Wolves / Sons of Horus<br>
            <strong>Primarch:</strong> Horus Lupercal, Warmaster of the Imperium<br>
            <strong>Timeline:</strong> 203rd Year of the Great Crusade<br>
            <strong>Status:</strong> The Fall Begins
        `,
        blurb: `
            <p>The Great Crusade is at its zenith. Under the leadership of the brilliant Warmaster Horus, the Imperium's armies are unstoppable, bringing world after world into compliance. The Luna Wolves Legion, renamed the Sons of Horus in their Primarch's honor, stand as the Emperor's finest warriors.</p>

            <p>Through the eyes of Captain Garviel Loken, we witness the last days of the Imperium's golden age. Loken is inducted into the Mournival, Horus's inner circle of advisors, and begins to see the moral complexities behind the Crusade's brutality. The discovery of the interex, a sophisticated civilization that has achieved peace with alien species, challenges everything the Astartes believe about humanity's manifest destiny.</p>

            <p>When a misunderstanding sparked by the daemonic sword Anathame leads to conflict with the interex, the seeds of betrayal are sown. The book ends with Horus wounded by the blade on Davin's moon, a xenos weapon laced with Chaos energies that will corrupt the Warmaster's soul. What begins as a tale of glory and brotherhood ends with the first whispers of heresy, as the architect of humanity's greatest triumph begins his descent into becoming its destroyer.</p>

            <p>This is not just the story of Horus's fall—it's the death of innocence, the moment when the bright future of the Imperium begins to rot from within.</p>
        `
    },
    'false-gods': {
        title: 'FALSE GODS',
        details: `
            <strong>Author:</strong> Graham McNeill<br>
            <strong>Legion:</strong> Sons of Horus<br>
            <strong>Primarch:</strong> Horus Lupercal, the Corrupted Warmaster<br>
            <strong>Timeline:</strong> 203rd Year of the Great Crusade<br>
            <strong>Status:</strong> The Corruption Complete
        `,
        blurb: `
            <p>Horus lies dying. The wound from the Anathame festers with warp-born pestilence that no Imperial science can heal. In desperation, First Captain Ezekyle Abaddon and the Word Bearer Erebus convince the Legion to seek aid from the warrior-lodges of Davin—a decision that will doom the galaxy.</p>

            <p>In a twisted Chaos ritual within the Serpent Lodge's temple, Horus's soul is cast into the warp. There, in a fever-dream of false visions orchestrated by the Chaos Gods, the Warmaster sees himself abandoned by the Emperor, cast aside after the Crusade's completion while the Emperor pursues godhood. Magnus the Red appears to warn him, but even this intervention is twisted by Chaos. Erebus and the Chaos entities show Horus a fabricated future where the Emperor's vision leads to humanity's stagnation and his sons' obsolescence.</p>

            <p>When Horus awakens, he is no longer the Emperor's loyal son—he is the pawn of the Ruinous Powers, convinced that he must overthrow the Emperor to save humanity. Garviel Loken and Tarik Torgaddon witness the change in their Primarch with growing horror, but it's already too late. The warrior lodges that seemed like harmless brotherhoods are revealed as the vectors of corruption, spreading throughout the Legions.</p>

            <p>The book climaxes with Horus's first steps toward rebellion. The Warmaster who once embodied humanity's hope has become the architect of its damnation, serving false gods he believes he can control. The galaxy will burn for his pride.</p>
        `
    },
    'galaxy-in-flames': {
        title: 'GALAXY IN FLAMES',
        details: `
            <strong>Author:</strong> Ben Counter<br>
            <strong>Legions:</strong> Sons of Horus, Emperor's Children, Death Guard, World Eaters<br>
            <strong>Location:</strong> Isstvan III<br>
            <strong>Timeline:</strong> Opening Shots of the Horus Heresy<br>
            <strong>Status:</strong> The Betrayal Unleashed
        `,
        blurb: `
            <p>The Heresy begins in fire. On the virus-bombed ruins of Isstvan III, brother turns on brother in the war that will tear the Imperium apart. Horus has revealed his treachery, and his first victims are his own sons—the loyalist elements of the Traitor Legions who would never follow him into damnation.</p>

            <p>Captain Garviel Loken, Captain Saul Tarvitz of the Emperor's Children, and Captain Nathaniel Garro of the Death Guard are among those betrayed. Sent to the surface of Isstvan III under the pretense of bringing the planet to compliance, they are instead bombarded with Life-Eater virus that kills everything on the planet's surface. But some survive in the Precentor's Palace, and they realize the horrifying truth: they have been marked for death by their own Primarchs.</p>

            <p>What follows is a desperate last stand as the surviving loyalists fortify their position against waves of traitor Astartes sent to finish them off. Torgaddon falls. Tarvitz leads heroic defenses knowing there's no escape. Loken refuses to believe his Primarch is truly lost to Chaos, even as he fights the Sons of Horus. The Death Guard's Mortarion, the World Eaters' Angron, Fulgrim of the Emperor's Children—all have fallen with Horus, and they personally lead the slaughter.</p>

            <p>In the end, the traitors unleash a second wave of virus bombing and orbital bombardment that reduces the palace to atomic fire. Garro escapes to warn the Emperor, carrying the bitter truth across the stars. Loken is presumed dead, buried under miles of rubble. The galaxy doesn't just burn—it dies and is reborn in treachery. The Age of Darkness has begun, and there is only war.</p>
        `
    }
};

// Get DOM elements
const bookCards = document.querySelectorAll('.book-card');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const keyDetails = document.getElementById('keyDetails');
const blurb = document.getElementById('blurb');

// Hover event listeners for book cards
bookCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const bookKey = card.getAttribute('data-book');
        showModal(bookKey);
    });
});

// Close modal events
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Keyboard event for ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Show modal function
function showModal(bookKey) {
    const book = bookData[bookKey];

    if (!book) {
        console.error('Book data not found for:', bookKey);
        return;
    }

    // Populate modal content
    modalTitle.textContent = book.title;
    keyDetails.innerHTML = book.details;
    blurb.innerHTML = book.blurb;

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal function
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Add glitch effect to title on load
window.addEventListener('load', () => {
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
