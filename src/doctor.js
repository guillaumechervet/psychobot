function listen(dialogHistories, client, currentDate) {
  if (!dialogHistories || dialogHistories.length <= 0) {
    return {
      date: currentDate,
      who: 'doctor',
      message: `Bonjour ${client.firstName} ${
        client.lastName
      }, de quoi voulez-vous parler?`
    };
  }
  var firstReponse = dialogHistories[0];
  var is5MinutesEllapsed = currentDate - firstReponse.date >= 60 * 1000 * 5;
  if (is5MinutesEllapsed) {
    return {
      date: currentDate,
      who: 'doctor',
      message:
        'Les 5 minutes sont écoulé, cela fera 50 euro. Je n’accepte pas la carte'
    };
  }

  var lastReponse = dialogHistories[dialogHistories.length - 1];
  var is59SecondEllapsed = currentDate - lastReponse.date > 59 * 1000;
  if (is59SecondEllapsed) {
    return {
      date: currentDate,
      who: 'doctor',
      message: 'Aller y, je vous écoute'
    };
  }

  var isBefore59SecondEllapsed = currentDate - lastReponse.date <= 59 * 1000;
  if (isBefore59SecondEllapsed && lastReponse.who === 'you') {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    const responses = ['Très bien', 'Intéressant', 'A bon?'];
    const randomIndex = getRandomInt(3);
    return {
      date: currentDate,
      who: 'doctor',
      message: responses[randomIndex]
    };
  }

  return null;
}

export default { listen };
