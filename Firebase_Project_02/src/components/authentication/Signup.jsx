import React, { useState } from 'react';
import styles from "./Signup.module.css";
import { push, ref } from "firebase/database";
import { database } from "../../../configuration/firebase";
import {
    TbUser, TbMail, TbLock, TbPhone, TbCalendar,
    TbGenderBigender, TbEye, TbEyeOff, TbArrowRight,
    TbCheck, TbX, TbSparkles
} from "react-icons/tb";

const INITIAL_FORM_STATE = {
    username: "",
    email: "",
    password: "",
    age: "",
    tel: "",
    gender: "",
};

/* Password strength checker */
const getStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
};

const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
const strengthColors = ["", "#ef4444", "#f97316", "#eab308", "#22c55e"];

function Signup() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState("");

    const strength = getStrength(formData.password);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            await push(ref(database, "users"), formData);
            setStatusMessage({ type: 'success', text: 'Account created successfully! Welcome aboard 🎉' });
            setFormData(INITIAL_FORM_STATE);
        } catch (error) {
            console.error("Firebase submit error:", error);
            setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const fields = [
        { name: "username", label: "Full Name",      type: "text",     placeholder: "Muhammad Abdullah",     icon: <TbUser /> },
        { name: "email",    label: "Email Address",  type: "email",    placeholder: "you@example.com",       icon: <TbMail /> },
        { name: "tel",      label: "Phone Number",   type: "tel",      placeholder: "+92 300 0000000",       icon: <TbPhone /> },
    ];

    return (
        <div className={styles.card}>
            {/* Glow accents */}
            <div className={styles.glowTop} />
            <div className={styles.glowBottom} />

            {/* Header */}
            <div className={styles.header}>
                <div className={styles.iconBadge}>
                    <TbSparkles size={22} />
                </div>
                <h2 className={styles.title}>Create your account</h2>
                <p className={styles.subtitle}>Join us — it only takes a minute</p>
            </div>

            {/* Status message */}
            {statusMessage && (
                <div className={`${styles.alert} ${styles[statusMessage.type]}`}>
                    {statusMessage.type === 'success' ? <TbCheck size={16} /> : <TbX size={16} />}
                    <span>{statusMessage.text}</span>
                </div>
            )}

            <form onSubmit={handleForm} className={styles.form}>
                {/* Text / Email / Phone fields */}
                {fields.map(({ name, label, type, placeholder, icon }) => (
                    <div key={name} className={`${styles.fieldGroup} ${focused === name ? styles.fieldFocused : ""}`}>
                        <label className={styles.label}>{label}</label>
                        <div className={styles.inputWrap}>
                            <span className={styles.inputIcon}>{icon}</span>
                            <input
                                className={styles.input}
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                value={formData[name]}
                                required
                                onChange={handleInput}
                                onFocus={() => setFocused(name)}
                                onBlur={() => setFocused("")}
                            />
                        </div>
                    </div>
                ))}

                {/* Password field */}
                <div className={`${styles.fieldGroup} ${focused === "password" ? styles.fieldFocused : ""}`}>
                    <label className={styles.label}>Password</label>
                    <div className={styles.inputWrap}>
                        <span className={styles.inputIcon}><TbLock /></span>
                        <input
                            className={styles.input}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Min. 8 characters"
                            value={formData.password}
                            required
                            onChange={handleInput}
                            onFocus={() => setFocused("password")}
                            onBlur={() => setFocused("")}
                        />
                        <button
                            type="button"
                            className={styles.eyeBtn}
                            onClick={() => setShowPassword((v) => !v)}
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? <TbEyeOff size={18} /> : <TbEye size={18} />}
                        </button>
                    </div>
                    {/* Strength bar */}
                    {formData.password && (
                        <div className={styles.strengthRow}>
                            <div className={styles.strengthBars}>
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className={styles.strengthBar}
                                        style={{ background: i <= strength ? strengthColors[strength] : "rgba(255,255,255,0.08)" }}
                                    />
                                ))}
                            </div>
                            <span className={styles.strengthLabel} style={{ color: strengthColors[strength] }}>
                                {strengthLabels[strength]}
                            </span>
                        </div>
                    )}
                </div>

                {/* Age + Gender row */}
                <div className={styles.row}>
                    <div className={`${styles.fieldGroup} ${focused === "age" ? styles.fieldFocused : ""}`}>
                        <label className={styles.label}>Age</label>
                        <div className={styles.inputWrap}>
                            <span className={styles.inputIcon}><TbCalendar /></span>
                            <input
                                className={styles.input}
                                type="number"
                                name="age"
                                placeholder="25"
                                value={formData.age}
                                min="1" max="120"
                                required
                                onChange={handleInput}
                                onFocus={() => setFocused("age")}
                                onBlur={() => setFocused("")}
                            />
                        </div>
                    </div>

                    <div className={`${styles.fieldGroup} ${focused === "gender" ? styles.fieldFocused : ""}`}>
                        <label className={styles.label}>Gender</label>
                        <div className={styles.inputWrap}>
                            <span className={styles.inputIcon}><TbGenderBigender /></span>
                            <select
                                className={`${styles.input} ${styles.select}`}
                                name="gender"
                                value={formData.gender}
                                required
                                onChange={handleInput}
                                onFocus={() => setFocused("gender")}
                                onBlur={() => setFocused("")}
                            >
                                <option value="" disabled>Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className={styles.spinner} />
                    ) : (
                        <>
                            Create Account
                            <TbArrowRight size={18} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}

export default Signup;
