const abilities = [
    {
        name: 'Oncoming Storm',
        desc: 'You can predict weather patterns (approaching storm systems, cloud cover, wind direction) for the next tweleve hours',
        flags: ['Action', 'Util'],
        cost: {mgt: 0, spd: 0, int: 1},
        duration: '12hr',
        range: 'Self',
        source: 'Descriptor: Sylph'
    },
    {
        name: 'Sylph Flight',
        desc: 'You can fly a long distance as your action, or a short distance as part of your action, for up to ten minutes',
        flags: ['Enabler', 'Movement'],
        cost: [{mgt: 0, spd: 2, int: 0}, {mgt: 0, spd: 0, int: 2}],
        duration: '10min',
        range: 'Self',
        source: 'Descriptor: Sylph'
    },
    {
        name: 'Resonance Field',
        desc: `Faint lines in a color you choose form a tracery over your entire body and emit faint light. The effect
            lasts for one minute. Whenever a creature within immediate range makes an attack against you, the pattern energizes
            to block the attack. You can make an Intellect defense roll in palce of the defense roll you would normally make. If
            you do so and you get a minor effect, the creature attacking you takes 1 point of damage. If you get a major effect,
            the creature attacking you takes 4 points of damage.`,
        flags: ['Action', 'Defence'],
        cost: [{mgt: 0, spd: 0, int: 1}],
        duration: '1min',
        range: 'Self',
        source: 'Type: Adept'
    },
    {
        name: 'Ward',
        desc: 'You have a shield of energy around you at all times that helps deflect attacks. You gain +1 Armor',
        flags: ['Enabler', 'Defence'],
        cost: [{mgt: 0, spd: 0, int: 0}],
        duration: 'Inf',
        range: 'Self',
        source: 'Type: Adept'
    },
    {
        name: 'Push',
        desc: `You telekinetic push a ceature or object an immediate distance in any direction you wish. You must be able
            to see the target, which must be your size or smaller, must not be affixed to anything, and must be within short range.
            The push is quick, and the force is too crude to be manipulated. For example, you can't use this ability to pull a lever or close a door.
            `,
        flags: ['Action', 'Util'],
        cost: [{mgt: 0, spd: 0, int: 2}],
        duration: 'Inst',
        range: 'Short (15m)',
        source: 'Type: Adept'
    },
    {
        name: 'Closed Mind',
        desc: 'You are trained in Intellect defence tasks and have +2 Armor against damage that selectively targets your Intellect Pool',
        flags: ['Enabler', 'Defence'],
        cost: [{mgt: 0, spd: 0, int: 0}],
        duration: 'Inf',
        range: 'Self',
        source: 'Flavour: Protection'
    },
    {
        name: 'Lederdemain',
        desc: `You can perform small but seemingly impossible tricks. For example you can make a small object in your hands disappear and move
             into a desired spot within reach (like your pocket). You can make someone believe that they have something in their possession that they do
             not have or visa versa. You can switch similar objects right in front of someone's eyes`,
        flags: ['Action', 'Util'],
        cost: [{mgt: 0, spd: 1, int: 0}],
        duration: 'Inst',
        range: '???',
        source: 'Foci: Fell Through a Rabit Hole'
    },
    {
        name: 'Midnight Armor',
        desc: `The appearance of a lightless silhouette and giving you +1 Armor for up to one hour. While your Midnight Armor remains active,
            you have an asset on stealth tasks relate to moving through dark areas`,
        flags: ['Action', 'Defence'],
        cost: [{mgt: 0, spd: 2, int: 0}],
        duration: '1hr',
        range: 'Self',
        source: 'Foci: Taps the Void'
    },
    {
        name: 'Void Knowledge',
        desc: `You are trained in tasks related to activating a midnights stone's void matter, which means you have a better chance of gaining
            a desired effect instead of a random effect. If you activate a midnight stone to gain its effect, it is used up and turns to ash, as normal`,
        flags: ['Enabler', 'Util'],
        cost: [{mgt: 0, spd: 0, int: 0}],
        duration: 'Inf',
        range: 'Self',
        source: 'Foci: Taps the Void'
    }
];

