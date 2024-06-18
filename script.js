// this area is for general translation of the page. 
const translations = {
    en: {
        //navbar
        hom: "Phangan Market Sushi",
        sush: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-solid fa-fish"></i> Sushi library</button>',
        ordr: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-regular fa-clipboard"></i> Order form</button>',
        loc: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-solid fa-fish"></i> Locations</button>',
        bout: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-regular fa-clipboard"></i> About us</button>',

        index: {
            heading: "Welcome to our website!",
            ordr2: '<button type="button" class="btn dbtn btn-outline-light btn-lg"><i class="fa-regular fa-clipboard"></i> Order Page</button>',
            entr: '<button type="button" class="btn introbtn dbtn btn-secondary btn-lg"><i class="fa-solid fa-arrow-right-to-bracket"></i> Enter page</button>',
        },
        aboutus: {
            welcom: "Welcome to all sushi lovers.",
            introtext: "For over 10 years, <br> our family has proudly served handcrafted sushi at the local market. <br><br> Each piece is made with the freshest ingredients <br>and a passion for authentic flavors. <br><br> From classic favorites to innovative creations,<br> our menu offers something for everyone. <br><br> As a family-run business, we pour our heart and soul into every roll,<br> ensuring you get the best sushi experience. <br><br> Visit us at the market and taste the difference that family dedication makes. <br> We look forward to sharing our love for sushi with you!",
            getsu: "Getting some sushi.",
            getsushi: "At our stall you can pick up one of the plates to select your sushi <br>once done, we will box it for you to take it home<br><br>Alternatively, you can ask us for a paper plate should you wish to eat it at the market.",
        },
        locations: {
            cardbigc: 'Big C Ban Tai',
            cardbigc2: 'Monday, Wednesday and Friday from 15:00-19:00.',
            cardts: 'Walking street Thong Sala',
            cardts2: 'Every Saturday, across the Zen. 16:00-21:00.',
            cardck: 'Chaloklum walking street',
            cardck2: 'Every Sunday on Chaloklum pier. 16:00-21:00',
        },
        //           `${getIngredients ('en','r',)}`,

    },
    th: {
        //navbar
        hom: "ซูชิตลาดพะงัน",
        sush: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-solid fa-fish"></i> ซูชิ</button>',
        ordr: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-regular fa-clipboard"></i> แบบฟอร์มสั่งซื้อ</button>',
        loc: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-solid fa-fish"></i> สถานที่</button>',
        bout: '<button type="button" class="btn dbtn btn-outline-light btn-sm"><i class="fa-regular fa-clipboard"></i> เกี่ยวกับเรา</button>',
        index: {
            ordr2: '<button type="button" class="btn dbtn btn-outline-light "><i class="fa-regular fa-clipboard"></i> แบบฟอร์มสั่งซื้อ</button>',
            entr: '<button type="button" class="btn introbtn dbtn btn-secondary "><i class="fa-solid fa-arrow-right-to-bracket"></i> เข้าสู่หน้าเว็บ</button>',
            heading: "ยินดีตอนรับ",
        },
        aboutus: {
            welcom: "ยินดีต้อนรับคนรักซูชิทุกคน",
            introtext: "กว่า 10 ปีที่ครอบครัวของเราได้ภูมิใจนำเสนอซูชิที่ทำด้วยมือที่ตลาดท้องถิ่น<br>ทุกชิ้นทำจากวัตถุดิบที่สดใหม่ที่สุดและด้วยความหลงใหลในรสชาติที่แท้จริง<br>จากเมนูคลาสสิกยอดนิยมถึงการสร้างสรรค์ใหม่ ๆ <br>เมนูของเรามีบางสิ่งสำหรับทุกคนในฐานะธุรกิจที่ดำเนินงานโดยครอบครัว <br>เราใส่ใจและตั้งใจทำทุกม้วน <br>เพื่อให้คุณได้รับประสบการณ์ซูชิที่ดีที่สุดมาเยี่ยมชมเราที่ตลาดและสัมผัสถึง<br>ความแตกต่างที่มาจากการใส่ใจของครอบครัวเรา<br>หวังว่าจะได้แบ่งปันความรักที่เรามีต่อซูชิกับคุณ!",
            getsu: "การซื้อซูชิ",
            getsushi: "ที่ร้านของเรา คุณสามารถหยิบจานเพื่อเลือกซูชิของคุณ <br>เมื่อเสร็จแล้ว เราจะบรรจุใส่กล่องให้คุณนำกลับบ้าน<br><br>นอกจากนี้ คุณยังสามารถขอจานกระดาษจากเราได้หากต้องการทานที่ตลาด",
        },
        locations: {
            cardbigc: 'ตลาดบิ๊กซี',
            cardbigc2: 'วันจันทร์, วันพุธ และวันศุกร์ ตั้งแต่เวลา 15:00-19:00.',
            cardts: 'ถนนคนเดินทองศาลา',
            cardts2: 'ทุกวันเสาร์, ตรงข้าม Zen. 16:00-21:00.',
            cardck: 'ถนนคนเดินโฉลกหลำ',
            cardck2: 'ทุกวันอาทิตย์ที่ท่าเรือโฉลกหลำ. 16:00-21:00',
        },

    },
};

