import { RouterProvider } from 'react-router-dom'
import Versions from './components/Versions'
import root from './router/root'


function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
     <RouterProvider router={root}/>


    </>
  )
}

export default App
