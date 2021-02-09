import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../private-route";
import { Header, Navigation, Sidebar } from "../../ui";
import Profiles from "../profiles";
import FoldersPage from "../folders";
import { useRouter } from "../../hooks";
import PopupContainer from "../../ui/popups";

const Dashboard: React.FC = () => {
  const [isShow, setIsShowPopup] = React.useState<boolean>(false);
  const handleSetShowPopup = () => console.log(123);
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <Sidebar />
      <Header title="Dashboard" />
      <Navigation
        pages={[
          { title: "Profiles", link: "/solo/dashboard/profiles" },
          { title: "Folders", link: "/solo/dashboard/folders" },
          { title: "Proxy", link: "/solo/dashboard/proxy" },
        ]}
      />
      {/* <PopupContainer handleClose handleButtonCLick isShow title="Hello">
        <div>1123</div>
      </PopupContainer> */}
      <Switch>
        <PrivateRoute path="/solo/dashboard/profiles" component={Profiles} />
        <PrivateRoute path="/solo/dashboard/folders" component={FoldersPage} />
        <PrivateRoute
          path="/solo/dashboard/proxy"
          component={() => <div>PROXY</div>}
        />
      </Switch>
    </div>
  );
};

export default Dashboard;
