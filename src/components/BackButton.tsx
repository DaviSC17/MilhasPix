import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)} 
      className="p-4 border border-[#E2E2E2] cursor-pointer rounded-full flex gap-2 items-center sm:px-6 sm:py-2.5 group hover:border-[#979797] transition duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
    >
      <IoArrowBack
        color="#2E3D50"
        className="group-hover:animate-pulse"
        size={20}
      />
      <span className="hidden sm:flex text-[#2E3D50] text-sm font-medium">
        Voltar
      </span>
    </button>
  );
};
