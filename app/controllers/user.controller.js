/************************************************************/
/*                                                          */
/*              4 fonctions :                               */
/*    pour l’accès public                                   */
/*  pour les utilisateurs connectés                         */
/*  (rôle : utilisateur/modérateur/administrateur)          */ 
/*  pour les utilisateurs ayant un rôle de modérateur       */
/* pour les utilisateurs ayant un rôle d’administrateur/ap  */
/*                                                          */
/************************************************************/


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };