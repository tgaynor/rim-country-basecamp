import { BOOKING_URL } from "@/lib/constants";

interface BookingButtonProps {
  variant?: "primary" | "outline" | "hero-outline";
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
}

const BookingButton = ({ variant = "primary", size = "default", children, className = "" }: BookingButtonProps) => {
  const base = "inline-flex items-center justify-center font-semibold tracking-wide rounded-md transition-all duration-200";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-pine-light",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    "hero-outline": "border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
};

export default BookingButton;
