// src/components/ProfileEditor.js

const ProfileEditor = () => {
  return (
    <div className="profile-editor">
      <h1>Édition de mon profil utilisateur !</h1>
      
      <div className="profile-form">
        <div className="form-group">
          <label>Nom complet de l'utilisateur</label>
          <input type="text" value="Mario Jeanne AFCORE Soumith" />
        </div>
        
        <div className="form-group">
          <label>Téléphone</label>
          <input type="text" value="224624881439" />
        </div>
        
        <div className="form-group">
          <label>E-mail</label>
          <input type="email" value="mjasoumath@gmail.com" />
        </div>
        
        <div className="form-group">
          <label>Ancien mot de pass</label>
          <input type="password" placeholder="Saisir le mot de pass actuel" />
        </div>
        
        <div className="form-group">
          <label>Nouveau mot de pass</label>
          <input type="password" placeholder="Noveau mot de pass" />
        </div>
        
        <div className="form-group">
          <label>Confirmer mot de pass</label>
          <input type="password" placeholder="Confirm mot de pass" />
        </div>
        
        <button className="validate-btn">Valider l'édition</button>
      </div>

      <div className="footer">
        <p>Copyright © ABS Solution 2020</p>
        <p>Un code d'accès aux données contenues, accrédit ou réservée.</p>
      </div>
    </div>
  );
};

export default ProfileEditor;