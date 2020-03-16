import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Redirect } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* PAGES */
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { BlogList } from "./pages/BlogList";
import { Contact } from "./pages/Contact";

/* Components */
import { Menu } from "./components/Menu";

const App = () => (
  <TravelApp>
    <Menu />

    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/blog" component={BlogList} exact={true} />
        <Route path="/blog/:slug" component={Post} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </TravelApp>
);

export default App;

const TravelApp = styled(IonApp)`
  --ion-background-color: #eae7dc;
  --ion-text-color: #8e8d8a;
  --ion-font-family: "Heebo", -apple-system, BlinkMacSystemFont,
    "Helvetica Neue", "Roboto", sans-serif;

  --ion-margin: 0;
  --padding-start: 20px;

  --ion-color-primary: #e85a4f;
  --ion-color-primary-rgb: 232, 90, 79;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #cc4f46;
  --ion-color-primary-tint: #ea6b61;

  --ion-color-secondary: #8e8d8a;
  --ion-color-secondary-rgb: 142, 141, 138;
  --ion-color-secondary-contrast: #000000;
  --ion-color-secondary-contrast-rgb: 0, 0, 0;
  --ion-color-secondary-shade: #7d7c79;
  --ion-color-secondary-tint: #999896;

  --ion-color-tertiary: #d8c3a5;
  --ion-color-tertiary-rgb: 216, 195, 165;
  --ion-color-tertiary-contrast: #000000;
  --ion-color-tertiary-contrast-rgb: 0, 0, 0;
  --ion-color-tertiary-shade: #beac91;
  --ion-color-tertiary-tint: #dcc9ae;

  --ion-color-success: #81e6d9;
  --ion-color-success-rgb: 129, 230, 217;
  --ion-color-success-contrast: #000000;
  --ion-color-success-contrast-rgb: 0, 0, 0;
  --ion-color-success-shade: #72cabf;
  --ion-color-success-tint: #8ee9dd;

  --ion-color-warning: #ffce00;
  --ion-color-warning-rgb: 255, 206, 0;
  --ion-color-warning-contrast: #ffffff;
  --ion-color-warning-contrast-rgb: 255, 255, 255;
  --ion-color-warning-shade: #e0b500;
  --ion-color-warning-tint: #ffd31a;

  --ion-color-danger: #f04141;
  --ion-color-danger-rgb: 245, 61, 61;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255, 255, 255;
  --ion-color-danger-shade: #d33939;
  --ion-color-danger-tint: #f25454;

  --ion-color-dark: #444444;
  --ion-color-dark-rgb: 68, 68, 68;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255, 255, 255;
  --ion-color-dark-shade: #3c3c3c;
  --ion-color-dark-tint: #575757;

  --ion-color-medium: #8e8d8a;
  --ion-color-medium-rgb: 142, 141, 138;
  --ion-color-medium-contrast: #000000;
  --ion-color-medium-contrast-rgb: 0, 0, 0;
  --ion-color-medium-shade: #7d7c79;
  --ion-color-medium-tint: #999896;

  --ion-color-light: #eae7dc;
  --ion-color-light-rgb: 234, 231, 220;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0, 0, 0;
  --ion-color-light-shade: #cecbc2;
  --ion-color-light-tint: #ece9e0;
`;
