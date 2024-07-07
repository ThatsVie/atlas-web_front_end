const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer'
};

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

// usage
bindLogWelcomeUser('Welcome'); // Should display "Welcome, Buillaume. Your occupation is: Engineer"
bindLogWelcomeUser('Hello'); // Should display "Hello, Buillaume. Your occupation is: Engineer"
