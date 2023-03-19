const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} body-text py-2 border-b-2 border-mint uppercase hover:text-mint transition-colors`}
      onClick={e => {
        e.preventDefault();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
