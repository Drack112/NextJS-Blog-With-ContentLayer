import InsightRoll from "@/components/InsightsRoll";

const insights = [
  "0 projects completed",
  "2+ years of anxiety attacks",
  "I'm a graduate of being a perfectionist with code that doesn't work.",
  "Full of useless curiosities, but I like them.",
  "I study programming for reasons I can't even understand.",
  "I'm cool (my father said it)",
  "I'm a great co-worker (I stay alone in the room)",
  "Known professionally for being boring as f#ck.",
  "Discord user who complains about discord.",
  "My GitHub only has unfinished projects.",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
