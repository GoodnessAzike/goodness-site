// Your details. Anything left as '' shows up on the site as a marked placeholder.
export const site = {
  name: 'Goodness',
  tagline: 'Data engineer, growing in public.',
  // Two short lines for the Home page intro
  intro: [
    'One thing about me: I am in my era of spotting patterns by trial and error, clocking the pattern, and writing it down.',
    'Open to mid-level data engineering roles in the UK, Leeds or remote.',
  ],
  // Short bio for the About page. One string per paragraph.
  bio: [
    'I am a Data Engineer at Aiera, a US financial data company, where I build and govern the data infrastructure behind financial intelligence: event-driven pipelines on AWS (Lambda, SQS, Terraform), data quality checks, and a catalog in OpenMetadata. I got here from a customer-service desk at one of Nigeria\'s top banks, through Verification Analyst and Team Lead roles at Aiera, and an MSc in Data Science and AI at Leeds Trinity University (Distinction). That path taught me to trace every data problem back to the person it affects.',
    'On the side I build and write about pipelines one box at a time: an Airflow and dlt pipeline for SEC filings, a Docker crypto pipeline, and a Medium series on how the pieces fit.',
    'I wrote DO IT MATHEMATICS, a maths book for children aged 7 to 10, and I am London Chapter Lead for Teens in AI, where I have run hackathons and mentored young technologists. I am active in Women in Data and have presented at the BCSWomen Lovelace Colloquium on non-linear learning journeys in computing. My larger aim is an AI learning tool with a human in the loop, built for neurodivergent and non-linear learners. The thread through all of it: the best systems, pipelines or classrooms, are designed for the people who were never meant to fit the default mold.',
    'Open to mid-level data engineering roles in the UK, Leeds or remote.',
  ],
  linkedin: 'https://www.linkedin.com/in/goodnessazike/',
  email: 'goodnessazike@gmail.com',
  medium: '', // TODO: your Medium profile link
  github: '', // TODO: your GitHub profile link
  // Your CV lives at public/cv.pdf. Replace that file with your real CV.
  cv: '/cv.pdf',

  // The Home page clock counts down to your next episode.
  // TODO: set the weekday (0 = Sunday, 1 = Monday ... 6 = Saturday)
  // and hour (0-23, the visitor's local time) your new episodes go out.
  nextEpisode: { weekday: 1, hour: 9 },
};
