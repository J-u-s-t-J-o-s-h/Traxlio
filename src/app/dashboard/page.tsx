import { ToteCard } from "@/components/tote-card";
import { MOCK_TOTES } from "@/lib/mock-data";
import { Plus, Search, ScanLine } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBlobs } from "@/components/ui/background-blobs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Blobs */}
      <BackgroundBlobs />

      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesdashboard"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 md:p-8">
        {/* Header */}
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary tracking-tight">Traxlio</h1>
            <p className="text-secondary mt-1">Manage your inventory with precision.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-zinc-900/80 backdrop-blur-md px-4 py-2.5 text-sm font-medium text-white border border-zinc-800 hover:bg-zinc-800/80 transition-colors">
              <ScanLine className="h-4 w-4" />
              <span className="hidden sm:inline">Scan Tag</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-cyan-400 transition-colors shadow-[0_0_20px_-5px_var(--color-cyan-500)]">
              <Plus className="h-4 w-4" />
              <span>New Tote</span>
            </button>
          </div>
        </header>

        {/* Search & Filter */}
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-400" />
          </div>
          <input
            type="text"
            placeholder="Search totes, items, or tags..."
            className="block w-full rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur-md py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MOCK_TOTES.map((tote) => (
            <ToteCard
              key={tote.id}
              name={tote.name}
              description={tote.description}
              category={tote.category}
              itemCount={tote.itemCount}
              lastUpdated={tote.lastUpdated}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
