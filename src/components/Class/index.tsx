import { PlayCircle, VideoCamera } from "@phosphor-icons/react";
import { ClassContainer, ClassName } from "./styles";
import { useDispatch } from "react-redux";
import { play, useCurrentLesson } from "../../store/slices/player";
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
