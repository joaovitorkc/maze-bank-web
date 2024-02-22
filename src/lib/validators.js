function isCPFValid(cpf) {
    if (!import.meta.env.PROD) {
        return true;
    }

    if (!cpf || typeof cpf !== 'string') {
        return false;
    }

    if (!/^\d{11}$/.test(cpf)) {
        return false;
    }

    const resto1 =
        cpf
            .slice(0, 9)
            .split('')
            .reduce((acc, val, i) => {
                return acc + val * (10 - i);
            }, 0) % 11;
    const digito1 = resto1 < 2 ? 0 : 11 - resto1;

    if (Number(cpf.charAt(9)) !== digito1) {
        return false;
    }

    const resto2 =
        cpf
            .slice(0, 10)
            .split('')
            .reduce((acc, val, i) => {
                return acc + val * (11 - i);
            }, 0) % 11;
    const digito2 = resto2 < 2 ? 0 : 11 - resto2;

    if (Number(cpf.charAt(10)) !== digito2) {
        return false;
    }

    return true;
}
export { isCPFValid };