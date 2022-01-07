import redo_picture from "../images/redo_logo.png";
import BCI from "../images/kthbci.png";

import pong_game from "../images/pong_game.png";
import Chad_bot from "../images/chad_bot.png";

import nft from "../images/nft.png";
import Website from "../images/website.png";
import router from "../images/router.png";

import baby from "../images/baby.png";
import naples from "../images/marcoIsland.png";
import helsingborg from "../images/helsingborg.png";
import ISH from "../images/ISH.png";
import london from "../images/london.png";
import stockholm from "../images/stockholm.png";
import bci from "../images/bci.jpg";

export const work = {
  professional: {
    title: `Professional Work`,
    experience: {
      redo: {
        picture: redo_picture,
        alt: `RE-DO consulting logo`,
        title: `Founder`,
        source: `RE-DO consulting`,
        intro: `A consulting firm I started in 2020.`,
        date: `Aug 2020 -`,
        path: `https://www.re-do.nu`,
        description: ``,
      },
      BCI: {
        picture: BCI,
        alt: `KTH Blockchian initative banner`,
        title: `Chairman`,
        source: `The KTH Blockchain Initative`,
        intro: `Expanding the horizon of Blockchain technology.`,
        date: `Aug 2021 -`,
        path: `https://www.kthbci.org`,
        description: ``,
      },
    },
  },
  School: {
    title: `The School Projects`,
    experience: {
      /*
      musicSchool: {
        picture: "IV1351",
        alt: `Screenshot of Model`,
        title: `Music School`,
        source: `Data Storage Paradigms`,
        intro: `Design, model, and build. A solution for data management and storage.`,
        date: `November 2021 - January 2022`,
        path: `https://github.com/calexanderberg/IV1351`,
        description: ``,
      },
      */
      /*
      bugTracker: {
        picture: "DH2642",
        alt: `Screenshot of website`,
        title: `Bug Catcher`,
        source: `Interaction Programming and the Dynamic Web`,
        intro: `A website for catching, loging, and gamifying bug catching.`,
        date: `November-December 2021`,
        path: ``,
        description: ``,
      },*/
      pong: {
        picture: pong_game,
        alt: `Picture of our ChipKIT playing Pong`,
        title: `Micro Pong`,
        source: `Computer Hardware Engineering`,
        intro: `Limited, advanced, and Fun. A game of pong on a single board computer.`,
        date: `Feb 2020 - March 2020`,
        path: `https://github.com/calexanderberg/IS1200`,
        description: `As part of my Computer Hardware Engineering course, I had to create software that was able to be played on a ChipKIT uc32 board with an I/O shield extension with a team. To get a high grade in this course we had to create a project which our professors deemed to be "advanced". I and my lab partner worked on a game of Pong with working multiplayer and single-player modes. We also added an embedded AI to the game with increasing difficulty and a High Score system based on the number of hits each player successfully delivered. The project was created using the MIPS architecture and the C programming language. The project was given full marks.`,
      },
      bot: {
        picture: Chad_bot,
        alt: `Picture of CHAD.bot`,
        title: `CHAD.bot`,
        source: `Engineering Skills`,
        intro: `Planned, built, coded and delivered a lego Mindstorms delivery bot.`,
        date: `Sep 2020 - Nov 2020`,
        path: `https://github.com/calexanderberg/legoRobot`,
        description:
          "The goal of my Engineering Skills course was to explain the foundation of what it means to be an engineer in the workforce. For this project, we had to write contracts, make a plan and separate the work into multiple sections.  When it came to the actual robot, the goal was to make it deliver a book to a designated target then go from one point to another. The twist was that we had to code this in the C language which I nor my teammates knew how to implement in the Mindstorms architecture. We ended up changing the operating system with ev3dev. The robot ended up being very successful however, the tracks we used ended up sliding quite a bit, so we had to add a function that added extra torque to the wheels to compensate for this. The project was given full marks and has been highlighted to future students because of its unique function.",
      },
    },
  },
  personal: {
    title: `The Personal Projects`,
    experience: {
      nft: {
        picture: nft,
        alt: `KTH BCI NFT banner`,
        title: `NFT Membership KTH BCI`,
        source: `The KTH Blockchain Initative`,
        intro: `Proof of membership in the 21 century`,
        date: `December 2021`,
        path: `https://github.com/calexanderberg/KTH_BCI_NFT`,
        description: ``,
      },
      website: {
        picture: Website,
        alt: `Home page of this website`,
        title: `My portfolio website`,
        source: `Just for fun`,
        intro: `Portable, personal, professional, portfolio`,
        date: `Aug 2020 -`,
        path: `https://github.com/calexanderberg/portfolio`,
        description: ``,
      },
      Tomato: {
        picture: router,
        alt: `Picture of Fresh tomato and router`,
        title: `Fresh Router with FOSS firmware`,
        source: `Just for fun`,
        intro: `More control, more networking, more to learn`,
        date: `Oct 2021`,
        description: `After using my ISP's router for about a year I became frustrated with the options and settings that was provided to me. I decided to instead buy a Netgear R7000 router, use my ISP router as a modem, and downloaded FreshTomato making sure that I got the control I wanted. Using this Linux distrobution proved to be a challenge as I was unfamiliar with networking. I started learning the fundamentals, and after 3 months I switched to DD-WRT as it had other features which I wanted to try out. As of December 2021, I am running a VPN and FTP server on the router, with plans to set up a more secure file sharing protocol.`,
      },
    },
  },
};

