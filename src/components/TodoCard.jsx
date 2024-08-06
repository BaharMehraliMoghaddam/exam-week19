import { useContext, useState } from "react";
import { ContentContext } from "../ContentContext";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
  
export default function TodoCard({ id, name, lastName, PhoneNum, relationShip, email}) {  
  const { refetch,setIsEdit } = useContext(ContentContext);   
  const queryClient = useQueryClient()
  const mutation = useMutation(
    (id) => axios.delete(`http://localhost:3000/users/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"])
      },
    }
  );

  const deleteTodo = (id) => {
    mutation.mutate(id);
  };


  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-md mx-auto mt-10">
        <div className="w-full px-3 py-2 border border-gray-300 rounded-md">
          <p>{name}</p>
          <p>{lastName}</p>
          <p>{PhoneNum}</p>
          <p>{relationShip}</p>
          <p>{email}</p>
        </div>
        <div className="flex justify-between mt-3 gap-3">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
          >
            حذف
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
            onClick={()=>setIsEdit({ id, name, lastName, PhoneNum, relationShip, email})}
          >
            ویرایش
          </button>
        </div>
      </div>
    </div>
  );
}