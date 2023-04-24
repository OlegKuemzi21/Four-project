import { useDispatch } from "react-redux";
import { clothesActions } from "./clothes.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  ...clothesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
