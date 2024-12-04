import bcrypt from 'bcryptjs';

const saltRound = 10

export const hashPassword = (password) => {
    return bcrypt.hashSync(password, saltRound);
}

export const comparePassword = (password1, password2) => {
    return bcrypt.compareSync(password1, password2);
}


