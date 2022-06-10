import { createStore, applyMiddleware } from "redux";
import { rootReducers } from "./modules";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
); //여러개의 미들웨어를 적용 할 수 있습니다.
