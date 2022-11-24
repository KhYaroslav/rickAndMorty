import './App.css';
import { Route, Routes } from 'react-router-dom';
import CardParental from './Components/CardParental';
import PersonalCard from './Components/PerosnalCard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardParental />} />
      <Route path=":id" element={<PersonalCard />} />
    </Routes>
  );
}

export default App;
