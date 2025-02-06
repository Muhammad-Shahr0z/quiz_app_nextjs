// data/hardQuestions.ts

import { Question } from "./easy";

export const hardQuestions: Question[] = [
  {
    question: 'How does Next.js implement Incremental Static Regeneration?',
    options: ['By rebuilding the entire site', 'By updating static pages in the background', 'By using SSR only', 'By using CSR'],
    correctAnswer: 1,
  },
  {
    question: 'Which file can be used to customize the HTML document in Next.js?',
    options: ['_document.tsx', '_app.tsx', 'document.tsx', 'index.tsx'],
    correctAnswer: 0,
  },
  {
    question: 'What is the purpose of getInitialProps in Next.js?',
    options: ['To fetch data before rendering', 'To handle routing', 'To manage state', 'To style components'],
    correctAnswer: 0,
  },
  {
    question: 'How can you implement dynamic imports in Next.js?',
    options: ['Using next/dynamic', 'Using React.lazy', 'Using import()', 'Both next/dynamic & import()'],
    correctAnswer: 3,
  },
  {
    question: 'Which of these is true about getStaticProps?',
    options: ['Runs at build time', 'Runs on every request', 'Runs on the client', 'None of the above'],
    correctAnswer: 0,
  },
  {
    question: 'What is the role of getServerSideProps?',
    options: ['Pre-renders a page on each request', 'Generates static pages', 'Fetches data on the client', 'None'],
    correctAnswer: 0,
  },
  {
    question: 'How do you enable TypeScript in a Next.js project?',
    options: ['Rename files to .tsx', 'Create a tsconfig.json file', 'Install TypeScript', 'All of the above'],
    correctAnswer: 3,
  },
  {
    question: 'Which method supports fallback rendering in dynamic routes?',
    options: ['getStaticPaths', 'getServerSideProps', 'getInitialProps', 'getStaticProps'],
    correctAnswer: 0,
  },
  {
    question: 'What does “fallback: blocking” mean in getStaticPaths?',
    options: ['Page shows a loader', 'Page waits for the generated HTML', 'Page returns 404', 'None'],
    correctAnswer: 1,
  },
  {
    question: 'How can you optimize images in Next.js?',
    options: ['Using next/image', 'Using <img> tag', 'Manually optimizing', 'Using CSS'],
    correctAnswer: 0,
  },
  {
    question: 'Which of the following is true about API routes in Next.js?',
    options: ['They run on the server', 'They run on the client', 'They are static', 'They are pre-rendered'],
    correctAnswer: 0,
  },
  {
    question: 'What is the purpose of the _app.tsx file?',
    options: ['Global styles and state', 'Routing', 'Fetching data', 'Server configuration'],
    correctAnswer: 0,
  },
  {
    question: 'Which command is used to start a production build of Next.js?',
    options: ['next build', 'npm run build', 'npm build', 'next start'],
    correctAnswer: 0,
  },
  {
    question: 'How do you handle custom 404 pages in Next.js?',
    options: ['Create pages/404.tsx', 'Create pages/notfound.tsx', 'Use _error.tsx', 'None'],
    correctAnswer: 0,
  },
  {
    question: 'Which rendering method is best for frequently changing data?',
    options: ['SSR', 'SSG', 'ISR', 'CSR'],
    correctAnswer: 0,
  },
  {
    question: 'What is “middleware” in Next.js?',
    options: ['A function that runs before a request is completed', 'A CSS file', 'A custom hook', 'None'],
    correctAnswer: 0,
  },
  {
    question: 'How do you add custom headers in Next.js?',
    options: ['Using next.config.js', 'Using _document.tsx', 'Using _app.tsx', 'In the API routes'],
    correctAnswer: 0,
  },
  {
    question: 'What is the benefit of SSR in Next.js?',
    options: ['Better SEO', 'Faster initial load', 'Dynamic content', 'All of the above'],
    correctAnswer: 3,
  },
  {
    question: 'Which lifecycle method is NOT used in Next.js data fetching?',
    options: ['componentDidMount', 'getStaticProps', 'getServerSideProps', 'getInitialProps'],
    correctAnswer: 0,
  },
  {
    question: 'What is the default behavior when a page is not found?',
    options: ['Custom 404 page', 'Server error', 'Blank page', 'Redirect to home'],
    correctAnswer: 0,
  },
  {
    question: 'How do you pre-render a page that uses dynamic routes?',
    options: ['Using getStaticPaths', 'Using getServerSideProps', 'Using useEffect', 'None'],
    correctAnswer: 0,
  },
  {
    question: 'Which statement about Next.js is false?',
    options: [
      'It supports SSR and SSG', 
      'It requires a custom server for SSR', 
      'It uses file-based routing', 
      'It can deploy on Vercel'
    ],
    correctAnswer: 1,
  },
  {
    question: 'How can you measure performance in a Next.js app?',
    options: ['Using built-in analytics', 'Using Lighthouse', 'Using webpack bundle analyzer', 'All of the above'],
    correctAnswer: 3,
  },
  {
    question: 'Which of these is a challenge with SSR?',
    options: ['Handling client-side state', 'SEO issues', 'Slow network', 'None'],
    correctAnswer: 0,
  },
  {
    question: 'How do you update a static page after deployment?',
    options: ['Rebuild the app', 'Use ISR', 'Update on the client', 'Manual refresh'],
    correctAnswer: 1,
  },
  {
    question: 'Which environment variable file is used locally in Next.js?',
    options: ['.env.local', '.env.production', '.env.development', '.env'],
    correctAnswer: 0,
  },
  {
    question: 'What tool does Next.js use for fast refresh during development?',
    options: ['React Fast Refresh', 'Hot Module Replacement', 'Live Reload', 'None'],
    correctAnswer: 0,
  },
  {
    question: 'How does Next.js handle bundling?',
    options: ['Using Webpack', 'Using Rollup', 'Using Parcel', 'Using Gulp'],
    correctAnswer: 0,
  },
];
