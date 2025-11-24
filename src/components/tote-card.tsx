import { Box, Calendar, MoreHorizontal } from "lucide-react";

type ToteCardProps = {
    name: string;
    description: string;
    category: string;
    itemCount: number;
    lastUpdated: string;
};

export function ToteCard({
    name,
    description,
    category,
    itemCount,
    lastUpdated,
}: ToteCardProps) {
    return (
        <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-md p-3 sm:p-5 transition-all hover:bg-zinc-800/90 active:scale-[0.98] aspect-square sm:aspect-auto">
            <div className="flex items-start justify-between mb-2 sm:mb-4">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-black/50 border border-zinc-700">
                    <Box className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                </div>
                {/* Hide menu on mobile to save space, or keep small */}
                <button className="text-zinc-400 hover:text-white">
                    <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-end sm:justify-start">
                <span className="mb-1 inline-block w-fit rounded-full bg-black/50 px-1.5 py-0.5 text-[10px] sm:text-xs font-medium text-zinc-300 border border-zinc-700 truncate max-w-full">
                    {category}
                </span>
                <h3 className="text-sm sm:text-lg font-semibold text-white leading-tight mb-1">{name}</h3>
                <p className="hidden sm:block line-clamp-2 text-sm text-zinc-400">{description}</p>
            </div>

            <div className="mt-2 sm:mt-4 flex items-center justify-between border-t border-zinc-800 pt-2 sm:pt-4 text-[10px] sm:text-xs text-zinc-500">
                <div className="flex items-center gap-1">
                    <span className="font-medium text-zinc-300">{itemCount}</span> items
                </div>
                <div className="hidden sm:flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {lastUpdated}
                </div>
            </div>
        </div>
    );
}
