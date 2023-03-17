import githubIcon from "./assets/images/icon-github.svg";
import linkedInIcon from "./assets/images/icon-linkedin.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import fmIcon from "./assets/images/icon-frontend-mentor.svg";
import ContentContainer from "./ContentContainer";

const icons = [githubIcon, linkedInIcon, twitterIcon, fmIcon];

const Header = () => {
  return (
    <header className="text-white py-8">
      <ContentContainer className="flex flex-row justify-between items-center">
        <div className="heading-m">adamkeyes</div>
        <div className="flex flex-row gap-8 mr-4">
          {icons.map(icon => (
            <a
              href="#"
              key={icon.match(
                /^.*[\/\\](?<FileNameWithoutExtension>.*)\.(.*)$/
              )} // key is filename without extension
            >
              <img src={icon} alt="wow" className="w-6 h-6" />
            </a>
          ))}
        </div>
      </ContentContainer>
    </header>
  );
};

export default Header;
