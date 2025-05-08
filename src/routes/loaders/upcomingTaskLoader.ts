import { databases, Query } from "@/lib/appwrite";
import { getUserId } from "@/lib/utils";
import { startOfToday } from "date-fns";
import type { LoaderFunction } from "react-router";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const getTasks = async () => {
  try {
    return await databases.listDocuments(
      APPWRITE_DATABASE_ID,
      "tasks_collection",
      [
        Query.equal('completed', false),
        Query.isNotNull('due_date'),
        Query.greaterThanEqual('due_date', startOfToday().toISOString()),
        Query.orderAsc('due_date'),
        Query.equal('userId', getUserId()),
      ]
    )
    
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error('Error getting upcoming tasks');
  }
}

const upcomingTaskLoader: LoaderFunction = async () => {
  const tasks = await getTasks();
  console.log("Upcoming tasks:", tasks);

  return { tasks };
}

export default upcomingTaskLoader;