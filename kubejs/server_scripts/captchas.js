// priority: 48

//change the salt values in generateCaptchas() and do not share with players in order to avoid reverse engineering

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?";

// Ter
const STOP_CODON = 'TAG';
// Met
const START_CODON = 'ATG';

const CODONS = [
  ['A', 'GCT'],
  ['B', 'GCA'],
  ['C', 'TGT'],
  ['D', 'GAT'],
  ['E', 'GAA'],
  ['F', 'TTT'],
  ['G', 'GGT'],
  ['H', 'CAT'],
  ['I', 'ATT'],
  ['J', 'GGA'],
  ['K', 'AAA'],
  ['L', 'TTA'],
  ['M', 'AGC'],
  ['N', 'AAT'],
  ['O', 'CTA'],
  ['P', 'CCT'],
  ['Q', 'CAA'],
  ['R', 'CGT'],
  ['S', 'TCT'],
  ['T', 'ACT'],
  ['U', 'AGA'],
  ['V', 'GTT'],
  ['W', 'TGG'],
  ['X', 'AGT'],
  ['Y', 'TAT'],
  ['Z', 'ATA'],
  ['a', 'GCC'],
  ['b', 'GCG'],
  ['c', 'TGC'],
  ['d', 'GAC'],
  ['e', 'GAG'],
  ['f', 'TTC'],
  ['g', 'GGC'],
  ['h', 'CAC'],
  ['i', 'ATC'],
  ['j', 'GGG'],
  ['k', 'AAG'],
  ['l', 'TTG'],
  ['m', 'ACA'],
  ['n', 'AAC'],
  ['o', 'CTG'],
  ['p', 'CCC'],
  ['q', 'CAG'],
  ['r', 'CGC'],
  ['s', 'TCC'],
  ['t', 'ACC'],
  ['u', 'TGA'],
  ['v', 'GTC'],
  ['w', 'TAA'],
  ['x', 'CCG'],
  ['y', 'TAC'],
  ['z', 'CTC'],
  ['0', 'GTA'],
  ['1', 'CGG'],
  ['2', 'TCG'],
  ['3', 'ACG'],
  ['4', 'GTG'],
  ['5', 'CTT'],
  ['6', 'CCA'],
  ['7', 'CGA'],
  ['8', 'TCA'],
  ['9', 'UUU'],
  ['!', 'AUA'],
  ['?', 'GUG']
];

const NUCLEOTIDES = ['A', 'T', 'C', 'G'];

const SALT1 = 197371;
const SALT2 = 7999993;
const SALT3 = 7.27;

/**
 * creates a random sequence between 21 and 205 units long
 */
function randSequence() {
  let randomString = '';
  let randNum = 777777777777 + SALT1 * SALT2;
  for (let i = 0; i < 21 + (randNum % 184); i++) {
    randNum += 777777 + SALT1 + SALT2 - i;
    randomString += NUCLEOTIDES[randNum % 4];
  }
  //console.log(`${randomString.length}`);
  return randomString;
};

function encodedSequence(captchaIn) {
  let string = '';
  for (let i = 0; i < 8; i++) {
    let captchaChar = captchaIn.charAt(i);
    let charCodon = CODONS[CODONS.findIndex(a => a[0] == captchaChar)][1];
    string += charCodon;
  }
  return string;
};

function generateShuffledSequence(captchaIn, SALT1, SALT2) {
  let sequenceString = randSequence(SALT1, SALT2);
  sequenceString += START_CODON;
  sequenceString += encodedSequence(captchaIn);
  sequenceString += STOP_CODON;
  sequenceString += randSequence(SALT1 - 777, SALT2 + 333);

  //50% chance to flip
  if (SALT1 % 2 == 1) {
    let reverseString = sequenceString.split("").reverse().join("");
    let nucFlipString = '';
    for (let char of reverseString.split("")) {
      char = char.toString().replace('A', '1').replace('T', '2').replace('C', '3').replace('G', '4');
      nucFlipString += char.replace('1', 'T').replace('2', 'A').replace('3', 'G').replace('4', 'C');
    }
    sequenceString = nucFlipString;
  }

  return sequenceString.toString();
};

function newLine(textIn) {
  return { text: `${textIn}`, foreground: "fffffffffffffffffffffffff" };
}

function lootEntries(captchas) {
  let entriesIn = [];
  let iterate = 973;
  for (let [captcha, item] of captchas) {
    let sequence = generateShuffledSequence(captcha, SALT1 + iterate, SALT2 + iterate);
    let linesIn = [];
    let text = sequence + ' '.repeat(526);
    for (let j = 0; j < 21; j++) {
      linesIn.push(newLine(text.substring((j * 25), j * 25 + 25)));
    }
    let entry = lootItemEntry('computercraft:printed_page', 1, {
      "minecraft:lore": [
        `\"Chromosome 5 fragment ${iterate}\"`
      ],
      "computercraft:printout": {
        lines: linesIn
      }
    });
    entriesIn.push(entry);
    iterate += 1;
  }
  return entriesIn;
}

function randomizeCaptcha(captchaIn) {
  let randomString = '';
  let charCombine = 777;

  for (let i = 0; i < 8; i++) {
    charCombine += captchaIn.codePointAt(i) * SALT3;
    let combined = (charCombine + SALT1 * SALT2);
    randomString += CHARACTERS.charAt(combined % CHARACTERS.length);
  }

  return randomString;
};





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const generateCaptchas = function (event) {
  console.log('Started generating custom data in captchas. If no finish log, then something may be broken!');


  let captchas = [
    //royal_deringer handled via season_x
    [randomizeCaptcha('SPclNEdl'), 'minestuck:quill_of_echidna'],
    [randomizeCaptcha('wHaMzIlY'), 'minestuck:zillyhoo_hammer'],
    [randomizeCaptcha('sLcEzIlY'), 'minestuck:cutlass_of_zillywair'],
    [randomizeCaptcha('mAgCzIlY'), 'minestuck:thistle_of_zillywich'],
    [randomizeCaptcha('PeEwzIlY'), 'alchemyexpanded:flintlock_of_zillyhau'],
    [randomizeCaptcha('BoOmzIlY'), 'alchemyexpanded:blunderbuss_of_zillywigh'],
    [randomizeCaptcha('stonSord'), 'minecraft:stone_sword'],
    [randomizeCaptcha('ironSord'), 'minecraft:iron_sword'],
    [randomizeCaptcha('dimdSord'), 'minecraft:diamond_sword'],
    [randomizeCaptcha('ntrtSord'), 'minecraft:netherite_sword'],
    [randomizeCaptcha('ZoMoRrOd'), 'minestuck:subtractshumidire_zomorrodnegative']
  ];

  let entriesIn = lootEntries(captchas);

  newData(event, `loot_table/chests/captcha_codes`, {
    "type": "minecraft:empty",
    "pools": [
      {
        "bonus_rolls": 0.0,
        "entries": entriesIn,
        "name": "computer",
        "rolls": 1.0
      }
    ],
    "random_sequence": "custom:chests/captcha_codes"
  });

  newData(event, `minestuck/captcha_codes`, createExtendablePair(captchas));

  console.log('Ending gen in captchas.');
};