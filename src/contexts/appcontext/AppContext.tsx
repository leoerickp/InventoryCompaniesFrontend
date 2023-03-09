import { createContext, useContext } from "react";
import { AppContent } from "../../types/app-content";

export const AppContext: React.Context<AppContent> = createContext<AppContent>({
  api: null,
  contextHolder: null,
  currentMenuOption: undefined,
  setCurrentMenuOption: undefined,
  errorNotification: undefined,
});

export const useAppContext = () => useContext(AppContext);
