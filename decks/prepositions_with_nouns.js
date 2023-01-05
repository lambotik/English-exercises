topic = "Prepositions with nouns.";
grammar = "Cheque, demand, need, reason FOR<br>";
grammar+= "[Dis]advantage of, cause of, photo/map/picture of<br>";

cards = [
 {"question":"I got a cheque ... %arg1 %arg2",
  "answer": "for",
  "radios": ["for", "with", "by", "on"],
  "arg1": ["$750"],
  "arg2": ["for my game"],
  "tied": "yes",
 },
 {"question":"We got a great demand ... the product",
  "answer": "for",
  "radios": ["for", "of", "by", "on"],
 },
 {"question":"Plastic bag? There is no need ... it",
  "answer": "for",
  "radios": ["for", "of", "by", "on"],
 },
 {"question":"I don't reason ... it",
  "answer": "for",
  "radios": ["for", "of", "by", "on"],
 },
 {"question":"I don't reason ... it",
  "answer": "for",
  "radios": ["for", "of", "by", "on"],
 },
 {"question":"The advantage ... Steamdeck in 'free' PC games",
  "answer": ["of", "in", "to"],
  "radios": ["of", "in", "to", "by"],
  "comment": "of; in, to - also accepted",
  "unit": 129,
  "minor": "yes",
 },
 {"question":"The cause ... death is the blood lost",
  "answer": "of",
  "radios": ["of", "in", "to", "by"],
 },
 {"question":"A map ... the castle was done in XIX century",
  "answer": "of",
  "radios": ["of", "in", "to", "by"],
 },
 {"question":"%arg1 ... the number of players was significant last year",
  "answer": "in",
  "radios": ["of", "in", "to", "by"],
  "arg1": ["An increase", "a decrease", "a rise", "a fall"],
 },
 {"question":"Damage ... the car is significant",
  "answer": "to",
  "radios": ["of", "in", "to", "by"],
 },
 {"question":"Invitation ... the party is still valid",
  "answer": "to",
  "radios": ["of", "in", "to", "by"],
 },
 {"question":"A solution ... the problem is killing them all",
  "answer": "to",
  "radios": ["of", "to", "for"],
 },
 {"question":"A key ... the problem is killing them all",
  "answer": "to",
  "radios": ["of", "to", "for"],
 },
 {"question":"An asnwer ... the question is the year of 1255",
  "answer": "to",
  "radios": ["of", "to", "for"],
 },
 {"question":"A reply ... the letter was sent last week",
  "answer": "to",
  "radios": ["of", "to", "for"],
 },
 {"question":"A reaction ... a light was checked",
  "answer": "to",
  "radios": ["of", "to", "for"],
 },
 {"question":"His attitude ... lessons is inappropriate",
  "answer": ["to","towards"],
  "radios": ["of", "to", "for"],
 },
 {"question":"A %arg1 ... his subordeenee was drawn to the light",
  "answer": "with",
  "radios": ["with", "to", "for"],
  "arg1": ["relationship","contact","connection"],
 },
 {"question":"There are not differences ... Evil and Good",
  "answer": "between",
  "radios": ["with", "to", "for", "between"],
  "arg1": ["relationship","contact","connection"],
 },

]


include("js/engine.js",function(){
  //
});
