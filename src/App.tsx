import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./containers/NotFound";
import ProjectList from "./containers/Projects/ProjectList";
// import CapitalReqForm from "./containers/CapitalReqForm";



function App() {

  return (

    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App;