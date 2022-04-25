(() => {

    // No aplicando principio de responsabilidad única

    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) {}
    }

    class User extends Person {

        public lasAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date

        ){
            super(name, gender, birthdate);
            this.lasAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'sebastian',
        'Admin',
        'Sebastian',
        'M',
        new Date('1996-04-21')
    );

    console.log({ userSettings });


})();