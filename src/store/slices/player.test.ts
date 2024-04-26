import { describe, expect, it } from "vitest";
import { next, play, player as playerReducer } from "./player";

const exempleState = {
  course: {
    modules: [
      {
        id: "1",
        title: "Iniciando com React",
        lessons: [
          { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
          {
            id: "w-DW4DhDfcw",
            title: "Estilização do Post",
            duration: "10:05",
          },
        ],
      },
      {
        id: "2",
        title: "Estrutura da aplicação",
        lessons: [
          {
            id: "gE48FQXRZ_o",
            title: "Componente: Comment",
            duration: "13:45",
          },
          { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
        ],
      },
    ],
    currentLesson: {
      moduleIndex: 0,
      lessonIndex: 0,
    },
  },
};

describe("player slice", () => {
  it("shoudl be able to play a lesson", () => {
    const lessonToPlay = {
      lessonIndex: 2,
      moduleIndex: 2,
    };

    const newState = playerReducer(exempleState, play(lessonToPlay));

    expect(newState.course.currentLesson.lessonIndex).toEqual(2);
    expect(newState.course.currentLesson.moduleIndex).toEqual(2);
  });

  it("should be able to play next lesson in the same module automatically", () => {
    const newState = playerReducer(exempleState, next());

    expect(newState.course.currentLesson.lessonIndex).toEqual(1);
    expect(newState.course.currentLesson.moduleIndex).toEqual(0);
  });

  it("should be able to play next lesson in next module if avaiable", () => {
    exempleState.course.currentLesson.lessonIndex = 1;
    exempleState.course.currentLesson.moduleIndex = 0;

    const newState = playerReducer(exempleState, next());

    expect(newState.course.currentLesson.lessonIndex).toEqual(0);
    expect(newState.course.currentLesson.moduleIndex).toEqual(1);
  });

  it("shoudl not be able to play next lesson automatically if there is not next lesson avaiable", () => {
    exempleState.course.currentLesson.lessonIndex = 1;
    exempleState.course.currentLesson.moduleIndex = 1;

    const newState = playerReducer(exempleState, next());

    expect(newState.course.currentLesson.lessonIndex).toEqual(1);
    expect(newState.course.currentLesson.moduleIndex).toEqual(1);
  });
});
