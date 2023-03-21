import Button from "./Button";
import ContentContainer from "./ContentContainer";
import skills from "./skills";
import projects from "./projects";
import ProjectItem from "./ProjectItem";
import profileDesktop from "./assets/images/image-profile-desktop.webp";

const Main = () => {
  return (
    <main className="text-white">
      <ContentContainer>
        {/* BIO SECTION */}
        <section className="grid grid-cols-6 border-b-2 border-light-grey">
          <picture className="col-start-4 col-end-7 row-start-1 justify-self-end -translate-y-28 z-10 before:content-circle before:absolute before:-left-16 before:top-96">
            <img src={profileDesktop} alt="Profile Image" className="" />
          </picture>
          <div className="col-start-1 col-end-5 row-start-1 relative z-20 mb-16">
            <h1 className="heading-xl mb-10">
              Nice to meet you!
              <br />
              I'm <span className="underline decoration-mint">Adam Keyes</span>.
            </h1>

            <p className="body-text text-light-grey max-w-[50%] mb-16 before:content-rings before:absolute before:-left-2/3">
              Based in the UK, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <Button>Contact me</Button>
          </div>
        </section>
        {/* SKILLS SECTION */}
        <section className="flex flex-row w-full flex-wrap after:content-rings after:absolute after:-right-11 my-16">
          {skills.map(skill => (
            <div
              className="flex-1 basis-1/2 md:basis-1/3 my-4"
              key={skill.title}
            >
              <h3 className="heading-l my-3">{skill.title}</h3>
              <p className="body-text text-light-grey">
                {skill.years} Years Experience
              </p>
            </div>
          ))}
        </section>
        {/* PROJECTS SECTION */}
        <section className="mb-16">
          <div className="flex flex-row items-center justify-between mb-8">
            <h2 className="heading-xl">Projects</h2>
            <Button>Contact me</Button>
          </div>
          <div className="flex flex-row items-center flex-wrap">
            {projects.map((project, i) => (
              <ProjectItem
                project={project}
                className={i % 2 == 0 ? "pr-2" : "pl-2"}
              />
            ))}
          </div>
        </section>
      </ContentContainer>
    </main>
  );
};

export default Main;
