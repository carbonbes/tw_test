import type { Toast } from '~/types'
import { v4 as uuidv4 } from 'uuid'

export function useToasts() {
  const toasts = useState<Toast[]>(() => [])

  function add({ title, text, duration = 3000, type }: Toast) {
    toasts.value.unshift({
      id: uuidv4(),
      title,
      text,
      duration,
      type,
    })
  }

  function remove(id: Toast['id']) {
    const i = toasts.value.findIndex((toast: Toast) => toast.id === id)

    if (i !== -1) toasts.value.splice(i, 1)
  }

  return {
    toasts,
    add,
    remove,
    successToastify: ({ title, text, duration }: Toast) =>
      add({
        title,
        text,
        duration,
        type: 'success',
      }),
    errorToastify: ({ title, text, duration }: Toast) =>
      add({
        title,
        text,
        duration,
        type: 'error',
      }),
  }
}
