
import './App.css';
import Header from './Components/Header';
import Body from "./Components/Body";
import {Provider} from "react-redux"
import store from "./utils/store"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';
const appRouter = createBrowserRouter([
  {
    path : '/',
    element: <Body/>,
    children: [

   {   path: '/',
      element: <MainContainer/>},
      {
        path: '/watch',
        element: <WatchPage/>
      },
      {
        path: '/demo',
        element: <> <Demo/> <Demo2/></>
      }
    ]

  }

])

function App() {
  return (
  <Provider  store ={store}>
  <Header/>
   <RouterProvider router ={appRouter}/>
    </Provider>
 
  );
}

export default App;
