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
        <section className="grid grid-cols-6">
          <img
            src={profileDesktop}
            alt="Profile Image"
            className="col-start-4 col-end-7 row-start-1 justify-self-end -translate-y-28 -z-10"
          />
          <div className="col-start-1 col-end-5 row-start-1">
            <h1 className="heading-xl">
              Nice to meet you!
              <br />
              I'm <span className="underline decoration-mint">Adam Keyes</span>.
            </h1>

            <p className="body-text text-light-grey max-w-[50%]">
              Based in the UK, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <Button>Contact me</Button>
          </div>
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
