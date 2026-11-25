import type { InputHTMLAttributes } from "react";

interface AuthTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  containerClassName?: string;
}

export function AuthTextField({
  className,
  containerClassName,
  id,
  label,
  ...inputProps
}: AuthTextFieldProps) {
  return (
    <div className={`space-y-2 ${containerClassName ?? ""}`}>
      <label htmlFor={id} className="text-sm font-medium text-[#2c4439]">
        {label}
      </label>
      <input
        id={id}
        className={`h-13.5 w-full rounded-xl border border-[#dfe5dc] bg-white/85 px-4 text-[0.95rem] text-[#18372e] shadow-[0_2px_8px_rgb(24_55_46/3%)] outline-none transition placeholder:text-[#a7b0a8] hover:border-[#bdcdbd] focus:border-[#739477] focus:ring-4 focus:ring-[#739477]/15 ${className ?? ""}`}
        {...inputProps}
      />
    </div>
  );
}
