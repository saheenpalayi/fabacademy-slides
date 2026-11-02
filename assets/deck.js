/*
 * Shared setup for every class deck.
 * Change settings here once and every class picks them up.
 */
Reveal.initialize({
	hash: true, // URL remembers the current slide
	slideNumber: 'c/t', // "3/12" in the corner
	controlsTutorial: false,
	plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealZoom, RevealSearch],
});

// "← All classes" button, shown on every slide
const home = document.createElement('a');
home.href = '../';
home.className = 'home-link';
home.textContent = '← All classes';
home.title = 'Back to the class index';
document.body.appendChild(home);
