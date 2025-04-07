
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

let player;
let cursors;

const game = new Phaser.Game(config);

function preload () {
    this.load.image('bg', 'assets/bg.png');
    this.load.image('player', 'assets/pikachu.png');
}

function create () {
    this.add.image(400, 300, 'bg');
    player = this.physics.add.image(400, 300, 'player');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
}

function update () {
    player.setVelocity(0);
    if (cursors.left.isDown) player.setVelocityX(-200);
    if (cursors.right.isDown) player.setVelocityX(200);
    if (cursors.up.isDown) player.setVelocityY(-200);
    if (cursors.down.isDown) player.setVelocityY(200);
}
