interface ButtonProps {
  text: string;
  isAddress?: boolean;
  callback: () => void;
}
function Button({ text, callback, isAddress = false }: ButtonProps) {
  console.log(isAddress);
  return (
    <button
      onClick={callback}
      className="border border-white rounded-[30px] font-montserrat font-bold p-4 w-44 text-white "
    >
      {text}
    </button>
  );
}

export default Button;
