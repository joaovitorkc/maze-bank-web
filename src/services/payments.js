const getPayments = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/payments`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export { getPayments }