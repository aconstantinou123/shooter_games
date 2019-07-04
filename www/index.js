import  { 
  PlayerShip, 
  Projectile, 
  Space, 
  SquareEnemy, 
  FollowEnemy, 
  ClawEnemy, 
  SpiralEnemy,
  BasicEnemy,
  PowerUp,
  Star,
  draw_projectile,
  draw_spiral_enemy,
  draw_player_ship,
  draw_shockwave,
  draw_power_up,
  draw_square_enemy,
  draw_basic_enemy,
  draw_enemy_projectile,
  draw_follow_enemy,
  draw_claw_enemy,
  draw_star,
  draw_outline,
  draw_offscreen_canvas,
} from "shooter"

import BufferLoader from './bufferLoader'

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

let playerShip = PlayerShip.new()
const space = Space.new(1800, 1200)
const powerUp = PowerUp.new()


const canvas=document.getElementById("space")
const offscreen=document.createElement('canvas')

const primaryCtx=canvas.getContext("2d",  { alpha: false })
const offscreenCtx = offscreen.getContext("2d", { alpha: false })

canvas.width = window.innerWidth - 20
canvas.height = 860
offscreen.width = space.get_width()
offscreen.height = space.get_height()

const times = []
let fps
let projectileArray = []
let powerUpProjectileArray1 = []
let powerUpProjectileArray2 = []
let squareEnemyArray = []
let followEnemyArray = []
let clawEnemyArray = []
let spiralEnemyArray = []
let basicEnemyArray = []
let starArray = []
let keys = []
let velX = 0
let velY = 0
let rotationSpeed = 0
let delay = 0
let drawSpirals = true
let spiralX = getRandomInt(space.get_width() - 30)
let spiralY = getRandomInt(space.get_height() - 30)
let startGame = false
let startBackgroundMusic = false

let squareEnemyInterval
let followEnemyInterval
let clawEnemyInterval
let spiralEnemyInterval
let basicEnemyInterval

const file = require('./media/technical-debt.mp3')
let context
let bufferLoader
let source1



const playButton = document.getElementById('play-button')
const modal = document.getElementById('modal-content')

playButton.addEventListener('click', function() {
  const computedDisplay = window.getComputedStyle(modal, null).getPropertyValue('display');
  if (computedDisplay === "block") {
    modal.style.display = "none"
  } else {
    modal.style.display = "block"
  }
  startGame = !startGame
  if(!startBackgroundMusic){
    context.resume().then(() => {
      source1.loop = true
      startBackgroundMusic = true
      source1.start(0)
    })
  }
})

const finishedLoading = (bufferList) => {
  source1 = context.createBufferSource()
  source1.buffer = bufferList[0]
  source1.connect(context.destination)
}

const init = () => {
  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext
  context = new AudioContext()

  bufferLoader = new BufferLoader(
    context,
    [
      'http://localhost:5000/media/technical-debt.mp3',
    ],
    finishedLoading
    )
  bufferLoader.load()
}

const drawPlayerShip = () => {
  draw_player_ship(playerShip, offscreenCtx)
  if(playerShip.shockwave.get_is_active()){
    drawShockwave()
  }
}

const drawShockwave = () => {
  draw_shockwave(playerShip, "#FFFF00", offscreenCtx)
}

const drawProjectiles = (array) => {
  array.forEach(projectile => {
    draw_projectile(projectile, '#ff073a', offscreenCtx)
  })
}

const drawStars = () => {
  starArray.forEach(star => {
    draw_star(star, 'white', offscreenCtx)
  })
}

const drawPowerUp = () => {
  draw_power_up(powerUp, offscreenCtx)
}

const drawSpiralEnemy = () => {
  spiralEnemyArray.forEach(spiralEnemy => {
    spiralEnemy.spiral_movement()
    draw_spiral_enemy(spiralEnemy, "#0033FF", offscreenCtx)
  })
}

const drawSquareEnemy = () => {
  squareEnemyArray.forEach(squareEnemy => {
    draw_square_enemy(squareEnemy, "#FFFF00", offscreenCtx)
    drawEnemyProjectile(squareEnemy)
  })
}

const drawBasicEnemy = () => {
  basicEnemyArray.forEach(basicEnemy => {
    draw_basic_enemy(basicEnemy,  "#00FF00", offscreenCtx)
  })
}

const drawEnemyProjectile = (squareEnemy) => {
  if(squareEnemy.get_can_shoot()){
    draw_enemy_projectile(squareEnemy, "#FF00FF", offscreenCtx)
  }
}

