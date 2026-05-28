import { useState } from 'react'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { Eye, EyeOff, Sparkles } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters'),
})

const initialValues = {
  email: '',
  password: '',
}

const LoginPage = ({ onLogin }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const updateValue = (event) => {
    const { name, value } = event.target

    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined, form: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const result = loginSchema.safeParse(values)

    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors)
      return
    }

    const loginError = onLogin(result.data)

    if (loginError) {
      setErrors({ form: [loginError] })
      return
    }

    setErrors({})
  }

  const handleGoogleSignIn = () => {
    setErrors({ form: ['Google sign-in is not configured yet.'] })
  }

  return (
    <main className="min-h-screen bg-[#dfe8fb] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center gap-6 lg:grid-cols-[minmax(320px,0.95fr)_minmax(360px,1.05fr)]">
        <div className="relative hidden min-h-[620px] overflow-hidden rounded-lg bg-[#1557f5] px-10 py-12 text-white shadow-2xl shadow-blue-950/20 lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-x-0 top-24 h-72 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute inset-x-8 bottom-16 h-72 rounded-full bg-white/70 blur-3xl" />
          <div className="relative flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-7 grid h-24 w-24 place-items-center rounded-full bg-white text-[#1557f5] shadow-xl shadow-blue-950/20">
              <Sparkles className="h-14 w-14 fill-current" />
            </div>
            <h1 className="text-4xl font-semibold tracking-normal">Apex</h1>
          </div>
          <div className="relative space-y-4 text-center">
            <p className="text-sm font-medium text-blue-950/80">Your AI-powered finance dashboard.</p>
            <button
              className="h-11 w-full rounded-full bg-white text-sm font-semibold text-[#1557f5] shadow-lg shadow-blue-950/20 transition hover:bg-blue-50"
              type="button"
            >
              Sign In
            </button>
            <Link
              className="flex h-11 w-full items-center justify-center rounded-full border border-[#1557f5]/50 bg-white/95 text-sm font-semibold text-[#1557f5] transition hover:bg-white"
              to="/register"
            >
              Create Account
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-lg bg-white px-5 py-6 shadow-2xl shadow-slate-900/10 sm:px-7 sm:py-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-[#edf2ff] text-[#1557f5]">
              <Sparkles className="h-11 w-11 fill-current" />
            </div>
            <span className="text-xs font-medium text-slate-300">2.45.6.34 Alpha</span>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {errors.form ? (
              <div className="rounded-lg border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                {errors.form[0]}
              </div>
            ) : null}

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Email / Username</span>
              <input
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 px-5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1557f5] focus:bg-white"
                name="email"
                onChange={updateValue}
                placeholder="idrisumaru@example.com"
                type="email"
                value={values.email}
              />
              {errors.email ? <span className="mt-2 block text-xs font-medium text-rose-600" id="email-error">{errors.email[0]}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Password</span>
              <span className="relative block">
                <input
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 px-5 pr-12 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1557f5] focus:bg-white"
                  name="password"
                  onChange={updateValue}
                  placeholder="Enter password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                />
                <button
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                  onClick={() => setShowPassword((current) => !current)}
                  type="button"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </span>
              {errors.password ? <span className="mt-2 block text-xs font-medium text-rose-600" id="password-error">{errors.password[0]}</span> : null}
            </label>

            <button
              className="h-12 w-full rounded-full bg-[#1557f5] text-sm font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-[#0f49d3] focus:outline-none focus:ring-2 focus:ring-[#1557f5] focus:ring-offset-2"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <button className="mt-5 w-full text-center text-sm font-semibold text-[#1557f5] transition hover:text-[#0f49d3]" type="button">
            Forgot Password?
          </button>

          <div className="my-5 flex items-center gap-3 text-xs font-medium text-slate-400">
            <span className="h-px flex-1 bg-slate-100" />
            Or
            <span className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="space-y-3">
            <button
              onClick={handleGoogleSignIn}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-slate-100 bg-slate-50 text-sm font-semibold text-slate-800 transition hover:bg-white hover:shadow-sm active:scale-[0.985]"
              type="button"
            >
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
            <button
              className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-slate-100 bg-slate-50 text-sm font-semibold text-slate-800 transition hover:bg-white hover:shadow-sm"
              type="button"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#1557f5] text-sm font-bold text-white">f</span>
              Continue with Facebook
            </button>
          </div>

          <p className="mt-6 text-center text-sm font-medium text-slate-700">
            Don&apos;t have an account?{' '}
            <Link className="font-semibold text-[#1557f5] transition hover:text-[#0f49d3]" to="/register">
              Sign up
            </Link>
          </p>
          <p className="mt-8 text-center text-xs font-medium text-slate-400">Copyright 2026 Apex Inc</p>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
