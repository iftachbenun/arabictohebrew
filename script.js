// מילון להמרת אותיות מערבית לעברית
const arabicToHebrew = {
    'ء': 'א', 'ب': 'בּ', 'ت': 'ת', 'ث': 'ת\'', 'ج': 'ג\'', 'ح': 'ח',
    'خ': 'ח\'', 'د': 'ד', 'ذ': 'ד\'', 'ر': 'ר', 'ز': 'ז', 'س': 'ס',
    'ش': 'ש', 'ص': 'צ', 'ض': 'צ\'', 'ط': 'ט', 'ظ': 'ט\'', 'ع': 'ע',
    'غ': 'ע\'', 'ف': 'פ', 'ق': 'ק', 'ك': 'כּ', 'ل': 'ל', 'م': 'מ',
    'ن': 'נ', 'ه': 'ה', 'و': 'ו', 'ي': 'י', 'ى': 'א', 'آ': 'אַא',
    'ة': 'ה', 'إ': 'א', 'أ': 'א', 'ؤ': 'ו', 'ئ': 'י'
};

// מילון לתנועות קצרות וארוכות
const arabicVowelsToHebrew = {
    'َ': 'ַ', 'ِ': 'ִ', 'ُ': 'ֻ', 'ْ': '', 'ّ': '', 'ً': 'ً', 'ٌ': 'ٌ', 'ٍ': 'ٍ',
    'ا': 'א', 'و': 'אוּ', 'ي': 'אִי', 'َا': 'אַא', 'ِي': 'אִי', 'ُو': 'אוּ'
};

function arabicToHebrewTransliteration(text) {
    let hebrewText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (arabicToHebrew[char]) {
            hebrewText += arabicToHebrew[char];
        } else if (arabicVowelsToHebrew[char]) {
            hebrewText += arabicVowelsToHebrew[char];
        } else {
            hebrewText += char;
        }
    }
    return hebrewText;
}

function convertText() {
    let arabicText = document.getElementById('arabicText').value;
    let hebrewText = arabicToHebrewTransliteration(arabicText);
    document.getElementById('hebrewText').value = hebrewText;
}
