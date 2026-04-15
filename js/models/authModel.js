const BASE_URL = 'http://localhost:4000/api/auth';

export async function login(username, password) {
    // Vi bruger URLSearchParams for at ramme 'urlencoded' formatet fra din dokumentation
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

    if (!res.ok) throw new Error('Login fejlede');
    
    // Hvis API'et returnerer en token (tjek din konsol når du tester)
    const data = await res.json();
    if (data.token) {
        localStorage.setItem('userToken', data.token);
    }
    return data;
}