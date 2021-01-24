var texts = [
    'As the rental car rolled to a stop on the dark road, her fear increased by the moment.',
    'There were white out conditions in the town; subsequently, the roads were impassable.',
    'They got there early, and they got really good seats.',
    'I am counting my calories, yet I really want dessert.',
    'When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.',
    'As time wore on, simple dog commands turned into full paragraphs explaining why the dog couldn\'t do something.',
    'Had he known what was going to happen, he would have never stepped into the shower.',
    'There was no ice cream in the freezer, nor did they have money to go to the store.',
    'This is the last random sentence I will be writing and I am going to stop mid-sent',
    'Italy is my favorite country; in fact, I plan to spend two weeks there next year.',
];
var text = texts[Math.floor(Math.random() * texts.length)];
var siz = 30;
const width = 600
const height = 600

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#333'
context.fillRect(0, 0, width, height)

var t1 = text;
var t2 = t1.split(' ');
var t3 = [];
var t4 = 0;
for (var i = 0; i < t2.length; i++) {
    t3.push(t2[i]);
    t4++;
    if (t4 > 3) {
        t4 = 0;
        t3[t3.length - 1] += '\n';
    }
}
text = t3.join(' ').split('\n');

context.font = 'bold ' + siz + 'pt Arial'
context.textAlign = 'center'
context.fillStyle = '#fff'
var y = (height / 2) - ((text.length - 1) * 50 * .5);
for (var i = 0; i < text.length; i++) {
    context.fillText(text[i], 300, y + i * 50);
}

const buffer = canvas.toBuffer('image/png')
fs.writeFileSync('./image.png', buffer)

message.channel.send({
    files: [{
        attachment: './image.png'
    }],
});
