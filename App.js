import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./store";
import FlashMessage from "react-native-flash-message";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Loading } from "./component";

export default function App() {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer>
          <Navigation />
          <FlashMessage position="top" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
