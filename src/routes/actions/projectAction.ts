import { redirect, type ActionFunction } from "react-router";
import type { ProjectForm } from "@/types";
import { Models } from "appwrite";

import { databases } from "@/lib/appwrite";
import { generateID, getUserId } from "@/lib/utils";


const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const createProject = async (data: ProjectForm) => {
  let project: Models.Document | null = null;


  try {
    project = await databases.createDocument(
      APPWRITE_DATABASE_ID,
      'projects_collection',
      generateID(),
      {
        name: data.name,
        color_name: data.color_name,
        color_hex: data.color_hex,
        userId: getUserId()
      }
    );
  }
  catch (error) {
    console.error("Error creating project:", error);
  }

  return redirect(`/app/projects/${project?.$id}`);
}

const projectAction: ActionFunction = async ({ request }) => {
  const method = request.method;
  const data = await request.json() as ProjectForm;

  if ( method === "POST" ) {
    return await createProject(data);
  }

  return null;
}

export default projectAction;