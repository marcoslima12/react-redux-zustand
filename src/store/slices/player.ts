import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UseAppSelector } from "..";

type PayloadType = {
  lessonIndex: number;
  moduleIndex: number;
}

const playerSlice = createSlice({
  name: "player",
  initialState: {
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
            {
              id: "D83-55LUdKE",
              title: "Componente: Header",
              duration: "06:33",
            },
            {
              id: "W_ATsETujaY",
              title: "Componente: Sidebar",
              duration: "09:12",
            },
            { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
            {
              id: "8KBq2vhwbac",
              title: "Form de comentários",
              duration: "11:34",
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
            {
              id: "h5JA3wfuW1k",
              title: "Interações no JSX",
              duration: "06:33",
            },
            {
              id: "1G0vSTqWELg",
              title: "Utilizando estado",
              duration: "09:12",
            },
          ],
        },
        {
          id: "3",
          title: "Desenvolvimento Backend",
          lessons: [
            {
              id: "gE48FQXRZ_o",
              title: "Componente: Comment",
              duration: "13:45",
            },
            { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
            {
              id: "h5JA3wfuW1k",
              title: "Interações no JSX",
              duration: "06:33",
            },
            {
              id: "1G0vSTqWELg",
              title: "Utilizando estado",
              duration: "09:12",
            },
          ],
        },
        {
          id: "4",
          title: "Gestão de Projetos",
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
  },
  reducers: {
    play: (state, action: PayloadAction<PayloadType>) => {
      state.course.currentLesson.lessonIndex = action.payload.lessonIndex;
      state.course.currentLesson.moduleIndex = action.payload.moduleIndex;
    },
    next: (state) => {
      const nextClassIndex = state.course.currentLesson.lessonIndex + 1;
      const nextClass = state.course.modules[state.course.currentLesson.moduleIndex].lessons[nextClassIndex];
      if(nextClass){
        state.course.currentLesson.lessonIndex = nextClassIndex;
      } else {
        const nextModuleIndex = state.course.currentLesson.moduleIndex + 1;
        const nextModule = state.course.modules[nextModuleIndex];
        if(nextModule){
          state.course.currentLesson.lessonIndex = 0;
          state.course.currentLesson.moduleIndex = nextModuleIndex;
        }
      }
    }
  },
});

export const player = playerSlice.reducer;
export const { play, next } = playerSlice.actions;


export const useCurrentLesson = () => {
  return UseAppSelector((state) => {
    return state.player.course.currentLesson;
  });
}