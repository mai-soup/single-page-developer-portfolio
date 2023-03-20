const ContentContainer = ({ children, className }) => {
  return (
    <div className={`w-4/5 md:w-3/5 mx-auto ${className}`}>{children}</div>
  );
};

export default ContentContainer;
