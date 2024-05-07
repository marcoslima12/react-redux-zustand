import { CaretDown, CaretUp } from "@phosphor-icons/react";
import * as Collapsible from "@radix-ui/react-collapsible";

import {
  ModuleContainer,
  StyledTrigger,
  ModuleDesc,
  StyledIndex,
  StyledDesc,
} from "./styles";
import { Class } from "../Class";
import { useState } from "react";
import { UseAppSelector } from "../../store";

interface ModuleProps {
  moduleTitle: string;
  index: number;
  classesAmount: number;
}

export const Module = ({ classesAmount, index, moduleTitle }: ModuleProps) => {
  const [open, setOpen] = useState(index != 0 ? true : false);

  const lessons = UseAppSelector((state) => {
    return state.player.course?.modules[index].lessons;
  });
  console.log(lessons);

  return (
    <ModuleContainer>
      <StyledTrigger onClick={() => setOpen(!open)}>
        <ModuleDesc>
          <StyledIndex>{index}</StyledIndex>
          <StyledDesc>
            {" "}
            <h2>{moduleTitle}</h2>
            <span>{classesAmount} aulas</span>
          </StyledDesc>
          {!open ? (
            <CaretDown className="icon-caret" size={25} color="#D7D7D9" />
          ) : (
            <CaretUp className="icon-caret" size={25} color="#D7D7D9" />
          )}
        </ModuleDesc>
      </StyledTrigger>
      <Collapsible.Content>
        {lessons &&
          lessons.map((lesson, lessonIndex) => (
            <Class
              classTitle={lesson.title}
              timeAmount={lesson.duration}
              key={lesson.id}
              moduleIndex={index}
              lessonIndex={lessonIndex}
              isFinished={lesson.isFinished}
            />
          ))}
      </Collapsible.Content>
    </ModuleContainer>
  );
};
