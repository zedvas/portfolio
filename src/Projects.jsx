import { Card } from "./Card";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <Card
        fullStack={true}
        imageSrc={"/assets/holidough.png"}
        title={"HoliDough"}
        description={"Full stack holiday budgeting app using various tools for data manipulation and a Node backend sourcing data from a MySQL database"}
        tools={["React", "Node", "Express", "MySQL", "Material UI", "GSAP"]}
        githubLink="https://github.com/zedvas/travel-tally"
        githubLinkBackend="https://github.com/zedvas/travel-tally-back-end"
        demoLink="https://holidough.uk/"
      />
            <Card
        imageSrc={"/assets/rent-a-pet-mobile.png"}
        title={"Shopping Cart"}
        description={"Ecommerce app using JavaScript functionality to add to cart, dynamically calculate totals and like items"}
        tools={["React", "Redux", "CSS"]}
        githubLink="https://github.com/zedvas/shopping-cart"
        demoLink="https://rent-a-pet.netlify.app/"
      />
      <Card
        imageSrc={"/assets/simpsons-mobile.png"}
        title={"Simpsons Quotes"}
        description={"Search, like and delete quotes from data accessed using Fetch API"}
        tools={["React Hooks", "Axios", "JavaScript"]}
        githubLink="https://github.com/zedvas/simpsons"
        demoLink="https://simpsons-quotes-zv.netlify.app/"
      />
      <Card
        imageSrc={"/assets/altaloma-mobile.png"}
        title={"AltaLoma"}
        description={"Front end"}
        tools={["React", "Material UI", "SASS"]}
        githubLink="https://github.com/zedvas/altaloma-frontend"
        demoLink="https://altaloma.netlify.app/"
      />
      <Card
        imageSrc={"/assets/weather-mobile.png"}
        title={"Weather App"}
        description={"Vanilla JS project using the fetch API"}
        tools={["Fetch API", "DOM Manipulation", "SASS"]}
        githubLink="https://github.com/zedvas/weatherApp"
        demoLink="https://weather-zv.netlify.app/"
      />
      <Card
        imageSrc={"/assets/julyliebe-mobile.png"}
        title={"JulyLiebe Homage"}
        description={"Static recreation of JulyLiebe homepage"}
        tools={["HTML", "CSS"]}
        githubLink="https://github.com/zedvas/julyliebe2"
        demoLink="https://julyliebe.netlify.app/"
      />
      <Card
        imageSrc={""}
        title={"Save My Marriage!"}
        description={"Anti-divorce app"}
        tools={["React", "Node", "Express", "Material UI", "GSAP"]}
        githubLink=""
        githubLinkBackend=""
        demoLink=""
      />
    </div>
  );
};
