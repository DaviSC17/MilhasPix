interface StepStyle {
  circle: string;
  span: string;
  title: string;
  description: string;
}

export const stepStyleConfig: Record<
  "complete" | "current" | "incomplete",
  StepStyle
> = {
  complete: {
    circle:
      "w-8 h-8 rounded-full bg-[#1E90FF] flex justify-center items-center relative",
    span: "w-[0.625rem] h-[0.625rem] bg-[#F0F0F0] rounded-full inline-block relative before:absolute before:w-0.5 before:h-8 before:bg-[#1E90FF] before:left-1/2 before:-translate-x-1/2 before:-top-12 after:absolute after:w-0.5 after:h-8 after:bg-[#1E90FF] after:left-1/2 after:-translate-x-1/2 after:-bottom-12",
    title: "text-[#2E3D50] font-dm-sans font-medium",
    description: "text-[#2E3D50] font-dm-sans text-xs leading-[160%]",
  },
  current: {
    circle:
      "w-8 h-8 rounded-full border-[0.0625rem] border-[#1E90FF] shadow-[0_0_0.25rem_0.25rem_rgba(30,144,255,0.25)] flex justify-center items-center relative",
    span: `w-[0.625rem] h-[0.625rem] bg-[#1E90FF] rounded-full inline-block relative before:absolute before:w-0.5 before:h-8 before:bg-[#1E90FF] before:left-1/2 before:-translate-x-1/2 before:-top-12 after:absolute after:w-0.5 after:h-8 after:bg-[#1E90FF] after:left-1/2 after:-translate-x-1/2 after:-bottom-12`,
    title: "text-[#2E3D50] font-dm-sans font-medium",
    description: "text-[#475569] font-dm-sans text-xs leading-[160%]",
  },
  incomplete: {
    circle:
      "w-8 h-8 rounded-full border-[0.0625rem] border-[#F0F0F0] flex justify-center items-center relative",
    span: "w-[0.625rem] h-[0.625rem] bg-[#F0F0F0] rounded-full inline-block relative before:absolute before:w-0.5 before:h-8 before:bg-[#F0F0F0] before:left-1/2 before:-translate-x-1/2 before:-top-12 after:absolute after:w-0.5 after:h-8 after:bg-[#F0F0F0] after:left-1/2 after:-translate-x-1/2 after:-bottom-12",
    title: "text-[#CBD5E1] font-dm-sans font-medium",
    description: "text-[#CBD5E1] font-dm-sans text-xs leading-[160%]",
  },
};