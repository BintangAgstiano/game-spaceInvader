const canvas = document.querySelector('canvas');
const wCanvas = canvas.width = 500
const hCanvas = canvas.height = 500

const ctx = canvas.getContext('2d');
let isPause = true

let popupGameOver = document.querySelector('.popup-gameover');
let popupScreen = document.querySelector('.popup-screen');
let popupPause = document.querySelector('.popup-pause');
let popupWin = document.querySelector('.popup-win');
let playAgain = document.querySelector('.playAgain');
let playAgainWin = document.querySelector('.playAgainWin');
let on = document.querySelector('.on');
let off = document.querySelector('.off');
let cursorScreen1 = document.querySelector('.cursor-screen1');
let cursorScreen2 = document.querySelector('.cursor-screen2');
let play = document.querySelector('.play');
let back = document.querySelector('.back');
let backPause = document.querySelector('.back-pause');
let backWin = document.querySelector('.back-win');
let resume = document.querySelector('.resume');
let restart = document.querySelector('.restart');
let audio = document.querySelector('.audio');
let velocity = 0
off.addEventListener('click', function () {
    cursorScreen2.style.opacity = 0
    cursorScreen1.style.opacity = 1
    audio.pause()
});
on.addEventListener('click', function () {
    cursorScreen1.style.opacity = 0
    cursorScreen2.style.opacity = 1
    audio.play()
    audio.currentTime = 0
});
restart.addEventListener('click', function () {
    isPause = true
    resetGame()
    startIntervalAttack()
    startIntervalAttackEnemy()
    startIntervalUpdate()
    popupPause.style.display = 'none'
})
let wPlane = wCanvas / 2

const planeImg = new Image();
planeImg.src = 'images/player.png'
planeImg.onload = () => {
    drawPlane()
}
back.addEventListener('click', function () {

    resetGame()
    popupScreen.style.display = 'flex'
    popupGameOver.style.display = 'none'
})
backPause.addEventListener('click', function () {
    resetGame()
    popupScreen.style.display = 'flex'
    popupPause.style.display = 'none'
})
backWin.addEventListener('click', function () {
    resetGame()
    popupScreen.style.display = 'flex'
    popupWin.style.display = 'none'
})
play.addEventListener('click', function () {
    isPause = true
    popupScreen.style.display = 'none'
    main()

})
const enemy1 = new Image();
enemy1.src = 'images/enemy1.png'
const enemy2 = new Image();
enemy2.src = 'images/enemy2.png'
const enemy3 = new Image();
enemy3.src = 'images/enemy3.png'

