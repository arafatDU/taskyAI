import { useLoaderData } from "react-router"
import Head from "@/components/Head"
import { Page, PageHeader, PageList, PageTitle } from "@/components/Page"
import TaskEmptyState from "@/components/TaskEmptyState"
import TopAppBar from "@/components/TopAppBar"
import { Models } from "appwrite"
import TaskCard from "@/components/TaskCard"



const CompletedTaskPage = () => {
  const { tasks } = useLoaderData<{ tasks: Models.DocumentList<Models.Document>}>();
  
  return (
    <>
      <Head title="Completed - TaskyAI" />

      <TopAppBar 
        title='Completed'
        taskCount={tasks.total}
      />

      <Page>
        <PageHeader>
          <PageTitle>Completed</PageTitle>
        </PageHeader>

        <PageList>
          {tasks.documents.map(
            ({ $id, content, completed, due_date, project }) => (
              <TaskCard
                key={$id}
                id={$id}
                content={content}
                completed={completed}
                dueDate={due_date}
                project={project}
                />
            )
          )}

          {!tasks.total && <TaskEmptyState type="completed" />}

        </PageList>
      </Page>
    </>
  )
}

export default CompletedTaskPage
