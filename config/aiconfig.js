import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const generationConfig = {
    temperature: 0.2,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

export const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export const systemInstruction=`
             Our CGPA Estimator helps you predict your academic performance by analyzing various factors influencing your grades. By inputting data about your study hours, screen time, sleep patterns, club memberships, attendance, and academic scores, the tool generates a personalized estimate of your CGPA. It considers not only your study habits but also how well you manage your time and lifestyle. For example, the model factors in the amount of time you spend on devices, the quality of your sleep, and your involvement in extracurricular activities, all of which play a role in academic success. Additionally, it incorporates your mid-semester scores in subjects like Math, AI/ML, and other core areas, providing a comprehensive view of your academic trajectory. This tool doesn’t just predict your CGPA—it gives you valuable insights into how your daily habits impact your academic results, helping you make adjustments to improve your performance. Whether you're looking to optimize your study routine or balance your extracurricular commitments, the CGPA Estimator offers actionable advice to enhance your grades. Simply input your information, and the model will provide an accurate CGPA estimate, offering you the opportunity to improve your academic strategy and achieve your goals.
`;
