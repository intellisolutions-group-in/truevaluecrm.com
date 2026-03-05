'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Rocket, BarChart2, Users, Info, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
  };

  if (showMessage) {
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-warning/10 mb-6">
            <Info className="w-10 h-10 text-warning" strokeWidth={2} />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-3">Platform Coming Soon</h1>

          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            The TrueValue platform is currently under development. We&apos;re working hard to bring you the best experience.
          </p>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-8 text-left">
            <h3 className="font-semibold text-foreground text-sm mb-3">In the meantime:</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                If you&apos;ve already registered, your account is being set up
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                You will receive an email when the platform is ready
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                Check your email regularly for updates from our team
              </li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            Don&apos;t have an account yet?{' '}
            <Link href="/register" className="font-semibold text-primary hover:underline">Sign up now</Link>
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
          <LoginFormContent
            form={form}
            setForm={setForm}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            onSubmit={handleSubmit}
          />
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?
              <Link href="/register" className="ml-1 font-bold text-primary hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex relative w-full h-[600px]">
          {/* Form side */}
          <div className="w-1/2 h-full overflow-y-auto flex flex-col items-center justify-start py-12 px-12">
            <LoginFormContent
              form={form}
              setForm={setForm}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Overlay panel */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-12 text-center bg-accent text-accent-foreground">
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg text-accent-foreground/80 mb-6 leading-relaxed">
              To keep connected with us please login with your personal info.
            </p>
            <div className="flex justify-center gap-6 mb-6 text-accent-foreground/90">
              <div className="flex flex-col items-center">
                <Rocket className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">Dashboard</span>
              </div>
              <div className="flex flex-col items-center">
                <BarChart2 className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">Analytics</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">Team</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-center mb-6">
              <div className="h-px bg-accent-foreground/30 w-full" />
              <span className="px-4 text-sm text-accent-foreground/80 font-medium">OR</span>
              <div className="h-px bg-accent-foreground/30 w-full" />
            </div>

            <Link
              href="/register"
              className="px-6 py-2.5 bg-transparent border-2 border-accent-foreground text-accent-foreground rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-accent-foreground hover:text-accent transition-all duration-300 shadow-lg"
            >
              Create Account
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
          onClick={() => setShowMessage(true)}
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

function LoginFormContent({
  form,
  setForm,
  showPassword,
  setShowPassword,
  onSubmit,
}: {
  form: { email: string; password: string };
  setForm: React.Dispatch<React.SetStateAction<typeof form>>;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm space-y-5">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-foreground tracking-tight">Welcome Back</h2>
        <p className="text-sm text-muted-foreground mt-1">Sign in to your account to continue</p>
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground mb-1.5 block">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full h-11 px-4 text-sm border-2 border-input rounded-lg bg-muted focus:bg-background focus:border-primary focus:outline-none transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-sm font-semibold text-foreground">Password</label>
          <a href="#" className="text-xs font-medium text-primary hover:text-primary-dark transition-colors">
            Forgot password?
          </a>
        </div>
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
      </div>

      <button
        type="submit"
        className="w-full h-12 text-base bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-xl shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 transition-all font-bold cursor-pointer"
      >
        SIGN IN
      </button>
    </form>
  );
}
