import { Link, type LinkProps } from "react-router";
import { IoArrowForward } from "react-icons/io5";

export const ContinueButton = ({ to, ...rest }: LinkProps) => {
  return (
    <Link
      {...rest}
      to={to}
      className="flex items-center px-6 py-2.5 bg-[#1E90FF] w-fit rounded-4xl text-white gap-2 font-medium group active:scale-95 transition duration-300 hover:bg-[#1971ca]"
    >
      Prosseguir
      <IoArrowForward
        color="white"
        size={20}
        className="mt-0.5 group-hover:animate-pulse"
      />
    </Link>
  );
};
