// src/App.js
import { Routes, Route } from 'react-router-dom';
import LoginForm from './authentification/LoginForm';
import PaymentHistory from './views/PaymentHistory';
import Statistics from './views/Statistics';
import ProfileEditor from './views/ProfileEditor';
import Home from './views/Home';
import PaymentsTools from './views/PaymentsTools';
import StatTriangle from './views/StatTriangle';
import SQLRemportation from './views/StatNumPortiere';

import './App.css';

function App() {
  return (
    <div className="">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/payments" element={<PaymentHistory />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/profile" element={<ProfileEditor />} />
            <Route path="/home" element={<Home />} />
            <Route path="/payments-tools" element={<PaymentsTools />} />
            <Route path="/stattriangle" element={<StatTriangle />} />
            <Route path="/statnum" element={<SQLRemportation />} />
            {/* Route par défaut */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
  );
}

export default App;