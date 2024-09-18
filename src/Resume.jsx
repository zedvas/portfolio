import { Document } from "react-pdf";
import { NavLink } from "react-router-dom";

export const Resume = () => {
  return (
    <>
      <div className="resume">
        <button>
          <a href="/assets/ZahraVasanji.pdf" target="_blank" download>
            Download a PDF copy
          </a>
        </button>
        <section>
          <h2>software engineering skills</h2>
          <ul className="sectionMain">
            <li>
              <strong>JavaScript:</strong> ES6+, AJAX & API’s - REST and
              GraphQL, Animation (Greensock), Graphing (d3.js) & Realtime
              (websockets and Socket.IO), OAuth, Next.JS
            </li>
            <li>
              <strong>React:</strong> Hooks, Context, Material UI, Redux, Redux
              Toolkit
            </li>
            <li>
              <strong>Testing:</strong> TypeScript, Cypress, Vitest, Vite
            </li>
            <li>
              <strong>Node.js:</strong> Vanilla & Express
            </li>
            <li>
              <strong>Databases:</strong> SQL (MySQL), NoSQL (MongoDB with
              Mongoose.js, Redis, Firebase, GraphCMS/Hygraph)
            </li>
            <li>
              <strong>DevOps:</strong> Docker & Kubernetes, Vercel (CI/CD),
              Serverless (Netlify), cPanel, Apache, XAMPP
            </li>
            <li>
              <strong>CSS 3:</strong> Responsive design, Flexbox & CSS Grid,
              SASS, CSS frameworks, and Tailwind
            </li>
            <li>
              <strong>HTML5:</strong> Semantically correct for accessibility and
              SEO
            </li>
          </ul>
        </section>

        <section>
          <h2>key projects</h2>
          <div className="sectionMain">
            <div>
              <h3>HoliDough</h3>
              <p>
                <a
                  href="https://holidough.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>{" "}
                |
                <a
                  href="https://github.com/zedvas/travel-tally"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend GitHub
                </a>{" "}
                |
                <a
                  href="https://github.com/zedvas/travel-tally-back-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend GitHub
                </a>
              </p>
              <p>
                <strong>Tech Used:</strong> React, Material UI, Node.js,
                Express.js, Axios, MySQL, Joi, SASS, Redux, React Router, React
                Cropper, React Toastify, React Webcam, Local Storage, GSAP,
                Framer Motion, Chart.js, Day.js
              </p>
              <p>
                <strong>What it Does:</strong> HoliDough is a holiday budgeting
                application that allows users to manage, track, and predict
                expenses, with visual budget tracking via Chart.js for clear and
                intuitive data presentation.
              </p>
              <p>
                <strong>What It Demonstrates:</strong> Architected a reusable
                form component. Integrated Redux with Redux Persist for state
                synchronization. Enhanced UI with custom animations, SASS, and
                Material UI. Utilized APIs for financial data. Implemented AGILE
                principles, with MoSCoW prioritization. Secured authentication
                with sha256 and request validation using Joi. Prevented SQL
                injection via prepared statements.
              </p>
            </div>

            <div>
              <h3>Rent-A-Pet</h3>
              <p>
                <a
                  href="https://rent-a-pet.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>{" "}
                |
                <a
                  href="https://github.com/zedvas/shopping-cart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p>
                <strong>Tech Used:</strong> JavaScript, React, Material UI
              </p>
              <p>
                <strong>What It Demonstrates:</strong> A mock e-commerce
                platform built in React using array methods for sorting and
                filtering results. Automated cart calculations and introduced
                dynamic class assignment for UX enhancements. Implemented a
                ‘like’ feature with visual indicators.
              </p>
            </div>

            <div>
              <h3>Portfolio Site</h3>
              <p>
                <a
                  href="https://zahravasanji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>{" "}
                |
                <a
                  href="https://github.com/zedvas/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p>
                <strong>Tech Used:</strong> React, React Router, Joi, React
                Modal, EmailJS, Vite, Material UI
              </p>
              <p>
                <strong>What It Demonstrates:</strong> Integrated EmailJS to
                send emails from the client-side. Used React Modal for dynamic
                popups. Built a fully responsive site with optimized navigation
                and performance using Vite and React Router.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>education</h2>
          <ul className="sectionMain">
            <li>
              <strong>The Jump Digital School</strong> (Sep 2023 - Dec 2023){" "}
              <br />A 12-week full-time programme of Full-Stack Software
              Engineering Training. Developed and deployed full-stack websites
              and web applications to a professional standard. Delivered
              individual and team projects, including participation in a
              hackathon.
            </li>
            <li>
              <strong>Middlesex University, London</strong> <br />
              BA (Hons), Accounting and Finance, 2:1
            </li>
          </ul>
        </section>

        <section>
          <h2>professional experience</h2>
          <div className="sectionMain">
            <div>
            <h3>Senior Stock Controller, PRADA GROUP, London</h3>
            <p>
              <em>Jul 2021 - May 2024</em>
            </p>
            <ul>
              <li>
                Conducted regular audits for over 12,000 units, analyzing
                inventory and stock loss data to improve loss prevention and
                operational efficiency.
              </li>
              <li>
                Responsible for logistics of transferring, tracking, and
                securing high-value assets.
              </li>
            </ul>
          </div>

          <div>
            <h3>Stock Controller, CELINE, London</h3>
            <p>
              <em>Nov 2017 – Jun 2020</em>
            </p>
          </div>

          <div>
            <h3>Stock Manager, REISS, London</h3>
            <p>
              <em>Jan 2016 – Oct 2017</em>
            </p>
          </div>

          <div>
            <h3>Sales Assistant, REISS, London</h3>
            <p>
              <em>Jan 2015 – Dec 2015</em>
            </p>
          </div></div>
        </section>

        <section>
          <h2>additional information</h2>
          <ul className="sectionMain">
            <li>Right to work in the UK</li>
            <li>Immediately available for interviews</li>
          </ul>
        </section>
      </div>
    </>
  );
};
