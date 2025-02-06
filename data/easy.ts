// data/easyQuestions.ts
export type Question = {
    question: string;
    options: string[];
    correctAnswer: number;
  };
  
  export const easyQuestions: Question[] = [
    {
      question: 'What is Next.js?',
      options: ['A JavaScript framework', 'A CSS framework', 'A database', 'A text editor'],
      correctAnswer: 0,
    },
    {
      question: 'Which folder contains your pages in Next.js?',
      options: ['/src', '/pages', '/components', '/public'],
      correctAnswer: 1,
    },
    {
      question: 'What is the default file for a Next.js page?',
      options: ['home.tsx', 'index.tsx', 'main.tsx', 'app.tsx'],
      correctAnswer: 1,
    },
    {
      question: 'Which method is used for Static Site Generation?',
      options: ['getServerSideProps', 'getStaticProps', 'getInitialProps', 'useEffect'],
      correctAnswer: 1,
    },
    {
      question: 'Next.js uses which type of routing?',
      options: ['File-based routing', 'Configuration-based routing', 'Custom routing', 'Hash-based routing'],
      correctAnswer: 0,
    },
    {
      question: 'Which of the following is a data fetching method in Next.js?',
      options: ['getDataProps', 'getStaticProps', 'fetchProps', 'getClientSideProps'],
      correctAnswer: 1,
    },
    {
      question: 'What file is used to customize the app in Next.js?',
      options: ['_app.tsx', '_document.tsx', 'app.tsx', 'document.tsx'],
      correctAnswer: 0,
    },
    {
      question: 'What command starts the Next.js development server?',
      options: ['npm run dev', 'npm start', 'npm run serve', 'npm dev'],
      correctAnswer: 0,
    },
    {
      question: 'Where do you put static assets in Next.js?',
      options: ['/assets', '/static', '/public', '/files'],
      correctAnswer: 2,
    },
    {
      question: 'Which feature improves performance by code splitting in Next.js?',
      options: ['Automatic code splitting', 'Lazy loading', 'Preloading', 'SSR'],
      correctAnswer: 0,
    },
    {
      question: 'What is the default port for Next.js?',
      options: ['3000', '8080', '5000', '4000'],
      correctAnswer: 0,
    },
    {
      question: 'Which of the following is NOT a Next.js data fetching method?',
      options: ['getStaticProps', 'getServerSideProps', 'getDataProps', 'getInitialProps'],
      correctAnswer: 2,
    },
    {
      question: 'How do you create dynamic routes in Next.js?',
      options: ['Using square brackets in filenames', 'Using curly braces in filenames', 'Using parentheses', 'Using dash separators'],
      correctAnswer: 0,
    },
    {
      question: 'What is ISR in Next.js?',
      options: ['Incremental Static Regeneration', 'Immediate Server Rendering', 'Instant Static Routing', 'Integrated Server Response'],
      correctAnswer: 0,
    },
    {
      question: 'Which file is used for custom error pages?',
      options: ['404.tsx', '_error.tsx', 'error.tsx', 'notfound.tsx'],
      correctAnswer: 1,
    },
    {
      question: 'What is the use of the Link component in Next.js?',
      options: ['For internal navigation', 'For external navigation', 'For styling', 'For data fetching'],
      correctAnswer: 0,
    },
    {
      question: 'Which Next.js feature supports API routes?',
      options: ['pages/api', 'pages/routes', 'api/pages', 'server/api'],
      correctAnswer: 0,
    },
    {
      question: 'Which command builds a Next.js project for production?',
      options: ['npm run build', 'npm build', 'next build', 'npm run prod'],
      correctAnswer: 2,
    },
    {
      question: 'What does CSR stand for?',
      options: ['Client-Side Rendering', 'Code Splitting Rendering', 'Custom Server Rendering', 'Centralized Server Routing'],
      correctAnswer: 0,
    },
    {
      question: 'Next.js is built on top of which React feature?',
      options: ['Hooks', 'Context API', 'Components', 'All of the above'],
      correctAnswer: 3,
    },
    {
      question: 'Which file is automatically generated to improve performance in Next.js?',
      options: ['.next', '.cache', '.build', '.public'],
      correctAnswer: 0,
    },
    {
      question: 'What is the purpose of getServerSideProps?',
      options: ['Fetching data at build time', 'Fetching data on every request', 'Fetching client-side data', 'None'],
      correctAnswer: 1,
    },
    {
      question: 'What language is used in Next.js?',
      options: ['JavaScript', 'TypeScript', 'Both JavaScript & TypeScript', 'Python'],
      correctAnswer: 2,
    },
    {
      question: 'Which of these is a benefit of using Next.js?',
      options: ['SEO', 'Performance', 'Developer Experience', 'All of the above'],
      correctAnswer: 3,
    },
    {
      question: 'How do you deploy a Next.js app?',
      options: ['Vercel', 'Netlify', 'Heroku', 'All of the above'],
      correctAnswer: 3,
    },
    {
      question: 'Which component is used for image optimization in Next.js?',
      options: ['<img>', '<Image>', '<Picture>', '<OptimizedImage>'],
      correctAnswer: 1,
    },
    {
      question: 'Next.js supports which rendering strategies?',
      options: ['SSR', 'SSG', 'ISR', 'All of the above'],
      correctAnswer: 3,
    },
    {
      question: 'What is the benefit of file-based routing?',
      options: ['Simplifies route creation', 'Improves SEO', 'Enhances performance', 'None of the above'],
      correctAnswer: 0,
    },
    {
      question: 'How do you add custom CSS in Next.js?',
      options: ['Import CSS file in _app.tsx', 'Link CSS in head', 'Use inline styles', 'All of the above'],
      correctAnswer: 0,
    },
  ];
  