import { useRouteMatch } from "react-router-dom";
import { useMemo } from "react";
import { useClient } from "../../components/client";
import { Navigation, RootProvider } from "./hoc";
import Router from "./Router";

import AdminDashboard from "../Admin.Dashboard";
import UserDashboard from "../User.Dashboard";

const navigation = [
  {
    "title": "Dashboard Admin",
    "component": AdminDashboard,
    "path": "/admin",
    "permission": "admin",
    "exact": true
  },
  {
    "title": "Dashboard User",
    "component": UserDashboard,
    "path": "/user",
    "permission": "user",
    "exact": true
  }
]

const Root = () => {
  const {path} = useRouteMatch()
  const client = useClient()

  const items = useMemo(() => {
    return navigation.filter((({permission}) => {
      return permission ? permission === client.role : true

    }))
  }, [client.role])

  return(
    <RootProvider>
      <Navigation base={path} navigation={items}>
        <Router />
      </Navigation>
    </RootProvider>
  )

}

export default Root