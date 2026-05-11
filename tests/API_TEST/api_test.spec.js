import { test, expect } from '@playwright/test';

test('API PUT request demo', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Sai Teja",
            "job": "Full Stack Developer"
        },
        headers: {
            'x-api-key': 'free_user_3DZzpDZ0RVNnCDXkykkMkMc5O7A'
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Sai Teja');
    expect(text).toContain('Full Stack Developer');
    console.log('API PUT request demo test completed successfully');
});


test('API POST request demo', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Sai Teja",
            "job": "QA Engineer"
        },
        headers: {
            'x-api-key': 'free_user_3DZzpDZ0RVNnCDXkykkMkMc5O7A'
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('Sai Teja');
    console.log('API POST request demo test completed successfully');
});


test('API GET request demo', async ({ request }) => {

    const response = await request.get(
        'https://reqres.in/api/users/2',
        {
            headers: {
                'x-api-key': 'free_user_3DZzpDZ0RVNnCDXkykkMkMc5O7A'
            }
        }
    );

    console.log(await response.json());

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Janet');

    console.log('API GET request demo test completed successfully');
    console.log(await response.json());

});


test('API DELETE request demo', async ({ request }) => {

    const response = await request.delete(
        'https://reqres.in/api/users/2',
        {
            headers: {
                'x-api-key': 'free_user_3DZzpDZ0RVNnCDXkykkMkMc5O7A'
            }
        }
    );

    expect(response.status()).toBe(204);

    console.log('API DELETE request demo test completed successfully');


});