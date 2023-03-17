import Button from "./Button";
import ContentContainer from "./ContentContainer";

const Main = () => {
  return (
    <main className="text-white">
      <ContentContainer>
        <section>
          <h1 className="heading-xl">
            Nice to meet you!
            <br />
            I'm <span className="underline decoration-mint">Adam Keyes</span>.
          </h1>

          <p className="body-text text-light-grey">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <Button>Contact me</Button>
        </section>
        <section></section>
        {`
  
  HTML
  4 Years Experience
  
  CSS
  4 Years Experience
  
  JavaScript
  4 Years Experience
  
  Accessibility
  4 Years Experience
  
  React
  3 Years Experience
  
  Sass
  3 Years Experience
  
  Projects
  
  Contact me
  
  Design portfolio
  HTML CSS
  View project
  View code
  
  E-learning landing page
  HTML CSS
  View project
  View code
  
  Todo web app
  HTML CSS JavaScript
  View project
  View code
  
  Entertainment web app
  HTML CSS JavaScript
  View project
  View code
  
  Memory Game
  HTML CSS JavaScript
  View project
  View code
  
  Art gallery showcase
  HTML CSS JavaScript
  View project
  View code
  
  `}
      </ContentContainer>
    </main>
  );
};

export default Main;
