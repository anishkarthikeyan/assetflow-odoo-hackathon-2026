import React from 'react';
import { useState } from 'react';
import { ArrowRight, Eye, EyeOff, Lock, Mail, Sparkles } from 'lucide-react';
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
      setSubmitError(
        'We could not sign you in. Check your email and password, then try again.',
      );
    }
  };

  return (
    <div className="login-page">
      <section className="login-page__left" aria-labelledby="login-title">
        <div className="login-page__brand">
          <span className="login-page__brand-icon" aria-hidden="true">
            <Sparkles size={14} />
          </span>
          <span className="login-page__brand-name">AssetFlow</span>
        </div>

        <div className="login-page__card">
          <div className="login-page__heading-block">
            <h1 id="login-title">Welcome back</h1>
            <p>Please enter your details</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <label className="login-form__field">
              <span>Email address</span>
              <div className="login-form__input-wrap">
                <Mail className="login-form__icon" size={18} />
                <input
                  type="email"
                  autoComplete="email"
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

            <div className="login-form__row">
              <label className="login-form__remember">
                <input type="checkbox" />
                <span>Remember for 30 days</span>
              </label>

              <button type="button" className="login-form__link-button">
                Forgot password
              </button>
            </div>

            {submitError && <div className="login-form__alert">{submitError}</div>}

            <button type="submit" className="login-form__submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>

            <button type="button" className="login-form__google">
              <span className="login-form__google-mark" aria-hidden="true">G</span>
              <span>Sign in with Google</span>
            </button>

            <p className="login-page__signup">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </section>

      <aside className="login-page__right" aria-hidden="true">
        <div className="login-page__right-bg">
          <div className="login-illustration">
            <div className="login-illustration__floating login-illustration__floating--plus">+</div>
            <div className="login-illustration__floating login-illustration__floating--check">✓</div>
            <div className="login-illustration__floating login-illustration__floating--dot" />
            <div className="login-illustration__panel">
              <div className="login-illustration__mini-stack">
                <span />
                <span />
                <span />
              </div>
              <div className="login-illustration__chart-card">
                <div className="login-illustration__chart">
                  <span className="login-illustration__bar login-illustration__bar--1" />
                  <span className="login-illustration__bar login-illustration__bar--2" />
                  <span className="login-illustration__bar login-illustration__bar--3" />
                </div>
                <div className="login-illustration__line" />
              </div>
              <div className="login-illustration__hand login-illustration__hand--left" />
              <div className="login-illustration__hand login-illustration__hand--right" />
              <div className="login-illustration__device">
                <div className="login-illustration__screen">
                  <div className="login-illustration__screen-top" />
                  <div className="login-illustration__screen-graph" />
                </div>
              </div>
              <div className="login-illustration__title">Check Your Project Progress</div>
              <p className="login-illustration__copy">
                Track allocations, bookings, and maintenance activity from one operational dashboard.
              </p>
              <div className="login-illustration__pager">
                <span className="is-active" />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
