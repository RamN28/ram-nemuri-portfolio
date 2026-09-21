import { ArrowUpRight, Link2, Mail, MapPin, Sparkles } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen bg-[#eef5ff] px-5 py-8 text-slate-950 sm:px-8 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center sm:min-h-[calc(100vh-6rem)]">
        <article className="grid w-full overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_-30px_rgba(29,78,216,0.35)] ring-1 ring-blue-100 md:grid-cols-[0.92fr_1.08fr]">
          <section className="relative flex min-h-[310px] flex-col justify-between overflow-hidden bg-blue-600 p-7 text-white sm:p-10 md:min-h-[520px] md:p-12">
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border-[28px] border-blue-500/60" aria-hidden="true" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full border-[22px] border-blue-500/60" aria-hidden="true" />

            <div className="relative flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-blue-100 sm:text-xs sm:tracking-[0.2em]">Personal card</span>
            </div>

            <div className="relative mt-16 md:mt-0">
              <p className="mb-4 text-sm font-medium tracking-wide text-blue-100">Hello, I&apos;m</p>
              <h1 className="max-w-sm text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Ram Nemuri</h1>
              <div className="mt-6 flex items-center gap-2 text-sm text-blue-100">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Undergraduate student at UCSC</span>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-between p-7 sm:p-10 md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">What I do</p>
              <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl">
                Computer science student with an interest in AI/ML.
              </h2>
              <div className="my-9 h-px w-full bg-slate-200" />
              <p className="max-w-lg text-base leading-8 text-slate-600">
                I am passionate about building useful and helpful technology that anyone can use to get things done. I want to make it easier for people to learn how to use AI and then build cool projects with it.
              </p>
            </div>

            <div className="mt-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">How to reach me</p>
              <div className="space-y-3">
                <a className="group flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3.5 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" href="mailto:ramnemuri1@gmail.com">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Mail className="h-4 w-4" aria-hidden="true" /></span>
                    <span className="truncate text-sm font-medium text-slate-700">ramnemuri1@gmail.com</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <a className="group flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3.5 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" href="https://linkedin.com/in/ram-nemuri-6b3724320" target="_blank" rel="noreferrer">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Link2 className="h-4 w-4" aria-hidden="true" /></span>
                    <span className="truncate text-sm font-medium text-slate-700">linkedin.com/in/ram-nemuri-6b3724320</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}

 
