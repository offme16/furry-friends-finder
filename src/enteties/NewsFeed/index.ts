import { NewsFeedSchema } from "./model/type/type";
import { NewsFeedSliceReducer } from "./model/slice/NewsFeedSlice";
import { getNews } from "./model/service/getNews";
import { getNewsData } from "./model/selectors/getNewsData";
import { offsetNewsPage } from "./model/selectors/offsetNewsPage";
export {type NewsFeedSchema, NewsFeedSliceReducer, getNews, getNewsData, offsetNewsPage}