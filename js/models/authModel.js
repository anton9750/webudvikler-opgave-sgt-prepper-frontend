const BASE_URL = 'http://localhost:4000/api/auth';

/**
 * Forsøger at logge brugeren ind via API'et
 * @param {string} username 
 * @param {string} password 
 */
export async function login(username, password) {
    // 1. Vi gør data klar i 'urlencoded' format, som dit API kræver
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    // 2. Sender POST request til login-endpointet
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
    });

    // 3. Hvis serveren svarer med fejl (f.eks. 401), smider vi en fejlbesked
    if (!res.ok) throw new Error('Forkert brugernavn eller adgangskode');
    
    // 4. Vi pakker svaret ud
    const data = await res.json();
    
    // NEED TO KNOW: Gemmer token og eventuel brugerdata i localStorage
    // Token fungerer som dit "digitale adgangskort" til serveren fremover.
    if (data.token) {
        localStorage.setItem('userToken', data.token);
        // Vi gemmer også brugernavnet så vi kan skrive "Hej Admin" i headeren
        localStorage.setItem('userName', data.user || username);
    }
    
    return data;
}

/**
 * Logger brugeren ud ved at slette data fra localStorage
 */
export function logout() {
    // Sletter alt relateret til login
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    
    // NEED TO KNOW: Vi sender et signal ligesom med kurven, 
    // så Headeren ved, den skal fjerne "Log ud" knappen med det samme.
    window.dispatchEvent(new Event('authChange'));
    
    // Sender brugeren tilbage til forsiden
    window.location.hash = '#/';
}

/**
 * Tjekker om der findes en token (om brugeren er logget ind)
 * @returns {boolean}
 */
export function isAuthenticated() {
    // Returnerer sandt hvis 'userToken' findes og ikke er tom
    return !!localStorage.getItem('userToken');
}

/**
 * Henter den gemte token til brug i fetch-kald (Authorization headers)
 * @returns {string|null}
 */
export function getToken() {
    return localStorage.getItem('userToken');
}