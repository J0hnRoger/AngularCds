'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('angularCds'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('timerCtrl', {
      $scope: scope
  	});

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    expect(scope.awesomeThings.length > 5).toBeTruthy();
  }));
});

//Module qui permette de lancer un chronomètre et de l'arrêter lorsqu'il atteint une durée définie.
//Usage : 
// Par défaut, le chronomètre est à 0.
// Je clic sur le bouton -> le chronomètre se déclenche.
// Je clic à nouveau sur le bouton -> le chronomètre reviens à 0.
// Lorsque la durée définie est atteinte -> le chronomètre sonne et se remets à 0.
// Je clic sur le bouton "option" -> le composant affiche une div en effet de transition
// vers le bas qui recouvre le chronomètre et contient un textbox
// une liste déroulante qui me permet de spécifier la durée sous la forme mm:ss 

//Limites
//On ne pourra pas quitter l'interface, la variable selectionnée dans les options n'est pas stockée. Si on rafraichit la page, elle est perdue. 
//Bonus
//Changement de couleur à chaque clic de manière aléatoire.