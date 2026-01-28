"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function StartPage() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";

  // FormSubmit endpoint
  const action = "https://formsubmit.co/tate@ecodia.au";

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#141414] selection:bg-black selection:text-white">
      <header className="border-b border-black/10">
        <div className="mx-auto max-w-2xl px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-[10px] font-black uppercase tracking-[0.28em] text-black hover:underline"
          >
            Tate Donohoe
          </Link>

          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-black/45">
            Start a project
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-6 py-14">
        {!sent ? (
          <>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Tell me your idea
            </h1>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-black/70">
              App, website, AI automation, internal tooling, rebuilds. If you are not sure,
              describe the problem and what “done” looks like.
            </p>

            <div className="mt-10 border-2 border-black bg-white p-6 sm:p-8 shadow-[10px_10px_0px_rgba(0,0,0,0.12)]">
              <form action={action} method="POST" className="space-y-6">
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="New project idea (tatedonohoe.au)" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://tatedonohoe.au/start?sent=1"
                />

                {/* Honeypot */}
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.22em]">
                      Name
                    </label>
                    <input
                      name="name"
                      className="mt-2 w-full border-2 border-black/15 px-3 py-3 text-sm font-medium outline-none focus:border-black"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.22em]">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full border-2 border-black/15 px-3 py-3 text-sm font-medium outline-none focus:border-black"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.22em]">
                      What do you want built
                    </label>
                    <select
                      name="project_type"
                      defaultValue="AI automation"
                      className="mt-2 w-full border-2 border-black/15 px-3 py-3 text-sm font-medium outline-none focus:border-black"
                    >
                      <option>Website</option>
                      <option>App</option>
                      <option>AI automation</option>
                      <option>Internal tool</option>
                      <option>Rebuild</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.22em]">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      defaultValue="In the next 1 to 2 months"
                      className="mt-2 w-full border-2 border-black/15 px-3 py-3 text-sm font-medium outline-none focus:border-black"
                    >
                      <option>ASAP</option>
                      <option>In the next 2 to 4 weeks</option>
                      <option>In the next 1 to 2 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.22em]">
                    Budget
                  </label>
                  <input
                    name="budget"
                    className="mt-2 w-full border-2 border-black/15 px-3 py-3 text-sm font-medium outline-none focus:border-black"
                    placeholder="Rough range is fine, or leave blank"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.22em]">
                    The idea
                  </label>
                  <textarea
                    name="idea"
                    required
                    rows={7}
                    className="mt-2 w-full border-2 border-black/15 px-3 py-3 text-sm font-medium outline-none focus:border-black"
                    placeholder="What are we building? Who is it for? What does success look like?"
                  />
                  <p className="mt-2 text-[11px] font-medium text-black/50">
                    This sends straight to my inbox.
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center border-2 border-black bg-black text-[10px] font-black uppercase tracking-[0.22em] text-white shadow-[10px_10px_0px_rgba(0,0,0,0.12)] transition-transform active:translate-y-1"
                >
                  Send
                </button>

                <div className="pt-2 text-center">
                  <Link
                    href="/"
                    className="text-[10px] font-mono uppercase tracking-[0.28em] text-black/45 hover:text-black"
                  >
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </>
        ) : (
          /* CONFIRMATION STATE */
          <div className="mt-16 border-2 border-black bg-white p-8 sm:p-12 text-center shadow-[10px_10px_0px_rgba(0,0,0,0.12)]">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              Message sent
            </h1>

            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-black/70">
              I’ve got it. I’ll read through your idea and reply if it looks like a good fit.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center border-2 border-black px-6 text-[10px] font-black uppercase tracking-[0.22em] shadow-[6px_6px_0px_rgba(0,0,0,0.12)] hover:bg-black hover:text-white! transition"
              >
                Back to home
              </Link>

              <Link
                href="/start"
                className="text-[10px] font-mono uppercase tracking-[0.28em] text-black/45 hover:text-black"
              >
                Send another
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
