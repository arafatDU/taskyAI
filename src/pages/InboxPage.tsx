import Head from "@/components/Head"
import { Page, PageHeader, PageList, PageTitle } from "@/components/Page"
import TopAppBar from "@/components/TopAppBar"

const InboxPage = () => {
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
          
        </PageList>
      </Page>
    </>
  )
}

export default InboxPage
