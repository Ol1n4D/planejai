import { RootLayout } from '@src/components/layout/RootLayout'
import { SimulationFormPage } from '@src/pages/SimulationFormPage'
import { SimulationHistoryPage } from '@src/pages/SimulationHistoryPage'
import { SimulationResultsPage } from '@src/pages/SimulationResultsPage'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
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

export default router
