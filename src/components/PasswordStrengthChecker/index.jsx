// PasswordStrengthChecker.js
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import styles from './style.module.css';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [requirementsMet, setRequirementsMet] = useState({
    hasUppercase: false,
    isAlphanumeric: false,
    startsWithUppercase: false,
    hasNumeric: false,
    isLengthValid: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Additional criteria for a strong password
    const hasUppercase = /[A-Z]/.test(newPassword);
    const isAlphanumeric = /^[A-Za-z0-9]+$/.test(newPassword);
    const startsWithUppercase = /^[A-Z]/.test(newPassword);
    const hasNumeric = /[0-9]/.test(newPassword);
    const isLengthValid = newPassword.length >= 8;

    setRequirementsMet({
      hasUppercase,
      isAlphanumeric,
      startsWithUppercase,
      hasNumeric,
      isLengthValid,
    });

    // Use zxcvbn to assess password strength
    const result = zxcvbn(newPassword);

    // Map zxcvbn strength levels to custom levels
    const strengthLevels = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
    const customStrength = strengthLevels[result.score];

    // Provide suggestions from zxcvbn
    const zxcvbnSuggestions = result.feedback.suggestions || [];
    setSuggestions(zxcvbnSuggestions);

    setStrength(customStrength);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={`${styles['password-strength-checker']} ${styles.valid}`}>
      <label>Password:</label>
      <div className={styles['input-container']}>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        <span className={styles['visibility-icon']} onClick={togglePasswordVisibility}>
          {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>
      <div className={styles['requirements']}>
        <p className={`${styles['requirement']} ${requirementsMet.hasUppercase ? styles['fulfilled'] : ''}`}>
          At least one uppercase alphabet
        </p>
        <p className={`${styles['requirement']} ${requirementsMet.isAlphanumeric ? styles['fulfilled'] : ''}`}>
          Only alphanumeric inputs are accepted
        </p>
        <p className={`${styles['requirement']} ${requirementsMet.startsWithUppercase ? styles['fulfilled'] : ''}`}>
          It should start with an uppercase alphabet
        </p>
        <p className={`${styles['requirement']} ${requirementsMet.hasNumeric ? styles['fulfilled'] : ''}`}>
          At least one numeric value must be used
        </p>
        <p className={`${styles['requirement']} ${requirementsMet.isLengthValid ? styles['fulfilled'] : ''}`}>
          The password should be of a specific length (8 characters)
        </p>
      </div>
      {strength && (
        <div className={`${styles['strength-indicator']} ${styles[strength.toLowerCase()]}`}>
          {strength}
        </div>
      )}
      {suggestions.length > 0 && (
        <div className={styles['suggestions']}>
          <p>Suggestions:</p>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
