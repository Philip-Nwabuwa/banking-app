export const getPasswordStrength = (password: string) => {
    if (!password) return 0;
  
    let strength = 0;
  
    // Check if password has minimum length requirement
    if (password.length >= 8) strength++;
  
    // Check if password contains letters, numbers, and symbols
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);
  
    if (hasLetters) strength++;
    if (hasNumbers) strength++;
    if (hasSymbols) strength++;
  
    return strength;
  };