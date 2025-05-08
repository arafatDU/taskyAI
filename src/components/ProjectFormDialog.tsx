import { Dialog , DialogTrigger, DialogContent} from "@/components/ui/dialog"
import ProjectForm from "@/components/ProjectForm"

const ProjectFormDialog = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="p-0 border-0 !rounded-xl">
        <ProjectForm mode="create" />
      </DialogContent>
    </Dialog>
  )
}

export default ProjectFormDialog
