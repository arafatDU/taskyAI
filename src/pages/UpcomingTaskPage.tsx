import { useLoaderData } from "react-router"
import Head from "@/components/Head"
import { Page, PageHeader, PageList, PageTitle } from "@/components/Page"
import TaskEmptyState from "@/components/TaskEmptyState"
import TopAppBar from "@/components/TopAppBar"
import { Models } from "appwrite"
import TaskCard from "@/components/TaskCard"
import { CheckCircle2 } from "lucide-react"



const UpcomingTaskPage = () => {
  const { tasks } = useLoaderData<{ tasks: Models.DocumentList<Models.Document>}>();
  
  return (
    <>
      <Head title="Upcoming - TaskyAI" />

      <TopAppBar 
        title='Upcoming'
        taskCount={tasks.total}
      />

      <Page>
        <PageHeader>
          <PageTitle>Upcoming</PageTitle>
          {tasks.total >0 && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CheckCircle2 size={16} /> {tasks.total} tasks
            </div>
          )}
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

          {!tasks.total && <TaskEmptyState type="upcoming" />}

        </PageList>
      </Page>
    </>
  )
}

export default UpcomingTaskPage
