import React, { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { useFetchData } from "../../hooks/useFetchData";
import { LoadingCard } from "../components/LoadingCard";
import { EmptyState } from "../components/EmptyState";
import { PageTransition } from "../components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import CardMission from "../components/card/mission";
import { LEVELS } from "../../config";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-highlight text-white shadow-lg scale-105"
        : "bg-white hover:bg-gray-100"
    } ${className}`}
  >
    {label}
  </button>
);

const FilterSection: React.FC<{
  title: string;
  options: any[];
  selected: string;
  onChange: (value: string) => void;
}> = ({ title, options, selected, onChange }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <FilterButton
          key={option?.value}
          label={option?.label}
          isActive={selected === option?.value}
          onClick={() => onChange(option?.value)}
        />
      ))}
    </div>
  </div>
);

export default function ProductSubscription() {
  const [searchTerm, setSearchTerm] = useState("");
  const [missions, setMissions] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState("Tous");
  const [selectedLevel, setSelectedLevel] = useState("Tous");
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage();
  const { fetch: fetchDiffusions, loading: isLoading } = useFetchData({
    uri: "infos-user/product-entreprise/create",
  });

  useEffect(() => {
    (async function () {
      const { data } = await fetchDiffusions({}, "POST");
      if (data?.data) {
        setMissions(data.data);
      }
    })();
  }, []);

  //   const filteredDiffusions = missions.filter((post) => {
  //     const matchesSearch = post.title
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase());
  //     const matchesType = selectedType === "Tous" || post.type === selectedType;
  //     const matchesLevel =
  //       selectedLevel === "Tous" || post.level === selectedLevel;
  //     return matchesSearch && matchesType && matchesLevel;
  //   });

  //   const hasActiveFilters = selectedType !== "Tous" || selectedLevel !== "Tous";

  //   const resetFilters = () => {
  //     setSearchTerm("");
  //     setSelectedType("Tous");
  //     setSelectedLevel("Tous");
  //   };

  //   const ActiveFilterPill: React.FC<{ label: string; onRemove: () => void }> = ({
  //     label,
  //     onRemove,
  //   }) => (
  //     <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-highlight/10 text-highlight rounded-full text-sm font-medium">
  //       {label}
  //       <button
  //         onClick={onRemove}
  //         className="p-0.5 rounded-full hover:bg-highlight hover:text-white transition-colors"
  //       >
  //         <X className="w-3 h-3" />
  //       </button>
  //     </span>
  //   );

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
                  {/* <input
                    type="text"
                    placeholder="Rechercher une mission..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )} */}
                  <h1>Ajouter une entreprise</h1>
                </div>

                {/* <div className="w-fit hidden">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-xl hover:bg-highlight transition-all duration-300 sm:w-auto w-full justify-center group"
                  >
                    <Filter className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                    <span>{showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}</span>
                  </button>
                </div> */}
              </div>

              {/* Extended Filters */}
              <AnimatePresence>
                {/* {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50 rounded-xl p-6 space-y-6 border-2 border-black/5">
                      <FilterSection
                        title="Niveau"
                        options={LEVELS}
                        selected={selectedLevel}
                        onChange={setSelectedLevel}
                      />
                    </div>
                  </motion.div>
                )} */}
              </AnimatePresence>

              {/* Active Filters */}
              <AnimatePresence>
                {/* {hasActiveFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-wrap items-center gap-2"
                  >
                    <span className="text-sm text-gray-500">
                      Filtres actifs:
                    </span>

                    {selectedType !== "Tous" && (
                      <ActiveFilterPill
                        label={selectedType}
                        onRemove={() => setSelectedType("Tous")}
                      />
                    )}
                    {selectedLevel !== "Tous" && (
                      <ActiveFilterPill
                        label={selectedLevel}
                        onRemove={() => setSelectedLevel("Tous")}
                      />
                    )}
                    <button
                      onClick={resetFilters}
                      className="text-sm text-gray-500 hover:text-highlight transition-colors"
                    >
                      Réinitialiser tout
                    </button>
                  </motion.div>
                )} */}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Diffusions Grid */}
        <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="">
            <form className="grid sm:grid-cols-1 lg:grid-cols-2  w-full">
              <div className="flex flex-col gap-4 w-full sm:w-96 ">
                <label
                  htmlFor="name
"
                >
                  Nom :
                </label>
                <input
                  type="text"
                  id="nom"
                  name="name"
                  placeholder="ajouter le nom de l'entreprise..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                />
              </div>
              <div className="flex flex-col gap-4 w-full  sm:w-96 ">
                <label
                  htmlFor="name
"
                >
                  Nom :
                </label>
                <input
                  type="text"
                  id="nom"
                  name="name"
                  placeholder="ajouter le nom de l'entreprise..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                />
              </div>
              <div className="flex flex-col gap-4 w-full  sm:w-96 ">
                <label htmlFor="name">Nom :</label>
                <input
                  type="text"
                  id="nom"
                  name="name"
                  placeholder="ajouter le nom de l'entreprise..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                />
              </div>
            </form>
          </div>
          {/* {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[...Array(8)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : filteredDiffusions.length === 0 ? (
            <EmptyState
              title="Aucune mission trouvée"
              description="Nous n'avons trouvé aucune mission correspondant à vos critères de recherche. Essayez de modifier vos filtres ou d'effectuer une nouvelle recherche."
              action={{
                label: "Réinitialiser les filtres",
                onClick: resetFilters,
              }}
            />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredDiffusions.map((post, index) => (
                <CardMission {...post} key={index} />
              ))}
            </div>
          )} */}
        </section>
      </div>
    </PageTransition>
  );
}
