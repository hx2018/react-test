import React, { useEffect } from "react";
import { Route, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/redux/store";
import FoodTrucks from "./pages/foodtrucks";
import NavigationBar from "@/layout/NavigationBar";
import AsyncRouter, { RouterHooks } from "./components/AsyncRouter";

import "./app.less";

// const FoodTrucks = AsyncRouter(() => import("./pages/foodtrucks"));

export default function App() {
  useEffect(() => {
    /* 增加监听函数 */
    RouterHooks.beforeRouterComponentLoad((history) => {
      console.log("当前激活的路由是", history.location.pathname);
    });
  }, []);

  return (
    <Provider store={store}>
      <HashRouter className="App">
        <NavigationBar />
        <div className="App__content">
          <Route exact path="/" component={FoodTrucks} />
          {/* <Redirect from="/*" to="/index" /> */}
        </div>
      </HashRouter>
    </Provider>
  );
}
