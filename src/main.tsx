import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@smyt/router'
import { AppContext } from '@smyt/context'
import '@smyt/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContext>
    <RouterProvider router={router} />
  </AppContext>
)
