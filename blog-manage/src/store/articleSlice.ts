import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Article, ArticleListElement } from '../api/Article';

interface ArticleState {
  list: ArticleListElement[];
}

const initial: ArticleState = {
  list: []
};

export const articleSlice = createSlice({
  name: 'article',
  initialState: initial,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateArticleInfo.fulfilled, (state, action) => {
      return {
        list: action.payload
      };
    });
  }
});
export const updateArticleInfo = createAsyncThunk('article/updateArticleInfo', async (): Promise<ArticleListElement[]> => {
  return (await Article.getInfo()).data;
});
export const {} = articleSlice.actions;
export default articleSlice.reducer;
