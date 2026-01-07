import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  background?: "white" | "gray" | "blue";
}

export default function Section({ 
  children, 
  className, 
  background = "white",
  ...props 
}: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-primary text-white"
  };

  return (
    <section 
      className={cn(
        "py-24 md:py-32", // Generous padding as requested (100px+)
        bgStyles[background],
        className
      )} 
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
