import { Globe, MapPin, Clock } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.952 1.3c-1.531.867-2.854 2.035-3.746 3.508-1.686 2.748-.826 6.71 1.922 8.396 1.531.867 3.2 1.3 4.952 1.3 1.75 0 3.419-.433 4.952-1.3 2.749-1.686 3.61-5.648 1.922-8.396a8.945 8.945 0 00-2.814-2.95 9.87 9.87 0 00-2.138-1.252z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#070506] py-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Seblak Prasmanan Sanjaya</h3>
            <p className="max-w-xl leading-relaxed text-slate-400">
              Rasa seblak premium untuk pelanggan modern yang butuh kenyamanan, custom level pedas, dan topping melimpah.
            </p>
            <div className="flex flex-wrap gap-4 text-slate-300">
              <a href="https://www.google.com/" className="inline-flex items-center gap-2 transition hover:text-orange-300">
                <Globe className="h-5 w-5" /> Website
              </a>
              <a href="https://wa.me/6281234567890" className="inline-flex items-center gap-2 transition hover:text-green-400">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="flex items-center gap-3 text-orange-300 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Lokasi</span>
              </div>
              <p className="text-slate-300">Jl. Kuliner Viral No. 99, Bandung</p>
            </div>
            <div className="rounded-[28px] bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="flex items-center gap-3 text-orange-300 mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Jam Operasional</span>
              </div>
              <p className="text-slate-300">Senin - Minggu, 10.00 - 22.00 WIB</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 Seblak Prasmanan Sanjaya. Developed by <strong style={{ color: '#f97316' }}>FabioGanteng</strong>.
        </div>
      </div>
    </footer>
  )
}

export default Footer
