const getPayments = async () => {
    try {
        const response = await fetch("http://localhost:3000/payments");
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export { getPayments }