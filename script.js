// Translations object
const translations = {
    en: {
        heading: "Welcome to our website!",
        paragraph: "This is a simple example of a language toggle.",
        welcom: "Welcome to all sushi lovers.",
        introtext: "Welcome to our sushi stall! For over 10 years, our family has proudly served handcrafted sushi at the local market.Each piece is made with the freshest ingredientsand a passion for authentic flavors. From classic favorites to innovative creations, our menu offers something for everyone. As a family-run business, we pour our heart and soul into every roll, ensuring you get the best sushi experience. Visit us at the market and taste the difference that family dedication makes. We look forward to sharing our love for sushi with you!"

    },
    th: {
        heading: "ยินดีตอนรับ",
        paragraph: "มันจะได้ไหม",
        welcom: "ยินดีต้อนรับคนรักซูชิทุกคน",
        introtext: "ยินดีต้อนรับสู่ร้านซูชิของเรา! กว่า 10 ปีที่ครอบครัวของเราได้ภูมิใจนำเสนอซูชิที่ทำด้วยมือที่ตลาดท้องถิ่นทุกชิ้นทำจากวัตถุดิบที่สดใหม่ที่สุดและด้วยความหลงใหลในรสชาติที่แท้จริงจากเมนูคลาสสิกยอดนิยมถึงการสร้างสรรค์ใหม่ ๆ เมนูของเรามีบางสิ่งสำหรับทุกคนในฐานะธุรกิจที่ดำเนินงานโดยครอบครัว เราใส่ใจและตั้งใจทำทุกม้วน เพื่อให้คุณได้รับประสบการณ์ซูชิที่ดีที่สุดมาเยี่ยมชมเราที่ตลาดและสัมผัสถึงความแตกต่างที่มาจากการใส่ใจของครอบครัวเราหวังว่าจะได้แบ่งปันความรักที่เรามีต่อซูชิกับคุณ!"
    }
};

// Function to change the language
function changeLanguage(language) {
    document.getElementById('heading').textContent = translations[language].heading;
    document.getElementById('paragraph').textContent = translations[language].paragraph;
    document.getElementById('welcom').textContent = translations[language].welcom;
    document.getElementById('introtext').textContent = translations[language].introtext;
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
