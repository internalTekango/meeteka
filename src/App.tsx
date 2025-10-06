import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Diffusion } from "./components/Diffusion";
import { DiffusionsPage } from "./pages/DiffusionsPage";
import { DiffusionPost } from "./pages/DiffusionPost";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { PartnerDetails } from "./pages/PartnerDetails";
import { SuccessStoriesPage } from "./pages/SuccessStoriesPage";
import { SuccessStoryDetails } from "./pages/SuccessStoryDetails";
import { AboutPage } from "./pages/AboutPage";
import { ServiceDetails } from "./pages/ServiceDetails";
import { PricingPage } from "./pages/PricingPage";
import { OrganisationsPage } from "./pages/OrganisationsPage";
import { EntreprisesPage } from "./pages/EntreprisesPage";
import { EventsPage } from "./pages/EventsPage";
import { BlogsPage } from "./pages/BlogsPage";
import { BlogPostDetails } from "./pages/BlogPost";
import { EventPost } from "./pages/EventPost";
import { useEffect } from "react";
import { MissionsPage } from "./pages/MissionsPage";
import { MissionPost } from "./pages/MissionPost";
import ConfidentialPolitique from "./pages/ConfidentialPolitique";
import AccountDeletion from "./pages/AccountDeletion";
import SupportPage from "./pages/SupportPage";
import { ProfilePost } from "./pages/ProfilePost";
import { FiscalitiesPage } from "./pages/FiscalitiesPage";
import { FiscalityPost } from "./pages/FiscalityPost";
import { Fiscality } from "./components/Fiscality";
import { LandingPage } from "./pages/LandingPage";
import ProductSubscription from "./components/ProductSubscription";

export default function App() {
  const pathname = window.location.pathname;

  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [pathname]
  );

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Fiscality />
                <Diffusion />
                <Team />
                <Contact />
              </>
            }
          />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route
            path="/politique-de-confidentialité"
            element={<ConfidentialPolitique />}
          />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPostDetails />} />
          <Route path="/diffusions" element={<DiffusionsPage />} />
          <Route path="/fiscalities" element={<FiscalitiesPage />} />
          <Route path="/fiscalities/:slug" element={<FiscalityPost />} />
          <Route
            path="/product-subscription"
            element={<ProductSubscription />}
          />
          <Route path="/diffusions/:slug" element={<DiffusionPost />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/missions/:slug" element={<MissionPost />} />
          <Route path="/entreprises" element={<EntreprisesPage />} />
          <Route path="/entreprises/:slug" element={<PartnerDetails />} />
          <Route path="/organisations" element={<OrganisationsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventPost />} />
          <Route path="/organisations/:slug" element={<PartnerDetails />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route
            path="/success-stories/:slug"
            element={<SuccessStoryDetails />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile/:slug" element={<ProfilePost />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
