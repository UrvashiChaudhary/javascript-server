// move validateEmail() from validation to helpers.js
function validateEmail (input) {
    const correct = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;
    return correct.test(input);
}
// export it
export { validateEmail };