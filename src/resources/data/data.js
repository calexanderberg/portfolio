import baby from '../images/baby.png';
import Chad_bot from '../images/Chad_bot.jpg';
import codecademy_picture from '../images/codecademy_logo.png';
import helsingborg from '../images/helsingborg.png';
import ISH from '../images/ISH.png';
import kth_picture from '../images/kth_Building.jpg';
import london from '../images/london.png';
import naples from '../images/marcoIsland.png';
import old_portfolio from '../images/old_portfolio.png';
import pong_game from '../images/pong_game.png';
import redo_picture from '../images/redo_logo.jpg';
import stockholm from '../images/stockholm.png';
                             
export const work_Types = {
  redo: {
    type: `web`,
    picture: redo_picture,
    alt: `RE-DO consulting logo`,
    title: `Founder`,
    source: `RE-DO consulting`,
    intro: `A consulting firm I started in 2020.`,
    date: `Aug 2020 -`,
    path: `https://www.re-do.nu`,
    target: `_blank`
  },
  kth: {
    type: `page`,
    picture: kth_picture,
    alt: `KTH, The Royal Institute of Technology main campus`,
    title: `The KTH files`,
    source: `KTH, The Royal Institute of Technology`,
    intro: `The projects I created as part of my studies.`,
    date: `Aug 2020 -`,
    path: `/kth`,
    target: ``
  },
  codecademy: {
    type: `page`,
    picture: codecademy_picture,
    alt: `Codecademy logo`,
    title: `The Codecademy files`,
    source: `Codecademy`,
    intro: `The projects I created as part of my web-development career path at Codecademy`,
    date: `June 2020 -`,
    path: `/codecademy`,
    target: ``
  }
}

export const kthProjects = {
  pong: {
    type: `web`,
    picture: pong_game,
    alt: `Picture of our ChipKIT playing Pong`,
    title: `Micro Pong`,
    source: `Computer Hardware Engineering`,
    intro: `Limited, advanced, and Fun. A game of pong on a single board computer.`,
    date: `Feb 2020 - March 2020`,
    path: `https://github.com/D3nnis38/IS1200`,
    target: `_blank`,
    description: `As part of my Computer Hardware Engineering course, I had to create software that was able to be played on a ChipKIT uc32 board with an I/O shield extension with a team. To get a high grade in this course we had to create a project which our professors deemed to be "advanced". I and my lab partner worked on a game of Pong with working multiplayer and single-player modes. We also added an embedded AI to the game with increasing difficulty and a High Score system based on the number of hits each player successfully delivered. The project was created using the MIPS architecture and the C programming language. The project was given full marks.`
  },
  bot: {
    type: `web`,
    picture: Chad_bot,
    alt: `Picture of CHAD.bot`,
    title: `CHAD.bot`,
    source: `Engineering Skills`,
    intro: `Planned, built, coded and delivered a lego Mindstorms delivery bot.`,
    date: `Sep 2020 - Nov 2020`,
    path: `https://github.com/calexanderberg/legoRobot`,
    target: `_blank`,
    description: "The goal of my Engineering Skills course was to explain the foundation of what it means to be an engineer in the workforce. For this project, we had to write contracts, make a plan and separate the work into multiple sections.  When it came to the actual robot, the goal was to make it deliver a book to a designated target then go from one point to another. The twist was that we had to code this in the C language which I nor my teammates knew how to implement in the Mindstorms architecture. We ended up changing the operating system with ev3dev. The robot ended up being very successful however, the tracks we used ended up sliding quite a bit, so we had to add a function that added extra torque to the wheels to compensate for this. The project was given full marks and has been highlighted to future students because of its unique function."
  }
}

