import { databases, Query } from "@/lib/appwrite";
import { getUserId } from "@/lib/utils";
import { startOfToday, startOfTomorrow } from "date-fns";
import type { LoaderFunction } from "react-router";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const getTasks = async () => {
  try {
    return await databases.listDocuments(
      APPWRITE_DATABASE_ID,
      "tasks_collection",
      [
        Query.equal('completed', false),   // Fetch only incomplete tasks
        Query.and([
          Query.greaterThanEqual('due_date', startOfToday().toISOString()),
          Query.lessThan('due_date', startOfTomorrow().toISOString())
        ]),
        Query.equal('userId', getUserId()),
      ]
    )
    
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error('Error getting inbox tasks');
  }
}

const todayTaskLoader: LoaderFunction = async () => {
  const tasks = await getTasks();
  // console.log("Today tasks:", tasks);

  return { tasks };
}

export default todayTaskLoader;