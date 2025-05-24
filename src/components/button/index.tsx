import Icon from "../icon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  text: string; 
  icon?: IconDefinition;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  iconClassName?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Button({ text, icon, size = "medium", variant = "primary", className, iconClassName, hover = true, onClick 
}: ButtonProps) {
  
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg font-semibold",
  };

  const variantClasses = {
    primary: `bg-primary border-primary text-stone-50 ${hover && "hover:bg-transparent hover:text-primary"}`,
    secondary: "bg-gray-600 hover:bg-transparent text-white",
    danger: "bg-red-600 hover:bg-transparent text-white",
  };

  return (
    <button
      className={`flex items-center gap-2 rounded-3xl transition ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} className={iconClassName} />}
      <span>{text}</span>
    </button>
  );
}
