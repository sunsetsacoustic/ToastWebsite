import type { Metadata } from "next";
import MiniClient from "./MiniClient";

export const metadata: Metadata = {
    title: "TOAST Mini | Dirty Soda & Mocktail Bar for Kids Parties",
    description: "The coolest bar in town. Mobile Dirty Soda and Mocktail bar rental for kids birthday parties, sweet 16s, and alcohol-free events.",
    keywords: ["Dirty Soda Bar", "Kids Party Rental", "Mocktail Bar", "Mobile Soda Bar", "Birthday Party Ideas", "Italian Soda Bar"],
};

export default function ToastMiniPage() {
    return <MiniClient />;
}