let enemys = [{
    x: 100, y: 10, img: enemy1
},
{
    x: 130, y: 10, img: enemy1
},
{
    x: 160, y: 10, img: enemy1
},
{
    x: 190, y: 10, img: enemy1
},
{
    x: 220, y: 10, img: enemy1
},
{
    x: 250, y: 10, img: enemy1
},
{
    x: 280, y: 10, img: enemy1
},
{
    x: 310, y: 10, img: enemy1
},
{
    x: 340, y: 10, img: enemy1
},
{
    x: 370, y: 10, img: enemy1
},



{
    x: 100, y: 50, img: enemy2
},
{
    x: 130, y: 50, img: enemy2
},
{
    x: 160, y: 50, img: enemy2
},
{
    x: 190, y: 50, img: enemy2
},
{
    x: 220, y: 50, img: enemy2
},
{
    x: 250, y: 50, img: enemy2
},
{
    x: 280, y: 50, img: enemy2
},
{
    x: 310, y: 50, img: enemy2
},
{
    x: 340, y: 50, img: enemy2
},
{
    x: 370, y: 50, img: enemy2
},


{
    x: 100, y: 90, img: enemy3
},
{
    x: 130, y: 90, img: enemy3
},
{
    x: 160, y: 90, img: enemy3
},
{
    x: 190, y: 90, img: enemy3
},
{
    x: 220, y: 90, img: enemy3
},
{
    x: 250, y: 90, img: enemy3
},
{
    x: 280, y: 90, img: enemy3
},
{
    x: 310, y: 90, img: enemy3
},
{
    x: 340, y: 90, img: enemy3
},
{
    x: 370, y: 90, img: enemy3
},


{
    x: 100, y: 130, img: enemy1
},
{
    x: 130, y: 130, img: enemy1
},
{
    x: 160, y: 130, img: enemy1
},
{
    x: 190, y: 130, img: enemy1
},
{
    x: 220, y: 130, img: enemy1
},
{
    x: 250, y: 130, img: enemy1
},
{
    x: 280, y: 130, img: enemy1
},
{
    x: 310, y: 130, img: enemy1
},
{
    x: 340, y: 130, img: enemy1
},
{
    x: 370, y: 130, img: enemy1
},

{
    x: 100, y: 170, img: enemy2
},
{
    x: 130, y: 170, img: enemy2
},
{
    x: 160, y: 170, img: enemy2
},
{
    x: 190, y: 170, img: enemy2
},
{
    x: 220, y: 170, img: enemy2
},
{
    x: 250, y: 170, img: enemy2
},
{
    x: 280, y: 170, img: enemy2
},
{
    x: 310, y: 170, img: enemy2
},
{
    x: 340, y: 170, img: enemy2
},
{
    x: 370, y: 170, img: enemy2
},

{
    x: 100, y: 210, img: enemy3
},
{
    x: 130, y: 210, img: enemy3
},
{
    x: 160, y: 210, img: enemy3
},
{
    x: 190, y: 210, img: enemy3
},
{
    x: 220, y: 210, img: enemy3
},
{
    x: 250, y: 210, img: enemy3
},
{
    x: 280, y: 210, img: enemy3
},
{
    x: 310, y: 210, img: enemy3
},
{
    x: 340, y: 210, img: enemy3
},
{
    x: 370, y: 210, img: enemy3
},

{
    x: 100, y: 250, img: enemy1
},
{
    x: 130, y: 250, img: enemy1
},
{
    x: 160, y: 250, img: enemy1
},
{
    x: 190, y: 250, img: enemy1
},
{
    x: 220, y: 250, img: enemy1
},
{
    x: 250, y: 250, img: enemy1
},
{
    x: 280, y: 250, img: enemy1
},
{
    x: 310, y: 250, img: enemy1
},
{
    x: 340, y: 250, img: enemy1
},
{
    x: 370, y: 250, img: enemy1
},
]
function drawEnemy() {
    enemys.forEach(enemy => {
        ctx.drawImage(enemy.img, enemy.x, enemy.y, 25, 25)
    })
}

let moveRight = true;
let moveBottom = false

let shouldMoveDown = false;


playAgain.addEventListener('click', function () {
    startIntervalAttack()
    startIntervalAttackEnemy()
    startIntervalUpdate()
    popupGameOver.style.display = 'none'
});
playAgainWin.addEventListener('click', function () {
    startIntervalAttack()
    startIntervalAttackEnemy()
    startIntervalUpdate()
    popupWin.style.display = 'none'
});


function drawPlane() {
    ctx.beginPath()
    ctx.drawImage(planeImg, wPlane, 400)
}
let arrAttack = []
let arrAttackEnemy = []
let intervalAttack

function handleKick(e) {



    if (e.keyCode == 32) {

        arrAttack.push({ x: wPlane + 25, y: 370, w: 3, h: 10 })


    }
}
function drawAttack() {
    ctx.beginPath()

    arrAttack.forEach(att => {
        ctx.fillStyle = 'white'
        ctx.rect(att.x, att.y, att.w, att.h)
        ctx.fill()
        att.y -= 15
    })
}

let intervalAttackEnemy;
function startIntervalAttackEnemy() {
    intervalAttackEnemy = setInterval(() => {
        let random = Math.floor(Math.random() * enemys.length);
        let xAtt = enemys[random].x;
        let yAtt = enemys[random].y;
        console.log(xAtt);
        arrAttackEnemy.push({ x: xAtt, y: yAtt, w: 3, h: 10 })
    }, 500);
}



function drawAttackEnemy() {
    ctx.beginPath()
    arrAttackEnemy.forEach(att => {
        ctx.fillStyle = 'red'
        ctx.rect(att.x, att.y, att.w, att.h)
        ctx.fill()
        att.y += 5
    })
}

