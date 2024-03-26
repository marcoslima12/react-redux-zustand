import ReactPlayer from "react-player";

import {
  MainContent,
  Wrapper,
  Modules,
  VideoClass,
} from "./style";
import { Module } from "../../components/Module";

export function Player() {
  return (
    <Wrapper>
      <MainContent>
        <VideoClass>
          <ReactPlayer
            controls
            width={"100%"}
            height={"100%"}
            url={"https://www.youtube.com/watch?v=VwEOzD4_SGI"}
          />
        </VideoClass>
        <Modules>
          <Module
            classesAmount={5}
            moduleTitle="A base do redux"
            index={1}
            timeTotal="40"
          />
          <Module
            classesAmount={5}
            moduleTitle="A base do redux 2 "
            index={2}
            timeTotal="50"
          />
        </Modules>
      </MainContent>
    </Wrapper>
  );
}
