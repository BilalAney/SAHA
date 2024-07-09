/** @format */
import { useCallback, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";

const context = createContext();

const initialState = {
  data: {},
  filteredData: [],
  searchQuery: "",
  state: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "start_loading":
      return { ...state, state: `loading` };

    case "store_data":
      return {
        ...state,
        data: action.payload,
        state: "success",
      };

    case "set_failed":
      return { ...state, state: action.payload };

    case "set_query":
      return { ...state, searchQuery: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function ProjectsProvider({ children }) {
  const [{ data, state }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchProjects() {
      try {
        dispatch({ type: "start_loading" });

        const res = await fetch(`http://127.0.0.1:8000/fullData`);

        if (!res.ok) throw new Error("❌Unable to get the data, try again");

        const data = await res.json();

        dispatch({ type: "store_data", payload: data.data });
      } catch (e) {
        dispatch({ type: "set_failed", payload: e.message });
        console.error(e.message);
      }
    }
    fetchProjects();
  }, []);

  //TODO: Optimize the context. add the value to a useMemo before passing it.

  return (
    <context.Provider
      value={{
        data,
        state,
      }}
    >
      {children}
    </context.Provider>
  );
}

function useProjectsContext() {
  const contextValue = useContext(context);
  if (contextValue === undefined)
    throw new Error(
      "The useProjectsContext was called outside the ProjectsProvider provider component!"
    );
  return useCallback(contextValue, [contextValue]);
}

export { ProjectsProvider, useProjectsContext };
