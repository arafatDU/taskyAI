import { cn } from "@/lib/utils"
import { useState, useEffect, useCallback } from "react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from '@/components/ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"


import { Circle, ChevronDown, Check , Bot } from "lucide-react"

import { PROJECT_COLORS } from "@/constants"



import type { Project, ProjectForm } from "@/types"


const DEFAULT_PROJECT_NAME = 'Untitled';
const DEFAULT_PROJECT_COLOR_NAME = 'Slate';
const DEFAULT_PROJECT_COLOR_HEX = '#64748b';

const DEFAULT_FORM_DATA: Project = {
  id: null,
  name: DEFAULT_PROJECT_NAME,
  color_name: DEFAULT_PROJECT_COLOR_NAME,
  color_hex: DEFAULT_PROJECT_COLOR_HEX,
};


type ProjectFormProps = {
  defaultFormData?: ProjectForm;
  mode: "create" | "edit";
  onCancel?: () => void;
  onSubmit?: (formData: ProjectForm) => void;
}

const ProjectForm : React.FC<ProjectFormProps> = ({
  defaultFormData = DEFAULT_FORM_DATA,
  mode,
  onCancel = () => {},
  onSubmit
}) => {

  const [projectName, setProjectName] = useState<string>(defaultFormData.name);
  const [projectNameCharCount, setProjectNameCharCount] = useState<number>(defaultFormData.name.length);

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>
          {mode === "create" ? "Add Project" : "Edit"}
        </CardTitle>
      </CardHeader>

      <Separator />

      <CardContent>
        <div className="">
          <Label htmlFor="project_name" className="">Name</Label>
        

          <Input
            id="project_name"
            name="project_name"
            type="text"
            className="mt-2 mb-1"
            onInput={(e) => {
              setProjectName(e.currentTarget.value);
              setProjectNameCharCount(e.currentTarget.value.length);
            }}
            value={projectName}
            maxLength={120}
          />

          <div className={cn("text-xs text-muted-foreground max-w-max ms-auto",
              projectNameCharCount >= 110 && 'text-destructive',
          )}>
            {projectNameCharCount} / 120
          </div>
        </div>

        <div>
          <Label htmlFor="color">Color</Label>

        
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectForm
