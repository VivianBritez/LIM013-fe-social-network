import { homeLogOut, createAddNoteToDB,readUser } from '../firebase-controller/home-controller.js';
import { deletepost,updatePosts } from '../firebase/firestore.js';

const formatoFecha = (fecha) =>{
  let fechaFin=(fecha.getDate())+" - "+(fecha.getMonth()+1)+" - "+fecha.getFullYear()+ "  "+ fecha.getHours()+":"+ fecha.getMinutes();
  return fechaFin;
}

const postTemplate = (doc) => {
//const user=readUser(doc.data().creatorID);
//console.log("userHome",user);
  const div = document.createElement('div');
  console.log("id",doc.data());
  div.classList = 'share-post';
  div.innerHTML = `
  <div class="container-user">
  <span><img class="user-image" src="${doc.data().photoUser}"></span>
  <h4 class="name-user">Publicado por ${doc.data().creatorName}
  <h4 class="name-user">${formatoFecha(doc.data().date.toDate())}</h4>
  <label class="ellipsis" id="ellipsis" ><i id="i" class="fas fa-ellipsis-h"></i>
  <select id="options">
  <option value="0" disabled selected>Elegir</option>
  <option id="edit" value="edit-${doc.id}">Editar</option>
  <option id="delete" value="delete-${doc.id}">Borrar</option>
  </select></label></h4>
  </div>
  <div id="text-post"><p>${doc.data().note}</p></div>
  <label><i id="i" class="far fa-heart"></i></label>
  <label><i id="i" class="far fa-comment"></i></label>
  <button type="button" id="save" class="hidden">guardar</button>

 `;
const text = div.querySelector('#text-post');
const optionVal = div.querySelector('#options');
const  ellipsis = div.querySelector('#ellipsis');
if(doc.data().creatorID!=localStorage.getItem('userID')){
ellipsis.classList.add('hidden');
}
optionVal.addEventListener('change', () => {
  const options = optionVal.value;
  let optionsArr=options.split("-");
  if(optionsArr[0]=="delete"){
    console.log("idborrado",optionsArr[1]);
    deletepost(optionsArr[1]);
  }
  if(optionsArr[0]=="edit"){
    text.innerHTML ='<textarea id="new-text">'+doc.data().note+'</textarea>';
    
    const save = div.querySelector('#save');
    save.classList.remove('hidden');
    save.addEventListener('click', () =>{
      const new_text=text.querySelector("#new-text").value;
      text.innerHTML='<p>'+new_text+'</p>';
      
      save.classList.add('hidden');
      if(new_text!=doc.data().note){
        updatePosts(optionsArr[1],new_text);
      }else{
        console.log("no cambio");
        //return false;
      }
      
    });
  }
  //esto pone seleccionado a "elegir" de nuevo cada que termine
  optionVal.getElementsByTagName('option')[0].selected = true;
  
 });
 

  return div;
};

export const profileTemplate = (posts) => {
  // console.log('user', user);
  const viewProfile = document.createElement('section');
  viewProfile.innerHTML = ` 
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
            <a id="btn-log-out">Salir</a>
        </li>
      </ul>
    </nav>
    </header>
    <section class="container-profile">
      <h2>Perfil</h2>
      <img class="user-image" src="${localStorage.getItem('userPhoto')}">
      <p>${localStorage.getItem('userName')}</p>
      <h3>Email</h3>
      <p>${localStorage.getItem('userEmail')}</p>
      </section>
    </section>
    <div id="post-container" class="post general-position">
    <div >
      <textarea id="box-post"class="textarea" placeholder="¿Qué quieres compartir?" maxlength="100" rows="8" cols="77">
        </textarea>
    </div>
    <label><i id="i" class="far fa-images"></i>
      <input class="file" type="file"></label>
    <select class="space" id="mode-post">
      <option value="" disabled selected>Modo</option>
      <option id="private" value="private">Privado</option>
      <option id="public" value="public">Publico</option>
    </select>
    <label class"plane"><i id="btn-share" class="far fa-paper-plane"></i></label>
  </div>
  <div id="message-post"> 
  </div>
  `;

  // Start grabbing our DOM Element
  const textPost = viewProfile.querySelector('#box-post');
  
  const post = viewProfile.querySelector('#mode-post');
  const btnShare = viewProfile.querySelector('#btn-share');
 
  posts.forEach((post) => {
    
    const messagePost = viewProfile.querySelector('#message-post');
    messagePost.appendChild(postTemplate(post));
  });
  // Share post
  btnShare.addEventListener('click', () => {
    const textPostVal = textPost.value;
    const postVal = post.value;
    console.log(postVal, 'provando valor')
    const date = new Date();
    createAddNoteToDB(localStorage.getItem('userID'), localStorage.getItem('userName'), textPostVal, date, postVal,localStorage.getItem("userPhoto"));

    // Clear text content
    // listPublication();
  });
  const btnlogOut = viewProfile.querySelector('#btn-log-out');
  btnlogOut.addEventListener('click', () => {
    homeLogOut();
  });
  return viewProfile;
};
/*


  */
