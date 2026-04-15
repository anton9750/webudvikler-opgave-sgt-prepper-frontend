const BASE_URL = 'http://localhost:4000/api/orders';

export async function createOrder(orderData) {
    const params = new URLSearchParams();
    params.append('deliveryAddress', orderData.address);
    params.append('deliveryZipcode', orderData.zipcode);
    params.append('deliveryCity', orderData.city);
    params.append('userId', orderData.userId || '1'); // Standard 1 hvis ikke logget ind
    params.append('status', '1'); // Status 1 betyder typisk "Modtaget/Ny"

    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    });

    if (!res.ok) throw new Error('Kunne ikke gemme ordren');
    return res.json();
}