import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import FirstDnd from "./pages/FirstDnd";
import SecondDnd from './pages/SecondDnd';

const router = createBrowserRouter(
	createRoutesFromElements(
    <Route path='/' >
      <Route index element={<FirstDnd />} />
      <Route path='second' element={<SecondDnd />} />
    </Route>
  ))
function App() {
  return <RouterProvider router={router} />;
}

export default App;
