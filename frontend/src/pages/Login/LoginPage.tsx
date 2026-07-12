import React from 'react';
import { useState } from 'react';
import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../hooks/useAuth';
import './LoginPage.css';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setSubmitError('');

    try {
      await login(values.email, values.password);
      navigate('/');
    } catch {
      setSubmitError('We could not sign you in. Check your email and password, then try again.');
    }
  };

  return (
    <div className="login-page">
      <section className="login-page__hero">
        <div className="login-page__brand">
          <div className="login-page__brand-mark">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="login-page__eyebrow">AssetFlow ERP</p>
            <h1>Sign in to the asset control center</h1>
          </div>
        </div>

        <p className="login-page__lead">
          Track assets, manage bookings, route maintenance, and keep every department in sync from one operational view.
        </p>

        <div className="login-page__highlights">
          <article>
            <ShieldCheck size={18} />
            <div>
              <strong>Role-based access</strong>
              <span>Employees sign up first, admins promote from the directory.</span>
            </div>
          </article>
          <article>
            <Lock size={18} />
            <div>
              <strong>Secure workflow</strong>
              <span>Token-backed sessions with centralized account handling.</span>
            </div>
          </article>
          <article>
            <Mail size={18} />
            <div>
              <strong>Operational visibility</strong>
              <span>See allocations, bookings, and maintenance in one place.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="login-page__panel" aria-labelledby="login-title">
        <div className="login-page__panel-header">
          <p className="login-page__panel-kicker">Welcome back</p>
          <h2 id="login-title">Log in with your employee account</h2>
          <p>
            Use the email address registered by your organization. Role assignment happens later in Organization Setup.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className="login-form__field">
            <span>Email address</span>
            <div className="login-form__input-wrap">
              <Mail className="login-form__icon" size={18} />
              <input
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email')}
              />
            </div>
            {errors.email && <span className="login-form__error">{errors.email.message}</span>}
          </label>

          <label className="login-form__field">
            <span>Password</span>
            <div className="login-form__input-wrap">
              <Lock className="login-form__icon" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                aria-invalid={errors.password ? 'true' : 'false'}
                {...register('password')}
              />
              <button
                type="button"
                className="login-form__toggle"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <span className="login-form__error">{errors.password.message}</span>}
          </label>

          {submitError && <div className="login-form__alert">{submitError}</div>}

          <div className="login-form__options">
            <label className="login-form__remember">
              <input type="checkbox" defaultChecked />
              <span>Keep me signed in</span>
            </label>

            <button type="button" className="login-form__link-button">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-form__submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign in to AssetFlow'}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="login-page__panel-footer">
          <p>Need an account?</p>
          <Link to="/signup">Request employee signup</Link>
        </div>
      </section>
    </div>
  );
};
