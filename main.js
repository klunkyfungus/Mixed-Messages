//Mixed Messages portfolio project: Espionage Message Generator

//String arrays for the messages
const pluralEntityOne = ['the Americans', 'the French', 'the English', 'the Russians', 'the Germans', 'the Chinese', 'the Nigerians', 'the Ethiopians', 'the Koreans', 'the Moroccans', 'the Austrailians', 'the Argentinians', 'the Bangladeshi', 'the Albanians', 'the Bosnians', 'the Brazilians', 'the flat earthers', 'the Cambodians', 'the Ecuadorians', 'the Hatians', 'the Jamaicans', 'the Kenyans', 'the Burmese', 'the Kazakhstani', 'the Lithuanians', 'the Paraguayans', 'the Spanish', 'BTS', 'Imagine Dragons', 'ABBA', 'Blink-182', 'the Strokes', 'the Beatles', 'Glass Animals', 'Silk Sonic', 'Fleetwood Mac', 'AJR', 'Maroon 5', 'Queen', 'Fall Out Boy', 'AC/DC', 'the Migos', 'Creedence Clearwater Revival', 'coconuts', 'apples', 'oranges', 'various fruits', 'stones', 'cockroaches', 'the Redwood forests', 'the Pyramids', 'fireplaces & chimneys',];
const singularEntityOne = ['Allen Iverson', 'Drake', 'Adele', 'Taylor Swift', 'Olivia Rodrigo', 'DaBaby', 'Kanye West', 'Post Malone', 'Ariana Grande', 'J. Cole', 'Harry Styles', 'Lil Uzi Vert', 'Simu Liu', 'Zoe Kravitz', 'Andrew Garfield', 'Quinta Brunson', 'Pete Davidson', 'Mila Kunis', 'Nathan Chen', 'Faith Ringgold', 'Rihanna', 'Zendaya', 'Oprah Winfrey', 'Michelle Yeoh', 'Kris Jenner', 'Joe Rogan', 'Joe Biden', 'Vladimir Putin', 'Keanu Reeves', 'Candace Parker', 'Questlove', 'Feeding America', 'Goodwill', 'the YMCA', 'Habitat for Humanity', 'Food for the Poor', 'UNICEF', 'the Environmental Defense Fund', 'the Humane Society of the US', 'the Nuclear Energy Agency', 'the Nuclear Suppliers Group', 'the Nordic Council', 'the Nonaligned Movement', 'the Economic and Monetary Community of Central Africa', 'the Eurasian Economic Union', 'the General Confederation of Trade Unions', 'the Multinational Force & Observers', 'the Multinational Joint Task Force', 'the Pacific Alliance', 'the Partnership for Peace', 'the Commonwealth of Independent States', 'the Community of Democracies', 'grass', 'the ocean', 'the moon', 'the sun', 'Mars',  'the Kremlin', 'the Whitehouse', 'the Death Star', 'your house', "your mother's house", "your grandmother's house", 'the Amazon rainforest', 'the Great Wall of China'];
const entityTwo = pluralEntityOne.concat(singularEntityOne);
const connectorsSingularFuture = ['is conspiring to', 'is plotting to', 'is planning to', 'intends to', 'has resolved to', 'aims to', 'is attempting to', 'has designs to', 'is determined to', 'endeavors to', 'schemes to'];
const connectorsSingularPast = ['has already completely', 'has already'];
const connectorsPluralFuture = ['are conspiring to','are plotting to', 'are planning to', 'intend to', 'have resolved to', 'aim to', 'are attempting to', 'have designs to', 'are determined to', 'endeavor to', 'scheme to'];
const connectorsPluralPast = ['have already completely', 'have already'];
const verbs = ['ruin', 'destroy', 'inseminate', 'infiltrate', 'blow up', 'overthrow', 'seize', 'destabilize', 'uncover', 'defend', 'follow', 're-create', 'inform', 'irritate', 'clean', 'melt', 'provide', 'reduce', 'retire', 'surprise', 'taste', 'desert', 'hijack', 'pickpocket', 'offend', 'smuggle', 'terrorize', 'vandalize', 'aid', 'sniff', 'insult', 'move', 'kill', 'replace', 'antagonize'];

const spyMessage = () => {
    const singularOrPlural = Math.floor(Math.random() * 2);
    const pastOrFuture = Math.floor(Math.random() * 2);
    let subject;
    let connector;
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let object = entityTwo[Math.floor(Math.random() * entityTwo.length)];

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

    return 'I have intercepted some chatter; ' +  subject + ' ' + connector + ' ' + verb.concat(pastOrFuture === 0 ? (verb.endsWith('e') ? 'd':'ed'):'') + ' ' + object + '.';

}
//console.log('I have intercepted some chatter; ' + pluralEntityOne[0].concat(' ', connectorsPluralPast[0], ' ', verbs[15], (verbs[15].endsWith('e') ? 'd':'ed'), ' ', entityTwo[25], '.'));
//console.log(Math.floor(Math.random() * 2));

console.log(spyMessage());