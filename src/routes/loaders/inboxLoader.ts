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
        Query.equal('completed', false),
        Query.isNull('project'),
        Query.equal('userId', getUserId()),
      ]
    )
    
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error('Error getting inbox tasks');
  }
}

const inboxTaskLoader: LoaderFunction = async () => {
  const tasks = await getTasks();
  console.log("Inbox tasks:", tasks);

  return { tasks };
}

export default inboxTaskLoader;