// Translations object
const translations = {
    en: {
        welcom: "Welcome to all sushi lovers.",
        introtext: "For over 10 years, <br> our family has proudly served handcrafted sushi at the local market. <br><br> Each piece is made with the freshest ingredients <br>and a passion for authentic flavors. <br><br> From classic favorites to innovative creations,<br> our menu offers something for everyone. <br><br> As a family-run business, we pour our heart and soul into every roll,<br> ensuring you get the best sushi experience. <br><br> Visit us at the market and taste the difference that family dedication makes. <br> We look forward to sharing our love for sushi with you!"
    },

    th: {
        welcom: "ยินดีต้อนรับคนรักซูชิทุกคน",
        introtext: "กว่า 10 ปีที่ครอบครัวของเราได้ภูมิใจนำเสนอซูชิที่ทำด้วยมือที่ตลาดท้องถิ่น<br>ทุกชิ้นทำจากวัตถุดิบที่สดใหม่ที่สุดและด้วยความหลงใหลในรสชาติที่แท้จริง<br>จากเมนูคลาสสิกยอดนิยมถึงการสร้างสรรค์ใหม่ ๆ <br>เมนูของเรามีบางสิ่งสำหรับทุกคนในฐานะธุรกิจที่ดำเนินงานโดยครอบครัว <br>เราใส่ใจและตั้งใจทำทุกม้วน <br>เพื่อให้คุณได้รับประสบการณ์ซูชิที่ดีที่สุดมาเยี่ยมชมเราที่ตลาดและสัมผัสถึง<br>ความแตกต่างที่มาจากการใส่ใจของครอบครัวเรา<br>หวังว่าจะได้แบ่งปันความรักที่เรามีต่อซูชิกับคุณ!"
    }
};

// Function to change the language
function changeLanguage(language) {
    document.getElementById('welcom').innerHTML = translations[language].welcom;
    document.getElementById('introtext').innerHTML = translations[language].introtext;
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