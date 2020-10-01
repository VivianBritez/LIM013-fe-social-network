import { logOut } from "../firebase/auth.js"
import { createNoteDB,getNotesDB } from "../firebase/firestore.js";

export const homeLogOut = () =>{
    logOut()
    .then(() =>{
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPhoto');
        window.location.hash = '#/login';
    });
};

export const homeCreateNote = (uid,username,privacy,note) =>{
    createNoteDB(uid,username,privacy,note)
};

export const homeGetNotes = () =>{
    let htmlSalida='';
    getNotesDB()
    .then((res) => {
      
      if (res.empty) {
      
        } else {
            
      res.forEach((refDoc) => {
        const note = refDoc.data();
          htmlSalida+=`<div id="share-post">
          <h4 id="name-user">Publicado por ${note.nameUser}</h4>
          <textarea id="postboxpos" maxlength="100" rows="5" cols="77" ></textarea>
          <label><i id="i" class="far fa-heart"></i></label>
          <label><i id="i" class="far fa-comment"></i></label>
          <label class="ellipsis"><i id="i" class="fas fa-ellipsis-h"></i></label>
          <select id="options">
            <option value="" disabled selected>Elegir</option>
            <option id="edit" value="edit">Editar</option>
            <option id="delete" value="delete">Borrar</option>
          </select>
        </div>`;
        
        
          });
          return htmlSalida;
        }

    });
    
};