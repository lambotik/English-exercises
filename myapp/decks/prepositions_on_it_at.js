topic = "On/it/at (other uses).";
grammar = "We say 'be/go on holiday/business/a trip/a tour/a cruise'<br>";
grammar+= "Also could say 'for a holiday/ for my holiday'<br>";
grammar+= "On TV, and on the radio<br>";
grammar+= "On the phone/telephone<br>";
grammar+= "be/go on strike/a diet<br>";
grammar+= "be on fire<br>";
grammar+= "on the whole (=in general)<br>";
grammar+= "on purpose(=intentionally)<br>";
grammar+= "but: by mistake/by chance/by accident<br>";
grammar+= "in the rain/sun (sunshine)/the shade/dark/bad weather<br>";
grammar+= "write in ink/biro/pencil<br>";
grammar+= "in words/figures/in letters; in love; in opinion<br>";
grammar+= "in cash, but by cheque / by credit card<br>";
grammar+= "at the age of/at a speed of/at a temp of<br>";

cards = [
 {"question":"I am %arg1 ... holiday in %arg2",
  "answer": "on",
  "radios": ["on", "in", "at", "for"],
  "arg1": ["", "going"],
  "arg2": ["Europe", "America", "Cyprus"],
  "comment": "for is not working, because it lacks an article: _for my_ holiday, or _for a_ holiday",
 },
 {"question":"I am leaving ... a holiday in %arg1",
  "answer": "for",
  "radios": ["on", "in", "at", "for"],
  "arg1": ["Europe", "America", "Cyprus"],
  "comment": "on is not working, because there is an article",
 },
 {"question":"I am not available ... the %arg1",
  "answer": "on",
  "radios": ["on", "in", "at", "for"],
  "arg1": ["phone", "telephone"],
 },
 {"question":"Delivery is not working. Wolt couriers are ... strike",
  "answer": "on",
  "radios": ["on", "in", "at", "for"],
  "arg1": [],
 },
 {"question":"She doesn't eat ice-cream. She's ... a diet",
  "answer": "on",
  "radios": ["on", "in", "at", "for"],
  "arg1": [],
 },
 {"question":"%arg1 is ... fire!",
  "answer": "on",
  "radios": ["on", "in", "at", "for"],
  "arg1": ["Police car", "The train", "The bus"],
 },
 {"question":"... the whole I %arg1 %arg2",
  "answer": "on",
  "radios": ["on", "in", "at", "for"],
  "arg1": ["prefer", "like", "dislike"],
  "arg2": ["Western music", "meat", "wine"],
 },
 {"question":"He did that ... purpose!",
  "answer": "on",
  "radios": ["on", "in", "at", "with", "by"],
  "arg1": [],
 },
 {"question":"We walk ... the %arg1",
  "answer": "in",
  "radios": ["on", "in", "at", "with"],
  "arg1": ["rain", "sun", "shade", "dark"],
 },
 {"question":"We walk ... bad weather",
  "answer": "in",
  "radios": ["on", "in", "at", "with"],
 },
 {"question":"You are not allowed to sign ... pencil",
  "answer": "in",
  "radios": ["on", "in", "by", "with"],
 },
 {"question":"Fill in the form ... block letters, please",
  "answer": "in",
  "radios": ["on", "in", "by", "with"],
 },
 {"question":"I want to pay ... cash",
  "answer": "in",
  "radios": ["in", "by", "with"],
 },
 {"question":"I fall ... love with every beautiful girl",
  "answer": "in",
  "radios": ["in", "by", "with", "at"],
 },
 {"question":"... my opinion, that smells bad",
  "answer": "in",
  "radios": ["in", "by", "with", "at"],
 },
 {"question":"A girl laughted ... a clown in the circus",
  "answer": "at",
  "radios": ["at", "on", "on"],
 },
 {"question":"I left %arg1 ... %arg2",
  "answer": "at",
  "radios": ["in", "by", "with", "at"],
  "arg1": ["school","university", "school","university"],
  "arg2": [17, 22, "at the age of 17", "at the age of 21"],
  "tied": "yes",
 },
 {"question":"I graduated from %arg1 ... %arg2",
  "answer": "in",
  "radios": ["in", "by", "with", "at"],
  "arg1": ["school","university"],
  "arg2": [2008, 2013],
  "tied": "yes",
 },
 {"question":"... that speed he could get a fee",
  "answer": "at",
  "radios": ["in", "by", "with", "at"],
 },
 {"question":"... the speed of 90 km/h he would be fined",
  "answer": "at",
  "radios": ["in", "by", "with", "at"],
 },
 {"question":"Water freezes ... 0 degrees celsius",
  "answer": "at",
  "radios": ["in", "by", "with", "at"],
 },
]

include("js/engine.js",function(){
  //
});
