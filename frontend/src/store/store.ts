import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./slices/auth.slice";

const store = configureStore({ 
    reducer: {
        auth: authReducer
    }
 })

export type RootState = ReturnType<typeof store.getState>; //מייצג כולל של כל הסטייט שלי ברידקס
export type AppDisptach = typeof store.dispatch; // מייצג של כלל הactions ברידקס

export const useAppDispatch = () => useDispatch<AppDisptach>(); //פונקציה שמחזירה useDsipatch עם כלל הפונקציות ברידקס
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //גררסא מותאמת של useSelector לפי הטייפים שיש לי ברידקס

export default store;