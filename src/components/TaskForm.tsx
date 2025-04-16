import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
  CommandGroup
} from '@/components/ui/command'
import { ScrollArea } from '@/components/ui/scroll-area'

import { CalendarIcon, Inbox, X, ChevronDown, Hash, SendHorizonal } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

import type { ClassValue } from 'clsx'
import type { TaskForm } from '@/types'


type TaskFormProps = {
  defaultFormData?: TaskForm;
  className?: ClassValue;
  mode: 'create' | 'edit';
  onCancel?: () => void;
  onSubmit?: (formData: TaskForm) => void;
}

const DEFAULT_FORM_DATA: TaskForm = {
  content: '',
  due_date: null,
  project: null
}

const TaskForm: React.FC<TaskFormProps> = ({
  defaultFormData = DEFAULT_FORM_DATA,
  className,
  mode,
  onCancel,
  onSubmit
}) => {

  const [taskContent, setTaskContent] = useState(defaultFormData.content);
  const [dueDate, setDueDate] = useState(defaultFormData.due_date);
  const [projectId, setProjectId] = useState(defaultFormData.project); // projectId to project
  const [projectName, setProjectName] = useState('');
  const [projectColorHex, setProjectColorHex] = useState('');

  const [dueDateOpen, setDueDateOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const [formData, setFormData] = useState(defaultFormData);

  console.log(taskContent);

  return (
    <Card className='focus:focus-within:border-foreground/30'>
      <CardContent className='p-2'>
        <Textarea 
          className='!border-0 !ring-0 mb-2 p-1'
          placeholder='After finishing the project, Take a Tour'
          autoFocus
          value={taskContent}
          onInput={(e) => setTaskContent(e.currentTarget.value)}
        />
        <div className="ring-1 ring-border rounded-md max-w-max">
          <Popover
            open={dueDateOpen}
            onOpenChange={setDueDateOpen}
          >
            <PopoverTrigger asChild>
              <Button 
                type='button'
                variant='ghost'
                size='sm'
              >
                <CalendarIcon /> 

                {dueDate ? new Date(dueDate).toDateString() : 'Due Date' }
              </Button>
            </PopoverTrigger>

            <PopoverContent className='w-auto p-0'>
              <Calendar 
                mode='single'
                disabled={{ before: new Date() }}
                initialFocus
                onSelect={(selected) => {
                  setDueDate(selected || null);
                  setDueDateOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='sm'
                className='px-2 -ms-2'
                aria-label='Remove Due Date'
              >
                <X />
              </Button>
            </TooltipTrigger>
          </Tooltip>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className='flex items-center justify-between p-2'>
        <Popover modal>
          <PopoverTrigger asChild>
            <Button
              variant='ghost'
              role='combobox'
              aria-expanded={false}
              className='max-w-max'
            >
              <Inbox /> Inbox <ChevronDown />
            </Button>
          </PopoverTrigger>

          <PopoverContent className='w-[240px] p-0' align='start'>
            <Command>
              <CommandInput placeholder="Search project..." />

              <CommandList>
                <ScrollArea>
                  <CommandEmpty>No project found.</CommandEmpty>

                  <CommandGroup>
                    <CommandItem>
                      <Hash /> Project 1
                    </CommandItem>

                    <CommandItem>
                      <Hash /> Project 2
                    </CommandItem>

                    <CommandItem>
                      <Hash /> Project 3
                    </CommandItem>

                    <CommandItem>
                      <Hash /> Project 4
                    </CommandItem>

                    <CommandItem>
                      <Hash /> Project 5
                    </CommandItem>
                  </CommandGroup>
                </ScrollArea>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <div className="flex items-center gap-2">
          <Button variant='secondary'>
            <span className='max-md:hidden'>Cancel</span>
            <X className='md:hidden' />
          </Button>

          <Button>
            <span className='max-md:hidden'>Add Task</span>
            <SendHorizonal className='md:hidden' />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TaskForm
