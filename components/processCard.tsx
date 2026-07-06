import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessCard({
  step,
  title,
  description,
  icon: Icon,
}: ProcessCardProps) {
  return (
    <div className="group relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Step Badge */}
      <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#C89B4D] font-bold text-white shadow-lg">
        {step}
      </div>

      <div className="mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2F] text-white transition group-hover:bg-[#C89B4D]">
        <Icon size={30} />
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-[#071A2F]">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}