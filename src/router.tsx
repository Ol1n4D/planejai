import { RootLayout } from '@src/components/layout/RootLayout'
import { SimulationFormPage } from '@src/pages/SimulationFormPage'
import { SimulationHistoryPage } from '@src/pages/SimulationHistoryPage'
import { SimulationResultsPage } from '@src/pages/SimulationResultsPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
      },
      {
        path: '/resultado/:id',
        element: <SimulationResultsPage />,
      },
      {
        path: '/historico',
        element: <SimulationHistoryPage />,
      },
    ],
  },
])
