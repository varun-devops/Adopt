import Link from "next/link";

export const metadata = {
  title: "Sign In - Adopt Network",
  description: "Sign in to your account",
};

export default function SignIn() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Twinkling stars background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="stars-container">
          <div className="stars"></div>
        </div>

        {/* Background gradient overlays */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-20">
          {/* Content container */}
          <div className="flex justify-center">
            {/* Sign In Form Container with background mockup */}
            <div className="w-full max-w-lg relative" data-aos="fade-up">
              {/* Background device mockup */}
              <div className="absolute -left-1/4 top-1/2 transform -translate-y-1/2 w-full h-full opacity-30 z-0 hidden md:block">
                {/* <img 
                  src="/img/sign.svg" 
                  alt="" 
                  className="w-full max-w-md"
                  aria-hidden="true"
                /> */}
              </div>
              
              {/* Section header */}
              <div className="pb-8 text-center relative z-10">
                <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl hoverable">
                  Sign in to your account
                </h1>
                <p className="mt-3 text-gray-400">Welcome back! Please enter your details.</p>
              </div>
              
              {/* Form container with glassmorphism effect */}
              <div className="backdrop-blur-sm bg-gray-900/60 p-8 rounded-2xl border border-gray-700/50 shadow-xl relative z-10">
                <form className="mx-auto">
                  <div className="space-y-5">
                    <div>
                      <label
                        className="mb-1 block text-sm font-medium text-indigo-200/65"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full hoverable"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <label 
                          className="block text-sm font-medium text-indigo-200/65"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <Link
                          className="text-sm text-gray-400 hover:  hover:underline hoverable"
                          href="/reset-password"
                        >
                          Forgot?
                        </Link>
                      </div>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full hoverable"
                        placeholder="Your password"
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-5">
                    <button type="submit" className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom]   shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] hoverable">
                      Sign in
                    </button>
                    <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
                      or
                    </div>
                    <button type="button" className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] hoverable">
                      Sign In with Google
                    </button>
                  </div>
                </form>
                
                {/* Bottom link */}
                <div className="mt-6 text-center text-sm text-indigo-200/65">
                  Don't have an account?{" "}
                  <Link className="font-medium text-indigo-500 hoverable" href="/signup">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}