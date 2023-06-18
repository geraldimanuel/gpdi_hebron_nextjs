import Image from "next/image";
import { Button } from "@/components"

type ProgramCardProps = {
  subtitle: string;
  logo: string;
  background: string;
  bgColor?: string;
  children: React.ReactNode;
};

export function ProgramCard({
  subtitle,
  logo,
  background,
  bgColor,
  children,
}: ProgramCardProps) {
    return (
        // TODO: Find more elegant way to do dynamic colors? (maybe using styled-components or else, idk)
        <div className={`
            p-12 md:p-24 relative
            bg-cover bg-no-repeat bg-center
            before:absolute before:inset-0 before:z-[1]
            before:mix-blend-multiply md:text-xl
            ${bgColor == "red" ? "before:bg-red-600" : "before:bg-blue-600"}
        `}
        style={{ backgroundImage: `url(${background})` }}
        >
            <div className="relative flex flex-col md:flex-row w-full gap-8 z-10">
              <div className="drop-shadow-[6px_6px_0px_rgba(210,2,2,1)] object-contain w-full h-32">
                <Image src={logo} fill alt="" className="object-contain"/>
              </div>
              <div className="">
                <p className="text-2xl font-semibold tracking-tight text-center md:text-left mb-6">
                  {subtitle}
                </p>
                <div className="flex gap-2.5 flex-wrap justify-center md:justify-start">
                    {children}
                </div>
              </div>
            </div>
        </div>
    )

}
