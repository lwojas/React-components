// App.js
import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";

const appData = [
  {
    badge: "Do you want to",
    cssClass: "section-what-usp",
    sectionTitle: "Learn how to code",
    description:
      "We have created courses to help you learn, with easy to follow steps and some sparks of fun!",
    usps: [
      {
        imgsrc: "https://www.svgrepo.com/show/115256/skills.svg",
        title: "Learn new skills and expand your horizon",
      },
      {
        imgsrc: "https://www.svgrepo.com/show/374902/groups.svg",
        title: "Learn &amp; share with our community",
      },
      {
        imgsrc: "https://www.svgrepo.com/show/147936/low-speed.svg",
        title: "Fun, hands on and easy to follow",
      },
    ],
  },
  {
    badge: "Courses",
    cssClass: "section-what-usp",
    sectionTitle: "Our Courses",
    description:
      "Awesome! Let’s do this together. We are here to support you in your coding journey.",
    usps: [
      {
        imgsrc: "https://www.svgrepo.com/show/295398/code.svg",
        title: "Get help from experienced developers",
      },
      {
        imgsrc: "https://www.svgrepo.com/show/409416/atom.svg",
        title: "Follow courses created by experienced developers",
      },
      {
        imgsrc: "https://www.svgrepo.com/show/48245/step-pyramid.svg",
        title: "Personal &amp; at your own speed",
      },
    ],
  },
  {
    badge: "Why",
    cssClass: "section-what-usp",
    sectionTitle: "Why do we do this? ",
    description:
      "It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together.",
    usps: [
      {
        imgsrc: "https://www.svgrepo.com/show/350283/cogs.svg",
        title:
          "We love to experiment and create awesome stuff from the comfort of our couch.",
      },
      {
        imgsrc: "https://www.svgrepo.com/show/374902/groups.svg",
        title:
          "It’s always fun to do things together, the excitement and the collaborations.",
      },
      {
        imgsrc: "https://www.svgrepo.com/show/41195/teacher.svg",
        title: "We like to learn and to teach others the stuff we know.",
      },
    ],
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className="section-header-spacer"></div>
      <div className="content">
        <Section {...appData[0]} />
        <Section {...appData[1]} />
        <Section {...appData[2]} />
      </div>
      <Footer />
    </div>
  );
}
