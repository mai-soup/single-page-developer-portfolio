import Button from "./Button";
import ContentContainer from "./ContentContainer";
import skills from "./skills";
import projects from "./projects";

const Main = () => {
  return (
    <main className="text-white">
      <ContentContainer>
        {/* BIO SECTION */}
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
        {/* SKILLS SECTION */}
        <section className="flex flex-row w-full flex-wrap">
          {skills.map(skill => (
            <div
              className="flex-1 basis-1/2 md:basis-1/3 my-4"
              key={skill.title}
            >
              <h3 className="heading-m my-3">{skill.title}</h3>
              <p className="body-text text-light-grey">
                {skill.years} Years Experience
              </p>
            </div>
          ))}
        </section>
        {/* PROJECTS SECTION */}
        <section>
          <div className="flex flex-row items-center justify-between">
            <h2 className="heading-xl">Projects</h2>
            <Button>Contact me</Button>
          </div>
          <div className="flex flex-row items-center flex-wrap">
            {projects.map(project => (
              <div className="flex-1 basis-1/2 my-2" key={project.title}>
                <h3 className="heading-m">{project.title}</h3>
                <p className="body-text text-light-grey">
                  {project.technologies.join(", ")}
                </p>
                <Button>View project</Button>
                <Button>View code</Button>
              </div>
            ))}
          </div>
        </section>
      </ContentContainer>
    </main>
  );
};

export default Main;
