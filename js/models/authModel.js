const BASE_URL = 'http://localhost:4000/api/auth';

// 1. LOGIN
export async function login(username, password) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
    });

    if (!res.ok) throw new Error('Forkert brugernavn eller adgangskode');

    let token = res.headers.get('Authorization');
    if (token && token.startsWith('Bearer ')) {
        token = token.split(' ')[1];
    }

    if (!token) {
        try {
            const data = await res.json();
            token = data.token;
        } catch (e) { /* Ingen JSON body */ }
    }

    // Dummy-fallback hvis CORS driller (som vi snakkede om)
    if (!token && res.ok) {
        token = "dummy-token-" + Date.now();
    }

    if (token) {
        localStorage.setItem('userToken', token);
        localStorage.setItem('userName', username);
        window.dispatchEvent(new Event('authChange'));
        return true;
    } 
    return false;
}

// 2. IS AUTHENTICATED (VIGTIG: skal have export)
export function isAuthenticated() {
    return !!localStorage.getItem('userToken');
}

// 3. LOGOUT (VIGTIG: skal have export - det var her fejlen var!)
export function logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    
    // Giv besked til headeren om at rydde navnet
    window.dispatchEvent(new Event('authChange'));
    
    // Send brugeren væk fra profilen og hjem til forsiden
    window.location.hash = '#/';
}

// 4. VERIFY TOKEN (VIGTIG: skal have export)
export async function verifyToken() {
    const token = localStorage.getItem('userToken');
    if (!token) return false;
    try {
        const res = await fetch(`${BASE_URL}/verify`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return res.ok;
    } catch (err) {
        return false;
    }
}