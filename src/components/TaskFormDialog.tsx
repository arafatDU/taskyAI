import type { PropsWithChildren } from "react"
import { useState, useEffect } from "react"
import { useLocation, useFetcher } from "react-router"
import { startOfToday } from "date-fns"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import TaskForm from "@/components/TaskForm"
import { set } from "date-fns"

const TaskFormDialog: React.FC<PropsWithChildren> = ({ children }) => {
  
  const location = useLocation();
  const fetcher = useFetcher();
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="p-0 border-0 !rounded-xl">
        <TaskForm
          defaultFormData={{
            content: '',
            due_date: location.pathname === '/app/today' ? startOfToday() : null,
            project: null,
          }}
          mode="create"
          onCancel={() => setOpen(false)}
          onSubmit={(formData) => {
            fetcher.submit(JSON.stringify(formData), 
              {
                action: '/app',
                method: 'POST',
                encType: 'application/json',
              }
            )
            setOpen(false)
          }}
        />
      </DialogContent>
    </Dialog>
  )
}

export default TaskFormDialog
