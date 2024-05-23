// Translations object
const translations = {
    en: {
        heading: "Welcome to our website!",
        paragraph: "This is a simple example of a language toggle."
    },
    es: {
        heading: "Toritilla! mexico!",
        paragraph: "ik begrijp overduidelijk geen spaans"
    },
    fr: {
        heading: "Fuck this is goddamn awesome!",
        paragraph: "Pardon my french"
    }
};

// Function to change the language
function changeLanguage(language) {
    document.getElementById('heading').textContent = translations[language].heading;
    document.getElementById('paragraph').textContent = translations[language].paragraph;
}

// Event listener for the language select dropdown
document.getElementById('languageSelect').addEventListener('change', function() {
    changeLanguage(this.value);
});

// Set initial language based on the default option
changeLanguage(document.getElementById('languageSelect').value);
