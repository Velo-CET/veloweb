import { WishlistItem } from "@/data/wishlist";

interface WishlistTableProps {
  items: WishlistItem[];
}

export default function WishlistTable({ items }: WishlistTableProps) {
  const priorityStyles = {
    High: "bg-red-500/10 text-red-400 border border-red-500/20",
    Medium: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    Low: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  };

  return (
    <div className="w-full overflow-hidden border border-slate-800/80 bg-slate-900/20 backdrop-blur-md rounded-2xl shadow-xl">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/40 text-xs font-bold uppercase tracking-widest text-slate-400">
              <th className="px-6 py-5">Item</th>
              <th className="px-6 py-5">Description</th>
              <th className="px-6 py-5">Category</th>
              <th className="px-6 py-5">Priority</th>
              <th className="px-6 py-5">Est. Cost</th>
              <th className="px-6 py-5">Buying Page</th>
              <th className="px-6 py-5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-sm text-slate-300">
            {items.map((item) => (
              <tr 
                key={item.id} 
                className={`transition-colors duration-200 hover:bg-slate-900/30 ${item.sponsored ? "opacity-60" : ""}`}
              >
                {/* Name */}
                <td className="px-6 py-5 font-semibold text-white">
                  <div className="flex items-center gap-2.5">
                    {item.name}
                    {item.sponsored && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                        ● Sponsored
                      </span>
                    )}
                  </div>
                </td>
                
                {/* Description */}
                <td className="px-6 py-5 max-w-xs text-slate-400 leading-relaxed truncate group hover:text-clip hover:whitespace-normal">
                  {item.description}
                </td>
                
                {/* Category */}
                <td className="px-6 py-5 text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50 uppercase tracking-wider text-[10px]">
                    {item.category}
                  </span>
                </td>
                
                {/* Priority */}
                <td className="px-6 py-5">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold ${priorityStyles[item.priority]}`}>
                    {item.priority}
                  </span>
                </td>
                
                {/* Price */}
                <td className="px-6 py-5 font-mono font-bold text-white">
                  {item.price}
                </td>
                
                {/* Buying link */}
                <td className="px-6 py-5">
                  <a 
                    href={item.buyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-violet-300 hover:underline transition-colors"
                  >
                    View Source
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </td>
                
                {/* Sponsor Button */}
                <td className="px-6 py-5 text-right">
                  {item.sponsored ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-widest font-bold text-emerald-400 border border-emerald-500/10 bg-emerald-500/5 rounded-sm select-none">
                      Sponsored
                    </span>
                  ) : (
                    <button className="px-4 py-1.5 text-xs uppercase tracking-widest font-bold border border-violet-300/30 text-white hover:border-white hover:bg-white/5 rounded-sm transition-all duration-200">
                      Sponsor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
