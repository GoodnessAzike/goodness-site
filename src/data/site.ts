// Your details. Anything left as '' shows up on the site as a marked placeholder.
export const site = {
  name: 'Goodness',
  tagline: 'Data engineer who loves to draw workflows.',
  // Short lines for the Home page intro
  intro: [
    'One thing about me: I am in my era of spotting patterns by trial and error, clocking the pattern, and writing it down.',
  ],
  // "What I am doing now" line in the "Say hello" box on the About page.
  // Shows I am active without asking for anything. Update it each season.
  currently: '',
  // Short bio for the About page. One string per paragraph.
  bio: [
    'I am a Data Engineer at Aiera, a US financial data company, where I build and govern the data infrastructure behind financial intelligence: event-driven pipelines on AWS (Lambda, SQS, Terraform), data quality checks, and a catalog in OpenMetadata.',
    'I got here from a customer-service desk at one of Nigeria\'s top banks, through Verification Analyst and Team Lead roles at Aiera, and an MSc in Data Science and AI at Leeds Trinity University (Distinction). That path taught me to trace every data problem back to the person it affects.',
    'The thread through all of it: the best systems, pipelines or classrooms, are designed for the people who were never meant to fit the default mold.',
  ],
  // About page opening film, thriller style: typewriter line, ticking clock, split screens, title slam.
  // All wording is a draft for me to edit (draft: true shows a badge while working locally).
  storyReel: {
    draft: true,
    opener: 'The following events are real.',
    photo: { src: '/talk/baby.jpg', alt: 'Me as a little girl', caption: 'It started here.' },
    quad: [
      { title: 'Maths teacher', sub: 'Wrote a book' },
      { title: 'Food Technology', sub: 'HND, Distinction' },
      { title: 'Supervisor', sub: "Shandee's Fastfood" },
      { title: 'Outbound telesales', sub: 'IrokoTV' },
    ],
    cuts: ['A bank desk.', 'Verification Analyst.', 'Team Lead.'],
    split: [
      { src: '/talk/grad.jpg', alt: 'Me giving a speech at my Leeds Trinity University graduation', label: 'MSc Data Science and AI. Distinction.' },
      { src: '/talk/poster.jpg', alt: 'Me next to my poster, Non-Linear Learning Journeys in Computing Education', label: 'Presented at BCSWomen Lovelace.' },
      { src: '/talk/teens.jpg', alt: 'Me presenting the Sustainable Development Goals at Teens in AI', label: 'Teens in AI, London Chapter Lead.' },
    ],
    final: 'Data Engineer.',
  },
  // About page life-paths drawing: paths I've crossed, shown as glowing leaves (in time order, no years).
  // Tap a leaf to show its note for 5 seconds. draft: true = wording still to edit (badge shows locally).
  crossed: [
    { title: 'Maths teacher', sub: 'between schools', line: 'Taught maths and wrote my book, DO IT YOURSELF MATHEMATICS.', link: '/books/do-it-yourself-mathematics.pdf', linkText: 'Read the book', draft: true },
    { title: 'Food Technology', sub: 'HND, Distinction', line: 'Learned that quality is checked, not assumed.', draft: true },
    { title: 'Supervisor', sub: "Shandee's Fastfood", line: 'Led a team through busy shifts and learned to stay calm under pressure.', draft: true },
    { title: 'Outbound telesales', sub: 'IrokoTV', line: 'Called people every day and learned to listen before I speak.', draft: true },
  ] as { title: string; sub: string; line: string; link?: string; linkText?: string; draft?: boolean }[],
  // Home page "How I think" strip.
  howIThink: {
    line: 'I look at what produces a problem, not only what is in front of me.',
    // A small example under the line. draft: true shows "DRAFT, edit me" while working locally.
    example: {
      steps: ['Add a lane to fix traffic', 'It attracts more drivers', 'Traffic returns'],
      draft: true,
    },
  },
  // About page "Outside work" section. One line each.
  // A line can also be { text: '...', link: 'https://...', linkText: '...' } to add a link under it.
  outsideWork: [
    {
      text: 'Wrote DO IT YOURSELF MATHEMATICS, a maths series for primary school children (Basic Four, and Basic Five and Six).',
      link: '/books/do-it-yourself-mathematics.pdf',
      linkText: 'Read Basic Five and Six',
    },
    {
      text: 'London Chapter Lead for Teens in AI, where I have run hackathons and mentored young technologists.',
      link: 'https://www.linkedin.com/posts/goodnessazike_co-healthyhabits-pathpilot-ugcPost-7436434874791665664-iRhr/',
      linkText: 'See the post',
    },
    {
      text: 'Active in Women in Data, and spoke in the Women Shaping Tech series.',
      link: 'https://www.linkedin.com/posts/goodnessazike_join-in-httpslnkdinehkg4-vx-share-7501586771512586241-KDEC/',
      linkText: 'See the post',
    },
    {
      text: 'Presented at the BCSWomen Lovelace Colloquium on non-linear learning journeys in computing.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7449502577794170880/',
      linkText: 'See the post',
    },
  ],
  // Shown under the Outside work list
  aim: 'My larger aim is an AI learning tool with a human in the loop, built for neurodivergent and non-linear learners.',
  // About page talk: your voice with photos that change as you speak.
  // audio: put the file in public/talk/ and write its path, e.g. '/talk/about-me.m4a'
  // slides: one per photo, in order. `at` is the second the photo appears.
  // transcript: what you say, written out, for people who cannot listen.
  talk: {
    audio: '', // TODO: your recording
    slides: [
      // { src: '/talk/1-me.jpg', alt: 'Me at my desk', at: 0 },
      // { src: '/talk/2-diagram.jpg', alt: 'One of my pipeline drawings', at: 12 },
    ] as { src: string; alt: string; at: number }[],
    transcript: '', // TODO: what you say in the recording
    // Subtitles: one line per sentence, with the second it starts
    captions: [
      // { at: 0, text: "Hi, I'm Goodness." },
    ] as { at: number; text: string }[],
  },
  linkedin: 'https://www.linkedin.com/in/goodnessazike/',
  email: 'goodnessazike@gmail.com',
  medium: '', // TODO: your Medium profile link
  github: '', // TODO: your GitHub profile link
  // Your CV lives at public/cv.pdf. Replace that file with your real CV,
  // then set cvReady to true. Until then no CV link shows anywhere.
  cv: '/cv.pdf',
  cvReady: false,

  // Series 2 trailer, on the Series page (Series 2 "coming soon" card). Every clue is a line
  // from Series 1 where Lambda turned up. Wording is a draft for me to edit.
  trailer: {
    draft: true,
    series: 2,
    opener: 'Series 1 was about the files.',
    turn: 'But something kept moving them.',
    clues: [
      { text: 'A Lambda does it here: a nightly API call is small and finishes in seconds.', from: 'Series 1, Episode 1' },
      { text: 'Lambda carries an execution role.', from: 'Series 1, Episode 2' },
      { text: 'A Lambda with no VPC.', from: 'Series 1, Episode 3' },
      { text: 'The pipeline is a Lambda on EventBridge Scheduler.', from: 'Series 1, Episode 4' },
      { text: '26 October, 22:00, the Lambda writes raw/payments/2026-10-26.json.', from: 'Series 1, Episode 5' },
      { text: 'Every hour, a schedule wakes up the two Lambdas.', from: 'Series 1, Episode 6' },
    ],
    every: 'It was in every episode.',
    // "which lambda?" questions, shown over a giant λ
    which: ['The Greek letter?', 'lambda x: x + 1, in Python?', 'The λ from maths class?'],
    knowIt: 'Is this the lambda you know?',
    // what to expect
    expect: ['Code with no server to look after.', 'It wakes up when something calls it.', 'And it has 15 minutes to finish.'],
    title: 'Understanding Lambda',
    date: 'Episode 1: Monday 30 November, 9am.',
  },

  // Seasons: a title for the Episodes page, and how many episodes the season has.
  // When the last episode of a season is out, the clock moves on to the next season's Episode 1.
  // To start Season 2, add e.g.  2: { title: 'Understanding Lambda' },  (episodes is optional)
  // A season with no episode files yet shows as "Coming soon" in the Episodes dropdown.
  seasons: {
    1: { title: 'Understanding S3', episodes: 6 },
    2: { title: 'Understanding Lambda' },
  } as Record<number, { title: string; episodes?: number }>,

  // The Home page clock counts down to your next episode: every Monday at 9am UK time.
  // weekday: 0 = Sunday, 1 = Monday ... 6 = Saturday. hour: 0-23 in the time zone below.
  // startsOn: the first day the clock may count to (Season 2 starts Monday 30 Nov)
  nextEpisode: { weekday: 1, hour: 9, timeZone: 'Europe/London', startsOn: '2026-11-30' } as { weekday: number; hour: number; timeZone: string; startsOn?: string },
};
