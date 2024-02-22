function cpfFormat(cpf) {
    if (!/^\d{11}$/.test(cpf)) return cpf;

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function ctpsFormat(ctps) {
    if (!/^\d{11}$/.test(ctps)) return ctps;

    return ctps.replace(/(\d{7})(\d{3})(\d{1})/, '$1 $2-$3');
}

function pisFormat(pis) {
    if (!/^\d{11}$/.test(pis)) return pis;

    return pis.replace(/(\d{3})(\d{5})(\d{2})(\d{1})/, '$1.$2.$3-$4');
}

function cnpjFormat(cnpj) {
    if (!/^\d{14}$/.test(cnpj)) return cnpj;

    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

function phoneFormat(phone) {
    if (!/^\d{11}$/.test(phone)) return phone;

    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

function tielFormat(tiel) {
    if (!/^\d{12}$/.test(tiel)) return tiel;

    return tiel.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3');
}

function cepFormat(cep) {
    if (!/^\d{8}$/.test(cep)) return cep;

    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

const formatters = {
    cpf: cpfFormat,
    ctps: ctpsFormat,
    pis: pisFormat,
    cnpj: cnpjFormat,
    phone: phoneFormat,
    tiel: tielFormat,
    cep: cepFormat,
};

export { formatters };
