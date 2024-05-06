import ReactPlayer from "react-player";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";

import {
  MainContent,
  Wrapper,
  Modules,
  VideoClass,
  PageHeaderContainer,
  SkeletonContainer,
  SkeletonContent,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const PageHeader = () => {
    return (
      <PageHeaderContainer>
        {modules ? (
          <>
            <h1>{modules[moduleIndex].title}</h1>
            <h2>{modules[moduleIndex].lessons[lessonIndex].title}</h2>
          </>
        ) : (
          <>
            <Skeleton variant="text" width={400} sx={{ fontSize: "50px" }} />
            <Skeleton variant="text" width={300} sx={{ fontSize: "50px" }} />
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
            <CircularProgress size={150} color="inherit" />
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
          {isLoading ? (
            <>
              <SkeletonContainer>
                <Skeleton variant="circular" width={50} height={50} />
                <SkeletonContent>
                  <Skeleton
                    variant="text"
                    width={150}
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    variant="text"
                    width={100}
                    sx={{ fontSize: "0.75rem" }}
                  />
                </SkeletonContent>
              </SkeletonContainer>
              <SkeletonContainer>
                <Skeleton variant="circular" width={50} height={50} />
                <SkeletonContent>
                  <Skeleton
                    variant="text"
                    width={150}
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    variant="text"
                    width={100}
                    sx={{ fontSize: "0.75rem" }}
                  />
                </SkeletonContent>
              </SkeletonContainer>
              <SkeletonContainer>
                <Skeleton variant="circular" width={50} height={50} />
                <SkeletonContent>
                  <Skeleton
                    variant="text"
                    width={150}
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    variant="text"
                    width={100}
                    sx={{ fontSize: "0.75rem" }}
                  />
                </SkeletonContent>
              </SkeletonContainer>
            </>
          ) : (
            modules &&
            modules.map((module, index) => {
              return (
                <Module
                  key={index}
                  classesAmount={module.lessons.length}
                  index={index}
                  moduleTitle={module.title}
                />
              );
            })
          )}
        </Modules>
      </MainContent>
    </Wrapper>
  );
}
