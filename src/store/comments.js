import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    comments: [{ toBeField: true }]
}

export const getComments = createAsyncThunk("comments/getComments", async () => {
    try {
        const response = await axios.get(
            `http://${process.env.REACT_APP_DEV_API || document.domain}/comments`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

export const commentsSlice = createSlice(
    {
        name: "comments",
        initialState,
        reducers: {
            start: (state) => {
                state.comments = [{ toBeField: true }];
            }
        },
        extraReducers: (builder) => {
            builder
            .addCase(getComments.pending, (state) => {
                state.comments = [{ idle: true }];
            })
            .addCase(getComments.rejected, (state) => {
                state.comments = [{ error: "Something went wrong" }];
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
        }
    }
)

export const selectComments = (state) => state.comments.comments

export const { start } = commentsSlice.actions

export default commentsSlice.reducer