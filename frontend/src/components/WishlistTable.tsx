import { WishlistItem } from "@/data/wishlist";

interface WishlistTableProps {
  items: WishlistItem[];
}

export default function WishlistTable({ items }: WishlistTableProps) {
  return (
    <div className="w-full overflow-x-auto bg-transparent">
      <table className="w-full min-w-[700px] border-collapse text-left bg-transparent">
        <thead>
          <tr className="bg-transparent text-xs font-bold uppercase tracking-widest text-slate-400">
            <th className="px-4 py-4">Item</th>
            <th className="px-4 py-4">Description</th>
            <th className="px-4 py-4">Est. Cost</th>
            <th className="px-4 py-4">Buying Page</th>
          </tr>
        </thead>
        <tbody className="bg-transparent text-sm text-slate-300">
          {items.map((item) => (
            <tr 
              key={item.id} 
              className={`border-b border-slate-900 bg-transparent ${item.sponsored ? "opacity-60" : ""}`}
            >
              {/* Name */}
              <td className="px-4 py-4 font-semibold text-white">
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
              <td className="px-4 py-4 text-slate-400 leading-relaxed max-w-sm">
                {item.description}
              </td>
              
              {/* Price */}
              <td className="px-4 py-4 font-mono font-bold text-white">
                {item.price}
              </td>
              
              {/* Buying link */}
              <td className="px-4 py-4">
                {item.buyUrl && item.buyUrl !== "#" ? (
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
                ) : (
                  <span className="text-xs text-slate-500 italic">Enquire to Sponsor</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
