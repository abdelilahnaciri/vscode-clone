import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  fileContent: string | undefined;
}

interface IInitialState {
  activeTabId: string | null;
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  activeTabId: null,
  openedFiles: [],
  clickedFile: {
    filename: "",
    fileContent: "",
  },
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
    setActiveTabIdAction: (state, action: PayloadAction<string>) => {
      state.activeTabId = action.payload;
    },
  },
});

export const {
  setOpenedFilesAction,
  setClickedFileAction,
  setActiveTabIdAction,
} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
