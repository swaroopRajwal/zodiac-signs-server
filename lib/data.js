const moment = require("moment");

const blob = [{
  id: "Aries",
  date: {
    range: "March 21 - April 19",
    start: moment("2001-03-21T12:00:00Z"),
    end: moment("2001-04-19T12:00:00Z"),
  },
  name: "Aries",
  indianName: "Mesha",
  rullingPlanet: ["Mars"],
  luckyColors: [{
    name: "Red",
    hex: "#E03131"
  }, {
    name: "White",
    hex: "#F8F9FA",
  }],
  luckyNumber: [9, 18, 27, 36, 45, 54, 63, 72],
  luckyDay: ["Tuesday"],
  sign: {
    symbol: "RAM",
    description: "The RAM is the sign of the Pioneer & Warrior Leader",
  },
  description: "Arians are extroverts and like to be their own master. They are the Charmers. The Aries personality is fiery & passionate with an urge to act NOW!",
}, {
  id: "Taurus",
  date: {
    range: "April 20 - May 21",
    start: moment("2001-04-20T12:00:00Z"),
    end: moment("2001-05-21T12:00:00Z"),
  },
  name: "Taurus",
  indianName: "Vrishabha",
  rullingPlanet: ["Venus"],
  luckyColors: [{
    name: "Blue",
    hex: "#228BE6"
  }, {
    name: "Violet",
    hex: "#7048E8"
  }],
  luckyNumber: [6, 5, 24, 33, 42, 51],
  luckyDay: ["Friday"],
  sign: {
    symbol: "BULL",
    description: "The BULL is the sign of the builder.",
  },
  description: "Taureans are the practical ones, trustworthy, humane & kind. They are extremely faithful, with a patient, grounded & reliable personality.",
}, {
  id: "Gemini",
  date: {
    range: "May 22 - June 21",
    start: moment("2001-05-22T12:00:00Z"),
    end: moment("2001-06-21T12:00:00Z"),
  },
  name: "Gemini",
  indianName: "Mithuna",
  rullingPlanet: ["Mercury"],
  luckyColors: [{
    name: "Yellow",
    hex: "#FFD43B"
  }, {
    name: "Saffron",
    hex: "#F08C00"
  }],
  luckyNumber: [5, 14, 23, 32, 68],
  luckyDay: ["Wednesday"],
  sign: {
    symbol: "TWINS",
    description: "The TWINS is the sign of the inventor the Artist.",
  },
  description: "Geminans are known for their dual personalities. They are optimistic & find routine boring & dull.",
}, {
  id: "Cancer",
  date: {
    range: "June 22 - July 21",
    start: moment("2001-06-22T12:00:00Z"),
    end: moment("2001-07-21T12:00:00Z"),
  },
  name: "Cancer",
  indianName: "Karka",
  rullingPlanet: ["The Moon"],
  luckyColors: [{
    name: "Green",
    hex: "#40C057"
  }, {
    name: "Mauve",
    hex: "#E599F7"
  }, {
    name: "Blue",
    hex: "#228BE6"
  }],
  luckyNumber: [2, 7, 11, 16, 20, 25, 29, 34],
  luckyDay: ["Monday", "Friday"],
  sign: {
    symbol: "CRAB",
    description: "The CRAB is the sign of the Teacher, the Prophet.",
  },
  description: "Emotions are uppermost. Cancerians are kind & sympathetic, with an urge to nurture & protect. They are straight forward & generous. They are loyal, idealistic & imaginative.",
}, {
  id: "Leo",
  date: {
    range: "July 23 - August 23",
    start: moment("2001-07-23T12:00:00Z"),
    end: moment("2001-08-23T12:00:00Z"),
  },
  name: "Leo",
  indianName: "Simha",
  rullingPlanet: ["The Sun"],
  luckyColors: [{
    name: "Red",
    hex: "#E03131"
  }, {
    name: "Orange", 
    hex: "#FFA94D"
  }, {
    name: "Gold",
    hex: "#FFD700"
  }, {
    name: "White",
    hex: "#F8F9FA"
  }],
  luckyNumber: [1, 10, 22, 28, 40],
  luckyDay: ["Sunday"],
  sign: {
    symbol: "LION",
    description: "The LION is the sign of the king, the Lover.",
  },
  description: "Leos are expansive, generous, caring & fearless. The Typical Leo is flamboyant & generous with tremendous charm & a magnanimous spirit.",
}, {
  id: "Virgo",
  date: {
    range: "August 24 - September 23",
    start: moment("2001-08-24T12:00:00Z"),
    end: moment("2001-09-23T12:00:00Z"),
  },
  name: "Virgo",
  indianName: "Kanya",
  rullingPlanet: ["Mercury"],
  luckyColors: [{
    name: "Orange",
    hex: "#FFA94D"
  }, {
    name: "Yellow",
    hex: "#FFD43B"
  }, {
    name: "Grey",
    hex: "#868E96"
  }, {
    name: "White",
    hex: "#F8F9FA"
  }],
  luckyNumber: [5, 14, 50, 59],
  luckyDay: ["Wednesday", "Saturday"],
  sign: {
    symbol: "VIRGIN",
    description: "the VIRGIN is the sign of the Critic, the secretary",
  },
  description: "Prudent & exact but reasonable. The Virgo character is marked by a sharp intellect used to analuse the natural order.",
}, {
  id: "Libra",
  date: {
    range: "September 24 - October 23",
    start: moment("2001-09-24T12:00:00Z"),
    end: moment("2001-10-23T12:00:00Z"),
  },
  name: "Libra",
  indianName: "Tula",
  rullingPlanet: ["Venus"],
  luckyColors: ["Blue", "Green", "White"],
  luckyNumber: [5, 6, 15, 24, 33, 42],
  luckyDay: ["Friday", "Monday"],
  sign: {
    symbol: "SCALES",
    description: "The SCALES is the sign of the Judge, the Ambassador.",
  },
  description: "Falling in love comes naturally to Librans. Tey need happy & enduring relationships. Librans are easy going & attractive, with a graceful & charming personality.",
}, {
  id: "Scorpio",
  date: {
    range: "October 24 - Novermber 21",
    start: moment("2001-10-24T12:00:00Z"),
    end: moment("2001-11-21T12:00:00Z"),
  },
  name: "Scorpio",
  indianName: "Vrishchika",
  rullingPlanet: ["Pluto", "Mars"],
  luckyColors: [{
      name: "Rust",
      hex: "#C92A2A"   
    }, {
      name: "Red",
      hex: "#E03131"
    }, {
      name: "Earth Brown",
      hex: "#BC815F"
    }],
  luckyNumber: [9, 18, 27, 36, 45, 63],
  luckyDay: ["Tuesday", "Thrusday"],
  sign: {
    symbol: "SCORPION",
    description: "The SCORPION is the sign of the Mystic, the investigator.",
  },
  description: "Shrewd & passionate Scorpios are strong willed, resourceful, full of self-confidence & magnetism. They have very intense personalitites with hidden depths.",
}, {
  id: "Sagittarius",
  date: {
    range: "Novermber 22 - December 21",
    start: moment("2001-11-22T12:00:00Z"),
    end: moment("2001-12-21T12:00:00Z"),
  },
  name: "Sagittarius",
  indianName: "Dhanu",
  rullingPlanet: ["Jupiter"],
  luckyColors: [{
      name: "Red",
      hex: "#E03131",
    }, {
      name: "Pink",
      hex: "#F06595",
    }, {
      name: "Purple",
      hex: "#9333ea"
    }, {
      name: "Black",
      hex: "#343A40",
    }],
  luckyNumber: [3, 12, 21, 39, 48],
  luckyDay: ["Thursday", "Monday"],
  sign: {
    symbol: "ARCHER",
    description: "The ARCHER is the sign of the Lawyer, the Sage.",
  },
  description: "Sagittarians prefer to be footloose & fancy free. Sagittaruis is optimistic, outgoing & the most adaptable of the fire signs. Honesty & sincerity is the second nature of them.",
}, {
  id: "Capricon",
  date: {
    range: "December 22 - January 20",
    start: moment("2001-12-20T12:00:00Z"),
    end: moment("2001-01-20T12:00:00Z"),
  },
  name: "Capricon",
  indianName: "Makara",
  rullingPlanet: ["Saturn"],
  luckyColors: ["Grey", "Black", "Blue", "Brown"],
  luckyNumber: [1, 4, 10, 22, 35, 44],
  luckyDay: ["Saturday"],
  sign: {
    symbol: "GOAT",
    description: "The GOAT is the sign of the Priest, the administrator.",
  },
  description: "They are patient, practical & highly determined, with overvaulting ambition. One of Capricons best assets is its sense of humor",
}, {
  id: "Aquarius",
  date: {
    range: "January 21 - February 19",
    start: moment("2001-01-21T12:00:00Z"),
    end: moment("2001-02-19T12:00:00Z"),
  },
  name: "Aquarius",
  indianName: "Kumbha",
  rullingPlanet: ["Uranus", "Saturn"],
  luckyColors: [{
      name: "Purple",
      hex: "#9333ea"
    }, {
      name: "Grey",
      hex: "#868E96"
    }, {
      name: "Black",
      hex: "#343A40",
    }, {
      name: "Blue",
      hex: "#228BE6"
    }, {
      name: "Cyan",
      hex: "#22B8CF"
    }],
  luckyNumber: [4, 13, 22, 21, 31, 40, 49],
  luckyDay: ["Sunday", "Saturday"],
  sign: {
    symbol: "WATER BEARER",
    description: "The WATER BEARER is the sign of the inventor, the Seeker of Truth.",
  },
  description: "These visionaries are humanitarian, loyal progressive, creative, idealistic and yet genius & rrational. Aquarians are extremely independent, lively, inventive, friendly & extremely original.",
}, {
  id: "Pisces",
  date: {
    range: "February 20 - March 20",
    start: moment("2001-02-20T12:00:00Z"),
    end: moment("2001-03-20T12:00:00Z"),
  },
  name: "Pisces",
  indianName: "Meena",
  rullingPlanet: ["Jupiter"],
  luckyColors: [{
      name: "Red",
      hex: "#E03131",
    }, {
      name: "Yellow",
      hex: "#FFD43B"
    }, {
      name: "Rose",
      hex: "#db2777"
    }, {
      name: "Orange",
      hex: "#FFA94D"
    }],
  luckyNumber: [2, 7, 12, 16, 30, 52, 61],
  luckyDay: ["Sunday", "Tuesday", "Thursday"],
  sign: {
    symbol: "FISH",
    description: "The FISH is the sign of the Dreamer-Poet, the Occultist.",
  },
  description: "The most idealistic, romantic and poetic sign. Liberal & sensitive Piscean are gentle & caring by nature. They are highly impressionistic and capable of deep & intense feeling.",
}] 

module.exports = blob;