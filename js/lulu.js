const abilities = {
    'Far Step': {
        name: 'Far Step',
        desc: 'You leap through the air and land some distance away. You can jump up, down, or across to anywhere you choose within long range if you have a clear and unobstructed path to that location. You land safely.',
        flags: {
            type: 'Action',
            classification: 'Movement'
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
            type: 'Action to Initiate',
            classification: 'Defence'
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
            classification: 'Defence'
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
            classification: 'Defence'
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
            type: 'Action to initiate',
            classification: 'Grow'
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
            classification: 'Grow'
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
            classification: 'Defence'
        },
        cost: {mgt: 0, spd: 0, int: 1},
        duration: '10 Min',
        range: 'Self',
        source: 'Flavor: Protection'
    },
    'Bigger': {
        name: 'Bigger',
        desc: ' When you use Enlarge, you can choose to grow up to 12 feet (4 m) in height, and you add 3 more temporary points to your Might Pool',
        flags: {
            type: 'Enabler',
            classification: 'Defence'
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Focus: Grows to Towering Heights'
    }
}