exports.validname = (name) => {
    const nameregex = /^[a-zA-Z0-9_]{3,16}$/
    return nameregex.text(name)
}
exports.validemail = (email)=> {
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return emailregex.text(email)
}
exports.validpassword = (password) => {
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordregex.test(password)
}