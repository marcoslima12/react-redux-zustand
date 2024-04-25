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
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../../store/slices/player";
import { useEffect } from "react";

export function Player() {
  const modules = UseAppSelector((state) => {
    return state.player.course.modules;
  });

  const { lessonIndex, moduleIndex } = useCurrentLesson();

  const dispatch = useDispatch();

  const playNextClass = () => {
    dispatch(next());
  };

  const Header = () => {
    return (
      <HeaderContainer>
        <h1>{modules[moduleIndex].title}</h1>
        <h2>{modules[moduleIndex].lessons[lessonIndex].title}</h2>
      </HeaderContainer>
    );
  };

  useEffect(() => {
    document.title = `${modules[moduleIndex].lessons[lessonIndex].title}`;
  }, [lessonIndex, moduleIndex, modules]);

  return (
    <Wrapper>
      <Header />
      <MainContent>
        <VideoClass>
          <ReactPlayer
            controls
            width={"100%"}
            height={"100%"}
            onEnded={playNextClass}
            playing
            url={`https://www.youtube.com/watch?v=${modules[moduleIndex].lessons[lessonIndex].id}`}
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
