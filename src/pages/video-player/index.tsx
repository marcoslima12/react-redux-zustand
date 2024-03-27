import ReactPlayer from "react-player";

import {
  MainContent,
  Wrapper,
  Modules,
  VideoClass,
  HeaderContainer,
} from "./style";
import { Module } from "../../components/Module";
import { UseAppSelector } from "../../store";

export function Player() {
  const modules = UseAppSelector((state) => {
    return state.player.course.modules;
  });

  const currentLesson = UseAppSelector((state) => {
    return state.player.course.currentLesson;
  });

  const Header = () => {
    return (
      <HeaderContainer>
        <h1>{modules[currentLesson.moduleIndex].title}</h1>
        <h2>
          {
            modules[currentLesson.moduleIndex].lessons[
              currentLesson.lessonIndex
            ].title
          }
        </h2>
      </HeaderContainer>
    );
  };

  return (
    <Wrapper>
      <Header />
      <MainContent>
        <VideoClass>
          <ReactPlayer
            controls
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${
              modules[currentLesson.moduleIndex].lessons[
                currentLesson.lessonIndex
              ].id
            }`}
          />
        </VideoClass>
        <Modules>
          {modules.map((module, index) => {
            return (
              <Module
                classesAmount={module.lessons.length}
                index={index}
                moduleTitle={module.title}
              />
            );
          })}
        </Modules>
      </MainContent>
    </Wrapper>
  );
}
