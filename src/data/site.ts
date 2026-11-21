// Your details. Anything left as '' shows up on the site as a marked placeholder.
export const site = {
  name: 'Goodness',
  tagline: 'Data engineer who loves to draw workflows.',
  // Short lines for the Home page intro
  intro: [
    'One thing about me: I am in my era of spotting patterns by trial and error, clocking the pattern, and writing it down.',
  ],
  // Shown in the "Get in touch" box on the About page
  openTo: 'Open to mid-level data engineering roles in the UK, Leeds or remote.',
  // Short bio for the About page. One string per paragraph.
  bio: [
    'I am a Data Engineer at Aiera, a US financial data company, where I build and govern the data infrastructure behind financial intelligence: event-driven pipelines on AWS (Lambda, SQS, Terraform), data quality checks, and a catalog in OpenMetadata.',
    'I got here from a customer-service desk at one of Nigeria\'s top banks, through Verification Analyst and Team Lead roles at Aiera, and an MSc in Data Science and AI at Leeds Trinity University (Distinction). That path taught me to trace every data problem back to the person it affects.',
    'The thread through all of it: the best systems, pipelines or classrooms, are designed for the people who were never meant to fit the default mold.',
  ],
  // About page "Outside work" section. One line each.
  // A line can also be { text: '...', link: 'https://...', linkText: '...' } to add a link under it.
  outsideWork: [
    'Wrote DO IT MATHEMATICS, a maths book for children aged 7 to 10.',
    'London Chapter Lead for Teens in AI, where I have run hackathons and mentored young technologists.',
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
  },
  linkedin: 'https://www.linkedin.com/in/goodnessazike/',
  email: 'goodnessazike@gmail.com',
  medium: '', // TODO: your Medium profile link
  github: '', // TODO: your GitHub profile link
  // Your CV lives at public/cv.pdf. Replace that file with your real CV.
  cv: '/cv.pdf',

  // Seasons: a title for the Episodes page, and how many episodes the season has.
  // When the last episode of a season is out, the clock moves on to the next season's Episode 1.
  // To start Season 2, add e.g.  2: { title: 'Understanding Lambda' },  (episodes is optional)
  seasons: {
    1: { title: 'Understanding S3', episodes: 6 },
  } as Record<number, { title: string; episodes?: number }>,

  // The Home page clock counts down to your next episode: every Monday at 9am UK time.
  // weekday: 0 = Sunday, 1 = Monday ... 6 = Saturday. hour: 0-23 in the time zone below.
  nextEpisode: { weekday: 1, hour: 9, timeZone: 'Europe/London' },
};
