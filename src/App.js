import { Routes, Route, Navigate } from "react-router-dom";
import { AboutPage, ContactPage, HomePage, StoryPage, WorkPage } from './pages';
import routes from './localization/routes';

function App() {
  return (
    <Routes>
      <Route exact path={routes.ABOUT_PATH} element={<AboutPage />} />
      <Route exact path={routes.CONTACT_PATH} element={<ContactPage />} />
      <Route exact path={routes.HOME_PATH} element={<HomePage />} />
      <Route exact path={routes.STORY_PATH} element={<StoryPage />} />
      <Route exact path={routes.WORK_PATH} element={<WorkPage />} />
      <Route path={routes.DEFAULT_PATH} element={<Navigate to={routes.HOME_PATH} />} />
    </Routes>
  );
}

export default App;
