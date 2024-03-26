import { CaretDown } from "@phosphor-icons/react";
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

interface ModuleProps {
  moduleTitle: string;
  index: number;
  classesAmount: number;
  timeTotal: string;
}

export const Module = ({ classesAmount, index, moduleTitle }: ModuleProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ModuleContainer onClick={() => setOpen(!open)}>
      <StyledTrigger>
        <ModuleDesc /*  open={open} */>
          <StyledIndex>{index}</StyledIndex>
          <StyledDesc>
            {" "}
            <h2>{moduleTitle}</h2>
            <span>{classesAmount} aulas</span>
          </StyledDesc>
          <CaretDown className="icon-caret" size={25} color="#D7D7D9" />
        </ModuleDesc>
      </StyledTrigger>
      <Collapsible.Content>
        <Class classTitle="Construindo a base UI" timeAmount="00:08:02" />
        <Class classTitle="Botão com Radix" timeAmount="00:05:02" />
        <Class classTitle="última aula" timeAmount="00:48:02" />
      </Collapsible.Content>
    </ModuleContainer>
  );
};
