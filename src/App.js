import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import LoginPage from "./Pages/Login/LoginPage";
import IssuePage from "./Pages/Issue/IssuePage";
import { useSelector } from "react-redux";
import Protected from "./Utilities/Protected";
import IssueDetail from "./Pages/IssueDetail/IssueDetail";
import NewIssuePage from "./Pages/NewIssue/NewIssuePage";
import axios from 'axios';

// axios.interceptors.request.use(
//   (req) => {
//      // Add configurations here
//     //  if(!Cookies.get('token')){
//     //     return <Navigate to='/login'/> 
//     //  }
//      console.log(req.headers)
//      if(Cookies.get('token')){
//      req.headers={
//       ...req.headers,
//       'Authorization': Cookies.get('token')
//     }
//   }
//     console.log(req)
//     return req;
//   }
// );

function App() {
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.auth.auth);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Protected tok={token}>
                <HeaderComponent>
                  <IssuePage />
                </HeaderComponent>
              </Protected>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={<LoginPage auth={auth} />}
          ></Route>
          <Route exact path="/issue" element={<IssuePage />}></Route>
          <Route
            exact
            path="/issueDetails/:id"
            element={
              <Protected tok={token}>
                <HeaderComponent>
                  <IssueDetail auth={auth} />
                </HeaderComponent>
              </Protected>
            }
          ></Route>
          <Route
            exact
            path="/newIssue"
            element={
              <Protected tok={token}>
                <HeaderComponent>
                  <NewIssuePage auth={auth} />
                </HeaderComponent>
              </Protected>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
