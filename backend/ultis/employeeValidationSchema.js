export const createEmployeeAccountValidationSchema = {
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
        matches: {
            options: [/^\S+$/], // Regex to ensure no spaces
            errorMessage: 'Username must not contain spaces.',
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
        },
        matches: {
            options: [/^\S+$/], // Regex to ensure no spaces
            errorMessage: 'Email must not contain spaces.',
        },
    },
    FirstName: {
        notEmpty: {
            errorMessage: 'First name cannot be empty',
        },
        isString: {
            errorMessage: 'Name must be a string',
        }
    },
    PhoneNumber: {
        notEmpty: {
            errorMessage: 'Phone number cannot be empty',
        },
        matches: {
            options: [/^\S+$/], // Regex to ensure no spaces
            errorMessage: 'Username must not contain spaces.',
        },
    }
}
