const abilities = {
    'Far Step': {
        name: 'Far Step',
        desc: 'You leap through the air and land some distance away. You can jump up, down, or across to anywhere you choose within long range if you have a clear and unobstructed path to that location. You land safely.',
        flags: {
            type: 'Action',
            classification: ['Movement']
        },
        cost: {mgt: 0, spd: 0, int: 2},
        duration: 'NA',
        range: 'Long Distance',
        source: 'Type: Adept'
    },
    'Resonance Field': {
        name: 'Resonance Field',
        desc: 'Faint lines in a color you choose form a tracery over your entire body and emit faint light.  Whenever a creature within immediate range makes an attack against you, the pattern energizes to block the attack. You can make an Intellect defense roll in place of the defense roll you would normally make. If you do so and you get a minor effect, the creature attacking you takes 1 point of damage. If you get a major effect, the creature attacking you takes 4 points of damage',
        flags: {
            type: 'Enabler',
            classification: ['Defence']
        },
        cost: {mgt: 0, spd: 0, int: 1},
        duration: '1 min',
        range: 'Self',
        source: 'Type: Adept'
    },
    'Ward': {
        name: 'Ward',
        desc: 'You have a shield of energy around you at all times that helps deflect attacks. You gain +1 to Armor.',
        flags: {
            type: 'Enabler',
            classification: ['Defence']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'Infinity',
        range: 'Self',
        source: 'Type: Adept'
    },
    'Closed Mind': {
        name: 'Closed Mind',
        desc: 'You are trained in Intellect defense tasks and have +2 Armor against damage that selectively targets your Intellect Pool (which normally ignores Armor).',
        flags: {
            type: 'Enabler',
            classification: ['Defence']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'Infinity',
        range: 'Self',
        source: 'Flavor: Protection'
    },
    'Enlarge': {
        name: 'Enlarge',
        desc: 'You trigger an enzymatic reaction that draws additional mass from another dimension, and you (and your clothing or suit) grow larger. '+
              'You achieve a height of 9 feet (3 m) and stay that way for about a minute. During that time, you add 4 points to your Might Pool, add +1 to Armor, and add +2 to your Might Edge. ' +
              'While you are larger than normal, your Speed defense rolls are hindered, and you are practiced in using your fists as heavy weapons. ' +
              'When the effects of Enlarge end, your Armor and Might Edge return to normal, and you subtract a number of points from your Might Pool equal to the number you gained (if this brings the Pool to 0, subtract the overflow first from your Speed Pool and then, if necessary, from your Intellect Pool). ' +
              'Each additional time you use Enlarge before your next ten-hour recovery roll, you must apply an additional level of Effort. Thus, the second time you use Enlarge, you must apply one level of Effort; the third time you use Enlarge, two levels of Effort; and so on.',
        flags: {
            type: 'Action',
            classification: ['Grow']
        },
        cost: {mgt: 1, spd: 0, int: 0},
        duration: '1 Min',
        range: 'Self',
        source: 'Focus: Grows to Towering Heights'
    },
    'Freakishly Large': {
        name: 'Freakishly Large',
        desc: 'Your increased size intimidates most people. While you enjoy the effects of Enlarge, all intimidation tasks you attempt are eased.',
        flags: {
            type: 'Enabler',
            classification: ['Grow']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'Infinity',
        range: 'Self',
        source: 'Focus: Grows to Towering Heights'
    },
    'Wind Armor': {
        name: 'Wind Armor',
        desc: 'When you wish it, a cyclone of wind surrounds your body for ten minutes, giving you +1 to Armor and an additional +2 to Armor against physical projectile weapons specifically. While the cyclone is active, you feel no discomfort from the wind, and you can interact with other creatures and objects normally because the wind flow automatically diverts to enable such interaction.',
        flags: {
            type: 'Enabler',
            classification: ['Defence']
        },
        cost: {mgt: 0, spd: 0, int: 1},
        duration: '10 Min',
        range: 'Self',
        source: 'Flavor: Protection'
    },
    'Bigger': {
        name: 'Bigger',
        desc: 'When you use Enlarge, you can choose to grow up to 12 feet (4 m) in height, and you add 3 more temporary points to your Might Pool',
        flags: {
            type: 'Enabler',
            classification: ['Grow']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Focus: Grows to Towering Heights'
    },
    'Draw the Attack': {
        name: 'Draw the Attack',
        desc: 'Attack: When an NPC attacks a ' +
            'character, another PC can prominently present ' +
            'themselves, shout taunts, and move to try to ' +
            'get the foe to attack them instead. In most ' +
            'cases, this action succeeds without a roll—the ' +
            'opponent attacks the prominent PC instead of ' +
            'their companions. In other cases, such as with ' +
            'intelligent or determined foes, the prominent ' +
            'character must succeed at an Intellect action ' +
            'to draw the attack. If that Intellect action is ' +
            'successful, the foe attacks the prominent ' +
            'character, whose defenses are hindered by one ' +
            'steps. Two characters attempting to draw an ' +
            'attack at the same time cancel each other out.',
        flags: {
            type: 'Action',
            classification: ['Defence']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Base Action'
    },
    'Take the Attack': {
        name: 'Take the Attack',
        desc: 'A character can use their action ' +
            'to throw themselves in front of a foe’s successful ' +
            'attack to save a nearby comrade. The attack ' +
            'automatically succeeds against the sacrificial ' +
            'character, and it deals 1 additional point of ' +
            'damage. A character cannot willingly take more ' +
            'than one attack each round in this way.',
        flags: {
            type: 'Action',
            classification: ['Defence']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Base Action'
    },
    'Punch': {
        name: 'Punch',
        desc: 'Large weapon when enlarged. 8dmg (6+2)',
        flags: {
            type: 'Action',
            classification: ['Attack', 'Grow']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'Immediate',
        source: 'Focus: Grows to Towering Heights'
    },
    'Bite Attack': {
        name: 'Bite Attack',
        desc: 'You are practiced in making bite ' +
            'attacks that deal damage as a medium weapon 6dmg (4+2). ' +
            'In a recursion that operates under the law of ' +
            'Magic, you regain Might points equal to half ' +
            'the amount of damage you inflict on a foe (after ' +
            'Armor is accounted for; round down for the ' +
            'total).',
        flags: {
            type: 'Action',
            classification: ['Attack']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'Immediate',
        source: 'Vampire'
    },
    'Light Sensitive': {
        name: 'Light Sensitive',
        desc: 'You have an issue with bright ' +
            'light, especially sunlight. When exposed to ' +
            'sunlight or strong UV light, the difficulty of all ' +
            'tasks is increased by one step. In a recursion ' +
            'that operates under the law of Magic, you also ' +
            'descend one step on the damage track and take ' +
            '5 points of damage per round (this damage ' +
            'ignores Armor, unless that Armor completely ' +
            'covers you).',
        flags: {
            type: 'Enabler',
            classification: ['Weakness']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Vampire'
    },
    'Blood Driven': {
        name: 'Blood Driven',
        desc: 'You’re always hungry for ' +
            'blood, especially when you force yourself ' +
            'not to act on that yearning. Whenever you ' +
            'descend one step on the damage track, you ' +
            'must succeed on a difficulty 2 Intellect defense ' +
            'roll or you are compelled to try to bite the ' +
            'closest living creature and drink its blood. You ' +
            'continue attacking until you move one step ' +
            'up the damage track or until you succeed on a '  +
            'subsequent difficulty 3 Intellect defense roll.',
        flags: {
            type: 'Enabler',
            classification: ['Weakness']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Vampire'
    },
    'Bat Form': {
        name: 'Bat Form',
        desc: 'Turn into bat can fly :D',
        flags: {
            type: 'Action',
            classification: ['Movement']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Vampire'
    },
    'Huge': {
        name: 'Huge',
        desc: 'When you use Enlarge, you can choose to grow up to 16 feet (5 m) in height. ' +
            'When you do, you add +1 to Armor (a total of +2 to Armor) and deal 2 additional ' +
            'points of damage with melee attacks',
        flags: {
            type: 'Enabler',
            classification: ['Grow']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Focus: Grows to Towering Heights'
    },
    'Stasis': {
        name: 'Stasis',
        desc: 'You surround a foe of your size or smaller with scintillating energy, ' +
            'keeping it from moving or acting for one minute, as if frozen solid.' +
            ' You must be able to see the target, and it must be within short range.' +
            ' While in stasis, the target is impervious to harm, cannot be moved,' +
            ' and is immune to all effects',
        flags: {
            type: 'Action',
            classification: ['Attack']
        },
        cost: {mgt: 0, spd: 0, int: 3},
        duration: '1min',
        range: 'short range',
        source: 'Type: Adept'
    },
    'Fists of Fury': {
        name: 'Fists of Fury',
        desc: 'You inflict 2 additional points of damage with unarmed attacks',
        flags: {
            type: 'Enabler',
            classification: ['Attack']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Flavor: Chimera'
    },
    'Force Field Barrier': {
        name: 'Force Field Barrier',
        desc: 'You create an opaque, stationary barrier of solid energy (a force field) within immediate range. '+
            'The barrier is 10 feet by 10 feet (3 m by 3 m) and of negligible thickness. It is a level 2 barrier '+
            'and lasts for ten minutes. It can be placed anywhere it fits, whether against a solid object (including '+
            'the ground) or floating in the air. Each level of Effort you apply strengthens the barrier by one level. '+
            'For example, applying two levels of Effort creates a level 4 barrier.',
        flags: {
            type: 'Action',
            classification: ['Defence']
        },
        cost: {mgt: 0, spd: 0, int: 3},
        duration: '10min',
        range: 'immediate range',
        source: 'Type: Adept'
    }
}
const equs = {
    'Wand of Major Illusion': {
        name: 'Wand of Major Illusion',
        lv: 'idk',
        effect: 'Does Major Illusion',
        depletion: '0 Charges',
        depleted: true
    },
    'Wand of Onslaught': {
        name: 'Wand of Onslaught',
        lv: 'idk',
        effect: 'Does Onslaught',
        depletion: '0 Charges',
        depleted: true
    },
    'Wand of Fireblood': {
        name: 'Wand of Fireblood',
        lv: 'idk',
        effect: '15 Spd dmg and hinders targets movement for 3 rounds at long range',
        depletion: '0 Charges',
        depleted: true
    },
    'Demon armor': {
        name: 'Demon Armor',
        lv: 'NA',
        effect: 'Stronk armor. No penalty. cannot take off',
        depletion: 'NA',
        depleted: false
    },
    'Angelic Ward': {
        name: 'Angelic Ward',
        lv: 7,
        effect: 'Once activated, the figurine\'s spirit emerges and becomes semisolid as a glowing, '+
            'human-sized winged angel. It follows within 3 feet (1 m) of the figurine owner. Anything '+
            'within long range that attacks the owner is attacked by the angelic ward, which sends out '+
            'a bolt of flesh-rotting energy, doing damage equal to the artifact\'s level. Once activated, it functions for a day.',
        depletion: '1 in 1d10',
        depleted: false
    }
}