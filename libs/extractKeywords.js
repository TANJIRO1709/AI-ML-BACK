import nlp from "compromise";
const stopWords = new Set([
  "company_phone",
"laptop",
"most_used_app",
 "screen_time",
 "club_memberships",
 "sleep_hours", 
"study_time",
 "meals_out",
 "attendance_policy",
 "study_hours_weekly",
 "credits",
 "future_plans",
 "hs_subject",
 "midsem_hs_score",
 "midsem_maths_score",
 "midsem_ai_ml_score",
 "cgpa",
 "Samsung", "Vivo", "Oppo", "Poco", "Motorola", "OnePlus", "IQOO", "Realme", "Nothing", "Xiaomi (mi)", "Apple (iPhone)",
  "Asus (ROG included)", "Dell", "HP", "Lenovo", "Apple", "Acer",
  "WhatsApp", "YouTube", "Instagram", "Google Chrome", "Snapchat", "Brave",
   "Ethical Leadership and Literature",
    "Principles of Economics",
    "Introduction to Psychology",
    "Language Learning through Science Fiction",
    "Introduction to Society and Culture",
  "<10 hours", "10-20 hours", "20-30 hours", "30-40 hours", "40-50 hours",
]);

export default function extractKeywords(sentence) {
    const doc = nlp(sentence);
    const terms = doc.terms().out("array");
    const keywords = terms.filter((word) => !stopWords.has(word.toLowerCase()));
    return keywords;
}