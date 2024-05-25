// Translations object
const translations = {
    en: {
        heading: "Welcome to our website!",
        hom: "Phangan Market Sushi",
        sush: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-solid fa-fish"></i> Sushi library</button>',
        ordr: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-regular fa-clipboard"></i> Order form</button>',
        loc: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-solid fa-fish"></i> Locations</button>',
        bout: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-regular fa-clipboard"></i> About us</button>',
        ordr2: '<button type="button" class="btn dbtn btn-outline-light btn-lg"><i class="fa-regular fa-clipboard"></i> Order Page</button>',
        entr: '<button type="button" class="btn introbtn dbtn btn-secondary btn-lg"><i class="fa-solid fa-arrow-right-to-bracket"></i> Enter page</button>'
        
    },
    th: {
        heading: "ยินดีตอนรับ",
        hom: "ซูชิตลาดพะงัน",
        sush: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-solid fa-fish"></i> ซูชิ</button>',
        ordr: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-regular fa-clipboard"></i> แบบฟอร์มสั่งซื้อ</button>',
        loc: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-solid fa-fish"></i> สถานที่</button>',
        bout: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-regular fa-clipboard"></i> เกี่ยวกับเรา</button>',
        ordr2: '<button type="button" class="btn dbtn btn-outline-light "><i class="fa-regular fa-clipboard"></i> แบบฟอร์มสั่งซื้อ</button>',
        entr: '<button type="button" class="btn introbtn dbtn btn-secondary "><i class="fa-solid fa-arrow-right-to-bracket"></i> เข้าสู่หน้าเว็บ</button>'
        
    }
};

// Function to change the language
function changeLanguage(language) {
    document.getElementById('heading').textContent = translations[language].heading;
    document.getElementById('hom').textContent = translations[language].hom;
    document.getElementById('sush').innerHTML = translations[language].sush;
    document.getElementById('ordr').innerHTML = translations[language].ordr;
    document.getElementById('loc').innerHTML = translations[language].loc;
    document.getElementById('bout').innerHTML = translations[language].bout;
    document.getElementById('ordr2').innerHTML = translations[language].ordr2;
    document.getElementById('entr').innerHTML = translations[language].entr;
    localStorage.setItem('preferredLanguage', language);
}

// Event listener for the language select dropdown
document.getElementById('languageSelect').addEventListener('change', function () {
    changeLanguage(this.value);
});

// Retrieve preferred language from local storage and set it
document.addEventListener('DOMContentLoaded', (event) => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    document.getElementById('languageSelect').value = savedLanguage;
    changeLanguage(savedLanguage);
});
