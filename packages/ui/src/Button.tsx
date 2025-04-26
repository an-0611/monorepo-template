import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, size, children }) => {
  return <button className={`btn ${variant} ${size}`}>{children}</button>;
};

// import { FC, ButtonHTMLAttributes } from "react";

// // Button 的屬性介面
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "secondary" | "ghost"; // 可以選擇不同樣式
//   size?: "sm" | "md" | "lg"; // 按鈕的尺寸
// }

// // 設定基本樣式
// const baseStyles =
//   "inline-flex items-center justify-center font-medium rounded-2xl transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

// // 設定不同樣式的變數
// const variants: Record<string, string> = {
//   primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
//   secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
//   ghost: "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
// };

// // 設定不同大小的變數
// const sizes: Record<string, string> = {
//   sm: "px-3 py-1 text-sm",
//   md: "px-4 py-2 text-base",
//   lg: "px-6 py-3 text-lg",
// };

// const Button: FC<ButtonProps> = ({
//   variant = "primary", // 預設樣式為 primary
//   size = "md", // 預設大小為 medium
//   className, // 可自訂 class
//   children, // 按鈕文字
//   ...rest // 其他按鈕屬性
// }) => {
//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
