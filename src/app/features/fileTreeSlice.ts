import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  activeTabId: string | null;
  filename: string;
  fileContent: string | undefined;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToRemove: string | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    filename: "",
    fileContent: "",
  },
  tabIdToRemove: null,
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    // ** Actions
    setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setTabIdToRemoveAction: (state, action: PayloadAction<string>) => {
      state.tabIdToRemove = action.payload;
    },
  },
});

export const {
  setOpenedFilesAction,
  setClickedFileAction,
  setTabIdToRemoveAction,
} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
