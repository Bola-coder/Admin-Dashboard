import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Referrals from "./pages/Referrals";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            path="/settings"
            element={
              <Layout>
                <Settings />
              </Layout>
            }
          />
          <Route
            path="/transactions"
            element={
              <Layout>
                <Transactions />
              </Layout>
            }
          />
          <Route
            path="/referrals"
            element={
              <Layout>
                <Referrals />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