function startIntervalAttack() {
    intervalAttack = setInterval(() => {
        ctx.clearRect(0, 0, wCanvas, hCanvas)
        drawAttack()
        drawPlane()
        drawEnemy()
        enemys.forEach((enemy, i) => {
            arrAttack.forEach((att, index) => {

                if (att.y < enemy.y && att.x > enemy.x && att.x < enemy.x + 25) {
                    enemys.splice(i, 1)
                    arrAttack.splice(index, 1)
                }
                if (att.y + 10 < 0) {
                    arrAttack.splice(index, 1)

                }

            })
        })
        drawAttackEnemy()

    }, 50);
}
resume.addEventListener('click', function () {
    isPause = true
    resumeGame()
    popupPause.style.display = 'none'
})
let IntervalUpdate
function startIntervalUpdate() {
    IntervalUpdate = setInterval(() => {
        ctx.clearRect(0, 0, wCanvas, hCanvas)
        drawPlane()
        drawAttack()
        drawEnemy()
        drawAttackEnemy()
        if (enemys.length <= 0) {
            popupWin.style.display = 'flex'
            gameWin()
        }
        arrAttackEnemy.forEach((attEnemy, i) => {
            if (attEnemy.y > 400 && attEnemy.x > wPlane && attEnemy.x < wPlane + 50 && attEnemy.y < 450) {
                gameOver()
            }
            if (attEnemy.y > hCanvas) {
                arrAttackEnemy.splice(i, 1)
            }
        })
        enemys.forEach((enemy, i) => {
            if (enemy.y > 400) {
                gameOver()

            }
        })
        enemys.forEach(enemy => {
            if (moveRight && enemy.x + 25 >= wCanvas) {
                shouldMoveDown = true;
                moveRight = false;
            } else if (!moveRight && enemy.x <= 0) {
                shouldMoveDown = true;
                moveRight = true;
            }
        });

        if (shouldMoveDown) {
            enemys.forEach(enemy => {
                enemy.y += 1;
                setTimeout(() => {
                    shouldMoveDown = false
                }, 1500);
            });
        }


        enemys.forEach(enemy => {
            if (moveRight) {
                enemy.x += 1;
            } else {
                enemy.x -= 1;
            }
        });

    }, 50);
}
let isMoving = false
function updateMove(e) {
    if (e.key == 'ArrowLeft' && wPlane > 0) {
        velocity= -5
        isMoving = true
    } if (e.key == 'ArrowRight' && wPlane + 50 < wCanvas) {
        velocity = 5
        isMoving = true

    }
}
document.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        isMoving = false;
    }
})
setInterval(() => {
    if (isMoving) {
        wPlane += velocity
        velocity *= 0.8
    }
}, 16);

