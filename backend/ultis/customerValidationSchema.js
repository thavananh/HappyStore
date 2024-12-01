export const createUserValidationSchema = {
    Username: {
        isLength: {
            options: {
                min: 8,
                max: 255,
            },
            errorMessage: 'Username must be at least 8 characters with a max of 255 characters.',
        },
        notEmpty: {
            errorMessage: 'Username cannot be empty',
        },
        isString: {
            errorMessage: 'Username must be a string',
        },
    },
    Password: {
        notEmpty: {
            errorMessage: 'password cannot be empty',
        },
        isLength: {
            options: {
                min: 8,
                max: 32,
            },
            errorMessage: 'Password must be at least 8 characters with a max of 32 characters.',
        }
    },
    Email: {
        notEmpty: {
            errorMessage: 'Email cannot be empty',
        },
        isLength: {
            options: {
                min: 6,
                max: 254,
            },
            errorMessage: 'Email must be at least 6 characters with a max of 254 characters.',
        }
    }
}


