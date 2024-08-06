import { useContext } from "react";
import { ContentContext } from "../ContentContext";
import SearchContent from "./SearchContent";
import AddContentsForm from "./AddTodo";

export default function ManageContents() {
  const { contents } = useContext(ContentContext);

  return (
    <>
      <div className="m-4">
      <AddContentsForm/>
      </div>
      <div className="m-4">
        <SearchContent/>
      </div>
      <div className="flex flex-col items-center justify-center m-4">
        
      </div>
    </>
  );
}