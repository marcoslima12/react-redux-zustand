import ReactPlayer from "react-player";

import {
  MainContent,
  Wrapper,
  Modules,
  VideoClass,
  PageHeaderContainer,
} from "./style";
import { Module } from "../../components/Module";
import { UseAppSelector, useAppDispatch } from "../../store";
import { loadCourse, next, useCurrentLesson } from "../../store/slices/player";
import { useEffect } from "react";
import { Header } from "../../components/Header";

export function Player() {
  const modules = UseAppSelector((state) => {
    return state.player.course?.modules;
  });

  const isLoading = UseAppSelector((state) => state.player.isLoading);

  const { lessonIndex, moduleIndex } = useCurrentLesson();

  const dispatch = useAppDispatch();

  const playNextClass = () => {
    dispatch(next());
  };

  useEffect(() => {
    dispatch(loadCourse());
  }, []);

  const PageHeader = () => {
    return (
      <PageHeaderContainer>
        {modules && (
          <>
            <h1>{modules[moduleIndex].title}</h1>
            <h2>{modules[moduleIndex].lessons[lessonIndex].title}</h2>
          </>
        )}
      </PageHeaderContainer>
    );
  };

  useEffect(() => {
    if (modules) {
      document.title = `${modules[moduleIndex].lessons[lessonIndex].title}`;
    }
  }, [lessonIndex, moduleIndex, modules]);

  return (
    <Wrapper>
      <Header />
      <PageHeader />
      <MainContent>
        <VideoClass>
          {isLoading ? (
            <div>
              <h1>LOADING</h1>
            </div> // adicionar um loading legal aqui
          ) : (
            <ReactPlayer
              controls
              width={"100%"}
              height={"100%"}
              onEnded={playNextClass}
              playing
              url={
                modules &&
                `https://www.youtube.com/watch?v=${modules[moduleIndex].lessons[lessonIndex].id}`
              }
            />
          )}
        </VideoClass>
        <Modules>
          {modules &&
            modules.map((module, index) => {
              return (
                <Module
                  key={index}
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
