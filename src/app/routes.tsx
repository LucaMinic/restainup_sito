import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ServiziPage } from "./pages/ServiziPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ChiSiamoPage } from "./pages/ChiSiamoPage";
import { RemoteDentalPage } from "./pages/RemoteDentalPage";
import { ContattiPage } from "./pages/ContattiPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "servizi", Component: ServiziPage },
      { path: "portfolio", Component: PortfolioPage },
      { path: "chi-siamo", Component: ChiSiamoPage },
      { path: "remote-dental", Component: RemoteDentalPage },
      { path: "contatti", Component: ContattiPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "cookie-policy", Component: CookiePolicyPage },
      { path: "*", Component: HomePage },
    ],
  },
], { basename: import.meta.env.BASE_URL });
