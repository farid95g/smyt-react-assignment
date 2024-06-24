import { Router } from '@remix-run/router'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from '@smyt/router/routes'

export const router: Router = createBrowserRouter(routes)
