import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
    isSidebarCollapsed: boolean,
    isDarkMode: boolean
}

const initialState: initialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload
        }
    },
})

export const { setIsSidebarCollapsed, setIsDarkMode } = themeSlice.actions
export default themeSlice.reducer