const drawFollowEnemy = () => {
  followEnemyArray.forEach(followEnemy => {
    draw_follow_enemy(followEnemy, "#9D00FF", offscreenCtx)
  })
}

const drawClawEnemy = () => {
  clawEnemyArray.forEach(clawEnemy => {
    draw_claw_enemy(clawEnemy, "#FF0000", offscreenCtx)
  })
}

const addSquareEnemies = (amountToAdd) => {
  const buffer = 120
  const patrolWidth = space.get_width() - 240
  const patrolHeight = space.get_height() - 240
  const x = getRandomInt(patrolWidth) + buffer
  const y = getRandomInt(patrolHeight) + buffer
  squareEnemyInterval = setInterval(() => {
    if(squareEnemyArray.length < amountToAdd && startGame){
      const squareEnemy = SquareEnemy.new(x, y)
      squareEnemyArray = [
        ...squareEnemyArray,
        squareEnemy,
      ]
    }
  }, 5000)
}

const addFollowEnemies = (amountToAdd) => {
  followEnemyInterval = setInterval(() => {
    if(followEnemyArray.length < amountToAdd && startGame){
      const followEnemy = FollowEnemy
      .new(getRandomInt(space.get_width() - 30), getRandomInt(space.get_height() - 30))
      followEnemyArray = [
        ...followEnemyArray,
        followEnemy,
      ]
    }
  }, 2000)
}

const addStars = () => {
  setInterval(() => {
    if(starArray.length < 50){
      const star = Star
      .new(space.get_width() / 2, space.get_height() / 2)
      starArray = [
        ...starArray,
        star,
      ]
    }
  }, 75)
}

const addBasicEnemies = (amountToAdd) => {
  basicEnemyInterval = setInterval(() => {
    if(basicEnemyArray.length < amountToAdd && startGame){
      const basicEnemy = BasicEnemy
      .new(getRandomInt(space.get_width() - 30), getRandomInt(space.get_height() - 30))
      basicEnemyArray = [
        ...basicEnemyArray,
        basicEnemy,
      ]
    }
  }, 2000)
}

const updateSpiralEnemies = () => {
  spiralEnemyInterval = setInterval(() => {
  if(spiralEnemyArray.length == 30){
    drawSpirals = false
  } else if (spiralEnemyArray.length == 0){
    drawSpirals = true
    spiralX = getRandomInt(space.get_width() - 30)
    spiralY = getRandomInt(space.get_height() - 30)
  }
    if(spiralEnemyArray.length <= 30 && drawSpirals && startGame){
      const spiralEnemy = SpiralEnemy
        .new(spiralX, spiralY)
      spiralEnemyArray = [
        ...spiralEnemyArray,
        spiralEnemy
      ]
    }
  }, 10)
}    

const addClawEnemies = (amountToAdd) => {
  clawEnemyInterval = setInterval(() => {
    if(clawEnemyArray.length < amountToAdd && startGame){
      const clawEnemy = ClawEnemy
        .new(getRandomInt(space.get_width() - 30), getRandomInt(space.get_height() - 30))
      clawEnemyArray = [
        ...clawEnemyArray,
        clawEnemy,
      ]
    }
  }, 1000)
}

const updatePlayerHealthDisplay = () => {
  const playerHealthElement = document.getElementById("player-health")
  if(playerShip.get_health() >= 1){
    playerHealthElement.innerText = `Ship armor: ${playerShip.get_health()}`
  } else {
    playerHealthElement.innerText = 'Game Over'
  }
}

const updateScoreDisplay = () => {
  const scoreElement = document.getElementById("score")
  scoreElement.innerText = `Score: ${playerShip.get_score()}` 
}

const updateShockwavesDisplay = () => {
  const shockwavesElement = document.getElementById("shockwaves")
  shockwavesElement.innerText = `Shockwaves Remaining: ${playerShip.shockwave.get_shockwaves_remaining()}` 
}

const updateFPSDisplay = () => {
  const shockwavesElement = document.getElementById("fps")
  shockwavesElement.innerText = `FPS: ${fps}` 
}

const renderGameOverText = () => {
  const modalText = document.getElementById("modal-text")
  modalText.innerHTML = ''
  const gameOver =  document.createElement("h2")
  const score = document.createElement("h2")
  gameOver.innerText = "Game Over"
  gameOver.setAttribute("class", "game-over")
  score.innerText = `Final Score: ${playerShip.get_score()}`
  score.setAttribute("class", "game-over")
  modalText.appendChild(gameOver)
  modalText.appendChild(score)
}

