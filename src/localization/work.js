
import redo_picture from "../images/redo_logo.png";
import BCI from "../images/kthbci.png";

import II1302 from '../images/II1302.png'
import IV1351 from "../images/IV1351.png"
import DH2642 from "../images/DH2642.png"
import pong_game from "../images/pong_game.png";
import Chad_bot from "../images/chad_bot.png";

import scripts from '../images/scripts.png';
import proxmox from '../images/proxmox.png';
import Website from "../images/website.png";
import router from "../images/router.png";

const work = {
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
      project: {
        picture: II1302,
        alt: `Screenshot of Website`,
        title: `Spafe Monitor`,
        source: `Projects and Project Methods`,
        intro: `A website for managing, monitoring, and communicating with a single board computer through the cloud.`,
        date: `March 2022-`,
        path: `https://github.com/calexanderberg/II1302`,
        description: ``,
      },
      musicSchool: {
        picture: IV1351,
        alt: `Screenshot of Model`,
        title: `Music School`,
        source: `Data Storage Paradigms`,
        intro: `Design, model, and build. A solution for data management and storage.`,
        date: `November 2021 - January 2022`,
        path: `https://github.com/calexanderberg/IV1351`,
        description: ``,
      },
      bugTracker: {
        picture: DH2642,
        alt: `Screenshot of website`,
        title: `Bug Catcher`,
        source: `Interaction Programming and the Dynamic Web`,
        intro: `A website for catching, loging, and gamifying bug catching.`,
        date: `November-December 2021`,
        path: `https://github.com/calexanderberg/DH2642`,
        description: ``,
      },
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
      script: {
        picture: scripts,
        alt: "sceenshot of terminal",
        title: `scripts`,
        source: `Just for fun`,
        intro: `Personal collection of Scripts`,
        date: `Feb 2022 -`,
        path: `https://github.com/calexanderberg/scripts`,
        description: ``,
      }, 
      VM: {
        picture: proxmox,
        alt: `Proxmox gui`,
        title: `Home Lab`,
        source: `Just for fun`,
        intro: `Proxmox, docker, and the linux rabbit hole`,
        date: `October 2021 -`,
        path: ``,
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

export default work;