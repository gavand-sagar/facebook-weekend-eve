export function setAuthenticationInformation(isAuthenticated, token) {
    localStorage.setItem('isAuthenticated', isAuthenticated)
    localStorage.setItem('token', token)
}

export function isUserAuthenticated() {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    return isAuthenticated == 'true';
}

export function getToken(){
    const token = localStorage.getItem('token')
    return token;
}