export const personalProjects = {
  /*
  reddit: {
    website: true,
    picture: ``,
    alt: ``,
    title: "Reddit Client",
    source: "Full-Stack Engineer Career Path",
    intro: ``,
    date: ``,
    description: ``
  },
  */
  portfolio: {
    website: true,
    picture: old_portfolio,
    alt: `old portfolio screenshot`,
    title: `Personal Portfolio Website`,
    source: `Full-Stack Engineer Career Path`,
    intro: `Virtual CV`,
    date: `Aug 2020`,
    description: `I created a personal portfolio website, with the purpose of it acting as a place where I can highlight my projects and effectively make it a virtual CV. I created this project when I took their "web development Career path" in August which is why these dates are a bit different from the others, however, I still thought it was a good project to highlight. This page is only alive in the link above. Have a look will ya? I promise you it won't be pretty. `,
    path: `https://www.calexanderberg.com/old`,
    target: `_blank`
  },
  mixedMessages: {
    website: false,
    picture: ``,
    alt: ``,
    title: `Mixed Messages`,
    source: `Full-Stack Engineer Career Path`,
    intro: `Sending random jokes every run`,
    date: `Feb 2021`,
    description: `The first project I had to complete was a project called "Mixed Messages".  The goal of this project was to familiarize me with JavaScript and git even though I had been learning both off and on since August of 2020. I decided in the end to make a joke generator that would print one of 3 jokes and add new animals or verbs into the joke every time a user pressed refresh. The results of the code are shown in the window above. Try it out!`,
    target: ``
  }
}

export const biography = {
  birth: {
    date: `2000`,
    location: `Helsingborg, Sweden`,
    event: `Don't remember much of that day, but I was born.`,
    src: ``,
    picture: baby
  },
  usa: {
    date: `2012`,
    location: `Marco Island, Florida`,
    event: `After 12 years my family decided to move to Marco Island, Florida. Despite me and my brother not speaking English at the time we managed to make Florida our new home.`,
    src: ``,
    picture: naples
  },
  ib: {
    date: `2016 `,
    location: `Helsingborg, Sweden`,
    event: `After moving back and forth we decided to stay in Sweden to focus on the IB, International Baccalaureate, diploma. Graduating in 2018.`,
    src: ``,
    picture: ISH
  },
  london: {
    date: `2019`,
    location: `London, United Kingdom`,
    event: `Decided to move to London after graduating. Started working at Wolfgang puck's restaurant on 45 park lane without any prior restaurant experience. Was able to drastically improve my work ethic and customer experience, eventually getting the opportunity to serve guests first hand.`,
    src: ``,
    picture: london
  },
  redo: {
    date: `2020`,
    location: `Helsingborg, Sweden`,
    event: `Having taken a career path in web development, I decided to start my consulting firm to help small businesses with their digital image.`,
    src: ``,
    picture: helsingborg
  },
  kth: {
    date: `2020`,
    location: `Stockholm, Sweden`,
    event: `Started studying Electronics and Computer Engineering at KTH, Royal Institute Of Technology.`,
    src: ``,
    picture: stockholm
  },
};

export const experience = {
  REDO: {
    place: `RE-DO consulting`,
    title: `Founder`,
    location: `Stockholm, Sweden`,
    time: `June 2020 -`
  },
  AWS: {
    place: `Amazon Web services`,
    title: `IT support Assoc II intern`,
    location: `Eskilstuna, Sweden`,
    time: `June 2021 - September 2021`
  },
  Campiello: {
    place: `Campiello Ristorante & Bar`,
    title: `Waiter`,
    location: `Naples, Florida`,
    time: `January 2020 - March 2020`
  },
  CUT: {
    place: `CUT by Wolfgang Puck at 45 Park Lane`,
    title: `Chef de Rang`,
    location: `London, United Kingdom`,
    time: `Feburary 2019 - October 2019`
  },
  BäddBad: {
    place: `Bädd & Bad`,
    title: `Sales & Administrator`,
    location: `Helsingborg, Sweden`,
    time: `July 2018 - December 2018`
  } 
}

export const education = {
  KTH: {
    place: `KTH, Royal Institute Of Technology`,
    title: `Bachelor in Computer Science`,
    location: `Stockholm, Sweden`,
    time: `August 2020 -`
  },
  Codecademy: {
    place: `Codecademy`,
    title: `Web developer career path`,
    location: `Online, off and on`,
    time: `2020 -`
  },
  ISH: {
    place: `International School Of Helsingborg`,
    title: `International Baccalaureate (IB)`,
    location: `Helsingborg, Sweden`,
    time: `August 2015 - May 2018`
  }
}