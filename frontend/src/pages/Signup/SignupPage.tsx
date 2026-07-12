import React from "react";
import { useState } from "react";
import { Eye, EyeOff, Shield, User, Mail, Building2, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import "./SignupPage.css";

const signupSchema = z
  .object({
    name: z.string().min(2, "Enter your full name"),
    email: z.string().email("Enter a valid email address"),
    organization: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignupFormValues) => {
    setSubmitError("");

    try {
      await signup({
        name: values.name,
        email: values.email,
        password: values.password,
        organization: values.organization?.trim() || undefined,
      });
      navigate("/");
    } catch {
      setSubmitError(
        "We could not create your account. Check the form and try again.",
      );
    }
  };

  return (
    <div className="signup-page">
      <section className="signup-frame" aria-labelledby="signup-title">
        <div className="signup-frame__left" aria-hidden="true">
          <div className="signup-frame__brand">
            <span className="signup-frame__brand-mark">
              <Shield size={14} />
            </span>
            <span className="signup-frame__brand-name">AssetFlow</span>
          </div>

          <div className="signup-frame__hero-copy">
            <p className="signup-frame__kicker">Create your workspace</p>
            <h2>Set up access for your team.</h2>
            <p>
              Create an employee account and start managing assets, bookings,
              and approvals in one place.
            </p>
          </div>

          <div className="signup-frame__hero-art">
            <span className="signup-frame__shape signup-frame__shape--one" />
            <span className="signup-frame__shape signup-frame__shape--two" />
            <span className="signup-frame__shape signup-frame__shape--three" />
            <span className="signup-frame__shape signup-frame__shape--four" />
            <span className="signup-frame__shape signup-frame__shape--five" />
            <span className="signup-frame__shape signup-frame__shape--six" />
            <span className="signup-frame__shape signup-frame__shape--seven" />
            <span className="signup-frame__shape signup-frame__shape--eight" />
          </div>
        </div>

        <div className="signup-frame__right">
          <div className="signup-frame__header">Create Account</div>
          <div className="signup-frame__subheader">Join AssetFlow</div>

          <div className="signup-frame__badge" aria-hidden="true">
            <User size={30} strokeWidth={2.2} />
          </div>

          <form
            className="signup-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <label className="signup-form__field">
              <span>Full Name</span>
              <div className="signup-form__input-wrap">
                <User size={16} />
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <span className="signup-form__error">{errors.name.message}</span>
              )}
            </label>

            <label className="signup-form__field">
              <span>Email</span>
              <div className="signup-form__input-wrap">
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
                <span className="signup-form__error">{errors.email.message}</span>
              )}
            </label>

            <label className="signup-form__field">
              <span>Organization</span>
              <div className="signup-form__input-wrap">
                <Building2 size={16} />
                <input
                  type="text"
                  autoComplete="organization"
                  placeholder="Company or department"
                  {...register("organization")}
                />
              </div>
            </label>

            <label className="signup-form__field">
              <span>Password</span>
              <div className="signup-form__input-wrap">
                <Lock size={16} />
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Create a password"
                  aria-invalid={errors.password ? "true" : "false"}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="signup-form__toggle"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <span className="signup-form__error">
                  {errors.password.message}
                </span>
              )}
            </label>

            <label className="signup-form__field">
              <span>Confirm Password</span>
              <div className="signup-form__input-wrap">
                <Lock size={16} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Confirm password"
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="signup-form__toggle"
                  onClick={() => setShowConfirmPassword((current) => !current)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="signup-form__error">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>

            {submitError && (
              <div className="signup-form__alert">{submitError}</div>
            )}

            <button
              type="submit"
              className="signup-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>

            <Link to="/login" className="signup-form__login-link">
              Already have an account? Sign in
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};
