import github from "./img/github.svg"
import linkedIn from "./img/linkedin.svg"
import liveSite from "./img/live-site.svg"
import battleship from "./img/battleship.png"
import mugspot from "./img/mugspot.png"
import pixelcon from "./img/pixelcon.png"
import toodoo from "./img/toodoo.png"
import weathervane from "./img/weathervane.png"
import members from "./img/members.png"

export const contactLinks = [
    {
      src: linkedIn,
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/joey-santia-085a68261/"
    },
    {
      src: github, 
      alt: "Github",
      url: "https://github.com/joeysantia"
    },
  ];

  export const bio = "I am a self-taught full-stack developer, specializing in React, Node.js, Javascript, HTML, and CSS. Before web development, I spent several years as an actor and playwright."

  export const projects = [
    {
        title: "Lost at Pixelcon",
        description: "This is a photo-tagging game in the style of Where's Wally/Where's Waldo. Users search for three characters within a pixel art background and can add their names and times to a leaderboard, which is hosted by Google Firebase.",
        img: {
            src: pixelcon,
            alt: "Lost at Pixelcon"
        },
        links: [
            {
                src: liveSite,
                alt: "project html",
                url: "https://wheres-waldo-df5f6.firebaseapp.com/",
            },
            {
                src: github,
                alt: "project github",
                url: "https://github.com/joeysantia/lost-at-pixelcon",
            }
        ]
    },
    {
        title: "Mugspot",
        description: "Mock e-commerce site built with React and React Router. Designed a homepage, shop page, item pages, and a cart/checkout page. Built component tests with Jest.",
        img: {
            src: mugspot,
            alt: "mugspot"
        },
        links: [
            {
                src: liveSite,
                alt: "project html",
                url: "https://mugspot-4d038.web.app/",
            },
            {
                src: github,
                alt: "project github",
                url: "https://github.com/joeysantia/mugspot",
            }
        ]
    },
    {
        title: "Toodoo",
        description: "This is a CRUD app that allows users to create tasks and projects. Data is stored on Google Firebase, or, if the user is not signed in, on their device's local storage.",
        img: {
            src: toodoo,
            alt: "toodoo",
        },
        links: [
            {
                src: liveSite,
                alt: "project html",
                url: "https://toodoo-8880b.web.app/dist/index.html"
            },
            {
                src: github,
                alt: "project github",
                url: "https://github.com/joeysantia/todoist"
            }
        ]
    },
    {
        title: "Weathervane",
        description: "This is a weather app, which fetches information from the OpenWeatherMap One Call API. This project uses asynchronous Javascript functions to interact with the API and to validate forms (i.e. fetching errors are displayed as form validation errors).",
        img: {
            src: {weathervane},
            alt: "weathervane"
        },
        links: [
            {
                src: liveSite, 
                alt: "project html",
                url: "https://joeysantia.github.io/weather-app/"
            },
            {
                src:  github, 
                alt: "project github",
                url: "https://github.com/joeysantia/weathervane"
            }
        ]
    },
    {
        title: "Members Only",
        description: "A Node.js/Express message board with user authentication, supported by PassportJS",
        img: {
            src: {members},
            alt: "members only"
        },
        links: [
            {
                src: liveSite, 
                alt: "project html",
                url: "https://membersonly-m75r.onrender.com",
            },
            {
                src: github, 
                alt: "project github",
                url: "https://github.com/joeysantia/members-only"
            }
        ]
    },
    {
        title: "Battleship",
        description: "One-player battleship game built with JavaScript. This is primarily an exercise in test-driven development, as well as an exploration of the Drag and Drop API.",
        img: {
            src: battleship,
            alt: "battleship"
        },
        links: [
            {
                src: liveSite, 
                alt: "project html",
                url: "https://joeysantia.github.io/battleship/"
            },
            {
                src: github, 
                alt: "project github",
                url: 'https://github.com/joeysantia/battleship'
            }
        ]
    },
]