const void_stone_table = [
    {
        desc: 'The user makes a free one-action recovery roll and adds 2 to their Int Edge for 1hr.',
        weight: [1, 1]
    },
    {
        desc: `The stone sprouts fine glassy tendrils similar to hair. If the user continues to hold the stone their body sprouts the same 
           sort of hair (first their hand, then their arm, and so on across their body), inflicting 4 points of ambient damage each round, until
           they let go if the stone.`,
        weight: [2, 2]
    },
    {
        desc: 'A thundering sound somehow blinds (rather then deafens) the user for several minutes.',
        weight: [3, 3]
    },
    {
        desc: 'A users cypher in the user\'s possession is renewed, or a depleted artifact is recharged.',
        weight: [4, 4]
    },
    {
        desc: `The skin around the user’s eyes, mouth, ears, and all other orifices is sealed
            with a sudden surge of new skin growth. The user suffocates if not helped by
            someone poking a hole over the mouth or nostrils and keeping it open (the skin
            keeps trying to grow closed). After about ten minutes, the growth reverses if the
            user is still alive.`,
        weight: [5, 5]
    },
    {
        desc: 'The user makes a free one-action recovery roll and adds 2 to their Might Edge for one hour.',
        weight: [6, 6]
    },
    {
        desc: `The user’s legs and arms bloodlessly drop off. If held in place to where they were once attached,
         reattachment occurs if the user makes a recovery roll.`,
        weight: [7, 7]
    },
    {
        desc: `The user learns the answer to one question in an intuitive leap, but this leaves a
            'nagging headache for several hours afterward.`,
        weight: [8, 10]
    },
    {
        desc: `The user becomes distracted by the sound of a strange crunching noise that only
            they can hear, apparently coming from behind the nearest wall or the floor. It
            increases the difficulty of all Intellect tasks by one step for a few days.`,
        weight: [11, 11]
    },
    {
        desc: `As part of the same action used to activate the stone, the user can direct a ray of
            transdimensional energy, inflicting 6 points of damage on a target within long
            range with a successful attack.`,
        weight: [12, 12]
    },
    {
        desc: `The midnight stone detonates, inflicting 6 points of damage on the user and
            everyone within immediate range who fails a difficulty 6 Speed defense task.`,
        weight: [13, 13]
    },
    {
        desc: 'The user gains a <b data-bs-toggle="offcanvas" href="#beneficialMutationCoPanel" role="button" aria-controls="beneficialMutationCoPanel">beneficial mutation</b> that lasts for 28 hours.',
        weight: [14, 16]
    },
    {
        desc: 'The user gains a <b data-bs-toggle="offcanvas" href="#harmfulMutationCoPanel" role="button" aria-controls="harmfulMutationCoPanel">harmful mutation<b/> that lasts for 28 hours.',
        weight: [17, 17]
    },
    {
        desc: `The user gains a <b data-bs-toggle="offcanvas" href="#beneficialMutationCoPanel" role="button" aria-controls="beneficialMutationCoPanel">beneficial mutation</b> that is permanent, replacing any previous
            beneficial mutation from a midnight stone.`,
        weight: [18, 18]
    },
    {
        desc: 'The user gains a <b data-bs-toggle="offcanvas" href="#harmfulMutationCoPanel" role="button" aria-controls="harmfulMutationCoPanel">harmful mutation</b> that is permanent.',
        weight: [19, 19]
    },
    {
        desc: `The user gains a <b data-bs-toggle="offcanvas" href="#powerfulMutationCoPanel" role="button" aria-controls="powerfulMutationCoPanel">powerful mutation</b> that is permanent, replacing any previous
            powerful mutation from a midnight stone.`,
        weight: [20, 20]
    }
]

