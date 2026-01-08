const abilities = {
    'Phased Pocket': {
        name: 'Phased Pocket',
        desc: 'You ' +
            'connect yourself for one hour to a small ' +
            'space that is out of phase and moves with ' +
            'you. You can access this space as if it were a ' +
            'convenient pocket or bag, but nobody else can ' +
            'perceive or access the space unless they have ' +
            'the ability to interact with transdimensional ' +
            'areas. The space can hold up to 1 cubic foot. ' +
            'The space is a part of you, so you can’t use ' +
            'it to carry more cyphers than your limit, a ' +
            'detonation cypher activated inside the space ' +
            'harms you, and so on. When the connection ' +
            'ends, anything in the space falls out. For each ' +
            '2 additional Intellect points you spend, the ' +
            'pocket lasts an additional hour.',
        flags: {
            type: 'Enabler',
            classification: ['Other']
        },
        cost: {mgt: 0, spd: 0, int: 2},
        duration: '1+ Hour',
        range: 'NA',
        source: 'Type: Jack (T1) Discovery'
    },
    'Sabotage': {
        name: 'Sabotage',
        desc: 'You are particularly good at ' +
            'bypassing locks and dismantling devices. You ' +
            'are trained in lockpicking, the numenera, and ' +
            'any task that involves sabotaging an object.',
        flags: {
            type: 'Enabler',
            classification: ['Other']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Type: Jack (T1) Char options 1'
    },
    'Mighty': {
        name: 'Mighty',
        desc: '+6 Might to max Might pool',
        flags: {
            type: 'Enabler',
            classification: ['Other']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Foci: Radiates Vitality (T1) Destiny'
    },
    'Nurturing': {
        name: 'Nurturing',
        desc: 'Allies who have spent the last ' +
            'day with you add +1 to their recovery rolls. You ' +
            'also gain this benefit if at least one other ally ' +
            'gains it.',
        flags: {
            type: 'Enabler',
            classification: ['Healing']
        },
        cost: {mgt: 0, spd: 0, int: 0},
        duration: 'NA',
        range: 'NA',
        source: 'Desciptor: Nurturing Destiny'
    },
    'Amorphous body': {
        name: 'Amorphous body',
        desc: 'You can transform into amorphous goo for ' +
            'one minute. You retain your normal strength ' +
            'but move at half speed. You can ooze through ' +
            'cracks, can stretch up to three times your ' +
            'length, and have 2 additional points of Armor ' +
            'that apply only to piercing and slashing ' +
            'attacks. You gain an asset for climbing and ' +
            'an inability in jumping or running',
        flags: {
            type: 'Action to initiate',
            classification: ['Other']
        },
        cost: {mgt: 3, spd: 0, int: 0},
        duration: '1 Min',
        range: 'NA',
        source: 'Mutation: Amorphous body'
    },
    'Rotting Touch': {
        name: 'Rotting Touch',
        desc: 'Organic Material you touch disintegrates. This inflicts 4 points of damage',
        flags: {
            type: 'Action',
            classification: ['Attack']
        },
        cost: {mgt: 2, spd: 0, int: 0},
        duration: 'NA',
        range: 'Touch',
        source: 'Mutation: Rotting Touch'
    },
    'Corrosive Touch': {
        name: 'Corrosive Touch',
        desc: 'Inorganic Material you touch disintegrates. This inflicts 4 points of damage',
        flags: {
            type: 'Action',
            classification: ['Attack']
        },
        cost: {mgt: 2, spd: 0, int: 0},
        duration: 'NA',
        range: 'Touch',
        source: 'Mutation: Corrosive Touch'
    },


}
const equs = {
    'Caustic Shower': {
        name: 'Caustic Shower',
        lv: '10',
        effect: 'When activated, the cypher surrounds ' +
            'the user with a nimbus of energy, giving him ' +
            '+10 to Armor that works only against caustic ' +
            'damage. This lasts for one round, and the ' +
            'Armor is ablative, which is to say that each ' +
            'point of damage that it absorbs destroys 1 ' +
            'point of the Armor.\n' +
            '\n' +
            'The cypher also releases fourteen hailstone- ' +
            'sized motes of roiling caustic fluid that fly ' +
            'toward and attack all targets (including the user) ' +
            'within immediate range, one mote per target. If ' +
            'there are not fourteen targets within immediate ' +
            'range, the motes fly out to short range. If there ' +
            'are not fourteen targets within short range, they ' +
            'fly out to long range. If there are not fourteen ' +
            'targets within long range, the targets within long ' +
            'range get attacked twice (or more times) each, ' +
            'starting with those in immediate range. Deals Lv Dmg',
        depletion: 'Cypher',
        depleted: false
    },
    'Caustic Shower2': {
        name: 'Caustic Shower',
        lv: '9',
        effect: 'When activated, the cypher surrounds ' +
            'the user with a nimbus of energy, giving him ' +
            '+10 to Armor that works only against caustic ' +
            'damage. This lasts for one round, and the ' +
            'Armor is ablative, which is to say that each ' +
            'point of damage that it absorbs destroys 1 ' +
            'point of the Armor.\n' +
            '\n' +
            'The cypher also releases fourteen hailstone- ' +
            'sized motes of roiling caustic fluid that fly ' +
            'toward and attack all targets (including the user) ' +
            'within immediate range, one mote per target. If ' +
            'there are not fourteen targets within immediate ' +
            'range, the motes fly out to short range. If there ' +
            'are not fourteen targets within short range, they ' +
            'fly out to long range. If there are not fourteen ' +
            'targets within long range, the targets within long ' +
            'range get attacked twice (or more times) each, ' +
            'starting with those in immediate range. Deals Lv Dmg',
        depletion: 'Cypher',
        depleted: false
    },
    'Explorers Pack': {
        name: 'Explorers Pack',
        lv: 'NA',
        effect: '50 feet (15 m) of rope\n,'+
            'rations for three days,\n three spikes,\n' +
            'hammer,\n warm clothes,\n sturdy boots,\n three torches\n,' +
            'two minor glowglobes',
        depletion: 'Equipment',
        depleted: false
    },
    'Jar': {
        name: 'Jar',
        lv: 'NA',
        effect: 'Small jar that produces 1 ounce (28 g) of green paint when the sun rises',
        depletion: 'Oddity',
        depleted: false
    },

}