export const biography = {
  birth: {
    date: `2000`,
    location: `Helsingborg, Sweden`,
    event: `Don't remember much of that day, but I was born.`,
    src: ``,
    picture: baby,
  },
  usa: {
    date: `2012`,
    location: `Marco Island, Florida`,
    event: `After 12 years my family decided to move to Marco Island, Florida. Despite me and my brother not speaking English at the time we managed to make Florida our new home.`,
    src: ``,
    picture: naples,
  },
  ib: {
    date: `2016 `,
    location: `Helsingborg, Sweden`,
    event: `After moving back and forth we decided to stay in Sweden to focus on the IB, International Baccalaureate, diploma. Graduating in 2018.`,
    src: ``,
    picture: ISH,
  },
  london: {
    date: `2019`,
    location: `London, United Kingdom`,
    event: `Decided to move to London after graduating. Started working at Wolfgang puck's restaurant on 45 park lane without any prior restaurant experience. Was able to drastically improve my work ethic and customer experience, eventually getting the opportunity to serve guests first hand.`,
    src: ``,
    picture: london,
  },
  redo: {
    date: `2020`,
    location: `Helsingborg, Sweden`,
    event: `Having taken a career path in web development, I decided to start my consulting firm to help small businesses with their digital image.`,
    src: ``,
    picture: helsingborg,
  },
  kth: {
    date: `2020`,
    location: `Stockholm, Sweden`,
    event: `Started studying Electronics and Computer Engineering at KTH, Royal Institute Of Technology.`,
    src: ``,
    picture: stockholm,
  },
  BCI: {
    date: `2021`,
    location: `Stockholm, Sweden`,
    event: `Decided to restart a defunct organization at KTH, to promote, educate, and expand the horizon of blockchain technology and its applications.`,
    src: ``,
    picture: bci,
  },
};

export const experience = {
  SEB: {
    place: `SEB`,
    title: `FX support`,
    location: `Stockholm, Sweden`,
    time: `November 2021 -`,
  },
  KTHBCI: {
    place: `KTH BCI`,
    title: `Chairman of the board`,
    location: `Stockholm, Sweden`,
    time: `September 2021 -`,
  },
  REDO: {
    place: `RE-DO consulting`,
    title: `Founder`,
    location: `Stockholm, Sweden`,
    time: `June 2020 -`,
  },
  AWS: {
    place: `Amazon Web services`,
    title: `IT support Assoc II intern`,
    location: `Eskilstuna, Sweden`,
    time: `June 2021 - September 2021`,
  },
  CUT: {
    place: `CUT by Wolfgang Puck at 45 Park Lane`,
    title: `Chef de Rang`,
    location: `London, United Kingdom`,
    time: `Feburary 2019 - October 2019`,
  },
};

export const education = {
  KTH: {
    place: `KTH, Royal Institute Of Technology`,
    title: `Bachelor in Computer Science`,
    location: `Stockholm, Sweden`,
    time: `August 2020 -`,
  },
  Codecademy: {
    place: `Codecademy`,
    title: `Web developer career path`,
    location: `Online, on and off`,
    time: `2020 -`,
  },
  ISH: {
    place: `International School Of Helsingborg`,
    title: `International Baccalaureate (IB)`,
    location: `Helsingborg, Sweden`,
    time: `August 2015 - May 2018`,
  },
};
