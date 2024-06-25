import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@smyt/router'
import { PostProvider, ToastProvider } from '@smyt/context'
import '@smyt/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ToastProvider>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </ToastProvider>
)
