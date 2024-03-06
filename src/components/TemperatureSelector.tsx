import styled from "styled-components";

import Button from "./shared/Button";
import { assistantTemperatureModes } from "@/constants";
import { AssistantTemperatureModes } from "@/modals";

interface TemperatureSelectorProps {
  temperatureValue: number;
  handleClick: (value: number) => void;
}

interface ContainerProps {
  temperatureValue: number;
}

const Container = styled.div<ContainerProps>`
  padding-left: 32px;

  button {
    color: #2c3e50;
    padding: 10px 12px;
    border: 1px solid #2c3e50;
  }

  button:nth-child(1) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background: ${(props) =>
      props.temperatureValue !== 0 ? "#fff" : "#2C3E50"};
    color: ${(props) => (props.temperatureValue !== 0 ? "#2C3E50" : "#fff")};
  }

  button:nth-child(2) {
    border-radius: 0px;
    border-left: none;
    border-right: none;
    background: ${(props) =>
      props.temperatureValue !== 1 ? "#fff" : "#2C3E50"};
    color: ${(props) => (props.temperatureValue !== 1 ? "#2C3E50" : "#fff")};
  }

  button:nth-child(3) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background: ${(props) =>
      props.temperatureValue !== 2 ? "#fff" : "#2C3E50"};
    color: ${(props) => (props.temperatureValue !== 2 ? "#2C3E50" : "#fff")};
  }
`;

const TemperatureSelector = ({
  temperatureValue,
  handleClick,
}: TemperatureSelectorProps) => {
  return (
    <Container temperatureValue={temperatureValue}>
      {assistantTemperatureModes.map((tempModes: AssistantTemperatureModes) => {
        return (
          <Button
            key={tempModes.tempTitle}
            title={tempModes.tempTitle}
            handleClick={() => handleClick(tempModes.tempValue)}
          />
        );
      })}
    </Container>
  );
};

export default TemperatureSelector;