const updatePlayerShip = () => {
  velX *= 0.98
  velY *= 0.98
  rotationSpeed *= 0.98
  controlShip()
  playerShip.increment_rotation_degrees(rotationSpeed)
  playerShip.increment_centre_x(velX)
  playerShip.increment_centre_y(velY)
  if(playerShip.shockwave.get_is_active()){
    playerShip.detonate(space)
  }
  space.check_player_ship_out_of_bounds(playerShip)
  playerShip.check_is_dead()
}

const updateProjectiles = (array) => {
  array.forEach(projectile => {
    space.check_projectile_out_of_bounds(projectile)
    projectile.calculate_new_x()
    projectile.calculate_new_y()
  })
  return array.filter(projectile => projectile.is_active())
}

const updateStarArray = () => {
  starArray.forEach(star => {
    space.check_star_out_of_bounds(star)
    star.calculate_new_x()
    star.calculate_new_y()
  })
  return starArray.filter(star => star.is_active())
}

const updatePowerUp = () => {
  if(playerShip.get_power_up() !== 'normal'){
    powerUp.power_up_countdown(playerShip)
  } else if(startGame) {
    powerUp.generate_random_position(space)
    powerUpProjectileArray1 = []
    powerUpProjectileArray2 = []
  }
  powerUp.check_collision_with_player_ship(playerShip)
}

const updateEnemies = () => {
  [
    ...spiralEnemyArray,
    ...squareEnemyArray,
    ...basicEnemyArray,
    ...clawEnemyArray,
    ...followEnemyArray
  ].forEach(enemy => {
    enemy.update(playerShip, space)
  })
}

const checkProjectileHit = () => {
  projectileArray.forEach(projectile => {
    squareEnemyArray.forEach(enemy => {
      enemy.check_dead(projectile)
      enemy.blow_up(playerShip, 300)
    })
    followEnemyArray.forEach(enemy => {
      enemy.check_dead(projectile)
      enemy.blow_up(playerShip, 200)
    })
    clawEnemyArray.forEach(enemy => {
      enemy.avoid_projectile(projectile)
      enemy.check_dead(projectile)
      enemy.blow_up(playerShip, 500)
    })
    spiralEnemyArray.forEach(enemy => {
      enemy.check_dead(projectile)
      enemy.blow_up(playerShip, 15)
    })
    basicEnemyArray.forEach(enemy => {
      enemy.check_dead(projectile)
      enemy.blow_up(playerShip, 100)
    })
  })
  squareEnemyArray = squareEnemyArray.filter(squareEnemy => squareEnemy.base.is_active())
  followEnemyArray = followEnemyArray.filter(followEnemy => followEnemy.base.is_active())
  clawEnemyArray = clawEnemyArray.filter(clawEnemy => clawEnemy.base.is_active())
  spiralEnemyArray = spiralEnemyArray.filter(spiralEnemy => spiralEnemy.base.is_active())
  basicEnemyArray = basicEnemyArray.filter(basicEnemy => basicEnemy.base.is_active())
  
}

const shootProjectile = (arrayToUpdate, degreesToModify) => {
  const projectile = Projectile.new(
    playerShip.get_centre_x(), 
    playerShip.get_centre_y(),
    playerShip.get_rotation_degrees() + degreesToModify,
    )
  return [ ...arrayToUpdate, projectile ]
}
 
window.addEventListener("keydown", (e) => {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault()
  }
}, false)

document.body.addEventListener("keydown", (e) => {
  keys[e.keyCode] = true
})

document.body.addEventListener("keyup", (e) => {
  keys[e.keyCode] = false
})

const controlShip = () => {
  if(playerShip.get_is_alive()) {
    if(keys[37] && rotationSpeed > -2){
      rotationSpeed -= 1
    } if (keys[39] && rotationSpeed < 2){
      rotationSpeed += 1
    } if(keys[65] && velX > -playerShip.get_speed()){
      velX -= 1
    } if (keys[68] && velX < playerShip.get_speed()){
      velX += 1
    }  if(keys[87] && velY > -playerShip.get_speed()){
      velY -= 1
    }  if(keys[83] && velY < playerShip.get_speed()){
      velY += 1
    } 
    if (keys[70] && !playerShip.shockwave.get_is_active()) {
      playerShip.activate_shockwave()
    } 
    if (keys[32]){
      const amountToDelay =  playerShip.get_power_up() === 'projectile' ? 0 : 5
      if(delay > amountToDelay ){
          projectileArray = shootProjectile(projectileArray, 0)
          if(playerShip.get_power_up() === 'projectile'){
            powerUpProjectileArray1 = shootProjectile(powerUpProjectileArray1, -10)
            powerUpProjectileArray2 = shootProjectile(powerUpProjectileArray2,10)
          }
          delay = 0
      } else {
          delay += 1
      }
    }
  }
}

