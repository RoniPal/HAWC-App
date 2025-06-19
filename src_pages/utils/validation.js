export const validEmail = (email) => {
    //Regular expression for an EMAIL
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regEx.test(email)  //false or true
}