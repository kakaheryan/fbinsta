import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

          <section
            className="relative flex flex-col justify-center mb-12 min-h-main layout fade-in-start">
            <article className="mb-4">
              <figure
                className="flex flex-col justify-center overflow-hidden md:px-8  md:text-left">
                <div className="space-y-3">
                  <h1
                    className="text-green-500 dark:text-primary-300"
                    fade-side="3"
                  >
                    This domain is for sale, if interested contact my email wanerdata@gmail.com
                  </h1>
                </div>
              </figure>
            </article>
          </section>
    </main>
  )
}
