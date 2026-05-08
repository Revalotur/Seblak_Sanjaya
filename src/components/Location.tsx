import { MapPin, Clock } from 'lucide-react'

const Location = () => {
  return (
    <section id="lokasi" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-orange-300">Lokasi</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Temukan Kami di Google Maps</h2>
            <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed">
              Seblak Prasmanan Sanjaya berada di pusat kota dengan suasana hangat, cocok untuk makan bersama teman atau pesan antar cepat.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[32px] border border-white/10 p-6 shadow-xl shadow-black/20">
                <div className="inline-flex items-center gap-3 text-orange-300 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Alamat</span>
                </div>
                <p className="text-slate-300">Seblak Prasmanan Sanjaya, Jl. Kuliner Viral No. 99, Bandung</p>
              </div>
              <div className="glass-card rounded-[32px] border border-white/10 p-6 shadow-xl shadow-black/20">
                <div className="inline-flex items-center gap-3 text-orange-300 mb-4">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Jam buka</span>
                </div>
                <p className="text-slate-300">Senin - Minggu: 10.00 - 22.00 WIB</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:scale-[1.02]"
              >
                Lihat Lokasi
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Seblak+Prasmanan+Sanjaya"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Buka Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/25">
            <iframe
              title="Seblak Prasmanan Sanjaya"
              src="https://maps.google.com/maps?q=Seblak%20Prasmanan%20Sanjaya&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
