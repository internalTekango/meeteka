import React, { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { useFetchData } from "../../hooks/useFetchData";
import { LoadingCard } from "../components/LoadingCard";
import { EmptyState } from "../components/EmptyState";
import { PageTransition } from "../components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import CardMission from "../components/card/mission";
import { LEVELS } from "../../config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function ProductSubscription() {
  const [entrepriseLevel, setEntrepriseLevel] = useState<any[]>([]);

  const { t } = useLanguage();
  const { fetch: fetchCreateProduct, loading: isLoading } = useFetchData({
    uri: "infos-user/product-entreprise/create",
  });
  const { fetch: fetchLegalform } = useFetchData({
    uri: "infos-user/legal-form/get",
  });
  const [legalForms, setLegalForms] = useState<any[]>([]);

  useEffect(() => {
    (async function () {
      const { data } = await fetchLegalform({}, "GET");

      if (data?.data) {
        setLegalForms(data.data);
      }
    })();
  }, []);
  console.log(legalForms);
  const [formData, setFormData] = useState({
    name: "",
    rccm: "",
    nif: "",
    email: "",
    siteweb: "",
    legalForm: "",
    requestorFonction: "",
    requestorEmail: "",
    requestorPhone: "",
    description: "",
    entrepriseLevel: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await fetchCreateProduct(formData, "POST");
    if (error) {
      console.error("Erreur lors de la création de l'entreprise:", error);

      return;
    }
    console.log("donnée attendu", data);
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      rccm: "",
      nif: "",
      email: "",
      siteweb: "",
      legalForm: "",
      requestorFonction: "",
      requestorEmail: "",
      requestorPhone: "",
      description: "",
      entrepriseLevel: "",
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              {/* {t("missions.banner.title")
                .split(" ")
                .map(function (element, index: number) {
                  if (index == 0) {
                    return (
                      <span className="w-fit hidden" key={index}>
                        {element}
                      </span>
                    );
                  } else {
                    return (
                      <span key={index} className="text-highlight">
                        {" "}
                        {element}
                      </span>
                    );
                  }
                })} */}
              Subscription
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl">
              {t("missions.banner.description")}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200 py-4">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              {/* Search and Filter Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-96">
                  <h1 className="flex items-center gap-4 font-bold">
                    {" "}
                    <PlusCircle className="w-4 h-4 md:w-6 md:h-6" />
                    Ajouter une entreprise
                  </h1>
                </div>
              </div>

              {/* Active Filters */}
            </div>
          </div>
        </section>

        {/* Diffusions Grid */}
        <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="p-4">
            <form
              onSubmit={handleSubmit}
              className="shadow-lg  rounded-lg max-w-4xl p-4 sm:p-6  "
            >
              <div className="grid sm:grid-cols-1 lg:grid-cols-2  max-w-4xl p-4 sm:p-6  gap-4">
                <div className="flex flex-col gap-4 w-full  lg:w-96  ">
                  <label htmlFor="entrepriseLevel" className="text-sm">
                    Entreprise Level :
                  </label>

                  <select
                    value={formData.entrepriseLevel}
                    onChange={handleChange}
                    name="entrepriselevel"
                    id="entrepriselevel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                  >
                    <option>Selectionnez une entreprise</option>
                    <option>Test</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label htmlFor="name" className="text-sm">
                    Nom :
                  </label>
                  <input
                    type="text"
                    id="nom"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Saisir le nom de l'entreprise..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label htmlFor="rccm" className="text-sm">
                    Rccm :
                  </label>
                  <input
                    type="text"
                    id="rccm"
                    name="rccm"
                    value={formData.rccm}
                    onChange={handleChange}
                    placeholder="Saisir le rccm..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label htmlFor="nif" className="text-sm">
                    Numéro d'Identification Fiscale (NIF) :
                  </label>
                  <input
                    type="text"
                    id="nif"
                    value={formData.nif}
                    onChange={handleChange}
                    name="nif"
                    placeholder="saisir le numero d'identification Fiscale..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label htmlFor="email" className="text-sm">
                    email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="saisir ton email..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label
                    htmlFor="siteweb
"
                    className="text-sm"
                  >
                    Siteweb :
                  </label>
                  <input
                    type="text"
                    id="siteweb"
                    name="siteweb"
                    value={formData.siteweb}
                    onChange={handleChange}
                    placeholder="saisir ton siteweb..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label
                    htmlFor="siteweb
"
                    className="text-sm"
                  >
                    Forme juridique :
                  </label>
                  <select
                    name="legalForm"
                    id="legalForm"
                    value={formData.legalForm}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                  >
                    <option>Selectionnez une forme juridique</option>
                    {legalForms.map((form) => (
                      <option key={form.id} value={form.id}>
                        {form.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label htmlFor="requestorFonction" className="text-sm">
                    Fonction du demandeur :
                  </label>
                  <input
                    type="text"
                    id="requestorFonction"
                    name="requestorFonction"
                    value={formData.requestorFonction}
                    onChange={handleChange}
                    placeholder="saisir ta fonction..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label htmlFor="requestorEmail" className="text-sm">
                    E-mail du demandeur :
                  </label>
                  <input
                    type="email"
                    id="requestorEmail"
                    name="requestorEmail"
                    value={formData.requestorEmail}
                    onChange={handleChange}
                    placeholder="saisir E-mail du demandeur..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label htmlFor="requestorPhone" className="text-sm">
                    Numéro de téléphone du demandeur :
                  </label>
                  <input
                    type="text"
                    id="requestorPhone"
                    name="requestorPhone"
                    value={formData.requestorPhone}
                    onChange={handleChange}
                    placeholder="saisir le numero du demandeur..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-4 w-full  lg:w-96 ">
                  <label htmlFor="description" className="text-sm">
                    Description :
                  </label>
                  <textarea
                    name="desciption"
                    id="description"
                    placeholder="Description détaillée"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-gray-950 focus:ring-0 bg-white"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-3 bg-highlight text-gray-100 rounded-lg"
                >
                  {isLoading ? "Envoie en cours..." : " Sauvegarder"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
