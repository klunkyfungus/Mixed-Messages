//Espionage Message Generator Project

//String arrays for the sentence elements of messages.
const pluralEntityOne = ['the Americans', 'the French', 'the English', 'the Russians', 'the Germans', 'the Chinese', 'the Nigerians', 'the Ethiopians', 'the Koreans', 'the Moroccans', 'the Austrailians', 'the Argentinians', 'the Bangladeshi', 'the Albanians', 'the Bosnians', 'the Brazilians', 'the flat earthers', 'the Cambodians', 'the Ecuadorians', 'the Hatians', 'the Jamaicans', 'the Kenyans', 'the Burmese', 'the Kazakhstani', 'the Lithuanians', 'the Paraguayans', 'the Spanish', 'BTS', 'Imagine Dragons', 'ABBA', 'Blink-182', 'the Strokes', 'the Beatles', 'Glass Animals', 'Silk Sonic', 'Fleetwood Mac', 'AJR', 'Maroon 5', 'Queen', 'Fall Out Boy', 'AC/DC', 'the Migos', 'Creedence Clearwater Revival', 'coconuts', 'apples', 'oranges', 'various fruits', 'stones', 'cockroaches', 'the Redwood forests', 'the Pyramids', 'fireplaces & chimneys',];
const singularEntityOne = ['Allen Iverson', 'Drake', 'Adele', 'Taylor Swift', 'Olivia Rodrigo', 'DaBaby', 'Kanye West', 'Post Malone', 'Ariana Grande', 'J. Cole', 'Harry Styles', 'Lil Uzi Vert', 'Simu Liu', 'Zoe Kravitz', 'Andrew Garfield', 'Quinta Brunson', 'Pete Davidson', 'Mila Kunis', 'Nathan Chen', 'Faith Ringgold', 'Rihanna', 'Zendaya', 'Oprah Winfrey', 'Michelle Yeoh', 'Kris Jenner', 'Joe Rogan', 'Joe Biden', 'Vladimir Putin', 'Keanu Reeves', 'Candace Parker', 'Questlove', 'Feeding America', 'Goodwill', 'the YMCA', 'Habitat for Humanity', 'Food for the Poor', 'UNICEF', 'the Environmental Defense Fund', 'the Humane Society of the US', 'the Nuclear Energy Agency', 'the Nuclear Suppliers Group', 'the Nordic Council', 'the Nonaligned Movement', 'the Economic and Monetary Community of Central Africa', 'the Eurasian Economic Union', 'the General Confederation of Trade Unions', 'the Multinational Force & Observers', 'the Multinational Joint Task Force', 'the Pacific Alliance', 'the Partnership for Peace', 'the Commonwealth of Independent States', 'the Community of Democracies', 'grass', 'the ocean', 'the moon', 'the sun', 'Mars',  'the Kremlin', 'the Whitehouse', 'the Death Star', 'your house', "your mother's house", "your grandmother's house", 'the Amazon rainforest', 'the Great Wall of China'];
const entityTwo = pluralEntityOne.concat(singularEntityOne);
const connectorsSingularFuture = ['is conspiring to', 'is plotting to', 'is planning to', 'intends to', 'has resolved to', 'aims to', 'is attempting to', 'has designs to', 'is determined to', 'endeavors to', 'schemes to'];
const connectorsSingularPast = ['has already completely', 'has already'];
const connectorsPluralFuture = ['are conspiring to','are plotting to', 'are planning to', 'intend to', 'have resolved to', 'aim to', 'are attempting to', 'have designs to', 'are determined to', 'endeavor to', 'scheme to'];
const connectorsPluralPast = ['have already completely', 'have already'];
const verbs = ['ruin', 'destroy', 'inseminate', 'infiltrate', 'blast', 'kablooey', 'overthrow', 'seize', 'destabilize', 'uncover', 'defend', 'follow', 're-create', 'inform', 'irritate', 'clean', 'melt', 'provide', 'reduce', 'retire', 'surprise', 'taste', 'desert', 'hijack', 'pickpocket', 'offend', 'smuggle', 'terrorize', 'vandalize', 'aid', 'sniff', 'insult', 'move', 'kill', 'replace', 'antagonize'];

const button = document.getElementById("message_button");
const message = document.getElementById("message");
const typewriter = message.getAnimations({ subtree: true })[0];
const chatter = document.getElementById("chatter_message");
const blink = chatter.getAnimations({ subtree: true })[0];

//Function that ends certain animations running on the webpage.
const endAnimations = () => {
    chatter.innerHTML = "";
    message.innerHTML = "";  
    typewriter.finish();
    blink.finish();
};


//Function that formulates the messages.
const spyMessage = () => {

    //Variables that determine the type of nouns and the tense of the sentence.
    const singularOrPlural = Math.floor(Math.random() * 2); //0: plural subject nouns; 1: singular subject nouns.
    const pastOrFuture = Math.floor(Math.random() * 2); //0: past tense sentence elements; 1: future tense sentence elements.

    //Variables that will contain the chosen sentence elements.
    let subject;
    let connector;
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let object = entityTwo[Math.floor(Math.random() * entityTwo.length)];  
    
    //Condition statements that select appropriate nouns and sentence elements based on the determination of the const variables above.
    if (singularOrPlural === 0) {
        subject = pluralEntityOne[Math.floor(Math.random() * pluralEntityOne.length)];
        switch (pastOrFuture) {
            case 0:
                connector = connectorsPluralPast[Math.floor(Math.random() * connectorsPluralPast.length)];
                break;
            default:
                connector = connectorsPluralFuture[Math.floor(Math.random() * connectorsPluralFuture.length)];
        }
    } else {
        subject = singularEntityOne[Math.floor(Math.random() * singularEntityOne.length)];
        switch (pastOrFuture) {
            case 0:
                connector = connectorsSingularPast[Math.floor(Math.random() * connectorsSingularPast.length)];
                break;
            default:
                connector = connectorsSingularFuture[Math.floor(Math.random() * connectorsSingularFuture.length)];
        }
    }

    //The output message. Contains an expression to adjust the tense of the selected verb based on the determination of the const variable above.
    let message_text = subject + ' ' + connector + ' ' + verb.concat(pastOrFuture === 0 ? (verb.endsWith('e') ? 'd':'ed'):'') + ' ' + object + '.';
    chatter.innerHTML = "We have intercepted some chatter:";
    message.innerHTML = message_text;
    blink.play();
    typewriter.play();
};

button.addEventListener("touchstart", endAnimations);
button.addEventListener("touchend", spyMessage);
button.addEventListener("mousedown", endAnimations);
button.addEventListener("mouseup", spyMessage);

/*
console.log(`
          IIIII              SSSS           PPPPPPPPPP     YYY         YYY         !!!
           II             SSS    SSS       PPP      PPP     YY        YY          !!!
          II           SSS                PPP       PP       YY     YY           !!!
         II            SSSS              PP       PP          YY  YY            !!!
        II                SSSS          PPPPPPPPPP             YYY             !!! 
       II                     SSS      PPP                     YY             !!!
      II             SSS    SSSS      PPP                     YY
    IIIII               SSSS         PPP                     YY             !!!  
                        
`);
console.log(spyMessage());
*/