const Button = ({ children }) => {
  return (
    <button className="body-text py-2 border-b-2 border-mint uppercase hover:text-mint transition-colors">
      {children}
    </button>
  );
};

export default Button;
