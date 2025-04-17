import type { ActionFunction } from "react-router";
import type { Task } from "@/types";

const createTask = async (data: Task) => {
  try {
    console.log("Creating task:", data);
    
  } catch (error) {
    console.error("Error creating task:", error);
  }
}


const appAction: ActionFunction = async ({ request }) => {
  const data = await request.json() as Task;
  // console.log(data);

  if ( request.method === 'POST' ) {
    return await createTask(data);
  }
}


export default appAction;