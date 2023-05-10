import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HomepageLight from "./pages/HomepageLight";
import HomepageDark from "./pages/HomepageDark";
import Homepage2 from "./pages/Homepage2";
import Homepage2Light from "./pages/Homepage2Light";
import Homepage2Dark from "./pages/Homepage2Dark";
import Homepage3 from "./pages/Homepage3";
import Homepage3Light from "./pages/Homepage3Light";
import Homepage3Dark from "./pages/Homepage3Dark";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";
import AddData from "./backend/pages/AddData";
import { Link } from "react-router-dom";
function App() {
  const downloadlink = 'https://drive.google.com/file/d/1Fjuw-pOylYfv5oQEWvoH7W2FBn7My4tD/view?usp=share_link'
  return (
    <BrowserRouter>
    {/* <div className="position-fixed bottom-0 end-0 z-index"><Link to="/backend/add"><button className="btn btn-primary rounded-50 p-3 m-3 fs-4"><i class="fas fa-plus"></i></button></Link></div> */}
      <Switch>
        <Route path="/" exact>
          <Homepage3 downloadlink ={downloadlink} />
        </Route>
        {/* <Route path="/backend/add" exact>
          <AddData />
        </Route> */}
        {/* <Route path="/" exact>
          <Homepage />
        </Route> */}
        {/* <Route path="/dark" exact>
          <HomepageDark />
        </Route>
        <Route path="/light" exact>
          <HomepageLight />
        </Route>
        <Route path="/index-2" exact>
          <Homepage2 />
        </Route>
        <Route path="/index-2-light" exact>
          <Homepage2Light />
        </Route>
        <Route path="/index-2-dark" exact>
          <Homepage2Dark />
        </Route>
        <Route path="/index-3" exact>
          <Homepage3 />
        </Route>
        <Route path="/index-3-light" exact>
          <Homepage3Light />
        </Route>
        <Route path="/index-3-dark" exact>
          <Homepage3Dark />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
