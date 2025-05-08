import { databases, Query } from "@/lib/appwrite";
import { getUserId } from "@/lib/utils";
import type { LoaderFunction } from "react-router";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const getTasks = async () => {
  try {
    return await databases.listDocuments(
      APPWRITE_DATABASE_ID,
      "tasks_collection",
      [
        Query.equal('completed', true),
        Query.orderDesc('due_date'),
        Query.equal('userId', getUserId()),
      ]
    )
    
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error('Error getting completed tasks');
  }
}

const completedTaskLoader: LoaderFunction = async () => {
  const tasks = await getTasks();
  console.log("Completed tasks:", tasks);

  return { tasks };
}

export default completedTaskLoader;