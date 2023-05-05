import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import CodeOfConductPage from './components/CodeOfConduct'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/codigo-de-conduta" element={<CodeOfConductPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
