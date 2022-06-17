const headers = {
    'Accept': 'application/json'
}

export const getJson = (url: string) => fetch(url, {headers}).then(res => res.json())
export const postJson = (url: string, body: object) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
}

export const putJson = (url: string, body: object) => {
    return fetch(url, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
}

export const patchJson = (url: string, body: object) => {
    return fetch(url, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
}

export const deleteJson = (url: string) => {
    return fetch(url, {
        method: 'PUT',
        headers
    }).then(res => res.json())
}