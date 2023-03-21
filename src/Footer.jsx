import Button from "./Button";
import ContentContainer from "./ContentContainer";
import LogoLinksContainer from "./LogoLinksContainer";

const inputClasses =
  "font-sans body-text placeholder:text-light-grey mt-0 block w-full px-0.5 border-0 border-b-2 border-light-grey bg-dark-grey focus:ring-0 focus:border-mint";

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-white">
      <ContentContainer>
        <div className="flex flex-row justify-between py-4 gap-12">
          <div className="basis-1/2 relative">
            <h2 className="mb-2 heading-xl">Contact</h2>
            <p className="body-text text-light-grey before:content-rings before:absolute before:-left-full before:bottom-12">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="basis-1/2">
            <form action="">
              <label className="block mb-4" htmlFor="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="NAME"
                  className={inputClasses}
                />
              </label>
              <label className="block mb-4" htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                  className={inputClasses}
                />
              </label>
              <label className="block mb-4" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  className={inputClasses}
                  placeholder="MESSAGE"
                ></textarea>
              </label>
              <Button className="float-right">Send message</Button>
            </form>
          </div>
        </div>
      </ContentContainer>
      <LogoLinksContainer />
    </footer>
  );
};

export default Footer;
