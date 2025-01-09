interface ButtonProps {
  text: string;
  isAddress?: boolean;
}
function Button({ text, isAddress = false }: ButtonProps) {
  console.log(isAddress);
  return (
    <button className="border border-white rounded-[30px] font-montserrat font-bold p-4 w-44 text-white ">
      {text}
    </button>
  );
}

export default Button;
