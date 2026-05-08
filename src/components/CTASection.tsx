const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/10 to-transparent" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="rounded-[36px] border border-white/10 bg-[#0f0809]/90 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-orange-300">Ready to order?</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">Siap Ngerasain Seblak Pedas yang Bikin Nagih?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-relaxed">
            Dapatkan seblak viral dengan custom isian sepuasnya, level pedas yang sesuai, dan layanan pesan cepat via WhatsApp.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-red-500/20 transition hover:-translate-y-1"
            >
              Chat WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
