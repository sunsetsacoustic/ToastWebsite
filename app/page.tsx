import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "TOAST Mobile Bar Co. | Luxury Wedding & Event Bartending",
  description: "The premier dry hire mobile bar for weddings and events in [Your City]. TABC certified staff, signature craft cocktails, and a sleek midnight navy bar setup.",
  keywords: ["Mobile Bar Texas", "Wedding Bartender", "Dry Hire Bar", "Cocktail Catering", "Event Bartender", "Private Party Bar"],
};

export default function Home() {
  return <HomeClient />;
}
