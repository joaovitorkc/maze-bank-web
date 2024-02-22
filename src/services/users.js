const getUsers = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
        throw error;
    }
}

const createUser = async (userData) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/insertuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error)
        }
        return data
    } catch (error) {
        let message = "Erro ao cadastrar o usuário"
        if (error.message === "Erro ao criar o usuário. CPF já cadastrado.") {
            message = "CPF ja cadastrado"
        }
        throw new Error(message);
    }
}

export { getUsers, createUser }