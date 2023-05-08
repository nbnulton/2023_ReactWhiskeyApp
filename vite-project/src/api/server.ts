let token = "dbf01db30963760c0cc13d5bd5db3b3c8a9a877739984dca"

export const server_calls = {
    get: async () => {
        // const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
        const response = await fetch(`https://potent-cord-ocean.glitch.me/api/whiskeys`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
        });
cd
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        // const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
        const response = await fetch(`https://potent-cord-ocean.glitch.me/api/whiskeys`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        // const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts/${id}`,
        const response = await fetch(`https://potent-cord-ocean.glitch.me/api/whiskeys/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        // const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts/${id}`,
        const response = await fetch(`https://potent-cord-ocean.glitch.me/api/whiskeys/${id}`, 
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
            
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}