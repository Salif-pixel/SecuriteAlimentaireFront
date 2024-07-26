
import './App.css'


import { Route, Routes, Navigate} from "react-router-dom";
import Landing from "./Landing/Ui/mainLanding.tsx";
import Login from "./Auth/Login/Ui/mainLogin.tsx";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


function App() {


  return (
<div className={`w-screen`}>
    <MantineProvider>
    <Routes>
        <Route path="/auth/*" element={<Login/>} />
        <Route path="/*" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </MantineProvider>
</div>


  );
}

export default App

