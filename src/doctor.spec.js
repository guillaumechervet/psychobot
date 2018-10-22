var doctor = require('./doctor.js');

describe('doctor.js', () => {
  it('listen should respond has a doctor', () => {
    //1: Au démarrage de la conversation « Bonjour ${prénom} ${nom}, de quoi voulez-vous parler? »
    var dialogHistories = [];
    var client = { firstName: 'dupond', lastName: 'dupont' };
    var currentDate = new Date(2018, 10, 11, 16);
    var reponse = doctor.listen(dialogHistories, client, currentDate);
    expect(reponse.message.includes('Bonjour')).toBe(true);

    //2: Si pendant 59 secondes, le client n’a rien dit?  « Aller y, je vous écoute »
    dialogHistories.push(reponse);
    currentDate = new Date(2018, 10, 11, 16, 1);
    var reponse = doctor.listen(dialogHistories, client, currentDate);
    expect(reponse.message.includes('écoute')).toBe(true);

    //3: Si le client n’as pas saisi de texte et que le temps écoulé depuis le dernier message est inférieur ou égale a 59 secondes:Il ne se passe rien
    currentDate = new Date(2018, 10, 11, 16, 0, 30);
    var reponse = doctor.listen(dialogHistories, client, currentDate);
    expect(reponse).toBe(null);

    //4:Dans tous les autres cas, si le client a mis du texte, réponse aléatoire :
    //« Très bien »
    //« Intéressant  »
    //« A bon? »

    dialogHistories.push({
      who: 'you',
      date: new Date(2018, 10, 11, 16, 0, 30),
      message: 'youhou'
    });
    var reponse = doctor.listen(dialogHistories, client, currentDate);
    var rexgexp = new RegExp('Très bien|Intéressant|A bon', 'i');
    expect(rexgexp.test(reponse.message)).toBe(true);

    //5: Au bout 5 minutes passé strictement
    //« Les 5 minutes sont écoulé, cela fera 50 euro. Je n’accepte pas la carte »
    currentDate = new Date(2018, 10, 11, 16, 5, 30);
    var reponse = doctor.listen(dialogHistories, client, currentDate);
    expect(reponse.message.includes('Les 5 minutes')).toBe(true);
  });
});
