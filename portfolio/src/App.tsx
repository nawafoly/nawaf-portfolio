import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'

const ProjectCaseStudyPage = lazy(() =>
  import('./pages/ProjectCaseStudyPage').then((module) => ({
    default: module.ProjectCaseStudyPage,
  })),
)

const MalikatLandingPage = lazy(() =>
  import('./pages/MalikatLandingPage').then((module) => ({
    default: module.MalikatLandingPage,
  })),
)

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-bg" />}>
          <Routes>
            <Route path="/malikat" element={<MalikatLandingPage />} />
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
