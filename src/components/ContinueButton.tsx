import { IoArrowForward } from "react-icons/io5";

export const ContinueButton = ({ value }: { value: string }) => {
  return (
    <button
      type="submit"
      className="flex items-center px-6 py-2.5 bg-[#1E90FF] w-fit rounded-4xl text-white gap-2 font-medium group active:scale-95 transition duration-300 hover:bg-[#1971ca] focus:outline-none focus:ring-2 focus:ring-[#0b4f94] cursor-pointer"
    >
      {value}
      <IoArrowForward
        color="white"
        size={20}
        className="mt-0.5 arrow-slide"
      />
    </button>
  );
};
