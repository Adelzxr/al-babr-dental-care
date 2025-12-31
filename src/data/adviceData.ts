export interface DentalAdvice {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export const dentalAdviceData: DentalAdvice[] = [
  {
    id: "1",
    title: "The Importance of Daily Flossing",
    excerpt: "Discover why flossing is just as important as brushing for maintaining optimal oral health.",
    content: `Flossing is an essential part of your daily oral hygiene routine that many people overlook. While brushing cleans the surfaces of your teeth, flossing reaches the tight spaces between teeth where plaque and food particles accumulate.

Key benefits of daily flossing:
• Removes plaque from areas your toothbrush can't reach
• Prevents gum disease and gingivitis
• Reduces bad breath
• Helps prevent cavities between teeth

For best results, floss at least once a day, preferably before bedtime. Use about 18 inches of floss, winding most of it around your middle fingers. Gently guide the floss between teeth using a rubbing motion.`,
    category: "Prevention",
    date: "2024-12-28",
    readTime: "3 min",
  },
  {
    id: "2",
    title: "Foods That Strengthen Your Teeth",
    excerpt: "Learn about the best foods to include in your diet for stronger, healthier teeth.",
    content: `What you eat significantly impacts your dental health. Including certain foods in your diet can help strengthen your teeth and protect against decay.

Top tooth-friendly foods:
• Dairy products: Rich in calcium and phosphorus, essential for strong teeth
• Leafy greens: High in vitamins and minerals that support gum health
• Crunchy vegetables: Natural tooth cleaners that stimulate saliva production
• Fish and nuts: Provide essential fatty acids and minerals
• Water: Helps wash away food particles and bacteria

Foods to limit:
• Sugary snacks and drinks
• Acidic fruits and beverages
• Sticky foods that cling to teeth

Remember, it's not just what you eat, but how often. Frequent snacking can increase acid production in your mouth.`,
    category: "Nutrition",
    date: "2024-12-25",
    readTime: "4 min",
  },
  {
    id: "3",
    title: "When to Replace Your Toothbrush",
    excerpt: "Find out the signs that indicate it's time for a new toothbrush and why it matters.",
    content: `Using a worn-out toothbrush can compromise your oral hygiene. Here's what you need to know about toothbrush replacement.

Replace your toothbrush every 3-4 months, or sooner if:
• Bristles are frayed or flattened
• You've been sick with a cold or flu
• The brush shows signs of wear

Signs of an effective toothbrush:
• Bristles stand straight and are uniform
• The brush head is the right size for your mouth
• The handle is comfortable to hold

Electric vs. manual: Both are effective when used properly. Electric toothbrushes may be helpful for those with limited mobility or children who need motivation to brush.`,
    category: "Hygiene",
    date: "2024-12-20",
    readTime: "2 min",
  },
  {
    id: "4",
    title: "Understanding Tooth Sensitivity",
    excerpt: "Explore the causes of sensitive teeth and effective treatments to find relief.",
    content: `Tooth sensitivity affects many people and can make eating and drinking uncomfortable. Understanding the causes can help you find the right treatment.

Common causes of sensitivity:
• Worn tooth enamel from aggressive brushing
• Exposed tooth roots due to gum recession
• Cavities or cracked teeth
• Recent dental procedures
• Teeth grinding (bruxism)

Treatment options:
• Use desensitizing toothpaste
• Apply fluoride treatments
• Address underlying issues like grinding
• Consider dental bonding for exposed roots

When to see a dentist:
If sensitivity persists for more than a week, worsens, or is accompanied by pain, schedule an appointment for a professional evaluation.`,
    category: "Treatment",
    date: "2024-12-15",
    readTime: "4 min",
  },
  {
    id: "5",
    title: "The Right Way to Brush Your Teeth",
    excerpt: "Master the proper brushing technique for maximum effectiveness and gum protection.",
    content: `Proper brushing technique is crucial for maintaining good oral health. Many people brush incorrectly, which can lead to ineffective cleaning or even gum damage.

The correct technique:
1. Hold your brush at a 45-degree angle to your gums
2. Use gentle, short strokes (tooth-wide)
3. Brush all surfaces: outer, inner, and chewing surfaces
4. Don't forget to brush your tongue
5. Brush for at least 2 minutes, twice daily

Common mistakes to avoid:
• Brushing too hard
• Using a back-and-forth sawing motion
• Neglecting the gum line
• Rushing through the process

Pro tip: Consider using a timer or an electric toothbrush with a built-in timer to ensure you brush for the full two minutes.`,
    category: "Hygiene",
    date: "2024-12-10",
    readTime: "3 min",
  },
];
