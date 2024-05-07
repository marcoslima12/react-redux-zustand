import { PlayCircle, VideoCamera } from "@phosphor-icons/react";
import { ClassContainer, ClassName } from "./styles";
import { play, useCurrentLesson } from "../../store/slices/player";
import { useEffect, useState } from "react";
import { isCurrentCss, isFinishedLessonCss } from "./styles";
import { useAppDispatch } from "../../store";

interface ClassProps {
  classTitle: string;
  timeAmount: string;
  moduleIndex: number;
  lessonIndex: number;
  isFinished: boolean;
}

export const Class = ({
  classTitle,
  timeAmount,
  moduleIndex,
  lessonIndex,
  isFinished,
}: ClassProps) => {
  const dispatch = useAppDispatch();

  const [isCurrent, setIsCurrent] = useState(false);

  const handlePlayClass = () => {
    dispatch(play({ moduleIndex, lessonIndex }));
  };

  const { lessonIndex: currentLessonIndex, moduleIndex: currentModuleIndex } =
    useCurrentLesson();

  useEffect(() => {
    if (
      currentModuleIndex === moduleIndex &&
      currentLessonIndex === lessonIndex
    ) {
      setIsCurrent(true);
    } else {
      setIsCurrent(false);
    }
  }, [moduleIndex, lessonIndex, currentModuleIndex, currentLessonIndex]);

  return (
    <ClassContainer
      className={
        isCurrent ? isCurrentCss() : isFinished ? isFinishedLessonCss() : ""
      }
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
