import { VideoCamera } from "@phosphor-icons/react";
import { ClassContainer, ClassName } from "./styles";
import { useDispatch } from "react-redux";
import { play } from "../../store/slices/player";

interface ClassProps {
  classTitle: string;
  timeAmount: string;
  moduleIndex: number;
  lessonIndex: number;
}

export const Class = ({
  classTitle,
  timeAmount,
  moduleIndex,
  lessonIndex,
}: ClassProps) => {
  const dispatch = useDispatch();

  const handlePlayClass = () => {
    dispatch(play({ moduleIndex, lessonIndex }));
  };

  return (
    <ClassContainer onClick={handlePlayClass}>
      <VideoCamera size={20} color="#D7D7D9" />
      <ClassName>{classTitle}</ClassName>
      <span>{timeAmount}</span>
    </ClassContainer>
  );
};
