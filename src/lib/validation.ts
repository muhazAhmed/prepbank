export const validPassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    return regex.test(password);
}

export const validEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const hasNumber = (value: string) => {
    return /\d/.test(value);
}

export const hasMinValue = (value: string, number: number) => {
    return value.length >= number;
}

export const hasSpecialChar = (value: string) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(value);
}