/**
 * Extrait les identifiants d'image dans une chaîne et les remplace par des index.
 * 
 * @param input La chaîne d'entrée contenant les balises avec identifiants délimités par %*_ ... %*_
 * @returns Un objet contenant :
 *    - updatedText : La chaîne avec les identifiants remplacés par %*_{index}%*_
 *    - images : Le tableau des identifiants extraits, dans l'ordre d'apparition.
 */
export function processText(input: string): { updatedText: string; images: string[] } {
    // Expression régulière pour capturer le contenu entre %*_ et %*_
    const regex = /%\*_(.*?)%\*_/g;
    
    // Tableau qui va contenir les identifiants d'image extraits
    const images: string[] = [];
    
    // Variable compteur pour générer l'index dans le texte
    let counter = 0;
    
    // Utilisation de String.replace avec un callback pour traiter chaque correspondance
    const updatedText = input.replace(regex, (match, capturedGroup) => {
      // capturedGroup contient l'identifiant d'image (par exemple : WOMEN-Blouses_Shirts-id_00000380-04_1_front.jpg)
      images.push(capturedGroup);
      counter++;
      // Retourne la nouvelle chaîne de substitution avec l'index (exemple : %*_1%*_)
      return `%*_${counter}%*_`;
    });
    
    return { updatedText, images };
  }
  
  // Exemple d'utilisation :
  
  const sampleText = `
  Excellente question ! Compte tenu de votre morphologie en X, de votre peau claire et de vos cheveux bruns, 
  je vous recommande trois tenues complètes qui mettront en valeur votre silhouette et votre teint :
  **Tenue 1 : Élégance Classique et Moderne**
  * %*_WOMEN-Blouses_Shirts-id_00000380-04_1_front.jpg%*_
  : Cette blouse orange vibrante en soie de haute qualité apportera une touche de couleur à votre tenue.
  * %*_WOMEN-Pants-id_00001426-01_2_side.jpg%*_
  : Ce pantalon noir ajusté à la cheville complétera parfaitement la blouse orange.
  **Tenue 2 : Décontractée Chic et Tendance**
  * %*_WOMEN-Graphic_Tees-id_00002962-01_7_additional.jpg%*_
  : Ce t-shirt blanc avec des motifs verts et une inscription en français apportera une touche de fraîcheur.
  * %*_WOMEN-Denim-id_00000274-01_1_front.jpg%*_
  : Ce jean beige à la coupe slim mettra en valeur vos jambes.
  **Tenue 3 : Bohème Romantique et Sophistiquée**
  * %*_WOMEN-Blouses_Shirts-id_00000057-03_1_front.jpg%*_
  : Cette blouse paysanne à imprimé cachemire apportera une touche bohème.
  * %*_WOMEN-Skirts-id_00003213-02_1_front.jpg%*_
  : Cette jupe longue noire à motifs floraux complétera parfaitement la blouse.
  `;
  
  const result = processText(sampleText);
  
  console.log("Texte mis à jour :");
  console.log(result.updatedText);
  console.log("Mapping index => identifiants :");
  console.log(result.images);
  
  /*
  Le résultat affichera par exemple :
  Texte mis à jour :
  ... * %*_1%*_ : ...
               * %*_2%*_ : ...
               * %*_3%*_ : ...
               * %*_4%*_ : ...
               * %*_5%*_ : ...
               * %*_6%*_ : ...
               
  Mapping index => identifiants :
  [
    "WOMEN-Blouses_Shirts-id_00000380-04_1_front.jpg",
    "WOMEN-Pants-id_00001426-01_2_side.jpg",
    "WOMEN-Graphic_Tees-id_00002962-01_7_additional.jpg",
    "WOMEN-Denim-id_00000274-01_1_front.jpg",
    "WOMEN-Blouses_Shirts-id_00000057-03_1_front.jpg",
    "WOMEN-Skirts-id_00003213-02_1_front.jpg"
  ]
  */
  
  