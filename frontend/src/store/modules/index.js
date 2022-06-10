// 합쳐진 리듀서 루트 리듀서

import { notes } from "./notes";
import { combineReducers } from "redux";
// combineReducers: 리듀서를 합치는 작업

export const rootReducers = combineReducers({ notes });
