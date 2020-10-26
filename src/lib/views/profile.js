export const profileTemplate = () => {
    const user = getUser();
    console.log(user);
    const viewProfile = document.createElement("section");
    viewProfile.innerHTML = ` 
    <h2>Perfil</h2>
    <img class='user-image' src='${user.photoURL}'>
    <p>${user.displayName}</p>
    <h3 class="text-email">Email</h3>
    <p>${user.email}</p>`
    ;
};