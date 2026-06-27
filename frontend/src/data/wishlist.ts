export interface WishlistItem {
  id: string | number;
  name: string;
  description: string;
  price: string;
  priority?: "High" | "Medium" | "Low";
  category?: string;
  sponsored: boolean;
  buyUrl: string;
}

// TODO: In the future, this static array will be replaced with a dynamic fetch from the Notion API.
// We will create a Notion service (e.g. `src/services/notion.ts`) that maps database properties:
// - Name property -> name
// - Rich Text Description -> description
// - Number Price -> price (formatted with currency)
// - Select Priority -> priority
// - Select Category -> category
// - Checkbox Sponsored -> sponsored
// - URL -> buyUrl (falling back to a placeholder URL)
export const wishlistData: WishlistItem[] = [
  {
    id: 1,
    name: "PLA Filament",
    description: "Used for manufacturing rocket components and prototypes.",
    price: "₹2,400",
    priority: "High",
    category: "Manufacturing",
    sponsored: false,
    buyUrl: "https://example.com/buy/pla-filament"
  },
  {
    id: 2,
    name: "ESP32 Development Board",
    description: "Required for telemetry and onboard electronics.",
    price: "₹650",
    priority: "Medium",
    category: "Electronics",
    sponsored: false,
    buyUrl: "https://example.com/buy/esp32"
  },
  {
    id: 3,
    name: "Carbon Fiber Tube",
    description: "Rocket airframe construction.",
    price: "₹3,800",
    priority: "High",
    category: "Structures",
    sponsored: false,
    buyUrl: "https://example.com/buy/carbon-fiber-tube"
  },
  {
    id: 4,
    name: "Load Cell",
    description: "Used for thrust testing and propulsion experiments.",
    price: "₹1,800",
    priority: "High",
    category: "Testing",
    sponsored: true,
    buyUrl: "https://example.com/buy/load-cell"
  }
];
