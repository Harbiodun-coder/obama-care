import React from "react";
import { FaUserInjured, FaCalendarCheck, FaCommentMedical } from "react-icons/fa"; // Example icons for patients, appointments, and consultations
import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva("text-lg md:text-2xl rounded-full flex justify-center items-center p-1", {
  variants: {
    intent: {
      patients: "bg-[#EBF5FF] text-[#0065C2]",
      appointments: "bg-[#EBFFFD] text-[#009688]",
      consultations: "bg-[#F5EBFF] text-[#942DFB]",
    },
  },
  defaultVariants: {
    intent: "patients",
  },
});

interface InputProps extends VariantProps<typeof inputStyles> {
  text: string;
  number: number;
}

const iconMap = {
  patients: <FaUserInjured />,
  appointments: <FaCalendarCheck />,
  consultations: <FaCommentMedical />,
};

export default function Card({ intent = "patients", text, number }: InputProps) {
  const icon = iconMap[intent as keyof typeof iconMap];

  return (
    <div>
      <div className="bg-white-100 text-center p-1 shadow cursor-pointer border border-[#EDEDED] rounded-lg flex md:gap-4 gap-[1px] items-center md:pl-5 text-xs md:text-lg">
        <div className={`${inputStyles({ intent })}`}>
          {icon}
        </div>
        <div>
          <div className="font-medium text-[7px] md:text-base text-[#BABABA]">
            {text}
          </div>
          <div className="font-semibold text-xl md:text-4xl">
            {number}
          </div>
        </div>
      </div>
    </div>
  );
}
