// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'RoheetBakare', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of  Roheet Bakare',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'roheetbakare',
    
    website: '',
    phone: '510-329-6032',
    email: 'bakareroheet@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1FIZ2tUFTirVCE8KdlbHHub6x6a4jB8F2/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
     'Hadoop',
     'Data Structures and Algorithms',
     'Statistical Analysis System(SAS)', 
     'R Programming', 
     'GitHub', 
     'SQL', 
     'NaturalLanguage Processing (NLP)', 
     'Data Wrangling', 
     'Statistical Modeling', 
     'Spark',
     'Data Cleaning', 
     'Azure', 
     'AWS', 
     'Adobe Creative Cloud',
     'TensorFlow', 
     'Big Data', 
     'Snowflake', 
     'LLM (Large Language Model)', 
     'Generative AI', 
     'MYSQL', 
     'Django', 
     'Kubernetes', 
     'JavaScript',
     'HTML', 
     'CSS', 
     'Bootstrap'
  ],
  experiences: [
    {
      company: 'Coders Data',
      position: 'Data Scientist',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://www.codingal.com/en-US/',
     
    },
    
    {
      company: 'Codingal Technolgies Pvt Ltd',
      position: 'Data Scientist',
      from: 'September 2020',
      to: 'August 2022',
      companyLink: 'https://www.codingal.com/en-US/',
    },

    {
      company: 'Skillovate Learning Pvt Ltd',
      position: 'Data Scientist',
      from: 'October 2018',
      to: 'August 2020',
      companyLink: 'https://www.codingal.com/en-US/',


    },
  ],
  certifications: [
    {
      name: 'AWS Cloud Practioner',
      body: 'This is the basic course for AWS cloud services',
      year: 'January 2024',
      link: 'https://example.com',
    },
    {
      name: 'AWS Machine Learning Ops',
      body: 'This is a specialized course for AWS for machine learning modules',
      year: 'January 2024',
      link: 'https://example.com',
    },
    {
      name: 'Natural Language Processing Specialization',
      body: 'This certification has 6 sub-courses for NLP techniques',
      year: 'Nov 2020',
      link: 'https://example.com',
    },
    {
     name: 'Deep Learning Specialization',
     body: 'This course has 6 sub courses for Deep learning techniques',
     year: 'June 2020',
     link: 'htpps://example.com' ,
    },
  
  ],
  eductions: [
    {
      institution: 'California State University East Bay',
      degree: 'Masters of Science in Statistics (Data Science)',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Pune University',
      degree: 'Bachelor of Engineering in Mechanical Engineering',
      from: '2012',
      to: '2014',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [

      'pastel',
      'business',

    ],



  },

};

export default CONFIG;
