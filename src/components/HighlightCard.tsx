import React from "react";

interface HighlightCardProps {
  children: React.ReactNode;
}

const HighlightCard = ({ children }: HighlightCardProps) => {
  return (
    <div className="bg-main p-5 flex flex-col justify-between items-center">
      {children}
    </div>
  );
};

export default HighlightCard;
