var s = 0
var venuses = []
var flies = []
var sound
var seed = 1
var score = 0
var hscore
function setup() {
  
  createCanvas(400, 400);
  
  flies.push(new fly(200, 200, "-normal-"))
  venuses.push(new venus(170, 344))
  
  
  sound = loadSound("mySound (2).wav")
}

var m = flies.length 
var ve = venuses.length
function draw() {
   
  if (s === 0) {
    
    background(0, 180, 220);
    
    fill(255)
    if (mouseX > 180 && mouseX < 240 && mouseY > 200 && mouseY < 230 && mouseIsPressed) {
      fill(0, 255, 0)
      s = 1
    } else if (mouseX > 180 && mouseX < 240 && mouseY > 200 && mouseY < 230) {
      fill(220)
    }
    stroke(0)
    rect(180, 200, 60, 30, 5)
    textSize(20)
    fill(0)
    noStroke()
    text("Play", 192, 222)
    
    fill(255)
    if (mouseX > 180 && mouseX < 240 && mouseY > 240 && mouseY < 270 && mouseIsPressed) {
      fill(0, 255, 0)
      s = 2
    } else if (mouseX > 180 && mouseX < 240 && mouseY > 240 && mouseY < 270) {
      fill(220)
    }
    stroke(0)
    rect(180, 240, 60, 30, 5)
    fill(0)
    noStroke()
    text("Menu", 185, 262)
    fill(255, 180, 0)
    textSize(25)
    text("The Great Venus FlyTrap", 70, 150)
  }
  if (s === 1) {
    textSize(12)
    hscore = getItem("h")
  
  
  background(0, 180, 220);
    sound.setVolume(0.6)
  frameRate(99999)
  
  if (flies[0].y > 400 === false) {
    text("score: " + score, 200, 13)
  }
  if (flies[0].y > 400) {
    textSize(12)
    text("You lost!", 200, 13)
    
    
    text("High score: " + hscore, 200, 25)
    fill(255)
    if (mouseX > 200 && mouseX < 260 && mouseY > 340 && mouseY < 370 && mouseIsPressed) {
      flies[0].y = 200
      flies[0].x = 200
      venuses[0].x = 170
      score = 0
      s = 0
    } else if (mouseX > 200 && mouseX < 260 && mouseY > 340 && mouseY < 370) {
      fill(220)
    }
    stroke(0)
    rect(200, 340, 60, 30, 5)
    fill(0)
    textSize(20)
    noStroke()
    text("Back", 208, 363)
  }
  if (score > hscore) {
  storeItem("h", score)
  }
  
  
  for (let i = 0; i < venuses.length; i ++) {
    venuses[i].display()
    venuses[i].sensery()
  }
  for (let i = 0; i < flies.length; i ++) {
    flies[i].display()
    flies[i].death()
    
    
    
    
    if (flies[i].dead === true && flies[i].type === "-normal-") {
      flies.splice(i, 1)
      score += 1
    }
    if (flies[i].dead === true && flies[i].type === "-score X2-") {
      flies.splice(i, 1)
      score *= 2
    }
    if (flies[i].dead === true && flies[i].type === "-score +slicer-") {
      flies.splice(i, 1)
      score += round((score*0.5))
      
    }
    if (flies[i].dead === true && flies[i].type === "-score slicer-") {
      flies.splice(i, 1)
      score -= round((score*0.5))
      
    }
  }
  
  if (mouseIsPressed && score >= 10) {
    seed += 0.04
  } else if (mouseIsPressed && score < 10) {
             seed += 0.01
} else {
    if (seed > 1) {
      seed -= 0.04
    }
   
  }
  
  if (keyCode === RIGHT_ARROW && keyIsPressed) {
    venuses[0].x += seed
  }
  if (keyCode === LEFT_ARROW && keyIsPressed) {
    venuses[0].x -= seed
  }
  }
  if (s === 2) {
    //noStroke()
    background(15)
    fill(50)
    rect(20, 20, 360, 360, 5)
    let et = ["rgbpd",
              "v-----",
             ]
    for (let row = 0; row < et.length; row ++) {
        for (let col = 0; col < et[row].length; col ++) {
          let num = et[row][col]
          switch (num) {
            
              case "r":
              fill(150, 0, 0)
              break;
              case "b":
              fill(0, 120, 140)
              break;
              case "g":
              fill(0, 205, 0)
              break;
              case "p":
              fill(207, 159, 238)
              break;
              case "d":
              fill(50, 40, 40)
              break;
              case"v":
              //v is for vanilla ice cream, vanilla ice cream is for boring poeple
              fill(255)
              break;
          }
          if (num !== "-") {
            stroke(0)
            rect(50 + col * 60, 50 + row * 60, 30, 30, 5)
            switch(num) {
                case "r":
                if (mouseX > 50 + col * 60 && mouseX < (50 + col * 60)+30 && mouseY > 50 + row * 60 && mouseY < (50 + row * 60)+30 && mouseIsPressed) {
              venuses[0].cole = color(150, 0, 0)
            }
                break;
                case"b":
                if (mouseX > 50 + col * 60 && mouseX < (50 + col * 60)+30 && mouseY > 50 + row * 60 && mouseY < (50 + row * 60)+30 && mouseIsPressed) {
              venuses[0].cole = color(0, 120, 140)
            }
                break;
                case"g":
                if (mouseX > 50 + col * 60 && mouseX < (50 + col * 60)+30 && mouseY > 50 + row * 60 && mouseY < (50 + row * 60)+30 && mouseIsPressed) {
              venuses[0].cole = color(0, 205, 0)
            }
                break;
                case"p":
                if (mouseX > 50 + col * 60 && mouseX < (50 + col * 60)+30 && mouseY > 50 + row * 60 && mouseY < (50 + row * 60)+30 && mouseIsPressed) {
              venuses[0].cole = color(207, 159, 238)
            }
                break;
                case"d":
                if (mouseX > 50 + col * 60 && mouseX < (50 + col * 60)+30 && mouseY > 50 + row * 60 && mouseY < (50 + row * 60)+30 && mouseIsPressed) {
              venuses[0].cole = color(50, 40, 40)
            }
                break;
                case"v":
                if (mouseX > 50 + col * 60 && mouseX < (50 + col * 60)+30 && mouseY > 50 + row * 60 && mouseY < (50 + row * 60)+30 && mouseIsPressed) {
              venuses[0].cole = color(255)
            }
                break;
            }
            
          }
          
      }
  }
    
    fill(255)
    if (mouseX > 330 && mouseX < 390 && mouseY > 370 && mouseY < 400 && mouseIsPressed) {
      
      s = 0
      
    } else if (mouseX > 330 && mouseX < 390 && mouseY > 370 && mouseY < 400) {
      fill(220)
    }
    rect(330, 370, 60, 30, 5)
    fill(0)
    noStroke()
    textSize(20)
    text("Back", 338, 391)
  }
}
class venus {
  constructor(x, y, state, ac) {
    this.x = x
    this.y = y
    this.state = 1
    this.ac = false
    this.cole = color(0, 205, 0)
  }
  display() {
    noStroke()
    var v = [
      "---------------",
      "---------------",
      "o-o-o-----o-o-o",
      "-ggogogggogogog",
      "--gggggggggggg-",
      "------gggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg-g----",
      "-------ggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      "-------gg------",
    ]
    switch (this.state) {
      case 1:
        v = [
      "---------------",
      "---------------",
      "o-o-o-----o-o-o",
      "-ogogogggogogog",
      "--gggggggggggg-",
      "------gggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg-g----",
      "-------ggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      "-------gg------",
    ]
        break;
      
        case 2:
        v = [
      "---------------",
      "---------------",
      "---o--------o--",
      "---go------og--",
      "----ggo--ogg---",
      "------gggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg-g----",
      "-------ggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      "-------gg------",
    ]
        break;
        case 3:
        v = [
      "---------------",
      "----go-----g---",
      "----gg----og---",
      "----ggo---gg---",
      "-----gg-ogg----",
      "------gggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg-g----",
      "-------ggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      ]
        break;
        case 4:
        v = [
      "------go-g-----",
      "-----gg-ogg----",
      "-----go---g----",
      "-----gg-ogg----",
      "------gggg-----",
      "------gggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg-g----",
      "-------ggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      ]
        break;
        case 5:
        v = [
      "-------go------",
      "------gogg-----",
      "-----gggogg----",
      "-----ggoggg----",
      "-----gggogg----",
      "------gggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg-g----",
      "-------ggg-----",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      "-------gg------",
      ]
        break;
    }
    
        for (let row = 0; row < v.length; row ++) {
        for (let col = 0; col < v[row].length; col ++) {
          let num = v[row][col]
          switch (num) {
            
              case "o":
              fill(0)
              break;
              case "g":
              fill(this.cole)
              break;
          }
          if (num !== "-") {
            
            rect(this.x + col * 4, this.y + row * 4, 4)
            
          }
          
      }
  }
    
    
    
  }
  sensery() {
    if (flies.length > 0) {
      if (flies[m].x > this.x - 2 && flies[m].x < this.x + 60 && flies[m].y > this.y && flies[m].y < this.y + 12 && this.state === 1) {
      this.ac = true
    }
    }
    
    
    if (this.ac === true) {
      frameRate(6)
      this.state += 1
    }
    
    if (this.state > 5) {
      sound.play()
      this.ac = false
      this.state = 1
    }
  }
}
class fly {
  constructor(x, y, type) {
    this.x = x
    this.y = y
    this.type = type
    this.dead = false
  }
  display() {
    let f = [
      "oo"
    ]
    if (this.type === "-normal-") {
      f = [
      "oo",
    ]
      this.r = floor(random(1, 3.999))
      if (this.r === 1) {
      this.x -= 2
    }
    if (this.r === 2) {
      this.y += 2
    }
    if (this.r === 3) {
      this.x += 2
    }
    }
    if (this.type === "-score X2-") {
      f = [
      "ov",
    ]
      this.r = floor(random(1, 5.999))
      if (this.r === 1 || this.r === 4) {
      this.x -= 2
    }
      
    if (this.r === 2) {
      this.y += 2
    }
    if (this.r === 3 || this.r === 5) {
      this.x += 2
    }
     
      
      
    }
    if (this.type === "-score +slicer-") {
      f = [
      "oe",
    ] 
       this.r = floor(random(1, 3.999))
      if (this.r === 1) {
      this.x -= 2
    }
    if (this.r === 2) {
      this.y += 2
    }
    if (this.r === 3) {
      this.x += 2
    }
     }
    if (this.type === "-score slicer-") {
      f = [
      "og",
    ] 
       this.r = floor(random(1, 3.999))
      if (this.r === 1) {
      this.x -= 2
    }
    if (this.r === 2) {
      this.y += 2
    }
    if (this.r === 3) {
      this.x += 2
    }
     }
    for (let row = 0; row < f.length; row ++) {
        for (let col = 0; col < f[row].length; col ++) {
          let num = f[row][col]
          switch (num) {
            
              case "o":
              fill(0)
              break;
              case "v":
              fill(255, 0, 255)
              break;
              case "e":
              fill(255, 255, 0)
              break;
              case "g":
              fill(0, 255, 0)
              break;
          }
          if (num !== "-") {
            
            rect(this.x + col * 4, this.y + row * 4, 4)
            
          }
          
      }
  }
    
  }
  death() {
    
    if (this.x > venuses[ve].x - 2 && this.x < venuses[ve].x + 60 && this.y > venuses[ve].y && this.y < venuses[ve].y + 12 && venuses[ve].state === 5 && random(1) < 0.85) {
      
      flies.push(new fly(random(2, 400), 200, "-normal-"))
      this.dead = true
      
    } else if (this.x > venuses[ve].x - 2 && this.x < venuses[ve].x + 60 && this.y > venuses[ve].y && this.y < venuses[ve].y + 12 && venuses[ve].state === 5 && random(1) < 0.95) {
      if (random(1) > 0.3) {
        flies.push(new fly(random(2, 400), 220, "-score +slicer-"))
      } else {
        flies.push(new fly(random(2, 400), 190, "-score slicer-"))
      }
      
      
      this.dead = true
    } else if (this.x > venuses[ve].x - 2 && this.x < venuses[ve].x + 60 && this.y > venuses[ve].y && this.y < venuses[ve].y + 12 && venuses[ve].state === 5) {
      flies.push(new fly(random(2, 400), 230, "-score X2-"))
      
      this.dead = true
    }
    
  }
}