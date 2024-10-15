interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button";
  customClass?: string;
  theme: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  type = "button",
  customClass = "",
  theme,
}) => {
  const buttonStyles = {
    primary:
      theme === "light"
        ? "bg-white text-black py-2 px-5 font-medium rounded border-black border-solid border" // Світла тема
        : "bg-gray-500 text-white py-2 px-5 font-medium rounded border-black border-solid border", // Темна тема

    secondary: "bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded",
    small:
      "bg-y text-base font-medium  text-g px-4 rounded h-10 inline-flex justify-center items-center",
  };

  return (
    <button
      type={type}
      className={`${buttonStyles[variant]} ${customClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
