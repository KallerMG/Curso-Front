const Button = ({ handleClick, text }) => {
  console.log(handleClick);
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
