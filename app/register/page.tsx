'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Rocket, BarChart2, Users, CheckCircle2, Mail, Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-muted p-4 sm:p-6 lg:p-8 relative">
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-background px-4 py-2 rounded-full shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <Link href="/">
            <Image src="/logo-full.png" alt="TrueValue CRM" width={180} height={50} className="h-12 w-auto" priority />
          </Link>
        </div>

        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg p-10 sm:p-14 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" strokeWidth={2} />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-3">Account Created Successfully!</h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            <span>Check your inbox</span>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            Thank you for signing up for TrueValue! Your account has been created and is currently being reviewed by our team.
          </p>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-8 text-left">
            <h3 className="font-semibold text-foreground text-sm mb-3">What happens next?</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                We will review your account and activate it shortly
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                You will receive a confirmation email with next steps
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                Our team may reach out to you for onboarding
              </li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            Please <span className="font-semibold text-foreground">check your email regularly</span> — we will contact you soon.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full h-12 bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold text-base rounded-xl shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 transition-all"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          &copy; {new Date().getFullYear()} TrueValue CRM. All rights reserved.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted p-4 sm:p-6 lg:p-8 relative">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-background px-4 py-2 rounded-full shadow-sm hover:shadow-md"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>

      <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
        <Link href="/">
          <Image src="/logo-full.png" alt="TrueValue CRM" width={180} height={50} className="h-12 w-auto" priority />
        </Link>
      </div>

      <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden w-full max-w-[1000px] min-h-[600px] flex flex-col md:flex-row mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* Mobile view */}
        <div className="md:hidden w-full p-6">
          <div className="flex justify-center mb-6">
            <Image src="/logo-full.png" alt="Logo" width={140} height={40} className="h-10 w-auto" />
          </div>
          <RegisterFormContent
            form={form}
            setForm={setForm}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirm={showConfirm}
            setShowConfirm={setShowConfirm}
            onSubmit={handleSubmit}
          />
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?
              <Link href="/login" className="ml-1 font-bold text-primary hover:underline">Sign In</Link>
            </p>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex relative w-full h-[600px]">
          {/* Form side */}
          <div className="w-1/2 h-full overflow-y-auto flex flex-col items-center justify-start py-12 px-12">
            <RegisterFormContent
              form={form}
              setForm={setForm}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirm={showConfirm}
              setShowConfirm={setShowConfirm}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Overlay panel */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-12 text-center bg-secondary text-secondary-foreground">
            <h1 className="text-4xl font-bold mb-4">New here?</h1>
            <p className="text-lg text-secondary-foreground/80 mb-2 leading-relaxed">
              Sign up and discover a great amount of new opportunities for your business growth.
            </p>
            <p className="text-base text-secondary-foreground/90 font-semibold mb-6">
              Start your free 14-day trial today
            </p>
            <div className="flex justify-center gap-6 mb-6 text-secondary-foreground/80">
              <div className="flex flex-col items-center">
                <Rocket className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">Boost Sales</span>
              </div>
              <div className="flex flex-col items-center">
                <BarChart2 className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">Track Leads</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">Manage Teams</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-center mb-6">
              <div className="h-px bg-secondary-foreground/30 w-full" />
              <span className="px-4 text-sm text-secondary-foreground/80 font-medium">OR</span>
              <div className="h-px bg-secondary-foreground/30 w-full" />
            </div>

            <Link
              href="/login"
              className="px-6 py-2.5 bg-transparent border-2 border-secondary-foreground text-secondary-foreground rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-secondary-foreground hover:text-secondary transition-all duration-300 shadow-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm flex items-center justify-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-75">
        <div className="h-px bg-border w-full" />
        <span className="px-4 text-sm text-muted-foreground font-medium">OR</span>
        <div className="h-px bg-border w-full" />
      </div>

      <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="w-full bg-background text-foreground font-medium py-3 px-4 rounded-xl border border-border hover:bg-muted hover:border-border transition-all shadow-sm flex items-center justify-center gap-3 cursor-pointer"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-xs text-muted-foreground mt-6">
          &copy; {new Date().getFullYear()} TrueValue CRM. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function RegisterFormContent({
  form,
  setForm,
  showPassword,
  setShowPassword,
  showConfirm,
  setShowConfirm,
  onSubmit,
}: {
  form: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string };
  setForm: React.Dispatch<React.SetStateAction<typeof form>>;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  showConfirm: boolean;
  setShowConfirm: (v: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-foreground tracking-tight">Create Account</h2>
        <p className="text-sm text-muted-foreground mt-1">Start your free 14-day trial</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-semibold text-foreground mb-1.5 block">First Name</label>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
            className="w-full h-11 px-4 text-sm border-2 border-input rounded-lg bg-muted focus:bg-background focus:border-primary focus:outline-none transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-foreground mb-1.5 block">Last Name</label>
          <input
            type="text"
            required
            value={form.lastName}
            onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
            className="w-full h-11 px-4 text-sm border-2 border-input rounded-lg bg-muted focus:bg-background focus:border-primary focus:outline-none transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground mb-1.5 block">Work Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full h-11 px-4 text-sm border-2 border-input rounded-lg bg-muted focus:bg-background focus:border-primary focus:outline-none transition-colors"
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground mb-1.5 block">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            className="w-full h-11 px-4 pr-11 text-sm border-2 border-input rounded-lg bg-muted focus:bg-background focus:border-primary focus:outline-none transition-colors"
            placeholder="••••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Must be at least 10 characters long</p>
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground mb-1.5 block">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            required
            value={form.confirmPassword}
            onChange={(e) => setForm((f) => ({ ...f, confirmPassword: e.target.value }))}
            className="w-full h-11 px-4 pr-11 text-sm border-2 border-input rounded-lg bg-muted focus:bg-background focus:border-primary focus:outline-none transition-colors"
            placeholder="••••••••••"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full h-12 text-base bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-xl shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 transition-all font-bold cursor-pointer"
      >
        SIGN UP
      </button>

      <p className="text-xs text-muted-foreground text-center">
        By signing up, you agree to our{' '}
        <a href="#" className="text-primary hover:underline">Terms of Service</a> and{' '}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
