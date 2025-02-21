// Copyright 2012 Geeky Ventures

// Each lesson has a tutor message, the code given at the start of the
// lesson, some hiddenCode that is not shown but defines some
// convenience functions and globals, a lessonSection that is
// displayed to give a sense of where you are and progress, which
// tutorImage to display, and a check that (when it exists) will
// display a little congratulatory "You got it!" the first time that
// regex appears in the student's code.
// code, if missing, will not change the code in the box.
// hiddenCode, lessonSection, and tutorImage all will, if missing, use
// the hiddenCode from the last lesson where it was defined.
// youGotItCheck, if missing, will just not display the congrats message.
// Of these, the message is always there and the code often there.  Others
// are usually missing for most lessons.

var lessons = [
  // Draw box
  {
    message:
      "Szia, Code Maven vagyok! (klikkelj a szavakra, hogy lásd mi következik)",
    code: "c.fillRect(20, 20, 50, 75);\n",
    lessonSection: "Vágjunk Bele",
    tutorImage: 1,
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    // Hide the access to the canvas, which is ugly, giving instead c
    // rgba() is a string, but students sometimes want to use it as
    // a function.  Let that quietly succeed, not worth confusing them
    // on that.
  },
  { message: "Egy kis programozást fogsz tanulni (klikkelj megint)" },
  {
    message:
      "Alul, balra, a javascript kódot láthatod, jobbra pedig, amit csinál.",
  },
  {
    message:
      "Használhatod a fillRect() funkciót, hogy egy dobozt rajzolj. Látod az 50-es számot?  Kicserélnéd 150-re?",
    code: "c.fillRect(20, 20, 50, 75);\n",
    youGotItCheck: "150",
  },
  {
    message:
      "Ez szélesebbé varázsolta a dobozt. Mit gondolsz mit csinál a többi szám? Próbáld meg kicserélni őket.",
    lessonSection: "Paraméterek és Rajzolás",
  },
  {
    message:
      "Sikerült? A számok sorban azt jelentik, hogy milyen messze legyen balra, milyen messze legyen fentről, milyen szélesre rajzolja a dobozt és milyen magasra. Igy tehát <span class=tutor-code>c.fillRect(<i>bal, fent, szélesség, magasság</i>);</span>",
    tutorImage: 4,
  },
  { message: "Cseréld ki az összes számot! Játssz velük!", tutorImage: 5 },
  {
    message:
      "Itt van két doboz. Meg tudnád változtatni a számokat, hogy nagyobbak legyenek a dobozok?",
    code: "c.fillRect(20, 20, 50, 75);\nc.fillRect(100, 100, 60, 80);\n",
    tutorImage: 3,
  },
  {
    message: "Meg tudnád változtatni a számokat, hogy elmozdítsd a dobozokat?",
  },
  {
    message:
      "Mit szólnál egy nagyobb kihíváshoz? Meg tudnád változtatni a számokat, hogy az egyik doboz lefedje a másikat?",
    tutorImage: 6,
  },

  // Variables
  {
    message:
      "Dolgozzunk most kockaalakú dobozokkal.  Kockaalakú dobozoknak azonos a szélességük és magasságuk.",
    code: "c.fillRect(30, 20, 80, 80);\n",
    tutorImage: 1,
  },
  {
    message: "Nézd csak, ez ugyanazt csinálja!",
    code: "var size = 80;\nc.fillRect(30, 20, size, size);\n",
    lessonSection: "Változók",
    tutorImage: 2,
  },
  { message: "Miért csinálja ez ugyanazt? Van ötleted?", tutorImage: 4 },
  {
    message:
      "<span class=tutor-code>var</span> azt jelenti, hogy változó. Annyi volt, hogy készítettünk egy változót, elneveztük <span class=tutor-code>size</span>-nak, egyenlővé tettük 80-nal, és most használhatjuk a <span class=tutor-code>size</span>-ot ott ahol egyébként 80 lenne. Tudod, hogy miért van erre szükség?",
    code: "var size = 80;\nc.fillRect(30, 20, size, size);\n",
  },
  { message: "Mi történik ha lecseréljük a 80-at 220-ra?", tutorImage: 1 },
  { message: "Nézd csak!  Szélesebb és magasabb doboz, egyszerre mindkettő!" },
  { message: "Mit tennél, hogy elmozdítsd a dobozt?" },
  { message: "Letudnád kicsinyíteni a dobozt?" },
  {
    message:
      "Mi történne ha a <span class=tutor-code>size</span>-ot átírnánk 0-ra? Vagy valami nagyon nagyra, mint 5000?",
  },

  // More boxes
  {
    message: "Készítek még két dobozt. Igy.",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n",
    tutorImage: 6,
  },
  {
    message:
      "Mindkét doboz azonos méretű négyzet, mivel mindkettő a <span class=tutor-code>size</span> változót használja szélességhez és magassághoz.",
  },
  {
    message:
      "Megváltoztathatod azt, hogy a <span class=tutor-code>size</span> mivel lesz egyenlő.  Ez növeli vagy kicsinyíti mindkét dobozt egyszerre! Válts 80-ról 180-ra!",
    tutorImage: 4,
  },
  {
    message:
      "Készítsünk még tö dobozt.  Íme másik 3 doboz! Próbálj meg változtatni a size értékén vagy mozdítsd el a dobozokat.",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(80, 80, size, size);\nc.fillRect(140, 140, size, size);\n",
    tutorImage: 1,
  },
  {
    message:
      "Még tö doboz!  Mos változtass a size-on, esetleg valamivel kisebbre mint 10 vagy 50?",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(60, 60, size, size);\nc.fillRect(100, 100, size, size);\nc.fillRect(140, 140, size, size);\nc.fillRect(180, 180, size, size);\n",
    tutorImage: 5,
  },

  // Two colored boxes
  {
    message: "Éáss csodát, színek!  Szórakoztató ugye?",
    code: 'var size = 80;\n\nc.fillStyle = "blue";\nc.fillRect(20, 20, size, size);\n',
    lessonSection: "Color",
    tutorImage: 4,
  },
  {
    message:
      'Számos szín lehetséges.  Próbaképp "zöld" vagy "lila" vagy "arany"!',
    tutorImage: 2,
  },
  {
    message: "Mit szólnál 2 rózsaszín dobozhoz?",
    code: 'var size = 80;\n\nc.fillStyle ="pink";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n',
    tutorImage: 3,
  },
  {
    message: "itt van egy rózsaszín és egy ezüst.",
    code: 'var size = 80;\n\nc.fillStyle ="pink";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="silver";\nc.fillRect(90, 90, size, size);\n',
  },
  {
    message:
      "Megváltoztatnád az ezüst dobozokat aranyszínűre?  És a rózsaszínűt pedig kékre?",
    code: 'var size = 80;\n\nc.fillStyle ="pink";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="silver";\nc.fillRect(90, 90, size, size);\n',
    tutorImage: 6,
  },
  {
    message:
      "Ismét két azonos színű doboz.  Most pedig adj két különböző színt a dobozoknak!",
    code: 'var size = 80;\n\nc.fillStyle ="green";\nc.fillRect(20, 20, size, size);\n\nc.fillRect(90, 90, size, size);\n',
    tutorImage: 1,
  },
  {
    message: "Egy lehetságes változat, piros és kék.",
    code: 'var size = 80;\n\nc.fillStyle ="red";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="blue";\nc.fillRect(80, 80, size, size);\n',
  },
  {
    message: "Piros, zöld, kék.  Ez szép.",
    code: 'var size = 80;\n\nc.fillStyle ="red";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="lime";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="blue";\nc.fillRect(140, 140, size, size);\n',
  },
  {
    message: "Nahát, ez ugyanazt csinálja?  Mit jelenthet az rgb()?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgb(0, 255, 0)";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="rgb(0, 0, 255)";\nc.fillRect(140, 140, size, size);\n',
    tutorImage: 4,
  },
  {
    message:
      "Cseréld le a nullákat például 200-ra.  Majd bármelyik 255-öst 0-ra. Mit jelenthetnek ezek a számok?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgb(0, 255, 0)";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="rgb(0, 0, 255)";\nc.fillRect(140, 140, size, size);\n',
    tutorImage: 6,
  },
  {
    message:
      "Sikerült kitalálni?  Az rgb() sorban a pirosat, zöldet és kéket jelenti.  A számértékek 0-tól 255-ig tartanak. Tehát, <span class=tutor-code>rgb(0, 255, 0)</span> azt jelenti, hogy nincs piros vagy kék, viszont így csupa zöldet kapsz!",
    tutorImage: 1,
  },
  {
    message:
      "Így számos színt tudsz keverni, hogyha a számok valamelyikét átírod.  Próbáld ki!",
    tutorImage: 5,
  },
  {
    message: "Jöjjön egy kis játék.  Adj azonos színt ennek a két doboznak.",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="red";\nc.fillRect(80, 80, size, size);\n',
    lessonSection: "Quiz: Color",
    tutorImage: 2,
  },
  {
    message: "Adj mindkettőnek kék színt.",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="blue";\nc.fillRect(80, 80, size, size);\n',
  },
  {
    message:
      "Kitalálod mennyinek kell lennie az rgb() számoknak ahhoz, hogy sárga színt kapj?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="yellow";\nc.fillRect(80, 80, size, size);\n',
    tutorImage: 4,
  },
  {
    message:
      "Kitalálod mennyinek kell lennie az rgb() számoknak ahhoz, hogy pávakék színt kapj?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 128)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="teal";\nc.fillRect(80, 80, size, size);\n',
  },
  {
    message:
      "Oké, ez nehéz lesz.  Adj azonost színt ennek a két doboznak?  Kitalálod mennyinek kell lennie az rgb() számoknak ahhoz, hogy karmazsinvörös színt kapj? Ne aggódj ha nem teljesen tökéletes, csak próbáld ki mennyire közel tudsz kerülni az értékekhez!",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="crimson";\nc.fillRect(80, 80, size, size);\n',
    tutorImage: 2,
  },
  {
    message: "Tyűha, ez nem könnyű!  Mennyire közel kerültél az értékekhez?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(220, 20, 60)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="crimson";\nc.fillRect(80, 80, size, size);\n',
    tutorImage: 3,
  },
  {
    message:
      'If you want to try others, put "olive", "purple", "aqua", or any other color you can think of as the color for the second box, then try to find the rgb numbers for the first box that match it!',
  },

  // rgba
  {
    message:
      "rgba() is a fun version of rgb(). See what this does?  It's got one more number at the end that's 0.5.  What is that last number doing? Try changing the 0.5 to 0.1.  Or to 0.8.  What does it do?",
    code: 'var size = 80;\n\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(80, 80, size, size);\n',
    lessonSection: "Color and Transparency",
    tutorImage: 6,
  },
  {
    message:
      "The a in rgba means alpha (how transparent the box is) from 0.0 (invisible) to 1.0 (solid)",
    tutorImage: 1,
  },
  {
    message:
      "You can do pretty cool things with rgba().  Look at this!  Try changing some of the 0.5 alphas to 0.2 or 0.8!",
    code: 'var size = 80;\n\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgba(0, 255, 0, 0.5)";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(140, 140, size, size);\n',
    tutorImage: 2,
  },
  {
    message:
      "And try changing the size from 80 to 180!  You can get some fun effects when the colors overlap. Play with it!",
    tutorImage: 5,
  },

  // Operators and assignment
  {
    message:
      "Let's go back to variables. Variables make it easier to change what our code does. Let's use <span class=tutor-code>offset</span> for how far the first box is from the left and top.  Can you replace the <span class=tutor-code>20</span> numbers with <span class=tutor-code>offset</span>?",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n',
    lessonSection: "Operators and Assignment",
    tutorImage: 1,
  },
  {
    message:
      "Now try changing what <span class=tutor-code>offset</span> is equal to from 30 to 50.  See how you can move the first box?",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\nc.fillRect(90, 90, size, size);\n',
  },
  {
    message:
      "Variables can be set to new values.  See how offset is set to 100 before being used by the second box?",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = 100;\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 6,
  },
  { message: "Try moving the second box.  Change the 100 to 50 or 150." },
  {
    message:
      "Try moving the first box too.  Remember what do you have to change to move the first box?",
    tutorImage: 3,
  },
  {
    message:
      "Can you put the boxes on top of each other so they overlap and it looks like just one box?",
    tutorImage: 4,
  },
  {
    message:
      "You can also add numbers to a variable. See what this is doing? It changes offset with <span class=tutor-code>offset = offset + 50</span>",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset + 50;\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 1,
  },
  {
    message:
      "<span class=tutor-code>offset = offset + 50</span> means take offset, add 50 to it, then make offset equal that now.  In other words, make offset 50 more than it used to be.",
  },
  {
    message:
      "How about you try it?  Can you replace both the 90 numbers used for the (left, top) of the second box with a variable? Hint: Either create a new variable or change offset and then use offset.",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\n\nc.fillRect(90, 90, size, size);\n',
    lessonSection: "Quiz: Variables and Operators",
    tutorImage: 2,
  },
  {
    message:
      "Here's one way. It adds 60 to whatever <span class=tutor-code>offset</span> was before, and makes that the new value of <span class=tutor-code>offset</span>. Okay, now try changing what <span class=tutor-code>offset</span> is equal to at the beginning from 30 to 80.  See what happens?",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 3,
  },
  {
    message:
      "You can move both boxes together!  Change the offset and move 'em around!",
    tutorImage: 5,
  },
  {
    message:
      "This looks the same, but it's a little different.  <span class=tutor-code>*</span> means multiply.  <span class=tutor-code>2 * 2</span> would be 4.  So, <span class=tutor-code>offset = offset * 3</span> means make offset three times bigger.",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n',
    lessonSection: "More Operators",
    tutorImage: 3,
  },
  {
    message:
      "<span class=tutor-code>*</span> means multiply and <span class=tutor-code>/</span> means divide.  So, when we set size equal to <span class=tutor-code>20 * 6 / 2 + 50 - 10</span>, that's just a complicated way of saying make size equal to 100.  Does that make sense?",
    code: 'var size = 20 * 6 / 2 + 50 - 10;\nvar offset = 30;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n',
  },

  // Conditionals and comparisons
  {
    message:
      "We can also compare numbers.  See this code?  We will only draw a second box when <span class=tutor-code>size</span> is less than 80.",
    code: "var size = 50;\n\nc.fillRect(20, 20, size, size);\nif (size < 80) {\n  c.fillRect(100, 100, size, size);\n}\n",
    lessonSection: "If and Comparisons",
    tutorImage: 4,
  },
  {
    message:
      "Try changing size to 150.  See what happens? Try changing size to 79.  Then change it to 80. Neat, isn't it!",
    tutorImage: 3,
  },

  // Three colored boxes
  {
    message:
      "Okay, let's see what you know!  Here are two boxes.  Can you add a third box (also offset by 60 from the previous box)?",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="lime";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n',
    lessonSection: "Quiz: Variables and Color",
    tutorImage: 1,
  },
  {
    message: "Here's one way to do it. Try changing the size or offset!",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="lime";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 3,
  },
  {
    message:
      "Remember rgba()? Don't you like what happens when transparent shapes overlap?  This is nice, but it would be even better with different colors.  Can you change this so the three boxes have different colors?",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 4,
  },
  {
    message:
      "Here's one way.  Awesome!  Try changing <span class=tutor-code>size</span> to make them bigger!  Or change <span class=tutor-code>offset</span> to move them around!  Or play with the red, blue, green, and alpha values to try different colors and transparencies!",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 255, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 5,
  },

  // For loop to avoid repeated code
  {
    message:
      "You know, I really don't like writing code more than once.  Look at this program.  There is lots of the same code in this program.  See how the exact same thing, <span class=tutor-code>c.fillRect(offset, offset, size, size)</span>, appears on three different lines?  And how we add 40 to <span class=tutor-code>offset</span> every time before we draw another box?",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\n',
    lessonSection: "For Loops",
    tutorImage: 1,
  },
  {
    message:
      "Let me show you something.  This is called a <span class=tutor-code>for</span> loop.  It repeats code without writing it more than once.  Isn't that great?  Try changing the 3 to 5!",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 3; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
  },
  {
    message:
      "For loops have three parts, where to start (<span class=tutor-code>i = 0</span>), when to keep going (<span class=tutor-code>i < 5</span>), and how much to change each time (<span class=tutor-code>i = i + 1</span>). Can you make ten boxes?",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 5; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
  },
  {
    message: "Oh no!  They don't fit!  How can you make ten boxes fit?",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
    tutorImage: 4,
  },
  {
    message: "Here is one way!",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n',
    tutorImage: 2,
  },
  {
    message:
      "Smaller boxes also fit.  Try playing with size, offset, and changing the number of boxes!",
    code: 'var size = 20;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n',
  },

  // Lots of colored boxes
  {
    message: "Let's play with rgba() again! What's this doing?",
    code: 'var size = 50;\nvar offset = 20;\n\nfor (var i = 0; i < 10; i = i + 1) {\n  var b = i * 25;\n  var rgba = "rgba(0, 0, " + b + ", 0.5)";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n',
    lessonSection: "Fun with For Loops",
    tutorImage: 6,
  },
  {
    message:
      "Complicated!  That means use 0 blue light for the first box, 25 for the second, then 50, 75, 100...",
  },
  {
    message:
      "Here is another one, this one changing alpha!  Isn't that fantastic?",
    code: 'var size = 50;\nvar offset = 20;\n\nfor (var i = 0.1; i < 0.5; i = i + 0.05) {\n  var rgba = "rgba(0, 0, 255, " + i + ")";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n',
    tutorImage: 5,
  },

  // Quiz
  {
    message:
      "Can you show me what you learned?  Draw me a square! Hint: Remember <span class=tutor-code>c.fillRect(<i>left, top, width, height</i>);</span> to draw a box.",
    code: "",
    lessonSection: "Quiz: Write Code Yourself",
    tutorImage: 2,
  },
  { message: "Can you add another square?", tutorImage: 4 },
  {
    message:
      'Now can you make the second square red? (Hint: <span class=tutor-code>c.fillStyle = "blue";</span> before fillRect() will make the rect blue)',
    tutorImage: 3,
  },
  {
    message:
      "Great! Did you get something like this? If not, try playing with the numbers a bit to see how it works!",
    code: 'c.fillRect(10, 10, 20, 20);\nc.fillStyle = "red";\nc.fillRect(50, 50, 100, 100);\n',
    tutorImage: 2,
  },

  // Draw line
  {
    message:
      "Let's do something different now.  Let's play with lines.  This is the code you use to draw lines in Javascript.  What do you think moveTo() does? lineTo()?",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.stroke();\n",
    lessonSection: "Lines",
    tutorImage: 1,
  },
  {
    message:
      "Let's play with it.  Try changing 20 to 50. Try changing the other numbers too.  Can you figure out what moveTo() and lineTo() do?  How does this all work?",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.stroke();\n",
  },
  {
    message:
      "<span class=tutor-code>moveTo(<i>left, top</i>)</span> moves the pen to a spot without drawing.  <span class=tutor-code>lineTo(<i>left, top</i>)</span> draws a line from wherever the pen is to a spot.",
    tutorImage: 6,
  },
  {
    message:
      "Here is what happens if we do a second lineTo().  The second line starts from where the first ended.",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.lineTo(120, 150);\nc.stroke();\n",
    tutorImage: 3,
  },
  {
    message:
      "So, we're drawing a path, a trail of lines all connected together.  We start the path with beginPath() and draw everything with stroke().",
    tutorImage: 4,
  },
  {
    message:
      "If we put a moveTo() before the second lineTo(), we'll move the pen without drawing.  See?",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.moveTo(120, 60);\nc.lineTo(120, 150);\nc.stroke();\n",
    tutorImage: 6,
  },
  {
    message:
      "You try it!  Can you add another line?.  Put a second c.lineTo() after the first.  Make your second line go to (50, 115).",
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\n\nc.stroke();\n",
    tutorImage: 1,
  },
  {
    message: "Now can you make a triangle?",
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\n\nc.stroke();\n",
    tutorImage: 4,
  },
  {
    message: "Here is one way, a triangle!",
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n",
    tutorImage: 2,
  },
  {
    message:
      "Huh, an orange triangle.  I think I'd like blue better.  Can you make it blue?",
    code: 'c.beginPath();\nc.strokeStyle = "orange";\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n',
    tutorImage: 3,
  },
  {
    message:
      "Oh no, I was trying to make two triangles, but forgot a moveTo().  See what happened?",
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\n\nc.lineTo(250, 215);\nc.lineTo(150, 215);\nc.lineTo(200, 130);\nc.stroke();\n",
    tutorImage: 4,
  },
  {
    message:
      "That's not good.  Can you add <span class=tutor-code>c.moveTo(200, 130);</span> to make it two separate triangles?",
    tutorImage: 1,
  },
  {
    message:
      "I think I'm going to want a lot of triangles. This for loop draws two triangles.",
    code: "c.beginPath();\nfor (var i = 30; i <= 60; i = i + 30) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n",
    lessonSection: "Lines and Loops",
    tutorImage: 6,
  },
  {
    message:
      "This for loop starts at 30 and increases by 30 every time.  So, until it is told to stop, it counts 30, 60, 90, 120...  Right now, the for loop is told to stop at 60.",
  },
  {
    message: "So, can you make this for loop draw three triangles? Five?",
    tutorImage: 4,
  },
  {
    message:
      "Can you make more triangles by changing how the for loop goes up?  What if it counted by 10 each time, so it would count 30, 40, 50, 60... Can you do try that?",
    tutorImage: 1,
  },
  {
    message: "Look at this!  Forty green triangles!",
    code: 'c.strokeStyle = "green";\nc.beginPath();\nfor (var i = 10; i <= 210; i = i + 5) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n',
    tutorImage: 5,
  },
  {
    message:
      "Play with it more!  Can you change the color?  Can you make even more triangles?",
    tutorImage: 2,
  },

  // Draw a box using lines
  {
    message:
      "Let me show you something.  Here are two boxes, one using strokeRect(), the other using four lines.",
    code: "var size = 100;\n// First box\nc.strokeRect(30, 30, size, size);\n// Second box\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n",
    lessonSection: "Coding It Easy",
    tutorImage: 6,
  },
  {
    message:
      "It takes a lot more code to draw it with lines. Can you add a third box?",
    code: "var size = 100;\n// First box\nc.strokeRect(30, 30, size, size);\n// Second box\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n// Third box?\n",
    tutorImage: 3,
  },
  {
    message:
      "Functions that do a lot of work for you, like strokeRect(), make coding easier.  Here are three boxes with all of them using strokeRect(). Can you add a fourth?",
    code: "var size = 100;\n\nc.strokeRect(30, 30, size, size);\nc.strokeRect(80, 80, size, size);\nc.strokeRect(130, 130, size, size);\n",
    tutorImage: 1,
  },
  {
    message:
      "What if we want even more boxes?  I guess we'd have to keep adding lines with c.strokeRect()? Or is there an easier way?",
    lessonSection: "Avoid Repeating Code",
    tutorImage: 4,
  },
  {
    message: "I know!  Let's use a for loop!  Now can you make more boxes?",
    code: "var size = 100;\n\nfor (var x = 30; x <= 80; x = x + 50) {\n  c.strokeRect(x, x, size, size);\n}\n",
    tutorImage: 2,
  },
  {
    message:
      "Can you make more than ten boxes?  And still fit all of them on the screen?",
    tutorImage: 6,
  },
  {
    message: "Is it easier now to make more boxes? Why is that?",
    code: "var num = 3;\nvar size = 100;\nvar offset = 20;\n\nfor (var i = 1; i <= num; i = i + 1) {\n  c.strokeRect(i * offset, i * offset, size, size);\n}\n",
    lessonSection: "Variables Make It Easy Too",
    tutorImage: 4,
  },
  {
    message:
      "This works by having <span class=tutor-code>i</span> count up 1, 2, 3... then putting each box's (left, top) at <span class=tutor-code>i * offset</span>. Since offset is 20, the top left of the first box is (20, 20), the second is at (40, 40), then (60, 60) ...",
    tutorImage: 6,
  },
  {
    message:
      "Try changing <span class=tutor-code>num</span>, <span class=tutor-code>size</span>, and <span class=tutor-code>offset</span>.  See what happens?  Play with it!",
    tutorImage: 5,
  },
  {
    message:
      "It's often good to have variables that control things in your code (like <span class=tutor-code>num</span>, <span class=tutor-code>size</span>, and <span class=tutor-code>offset</span>) together so they are easy to change.",
    tutorImage: 1,
  },

  // Quiz
  {
    message:
      "Can you show me some of what you know? Draw a box. <br>Hint: Remember <span class=tutor-code>c.strokeRect(<i>left, top, width, height</i>);</span>",
    code: "",
    lessonSection: "Quiz: For Loops",
    tutorImage: 3,
  },
  {
    message:
      "Now can you draw four boxes? Hint: Making four boxes is easy using for. Remember, a for loop look like this: <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
    tutorImage: 1,
  },
  {
    message:
      "Can you make it so you can change the size of all your boxes all at once? Hint: To make a variable named size set to 50, you use <span class=tutor-code>var size = 50;</span>",
    tutorImage: 3,
  },
  {
    message:
      "Wow, you're learning to program!  Lots of ways you could do this, but did you get something like this? If not, try changing it, figure out how it works!",
    code: "var size = 50;\nvar num = 4;\n\nfor (var i = 0; i < num; i += 1) {\n  var x = 80 + 30 * i;\n  var y = 80 + 10 * i;\n  c.strokeRect(x, y, size, size);\n}\n",
    tutorImage: 5,
  },

  // Functions and squares
  {
    message:
      "Copied code that says the same thing as other code is hard to change.  You know how for loops avoid repeating the same code, right?  Functions also avoid repeating. Let me show you how to write your own functions.",
    code: "// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// All work and no play\n// makes Code Maven a dull girl\n// Let's play!\n",
    lessonSection: "Your Own Functions",
    tutorImage: 1,
  },
  {
    message:
      "I just made a new function, strokeSquare().  It is just like strokeRect(), but draws squares.",
    code: "function strokeSquare(left, top, size) {\n  c.strokeRect(left, top, size, size);\n}\n\nstrokeSquare(30, 100, 50);\nstrokeSquare(10, 10, 200);\nstrokeSquare(50, 50, 10);\n",
    tutorImage: 6,
  },
  {
    message:
      "strokeSquare() uses strokeRect() to draw a rectangle with the same width and height. See how it works? strokeSquare() only takes a size, not both a width and height, and then tells strokeRect() that both the width and height are size.",
    tutorImage: 1,
  },
  {
    message:
      "So, the first square starts at (30, 100) and then has a height and width of 50.",
  },
  {
    message:
      "Can you add a fourth square below the others using strokeSquare()?",
    tutorImage: 4,
  },
  {
    message:
      "Let's talk about how this works in a little more detail.  <span class=tutor-code>function strokeSquare</span> creates a new function called strokeSquare. <span class=tutor-code>(left, top, size)</span> are the <i>parameters</i> to the function and act like variables inside the function.  The code inside the brackets (the <span class=tutor-code>{</span> and <span class=tutor-code>}</span>) is the <i>function body</i> contains all the code that is run every time you call the function.",
    tutorImage: 6,
  },
  {
    message:
      "<span class=tutor-code>strokeSquare(30, 100, 50);</span> calls the code in the function body of strokeSquare, with <span class=tutor-code>left</span> set equal to 30, <span class=tutor-code>top</span> to 100, and <span class=tutor-code>size</span> to 50.  That code uses c.strokeRect() to draw us a square.  See how that works?",
    code: "function strokeSquare(left, top, size) {\n  c.strokeRect(left, top, size, size);\n}\n\nstrokeSquare(30, 100, 50);\n",
  },
  {
    message:
      "Making your own functions is really useful.  It makes it easier to program.",
  },

  // Draw a star
  {
    message:
      "Now for something completely different.  A star! I like that! Do you like stars too? If you want, you can change some of the numbers and mess it up! Try it!",
    code: "c.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n",
    lessonSection: "More Lines",
    tutorImage: 1,
  },
  {
    message: "Wait, stars aren't green.  Can you make it yellow or gold?",
    code: 'c.strokeStyle = "green";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n',
    tutorImage: 4,
  },
  {
    message:
      "A solid gold star! Did you know you can do that? What's different?  How did I make the star solid?",
    code: 'c.fillStyle = "gold";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.fill();\n',
    tutorImage: 5,
  },
  {
    message:
      "Just like <span class=tutor-code>c.stroke()</span> draws lines in whatever color <span class=tutor-code>c.strokeStyle</span> is set to, <span class=tutor-code>c.fill()</span> fills a shape with whatever color <span class=tutor-code>c.fillStyle</span> is. It's that fun?",
    tutorImage: 2,
  },
  {
    message:
      "Variables make it easy to change and add more stars. Try changing <span class=tutor-code>x</span>, <span class=tutor-code>y</span>, and <span class=tutor-code>size</span> (or anything else)!",
    code: 'c.fillStyle = "gold";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n',
    tutorImage: 1,
  },
  {
    message:
      "Here are two stars, but look at all that code!  Most of it is the same too, just copied, repeating over and over. That doesn't seem like the best way to do two stars. What can we do?",
    code: 'c.fillStyle = "gold";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\nx += 100;\ny += 50;\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n',
    tutorImage: 4,
  },
  {
    message: "Functions! It's fillStar()! Can you add a third star?",
    code: 'c.fillStyle = "gold";\nvar size = 100;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfillStar(50, 100, size);\nfillStar(150, 150, size);',
    lessonSection: "More Functions",
    tutorImage: 5,
  },
  {
    message:
      "Wow, four stars in a row using functions and for loops!  See how this works?  Can you make it eight stars?",
    code: 'c.fillStyle = "gold";\nvar size = 40;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfor (var i = 0; i < 4; i = i + 1) {\n  fillStar(i * size, 50, size);\n}\n',
  },
  {
    message:
      "Two loops to make rows of stars!  Try changing <span class=tutor-code>size</span> to make them bigger!",
    code: 'c.fillStyle = "gold";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n',
    lessonSection: "Nested Loops",
    tutorImage: 6,
  },
  {
    message:
      "Did you know you could do two loops like that, one inside the other?",
    tutorImage: 4,
  },
  { message: "Do you know how it works?" },
  {
    message:
      "Look at the inner loop.  <span class=tutor-code>j</span> will count 0, 1, 2.  The first time <span class=tutor-code>j</span> counts 0, 1, 2, <span class=tutor-code>i</span> will be 0.  The next time j counts 0, 1, 2, i will be 1.",
    code: 'c.fillStyle = "gold";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n',
    tutorImage: 1,
  },
  {
    message:
      "So, for the first star, i = 0 and j = 0.  On the second star, i = 0 and j = 1.  Third, i = 0 and j = 2. Then, i = 1 and j = 0, i = 1 and j = 1, i = 1 and j = 2, and so on.",
  },
  {
    message:
      "Can you figure out what order it draws the stars?  Which star is drawn first?  Which star is the second star drawn?",
    tutorImage: 4,
  },
  {
    message:
      "The first star will be the one at the top left.  The second drawn is the one below it.  Do you see why?",
    tutorImage: 6,
  },
  {
    message: "Wow!  Full of stars! Try changing size!",
    code: 'c.fillStyle = "gold";\nvar size = 40;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar maxI = Math.floor(w / size);\nvar maxJ = Math.floor(h / size);\n\nfor (var i = 0; i < maxI; i = i + 1) {\n  for (var j = 0; j < maxJ; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n',
    lessonSection: "Fun with Stars",
    tutorImage: 5,
  },
  {
    message:
      "How does this program fill the drawing area with stars?  How does it know how many stars will fit?",
    tutorImage: 4,
  },
  {
    message:
      "<span class=tutor-code>c.canvas.width</span> is a way of getting the width of the drawing area.  <span class=tutor-code>size</span> is a width of a star.  So, <span class=tutor-code>c.canvas.width / size</span> is how many stars will fit across.",
    tutorImage: 1,
  },
  {
    message:
      "The code does something similar with the height to figure out how many stars fit up-and-down.  The Math.floor() is just a way of rounding, it drops fractions off (so, for example. <span class=tutor-code>Math.floor(7.8)</span> is 7). Now do you see how it works?",
  },
  {
    message:
      "Wow!  Five stars, randomly placed, changing every time. Can you have it draw fifty stars? A hundred?  How about bigger stars or smaller stars?",
    code: 'c.fillStyle = "gold";\nvar n = 5;\nvar size = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < n; i = i + 1) {\n  var x = (w - size) * Math.random();\n  var y = (h - size) * Math.random();\n  fillStar(x, y, size);\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n',
    tutorImage: 2,
  },
  {
    message:
      "So, how does this work?  <span class=tutor-code>n</span> is the number of stars.  <span class=tutor-code>size</span> is the size of the stars. <span class=tutor-code>c.fillStyle</span> is the color of the stars.  But how does it place them randomly?",
    tutorImage: 4,
  },
  {
    message:
      "<span class=tutor-code>Math.random()</span> gives us a random number between 0.0 and 1.0, a different one each time we use it.",
    tutorImage: 1,
  },
  {
    message:
      "See the line <span class=tutor-code>var x = (w - size) * Math.random()</span>?  That figures out how far across to put the star.  Can you figure out what exactly it is doing?",
  },
  {
    message:
      "It takes the width of the drawing area (which is <span class=tutor-code>c.canvas.width</span> and stored in the variable called <span class=tutor-code>w</span>), subtracts off the <span class=tutor-code>size</span> (so the star will fit), and then multiplies by a random number between 0.0 and 1.0.  So, if the random number is 0.5, the star will appear about halfway across.",
    tutorImage: 3,
  },
  {
    message:
      "The code does something similar with <span class=tutor-code>c.canvas.height</span> to determine where to put the star vertically.  Does it make more sense now?",
  },

  // Draw many lines to point
  {
    message:
      "I'm tired of seeing stars.  Let's go back to lines.  Here are two separate lines. But see how much code is repeated? You know that isn't good. What can we do?",
    code: "// First line\nc.beginPath();\nc.moveTo(20, 20);\nc.lineTo(200, 20);\nc.stroke();\n// Second line\nc.beginPath();\nc.moveTo(20, 50);\nc.lineTo(200, 50);\nc.stroke();\n",
    lessonSection: "Even More Functions",
    tutorImage: 1,
  },
  {
    message:
      "Functions!  We need a drawLine() function so we can draw lines more easily.  Let me write that for you. Ta dah! Can you use this new function to draw one line from (20, 20) to (200, 20) and another from (20, 50) to (200, 50)?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\n",
    tutorImage: 6,
  },
  {
    message:
      "Did you get it? Here is one version.  Can you add a third line below the other two?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\ndrawLine(20, 20, 200, 20);\ndrawLine(20, 50, 200, 50);\n",
    tutorImage: 3,
  },
  {
    message: "Three vertical lines using for loop.  Can you make it ten lines?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = 20 + i * 30;\n  drawLine(x, 20, x, 200);\n}\n",
    lessonSection: "Fun with Lines",
    tutorImage: 1,
  },
  {
    message:
      "Ten lines coming to a point.  That's kind of cool, isn't it? Try moving the point!",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n}\n",
    tutorImage: 2,
  },
  {
    message:
      "Ready for something harder?  Now the lines fan to the right.  Can you also add in the ones we saw last, going to the left?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(400, y, px, py);\n}\n",
    tutorImage: 3,
  },
  {
    message:
      "Did you get it?  There should be a second drawLine() and starting from the left means x1 in drawLine() should be 0.",
    tutorImage: 1,
  },
  {
    message:
      "This is one way to do it.  Try moving the point now!  Fun, isn't it?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n  drawLine(400, y, px, py);\n}\n",
    tutorImage: 2,
  },
  {
    message:
      "Hey, look at this!  Isn't that cool?  It uses the drawing area width and height now to fit in as many lines as it can!  Try changing num, px, or py!",
    code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 5,
  },
  {
    message:
      "See how it works?  The first drawLine() draws lines from (w, y) to (px, py). <span class=tutor-code>w</span> is always the same and is the width of the drawing area.  <span class=tutor-code>y</span> starts at 0 and increases until it is the height of the drawing area. So, it draws all those lines that go to the right side.",
    tutorImage: 1,
  },
  {
    message:
      "The second drawLine() does something similar for all the lines going to the bottom, drawing from (x, h) to (px, py).",
  },
  {
    message:
      "Can you make lines from all sides?  You will need four drawLine() and your two new ones will use 0 instead of w and h.  Can you do it?",
    code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 4,
  },
  {
    message: "I like mine blue.  Play with it!",
    code: 'var num = 10;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = "blue";\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(0, y, px, py);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 0, px, py);\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
    tutorImage: 2,
  },

  // Fan curves
  {
    message:
      "Sometimes, when I get bored in class, I draw these.  Do you like them too?  Can you make it so it is drawn with even more lines?",
    code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    lessonSection: "More Fun with Lines",
    tutorImage: 7,
  },
  {
    message:
      "Can you add another curve at top right? You will need another drawLine() but use x, 0, w, y.",
    code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 1,
  },
  {
    message: "Pretty!  Try other colors and changing the number of lines!",
    code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = "gold";\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
    tutorImage: 5,
  },
  {
    message: "Can you make it so the two curves are two different colors?",
    tutorImage: 1,
  },
  {
    message: "Here is one version.  Try changing the colors!",
    code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = "gold";\n  drawLine(0, y, x, h);\n  c.strokeStyle = "red";\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
    tutorImage: 2,
  },
  {
    message:
      "Here is a crazy fun random colors changing version.  It's complicated, but take a look.  Can you guess how it works?",
    code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = randomRGBA();\n  drawLine(0, y, x, h);\n  c.strokeStyle = randomRGBA();\n  drawLine(x, 0, w, y);\n}\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(",");\n  return "rgba(" + rgba + ")";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
    tutorImage: 5,
  },
  {
    message:
      "Wow, it's great with thicker lines!  Play with it some more!  Try changing it so it draws the curves using more lines!",
    code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.lineWidth = 5;\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = randomRGBA();\n  drawLine(0, y, x, h);\n  c.strokeStyle = randomRGBA();\n  drawLine(x, 0, w, y);\n}\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(",");\n  return "rgba(" + rgba + ")";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
  },

  // Quiz
  {
    message:
      "You know programming?  Show me!  Can make a function called fillSquare() and then use that to draw a second bigger square? Hint: You'll need something like <span class=tutor-code>function fillSquare(left, top, size) {</span>",
    code: "c.fillRect(20, 30, 100, 100);\n",
    lessonSection: "Quiz: Functions",
    tutorImage: 3,
  },
  {
    message:
      "Did you get it?  Something like this? Now can you make the first square also use fillSquare() instead of calling fillRect()?",
    code: "c.fillRect(20, 30, 100, 100);\n\nfillSquare(200, 70, 150);\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, s, s);\n}\n",
  },
  {
    message:
      "I drew one line, but just one line is boring. Don't you want more? It would be easier to add more lines if we had that drawLine() function again.  Can you write that and then make this line use it? Hint: Remember a function is declared like this, <span class=tutor-code>function doStuff(a, b, c, d) {</span>",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(200, 50);\nc.stroke();\n",
    tutorImage: 1,
  },
  {
    message:
      "Ahh, isn't that better?  Now, can you add another line below this one?",
    code: "drawLine(30, 20, 200, 50);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
  },
  {
    message:
      "Isn't it easier to add more lines after you created that function?",
    tutorImage: 3,
  },
  {
    message:
      "It's so easy to add more lines, I think we should add lots more!  Give me ten lines total, one on top of the other, separated by 10! Hint: This is easier with a for loop. For loops look like <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
    tutorImage: 2,
  },
  {
    message:
      "Did you get something like this?  You're getting good!  Try playing with the numbers! I like n of 40 and dy of 5!",
    code: "var n = 10;\nvar dy = 10;\nfor (var i = 0; i < n; i = i + 1) {\n  var y = 20 + i * dy;\n  drawLine(30, y, 200, y + 30);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 3,
  },

  // Two boxes and a white box
  {
    message:
      "Feels like forever since we saw a box, I'm starting to miss them.  Hey, look, boxes can erase!  Try moving the white box from (50, 50) to (20, 20)!",
    code: 'function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = "blue";\nfillSquare(10, 10, 100);\nfillSquare(100, 100, 100);\nc.fillStyle = "white";\nfillSquare(50, 50, 100);\n',
    lessonSection: "Erasing",
    tutorImage: 1,
  },
  {
    message:
      "Order matters.  Last one to draw gets to stay!  Try moving the white box now!",
    code: 'function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = "blue";\nfillSquare(10, 10, 100);\nc.fillStyle = "white";\nfillSquare(50, 50, 100);\nc.fillStyle = "blue";\nfillSquare(100, 100, 100);\n',
    tutorImage: 6,
  },

  // Make a little face using a box and clearRect()
  {
    message:
      "Another way to erase is with clearRect().  Can you make a little blue smiley face using these?  It is almost done.  You just need to move them.",
    code: 'c.fillStyle = "blue";\nc.fillRect(50, 20, 200, 200);\n// Eyes\nc.clearRect(80, 150, 20, 20);\nc.clearRect(120, 150, 20, 20);\n// Mouth\nc.clearRect(70, 50, 100, 10);\n',
    tutorImage: 1,
  },
  {
    message: "That's pretty funny, isn't it?  It's cute!",
    code: 'c.fillStyle = "blue";\nc.fillRect(50, 20, 200, 200);\n// Eyes\nc.clearRect(80, 50, 20, 20);\nc.clearRect(150, 50, 20, 20);\n// Mouth\nc.clearRect(70, 150, 100, 10);\n',
    tutorImage: 5,
  },

  // Clearing the screen
  {
    message:
      "A big clearRect() erases everything.  Uncomment the big clearRect() (remove the <span class=tutor-code>//</span>) and see what happens.",
    code: 'var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 255, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 1,
  },

  // Comments
  {
    message:
      "<span class=tutor-code>//</span> at the beginning of a line makes the line get ignored.  That's called commenting out.  Try adding <span class=tutor-code>//</span> before some of the other lines and see what happens!",
    code: 'var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 255, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n',
    lessonSection: "Comments",
    tutorImage: 7,
  },

  // Rotation and translation
  {
    message:
      "A purple box.  But, wait, how did it get that far away from the edge?  Try changing x and y.",
    code: 'var x = 50;\nvar y = 50;\n\nc.fillStyle = "purple";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n',
    lessonSection: "Rotation and Translation",
    tutorImage: 1,
  },
  {
    message:
      "The fillRect() says to make the (left, top) at (0, 0), so wouldn't you think the box would be at the upper left corner? But what is translate()?",
  },
  {
    message:
      "translate() changes where (0, 0) is. After translate(50, 50), for example, anything that tries to draw at (0, 0) will draw at (50, 50).  Drawing at (20, 20) would draw at (70, 70), since 50 + 20 = 70.  See?",
    tutorImage: 3,
  },
  {
    message:
      "Why does this do what it does?  It looks like it uses translate() twice.  They seem to add to each other, right?",
    code: 'var x = 50;\nvar y = 50;\n\nc.fillStyle = "purple";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n',
    tutorImage: 1,
  },
  {
    message:
      "What will happen if you uncomment save() and restore()? Try it. Was it what you expected?",
    code: 'var x = 50;\nvar y = 50;\n\n// c.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n',
  },
  {
    message:
      "The second box becomes black and gets drawn right on top of the first box!  Why?",
    code: 'var x = 50;\nvar y = 50;\n\nc.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\nc.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n',
    tutorImage: 4,
  },
  {
    message:
      "restore() eliminates all the changes since the last save().  So, if you save, then change the fillStyle color or do translate(), then restore, everything goes back to what it was right before the save.",
    tutorImage: 6,
  },
  {
    message: "We can rotate stuff too.  Try changing angle!",
    code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n",
    tutorImage: 3,
  },
  {
    message:
      "You might be used to degrees?  Angles in Javascript are in radians.  45 degrees is about 0.8 in radians.  Try changing angle from 0.1 to 0.8!",
    code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n",
    tutorImage: 1,
  },
  {
    message:
      "Spinning all the way around is 360 degrees, right?  In radians, it is about 6.28.",
  },
  {
    message:
      "Did you notice that this box is pivoting through its top left corner when you rotate it?  That's the same spot we said to go with translate().",
  },
  {
    message: "Try changing angle now.  How is this different?",
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(-50, -50, 100, 100);\n",
    tutorImage: 4,
  },
  {
    message:
      "Kind of weird that the strokeRect() uses -50 for the left and top, isn't it?  But the top left of the box is still at (50, 50), because we translated to (100, 100), and 100 - 50 = 50.",
    tutorImage: 6,
  },
  {
    message:
      "When we rotate, we rotate around (100, 100) because of the translate().  Oh, and (100, 100) is the center of the box!  So, this box is rotating around its center!",
  },
  {
    message:
      "translate() and rotate() add to any earlier translate() and rotate(), unless you restore() the old state.  Try changing angle or uncommenting save() and restore()!",
    code: 'var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\n// c.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n',
    tutorImage: 1,
  },
  {
    message:
      "Did that do what you expected?  You see why it did what it did?  With the save() and restore(), the second box is black and gets drawn right on top of the first purple box.",
  },
  {
    message:
      "Can you move the black box off the purple box?  So you can see both?",
    code: 'var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n',
    tutorImage: 4,
  },
  {
    message: "Here's one way. See how the translate() is to a different spot?",
    code: 'var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x * 2, y * 2);\nc.rotate(angle*2);\nc.fillRect(-50, -50, 100, 100);\n',
    tutorImage: 3,
  },
  {
    message:
      "Try changing angle now!  Did you try a negative number of angle like -0.2?",
    tutorImage: 1,
  },
  {
    message:
      "Boxes rotated relative to their center are usually what you want.  Look, I made you a function that makes boxes rotated to different angles!  Can you use this new strokeSquare() function to add a few more boxes? Rotate your new boxes at any angle you want!",
    code: "function strokeSquare(x, y, size, angle) {\n  c.save();\n  c.translate(x + size / 2, y + size / 2);\n  c.rotate(angle);\n  c.strokeRect(-size / 2, -size / 2,\n                size, size);\n  c.restore();\n}\n\nstrokeSquare(50, 50, 100, 0.2);\nstrokeSquare(180, 100, 50, -0.1);\n",
    tutorImage: 5,
  },

  // Quiz
  {
    message:
      "Are you a coder now? Show me! Draw a box rotated by -0.5.  Hint: Use c.rotate(); and c.strokeRect();",
    code: "",
    lessonSection: "Quiz: Rotation and Translation",
    tutorImage: 2,
  },
  {
    message:
      "Oh, is that too easy? You want harder problems? Draw five boxes on top of each other, each rotated by 0.3 more than the last!<br>Hint: c.translate() might be useful<br>Hint: For loops look like <span class=tutor-code>for (var i = 0; i < 5; i += 1) {</span>",
    tutorImage: 6,
  },
  {
    message:
      "Did you get something like this? See how this works?  It first moves a spot with translate(), then repeatedly draws squares around that spot and rotates around that spot.",
    code: "var angle = 0.2;\nvar num = 5;\nc.translate(150, 150);\nfor (var i = 0; i < num; i = i + 1) {\n  c.strokeRect(-75, -75, 150, 150);\n  c.rotate(angle);\n}\n",
    tutorImage: 1,
  },
  {
    message: "Play with it a bit!  Try changing num and angle!",
    tutorImage: 3,
  },

  // Draw a branching structure
  {
    message:
      "Wow, look at how much you've done! You're ready for a big fun challenge!",
    code: "",
    lessonSection: "A Hard Problem",
    tutorImage: 1,
  },
  {
    message: "Let's say we want to try to draw a tree.  How might we do that?",
  },
  {
    message:
      "Trees have branches.  Here is a start. Can you add more branches?",
    code: "drawLine(200, 300, 200, 200);\ndrawLine(200, 200, 160, 130);\ndrawLine(200, 200, 240, 130);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
  },
  {
    message:
      "That's a lot of work.  That's not fun.  There's got to be an easier way.",
    tutorImage: 4,
  },
  {
    message:
      "I'll try using variables.  Does that make it easier?  I'm not sure it does. What do you think?",
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawLine(w * 0.5, h, w * 0.5, h * 0.7);\ndrawLine(w * 0.5, h * 0.7, w * 0.4, h * 0.5);\ndrawLine(w * 0.5, h * 0.7, w * 0.6, h * 0.5);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 6,
  },
  {
    message:
      "That's still too much work. A for loop maybe?  How might that work? I don't know.  How would we draw two branches from every branch? I'm not sure.  What do you think?",
  },
  {
    message:
      "No, I can't see a way to draw trees easily using a for loop.  What else do we have?  Can we use functions?",
    tutorImage: 1,
  },
  {
    message:
      "Maybe a function could draw a branch.  But how could every branch draw two more branches?",
  },
  {
    message:
      "Let's start with a function that draws a branch.  Here's one.  It takes four numbers, <span class=tutor-code>x</span> and <span class=tutor-code>y</span> which say where to start, the length <span class=tutor-code>l</span>, and the <span class=tutor-code>direction</span> which says whether to draw left, right, or straight.",
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 4,
  },
  {
    message:
      "<span class=tutor-code>direction</span> works by slanting the branch left (for negative numbers) or right (for positive).  See?  Try changing it!",
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, -0.1);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
  },
  {
    message: "How can we make this draw two more branches now?",
    tutorImage: 1,
  },
  {
    message:
      "Ah, I know, make the function use itself! Can you see what this is doing?",
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > 20) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l / 2, -0.8);\n    drawBranch(x2, y2, l / 2, 0.8);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    lessonSection: "Recursion",
    tutorImage: 5,
  },
  {
    message:
      "Functions that call themselves, that's crazy! Here's a version with some more variables to control it.  That makes it easier to twiddle.  Try playing with it!  Change <span class=tutor-code>xScale</span>, <span class=tutor-code>yScale</span>, or <span class=tutor-code>minLength</span>!  Cool, huh?",
    code: "var minLength = 20;\nvar yScale = 0.5;\nvar xScale = 0.8;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > minLength) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l * yScale, -xScale);\n    drawBranch(x2, y2, l * yScale, xScale);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 3,
  },
  {
    message: "There are a couple new things here.  I'll stop to explain.",
    tutorImage: 4,
  },
  {
    message:
      "drawBranch() is a <i>recursive</i> function.  That means it calls itself.",
  },
  {
    message:
      "drawBranch() only calls itself if <span class=tutor-code>l > minLength</span>.  <span class=tutor-code>l</span> gets smaller and smaller every time drawBranch() calls itself, so drawBranch() stops calling itself eventually when the length of a branch gets small enough.",
    tutorImage: 1,
  },

  // Recursion
  {
    message:
      "Recursive functions are neat, but tricky! Let's do a bit more. Change this to call <span class=tutor-code>nSquareRecursive(4);</span> instead of <span class=tutor-code>nSquare(4);</span>",
    code: 'nSquare(4);\n\nfunction nSquare(n) {\n  c.strokeStyle = "blue";\n  for (var i = n; i > 0; i = i - 1) {\n    c.strokeRect(i * 30, i * 30, 100, 100);\n  }\n}\nfunction nSquareRecursive(n) {\n  if (n > 1) {\n    nSquareRecursive(n - 1);\n  }\n  c.strokeRect(n * 30, n * 30, 100, 100);\n}\n',
    tutorImage: 6,
  },
  {
    message:
      "Other than not being blue, it's the same, right?  Do you see how they both work?",
  },
  {
    message:
      "nSquare() uses a for loop, starts at 4, and counts down: 4, 3, 2, 1.",
    tutorImage: 1,
  },
  {
    message:
      "nSquareRecursive() calls itself with one less each time.  So, when called with 4, it calls itself with 3, and that call calls itself with 2, and that call calls itself with 1.  At one, it says, stop calling yourself, so it stops.  And, on each call, it draws a box located at (n * 30, n * 30).  See?",
  },
  {
    message:
      "This little piece of code draws a shrinking pile of boxes. See how it works?",
    code: "branchBox(100);\n\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n",
    tutorImage: 4,
  },
  {
    message:
      "It does a translate() to the bottom right corner of the box, then draws the box back up behind it, so a box size big starting at (-size, -size).  Then, as long as the boxes haven't gotten too small, it does that again by calling itself, but shrinking the size of the box the next time.",
    tutorImage: 1,
  },
  {
    message:
      "Here is the same thing using a for loop instead. Compare the two. See how they both work?",
    code: 'branchBoxForLoop(100);\n\nfunction branchBoxForLoop(size) {\n  c.strokeStyle = "blue";\n  for (var i = size; i > 4; i = i * 0.65) {\n    c.translate(i, i);\n    c.strokeRect(-i, -i, i, i);\n  }\n}\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n',
    tutorImage: 4,
  },
  {
    message:
      "The for loop starts by drawing a box of size 100, then one of 65, and so on.  So does the recursive version, but the recursive version does it by calling itself.",
    tutorImage: 1,
  },
  { message: "You can change them if you want!  Experiment!", tutorImage: 5 },

  // Rotation and branching
  {
    message: "Back to trees.  Wow, look!  An even better tree!",
    code: "var angle = 0.35;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  c.rotate(angle * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n",
    lessonSection: "Rotation, Translation, and Recursion",
    tutorImage: 2,
  },
  {
    message:
      "See how this works? It starts by rotating in the direction it is supposed to (<span class=tutor-code>direction</span> is -1 for left, 1 for right).  If the branches are not too short yet, it translates to the end of a branch, then draws two more shorter branches, one to the left, one to the right.",
    tutorImage: 6,
  },
  {
    message:
      "The save() and restore() make it so that, when the program finishes drawing a left branch, the restore() removes the rotate and translate, getting us back to the right spot to do a right branch.",
    tutorImage: 1,
  },
  {
    message:
      "Try changing <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, and <span class=tutor-code>minL</span>!  If you experiment a bit, you can get some really cool drawings.  Play with it!",
    tutorImage: 5,
  },
  {
    message:
      "I think it would look even more like a tree if <span class=tutor-code>angle</span> was a little more random.  Can you make angle bigger and then make rotate() use a number between 0 and angle? (Hint: <span class=tutor-code>Math.random()</span> makes a number from 0.0 to 1.0)",
    tutorImage: 1,
  },
  {
    message:
      "Here is one version.  That's not too bad.  You know what might make it even better? Can you make the <span class=tutor-code>branchScale</span> more random too?",
    code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  // Make a number between 0 and angle\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n",
    tutorImage: 3,
  },
  {
    message: "Oh wow!  Some of these look a lot like trees, don't they?",
    code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 60;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    // Make a number between -0.1 and 0.1\n    var b = 0.2 * (Math.random() - 0.5);\n    // Now make it between 0.9 and 1.1\n    b = b + 1;\n    // And use it to change branchScale\n    drawBranch(l * b * branchScale, -1);\n    b = 1 + 0.2 * (Math.random() - 0.5);\n    drawBranch(l * b * branchScale, 1);\n  }\n  c.restore();\n}\n",
    tutorImage: 5,
  },
  {
    message:
      "Try changing <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, and <span class=tutor-code>minL</span>!  If you experiment a bit, you can get some pretty wild stuff!",
    tutorImage: 2,
  },

  // Quiz on recursion, draw your own trees
  {
    message:
      "I bet you can draw your own trees now!  Want to try?  I'll help you!",
    code: "",
    lessonSection: "Drawing Your Own Tree",
    tutorImage: 4,
  },
  {
    message:
      "Let's draw different trees than we did before.  Let's make this plant alternate between splitting off branches right and left.  Some plants do that.  Ready to start?  I'll guide you through it!",
    tutorImage: 1,
  },
  {
    message:
      "So, first we need a branch.  Let's make a function drawBranch() that takes two values, a length called <span class=tutor-code>l</span> and a <span class=tutor-code>direction</span>.",
    code: "",
  },
  {
    message:
      "Do you remember how to write a function like that?  You don't need to make it do anything yet, just declare a function called drawBranch().",
    tutorImage: 4,
  },
  {
    message: "Were you thinking something like this?",
    code: "function drawBranch(l, direction) {\n  \n}\n",
    tutorImage: 3,
  },
  {
    message:
      "I've added some comments about what to do next.  We need to start drawing our tree.  Can you write the code beneath each of the comments?",
    code: "function drawBranch(l, direction) {\n  \n}\n\n// Use c.translate() to move to (200, 250).\n\n// Call drawBranch() with 50 as the length\n// and 1 as the direction\n",
    tutorImage: 1,
  },
  {
    message:
      "Okay, so you translate() so you start at the right spot and then you try to draw a branch.  Now we need to make drawBranch() do something!  Can you do what the comments say to do?  You should get a single branch (which will look like the trunk of the tree) when you are done.",
    code: "function drawBranch(l, direction) {\n  // c.fillRect(left, top, width, height);\n  // will draw a rectangle.\n  // Use it do draw a rectangle that\n  // starts at (-1, 0) and is 2 wide\n  // and -l (that's l as in length) tall.\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
  },
  {
    message:
      "You should have something like this now.  Let's keep going!  Look for the comments to tell you what to do next!",
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  // Use c.translate() to move to the end\n  // of the branch.\n  // Hint: The end is at (0, -l), that's l\n  // as in length.\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    tutorImage: 3,
  },
  {
    message:
      "Great!  Now you have drawn your first branch, moved to the end of that branch, and you're ready to draw more branches!",
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
  },
  {
    message:
      "Let's stop for a second and think about what we're going to want to do next.",
    tutorImage: 4,
  },
  {
    message:
      "This plant is going to split off two branches, one going up, one going off to the side.  We want the ones going off to the side to alternative, first right, then left, then right, then left.",
    tutorImage: 1,
  },
  {
    message:
      "We'll keep splitting and drawing and splitting and drawing until the branches get very short.",
  },
  {
    message:
      "Let's add that next.  We should only draw more branches if the length <span class=tutor-code>l</span> is more than 5.  Can you add that?",
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  // Replace true below with something that\n  // checks if l is big enough\n  if ( true ) {\n    // Don't do anything here yet.\n    // We'll add more branches later.\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    tutorImage: 3,
  },
  {
    message: "You should have this now.",
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Don't do anything here yet.\n    // We'll add more branches later.\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    tutorImage: 1,
  },
  {
    message:
      "Let's add just the branch going straight up.  Let's make it a little shorter that the last branch we drew.  Follow the instructions in the comments.",
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Call drawBranch() with l * 0.8 and direction\n    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
  },
  {
    message:
      "Do you have this now?  See what it does?  It repeatedly draws a branch straight up, making the branch a little shorter each time.  It looks like a line, but it's really a bunch of branches piled on top of each other.",
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    tutorImage: 3,
  },
  { message: "Pretty boring so far?", tutorImage: 6 },
  { message: "It's about to get a lot more exciting!", tutorImage: 5 },
  {
    message:
      "Let's add the second branch!  For that branch, we are going to rotate to the side indicated by direction, then draw a shorter branch.  Follow the instructions in the comments.",
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    // Use c.rotate() with an angle of\n    // 0.5 * direction\n    \n    \n    // Call drawBranch with l * 0.7 and direction\n    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    tutorImage: 1,
  },
  { message: "Oh no!  What did you do?", tutorImage: 7 },
  { message: "Just kidding!  It's all fine!", tutorImage: 2 },
  {
    message:
      "This is just part of what is called debugging, getting the bugs (the problems) out.",
    tutorImage: 4,
  },
  { message: "So, that didn't do what you expected, did it?" },
  { message: "Any idea what's wrong?", tutorImage: 1 },
  {
    message:
      "What's happening is that all those translate() and rotate() calls are piled on top of each other.  We didn't really want that.  When it's time to draw the second branch, we really want everything to be the way it was when we did the first branch, but it's not, we've translated and rotated all over the place.",
    tutorImage: 4,
  },
  {
    message:
      "Save and restore to the rescue!  Can you add <span class=tutor-code>c.save();</span> and <span class=tutor-code>c.restore();</span> where the comments say to add them?",
    code: "function drawBranch(l, direction) {\n  // Save here!\n  \n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  // Restore here!\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    tutorImage: 1,
  },
  {
    message:
      "That's mostly better.  But it's only drawing one side of the tree!  Why is that?",
    code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    tutorImage: 4,
  },
  { message: "Figure it out?" },
  {
    message:
      "It's because we didn't switch direction.  Direction is always the same as what it was at the start, it is always 1.  It should alternate, 1, -1, 1, -1 ...",
    tutorImage: 6,
  },
  {
    message:
      "Can you make it so both of the drawBranch() calls inside of drawBranch() use -direction instead of direction?",
    tutorImage: 1,
  },
  {
    message: "Do you know have this?  Wow, nice work!",
    code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, -direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    tutorImage: 5,
  },
  {
    message:
      "Try playing with it more! Try changing the 0.8, 0.7, and 0.5 to see what happens!",
    lessonSection: "Play with Your Tree",
    tutorImage: 2,
  },
  {
    message: "Look! Green leaves on the ends of the branches!",
    code: 'function drawBranch(l, direction) {\n  c.save();\n  c.fillRect(-1, 0, 2, -l);\n  c.translate(0, -l);\n  if (l > 5) {\n    drawBranch(l * 0.8, -direction);\n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  } else {\n    c.fillStyle = "green";\n    c.fillRect(-2, -2, 4, 4);\n  }\n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n',
    tutorImage: 5,
  },
  {
    message:
      "See how that works? The little size 4 green squares are the leaves! They are only added when we get to the end of the branch.",
    tutorImage: 3,
  },
  { message: "Can you make the branches brown?", tutorImage: 4 },
  {
    message:
      "Let me show you something really cool that is only a minor change from what you just did!",
    code: 'function drawBranch(l) {\n  // Make longer branches wider\n  var w = 0.5 + l / 30;\n  c.fillRect(w / 2, 0, w, -l);\n  c.save();\n  c.translate(0, -l);\n  if (l > 1) {\n    // Start at -80 degrees\n    var a = -Math.PI * 4 / 9;\n    // Draw three branches\n    for (var i = 0; i < 3; i = i + 1) {\n      // The length of our new branches\n      var l2 = l * 0.49;\n      // Make the middle branch bigger\n      if (i == 1) { l2 = l2 + 0.3 * l; }\n      \n      c.save();\n      c.rotate(a);\n      drawBranch(l2);\n      c.restore();\n      \n      // Add 90 degrees for the next branch\n      a = a + Math.PI / 2;\n    }\n  }\n  c.restore();\n}\n\nc.fillStyle = "green";\nc.translate(170, 270);\ndrawBranch(60);\n',
    lessonSection: "Fun with Ferns",
    tutorImage: 5,
  },
  {
    message:
      "This fern is drawn just by doing three branches from each branch, each rotated at -80, 10, and 100 degrees.  See how it works?",
    tutorImage: 1,
  },
  {
    message:
      "Every time it draws a branch, it draws three more branches from the end of that branch.  It keeps doing that and doing that, smaller and smaller, and you get what looks like a fern!",
  },

  // Fractals
  {
    message:
      "All this stuff with trees and ferns are a type of pattern called a <i>fractal</i>. Fractals are crazy cool fun with math.",
    lessonSection: "Fractals",
    tutorImage: 3,
  },
  {
    message: "This fractal is called the Terdragon.",
    code: "var n = 8;\nvar l = 5;\nvar angle = 120 * Math.PI / 180;\n\nc.translate(300, 200);\nterdragon(n);\nfunction terdragon(n) {\n  if (n <= 1) {\n    drawLine(l);\n  } else {\n    terdragon(n-1);\n    c.rotate(angle);\n    terdragon(n-1);\n    c.rotate(-angle);\n    terdragon(n-1);\n  }\n}\nfunction drawLine(l) {\n  c.beginPath();\n  c.moveTo(0, 0);\n  c.lineTo(l, 0);\n  c.stroke();\n  // Finish at the end of the line we drew\n  c.translate(l, 0);\n}\n",
    tutorImage: 5,
  },
  {
    message:
      "If you make l bigger, you can zoom in and see it's made of little triangles!",
    tutorImage: 1,
  },
  {
    message: "Can you figure out how it works? Take a look at the code.",
    tutorImage: 4,
  },
  {
    message:
      "Try making <span class=tutor-code>l=10</span> and then <span class=tutor-code>n=1</span> and then <span class=tutor-code>n=2</span> then <span class=tutor-code>n=3</span>, and you'll see how it grows.",
    tutorImage: 1,
  },

  // Quiz
  {
    message:
      "Okay, it's time for the last quiz.  This one is hard, so don't worry if you can't finish it.  There is a lot of good stuff coming after this.  Whatever you do, don't quit here, make sure to keep going so you can see all the fun stuff!",
    code: "",
    lessonSection: "Quiz: Challenge Problem",
    tutorImage: 6,
  },
  {
    message:
      "For the quiz, I want you to write something entirely yourself.  Make a checkerboard pattern, a black square, then a white, then a black, and so on, at least four rows of them (like a 6 x 4 grid).  Can you do it?",
    code: "",
    tutorImage: 1,
  },
  {
    message:
      "If you did it, good job, this is really hard, I'm impressed!  If you didn't get it, no worries, here's a hint, you might need two for loops, one inside the other, you'll use at least one c.fillRect(), and don't forget a for loop looks like <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
    tutorImage: 3,
  },
  { message: "Ready to see different ways to solve it?", tutorImage: 4 },
  {
    message: "Here is one way.  See how this works?",
    code: "var size = 50;\n\nfor (var i = 0; i < 300; i = i + 100) {\n  for (var j = 0; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\nfor (var i = 50; i < 300; i = i + 100) {\n  for (var j = 50; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, s, s);\n}\n",
    lessonSection: "Many Ways to Code",
    tutorImage: 2,
  },
  {
    message:
      "If not, try commenting out one of the fillSquare() lines (using <span class=tutor-code>//</span>) so you can see what the other is drawing.",
    tutorImage: 1,
  },
  {
    message:
      "It draws the first and third rows, starting at (0, 0), then doing (0, 100), then doing (100, 0), then (100, 100), and so on.  Then it draws the second and fourth rows, starting at (50, 50), then (50, 150), and so on.  Make sense?",
  },
  {
    message:
      "Let's look at a few more ways of doing a checkerboard.  Here is another version. See how this works?",
    code: "var size = 50;\n\nfor (var i = 0; i < 3; i = i + 1) {\n  for (var j = 0; j < 2; j = j + 1) {\n    var x = i * 2 * size;\n    var y = j * 2 * size;\n    fillSquare(x, y, size);\n    x = x + size;\n    y = y + size;\n    fillSquare(x, y, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, s, s);\n}\n",
    tutorImage: 6,
  },
  {
    message:
      "Every time through the loop, it draws two squares, below and to the right of the other.",
    tutorImage: 1,
  },
  {
    message:
      "Then, it does that three times across and twice down, skipping over the white squares.  Cool, huh?",
  },

  // Modulo
  {
    message:
      "Here is yet another way of doing a checkerboard.  Any idea how this works?  What's that <span class=tutor-code>i % 2</span> doing?",
    code: "var size = 50;\n\nfor (var i = 0; i < 6; i = i + 1) {\n  for (var j = 0; j < 4; j = j + 1) {\n    if ((i % 2 + j % 2) % 2) {\n      var x = i * size;\n      var y = j * size;\n      fillSquare(x, y, size);\n    }\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, s, s);\n}\n",
    lessonSection: "Modulo",
    tutorImage: 3,
  },
  {
    message:
      "<span class=tutor-code>%</span> means modulo, it gives the remainder after dividing.",
    tutorImage: 6,
  },
  {
    message:
      "So, <span class=tutor-code>1 % 2</span> is 1, <span class=tutor-code>2 % 2</span> is 0 (because 2 divides 2 evenly with no remainder), <span class=tutor-code>3 % 2</span> is 1 again, <span class=tutor-code>4 % 2</span> is 0.",
    tutorImage: 1,
  },
  {
    message:
      "So, how does that complicated expression -- <span class=tutor-code>(i % 2 + j % 2) % 2</span> -- work? When i is even, <span class=tutor-code>i % 2</span> will be 0.  Same for j.  If both are odd, then you get (1 + 1) % 2, which is 0. So, that expression will be 0 if both i and j are even or both i and j are odd.",
  },
  {
    message:
      "For if statements, 0 means false and anything else is true.  So, we'll do what's inside the if statement only when only one of i or j is odd.",
    tutorImage: 4,
  },
  {
    message:
      "So, what this does is visit all the squares in the 6 x 4 grid, but only draw a black square in the ones where either the column number or row number is odd but not both.  Make sense now?",
    tutorImage: 1,
  },
  {
    message:
      "See how many ways there are to solve a problem like this?  There is usually not just one solution to something you want to do, lots of things might work.  Isn't that great?",
    tutorImage: 3,
  },

  // Animation
  {
    message: "Okay, time for some fun! Let's do animation!",
    code: "",
    lessonSection: "Animation",
    tutorImage: 1,
  },
  {
    message:
      "Moving stuff is fun but a little weird.  You need to make something happen every 1/20th of a second or so. What is this doing?",
    code: "var vx = 4;\nvar vy = 1;\nvar step = 50;  // In milliseconds\n\nvar x = 0;\nvar y = 0;\nvar size = 50;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\ndrawStep();\nfunction drawStep() {\n  // Clear the screen\n  c.clearRect(0, 0, w, h);\n  // Draw the box\n  c.strokeRect(x, y, size, size);\n  // Move the box unless at edge\n  if (x + vx + size < w &&\n      y + vy + size < h) {\n    x += vx;\n    y += vy;\n    clearTimeout(cmTID);\n    // Do it again in a little bit\n    cmTID = setTimeout(drawStep, step);\n  }\n}\n",
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    tutorImage: 2,
  },
  {
    message:
      "The really new thing is <span class=tutor-code>setTimeout(<i>functionName</i>, <i>waitTimeInMilliseconds</i>)</span>;  That says to call a function a little while later.",
    tutorImage: 1,
  },
  {
    message:
      "So, the way this code works is that, every time we are told to do drawStep(), we erase the screen, draw the box, and, unless we hit the edge, we then move the box and ask to call drawStep() again after waiting a little bit.",
  },
  {
    message:
      "Try changing <span class=tutor-code>vx</span>, <span class=tutor-code>vy</span>, and <span class=tutor-code>step</span>. You can change the speed of the box and make it move different directions!",
    tutorImage: 5,
  },
  {
    message:
      "Try commenting out the clearRect().  That's kind of cool, isn't it?",
    tutorImage: 3,
  },

  // Spin a box
  {
    message: "Spinning a box! That's a fun idea! Can you make it go faster?",
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
    lessonSection: "Rotating Movement",
    tutorImage: 1,
  },
  {
    message:
      "This works the same way as the moving box.  Every time it is told to do drawStep(), it clears the screen, rotates, draws the box, and then says to do drawStep() again in a little while later.",
  },
  {
    message: "What happens if you comment out the clearRect()?",
    tutorImage: 4,
  },
  {
    message: "Try adding more boxes. Did it do what you expected?",
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
    tutorImage: 3,
  },
  {
    message:
      "I like this version.  It's like a solar system!  Try changing the speed now!",
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-20, -20, 40, 40);\n  c.fillRect(10, 100, 5, 5);\n  c.fillRect(-50, -70, 5, 5);\n  c.fillRect(50, 30, 5, 5);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
    tutorImage: 5,
  },

  // Intro to objects
  {
    message:
      "Stop for a sec.  Sit back and think about how you might create three moving boxes.",
    code: "",
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: "Objects",
    tutorImage: 4,
  },
  {
    message:
      "Well, you'd need the x and y position of each, right?  And the size of each.  And maybe the dx and dy velocity of each?  And the angle?",
  },
  {
    message:
      "You could create variables x1, x2, x3, y1, y2, y3, dx1 ... ugh.  That's getting painful, isn't it?",
    tutorImage: 1,
  },
  {
    message:
      "There's another way to do this, we can make objects!  Objects are little bundles of variables and code. Here's a box object.  Take a look at it.  See how it works?",
    code: "// Box object\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n}\n// Create a new box\nvar b = new Box(10, 10, 100);\nc.strokeRect(b.x, b.y, b.size, b.size);\n",
    tutorImage: 6,
  },
  {
    message:
      "What is going on is <span class=tutor-code>new Box(10, 10, 100)</span> creates an object, then immediately calls the Box() function to set it up.  Box() then uses <span class=tutor-code>this.x</span> to set a variable named x in the object to the x that was passed into the function.",
  },
  {
    message:
      "It does the same thing to set up all the other variables in our new Box object.  Once the object is created and set up, we set our variable <span class=tutor-code>b</span> to that.  Later, we can get at the x and y and other variables of our box using <span class=tutor-code>b.x</span>, <span class=tutor-code>b.y</span>, and so forth.",
    tutorImage: 1,
  },
  {
    message:
      "Our box object is just a little bundle of variables that describe our box.  It says where the box is, its velocity (dx and dy), how big it is, everything that it means to be a box.",
    tutorImage: 3,
  },
  {
    message: "We can even have box objects know how to draw themselves.",
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
    tutorImage: 2,
  },
  {
    message:
      "See how <span class=tutor-code>this.stroke</span> is set equal to a function?  And that function calls strokeRect() to draw this box?  Then, later, we create a box called b1 and tell it to draw itself with <span class=tutor-code>b1.stroke()</span>. That's pretty cool, isn't it?",
    tutorImage: 1,
  },
  {
    message: "You know, I have a secret.  I've been hiding something from you.",
    lessonSection: "Canvas Object",
    tutorImage: 7,
  },
  {
    message:
      "Have you been wondering why we use c.strokeRect() to draw a box?  What's the deal with that <span class=tutor-code>c.</span>?  Why is that there?",
    tutorImage: 1,
  },
  {
    message:
      "Turns out all this time you have been using an object to draw, an object called the canvas object.",
  },
  {
    message:
      "I added some code for you to get that object from the web page and put it in a variable named <span class=tutor-code>c</span>, so you could use it.  Let me show you what that hidden code looks like.",
    code: "// This code was hidden before\nvar pane = document.getElementById('pane');\nvar c = pane.getContext('2d');\n\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
    tutorImage: 6,
  },
  {
    message:
      "That code asks the document object (which is the web page) to give us the element in the web page called 'pane' (which is the id in the web page of the canvas where we draw), and then gets the 2d drawing canvas from that element.  We name that canvas object <span class=tutor-code>c</span> and use all its drawing functions, which is why we use <span class=tutor-code>c.</span> in front of every use of strokeRect().",
  },
  {
    message:
      "That's useful to know if you write your own Javascript for your own drawing in web pages later!  But, for now, let me hide it again, so we can focus on Box objects.",
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
    lessonSection: "Using Objects",
    tutorImage: 1,
  },
  {
    message:
      "Can you create a couple more boxes and have them draw themselves? For each one, you'll have to use new and stroke(), like we did for the box we called b1.",
    tutorImage: 3,
  },
  {
    message:
      "That's pretty nice, but calling each box b1, b2, b3, or whatever is painful. What if I want ten boxes?  Or a hundred?",
    tutorImage: 4,
  },
  {
    message: "What I need is a list of boxes, like this!",
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\n// Create an empty list of boxes\nvar boxes = [];\n// Create new boxes and add them to our list\nfor (var i = 0; i < 3; i = i + 1) {\n  boxes.push(new Box(i * 30, i * 20, 100));\n}\n// Tell all the boxes to draw themselves\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n",
    lessonSection: "Lists (Arrays)",
    tutorImage: 2,
  },
  // Explain lists/arrays
  { message: "There is a big new thing here.  I'll explain it." },
  {
    message:
      "<span class=tutor-code>[]</span> creates what is called an <i>array</i>, which basically is a list that holds stuff.  These lists can hold objects, numbers, whatever we want.",
    tutorImage: 6,
  },
  {
    message:
      "So, <span class=tutor-code>var boxes = []</span> means create an empty list and call it boxes.",
    tutorImage: 1,
  },
  {
    message:
      "<span class=tutor-code>boxes.push()</span> adds something to the end of the list.  Here, we use it to add a new box.  Because it is in a for loop that counts 0, 1, 2, we will add three boxes to the end of the list.",
  },
  {
    message:
      "Take a look at the second for loop.  <span class=tutor-code>boxes.length</span> is the length of the list.  <span class=tutor-code>boxes[0]</span> is the first box in the list, <span class=tutor-code>boxes[1]</span> the second, and so forth.  So, that second for loop goes through every box in the list and tells it to draw itself by calling <span class=tutor-code>boxes[i].stroke();</span>",
    tutorImage: 4,
  },
  { message: "Can you add some more boxes?", tutorImage: 1 },

  // Boxes should rotate themselves, move themselves, update themselves
  {
    message:
      "So far, we haven't really done that much that requires Box objects.  But let's go a step further.  Let's make boxes that are animated and move!",
    lessonSection: "Methods on Objects",
    tutorImage: 3,
  },
  {
    message:
      "Let's start by making all our boxes draw to whatever angle they are supposed to be at.  See how this new version of stroke() works?",
    code: "function Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Find the center of the box\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Move to the center of the box\n    c.translate(x, y);\n    // Rotate the box around the center\n    c.rotate(this.angle);\n    // Draw the box around its center\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n",
  },
  {
    message:
      "Whenever a box is told to draw itself, we do that by moving to the center of the box, rotating around that center to match the angle of the box, and then draw the box around its center.  Kind of like what we did before for rotated boxes, right?",
    tutorImage: 1,
  },
  {
    message:
      "Now let's make the boxes spin!  Look at the new function updateAll().  See what it is doing?",
    code: "var rotateSpeed = 0.02;\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].angle += rotateSpeed;\n    boxes[i].stroke();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Do the first update\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Find the center of the box\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Move to the center of the box\n    c.translate(x, y);\n    // Rotate the box around the center\n    c.rotate(this.angle);\n    // Draw the box around its center\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n",
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    tutorImage: 5,
  },
  {
    message:
      "updateAll() starts by clearing the screen, then rotates each box a little more before drawing it.  Finally, it says, call me again in 1/20th of a second.  So, 20 times a second, we rotate each box a little and redraw it.  Cool, huh?",
    tutorImage: 3,
  },
  { message: "Can you make the boxes spin faster?", tutorImage: 1 },
  {
    message:
      "Can you make them spin the other direction (counter-clockwise instead of clockwise)?",
    tutorImage: 6,
  },
  {
    message:
      "Can you add more boxes?  You'll have to change three things to fit them all on the canvas, but I bet you can figure it out.  I liked it with 60 of them. It looks really weird!",
    tutorImage: 4,
  },
  {
    message:
      "All those fast spinning boxes make me dizzy!  Let's slow it down again and let me show you something else.  We can move the update into each Box object.  That will be handy when we make the update do more.  See what this does now?",
    code: "var rotateSpeed = 0.01;\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Do the first update\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.update = function() {\n    this.angle += rotateSpeed;\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n",
    tutorImage: 1,
  },
  {
    message:
      "updateAll() just calls the update() of the box.  update() on the box changes the angle and then draws the box.  Each box knows how to update and draw itself now.",
    tutorImage: 3,
  },
  {
    message:
      "Let's make the boxes move too!  All we have to do is have update use <span class=tutor-code>dx</span> and <span class=tutor-code>dy</span>.  Take a look at <span class=tutor-code>Box</span> and how it is updated now!",
    code: "function Box(x, y, size, a, dx, dy, da) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = dx;\n  this.dy = dy;\n  this.da = da;\n\n  this.update = function() {\n    this.angle += this.da;\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Bounce off the edges\n    if (this.x < 0 ||\n        this.x + this.size > w) {\n      this.dx = -this.dx;\n      this.da = -this.da;\n    }\n    if (this.y < 0 ||\n        this.y + this.size > h) {\n      this.dy = -this.dy;\n      this.da = -this.da;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nvar s = 80;\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = Math.random() * (w - s);\n  var y = Math.random() * (h - s);\n  var a = Math.random() * 2 - 1;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  var da = 0.1 * (Math.random() * 2 - 1);\n  boxes.push(new Box(x, y, s, a, dx, dy, da));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: "Velocity and Collisions",
    tutorImage: 5,
  },
  {
    message:
      "It's a little more complicated, but only a little.  Every time a box is told to update(), it moves by its velocity (<span class=tutor-code>dx</span> and <span class=tutor-code>dy</span>) and rotates by its angular velocity (<span class=tutor-code>da</span>).",
    tutorImage: 1,
  },
  {
    message:
      "If a box gets off the edge of the screen, we reverse its velocities, making it appear to bounce!  Cool!",
    tutorImage: 3,
  },

  // Bitwise operators
  {
    message:
      "One thing that is new here.  When the box checks if it is off the screen, there's something you haven't seen before, <span class=tutor-code>||</span>",
    lessonSection: "Bitwise Operators (And and Or)",
    tutorImage: 4,
  },
  {
    message:
      "<span class=tutor-code>||</span> means <i>or</i>, as in either-or, so the first if statement checks if the box has either gone off the left or right edge, and the second checks if it has gone off the top or bottom.  Make sense?",
  },
  {
    message:
      "There is also a way to say <i>and</i>, as in both have to be true, which is <span class=tutor-code>&&</span>.  So, <span class=tutor-code>||</span> means <i>or</i> and <span class=tutor-code>&&</span> means <i>and</i>.",
    tutorImage: 1,
  },

  // Play with bouncing boxes
  {
    message:
      "Back to the fun.  Have you tried putting in a lot of boxes yet?  Try it!  Make it so there are 10 boxes!  Or 50!",
    lessonSection: "Easy with Objects",
    tutorImage: 2,
  },
  {
    message:
      "See how easy it is to keep track of all these boxes, their position, angle, velocity, and everything else, using objects?  Once you say what a Box object is, it's easy to create lots and lots of them!",
    tutorImage: 6,
  },

  // Do physics with bouncing ball, three types of collision
  {
    message:
      "You're nearing the end of the lessons now.  But I still have a couple fun things to show you.",
    code: "",
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: "Circles, Arcs, and Balls",
    tutorImage: 5,
  },
  {
    message:
      "Now that you know about objects with velocity, we actually are really close to being able to do cool things like make a ball bounce.  All we need is a little physics, some acceleration to go with our velocities!",
    tutorImage: 1,
  },
  {
    message:
      "Here's a <span class=tutor-code>Ball</span> object.  It's a lot like the Box object you saw before, but has differences.  Take a look at the code.",
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Bounce off the edges\n    if (this.x - this.r < 0 ||\n        this.x + this.r > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r < 0 ||\n        this.y + this.r > h) {\n      this.dy = -this.dy;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    tutorImage: 3,
  },
  {
    message:
      "One big difference is that a ball is round, so angle doesn't matter.  Look at the code.  There is no angle any more, right?",
    tutorImage: 1,
  },
  {
    message:
      "Another big difference is that we use arc() to draw circles.  Arcs are cool, but they're a little complicated for just drawing a circle. Let me explain how they work.",
  },
  {
    message:
      "To draw a circle in Javascript, you call <span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span>, where (x, y) is the center of the circle, r is the radius, and then 0 and <span class=tutor-code>Math.PI * 2</span> says to draw an arc from 0 degrees to 360 degrees (since 2 * pi in radians is 360 degrees).",
    tutorImage: 4,
  },
  {
    message:
      "Because we draw circles from the center, a bunch of other things change, such as exactly how we check of whether we need to bounce off the sides.",
    tutorImage: 1,
  },
  {
    message: "Take a look at the code again.  Does it make more sense now?",
    tutorImage: 3,
  },
  {
    message:
      "Okay, now we want to make a bouncing ball.  To do physics, we need velocity and acceleration.  So far, we have had velocity, but no acceleration.  Let's add acceleration!  Here it is!",
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy;\n    } else {\n      // Our only acceleration is gravity\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.05;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: "Acceleration, Velocity, and Physics",
    tutorImage: 5,
  },
  {
    message:
      "Do you see it?  Now, every time we update() on a Ball, we change the downward velocity (<span class=tutor-code>dy</span>) by whatever gravity is.",
    tutorImage: 1,
  },
  {
    message:
      "Pretty cool!  Try adding 10-15 balls and watch it for a while.  It's a full physics simulation with gravity and bouncing!  Very fun!",
    tutorImage: 2,
  },
  {
    message:
      "Let me show you one more thing before we move on from bouncing balls.  This is called a partially elastic collision.",
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      // Our only acceleration is gravity\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.2;\nvar friction = 0.8;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: "Collisions and Physics",
    tutorImage: 3,
  },
  {
    message:
      "In the real world, when things collide, they usually bounce off each other slower than before.  That's why, when you drop a ball, it doesn't keep bouncing forever.",
  },
  {
    message:
      "If you look at the code in update, there is now a friction force applied when the balls bounce off the walls.  It makes them bounce off slower than they came in.  Eventually, the balls all stop bouncing and slowly roll along the bottom.",
    tutorImage: 1,
  },
  {
    message:
      "Cool simulation, and adds some realism.  Play with it a bit!  Change the friction, add more balls, increase gravity, change timeStep.  Try messing around with it!",
    tutorImage: 3,
  },

  // Do mouse events, boxes attracted to mouse, boxes avoiding other boxes but attracted to mouse.
  {
    message:
      "For our last lessons, let's work a bit with tracking the mouse.  This is a lot of fun!",
    code: "",
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: "Mouse Events",
    tutorImage: 5,
  },
  {
    message:
      "Here is a ball that sticks to the mouse.  Every time the mouse moves, the ball redraws on top of the mouse.",
    code: "var pane = document.getElementById('pane');\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\npane.onmousemove = function(evt) {\n  var x = evt.clientX;\n  var y = evt.clientY;\n  \n  c.clearRect(0, 0, w, h);\n  c.beginPath();\n  c.arc(x, y, 40, 0, Math.PI * 2);\n  c.stroke();\n};\n",
    tutorImage: 3,
  },
  {
    message:
      "How does it work?  It starts by setting the variable pane to the element of the web page called 'pane', which happens to be the one our drawing canvas is in.",
    tutorImage: 1,
  },
  {
    message:
      "<span class=tutor-code>pane.onmousemove = function(evt) {};</span> is really important.  That code binds a function to the <i>onmousemove</i> event on the 'pane' element, which means this function is called any time the mouse moves inside the drawing canvas.",
  },
  {
    message:
      "Our function then asks the event where the mouse is (the <span class=tutor-code>clientX</span> and <span class=tutor-code>clientY</span>) and draws a big circle around it.  Make sense?",
    tutorImage: 4,
  },
  {
    message:
      "What's really cool about this is that we can combine it with animation.  Look at this!",
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Acceleration toward the mouse\n    var diffX = mouseX - this.x;\n    var diffY = mouseY - this.y;\n    var dist2 = diffX * diffX + diffY * diffY + 1;\n    var ddx = accel * Math.abs(diffX) *\n              diffX / dist2;\n    var ddy = accel * Math.abs(diffY) *\n              diffY / dist2;\n    \n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    } else {\n      this.dx += ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      this.dy += ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // Enforce the boundaries\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 0.1;\nvar friction = 0.8;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n// Store the mouse position when the mouse moves\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\n",
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: "Springs and Physics",
    tutorImage: 5,
  },
  {
    message:
      "What this does is, every time the mouse moves in the canvas area, it sets <span class=tutor-code>mouseX</span> and <span class=tutor-code>mouseY</span> to the location of the mouse.",
    tutorImage: 1,
  },
  {
    message:
      "Then, when each ball is updated, it figures out how far away from the mouse it is, and accelerates toward it.",
  },
  {
    message:
      "The acceleration is the square root of the distance, so it pulls harder when it is really far away.  Imagine all the balls being connected to the mouse by little rubber bands or springs.  It's a little like that.",
    tutorImage: 2,
  },
  {
    message:
      "Try making the balls smaller!  And add more of them!  I like it with about 40 small balls chasing the mouse.",
    tutorImage: 3,
  },
  {
    message:
      "I've got an idea.  Can you change this so that the balls run away from the mouse?  Right now they are attracted to the mouse. Can you make them be repelled?",
    tutorImage: 4,
  },
  {
    message:
      "Did you figure it out?  You'll want to change the direction of the acceleration.  You might also want to make the acceleration stronger when the mouse is close instead of stronger when it is far away.  Take a look, try to do it!",
    tutorImage: 1,
  },
  {
    message: "Here's how I did it!  See how this works?",
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Acceleration away from the mouse\n    var diffX = this.x - mouseX;\n    var diffY = this.y - mouseY;\n    var dist2 = diffX * diffX + diffY * diffY;\n    dist2 += this.r;\n    var ddx = accel * diffX / dist2;\n    var ddy = accel * diffY / dist2;\n    \n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    } else {\n      this.dx += ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      this.dy += ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // Enforce the boundaries\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 10;\nvar friction = 0.8;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n// Store the mouse position when the mouse moves\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\n",
    tutorImage: 5,
  },
  {
    message:
      "Try adding more balls, making the balls smaller, or increasing the acceleration!  Look at them run away!  Isn't that great?",
  },
  {
    message:
      "Now that we have these classes, it's easy to make other fun games!  Look, just a few small changes and we have the balls chasing each other!",
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n  this.ddx = 0;\n  this.ddy = 0;\n\n  this.accel = function(x2, y2) {\n    // Acceleration toward the target\n    var diffX = x2 - this.x;\n    var diffY = y2 - this.y;\n    var dist2 = diffX * diffX + diffY * diffY;\n    dist2 += 1;\n    this.ddx = accel * Math.abs(diffX);\n    this.ddx *= diffX / dist2;\n    this.ddy = accel * Math.abs(diffY);\n    this.ddy *= diffY / dist2;\n  };\n  this.update = function() {\n    this.dx *= airFriction;\n    this.dy *= airFriction;\n    \n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * surfaceFriction;\n    } else {\n      this.dx += this.ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * surfaceFriction;\n    } else {\n      this.dy += this.ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // Enforce the boundaries\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 0.1;\nvar surfaceFriction = 0.8;\nvar airFriction = 0.96;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    // The first ball follows the mouse,\n    // all other balls follow the ball before\n    if (i > 0) {\n      balls[i].accel(balls[i-1].x, balls[i-1].y);\n    } else {\n      balls[i].accel(mouseX, mouseY);\n    }\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 10; i = i + 1) {\n  balls.push(new Ball(0, 0, r, 0, 0));\n}\n// Do the first update\nupdateAll();\n\n// Store the mouse position when the mouse moves\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\n",
    tutorImage: 2,
  },
  {
    message:
      "The way this works is that we created an accel() function for Ball objects, then we call that before we call update().  For the first ball, we accel() toward the mouse.  For all the others, we accel() toward the previous ball.  All it took was just a couple changes!  Isn't that great?",
    tutorImage: 3,
  },
  {
    message:
      "Look at this!  Just a few other changes and the balls chase the mouse, but scatter when the mouse button is down.  Try clicking and see!",
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n  this.ddx = 0;\n  this.ddy = 0;\n\n  this.accel = function(x2, y2) {\n    // Acceleration toward the target\n    var diffX = x2 - this.x;\n    var diffY = y2 - this.y;\n    var dist2 = diffX * diffX + diffY * diffY;\n    dist2 += 1;\n    this.ddx = accel * diffX / dist2;\n    this.ddy = accel * diffY / dist2;\n    if (mouseIsDown) {\n      this.ddx *= -100;\n      this.ddy *= -100;\n    } else {\n      this.ddx *= Math.abs(diffX);\n      this.ddy *= Math.abs(diffY);\n    }\n  };\n  this.update = function() {\n    this.dx *= airFriction;\n    this.dy *= airFriction;\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * surfaceFriction;\n    } else {\n      this.dx += this.ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * surfaceFriction;\n    } else {\n      this.dy += this.ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // Enforce the boundaries\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 0.1;\nvar surfaceFriction = 0.8;\nvar airFriction = 0.99;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // In milliseconds\nvar mouseIsDown = false;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].accel(mouseX, mouseY);\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 20;\nfor (var i = 0; i < 10; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n// Store the mouse position when the mouse moves\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\npane.onmousedown = function(evt) {\n  mouseIsDown = true;\n};\npane.onmouseup = function(evt) {\n  mouseIsDown = false;\n};",
    tutorImage: 5,
  },
  {
    message:
      "I can't resist showing you one more! These are so easy to do now!  In this one, the balls try to go to the mouse, but also try to stay away from each other.  Cool, isn't it?",
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n  this.ddx = 0;\n  this.ddy = 0;\n\n  this.accel = function(x2, y2, repel) {\n    // Acceleration toward the target\n    var diffX = x2 - this.x;\n    var diffY = y2 - this.y;\n    var dist2 = diffX * diffX + diffY * diffY;\n    dist2 += 1;\n    var ddx = accel * diffX / dist2;\n    var ddy = accel * diffY / dist2;\n    if (repel) {\n      ddx *= -100 / Math.abs(diffX);\n      ddy *= -100 / Math.abs(diffY);\n    } else {\n      ddx *= Math.abs(diffX);\n      ddy *= Math.abs(diffY);\n    }\n    this.ddx += ddx;\n    this.ddy += ddy;\n  };\n  this.update = function() {\n    this.dx *= airFriction;\n    this.dy *= airFriction;\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * surfaceFriction;\n    } else {\n      this.dx += this.ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * surfaceFriction;\n    } else {\n      this.dy += this.ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // Enforce the boundaries\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 0.1;\nvar surfaceFriction = 0.8;\nvar airFriction = 0.999;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // In milliseconds\nvar mouseIsDown = false;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].ddx = 0;\n    balls[i].ddy = 0;\n    balls[i].accel(mouseX, mouseY, false);\n    for (var j = 0; j < balls.length; j += 1) {\n      if (i != j) {\n       balls[i].accel(balls[j].x, balls[j].y, true);\n      }\n    }\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 4;\nfor (var i = 0; i < 5; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n// Store the mouse position when the mouse moves\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\n",
    tutorImage: 6,
  },
  // The End
  {
    message:
      "Great job! Do you feel like you now know a bit about programming? What do you think about programming?  Is it fun?",
    code: "",
    hiddenCode:
      "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: "The End",
    tutorImage: 3,
  },
  {
    message:
      "Wow, you did everything!  Congratulations, nice work!  A lot of these are really hard. I'm impressed you finished!  I hope you enjoyed it!",
    code: 'var pane = document.getElementById(\'pane\');\nvar s = 3;\n\npane.onmousemove = function(evt) {\n  c.fillStyle = randomRGBA();\n  var x = evt.clientX;\n  var y = evt.clientY;\n  c.fillRect(x - s / 2, y - s / 2, s, s);};\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(",");\n  return "rgba(" + rgba + ")";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\n',
    tutorImage: 1,
  },
];

// To keep JSHint from complaining about variables and functions in
// the hidden code, list them here.  The boolean is whether they can
// be overridden by user code.
var predefForJSHint = { c: true, rgb: true, rgba: true };

// Images for tutor, referenced by the lessons to switch
var tutorImages = [
  "maven1-h250.png",
  "maven2-h250.png",
  "maven3-h250.png",
  "maven4-h250.png",
  "maven5-h250.png",
  "maven6-h250.png",
  "maven7-h250.png",
];
