import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import './styles/AddStudent.css';
import './styles/StudentComponent.css';
import './styles/StudentList.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddStudent/>}/>
      <Route path="/edit" element={<EditStudent/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
