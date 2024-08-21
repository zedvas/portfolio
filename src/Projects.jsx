import { Card } from "./Card";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <Card fullStack={true} imageSrc={"/assets/holidough.png"} title={"HoliDough"} description={"Budgeting app"} tools={["React", "Node", "Express", "Material UI", "GSAP"]}/>
      <Card imageSrc={"/assets/julyLiebe.png"} title={"JulyLiebe Homage"} description={"Vanilla app?"} tools={["React", "Node", "Express", "Material UI", "GSAP"]}/>
      <Card imageSrc={""} title={"Save My Marriage!"} description={"Anti-divorce app"} tools={["React", "Node", "Express", "Material UI", "GSAP"]}/>
      <Card imageSrc={"/assets/shoppingCart.png"} title={"Shopping Cart"} description={"ecommerce app"} tools={["React", "Node", "Express", "Material UI", "GSAP"]}/>
      <Card imageSrc={"/assets/simpsons.png"} title={"Simpsons Quotes"} description={"API usage"} tools={["React", "Node", "Express", "Material UI", "GSAP"]}/>
      <Card imageSrc={"/assets/altaloma.png"} title={"AltaLoma"} description={"Front end"} tools={["React", "Node", "Express", "Material UI", "GSAP"]}/>
      <Card imageSrc={"/assets/weatherapp.png"} title={"Weather App"} description={"Vanilla JS project using the fetch API"} tools={["React", "Node", "Express", "Material UI", "GSAP"]}/>
    </div>
  );
};
