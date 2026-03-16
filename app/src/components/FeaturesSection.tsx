"use client";

const features = [
  {
    id: 1,
    icon: "⚡",
    title: "Lightning-Fast\nImage Generation",
    description: "Type what you imagine, hit enter, and watch AI bring it to life in moments.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Multiple Styles &\nCustomization",
    description: "Pick a style and fine-tune details like color, lighting, and mood.",
  },
  {
    id: 3,
    icon: "⬇️",
    title: "High-Resolution\nDownloads",
    description: "Export your creations in high-quality resolution for print, web, or social media.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-8 pb-20 px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feat) => (
          <div
            key={feat.id}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 group"
          >
            <span className="text-3xl mb-1 block" aria-hidden="true">{feat.icon}</span>
            <h3 className="text-base font-semibold text-white leading-snug whitespace-pre-line tracking-tight">
              {feat.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
