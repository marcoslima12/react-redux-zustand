import { VideoCamera } from "@phosphor-icons/react";
import { ClassContainer, ClassName } from "./styles";

interface ClassProps {
  classTitle: string;
  timeAmount: string;
}

export const Class = ({ classTitle, timeAmount }: ClassProps) => {
  return (
    <ClassContainer>
      <VideoCamera size={20} color="#D7D7D9" />
      <ClassName>{classTitle}</ClassName>
      <span>{timeAmount}</span>
    </ClassContainer>
  );
};
