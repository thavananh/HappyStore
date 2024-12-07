export const changePasswordSchema = {
    CustomerID: {
        isLength: {
            options: {
                min: 36,
                max: 36
            },
            errorMessage: 'UserID not appropriate',
        },
        notEmpty: {
            errorMessage: 'UserID cannot be empty',
        },
        isString: {
            errorMessage: 'UserID must be a string',
        },
        matches: {
            options: [/^\S+$/], // Regex to ensure no spaces
            errorMessage: 'UserID must not contain spaces.',
        },
    },
    Password: {
        notEmpty: {
            errorMessage: 'Password cannot be empty',
        },
        isLength: {
            options: {
                min: 8,
                max: 32,
            },
            errorMessage: 'Password must be at least 8 characters with a max of 32 characters.',
        },
        matches: {
            options: [/^\S+$/], // Regex to ensure no spaces
            errorMessage: 'Password must not contain spaces.',
        },
    }
}
