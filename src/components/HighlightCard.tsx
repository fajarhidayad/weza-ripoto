import React from "react";

interface HighlightCardProps {
  title: string;
  subtitle: string | number | undefined;
  measure: string;
  children?: React.ReactNode;
}

const HighlightCard: React.FC<HighlightCardProps> = (props) => {
  return (
    <div className="bg-primary py-5 flex flex-col items-center justify-between">
      <h3 className="font-medium mb-2">{props.title}</h3>
      <h2 className="font-bold text-6xl mb-5">
        {props.subtitle}
        <span className="font-medium text-4xl">{props.measure}</span>
      </h2>
      {props.children}
    </div>
  );
};

export default HighlightCard;
