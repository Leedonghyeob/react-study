
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClassComponent from './components/ClassComponent';
import FunctionalComponents from './components/FunctionalComponents';
import Layout2 from './components/Layout2';
import UseContextText from './components/Hook/UseContextText';
import AdressBook from './components/AdressBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*기본 path(/)인 경우 연결할 컴포넌트 (Layout2) */}
        <Route path="/" element={<Layout2 />}>
          <Route path="/component/class" element={<ClassComponent />} />
          <Route path="/component/functional" element={<FunctionalComponents />} />
          <Route path="/hook/context" element={<UseContextText />}></Route>
          <Route path="/adressBook" element={<AdressBook />} />        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