// Function to change the language
function changeLanguage(language, page) {
    const pageTranslations = translations[language][page];




    // Rest of your JavaScript code...

    //navbar language
    document.getElementById('hom').textContent = translations[language].hom;
    document.getElementById('sush').innerHTML = translations[language].sush;
    document.getElementById('ordr').innerHTML = translations[language].ordr;
    document.getElementById('loc').innerHTML = translations[language].loc;
    document.getElementById('bout').innerHTML = translations[language].bout;


    //the rest of the page
    for (const key in pageTranslations) {
        if (pageTranslations.hasOwnProperty(key)) {
            document.getElementById(key).innerHTML = pageTranslations[key];
        }

    }

    localStorage.setItem('preferredLanguage', language);
    localStorage.setItem('preferredPage', page);
}



// Event listener for the language select dropdown
document.getElementById('languageSelect').addEventListener('change', function () {
    const page = document.body.dataset.page;
    changeLanguage(this.value, page);
});



// Retrieve preferred language from local storage and set it
document.addEventListener('DOMContentLoaded', (event) => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    const page = document.body.dataset.page;
    document.getElementById('languageSelect').value = savedLanguage;
    changeLanguage(savedLanguage, page);
});



//search option for sushi catalog
document.addEventListener('DOMContentLoaded', (event) => {
    const searchInput = document.getElementById('searchInput');
    const sushiItems = document.querySelectorAll('.sushis');

    searchInput.addEventListener('keyup', function () {
        const filter = searchInput.value.toLowerCase();
        sushiItems.forEach(item => {
            const name = item.getAttribute('data-name').toLowerCase();
            if (name.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

//                  --------   Sushi library starting here. -------------
//====================================================================================================

const ingredientLibrary = {
    en: {
        H: 'Sushi catalog',
        ing: 'Ingredients:',
        r: 'Rice',
        sa: 'Salmon',
        cu: 'Cucumber',
        cre: 'Cream cheese',
        ses: 'Sesame',
        sea: 'Seaweed',
        av: 'Avocado',
        tu: 'Tuna',
        ta: 'Tamago',
        su: 'Surimi',
        ca: 'Carrot',
        to: 'Tobiko',
        sh: 'Shrimp',
        sp: 'Spicy mayo',
        may: 'Mayonnaise',
        tof: 'Tofu',
        ma: 'Mackerel',
        te: 'Teriyaki',
        ch: 'Cheese',
        man: 'Mango',
        ja: 'Japanese cucumber',
        oc: 'Octopus in chilli sauce',
        sc: 'scallops',
        sf: 'scallop fin',
        qu: 'quail egg',
        ke: 'colored kelp balls',
        chd: 'cheese dip',
        ba: 'chicken stripe',
        ceg: 'century egg'
    },
    th: {
        H: 'แคตตาล็อกซูชิ',
        ing: 'ส่วนผสม:',
        r: 'ข้าว',
        sa: 'แซลมอน',
        cu: 'แตงกวา',
        cre: 'ครีมชีส',
        ses: 'งา',
        sea: 'สาหร่าย',
        av: 'อะโวคาโด',
        tu: 'ทูน่า',
        ta: 'ไข่หวาน',
        su: 'ปูอัด',
        ca: 'แครอท',
        to: 'ไข่กุ้ง',
        sh: 'กุ้ง',
        sp: 'สไปซี่มาโย',
        may: 'มายอนเนส',
        tof: 'เต้าหู้',
        ma: 'ปลาซาบะ',
        te: 'เทอริยากิ',
        ch: 'ชีส',
        man: 'มะม่วง',
        ja: 'แตงกวาญี่ปุ่น',
        oc: 'ปลาหมึก',
        sc: 'หอยเชลล์',
        sf: 'ครีบหอยเชลล์',
        qu: 'ไข่นกกระทา',
        ke: 'ไข่มังกร',
        chd: 'น้ำจิ้มชีส',
        ba: 'เบคอนไก่',
        ceg: 'ไข่เยี่ยวม้า',

    }
};

// Function to generate ingredient list from keys

// Function to get ingredients based on selected language and keys
function getIngredients(language, ...keys) {
    const ingredientNames = keys.map(key => {
        if (key === 'H') {
            return ingredientLibrary[language][key];
        } else if (key.endsWith('ing')) {
            return ingredientLibrary[language][key];
        } else {
            return ingredientLibrary[language][key] + ','; // Append comma for other keys
        }
    });

    // Remove trailing comma if present
    const lastIngredientIndex = ingredientNames.length - 1;
    if (ingredientNames[lastIngredientIndex].endsWith(',')) {
        ingredientNames[lastIngredientIndex] = ingredientNames[lastIngredientIndex].slice(0, -1); // Remove the last character (which is comma)
    }

    return `${ingredientNames.join(' ')}`; // Join with a space instead of comma
}


// Function to update catalog content based on selected language
function updateCatalog(language) {
    const catalog = {
        cat: getIngredients(language, 'H'),
        salmon: getIngredients(language, 'ing', 'r', 'sa'),
        tamago: getIngredients(language, 'ing', 'r', 'ta', 'sea'),
        seaweed: getIngredients(language, 'ing', 'r', 'sea', 'ses'),
        tuna: getIngredients(language, 'ing', 'r', 'tu', 'sea', 'may'),
        crab: getIngredients(language, 'ing', 'r', 'su', 'may', 'sea'),
        tobiko: getIngredients(language, 'ing', 'r', 'to', 'sea'),
        shrimp: getIngredients(language, 'ing', 'r', 'sh', 'may', 'sea'),
        tako: getIngredients(language, 'ing', 'r', 'oc', 'sea', 'ses'),
        surimi: getIngredients(language, 'ing', 'r', 'su', 'sea'),
        scallfin: getIngredients(language, 'ing', 'r', 'sf', 'sea', 'ses'),
        egg: getIngredients(language, 'ing', 'r', 'qu', 'may', 'to'),
        tobired: getIngredients(language, 'ing', 'r', 'to', 'sea'),
        crabtobi: getIngredients(language, 'ing', 'r', 'su', 'to', 'may'),
        cheeseshr: getIngredients(language, 'ing', 'r', 'ch', 'sh', 'may'),
        cheesetob: getIngredients(language, 'ing', 'r', 'ch', 'to', 'may', 'sea'),
        tobimaki: getIngredients(language, 'ing', 'r', 'ca', 'cu', 'su', 'to', 'ta', 'sea'),
        salmaki: getIngredients(language, 'ing', 'r', 'sa', 'ca', 'su', 'to', 'ta', 'sea'),
        sprout: getIngredients(language, 'ing', 'r', 'ta', 'su', 'ca', 'cu', 'sea'),
        suritabi: getIngredients(language, 'ing', 'r', 'su', 'to'),
        suriweed: getIngredients(language, 'ing', 'r', 'su', 'sea', 'to', 'may'),
        mackerel: getIngredients(language, 'ing', 'r', 'ma', 'te', 'ses'),
        scallop: getIngredients(language, 'ing', 'r', 'sc', 'ses', 'sea'),
        kelp: getIngredients(language, 'ing', 'r', 'ke', 'may', 'sea'),
        bbqsal: getIngredients(language, 'ing', 'r', 'sa', 'may', 'to', 'sea'),
        cenegg: getIngredients(language, 'ing', 'r', 'ceg', 'may', 'to', 'sea'),
        torchsalm: getIngredients(language, 'ing', 'r', 'sa'),
        avocream: getIngredients(language, 'ing', 'r', 'av', 'cre', 'sea'),
        aburisal: getIngredients(language, 'ing', 'r', 'sa', 'may', 'te', 'chd'),
        aburishrim: getIngredients(language, 'ing', 'r', 'sh', 'may', 'te', 'chd'),
        aburisuri: getIngredients(language, 'ing', 'r', 'su', 'may', 'te', 'chd'),
        chickn: getIngredients(language, 'ing', 'r', 'ba', 'may', 'te', 'chd'),
        bigphila: getIngredients(language, 'ing', 'r', 'sa', 'av', 'cre', 'te', 'ses', 'sea'),
        philsm: getIngredients(language, 'ing', 'r', 'sa', 'cu', 'cre', 'sea', 'ses'),
        avosalm: getIngredients(language, 'ing', 'r', 'sa', 'av', 'sea'),
        cucumbr: getIngredients(language, 'ing', 'r', 'cu', 'sea', 'ses'),
        mango: getIngredients(language, 'ing', 'r', 'man', 'av', 'cu', 'sea'),
        japan: getIngredients(language, 'ing', 'r', 'sa', 'cre', 'to', 'may', 'ja'),
        spicysalrol: getIngredients(language, 'ing', 'r', 'sa', 'sp', 'av', 'sea', 'to', 'may'),
        spicytuna: getIngredients(language, 'ing', 'r', 'tu', 'cu', 'sp', 'sea'),
        spicysalm: getIngredients(language, 'ing', 'r', 'sa', 'sp', 'to'),
        tofsal: getIngredients(language, 'ing', 'r', 'tof', 'sa', 'sp', 'to', 'ses'),
        tofavo: getIngredients(language, 'ing', 'r', 'tof', 'av', 'ses'),
        salaburol: getIngredients(language, 'ing', 'r', 'sa', 'su', 'ta', 'cu', 'ca', 'te', 'may', 'chd', 'sea'),
        mackaburol: getIngredients(language, 'ing', 'r', 'ma', 'su', 'ta', 'cu', 'ca', 'te', 'may', 'chd', 'sea'),
        tobiredrol: getIngredients(language, 'ing', 'r', 'ca', 'cu', 'su', 'to', 'ta', 'sea'),
        shrimnigi: getIngredients(language, 'ing', 'r', 'sh', 'to', 'may'),
        crabtuna: getIngredients(language, 'ing', 'r', 'su', 'tu', 'may', 'sea'),
        crabsea: getIngredients(language, 'ing', 'r', 'su', 'may', 'sea', 'to'),
        avoveg: getIngredients(language, 'ing', 'r', 'av', 'cu', 'ca', 'sea', 'ses'),
        avosea: getIngredients(language, 'ing', 'r', 'av', 'sea', 'ses'),
        avodel: getIngredients(language, 'ing', 'r', 'av', 'cu'),
        avo: getIngredients(language, 'ing', 'r', 'av', 'ses'),
        avosalro: getIngredients(language, 'ing', 'r', 'av', 'sa', 'sea'),
        shrimcali: getIngredients(language, 'ing', 'r', 'ca', 'cu', 'su', 'to', 'ta', 'sea'),
        shrimrol: getIngredients(language, 'ing', 'r', 'sh', 'cu', 'ca', 'ta', 'sea')

    };

    // Update HTML elements with new content
    document.getElementById('cat').textContent = catalog.cat;
    document.getElementById('salmon').textContent = catalog.salmon;
    document.getElementById('tamago').textContent = catalog.tamago;
    document.getElementById('seaweed').textContent = catalog.seaweed;
    document.getElementById('tuna').textContent = catalog.tuna;
    document.getElementById('crab').textContent = catalog.crab;
    document.getElementById('tobiko').textContent = catalog.tobiko;
    document.getElementById('shrimp').textContent = catalog.shrimp;
    document.getElementById('tako').textContent = catalog.tako;
    document.getElementById('surimi').textContent = catalog.surimi;
    document.getElementById('scallfin').textContent = catalog.scallfin;
    document.getElementById('egg').textContent = catalog.egg;
    document.getElementById('tobired').textContent = catalog.tobired;
    document.getElementById('crabtobi').textContent = catalog.crabtobi;
    document.getElementById('cheeseshr').textContent = catalog.cheeseshr;
    document.getElementById('cheesetob').textContent = catalog.cheesetob;
    document.getElementById('tobimaki').textContent = catalog.tobimaki;
    document.getElementById('salmaki').textContent = catalog.salmaki;
    document.getElementById('sprout').textContent = catalog.sprout;
    document.getElementById('suritabi').textContent = catalog.suritabi;
    document.getElementById('suriweed').textContent = catalog.suriweed;
    document.getElementById('mackerel').textContent = catalog.mackerel;
    document.getElementById('scallop').textContent = catalog.scallop;
    document.getElementById('kelp').textContent = catalog.kelp;
    document.getElementById('bbqsal').textContent = catalog.bbqsal;
    document.getElementById('cenegg').textContent = catalog.cenegg;
    document.getElementById('torchsalm').textContent = catalog.torchsalm;
    document.getElementById('avocream').textContent = catalog.avocream;
    document.getElementById('aburisal').textContent = catalog.aburisal;
    document.getElementById('aburishrim').textContent = catalog.aburishrim;
    document.getElementById('aburisuri').textContent = catalog.aburisuri;
    document.getElementById('chickn').textContent = catalog.chickn;
    document.getElementById('bigphila').textContent = catalog.bigphila;
    document.getElementById('philsm').textContent = catalog.philsm;
    document.getElementById('avosalm').textContent = catalog.avosalm;
    document.getElementById('cucumbr').textContent = catalog.cucumbr;
    document.getElementById('mango').textContent = catalog.mango;
    document.getElementById('japan').textContent = catalog.japan;
    document.getElementById('spicysalrol').textContent = catalog.spicysalrol;
    document.getElementById('spicytuna').textContent = catalog.spicytuna;
    document.getElementById('spicysalm').textContent = catalog.spicysalm;
    document.getElementById('tofsal').textContent = catalog.tofsal;
    document.getElementById('tofavo').textContent = catalog.tofavo;
    document.getElementById('salaburol').textContent = catalog.salaburol;
    document.getElementById('mackaburol').textContent = catalog.mackaburol;
    document.getElementById('tobiredrol').textContent = catalog.tobiredrol;
    document.getElementById('shrimnigi').textContent = catalog.shrimnigi;
    document.getElementById('crabtuna').textContent = catalog.crabtuna;
    document.getElementById('crabsea').textContent = catalog.crabsea;
    document.getElementById('avosea').textContent = catalog.avosea;
    document.getElementById('avoveg').textContent = catalog.avoveg;
    document.getElementById('avodel').textContent = catalog.avodel;
    document.getElementById('avosalro').textContent = catalog.avosalro;
    document.getElementById('shrimcali').textContent = catalog.shrimcali;
    document.getElementById('shrimrol').textContent = catalog.shrimrol;
    document.getElementById('avo').textContent = catalog.avo;


}

// Event listener for dropdown change
document.getElementById('languageSelect').addEventListener('change', function () {
    const selectedLanguage = this.value; // Get selected language code
    updateCatalog(selectedLanguage); // Update catalog based on selected language


});

// Initial update of catalog based on default selected language
const initialLanguage = document.getElementById('languageSelect').value; // Get initial selected language
updateCatalog(initialLanguage); // Update catalog on page load


// Initialization function
function initializePage() {
    // Retrieve preferred language from local storage, default to 'en'
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';

    // Get the current page from dataset or default to 'index'
    const page = document.body.dataset.page || 'index';

    // Set the selected language in the language dropdown
    document.getElementById('languageSelect').value = savedLanguage;

    // Change language and update page content
    changeLanguage(savedLanguage, page);

    // Update catalog based on selected language
    updateCatalog(savedLanguage);
}

// Event listener for the language select dropdown
document.getElementById('languageSelect').addEventListener('change', function () {
    const page = document.body.dataset.page || 'index';
    changeLanguage(this.value, page);
    updateCatalog(this.value); // Update catalog when language changes
});

// Event listener for DOMContentLoaded to initialize the page
document.addEventListener('DOMContentLoaded', initializePage);








