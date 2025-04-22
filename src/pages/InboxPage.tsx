import { useState } from "react"
import { useFetcher } from "react-router"
import Head from "@/components/Head"
import { Page, PageHeader, PageList, PageTitle } from "@/components/Page"
import TaskCreateButton from "@/components/TaskCreateButton"
import TaskEmptyState from "@/components/TaskEmptyState"
import TaskForm from "@/components/TaskForm"
import TopAppBar from "@/components/TopAppBar"

const InboxPage = () => {
  const fetcher = useFetcher();
  const [taskFormShow, setTaskFormShow] = useState(false);
  
  return (
    <>
      <Head title="Inbox - TaskyAI" />

      <TopAppBar 
        title='Inbox'
        taskCount={20}
      />

      <Page>
        <PageHeader>
          <PageTitle>Inbox</PageTitle>
        </PageHeader>

        <PageList>
          {!taskFormShow && <TaskCreateButton onClick={() => setTaskFormShow(true)} />}

          {!taskFormShow && <TaskEmptyState type="inbox" />}

          {taskFormShow && (
            <TaskForm 
              className='mt-1'
              mode="create" 
              onCancel={() => setTaskFormShow(false)}
              onSubmit={(formData) => {
                fetcher.submit(JSON.stringify(formData), {
                  action: '/app',
                  method: 'POST',
                  encType: 'application/json',
                });
              }}
            />
          )}
        </PageList>
      </Page>
    </>
  )
}

export default InboxPage
