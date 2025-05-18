export type QuotesType = {
  quote: string
  author: string
}

export const twitterIntent = (quote: string) => {
  return `twitter.com/intent/post?text=${quote}`
}

export const quotes: QuotesType[] = [
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote: 'In the middle of every difficulty lies opportunity.',
    author: 'Albert Einstein',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  { quote: 'The best revenge is massive success.', author: 'Frank Sinatra' },
  {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    quote:
      'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    author: 'Zig Ziglar',
  },
  {
    quote: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: 'Thomas A. Edison',
  },
  {
    quote: 'Everything you’ve ever wanted is on the other side of fear.',
    author: 'George Addair',
  },
  {
    quote:
      'Hardships often prepare ordinary people for an extraordinary destiny.',
    author: 'C.S. Lewis',
  },
  { quote: 'Dream big and dare to fail.', author: 'Norman Vaughan' },
  {
    quote: 'Act as if what you do makes a difference. It does.',
    author: 'William James',
  },
  {
    quote: 'Quality means doing it right when no one is looking.',
    author: 'Henry Ford',
  },
  {
    quote:
      'The only limit to our realization of tomorrow is our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: 'Sam Levenson',
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: 'Chris Grosser',
  },
  {
    quote:
      'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: 'Wayne Gretzky',
  },
]
