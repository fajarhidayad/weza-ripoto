import React from "react";

type MeasurementType = "C" | "F";

interface MeasurementContextType {
  measurement: MeasurementType;
  changeMeasurement: (type: MeasurementType) => void;
}

export const MeasurementContext = React.createContext<
  MeasurementContextType | undefined
>(undefined);

interface MeasurementContextProviderProps {
  children: React.ReactNode;
}

const MeasurementContextProvider: React.FC<MeasurementContextProviderProps> = (
  props
) => {
  const [measurement, setMeasurement] = React.useState<MeasurementType>("C");

  const changeMeasurement = (type: MeasurementType) => {
    setMeasurement(type);
  };

  return (
    <MeasurementContext.Provider value={{ measurement, changeMeasurement }}>
      {props.children}
    </MeasurementContext.Provider>
  );
};

export default MeasurementContextProvider;