const beneficial_mutations_co = [
    {
        name: 'Corebook',
        desc: `Use the table in Numenera corebook.`,
        weight: [1, 50]
    },
    {
        name: 'Boneless',
        desc: `You have cartilage instead of bones. You can wriggle through tight spaces and slip free from bonds. 
             You have an asset on any task that involves contortions or escaping.`,
        weight: [51, 54]
    },
    {
        name: 'Empathy',
        desc: `You feel other people’s moods and emotions. You have an asset on any task to determine another
             creature’s motives or emotional state, or to see through lies and other deceptions.`,
        weight: [55, 60]
    },
    {
        name: 'Improved jumping',
        desc: `You have an asset on any task involving jumping.`,
        weight: [61, 65]
    },
    {
        name: 'Remarkable poise',
        desc: `You have near perfect balance. You have an asset on any task that involves balancing.`,
        weight: [66, 69]
    },
    {
        name: 'Machine interface',
        desc: `You have an asset on any task involving understanding, operating, or repairing a numenera device.`,
        weight: [70, 74]
    },
    {
        name: 'Eagle eyes',
        desc: `You have an asset on any visual perception task.`,
        weight: [75, 79]
    },
    {
        name: 'Polyglot',
        desc: `When you hear a language spoken for at least one minute, you can communicate in that language as a native speaker for 28 hours.`,
        weight: [80, 83]
    },
    {
        name: 'Precognition',
        desc: `You catch glimpses of the future. You have an asset on all initiative tasks.`,
        weight: [84, 87]
    },
    {
        name: 'Eat anything',
        desc: `You can eat whatever you can fit inside your mouth and be nourished by it.`,
        weight: [88, 90]
    },
    {
        name: 'Echolocation',
        desc: `You can “see” sound. You can see invisible creatures and objects within short range.`,
        weight: [91, 94]
    },
    {
        name: 'Sense mutation',
        desc: `You are aware of the presence of any mutants within short range, even if those mutants are hidden from you.`,
        weight: [95, 97]
    },
    {
        name: 'Kinetic absorption',
        desc: `You can absorb harmful energy and redirect it at others. When you take damage as a result of failing a 
            Speed defense roll, you have an asset on the next attack roll you make before the end of your next turn. 
            If your attack fails or you don’t attack during your next turn, you take 3 additional points of damage.`,
        weight: [98, 99]
    },
    {
        name: 'Minor spacewarp',
        desc: `By very briefly foreshortening distance, you increase the range of any attack you make by one step.
            Immediate range attacks become short range, short-range attacks become long range,
             and long-range attacks have a range of 200 feet (61 m).`,
        weight: [0, 0]
    },
]
const beneficial_mutations = [
    {
        name: '',
        desc: ``,
        weight: [0, 0]
    }
]

const harmful_mutations_co = [
    {
        name: 'Corebook',
        desc: `Use table in Numenera corebook`,
        weight: [1, 70]
    },
    {
        name: 'Accidental combustion',
        desc: `Once per day or so, a flammable object that you touch or that is next to you ignites in flame.`,
        weight: [71, 72]
    },
    {
        name: 'Accidental psychokinesis',
        desc: `Once per day or so, an object that you touch or that is next to you moves violently, often breaking the object,
             but sometimes harming you or someone in immediate range (2 points of damage).`,
        weight: [73, 4]
    },
    {
        name: 'Debilitating telepathy',
        desc: `You are sometimes (usually once a day) afflicted by random bouts of cacophonous telepathy when thinking beings
           are within immediate range. You never gain valuable information, but for ten minutes, the overwhelming din in your
           head increases the difficulty of all tasks by one step.`,
        weight: [75, 77]
    },
    {
        name: 'Horrific precognition',
        desc: `You are sometimes (usually once a day) afflicted by random visions of the future where you or others 
            within immediate range are hurt, killed, or otherwise harmed. You never gain valuable information, 
            but for one minute, the shock increases the difficulty of all tasks by one step.`,
        weight: [78, 80]
    },
    {
        name: 'Hidden twin',
        desc: `A parasitic consciousness lives inside you. It grumbles and mutters to you all the time, causing you to
            be distracted and confused by the constant noise that only you can hear. The difficulty of all initiative and
            perception tasks is increased by one step.`,
        weight: [81, 82]
    },
    {
        name: 'Light blindness',
        desc: `You cannot see in areas of light and are blinded in such areas. However, you can see normally in dim light or darker conditions.`,
        weight: [83, 87]
    },
    {
        name: 'Membrane:',
        desc: `You don’t have skin. Instead, your epidermis is a milky, gelatinous membrane. Because it dries and
            cracks, you must keep it damp. Each hour you go without immersing yourself in water for at least one minute,
            you take 1 point of damage (ambient).`,
        weight: [88, 90]
    },
    {
        name: 'No mouth:',
        desc: `You have no mouth and cannot talk. You consume sustenance in some other way that you and your GM agree to.`,
        weight: [91, 92]
    },
    {
        name: 'Horribly ugly',
        desc: `You are hideously deformed. The difficulty of all pleasant social interaction tasks is increased by one step.`,
        weight: [93, 97]
    },
    {
        name: 'Weak bones:',
        desc: `Your Might Pool is decreased by 3 points.`,
        weight: [98, 99]
    },
    {
        name: 'Extraneous tendril',
        desc: `A nonprehensile tendril hangs uselessly from your body, always getting in the way.
             The difficulty of all movement actions is increased by one step.`,
        weight: [0, 0]
    }
]



