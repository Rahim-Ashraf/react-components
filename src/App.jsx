import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="max-w-screen-2xl mx-auto bg-slate-100 p-4">
      <h1 className="text-xl font-semibold text-center">React components</h1>
      <Outlet />
    </div>
  )
}

export default App
