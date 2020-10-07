
export const profile = () => {
  // console.log('user', user);
  const newProfile = document.createElement('section');
  newProfile.innerHTML = ` 
      <header>
      <nav>
      <div class="title-energy">
      <h4 class="title">Energía Verde💡</h4></div>
      <input type="checkbox" id="check-and-uncheck">
      <label for="check-and-uncheck">
      <i class="fas fa-bars" id="hamburger"></i>
      <i class="fas fa-times" id="cross"></i>
      </label>
        <ul>
        <li>
        <a id="btn-home" href="#/home">Home</a>
          </li>
      
        </ul>
      </nav>
      </header>
      <section class="container-profile">
        <h2 >Perfil creado por</h2>
        <img class="user-image" src="${localStorage.getItem('userPhoto')}">
        <p>${localStorage.getItem('userName')}</p>
        <p>Lugar de residencia</p>
        <input type = "text" ></input>
        <textarea id = "about" placeholder= 'about me'></textarea>
        <button type= "button" id='btn-share-commet'>Share</button>
        </section>
      </section> `;
  const buttonShare = newProfile.querySelector('#btn-share-commet');

  buttonShare.addEventListener('click', () => {
    const commentAbout = newProfile.querySelector('#about').value;
    console.log(commentAbout);
  });
  return newProfile;
};
