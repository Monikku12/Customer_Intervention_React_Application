import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import InterventionRequest from "./components/InterventionRequest";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";
// import InterventionsTable from "./components/InterventionsTable";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Public Routes */}
                <Route path="login" element={<Login />} />

                {/* Private Routes */}
                <Route element={<RequireAuth />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/InterventionRequest" element={<InterventionRequest />} />
                    {/* <Route path="/" element={<InterventionsTable />} /> */}
                </Route>

                {/* Error Routes 404 */}
                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;