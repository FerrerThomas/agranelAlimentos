import { Phone, Globe } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-slate-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="A Granel Alimentos Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">A GRANEL ALIMENTOS</h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span>(221) 575 3750</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm">www.agranelalimentos.com.ar</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
