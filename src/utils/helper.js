var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

    const sentences = [
        'is like Domino’s Pizza, one call does it all',
        'is twice the man you are',
        'is like an ATM, open 24/7',
        'is like a championship ring, everybody puts a finger in her',
        'is like Wi-Fi, when it’s gone, you feel lost',
        'is like a good app, easy to download and hard to forget',
        'is like a charging cable, always ready when you need it',
        'is like a GPS, always pointing you in the right direction',
        'is like a cup of coffee, keeps you awake all night',
        'is like an elevator, it lifts you up when you’re down',
        'is like a vending machine, always delivering the goods',
        'is like a secret menu, full of surprises',
        'is like a good meme, never gets old',
        'is like a fresh playlist, always on repeat',
        'is like a backup drive, always there when you need it',
        'is like a coffee shop, everyone’s welcome',
        'is like a good book, always has a new chapter',
        'is like a group chat, never a dull moment',
        'is like a Netflix series, you can’t stop watching',
        'is like a compass, always pointing true north',
        'is like a good jacket, keeps you warm and comfortable',
        'is like a vacation, the more you do it, the better it gets',
        'is like a good workout, it leaves you feeling accomplished'
    ];

export function generateRandomName() {
   return  nameList[Math.floor( Math.random() * nameList.length )];
   
};



export function generateRandomSentence() {
    
    var index= Math.floor(Math.random() * (sentences.length  - 1));
    return sentences[index];
}

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
   export function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }