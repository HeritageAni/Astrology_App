console.log("Astrology App")

// Array 1: Zodiac Signs (12 items)
const zodiacSign = [
  "Capricorn", "Aquarius", "Pisces", "Aries", 
  "Taurus", "Gemini", "Cancer", "Leo", 
  "Virgo", "Libra", "Scorpio", "Sagittarius"
];

// Array 2: General Compliments (31 items - matches maximum days in a month)
const compliments = [
  "You have a great sense of humor.",
  "You shine light upon any room you walk into.",
  "Your intuition is almost always spot-on.",
  "You have a natural ability to make people feel comfortable.",
  "Your creative mind is one of your strongest traits.",
  "You possess a wonderfully infectious laugh.",
  "You are far stronger than you give yourself credit for.",
  "People trust you because of your genuine honesty.",
  "You have an incredible eye for detail.",
  "Your kindness leaves a lasting impact on everyone you meet.",
  "You are a fantastic listener when people need you most.",
  "Your resilience in tough situations is truly inspiring.",
  "You bring out the best qualities in the people around you.",
  "You have a calm presence that soothes chaotic situations.",
  "Your passion for what you love is deeply admirable.",
  "You have a unique gift for seeing the good in others.",
  "Your quick wit always keeps conversations lively.",
  "You possess a fresh perspective that opens minds.",
  "Your generosity with your time and energy knows no bounds.",
  "You handle difficult moments with remarkable elegance.",
  "Your positivity is a genuine breath of fresh air.",
  "You have an adventurous spirit that inspires curiosity.",
  "People feel safe sharing their deepest thoughts with you.",
  "Your work ethic and personal dedication are top-tier.",
  "You carry a warm and welcoming energy wherever you go.",
  "Your strategic thinking helps you solve complex problems.",
  "You are deeply empathetic towards the feelings of others.",
  "You have a natural talent for bringing people together.",
  "Your inner strength shines brighter than any obstacle.",
  "You are genuinely one of a kind.",
  "Your presence makes the world a noticeably warmer place."
];

// Array 3: Validation / "Victim Card" Compliments (20 items)
const victimCardCompliments = [
  "You always do good for others, but no one appreciates it.",
  "You give so much love, yet you rarely receive the same energy back.",
  "You are always there for everyone, but feel lonely when you need help.",
  "People often take your kindness for granted until you step away.",
  "You forgive people easily, even when they rarely acknowledge their mistakes.",
  "You carry everyone else's secrets and problems, but no one asks how you are.",
  "You work silently behind the scenes while others take the credit.",
  "Your soft heart gets hurt easily because you trust too quickly.",
  "You try to keep the peace, but somehow end up looking like the bad guy.",
  "You prioritize everyone else's happiness over your own peace of mind.",
  "People only reach out to you when they need something from you.",
  "You hide your pain so well that people think you never suffer.",
  "You give second chances to people who haven't even earned the first.",
  "You remember every small detail about others, but they forget yours.",
  "You heal everyone else's wounds while suffering in silence.",
  "Your loyalty is unmatched, yet people replace you so easily.",
  "You constantly compromise your comfort to make others feel secure.",
  "People misunderstand your true intentions no matter how pure they are.",
  "You fight battles for others that they wouldn't fight for you.",
  "You are always expected to be strong, leaving no room for your own tears."
];

// Array 4: Remedial Advice / Recommendations (20 items)
const recommendation = [
  "You should help the poor or donate to a cause close to your heart.",
  "Feed stray animals in the morning to bring positive energy into your day.",
  "Spend at least 10 minutes in silent meditation every evening.",
  "Offer water to the rising sun to balance your emotional focus.",
  "Avoid making major financial commitments or promises on Tuesdays.",
  "Keep a small silver item in your wallet for steady luck.",
  "Wear shades of blue or yellow on high-stakes days to boost confidence.",
  "Water green plants daily to clear surrounding negative energy.",
  "Practice saying 'no' to demands that drain your mental battery.",
  "Light an aromatic candle or incense before beginning your work.",
  "Keep your sleeping area clutter-free to encourage peaceful rest.",
  "Avoid sharing your long-term goals until they are fully realized.",
  "Spend time near natural water bodies to recharge your intuition.",
  "Express gratitude for three small things before going to sleep.",
  "Avoid wearing dark black clothing during important spiritual events.",
  "Donate books or educational supplies to children in need.",
  "Keep a journal to dump your heavy thoughts at the end of the day.",
  "Take short walks in nature without your phone to center yourself.",
  "Light a lamp with mustard oil on Saturday evenings for peace.",
  "Feed birds on your terrace or windowsill to attract abundance."
];

// Array 5: Future Predictions (20 items)
const predictions = [
  "You will have a very loving, supportive, and understanding life partner.",
  "A major career breakthrough will present itself within the next six months.",
  "An unexpected financial gain will arrive through an old venture or gift.",
  "You will travel to an exotic overseas location sooner than you expect.",
  "A long-standing personal issue will resolve itself smoothly very soon.",
  "You will build a home filled with warmth, laughter, and lasting peace.",
  "An old friend will reconnect with you and bring exciting news.",
  "You will achieve significant recognition in your field of work this year.",
  "Your health and energy levels will experience a powerful positive boost.",
  "A sudden opportunity will allow you to turn a creative passion into profit.",
  "You will meet a mentor who will completely change your perspective on success.",
  "A dispute or misunderstanding in your personal life will end in harmony.",
  "Your intuition will save you from a risky financial decision in the near future.",
  "You will attract new, high-quality friendships that stand the test of time.",
  "A property or asset decision will bring you immense long-term stability.",
  "Your unique talents will be publicly celebrated by people you admire.",
  "You will find a great balance between your work commitments and personal joy.",
  "A major wish you have held onto for years is about to manifest.",
  "You will experience a deeply spiritual moment that brings mental clarity.",
  "You will lead an impactful project that inspires many people around you."
];


// Select the form and button elements
const form = document.getElementById('astrology-form');
const button = form.querySelector('button');

button.addEventListener('click', () => {
    // Triggers HTML5 form validation (required, min, max) before running logic
    if (!form.reportValidity()) {
        return;
    }

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);

    // Using array.length dynamically prevents out-of-bounds undefined errors
    const sign = zodiacSign[(month - 1) % zodiacSign.length];
    const comp = compliments[(day - 1) % compliments.length];
    const victimComp = victimCardCompliments[year % victimCardCompliments.length];
    const rec = recommendation[(day * month) % recommendation.length];
    const pred = predictions[(name.length * surname.length) % predictions.length];

    const text = `Hi ${name} ${surname}, Your Zodiac sign is: ${sign}.\n${comp}\n${victimComp}\n${rec}\n${pred}`;

    document.getElementById('resultBox').textContent = text;
    form.reset();
});