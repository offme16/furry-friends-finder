import { NewsFeedSchema } from "./model/type/type";
import { NewsFeedSliceReducer } from "./model/slice/NewsFeedSlice";
import { getNews } from "./model/service/getNews";

export {type NewsFeedSchema, NewsFeedSliceReducer, getNews}