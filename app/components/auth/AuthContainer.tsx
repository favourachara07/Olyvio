import { LucideSun } from "lucide-react";
import Logo from "../logo";

type AuthContainerProps = {
  children: React.ReactNode;
};

export default function AuthContainer({ children }: AuthContainerProps) {
  return (
    <div className="h-screen w-full flex flex-col bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center border-b border-[#E6E6E6]">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <div className="border border-[#E6E6E6] rounded-md p-2">
          <LucideSun className="size-6 text-[#7E7E7E]" />
        </div>
      </div>

      <div className="mx-auto w-full flex-1 pb-14 flex items-center justify-center">
        <div className="rounded-xl border border-[#D9D9D9] bg-white px-8 py-12 w-2/9 font-montserrat">
          {children}
        </div>
        {/* <p className="mt-6 text-center text-xs text-slate-500"> {new Date().getFullYear()} Olyvio</p> */}
      </div>

    </div>
  );
}