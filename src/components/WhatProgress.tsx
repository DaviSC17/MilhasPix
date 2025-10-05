import { useParams } from "react-router";

export const WhatProgress = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex gap-1">
      <span className="text-[#1E90FF] text-dm-sans font-semibold text-[1.125rem] leading-7">
        {id === undefined ? 1 : id}
      </span>
      <span className="text-dm-sans font-semibold text-[1.125rem] leading-7 text-[#2E3D50]">
        de
      </span>
      <span className=" text-dm-sans font-semibold text-[1.125rem] leading-7 text-[#2E3D50]">
        4
      </span>
    </div>
  );
};