function gameOver() {
    clearInterval(intervalAttack)
    clearInterval(intervalAttackEnemy)
    clearInterval(IntervalUpdate)
    wPlane = wCanvas / 2
    enemys = [{
        x: 100, y: 10, img: enemy1
    },
    {
        x: 130, y: 10, img: enemy1
    },
    {
        x: 160, y: 10, img: enemy1
    },
    {
        x: 190, y: 10, img: enemy1
    },
    {
        x: 220, y: 10, img: enemy1
    },
    {
        x: 250, y: 10, img: enemy1
    },
    {
        x: 280, y: 10, img: enemy1
    },
    {
        x: 310, y: 10, img: enemy1
    },
    {
        x: 340, y: 10, img: enemy1
    },
    {
        x: 370, y: 10, img: enemy1
    },



    {
        x: 100, y: 50, img: enemy2
    },
    {
        x: 130, y: 50, img: enemy2
    },
    {
        x: 160, y: 50, img: enemy2
    },
    {
        x: 190, y: 50, img: enemy2
    },
    {
        x: 220, y: 50, img: enemy2
    },
    {
        x: 250, y: 50, img: enemy2
    },
    {
        x: 280, y: 50, img: enemy2
    },
    {
        x: 310, y: 50, img: enemy2
    },
    {
        x: 340, y: 50, img: enemy2
    },
    {
        x: 370, y: 50, img: enemy2
    },


    {
        x: 100, y: 90, img: enemy3
    },
    {
        x: 130, y: 90, img: enemy3
    },
    {
        x: 160, y: 90, img: enemy3
    },
    {
        x: 190, y: 90, img: enemy3
    },
    {
        x: 220, y: 90, img: enemy3
    },
    {
        x: 250, y: 90, img: enemy3
    },
    {
        x: 280, y: 90, img: enemy3
    },
    {
        x: 310, y: 90, img: enemy3
    },
    {
        x: 340, y: 90, img: enemy3
    },
    {
        x: 370, y: 90, img: enemy3
    },


    {
        x: 100, y: 130, img: enemy1
    },
    {
        x: 130, y: 130, img: enemy1
    },
    {
        x: 160, y: 130, img: enemy1
    },
    {
        x: 190, y: 130, img: enemy1
    },
    {
        x: 220, y: 130, img: enemy1
    },
    {
        x: 250, y: 130, img: enemy1
    },
    {
        x: 280, y: 130, img: enemy1
    },
    {
        x: 310, y: 130, img: enemy1
    },
    {
        x: 340, y: 130, img: enemy1
    },
    {
        x: 370, y: 130, img: enemy1
    },

    {
        x: 100, y: 170, img: enemy2
    },
    {
        x: 130, y: 170, img: enemy2
    },
    {
        x: 160, y: 170, img: enemy2
    },
    {
        x: 190, y: 170, img: enemy2
    },
    {
        x: 220, y: 170, img: enemy2
    },
    {
        x: 250, y: 170, img: enemy2
    },
    {
        x: 280, y: 170, img: enemy2
    },
    {
        x: 310, y: 170, img: enemy2
    },
    {
        x: 340, y: 170, img: enemy2
    },
    {
        x: 370, y: 170, img: enemy2
    },

    {
        x: 100, y: 210, img: enemy3
    },
    {
        x: 130, y: 210, img: enemy3
    },
    {
        x: 160, y: 210, img: enemy3
    },
    {
        x: 190, y: 210, img: enemy3
    },
    {
        x: 220, y: 210, img: enemy3
    },
    {
        x: 250, y: 210, img: enemy3
    },
    {
        x: 280, y: 210, img: enemy3
    },
    {
        x: 310, y: 210, img: enemy3
    },
    {
        x: 340, y: 210, img: enemy3
    },
    {
        x: 370, y: 210, img: enemy3
    },

    {
        x: 100, y: 250, img: enemy1
    },
    {
        x: 130, y: 250, img: enemy1
    },
    {
        x: 160, y: 250, img: enemy1
    },
    {
        x: 190, y: 250, img: enemy1
    },
    {
        x: 220, y: 250, img: enemy1
    },
    {
        x: 250, y: 250, img: enemy1
    },
    {
        x: 280, y: 250, img: enemy1
    },
    {
        x: 310, y: 250, img: enemy1
    },
    {
        x: 340, y: 250, img: enemy1
    },
    {
        x: 370, y: 250, img: enemy1
    },
    ]
    arrAttack = []
    arrAttackEnemy = []
    popupGameOver.style.display = 'flex'
}
function gameWin() {
    clearInterval(intervalAttack)
    clearInterval(intervalAttackEnemy)
    clearInterval(IntervalUpdate)
    wPlane = wCanvas / 2
    enemys = [{
        x: 100, y: 10, img: enemy1
    },
    {
        x: 130, y: 10, img: enemy1
    },
    {
        x: 160, y: 10, img: enemy1
    },
    {
        x: 190, y: 10, img: enemy1
    },
    {
        x: 220, y: 10, img: enemy1
    },
    {
        x: 250, y: 10, img: enemy1
    },
    {
        x: 280, y: 10, img: enemy1
    },
    {
        x: 310, y: 10, img: enemy1
    },
    {
        x: 340, y: 10, img: enemy1
    },
    {
        x: 370, y: 10, img: enemy1
    },



    {
        x: 100, y: 50, img: enemy2
    },
    {
        x: 130, y: 50, img: enemy2
    },
    {
        x: 160, y: 50, img: enemy2
    },
    {
        x: 190, y: 50, img: enemy2
    },
    {
        x: 220, y: 50, img: enemy2
    },
    {
        x: 250, y: 50, img: enemy2
    },
    {
        x: 280, y: 50, img: enemy2
    },
    {
        x: 310, y: 50, img: enemy2
    },
    {
        x: 340, y: 50, img: enemy2
    },
    {
        x: 370, y: 50, img: enemy2
    },


    {
        x: 100, y: 90, img: enemy3
    },
    {
        x: 130, y: 90, img: enemy3
    },
    {
        x: 160, y: 90, img: enemy3
    },
    {
        x: 190, y: 90, img: enemy3
    },
    {
        x: 220, y: 90, img: enemy3
    },
    {
        x: 250, y: 90, img: enemy3
    },
    {
        x: 280, y: 90, img: enemy3
    },
    {
        x: 310, y: 90, img: enemy3
    },
    {
        x: 340, y: 90, img: enemy3
    },
    {
        x: 370, y: 90, img: enemy3
    },


    {
        x: 100, y: 130, img: enemy1
    },
    {
        x: 130, y: 130, img: enemy1
    },
    {
        x: 160, y: 130, img: enemy1
    },
    {
        x: 190, y: 130, img: enemy1
    },
    {
        x: 220, y: 130, img: enemy1
    },
    {
        x: 250, y: 130, img: enemy1
    },
    {
        x: 280, y: 130, img: enemy1
    },
    {
        x: 310, y: 130, img: enemy1
    },
    {
        x: 340, y: 130, img: enemy1
    },
    {
        x: 370, y: 130, img: enemy1
    },

    {
        x: 100, y: 170, img: enemy2
    },
    {
        x: 130, y: 170, img: enemy2
    },
    {
        x: 160, y: 170, img: enemy2
    },
    {
        x: 190, y: 170, img: enemy2
    },
    {
        x: 220, y: 170, img: enemy2
    },
    {
        x: 250, y: 170, img: enemy2
    },
    {
        x: 280, y: 170, img: enemy2
    },
    {
        x: 310, y: 170, img: enemy2
    },
    {
        x: 340, y: 170, img: enemy2
    },
    {
        x: 370, y: 170, img: enemy2
    },

    {
        x: 100, y: 210, img: enemy3
    },
    {
        x: 130, y: 210, img: enemy3
    },
    {
        x: 160, y: 210, img: enemy3
    },
    {
        x: 190, y: 210, img: enemy3
    },
    {
        x: 220, y: 210, img: enemy3
    },
    {
        x: 250, y: 210, img: enemy3
    },
    {
        x: 280, y: 210, img: enemy3
    },
    {
        x: 310, y: 210, img: enemy3
    },
    {
        x: 340, y: 210, img: enemy3
    },
    {
        x: 370, y: 210, img: enemy3
    },

    {
        x: 100, y: 250, img: enemy1
    },
    {
        x: 130, y: 250, img: enemy1
    },
    {
        x: 160, y: 250, img: enemy1
    },
    {
        x: 190, y: 250, img: enemy1
    },
    {
        x: 220, y: 250, img: enemy1
    },
    {
        x: 250, y: 250, img: enemy1
    },
    {
        x: 280, y: 250, img: enemy1
    },
    {
        x: 310, y: 250, img: enemy1
    },
    {
        x: 340, y: 250, img: enemy1
    },
    {
        x: 370, y: 250, img: enemy1
    },
    ]
    arrAttack = []
    arrAttackEnemy = []
    popupWin.style.display = 'flex'
}
function resetGame() {
    clearInterval(intervalAttack)
    clearInterval(intervalAttackEnemy)
    clearInterval(IntervalUpdate)
    wPlane = wCanvas / 2
    enemys = [{
        x: 100, y: 10, img: enemy1
    },
    {
        x: 130, y: 10, img: enemy1
    },
    {
        x: 160, y: 10, img: enemy1
    },
    {
        x: 190, y: 10, img: enemy1
    },
    {
        x: 220, y: 10, img: enemy1
    },
    {
        x: 250, y: 10, img: enemy1
    },
    {
        x: 280, y: 10, img: enemy1
    },
    {
        x: 310, y: 10, img: enemy1
    },
    {
        x: 340, y: 10, img: enemy1
    },
    {
        x: 370, y: 10, img: enemy1
    },



    {
        x: 100, y: 50, img: enemy2
    },
    {
        x: 130, y: 50, img: enemy2
    },
    {
        x: 160, y: 50, img: enemy2
    },
    {
        x: 190, y: 50, img: enemy2
    },
    {
        x: 220, y: 50, img: enemy2
    },
    {
        x: 250, y: 50, img: enemy2
    },
    {
        x: 280, y: 50, img: enemy2
    },
    {
        x: 310, y: 50, img: enemy2
    },
    {
        x: 340, y: 50, img: enemy2
    },
    {
        x: 370, y: 50, img: enemy2
    },


    {
        x: 100, y: 90, img: enemy3
    },
    {
        x: 130, y: 90, img: enemy3
    },
    {
        x: 160, y: 90, img: enemy3
    },
    {
        x: 190, y: 90, img: enemy3
    },
    {
        x: 220, y: 90, img: enemy3
    },
    {
        x: 250, y: 90, img: enemy3
    },
    {
        x: 280, y: 90, img: enemy3
    },
    {
        x: 310, y: 90, img: enemy3
    },
    {
        x: 340, y: 90, img: enemy3
    },
    {
        x: 370, y: 90, img: enemy3
    },


    {
        x: 100, y: 130, img: enemy1
    },
    {
        x: 130, y: 130, img: enemy1
    },
    {
        x: 160, y: 130, img: enemy1
    },
    {
        x: 190, y: 130, img: enemy1
    },
    {
        x: 220, y: 130, img: enemy1
    },
    {
        x: 250, y: 130, img: enemy1
    },
    {
        x: 280, y: 130, img: enemy1
    },
    {
        x: 310, y: 130, img: enemy1
    },
    {
        x: 340, y: 130, img: enemy1
    },
    {
        x: 370, y: 130, img: enemy1
    },

    {
        x: 100, y: 170, img: enemy2
    },
    {
        x: 130, y: 170, img: enemy2
    },
    {
        x: 160, y: 170, img: enemy2
    },
    {
        x: 190, y: 170, img: enemy2
    },
    {
        x: 220, y: 170, img: enemy2
    },
    {
        x: 250, y: 170, img: enemy2
    },
    {
        x: 280, y: 170, img: enemy2
    },
    {
        x: 310, y: 170, img: enemy2
    },
    {
        x: 340, y: 170, img: enemy2
    },
    {
        x: 370, y: 170, img: enemy2
    },

    {
        x: 100, y: 210, img: enemy3
    },
    {
        x: 130, y: 210, img: enemy3
    },
    {
        x: 160, y: 210, img: enemy3
    },
    {
        x: 190, y: 210, img: enemy3
    },
    {
        x: 220, y: 210, img: enemy3
    },
    {
        x: 250, y: 210, img: enemy3
    },
    {
        x: 280, y: 210, img: enemy3
    },
    {
        x: 310, y: 210, img: enemy3
    },
    {
        x: 340, y: 210, img: enemy3
    },
    {
        x: 370, y: 210, img: enemy3
    },

    {
        x: 100, y: 250, img: enemy1
    },
    {
        x: 130, y: 250, img: enemy1
    },
    {
        x: 160, y: 250, img: enemy1
    },
    {
        x: 190, y: 250, img: enemy1
    },
    {
        x: 220, y: 250, img: enemy1
    },
    {
        x: 250, y: 250, img: enemy1
    },
    {
        x: 280, y: 250, img: enemy1
    },
    {
        x: 310, y: 250, img: enemy1
    },
    {
        x: 340, y: 250, img: enemy1
    },
    {
        x: 370, y: 250, img: enemy1
    },
    ]
    arrAttack = []
    arrAttackEnemy = []
}
function pauseGame() {
    clearInterval(intervalAttack)
    clearInterval(intervalAttackEnemy)
    clearInterval(IntervalUpdate)
}
function resumeGame() {
    startIntervalAttack()
    startIntervalAttackEnemy()
    startIntervalUpdate()
}
function handleKey(e) {
    if (e.keyCode == 27) {
        if (isPause) {
            popupPause.style.display = 'flex'
            pauseGame()
            isPause = false

        } else {
            popupPause.style.display = 'none'
            isPause = true
            resumeGame()
        }
    }
}
function main() {
    document.addEventListener('keydown', handleKey)
    drawPlane();
    startIntervalAttack()
    document.addEventListener('keydown', updateMove)
    document.addEventListener('keyup', handleKick)
    startIntervalUpdate()
    startIntervalAttackEnemy()

}
// main();