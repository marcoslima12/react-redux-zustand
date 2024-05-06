import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UseAppSelector } from "..";
import { api } from "../../lib/services";

type PayloadType = {
  lessonIndex: number;
  moduleIndex: number;
};

interface Course {
  id: number;
  modules: Array<{
    id: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
    }>;
  }>;
}

export interface PlayerState {
  course: Course | null;
  currentLesson: {
    moduleIndex: number;
    lessonIndex: number;
  };
  isLoading: boolean;
}

const initialState: PlayerState = {
  course: null,
  currentLesson: {
    lessonIndex: 0,
    moduleIndex: 0,
  },
  isLoading: true,
};

export const loadCourse = createAsyncThunk("player/load", async () => {
  try {
    // Simular um atraso de 5 segundos
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await api.get("/courses/1");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action: PayloadAction<PayloadType>) => {
      if (state.course) {
        state.currentLesson.lessonIndex = action.payload.lessonIndex;
        state.currentLesson.moduleIndex = action.payload.moduleIndex;
      }
    },
    next: (state) => {
      if (state.course) {
        const nextClassIndex = state.currentLesson.lessonIndex + 1;
        const nextClass =
          state.course.modules[state.currentLesson.moduleIndex].lessons[
            nextClassIndex
          ];
        if (nextClass) {
          state.currentLesson.lessonIndex = nextClassIndex;
        } else {
          const nextModuleIndex = state.currentLesson.moduleIndex + 1;
          const nextModule = state.course.modules[nextModuleIndex];
          if (nextModule) {
            state.currentLesson.lessonIndex = 0;
            state.currentLesson.moduleIndex = nextModuleIndex;
          }
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course = action.payload;
      state.isLoading = false;
    });

    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const player = playerSlice.reducer;
export const { play, next } = playerSlice.actions;

export const useCurrentLesson = () => {
  return UseAppSelector((state) => {
    return state.player.currentLesson;
  });
};
