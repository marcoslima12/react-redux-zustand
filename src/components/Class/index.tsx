import { PlayCircle, VideoCamera } from "@phosphor-icons/react";
import { ClassContainer, ClassName } from "./styles";
import { useDispatch } from "react-redux";
import { play } from "../../store/slices/player";
import { UseAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { isCurrentCss } from "./styles";

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

  const [isCurrent, setIsCurrent] = useState(false);

  const handlePlayClass = () => {
    dispatch(play({ moduleIndex, lessonIndex }));
  };

  const currentLesson = UseAppSelector((state) => {
    return state.player.course.currentLesson;
  });

  useEffect(() => {
    if (
      currentLesson.moduleIndex === moduleIndex &&
      currentLesson.lessonIndex === lessonIndex
    ) {
      setIsCurrent(true);
    } else {
      setIsCurrent(false);
    }
  }, [
    moduleIndex,
    lessonIndex,
    currentLesson.moduleIndex,
    currentLesson.lessonIndex,
  ]);

  return (
    <ClassContainer
      className={isCurrent ? isCurrentCss() : ""}
      onClick={handlePlayClass}
    >
      {isCurrent ? (
        <PlayCircle size={20} color="#D7D7D9" />
      ) : (
        <VideoCamera size={20} color="#D7D7D9" />
      )}
      <ClassName isCurrentName={isCurrent}>{classTitle}</ClassName>
      <span>{timeAmount}</span>
    </ClassContainer>
  );
};
