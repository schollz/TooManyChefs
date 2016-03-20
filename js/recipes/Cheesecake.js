var React = require('react');

var RecipeStep = require('../RecipeStep.react.js');

var nextStep = function() {
  return this.nextStep();
}

var Cheesecake = {
  name: 'Cheesecake Delight',
  difficulty: 'easy',
  ingredients: ['1 cup graham crackers', '3 tbsp + 1 cup sugar', '1/3 cup butter', '32 oz cream cheese', '1 tbsp vanilla', '4 eggs'],
  description: 'Creamy and rich, this scrumptious dessert is a classic at the dinner table.',

  /* A recipe is a list of json steps */
  steps: [
    {
      pretext: <span>Using the arrow keys, preheat the oven to 325°F.<br/></span>,
      instruction: 300,
      type: 'counter',
      timer: 15,
      onTimeout: function(value) {
        if (value >= 320 && value <= 330) {
          this.nextStep();
        } else {
          // TODO: wrong value
        }
      }
    },
    {
      pretext: 'Break the graham crackers into little',
      instruction: 'c r u m b s',
      posttext: '.',
      timer: 15,
    },
    {
      pretext: <span>Smush together the graham crackers and butter by mashing 'm'.<br/></span>,
      instruction: 'm',
      type: 'mash',
      mashCount: 10,
      timer: 15,
    },
    {
      pretext: <span>Pour in 3 tbsp sugar by holding 's'.<br/></span>,
      instruction: 'sssssssssssssssssssssssssssssssssssssssssssssugar',
      posttext: <span><br/>TBSP:&nbsp;&nbsp;&nbsp;&nbsp;^ 1&nbsp;&nbsp;&nbsp;&nbsp;^ 2&nbsp;&nbsp;&nbsp;&nbsp;^ 3&nbsp;&nbsp;&nbsp;&nbsp;^ ALL THE SUGAR</span>,
      timer: 15,
      onComplete: () => {}, // TODO: too much sugar
      onTimeout: function(progress) {
        if (progress >= 18 && progress <= 30) {
          this.nextStep();
        } else {
          // TODO: too much or too little?
        }
      },
    },
    {
      pretext: 'Layer the',
      instruction: 'bottom',
      posttext: 'of a 9-inch pan with the sugary mixture.',
      timer: 10,
    },
    {
      pretext: <span>Toss cream cheese, 1 cup sugar, and vanilla into a large bowl.<br/></span>,
      instruction: 'ccsv->bowl',
      timer: 10,
    },
    {
      pretext: 'Equip the electric',
      instruction: 'mixer',
      posttext: 'for +3 AGI vs baked goods.',
      timer: 10,
    },
    {
      pretext: <span>Use the arrow keys to turn the mixer on LOW.<br/>OFF LOW - - MED - - HIGH - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WAY TOO HIGH<br/></span>,
      instruction: '^',
      type: 'dial',
      timer: 10,
      onTimeout: function(value) {
        if (value >= 4 && value <= 7) {
          this.nextStep();
        } else {
          // TODO: too high or too low?
        }
      },
    },
    {
      pretext: <span>Crack in the eggs, but not too fast.<br/></span>,
      instruction: 'egg egg egg egg',
      timer: 20,
    },
    {
      pretext: <span>Turn the mixer off and set it aside.<br/>OFF LOW - - MED - - HIGH - -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WAY TOO HIGH<br/></span>,
      instruction: '^',
      type: 'dial',
      startValue: 5,
      timer: 10,
      onTimeout: function(value) {
        if (value <= 3) {
          this.nextStep();
        } else {
          // TODO: not turned off!
        }
      },
    },
    {
      pretext: 'Taking the bowl,',
      instruction: 'pour',
      posttext: 'the mixture over the crust in the pan.',
      timer: 10,
    },
    {
      pretext: <span>Pat yourself on the back while the oven finishes heating.<br/></span>,
      instruction: 'patpatpat',
      timer: 10,
    },
    {
      pretext: <span>Put the pan in the oven with the arrow keys.<br/></span>,
      instruction: '-|pan|-',
      type: 'dial',
      maxValue: 15,
      posttext: <span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-oven-</span>,
      timer: 10,
      onTimeout: function(value) {
        if (value >= 12) {
          this.nextStep();
        } else {
          // TODO: not in oven!
        }
      },
    },
    {
      pretext: 'Twiddle your thumbs for 55 minutes.',
      timer: 3300,
      // TODO: set timeout so next message appears after a bit.
      onTimeout: nextStep,
    },
    {
      pretext: <span>Maybe we should play a game to pass the time. Mash the caps-lock key to mess with the other chefs.<br/></span>,
      instruction: 'CAPSLOCK', // TODO: custom case of mash
      type: 'mash',
      mashCount: 6,
      timer: 10,
    },
    {
      pretext: 'Haha, aren\'t you the greatest troll. Chuckle to yourself for a few seconds.',
      timer: 10,
      onTimeout: nextStep,
    },
    {
      pretext: <span>54 minutes to go... maybe we should turn up the temperature to 400°F to speed things up.<br/></span>,
      instruction: 325,
      type: 'counter',
      timer: 10,
      onTimeout: function(value) {
        if (value >= 395 && value <= 405) {
          this.nextStep();
        } else {
          // TODO: wrong value
        }
      }
    },
    {
      pretext: <span>What the hell, make that <span className="fireRed">1000°F</span><br/></span>,
      instruction: 400,
      type: 'counter',
      stepValue: 50,
      timer: 10,
      onTimeout: function(value) {
        if (value >= 995) {
          this.nextStep();
        } else {
          // TODO: wrong value
        }
      }
    },
    {
      pretext: <span>There! Now it should only take-- oh god did something catch on <span className="fireRed">fire</span>!<br/></span>,
      instruction: 'yes',
      timer: 10,
    },
    {
      pretext: <span>Take it out you fool!<br/></span>,
      instruction: '-|pan|-',
      type: 'dial',
      maxValue: 15,
      startValue: 15,
      posttext: <span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-oven-</span>,
      timer: 5,
      onTimeout: function(value) {
        if (value <= 8) {
          this.nextStep();
        } else {
          // TODO: not in oven!
        }
      },
    },
    {
      pretext: 'Equip the fire',
      instruction: 'extinguisher',
      posttext: 'for +3 against the element fire.',
      timer: 10,
    },
    {
      pretext: <span>Mash 'w' to put out the fire.<br/></span>,
      instruction: 'w',
      type: 'mash',
      timer: 10,
    },
    {
      pretext: 'Turn',
      instruction: 'off',
      posttext: 'the oven before your friends catch fire.',
      timer: 8,
    },
    {
      pretext: <span>Taste a little bit of the cheesecake.<br/></span>,
      instruction: 'yum?',
      timer: 8,
    },
    {
      pretext: <span>Give your beautiful mess a name.<br/></span>,
      instruction: 'We\'ll call it: ',
      type: 'textinput',
      timer: 8,
      onTimeout: function(name) {
        Cheesecake.name = Cheesecake.name.concat(' (' + name + ')');
        this.nextStep();
      },
    },
  ],
};

module.exports = Cheesecake;