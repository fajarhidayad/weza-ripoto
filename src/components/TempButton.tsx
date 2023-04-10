import React from "react";

interface TempButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  active: boolean;
}

export const TempButton: React.FC<TempButtonProps> = ({
  onPress,
  children,
  active,
}) => {
  return (
    <button
      onClick={onPress}
      className={
        (active ? "bg-greyw text-[#110E3C]" : "bg-[#585676] text-greyw") +
        ` font-bold w-10 h-10 text-lg rounded-full`
      }
    >
      {children}
    </button>
  );
};