const powerful_mutations_co = [
    {
        name: 'Corebook',
        desc: `Use the table in the Numenera corebook`,
        weight: [1, 50]
    },
    {
        name: 'Absorb mutation (4 Might)',
        desc: `You touch a creature and gain one of its
mutations. Against an unwilling creature,
you must succeed on a Might attack roll.
Determine randomly which mutation you gain
if the creature has more than one. You have
the mutation for 1d20 minutes, after which
time it fades away. Action.`,
        weight: [51, 51]
    },
    {
        name: 'Awaken beneficial mutation (3 Int):',
        desc: `You choose a creature within
immediate range and cause it to gain a
randomly determined beneficial mutation for ten minutes. Against an unwilling creature,
you must succeed on an Intellect attack roll.
Action.`,
        weight: [52, 52]
    },
    {
        name: 'Awaken cosmetic mutation (1 Int):',
        desc: `You choose a creature within
immediate range and cause it to gain a
randomly determined cosmetic mutation for
ten minutes. Against an unwilling creature,
you must succeed on an Intellect attack roll.
Action.`,
        weight: [53, 53]
    },
    {
        name: 'Awaken distinctive mutation (6 Int)',
        desc: `You choose a creature within
immediate range and cause it to gain a
randomly determined distinctive mutation for
ten minutes. Against an unwilling creature,
you must succeed on an Intellect attack roll.
Action.`,
        weight: [54, 54]
    },
    {
        name: 'Awaken harmful mutation (7 Int):',
        desc: `You choose a creature within
immediate range and cause it to gain a
randomly determined harmful mutation for
ten minutes. Against an unwilling creature,
you must succeed on an Intellect attack roll.
Action.`,
        weight: [55, 55]
    },
    {
        name: 'Awaken powerful mutation (10 Int):',
        desc: `You choose a creature within
immediate range and cause it to gain a
randomly determined powerful mutation for
ten minutes. Against an unwilling creature,
you must succeed on an Intellect attack roll.
Action.`,
        weight: [56, 56]
    },
    {
        name: 'Light burst (3 Int):',
        desc: `You
create a burst of light through your skin
that potentially blinds all creatures within
immediate range for 1d6 + 1 rounds. You are
immune to the effect. Action.`,
        weight: [57, 58]
    },
    {
        name: 'Light beam (2 Int):',
        desc: `You
emit a ray of harmful energy that inflicts 4
points of damage to a single target within long
range. Action.`,
        weight: [59, 60]
    },
    {
        name: 'Deafening scream (4 Might):',
        desc: `You scream, stunning all creatures within
immediate range for one round (during which
time they cannot take actions on their turn),
and deafening all creatures within immediate
range for 1d6 + 1 rounds. You are immune to
the effect. Action.`,
        weight: [61, 62]
    },
    {
        name: 'Poisonous breath (3 Might):',
        desc: `You exhale poisonous vapors that inflict
3 points of damage to all creatures within
immediate range for one round. You are
immune to the vapors. Action.`,
        weight: [63, 64]
    },
    {
        name: 'Astral projection (4 Int):',
        desc: `You visualize a place within long range and cast your mind to that place, creating an invisible sensor
           that you can move a short distance each round for ten minutes or until you choose to end this ability. 
           While using the projection, you see through your sensor instead of your eyes using your normal visual abilities.
           You may perceive the area around your body using your other senses as normal.`,
        weight: [65, 65]
    },
    {
        name: 'Freezing touch (2 Int):',
        desc: `Your touch inflicts 4 points of damage due to the extremely low temperatures of the air around you. Action.`,
        weight: [66, 67]
    },
    {
        name: 'Melting touch (2 Int):',
        desc: `Your touch inflicts 4 points of damage due to the heat you generate. Action.`,
        weight: [68, 69]
    },
    {
        name: 'Mimic action (3 Int):',
        desc: `If
you observe an action that you could attempt,
you can attempt it on the following round as
if you possessed the skill you observed. For
example, if you watch someone specialized
in climbing climb a wall, you can attempt
to climb as though specialized. You can’t
attempt something that you can’t do (for
example, you cannot use a mutant power or
esotery that you don’t possess). Action to
observe, action to attempt.`,
        weight: [70, 70]
    },
    {
        name: 'Access information (2 Int):',
        desc: `You can mentally tap into the datasphere and gain an asset on any topic or area of knowledge. Action.`,
        weight: [71, 72]
    },
    {
        name: 'Rotting touch (2 Might):',
        desc: `Organic material that you touch (including living flesh) disintegrates. This inflicts 4 points of damage. Action.`,
        weight: [73, 73]
    },
    {
        name: 'Corrosive touch (2 Might):',
        desc: `Inorganic material that you touch disintegrates. This inflicts 4 points of damage. Action.`,
        weight: [74, 74]
    },
    {
        name: 'Possession (5+ Int)',
        desc: `You control the actions of another creature that you touch. This effect lasts for ten minutes, 
           during which time you can take no actions with your normal body. The target must be level 2 or lower. 
           Once you have established control, you sense what the target senses as if you were that creature. 
           You can allow it to act freely or override its control on a case-by-case basis. Instead of applying Effort to
           decrease the difficulty, you can apply Effort to increase the maximum level of the target. Thus, to possess a 
           level 5 target (three levels above the normal limit), you must apply three levels of Effort. When the 
           possession ends, the creature doesn’t remember being controlled or anything it did while under your command. 
           Action to initiate.`,
        weight: [75, 75]
    },
    {
        name: 'Alter memories (3 Int):',
        desc: `You alter a specific memory in the mind of
a creature you touch. You must have some
foreknowledge that the creature has the
memory you wish to alter. You can make the
creature forget the real memory and replace it
with anything you like. Obviously, something
similar or at least realistic will cause less
suspicion later. Action.`,
        weight: [76, 76]
    },
    {
        name: 'Teeth spew (3 Might):',
        desc: `You vomit
a spray of bile and broken teeth that affects up
to three targets within immediate range if they
are all next to each other. Each target suffers
3 points of damage. You rapidly regrow the
teeth you lose in this act. Action.`,
        weight: [77, 77]
    },
    {
        name: 'Acidic spew (3 Might):',
        desc: `You vomit
a spray of acidic goo that affects up to three
targets within immediate range if they are all
next to each other. Each target suffers 3 points
of damage. Action.`,
        weight: [78, 78]
    },
    {
        name: 'Rapid recovery',
        desc: `Your ten-minute recovery roll takes one action instead, so that your first two recovery rolls take one action,
             the third takes one hour, and the fourth takes ten hours. Enabler.`,
        weight: [79, 80]
    },
    {
        name: 'Ignore pain',
        desc: `You ignore the impaired condition and treat the debilitated condition as impaired. Enabler.`,
        weight: [81, 82]
    },
    {
        name: 'Burst of speed (2 Spd)',
        desc: `Your speed doubles for one round. Enabler.`,
        weight: [83, 83]
    },
    {
        name: 'Dampen light (2 Int):',
        desc: `You
reduce light levels within short range. Light
in the area becomes dim light, dim light
becomes very dim light, and very dim light
becomes darkness. The area of reduced light
moves with you until the effect ends. The
effect lasts for ten minutes or until you choose
to end it using an action. Action to initiate.`,
        weight: [84, 84]
    },
    {
        name: 'Excrete corrosive (3 Might):',
        desc: `You
excrete a syrupy corrosive material from your
hand. If you wipe it off on a metal surface, the
goo corrodes the metal, dealing 4 points of
damage. Otherwise, the excretion dries after
one minute and flakes away. Action.`,
        weight: [85, 85]
    },
    {
        name: 'Fuse (5 Might):',
        desc: `You can merge
your body with that of a willing creature within
immediate range. You flow into that creature’s
body and can remain there for up to one hour.
Until this effect ends, you cannot use actions,
but you perceive what the creature perceives
and you can communicate with that creature.
Action.`,
        weight: [86, 86]
    },
    {
        name: 'Invisibility (5 Int)',
        desc: `You fade
from view and have no appearance for one
minute. While invisible, you are specialized
in stealth and Speed defense tasks. This
effect ends if you do something to reveal your
presence or position—attacking, performing
an esotery, using an ability, moving a large
object, and so on. If this occurs, you can
regain the remaining invisibility effect by
taking an action to focus on hiding your
position. Action to initiate or reinitiate.`,
        weight: [87, 87]
    },
    {
        name: 'Immortal',
        desc: `You are in the prime of your life. You do not age and are immune to anything that would age you. Enabler.`,
        weight: [88, 88]
    },
    {
        name: 'Merge (6 Might):',
        desc: `You merge your
body with an object that is your size or larger
that you can touch. You disappear into the
object and can remain there for as long as you
like. While inside the object, you are insensate
regarding what happens outside of the object,
but you know how much time has passed. If
the object you are merged with is destroyed,
you are destroyed with it. The only action you
can take while in the object is to move out of
it. Action to initiate.`,
        weight: [89, 89]
    },
    {
        name: 'Modify mass (3 Might):',
        desc: `You
can increase your weight by up to 100% or
decrease it by as much as 50% of your normal
weight. The change in weight lasts for one
hour. Action to initiate.`,
        weight: [90, 91]
    },
    {
        name: 'Petrify (5 Might):',
        desc: `You touch a
creature and slowly turn it to a dry, hard,
stonelike substance. On a success, the
creature cannot move during its next turn
and has +2 to Armor. If you touch the same
creature three times in a row, the creature
turns into a statue. Action.`,
        weight: [92, 92]
    },
    {
        name: 'Projection (3 Int):',
        desc: `You
create a hologram of yourself in any spot you
choose within short range. The illusion lasts
for one minute or until anything touches it.
It looks and sounds real, and it mimics your
movements perfectly. Action to initiate.`,
        weight: [93, 94]
    },
    {
        name: 'Invisible extra arm',
        desc: `You have one
invisible extra arm. It can hold objects, wield
weapons, hold a shield, pick pockets, and
so on. This mutation does not increase the
number of actions you can take in a round
or the number of attacks you can attempt.
Enabler.`,
        weight: [95, 95]
    },
    {
        name: 'Resonance field (3 Int):',
        desc: `You focus your mind to augment numenera
nearby. Characters within immediate range
have an asset on any roll made to use
numenera. The effect lasts for one minute.
Action to initiate.`,
        weight: [96, 96]
    },
    {
        name: 'Vampire (2 Might):',
        desc: `You touch
another creature and draw its physical
energies to sustain your own. On a success,
the creature takes 2 points of damage and you
recover 1 point of damage. Action to initiate.`,
        weight: [97, 97]
    },
    {
        name: 'X-ray vision (5 Might):',
        desc: `You
focus your vision to peer through a solid
object. You see as if you were in a lighted area.
Your vision can pierce up to 3 feet (0.9 m) of
organic material, 1 foot (0.3 m) of stone, or
1 inch (2.5 cm) of metal. Your vision lasts for
one minute. Action to initiate.`,
        weight: [98, 99]
    },
    {
        name: 'Invisible wings',
        desc: `You have invisible wings
on your back that allow you to glide, carried
by the wind. They are not powerful enough to
carry you aloft like a bird’s wings. Enabler.`,
        weight: [0, 0]
    }
]
const powerful_mutations = [
    {
        name: '',
        desc: ``,
        weight: [0, 0]
    }
]


// {
//     name: '',
//     desc: ``,
//     weight: [0, 0]
// }
