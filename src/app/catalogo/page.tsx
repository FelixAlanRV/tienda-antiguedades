import { Header } from "@/components/Header";
import { CatalogClient } from "./CatalogClient";

export default async function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col relative overflow-hidden">
      <Header />
      
      <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">

          <CatalogClient />
        </div>
      </div>
    </main>
  );
}
