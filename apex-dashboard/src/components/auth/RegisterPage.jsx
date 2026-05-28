import { useState } from 'react'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { ArrowLeft, CheckCircle2, ChevronDown, Eye, EyeOff } from 'lucide-react'

const registerSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name must be at least 2 characters'),
  email: z.string().trim().min(1, 'Work email is required').email('Enter a valid work email'),
  role: z.string().min(1, 'Select your role'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(1, 'Confirm your password'),
  acceptedTerms: z.boolean().refine((value) => value, 'Accept the terms to continue'),
}).refine((values) => values.password === values.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

const initialValues = {
  fullName: '',
  email: '',
  role: 'Financial Analyst',
  password: '',
  confirmPassword: '',
  acceptedTerms: false,
}

const RegisterPage = ({ onRegister }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const updateValue = (event) => {
    const { checked, name, type, value } = event.target

    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors((current) => ({ ...current, [name]: undefined, form: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const result = registerSchema.safeParse(values)

    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors)
      return
    }

    const registerError = onRegister(result.data)

    if (registerError) {
      setErrors({ form: [registerError] })
      return
    }

    setErrors({})
  }

  return (
    <main className="min-h-screen bg-[#dfe8fb] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md items-center">
        <div className="w-full rounded-lg bg-white px-5 py-6 shadow-2xl shadow-slate-900/10 sm:px-7 sm:py-8">
          <div className="mb-6 flex items-center gap-3">
            <Link
              aria-label="Back to login"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              to="/login"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <h1 className="text-2xl font-semibold tracking-normal text-slate-950">Create Account</h1>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {errors.form ? (
              <div className="rounded-lg border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                {errors.form[0]}
              </div>
            ) : null}

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Full Name</span>
              <input
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'full-name-error' : undefined}
                className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1557f5] focus:bg-white"
                name="fullName"
                onChange={updateValue}
                placeholder="idris umaru"
                type="text"
                value={values.fullName}
              />
              {errors.fullName ? <span className="mt-2 block text-xs font-medium text-rose-600" id="full-name-error">{errors.fullName[0]}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Work Email</span>
              <input
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'register-email-error' : undefined}
                className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1557f5] focus:bg-white"
                name="email"
                onChange={updateValue}
                placeholder="idris.umaru@example.com"
                type="email"
                value={values.email}
              />
              {errors.email ? (
                <span className="mt-2 block text-xs font-medium text-rose-600" id="register-email-error">{errors.email[0]}</span>
              ) : (
                <span className="mt-2 block text-xs font-medium text-amber-600">Please use your professional email address</span>
              )}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Role</span>
              <span className="relative block">
                <select
                  aria-invalid={Boolean(errors.role)}
                  aria-describedby={errors.role ? 'role-error' : undefined}
                  className="h-11 w-full appearance-none rounded-full border border-[#1557f5]/70 bg-white px-5 pr-12 text-sm font-medium text-slate-800 outline-none transition focus:border-[#1557f5] focus:ring-2 focus:ring-[#1557f5]/15"
                  name="role"
                  onChange={updateValue}
                  value={values.role}
                >
                  <option>Financial Analyst</option>
                  <option>Portfolio Manager</option>
                  <option>Operations Lead</option>
                  <option>Finance Admin</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              </span>
              {errors.role ? <span className="mt-2 block text-xs font-medium text-rose-600" id="role-error">{errors.role[0]}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Password</span>
              <span className="relative block">
                <input
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'register-password-error' : undefined}
                  className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-5 pr-12 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1557f5] focus:bg-white"
                  name="password"
                  onChange={updateValue}
                  placeholder="Create password"
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
              {errors.password ? <span className="mt-2 block text-xs font-medium text-rose-600" id="register-password-error">{errors.password[0]}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Confirm Password</span>
              <span className="relative block">
                <input
                  aria-invalid={Boolean(errors.confirmPassword)}
                  aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
                  className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 px-5 pr-12 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1557f5] focus:bg-white"
                  name="confirmPassword"
                  onChange={updateValue}
                  placeholder="Confirm password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={values.confirmPassword}
                />
                <button
                  aria-label={showConfirmPassword ? 'Hide confirmation password' : 'Show confirmation password'}
                  className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                  onClick={() => setShowConfirmPassword((current) => !current)}
                  type="button"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </span>
              {errors.confirmPassword ? <span className="mt-2 block text-xs font-medium text-rose-600" id="confirm-password-error">{errors.confirmPassword[0]}</span> : null}
            </label>

            <label className="flex items-start gap-3 text-xs font-medium text-slate-500">
              <input
                checked={values.acceptedTerms}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#1557f5] focus:ring-[#1557f5]"
                name="acceptedTerms"
                onChange={updateValue}
                type="checkbox"
              />
              <span>
                I agree to the <button className="text-[#1557f5]" type="button">Terms & Conditions</button> and <button className="text-[#1557f5]" type="button">Privacy Policy</button>
              </span>
            </label>
            {errors.acceptedTerms ? <span className="block text-xs font-medium text-rose-600">{errors.acceptedTerms[0]}</span> : null}

            <button
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1557f5] text-sm font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-[#0f49d3] focus:outline-none focus:ring-2 focus:ring-[#1557f5] focus:ring-offset-2"
              type="submit"
            >
              <CheckCircle2 className="h-4 w-4" />
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm font-medium text-slate-700">
            Already have an account?{' '}
            <Link className="font-semibold text-[#1557f5] transition hover:text-[#0f49d3]" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default RegisterPage
