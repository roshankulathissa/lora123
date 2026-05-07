import { forwardRef, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 text-white hover:bg-gray-800",
        primary:
          "text-white shadow-elegant hover:opacity-90",
        outline:
          "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400",
        ghost:
          "text-gray-700 hover:bg-gray-100",
        hero:
          "text-white font-semibold shadow-glow hover:opacity-90 hover:scale-105",
        glow:
          "text-white font-semibold hover:opacity-90 hover:scale-105",
        link:
          "text-gray-700 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  gradientStyle?: "accent" | "primary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, gradientStyle, style, ...props }, ref) => {
    const gradientStyles: Record<string, string> = {
      accent: "var(--gradient-accent)",
      primary: "var(--gradient-primary)",
    };

    const computedStyle =
      gradientStyle
        ? { background: gradientStyles[gradientStyle], ...style }
        : style;

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={computedStyle}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
