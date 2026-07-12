import React from "react";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import "./LoginPage.css";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setSubmitError("");

    try {
      await login(values.email, values.password);
      navigate("/");
    } catch {
      setSubmitError(
        "We could not sign you in. Check your email and password, then try again.",
      );
    }
  };

  return (
    <div className="login-page">
      <section className="login-frame" aria-labelledby="login-title">
        <div className="login-frame__left" aria-hidden="true">
          <div className="login-frame__brand">
            <span className="login-frame__brand-mark">
              <Shield size={14} />
            </span>
            <span className="login-frame__brand-name">AssetFlow</span>
          </div>

          <div className="login-frame__hero-copy">
            <p className="login-frame__kicker">Secure ERP access</p>
            <h2>Track assets, allocations, and shared resources.</h2>
            <p>
              Centralize employee access, maintenance, bookings, and asset
              visibility in one workspace.
            </p>
          </div>

          <div className="login-frame__hero-art">
            <span className="login-frame__shape login-frame__shape--one" />
            <span className="login-frame__shape login-frame__shape--two" />
            <span className="login-frame__shape login-frame__shape--three" />
            <span className="login-frame__shape login-frame__shape--four" />
            <span className="login-frame__shape login-frame__shape--five" />
            <span className="login-frame__shape login-frame__shape--six" />
            <span className="login-frame__shape login-frame__shape--seven" />
            <span className="login-frame__shape login-frame__shape--eight" />
            <span className="login-frame__shape login-frame__shape--nine" />
            <span className="login-frame__shape login-frame__shape--ten" />
            <span className="login-frame__shape login-frame__shape--eleven" />
            <span className="login-frame__shape login-frame__shape--twelve" />
            <span className="login-frame__shape login-frame__shape--thirteen" />
            <span className="login-frame__shape login-frame__shape--fourteen" />
            <span className="login-frame__shape login-frame__shape--fifteen" />
            <span className="login-frame__shape login-frame__shape--sixteen" />
          </div>
        </div>

        <div className="login-frame__right">
          <div className="login-frame__header">Welcome Back</div>
          <div className="login-frame__subheader">Sign in to AssetFlow</div>

          <div className="login-frame__badge" aria-hidden="true">
            <Shield size={30} strokeWidth={2.2} />
          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <label className="login-form__field">
              <span>Email</span>
              <div className="login-form__input-wrap">
                <Mail size={16} />
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <span className="login-form__error">
                  {errors.email.message}
                </span>
              )}
            </label>

            <label className="login-form__field">
              <span>Password</span>
              <div className="login-form__input-wrap">
                <Lock size={16} />
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="***********"
                  aria-invalid={errors.password ? "true" : "false"}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="login-form__toggle"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <span className="login-form__error">
                  {errors.password.message}
                </span>
              )}
            </label>

            <div className="login-form__row login-form__row--meta">
              <label className="login-form__remember">
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>

              <button
                type="button"
                className="login-form__link-button login-form__link-button--inline"
              >
                Forgot Password?
              </button>
            </div>

            <div className="login-form__divider" />

            <div className="login-form__row login-form__row--stacked">
              <div className="login-form__new-here">New to AssetFlow?</div>

              <div className="login-form__note">
                Create an employee account.
                <br />
                Administrator approval is required before asset access.
              </div>
            </div>

            {submitError && (
              <div className="login-form__alert">{submitError}</div>
            )}

            <button
              type="submit"
              className="login-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>

            <Link to="/signup" className="login-form__create-account">
              Create Account
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};
