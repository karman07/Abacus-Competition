const express = require("express");
const router = express.Router();

router.get("/speed", (req, res) => {
  const data = {
    level1: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 80,
        Rows: 4,
      },
      2: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 160,
        Rows: 5,
      },
      Total: 240,
    },
    level2: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 80,
        Rows: 5,
      },
      2: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 200,
        Rows: 6,
      },
      Total: 280,
    },
    level3: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 40,
        Rows: 5,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 30,
        Rows: 6,
      },
      3: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 40,
        Rows: 2,
      },

      4: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 90,
        Rows: 3,
      },

      Total: 280,
    },
    level4: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 40,
        Rows: 5,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 30,
        Rows: 2,
      },
      3: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 60,
        Rows: 3,
      },

      4: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 80,
        Rows: 2,
      },

      5: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 30,
        Multi2: 1,
      },

      6: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 20,
        Multi2: 1,
      },

      Total: 260,
    },
    level5: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 40,
        Rows: 5,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 30,
        Rows: 2,
      },
      3: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 60,
        Rows: 3,
      },

      4: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 80,
        Rows: 2,
      },

      5: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 30,
        Multi2: 1,
      },

      6: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 20,
        Multi2: 1,
      },

      7: {
        multiplication: false,
        division: true,
        Digit: 2,
        Questions: 20,
        Rows: 5,
      },

      Total: 290,
    },
    level6: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 40,
        Rows: 5,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 30,
        Rows: 2,
      },
      3: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 60,
        Rows: 3,
      },

      4: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 80,
        Rows: 2,
      },

      5: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 30,
        Multi2: 1,
      },

      6: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 20,
        Multi2: 1,
      },

      7: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 20,
        Rows: 5,
      },

      8: {
        multiplication: false,
        division: true,
        Div1: 3,
        Questions: 10,
        Div2: 1,
      },

      Total: 300,
    },
    level7: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 40,
        Rows: 5,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 30,
        Rows: 2,
      },
      3: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 60,
        Rows: 3,
      },

      4: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 80,
        Rows: 2,
      },

      5: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 30,
        Multi2: 1,
      },

      6: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 20,
        Multi2: 1,
      },

      7: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 20,
        Rows: 5,
      },

      8: {
        multiplication: false,
        division: true,
        Div1: 3,
        Questions: 10,
        Div2: 1,
      },

      9: {
        multiplication: false,
        division: true,
        Div1: 4,
        Questions: 20,
        Div2: 1,
      },

      10: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 5,
      },
      
      Total: 320,
    },
  };
  res.send(data);
});

router.get("/aa", (req, res) => {
  const data = {
    level1: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 10,
        Rows: 5,
      },
      2: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 30,
        Rows: 6,
      },
      Total: 40,
    },
    level2: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 10,
        Rows: 5,
      },
      2: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 30,
        Rows: 7,
      },
      Total: 40,
    },
    level3: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 10,
        Rows: 6,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 4,
      },
      3: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 5,
      },

      4: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 3,
      },

      Total: 40,
    },

    level4: {
      1: {
        multiplication: false,
        division: false,
        Digit: 4,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 5,
      },
      3: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 10,
        Multi2: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 10,
        Multi2: 1,
      },

      Total: 40,
    },

    level5: {
      1: {
        multiplication: false,
        division: false,
        Digit: 4,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 5,
      },
      3: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 10,
        Multi2: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 10,
        Multi2: 1,
      },

      Total: 40,
    },

    level6: {
      1: {
        multiplication: false,
        division: false,
        Digit: 4,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 5,
      },
      3: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 10,
        Multi2: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 10,
        Multi2: 1,
      },

      Total: 40,
    },

    level7: {
      1: {
        multiplication: false,
        division: false,
        Digit: 4,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 5,
      },
      3: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 10,
        Multi2: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 10,
        Multi2: 1,
      },

      Total: 40,
    },

    level8: {
      1: {
        multiplication: false,
        division: false,
        Digit: 4,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 5,
      },
      3: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 10,
        Multi2: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 10,
        Multi2: 1,
      },

      Total: 40,
    },

    level9: {
      1: {
        multiplication: false,
        division: false,
        Digit: 4,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 5,
      },
      3: {
        multiplication: true,
        division: false,
        Multi1: 2,
        Questions: 10,
        Multi2: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Multi1: 3,
        Questions: 10,
        Multi2: 1,
      },

      Total: 40,
    },
  };
  res.send(data);
});

router.get("/am", (req, res) => {
  const data = {
    level1: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 30,
        Rows: 4,
      },
      2: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 10,
        Rows: 5,
      },
      Total: 40,
    },
    level2: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 10,
        Rows: 4,
      },
      2: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 20,
        Rows: 5,
      },
      3: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 10,
        Rows: 6,
      },
      Total: 40,
    },
    
    level3: {
      1: {
        multiplication: false,
        division: false,
        Digit: 1,
        Questions: 20,
        Rows: 6,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 20,
        Rows: 3,
      },

      Total: 40,
    },

    level4: {
      1: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 5,
      },

      3: {
        multiplication: true,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      Total: 40,
    },

    level5: {
      1: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 5,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 5,
      },

      3: {
        multiplication: true,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      Total: 40,
    },

    level6: {
      1: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 5,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 5,
      },

      3: {
        multiplication: true,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      4: {
        multiplication: false,
        division: true,
        Digit: 2,
        Questions: 10,
        Rows: 1,
      },
    
      5: {
        multiplication: true,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 1,
      },

      Total: 50,
    },

    level7: {
      1: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 5,
      },

      3: {
        multiplication: true,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      5: {
        multiplication: false,
        division: true,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      Total: 50,
    },

    level8: {
      1: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 5,
      },

      3: {
        multiplication: true,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      5: {
        multiplication: false,
        division: true,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      Total: 50,
    },

    level9: {
      1: {
        multiplication: false,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 3,
      },

      2: {
        multiplication: false,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 5,
      },

      3: {
        multiplication: true,
        division: false,
        Digit: 2,
        Questions: 10,
        Rows: 1,
      },

      4: {
        multiplication: true,
        division: false,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      5: {
        multiplication: false,
        division: true,
        Digit: 3,
        Questions: 10,
        Rows: 1,
      },

      Total: 50,
    }
  };
  res.send(data);
});

module.exports = router;