const enemyRampUp = () => {
  if (playerShip.get_score() >= 0 && space.get_intensity_level() === 0) {
    space.increment_intensity_level()
    addBasicEnemies(20)
    // addClawEnemies(4)
    // addSquareEnemies(4)
    // addFollowEnemies(30)
    // updateSpiralEnemies()
  } else if (playerShip.get_score() >= 1000 && space.get_intensity_level() === 1) {
    space.increment_intensity_level()
    addFollowEnemies(20)
    addSquareEnemies(4)
  } else if (playerShip.get_score() >= 10000 && space.get_intensity_level() === 2) {
    space.increment_intensity_level()
    clearInterval(basicEnemyInterval)
    addBasicEnemies(16)
    addClawEnemies(4)
  } else if (playerShip.get_score() >= 20000 && space.get_intensity_level() === 3) {
    space.increment_intensity_level()
    updateSpiralEnemies()
  } else if (playerShip.get_score() >= 40000 && space.get_intensity_level() === 4) {
    space.increment_intensity_level()
    clearInterval(followEnemyInterval)
    addFollowEnemies(30)
    clearInterval(squareEnemyInterval)
    addSquareEnemies(4)
  } else if (playerShip.get_score() >= 60000 && space.get_intensity_level() === 5) {
    space.increment_intensity_level()
    clearInterval(squareEnemyInterval)
    addSquareEnemies(10)
  }
}



const restartGame = () => {
  renderGameOverText()
  projectileArray = []
  powerUpProjectileArray1 = []
  powerUpProjectileArray2 = []
  squareEnemyArray = []
  followEnemyArray = []
  clawEnemyArray = []
  spiralEnemyArray = []
  basicEnemyArray = []
  keys = []
  velX = 0
  velY = 0
  rotationSpeed = 0
  delay = 0
  drawSpirals = true
  spiralX = getRandomInt(space.get_width() - 30)
  spiralY = getRandomInt(space.get_height() - 30)
  playerShip = PlayerShip.new()
  space.reset_intensity_level()
  clearInterval(squareEnemyInterval)
  clearInterval(followEnemyInterval)
  clearInterval(clawEnemyInterval)
  clearInterval(spiralEnemyInterval)
  clearInterval(basicEnemyInterval)
}


const animate = requestAnimationFrame

function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now()
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift()
    }
    times.push(now)
    fps = times.length
    refreshLoop()
  });
}

refreshLoop()
addStars()

const step = () => {
  animate(step)
  update()
  render()
}

const update = () => {
  starArray = updateStarArray()
  if(startGame){
    enemyRampUp()
    updatePlayerShip()
    projectileArray = updateProjectiles(projectileArray)
    if(playerShip.get_power_up() === 'projectile'){
      powerUpProjectileArray1 = updateProjectiles(powerUpProjectileArray1)
      powerUpProjectileArray2 = updateProjectiles(powerUpProjectileArray2)
    }
    updateEnemies()
    checkProjectileHit()
    updatePlayerHealthDisplay()
    updateScoreDisplay()
    updateShockwavesDisplay()
    updatePowerUp()
    updateFPSDisplay()
    draw_offscreen_canvas(space, playerShip, canvas, offscreen, primaryCtx, offscreenCtx)
  }
}

const render = () => {
  drawStars()
  if(startGame){
    draw_outline(space, '#ea00d9', offscreenCtx)
    if(playerShip.get_is_alive()){
      drawPlayerShip()
    } else {
      restartGame()
      playButton.click()
    }
    drawSquareEnemy()
    drawProjectiles(projectileArray)
    if(playerShip.get_power_up() === 'projectile'){
      drawProjectiles(powerUpProjectileArray1)
      drawProjectiles(powerUpProjectileArray2)
    }
    drawFollowEnemy()
    drawClawEnemy()
    drawSpiralEnemy()
    drawBasicEnemy()
    drawPowerUp()
  }
}
                

window.onload = () => {
  init()
  animate(step)
} 

window.onload()