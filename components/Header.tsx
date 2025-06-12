import { cn } from "@/lib/utils";

function Header({ children, className }: HeaderProps) {
  return (
    <header className={cn("w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between", className)}>
      {children}
    </header>
  );
}

export default Header;
