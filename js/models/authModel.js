const BASE_URL = 'http://localhost:4000/api/auth';

/**
 * Logger brugeren ind via API'et
 * Dokumentationen kræver: username (info@wu.dk) og password (password)
 */
export async function login(username, password) {
    // 1. Gør data klar i 'urlencoded' format
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
    if (!res.ok) {
        throw new Error('Forkert brugernavn eller adgangskode');
    }
    
    // 4. Pak svaret ud (indeholder din token)
    const data = await res.json();
    
    // 5. Gem data i localStorage hvis vi fik en token
    if (data.token) {
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userName', username);
        
        // Send signal til Headeren om at opdatere sig selv
        window.dispatchEvent(new Event('authChange'));
    }
    
    return data;
}

/**
 * Verificerer om den gemte token stadig er gyldig hos serveren
 * Bruger 'Bearer Token' formatet fra din dokumentation
 */
export async function verifyToken() {
    const token = localStorage.getItem('userToken');
    if (!token) return false;

    try {
        const res = await fetch(`${BASE_URL}/verify`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.ok;
    } catch (err) {
        return false;
    }
}

/**
 * Logger brugeren ud ved at slette tokens
 */
export function logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    
    // Giv besked til Headeren
    window.dispatchEvent(new Event('authChange'));
    
    // Send brugeren tilbage til forsiden
    window.location.hash = '#/';
}

/**
 * Hjælpefunktion: Tjekker om der findes en token lokalt
 */
export function isAuthenticated() {
    return !!localStorage.getItem('userToken');
}

/**
 * Hjælpefunktion: Henter token til brug i andre fetch-kald (f.eks. ved reviews)
 */
export function getToken() {
    return localStorage.getItem('userToken');
}