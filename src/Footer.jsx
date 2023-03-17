import ContentContainer from "./ContentContainer";

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-white">
      <ContentContainer>{`Contact

    I would love to hear about your project and how I could help. Please 
    fill in the form, and I’ll get back to you as soon as possible.
    
    Name
    Email
    Message
    
    Send message
    
    adamkeyes`}</ContentContainer>
    </footer>
  );
};

export default Footer;
