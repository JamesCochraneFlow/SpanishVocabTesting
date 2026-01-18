function bottom(){
var x = document.getElementById("texts");
x.scrollIntoView({behavior: "smooth",block: "end"});
}


// window.onscroll = function() {myFunction()};
//add another header and sticky
// var header = document.getElementById("spanish_general_foundation_header");
// var sticky = header.offsetTop -5;

// var header2 = document.getElementById("spanish_general_higher_header");
// var sticky2 = header2.offsetTop -5;

// function myFunction() {
// //add relevant stuff
// if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
// }
// else  {
//     header2.classList.add("sticky");
//     header.classList.remove("sticky");

// }

// }

// '+'\u00fc'+'
// var spanish_general_foundation_ = [
// ['abierto','open',"adj"],
// ['abrir','to open / to turn on (gas, water)',"v"], 
// ['acordarse de','to remember',"v"],
// ['adem'+'\u00e1'+'s de','beside(s)',"o"],
// ['adi'+'\u00f3'+'s','good-bye',"o"],
// ['afortunadamente','fortunately',"adv"],
// ['ahora','now',"adv"],
// ['algo','something',"o"],
// ['alguien','someone/ body',"o"],
// ['alguna parte','somewhere',"adv"],
// ['all'+'\u00ed','there',"adv"],
// ['ambos','both',"o"],
// ['aparecer','to appear',"v"],
// ['apretar','to press',"v"],
// ['aqu'+'\u00ed','here',"adv"],
// ['as'+'\u00ed','so/ therefore',"adv"],
// ['asunto','matter',"n"],
// ['a'+'\u00fa'+'n (no)','still; (not yet)',"adv"],
// ['bastante','quite / fairly / enough',"adv"],
// ['beso','kiss',"n"],
// ['bienvenido','welcome',"adj"],
// ['cabo','end',"n"],
// ['cada','each',"o"],
// ['casi','almost',"adv"],
// ['caso','case',"n"],
// ['cerrado','closed',"adj"],
// ['cerrar (con llave)','to close / to turn off (lock)',"v"],
// ['como','how; as; like',"o"],
// ['\u00bf'+'c'+'\u00f3'+'mo?','pardon?',"o"],
// ['con mucho gusto','gladly',"adv"],
// ['cosa','thing',"n"],
// ['cuando','when',"o"],
// ['cuanto(s)','how much (many)',"o"],
// ['dar','to give',"v"],
// ['darse prisa','to hurry',"v"],
// ['de acuerdo','agreed',"adj"],
// ['deber','to have to / "ought"',"v"],
// ['decir','to say; tell',"v"],
// ['dejar','to let / leave (something)',"v"],
// ['demasiado','too (e.g.too old)',"adv"],
// ['despacio','slowly',"adv"],
// ['encantado','pleased to meet you',"o"],
// ['entonces','then',"adv"],
// ['escoger','to choose',"v"],
// ['esconder','to hide',"v"],
// ['estar','to be',"v"],
// ['gracias','thank you',"o"],
// ['gustar a uno','to please [like]',"v"],
// ['haber','to have [used with other verbs]',"v"],
// ['hacerse / ponerse','to become, get',"v"],
// ['hallar','to find',"v"],
// ['hasta (luego)','until (see you soon); even',"o"],
// ['hay','there is / are',"o"],
// ['hecho','fact',"n"],
// ['hola','hello',"o"],
// ["igual (me da -)","I don't care","o"],
// ['incluido','included',"adj"],
// ['incluso','even',"adv"],
// ['juntos/as','together',"adv"],
// ['justo','fair',"adj"],
// ['l'+'\u00e1'+'stima ('+'\u00a1'+'qu'+'\u00e9'+' l'+'\u00e1'+'stima!)','shame (what a shame!)',"o"],
// ['Le saluda atentamente','yours faithfully/ yours sincerely',"o"],
// ['m'+'\u00e1'+'s','more',"adv"],
// ['medio','half; average',"adj"],
// ['mejor','better',"adj"],
// ['menos','less',"adj"],
// ['mismo','same',"adj"],
// ['mitad','a half',"adj"],
// ['mixto','mixed',"adj"],
// ['moderado','moderate',"adj"],
// ['mucho/a; muchos/as','a lot/ much; many',"adv"],
// ['muy','very',"adj"],
// ["nada (de ...)","nothing (Don't mention it)","o"],
// ['nadie','no-one / nobody',"o"],
// ['necesario','necessary',"adj"],
// ['necesitar','to need',"v"],
// ['no','no / not',"adv"],
// ["no (me) importa","(it) doesn't matter (I'm not bothered)","o"],
// ['normalmente','usually',"adv"],
// ['nuevo','new',"adj"],
// ['n'+'\u00fa'+'mero','number',"n"],
// ['o','or',"o"],
// ['ocasi'+'\u00f3'+'n; (de ...)','occasion / opportunity; second-hand',"n"],
// ['otra vez','again',"adv"],
// ['otro','other / another',"adj"],
// ['para','for; in order to',"o"],
// ['\u00a1'+'Perd'+'\u00f3'+'n!',"I'm sorry!","o"],
// ['pero','but',"o"],
// ['poco (un poco)','little (a little)',"adj"],
// ['poder','to be able to',"v"],
// ['por','for; because of',"o"],
// ['por ciento','per cent',"adj"],
// ['por desgracia','unfortunately',"adv"],
// ['por favor','please; Excuse me',"o"],
// ['por todas partes','everywhere',"adv"],
// ['porque','because',"o"],
// ['que','that',"o"],
// ['\u00bf'+'Qu'+'\u00e9'+' tal?; ('+'\u00bf'+' ... el film?)','How are you?; (How is/was the film?)',"o"],
// ['\u00bf'+'qu'+'\u00e9'+' tipo de ...?','what kind of...?',"o"],
// ['quiz'+'\u00e1'+'s','perhaps',"adv"],
// ['r'+'\u00e1'+'pido','quick(ly)',"adv"],
// ['recordar','to remember',"v"],
// ['reducir','to reduce',"v"],
// ['salvo','except for',"o"],
// ['segundo','second',"adj"],
// ['seguro','certain(ly) / sure / definite(ly)',"adv"],
// ['ser','to be',"v"],
// ['si','if',"o"],
// ['s'+'\u00ed'+'','yes',"o"],
// ['si no','otherwise',"adv"],
// ['sin','without',"o"],
// ['sobre','envelope',"n"],
// ['sobre todo','particularly',"adv"],
// ['solamente','only',"adv"],
// ['solo','alone',"adj"],
// ['s'+'\u00f3'+'lo','only',"adv"],
// ['tambi'+'\u00e9'+'n','also',"adv"],
// ['tan','so (expensive)',"adv"],
// ['tan ... como ...','as ... as ...',"o"],
// ['tanto','so much',"o"],
// ['tanto ... como ...','both ... and ...',"o"],
// ['tener (que)','to have (to)',"v"],
// ['tener raz'+'\u00f3'+'n','to be right',"v"],
// ['tipo','sort/ kind',"n"],
// ['tirar','to pull',"v"],
// ['todav'+'\u00ed'+'a (no)','still; (not yet)',"adv"],
// ['todo (el mundo)','all (everybody)',"o"],
// ['todos los ...','every',"adv"],
// ['tonter'+'\u00ed'+'as','nonsense',"n"],
// ['tonto','stupid',"adj"],
// ['traer','to bring',"v"],
// [''+'\u00fa'+'ltimo','last (in the row)',"adv"],
// ['unos','some; a few; about (approximately)',"adj"],
// [''+'\u00fa'+'til','useful',"adj"],
// ['utilizar','to use',"v"],
// ['vale','OK / Agreed.',"o"],
// ['valer; ... la pena','to be worth; -- it/ the trouble',"v"],
// ['varios','several',"adj"],
// ['verdad','truth',"n"],
// [''+'\u00bf'+'Verdad?','Isn\'t it? etc.',"o"],
// ['y','and',"o"],
// ['ya','already',"adv"],
// ['ya no','not ... any more',"adv"],
// ['anteayer','day before yesterday',"n"],
// ['antes (de)','before',"adv"],
// ['antiguo','ancient; former',"adj"],
// ['ayer','yesterday',"n"],
// ['de repente','suddenly',"adv"],
// ['de vez en cuando','now and again',"adv"],
// ['despu'+'\u00e9'+'s (de)','after (-wards)',"adv"],
// ['d'+'\u00ed'+'a','day',"n"],
// ['en seguida','immediately',"n"],
// ['fin / final','end / finish; final',"n"],
// ['finalmente','at last / finally',"adv"],
// ['fin de semana (el)','weekend (at the)',"n"],
// ['hoy','today',"n"],
// ['luego','then; next; later',"adv"],
// ['ma'+'\u00f1'+'ana','tomorrow',"n"],
// ['medianoche','midnight',"n"],
// ['mediod'+'\u00ed'+'a','midday',"n"],
// ['menudo, a','often',"adv"],
// ['mes (mensual)','month (... ly)',"n"],
// ['noche (anoche)','night (last night)',"n"],
// ['pasado ma'+'\u00f1'+'ana','the day after tomorrow',"n"],
// ['pronto ('+'\u00a1'+'Hasta pronto!)','soon (See you soon!)',"adv"],
// ['pr'+'\u00f3'+'ximo','next',"adj"],
// ['recientemente','recently',"adv"],
// ['siempre','always',"adv"],
// ['siguiente','following / next (day / week)',"adj"],
// ['tan pronto como','as soon as',"o"],
// ['tarde','late; afternoon/ evening',"adj"],
// ['temprano','early',"adv"],
// ['vez (a veces / una vez m'+'\u00e1'+'s)','time (sometimes / once more)',"n"]
// ];

// var spanish_general_foundation_slicenumber = "spanish_general_foundation_".length;
// var spanish_general_foundation_langvalue = 2;

// for (i in spanish_general_foundation_){
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_foundation_click(event, this)');
// b.setAttribute('id', "spanish_general_foundation_" + i);
// b.setAttribute("class","spanish"+spanish_general_foundation_[i][2]);
// b.appendChild(document.createTextNode(spanish_general_foundation_[i][0]));
// var spanish_general_foundation_wrapper = document.getElementById('spanish_general_foundation_wrapper');
// spanish_general_foundation_wrapper.appendChild(b);
// };


// function spanish_general_foundation_lang(){
// if (spanish_general_foundation_langvalue  % 2 === 0){
// var children = [].slice.call(document.getElementById('spanish_general_foundation_wrapper').getElementsByTagName('*'),0);
// for (i = 0; i<children.length; i++){
// var char = children[i].id;
// var index = parseInt(char.slice(spanish_general_foundation_slicenumber));
// children[i].innerText = spanish_general_foundation_[index][1];}
// }
// else{
// var children = [].slice.call(document.getElementById('spanish_general_foundation_wrapper').getElementsByTagName('*'),0);
// for (i = 0; i<children.length; i++){
// var char = children[i].id;
// var index = parseInt(char.slice(spanish_general_foundation_slicenumber));
// children[i].innerText= spanish_general_foundation_[index][0];}
// }

// var spanish_general_foundation_wrapper = document.getElementById('generalfoundationlang');
// if (spanish_general_foundation_wrapper.getAttribute('src')=="spanish.png") {
// spanish_general_foundation_wrapper.src = "english.png";
// spanish_general_foundation_langvalue = 1;
// }
// else {
// spanish_general_foundation_wrapper.src = "spanish.png";
// spanish_general_foundation_langvalue = 2;}
// }


// function spanish_general_foundation_click(event, el) {
// var char = el.id;
// var index = parseInt(char.slice(spanish_general_foundation_slicenumber));
// var german = spanish_general_foundation_[index][0];
// var english = spanish_general_foundation_[index][1];
// if(event.ctrlKey) {document.getElementById(char).remove();}
// else {
// if (document.getElementById(char).innerText == german) 
// {document.getElementById(char).innerText = english;}
// else 
// {document.getElementById(char).innerText = german;}
// }
// var x = document.getElementById("spanish_general_foundation_wrapper");
// x.style.height = "auto";
// }


// function spanish_general_foundation_open() {
// var x = document.getElementById("spanish_general_foundation_wrapper");
// if (x.style.height) {x.style.height = null;} 
// else {
// x.style.height = x.scrollHeight + "px";

// }
// }


// function spanish_general_foundation_adj(){
// var myNode = document.getElementById("spanish_general_foundation_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_foundation_.length; i++){
// if (spanish_general_foundation_[i][2]== "adj"){
// c = document.getElementById("spanish_general_foundation_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_foundation_click(event, this)');
// b.setAttribute('id', "spanish_general_foundation_" + i);
// b.setAttribute("class","spanish"+spanish_general_foundation_[i][2]);
// if (spanish_general_foundation_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_foundation_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_foundation_[i][1]));}
// c.appendChild(b);}}
// var x = document.getElementById("spanish_general_foundation_optionsid");
// x.style.height = null;
// }


// function spanish_general_foundation_n(){
// var myNode = document.getElementById("spanish_general_foundation_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_foundation_.length; i++){
// if (spanish_general_foundation_[i][2]== "n"){
// c = document.getElementById("spanish_general_foundation_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_foundation_click(event, this)');
// b.setAttribute('id', "spanish_general_foundation_" + i);
// b.setAttribute("class","spanish"+spanish_general_foundation_[i][2]);
// if (spanish_general_foundation_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_foundation_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_foundation_[i][1]));}
// c.appendChild(b);}}
// var x = document.getElementById("spanish_general_foundation_optionsid");
// x.style.height = null;
// }


// function spanish_general_foundation_o(){
// var myNode = document.getElementById("spanish_general_foundation_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_foundation_.length; i++){
// if (spanish_general_foundation_[i][2]== "o"){
// c = document.getElementById("spanish_general_foundation_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_foundation_click(event, this)');
// b.setAttribute('id', "spanish_general_foundation_" + i);
// b.setAttribute("class","spanish"+spanish_general_foundation_[i][2]);
// if (spanish_general_foundation_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_foundation_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_foundation_[i][1]));}
// c.appendChild(b);
// }}
// var x = document.getElementById("spanish_general_foundation_optionsid");
// x.style.height = null;
// }


// function spanish_general_foundation_v(){
// var myNode = document.getElementById("spanish_general_foundation_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_foundation_.length; i++){
// if (spanish_general_foundation_[i][2]== "v"){
// c = document.getElementById("spanish_general_foundation_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_foundation_click(event, this)');
// b.setAttribute('id', "spanish_general_foundation_" + i);
// b.setAttribute("class","spanish"+spanish_general_foundation_[i][2]);
// if (spanish_general_foundation_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_foundation_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_foundation_[i][1]));}
// c.appendChild(b);
// }}
// var x = document.getElementById("spanish_general_foundation_optionsid");
// x.style.height = null;
// }


// function spanish_general_foundation_adv(){
// var myNode = document.getElementById("spanish_general_foundation_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_foundation_.length; i++){
// if (spanish_general_foundation_[i][2]== "adv"){
// c = document.getElementById("spanish_general_foundation_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_foundation_click(event, this)');
// b.setAttribute('id', "spanish_general_foundation_" + i);
// b.setAttribute("class","spanish"+spanish_general_foundation_[i][2]);
// if (spanish_general_foundation_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_foundation_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_foundation_[i][1]));}
// c.appendChild(b);
// }}
// var x = document.getElementById("spanish_general_foundation_optionsid");
// x.style.height = null;
// }


// function spanish_general_foundation_all(){
// var myNode = document.getElementById("spanish_general_foundation_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_foundation_.length; i++){
// c = document.getElementById("spanish_general_foundation_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_foundation_click(event, this)');
// b.setAttribute('id', "spanish_general_foundation_" + i);
// b.setAttribute("class","spanish"+spanish_general_foundation_[i][2]);
// if (spanish_general_foundation_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_foundation_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_foundation_[i][1]));}
// c.appendChild(b);
// }
// var x = document.getElementById("spanish_general_foundation_optionsid");
// x.style.height = null;
// }


// function spanish_general_foundation_options() {
// var x = document.getElementById("spanish_general_foundation_optionsid");
// if (x.style.height) {x.style.height = null;} 
// else {x.style.height = x.scrollHeight + "px";}
// }


// function spanish_general_open() {
// var x = document.getElementById("spanish_general_contents");
// if (x.style.display === "none") {x.style.display = "block";} 
// else {x.style.display = "none";}
// }













// // '+'\u00fc'+'
// var spanish_general_higher_ = [
// ['...'+'\u00ed'+'simo (dificil'+'\u00ed'+'simo)','very (very difficult)',"adv"],
// ['adem'+'\u00e1'+'s','besides',"adv"],
// ['adrede','deliberately',"adv"],
// ['a'+'\u00f1'+'adir','to add',"v"],
// ['apenas','scarcely/ hardly',"adv"],
// ['apoyarse','to lean',"v"],
// ['apresurarse','to hurry',"v"],
// ['aumentar','to increase',"v"],
// ['aunque','although; even though; even if',"o"],
// ['aut'+'\u00e9'+'ntico','genuine; real',"adj"],
// ['casualidad, por','chance, by',"n"],
// ['como m'+'\u00e1'+'ximo','at most',"adv"],
// ['con fluidez','fluently',"adv"],
// ['dar las gracias a','to thank',"v"],
// ['de verdad','indeed',"adv"],
// ['empujar','to push',"v"],
// ['en cuanto','as soon as',"adv"],
// ['en total','altogether',"adv"],
// ['en vano','in vain',"adv"],
// ['en vez de','instead of',"o"],
// ['encantar','to delight',"v"],
// ['es decir','that\'s to say',"o"],
// ['frecuentemente','frequently',"adv"],
// ['lento','slow',"adj"],
// ['mientras','while',"o"],
// ['mismo','(with noun/pronoun) -self, e.g. himself',"o"],
// ['moderado','moderate',"adj"],
// ['no obstante','however / nevertheless',"adv"],
// ['o ... o ...','either ... or ...',"o"],
// ['parecido','similar',"adj"],
// ['pertenecer','to belong',"v"],
// ['pesar de, a','despite',"o"],
// ['por casualidad','(by) chance',"adv"],
// ['por consiguiente','as a result',"adv"],
// ['por eso / esto','therefore, so',"adv"],
// ['puesto que','since, because',"o"],
// ['si','whether',"o"],
// ['sin embargo','nevertheless',"o"],
// ['sino','but (following a previous negative)',"o"],
// ['tampoco','not ... either',"o"],
// ['verdad, de','indeed',"adv"]
// ];


// var spanish_general_higher_slicenumber = "spanish_general_higher_".length;
// var spanish_general_higher_langvalue = 2;

// for (i in spanish_general_higher_){
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_higher_click(event, this)');
// b.setAttribute('id', "spanish_general_higher_" + i);
// b.setAttribute("class","spanish"+spanish_general_higher_[i][2]);
// b.appendChild(document.createTextNode(spanish_general_higher_[i][0]));
// var spanish_general_higher_wrapper = document.getElementById('spanish_general_higher_wrapper');
// spanish_general_higher_wrapper.appendChild(b);
// };


// function spanish_general_higher_lang(){
// if (spanish_general_higher_langvalue  % 2 === 0){
// var children = [].slice.call(document.getElementById('spanish_general_higher_wrapper').getElementsByTagName('*'),0);
// for (i = 0; i<children.length; i++){
// var char = children[i].id;
// var index = parseInt(char.slice(spanish_general_higher_slicenumber));
// children[i].innerText = spanish_general_higher_[index][1];}
// }
// else{
// var children = [].slice.call(document.getElementById('spanish_general_higher_wrapper').getElementsByTagName('*'),0);
// for (i = 0; i<children.length; i++){
// var char = children[i].id;
// var index = parseInt(char.slice(spanish_general_higher_slicenumber));
// children[i].innerText= spanish_general_higher_[index][0];}
// }

// var spanish_general_higher_wrapper = document.getElementById('generalhigherlang');
// if (spanish_general_higher_wrapper.getAttribute('src')=="spanish.png") {
// spanish_general_higher_wrapper.src = "english.png";
// spanish_general_higher_langvalue = 1;
// }
// else {
// spanish_general_higher_wrapper.src = "spanish.png";
// spanish_general_higher_langvalue = 2;}
// }


// function spanish_general_higher_click(event, el) {
// var char = el.id;
// var index = parseInt(char.slice(spanish_general_higher_slicenumber));
// var german = spanish_general_higher_[index][0];
// var english = spanish_general_higher_[index][1];
// if(event.ctrlKey) {document.getElementById(char).remove();}
// else {
// if (document.getElementById(char).innerText == german) 
// {document.getElementById(char).innerText = english;}
// else 
// {document.getElementById(char).innerText = german;}
// }
// var x = document.getElementById("spanish_general_higher_wrapper");
// x.style.height = "auto";
// }


// function spanish_general_higher_open() {
// var x = document.getElementById("spanish_general_higher_wrapper");
// if (x.style.height) {x.style.height = null;} 
// else {
// x.style.height = x.scrollHeight + "px";}
// }


// function spanish_general_higher_adj(){
// var myNode = document.getElementById("spanish_general_higher_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_higher_.length; i++){
// if (spanish_general_higher_[i][2]== "adj"){
// c = document.getElementById("spanish_general_higher_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_higher_click(event, this)');
// b.setAttribute('id', "spanish_general_higher_" + i);
// b.setAttribute("class","spanish"+spanish_general_higher_[i][2]);
// if (spanish_general_higher_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_higher_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_higher_[i][1]));}
// c.appendChild(b);}}
// var x = document.getElementById("spanish_general_higher_optionsid");
// x.style.height = null;
// }


// function spanish_general_higher_n(){
// var myNode = document.getElementById("spanish_general_higher_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_higher_.length; i++){
// if (spanish_general_higher_[i][2]== "n"){
// c = document.getElementById("spanish_general_higher_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_higher_click(event, this)');
// b.setAttribute('id', "spanish_general_higher_" + i);
// b.setAttribute("class","spanish"+spanish_general_higher_[i][2]);
// if (spanish_general_higher_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_higher_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_higher_[i][1]));}
// c.appendChild(b);}}
// var x = document.getElementById("spanish_general_higher_optionsid");
// x.style.height = null;
// }


// function spanish_general_higher_o(){
// var myNode = document.getElementById("spanish_general_higher_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_higher_.length; i++){
// if (spanish_general_higher_[i][2]== "o"){
// c = document.getElementById("spanish_general_higher_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_higher_click(event, this)');
// b.setAttribute('id', "spanish_general_higher_" + i);
// b.setAttribute("class","spanish"+spanish_general_higher_[i][2]);
// if (spanish_general_higher_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_higher_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_higher_[i][1]));}
// c.appendChild(b);
// }}
// var x = document.getElementById("spanish_general_higher_optionsid");
// x.style.height = null;
// }


// function spanish_general_higher_v(){
// var myNode = document.getElementById("spanish_general_higher_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_higher_.length; i++){
// if (spanish_general_higher_[i][2]== "v"){
// c = document.getElementById("spanish_general_higher_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_higher_click(event, this)');
// b.setAttribute('id', "spanish_general_higher_" + i);
// b.setAttribute("class","spanish"+spanish_general_higher_[i][2]);
// if (spanish_general_higher_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_higher_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_higher_[i][1]));}
// c.appendChild(b);
// }}
// var x = document.getElementById("spanish_general_higher_optionsid");
// x.style.height = null;
// }


// function spanish_general_higher_adv(){
// var myNode = document.getElementById("spanish_general_higher_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_higher_.length; i++){
// if (spanish_general_higher_[i][2]== "adv"){
// c = document.getElementById("spanish_general_higher_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_higher_click(event, this)');
// b.setAttribute('id', "spanish_general_higher_" + i);
// b.setAttribute("class","spanish"+spanish_general_higher_[i][2]);
// if (spanish_general_higher_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_higher_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_higher_[i][1]));}
// c.appendChild(b);
// }}
// var x = document.getElementById("spanish_general_higher_optionsid");
// x.style.height = null;
// }


// function spanish_general_higher_all(){
// var myNode = document.getElementById("spanish_general_higher_wrapper");
// myNode.style.height = "auto";
// while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}
// for (i=0; i<spanish_general_higher_.length; i++){
// c = document.getElementById("spanish_general_higher_wrapper");
// var b = document.createElement('button');
// b.setAttribute("onclick", 'spanish_general_higher_click(event, this)');
// b.setAttribute('id', "spanish_general_higher_" + i);
// b.setAttribute("class","spanish"+spanish_general_higher_[i][2]);
// if (spanish_general_higher_langvalue % 2 === 0){b.appendChild(document.createTextNode(spanish_general_higher_[i][0]));}
// else {b.appendChild(document.createTextNode(spanish_general_higher_[i][1]));}
// c.appendChild(b);
// }
// var x = document.getElementById("spanish_general_higher_optionsid");
// x.style.height = null;
// }


// function spanish_general_higher_options() {
// var x = document.getElementById("spanish_general_higher_optionsid");
// if (x.style.height) {x.style.height = null;} 
// else {x.style.height = x.scrollHeight + "px";}
// }


// function spanish_general_open() {
// var x = document.getElementById("spanish_general_contents");
// if (x.style.display === "none") {x.style.display = "block";} 
// else {x.style.display = "none";}
// }





//    '+'\u00'+'


var edexel_gcse_spanish_hfl_commonverbs = [
['to accept','aceptar','v'],
['to accompany','acompa'+'\u00f1'+'ar','v'],
['to add','a'+'\u00f1'+'adir','v'],
['to advise','aconsejar','v'],
['to allow','permitir','v'],
['to answer/to reply','contestar/responder','v'],
['to apply','dirigirse a, solicitar, aplicar','v'],
['to argue','discutir','v'],
['to arrive','llegar','v'],
['to ask','preguntar','v'],
['to ask a question','hacer una pregunta','v'],
['to ask for','pedir','v'],
['to avoid','evitar','v'],
['to bath, to bathe','ba'+'\u00f1'+'arse','v'],
['to be','ser, estar','v'],
['to be able to','poder, ser capaz de','v'],
['to be about to (do)','estar a punto de (hacer)','v'],
['to be born','nacer','v'],
['to be called','llamarse','v'],
['to be careful','tener cuidado','v'],
['to be hot/cold','tener calor/fr'+'\u00ed'+'o','v'],
['to be hungry','tener hambre','v'],
['to be in a hurry','tener prisa','v'],
['to be interested in','interesarse en','v'],
['to be keen to','tener ganas de','v'],
['to be located','encontrarse, estar situado/situarse','v'],
['to be lucky','tener suerte','v'],
['to be sleepy, tired','tener sue'+'\u00f1'+'o','v'],
['to be sorry','sentir, lamentar','v'],
['to be successful','tener '+'\u00e9'+'xito','v'],
['to be thirsty','tener sed','v'],

['to borrow','pedir prestado', 'v'],
['to break','romper', 'v'],
['to bring','traer', 'v'],
['to brush (teeth, hair)','cepillarse', 'v'],
['to buy','comprar', 'v'],
['to buy tickets (for a show)','sacar entradas', 'v'],
['to call','llamar', 'v'],
['to cancel','cancelar', 'v'],
['to carry','llevar', 'v'],
['to change','cambiar', 'v'],
['to change (trains etc.)','hacer transbordo', 'v'],
['to chat','charlar', 'v'],
['to check','averiguar, verificar', 'v'],
['to choose','elegir', 'v'],
['to clear the table','quitar la mesa', 'v'],
['to click','cliquear, hacer clic', 'v'],
['to climb mountains','escalar monta'+'\u00f1'+'as', 'v'],
['to climb/to go up','subir', 'v'],
['to close','cerrar', 'v'],
['to collide/to crash','chocar', 'v'],
['to come','venir', 'v'],
['to complain','quejarse', 'v'],
['to contact','contactar', 'v'],
['to cost','costar', 'v'],
['to count','contar', 'v'],
['to cry','llorar', 'v'],
['to dance','bailar', 'v'],
['to decide','decidir', 'v'],
['to describe','describir', 'v'],
['to deserve','merecer', 'v'],
['to die','morir', 'v'],
['to discuss','discutir', 'v'],
['to dismiss','despedir', 'v'],

['to do the vacuum cleaning','pasar la aspiradora', 'v'],
['to do the washing up','fregar (los platos)', 'v'],
['to do, to make','hacer', 'v'],
['to download (music)','descargar (m'+'\u00fa'+'sica)', 'v'],
['to draw','dibujar', 'v'],
['to drink','beber', 'v'],
['to drive','conducir', 'v'],
['to eat','comer', 'v'],
['to end','terminar(se)', 'v'],
['to enjoy','disfrutar', 'v'],
['to enjoy oneself','divertirse, pasarlo bien', 'v'],
['to enter','entrar', 'v'],
['to escape','escapar(se)', 'v'],
['to fail (an exam)','suspender (un examen)', 'v'],
['to fall','caer', 'v'],
['to feel','sentir(se)', 'v'],
['to fill','llenar', 'v'],
['to fill out (a form)','rellenar (una ficha)', 'v'],
['to find, to meet','encontrar(se)', 'v'],
['to finish, end','acabar, terminar', 'v'],
['to follow/to continue','seguir, continuar', 'v'],
['to forget','olvidar', 'v'],
['to forgive','perdonar', 'v'],
['to get (good) marks','sacar (buenas) notas', 'v'],
['to get angry','enfadarse', 'v'],
['to get dressed','vestirse', 'v'],
['to get on well with','llevarse bien con', 'v'],
['to get up','levantarse', 'v'],
['to give','dar', 'v'],
['to give (presents)','ofrecer/dar (regalos)/regalar', 'v'],
['to give orders, to send','mandar', 'v'],

['to go','ir', 'v'],
['to go along (in a car)','circular, viajar (en coche)', 'v'],
['to go down, to get off (bus, train)','bajar', 'v'],
['to go for a walk','pasear, ir de paseo, dar un paseo', 'v'],
['to go shopping','ir de compras', 'v'],
['to go to bed','acostarse', 'v'],
['to go up; get onto (bus, train)','subir', 'v'],
['to go wrong/to fail','fallar, fracasar', 'v'],
['to hand over','entregar', 'v'],
['to hate','odiar/detestar', 'v'],
['to have','tener', 'v'],
['to have (auxiliary verb)','haber', 'v'],
['to have a cold','estar resfriado/constipado', 'v'],
['to have breakfast','desayunar', 'v'],
['to have dinner, supper','cenar', 'v'],
['to have lunch','almorzar', 'v'],
['to have to; must','deber/tener que', 'v'],
['to hear','o'+'\u00ed'+'r', 'v'],
['to help','ayudar', 'v'],
['to hold','tener', 'v'],
['to hope','esperar', 'v'],
['to hurry','darse prisa', 'v'],
['to hurt','doler', 'v'],
['to imagine','imaginar(se)', 'v'],
['to improve','mejorar', 'v'],
['to inform','informar', 'v'],
['to introduce','introducir', 'v'],
['to invite','invitar', 'v'],
['to iron','planchar', 'v'],
['to jump','saltar', 'v'],
['to knock, hit','llamar (a la puerta), golpear', 'v'],
['to know (a fact)','saber', 'v'],
['to know (be familiar with)','conocer', 'v'],

['to land','aterrizar', 'v'],
['to last','durar', 'v'],
['to laugh','re'+'\u00ed'+'r', 'v'],
['to lay the table','poner la mesa', 'v'],
['to learn','aprender', 'v'],
['to leave/go away','marcharse', 'v'],
['to leave (an object), to allow','dejar', 'v'],
['to leave, to depart; go out','salir', 'v'],
['to lend','prestar', 'v'],
['to lift the receiver','descolgar (el tel'+'\u00e9'+'fono)', 'v'],
['to light, turn on','encender', 'v'],
['to like/to love (to be pleasing to)','gustar (a), encantar (a)', 'v'],
['to listen','escuchar', 'v'],
['to live','vivir', 'v'],
['to load, to charge','cargar', 'v'],
['to look after','cuidar', 'v'],
['to look for, to fetch','buscar', 'v'],
['to look like, to resemble','parecerse a', 'v'],
['to lose','perder', 'v'],
['to love','querer, amar', 'v'],
['to make a mistake','equivocarse', 'v'],
['to manage, to run, to direct','dirigir', 'v'],
['to meet','juntarse, encontrar, conocer', 'v'],
['to miss, be missing','echar de menos, faltar', 'v'],
['to need','necesitar', 'v'],
['to note','notar/darse cuenta', 'v'],
['to open','abrir', 'v'],
['to order','pedir (comida en el restaurante)', 'v'],
['to organise','organizar', 'v'],
['to park','aparcar', 'v'],
['to pass (an exam)','aprobar (un examen)', 'v'],
['to pass by/to go','pasar', 'v'],
['to phone','telefonear', 'v'],

['to play (game, sport)','jugar', 'v'],
['to play (musical instrument)','tocar', 'v'],
['to please; be pleasing to','gustar (a)', 'v'],
['to prefer','preferir', 'v'],
['to present/to introduce (someone)','presentar', 'v'],
['to prevent, to warn','prevenir', 'v'],
['to pull','tirar', 'v'],
['to push','empujar', 'v'],
['to put','poner', 'v'],
['to put back/to replace','reemplazar, reponer', 'v'],
['to put on make up','maquillarse', 'v'],
['to rain','llover', 'v'],
['to read','leer', 'v'],
['to realise','darse cuenta de', 'v'],
['to receive, to be host to','recibir, acoger', 'v'],
['to recommend','recomendar', 'v'],
['to refund','reembolsar', 'v'],
['to regret, be sorry','arrepentirse, lamentar', 'v'],
['to remember','acordarse de, recordar', 'v'],
['to rent/to hire','alquilar', 'v'],
['to repair','reparar, arreglar', 'v'],
['to repeat','repetir', 'v'],
['to research','investigar', 'v'],
['to reserve/to book','reservar', 'v'],
['to return','volver', 'v'],
['to revise','repasar', 'v'],
['to ride a horse','montar a caballo, ir a caballo', 'v'],
['to ring','llamar (por tel'+'\u00e9'+'fono)/sonar', 'v'],
['to run','correr', 'v'],
['to save','salvar', 'v'],
['to save (money)','ahorrar', 'v'],
['to say; to tell','decir', 'v'],
['to say goodbye','despedirse', 'v'],

['to see','ver', 'v'],
['to seem','parecer', 'v'],
['to sell','vender', 'v'],
['to send','enviar, mandar', 'v'],
['to serve','servir', 'v'],
['to share','compartir', 'v'],
['to shave','afeitarse', 'v'],
['to show','mostrar/ense'+'\u00f1'+'ar', 'v'],
['to shower','ducharse', 'v'],
['to sign','firmar', 'v'],
['to sing','cantar', 'v'],
['to sit down','sentarse', 'v'],
['to skate','patinar', 'v'],
['to ski','esquiar', 'v'],
['to sleep','dormir', 'v'],
['to smile','sonre'+'\u00ed'+'r', 'v'],
['to smoke','fumar', 'v'],
['to snow','nevar', 'v'],
['to speak','hablar', 'v'],
['to spend (money)','gastar', 'v'],
['to spend (time)','pasar', 'v'],
['to start/to begin','empezar/comenzar', 'v'],
['to stay/to remain','quedarse', 'v'],
['to steal','robar', 'v'],
['to stick','pegar', 'v'],
['to stop','parar(se)', 'v'],
['to study','estudiar', 'v'],
['to succeed','lograr, triunfar', 'v'],
['to sunbathe','tomar el sol', 'v'],
['to surf the internet','navegar en Internet', 'v'],
['to swim','nadar', 'v'],
['to take','coger, tomar', 'v'],
['to take advantage of','aprovechar', 'v'],

['to take photographs','sacar fotos, hacer fotos', 'v'],
['to teach','ense'+'\u00f1'+'ar', 'v'],
['to tell, to recount','contar', 'v'],
['to thank','agradecer', 'v'],
['to think, believe','pensar, creer', 'v'],
['to throw','tirar', 'v'],
['to tidy','arreglar', 'v'],
['to touch','tocar', 'v'],
['to try','intentar', 'v'],
['to try to','tratar de', 'v'],
['to twist, to turn','torcer', 'v'],
['to type','escribir a m'+'\u00e1'+'quina, mecanografiar', 'v'],
['to understand','entender', 'v'],
['to use','usar, utilizar', 'v'],
['to visit','visitar', 'v'],
['to wait for','esperar', 'v'],
['to walk','andar, caminar, pasear', 'v'],
['to want','querer', 'v'],
['to wash (oneself)','lavar(se)', 'v'],
['to wear','llevar', 'v'],
['to win, earn','ganar', 'v'],
['to wish','desear', 'v'],
['to work','trabajar', 'v'],
['to work (i.e. to function)','funcionar', 'v'],
['to worry','preocuparse', 'v'],
['to write','escribir', 'v']
];





var edexel_gcse_spanish_hfl_commonverbs_slicenumber = "edexel_gcse_spanish_hfl_commonverbs".length;
var edexel_gcse_spanish_hfl_commonverbs_langvalue = 2;

function edexel_gcse_spanish_hfl_commonverbs_shuffle() {
var m = edexel_gcse_spanish_hfl_commonverbs.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonverbs[m];
edexel_gcse_spanish_hfl_commonverbs[m] = edexel_gcse_spanish_hfl_commonverbs[i];
edexel_gcse_spanish_hfl_commonverbs[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonverbs");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonverbs_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonverbs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonverbs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonverbs" + i);
b.setAttribute("class","spanishv");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonverbs[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonverbs');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonverbs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonverbs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonverbs" + i);
b.setAttribute("class","spanishv");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonverbs[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonverbs');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonverbs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonverbs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonverbs" + i);
b.setAttribute("class","spanishv");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonverbs[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonverbs');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonverbs_lang(){
if (edexel_gcse_spanish_hfl_commonverbs_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonverbs').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonverbs_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonverbs[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonverbs').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonverbs_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonverbs[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonverbs_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonverbs_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonverbs_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonverbs').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonverbs_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonverbs_slicenumber));
var german = edexel_gcse_spanish_hfl_commonverbs[index][0];
var english = edexel_gcse_spanish_hfl_commonverbs[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonverbs");
x.style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonverbs_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonverbs");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";} 
}





var edexel_gcse_spanish_hfl_commonadjectives = [
['active','activo/a', 'adj'],
['all','todo/a', 'adj'],
['alone/lonely','solo/a', 'adj'],
['angry','enfadado/a', 'adj'],
['awful','horrible', 'adj'],
['beautiful','precioso/a, hermoso/a', 'adj'],
['big, tall','grande', 'adj'],
['boring','aburrido/a', 'adj'],
['brave','valiente', 'adj'],
['brief','breve', 'adj'],
['brilliant','brillante', 'adj'],
['broken','roto/a', 'adj'],
['chestnut brown','casta'+'\u00f1'+'o', 'adj'],
['clean','limpio/a', 'adj'],
['close','cercano/a', 'adj'],
['closed','cerrado/a', 'adj'],
['comfortable','c'+'\u00f3'+'modo/a', 'adj'],
['cool','guay', 'adj'],
['delicious','delicioso/a, rico/a', 'adj'],
['difficult','dif'+'\u00ed'+'cil', 'adj'],
['dirty','sucio/a', 'adj'],
['disgusting','asqueroso/a', 'adj'],
['dynamic','din'+'\u00e1'+'mico/a', 'adj'],
['easy','f'+'\u00e1'+'cil', 'adj'],
['excited','entusiasmado/a', 'adj'],
['exciting','emocionante', 'adj'],
['false','falso/a', 'adj'],
['fast/quick','r'+'\u00e1'+'pido/a', 'adj'],
['fat','gordo/a', 'adj'],
['favourite','favorito/a, preferido/a', 'adj'],
['flexible','flexible', 'adj'],
['former, antique, old','antiguo/a', 'adj'],
['free (no cost)','gratis, gratuito/a', 'adj'],

['free','libre', 'adj'],
['full','lleno/a', 'adj'],
['funny/entertaining/amusing','divertido/a', 'adj'],
['good','bueno/a', 'adj'],
['grateful','agradecido/a', 'adj'],
['great','estupendo/a, fant'+'\u00e1'+'stico/a', 'adj'],
['great','gran', 'adj'],
['great, marvellous','formidable', 'adj'],
['handsome/pretty/charming','guapo/a', 'adj'],
['happy/cheerful','alegre', 'adj'],
['hard','duro/a', 'adj'],
['hardworking','trabajador/a', 'adj'],
['healthy','sano/a', 'adj'],
['heavy','pesado/a', 'adj'],
['high/tall','alto/a', 'adj'],
['hot','caliente', 'adj'],
['in a good mood','de buen humor', 'adj'],
['kind','simp'+'\u00e1'+'tico/a', 'adj'],
['last/latest','\u00fa'+'ltimo/a', 'adj'],
['lazy','perezoso/a', 'adj'],
['light','ligero/a', 'adj'],
['lively','animado/a', 'adj'],
['local','local', 'adj'],
['locked','cerrado/a con llave', 'adj'],
['long','largo/a', 'adj'],
['lost','perdido/a', 'adj'],
['magnificent','magn'+'\u00e9'+'fico/a', 'adj'],
['marvellous','maravilloso/a', 'adj'],
['mature','maduro/a', 'adj'],
['naughty','travieso/a', 'adj'],
['necessary','necesario/a', 'adj'],
['new','nuevo/a', 'adj'],
['next','pr'+'\u00f3'+'ximo/a', 'adj'],

['noisy','ruidoso/a', 'adj'],
['numerous','numeroso/a', 'adj'],
['old','viejo/a', 'adj'],
['only','\u00fa'+'nico/a', 'adj'],
['open','abierto/a', 'adj'],
['other','otro/a', 'adj'],
['own','propio/a', 'adj'],
['perfect','perfecto/a', 'adj'],
['ready','listo/a', 'adj'],
['real','verdadero/a', 'adj'],
['responsible','responsable', 'adj'],
['rich','rico/a', 'adj'],
['rotten','podrido/a', 'adj'],
['same','mismo/a', 'adj'],
['satisfied','satisfecho/a', 'adj'],
['sensational','sensacional', 'adj'],
['serious','serio/a', 'adj'],
['short','corto/a', 'adj'],
['shy','t'+'\u00ed'+'mido/a', 'adj'],
['silent','silencioso/a', 'adj'],
['silly, stupid','est'+'\u00fa'+'pido/a, tonto/a', 'adj'],
['small','peque'+'\u00f1'+'o/a', 'adj'],
['sought after','buscado/a', 'adj'],
['strict','severo/a, estricto/a', 'adj'],
['strong','fuerte', 'adj'],
['thin','delgado/a', 'adj'],
['tired','cansado/a', 'adj'],
['together','junto/a', 'adj'],
['traditional','tradicional', 'adj'],
['ugly','feo/a', 'adj'],
['unbelievable','incre'+'\u00ed'+'ble', 'adj'],
['unpleasant','antip'+'\u00e1'+'tico/a', 'adj'],
['useful','\u00fa'+'til', 'adj'],
['valid','v'+'\u00e1'+'lido/a', 'adj'],
['valuable','valioso/a, de (gran) valor', 'adj'],
['weak','d'+'\u00e9'+'bil', 'adj'],
['wise','sabio/a', 'adj'],
['young','joven', 'adj']
];





var edexel_gcse_spanish_hfl_commonadjectives_slicenumber = "edexel_gcse_spanish_hfl_commonadjectives".length;
var edexel_gcse_spanish_hfl_commonadjectives_langvalue = 2;

function edexel_gcse_spanish_hfl_commonadjectives_shuffle() {
var m = edexel_gcse_spanish_hfl_commonadjectives.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonadjectives[m];
edexel_gcse_spanish_hfl_commonadjectives[m] = edexel_gcse_spanish_hfl_commonadjectives[i];
edexel_gcse_spanish_hfl_commonadjectives[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonadjectives");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonadjectives_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonadjectives){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonadjectives_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonadjectives" + i);
b.setAttribute("class","spanishadj");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonadjectives[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonadjectives');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonadjectives){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonadjectives_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonadjectives" + i);
b.setAttribute("class","spanishadj");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonadjectives[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonadjectives');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonadjectives){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonadjectives_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonadjectives" + i);
b.setAttribute("class","spanishadj");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonadjectives[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonadjectives');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonadjectives_lang(){
if (edexel_gcse_spanish_hfl_commonadjectives_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonadjectives').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonadjectives_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonadjectives[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonadjectives').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonadjectives_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonadjectives[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonadjectives_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonadjectives_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonadjectives_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonadjectives').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonadjectives_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonadjectives_slicenumber));
var german = edexel_gcse_spanish_hfl_commonadjectives[index][0];
var english = edexel_gcse_spanish_hfl_commonadjectives[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonadjectives");
x.style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonadjectives_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonadjectives");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}




var edexel_gcse_spanish_hfl_commonadverbs = [
['again','otra vez', 'adv'],
['(for a) long time','(por) mucho tiempo', 'adv'],
['almost','casi', 'adv'],
['already','ya', 'adv'],
['always','siempre', 'adv'],
['badly','mal', 'adv'],
['below (down)','abajo', 'adv'],
['especially','especialmente, sobre todo', 'adv'],
['fortunately','afortunadamente, por suerte', 'adv'],
['here','aqu'+'\u00ed', 'adv'],
['immediately','inmediatamente', 'adv'],
['more','m'+'\u00e1'+'s', 'adv'],
['nevertheless','no obstante, sin embargo', 'adv'],
['often','a menudo', 'adv'],
['over there','ah'+'\u00ed', 'adv'],
['perhaps','quiz'+'\u00e1'+'s/quiz'+'\u00e1', 'adv'],
['quickly','r'+'\u00e1'+'pidamente, de prisa', 'adv'],
['rather/quite','bastante', 'adv'],
['really','realmente', 'adv'],
['recently','recientemente', 'adv'],
['sometimes','a veces', 'adv'],
['still (yet)','todav'+'\u00ed'+'a', 'adv'],
['straight away','en seguida', 'adv'],
['there','all'+'\u00ed', 'adv'],
['too','demasiado', 'adv'],
['unfortunately','desgraciadamente, desafortunadamente', 'adv'],
['up there','arriba', 'adv'],
['very','muy', 'adv'],
['well','bien', 'adv']
];





var edexel_gcse_spanish_hfl_commonadverbs_slicenumber = "edexel_gcse_spanish_hfl_commonadverbs".length;
var edexel_gcse_spanish_hfl_commonadverbs_langvalue = 2;

function edexel_gcse_spanish_hfl_commonadverbs_shuffle() {
var m = edexel_gcse_spanish_hfl_commonadverbs.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonadverbs[m];
edexel_gcse_spanish_hfl_commonadverbs[m] = edexel_gcse_spanish_hfl_commonadverbs[i];
edexel_gcse_spanish_hfl_commonadverbs[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonadverbs");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonadverbs_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonadverbs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonadverbs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonadverbs" + i);
b.setAttribute("class","spanishadv");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonadverbs[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonadverbs');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonadverbs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonadverbs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonadverbs" + i);
b.setAttribute("class","spanishadv");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonadverbs[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonadverbs');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonadverbs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonadverbs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonadverbs" + i);
b.setAttribute("class","spanishadv");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonadverbs[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonadverbs');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonadverbs_lang(){
if (edexel_gcse_spanish_hfl_commonadverbs_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonadverbs').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonadverbs_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonadverbs[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonadverbs').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonadverbs_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonadverbs[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonadverbs_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonadverbs_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonadverbs_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonadverbs').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonadverbs_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonadverbs_slicenumber));
var german = edexel_gcse_spanish_hfl_commonadverbs[index][0];
var english = edexel_gcse_spanish_hfl_commonadverbs[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonadverbs");
x.style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonadverbs_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonadverbs");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonprepositions = [
['about','alrededor de/aproximadamente', 'prep'],
['above','encima de', 'prep'],
['according to','seg'+'\u00fa'+'n', 'prep'],
['after','despu'+'\u00e9'+'s', 'prep'],
['against','contra', 'prep'],
['among','entre', 'prep'],
['at (someone\'s house)','en (casa de)', 'prep'],
['at the end of','al final de', 'prep'],
['at, to','a', 'prep'],
['because of','a causa de', 'prep'],
['before','antes', 'prep'],
['behind','detr'+'\u00e1'+'s', 'prep'],
['between','entre', 'prep'],
['during','durante', 'prep'],
['everywhere','por todas partes', 'prep'],
['except','salvo, excepto', 'prep'],
['far (from)','lejos (de)', 'prep'],
['for, in order to','para', 'prep'],
['from','de, desde', 'prep'],
['in','en, dentro de', 'prep'],
['in front of','delante de', 'prep'],
['inside','dentro (de)', 'prep'],
['near','cerca de', 'prep'],
['next to','al lado de', 'prep'],
['on','sobre, en', 'prep'],
['on the corner of','en la esquina de', 'prep'],
['opposite','enfrente de', 'prep'],
['outside/out of','fuera de', 'prep'],
['through','por, a trav'+'\u00e9'+'s de', 'prep'],
['towards','hacia', 'prep'],
['under','bajo, debajo de', 'prep'],
['until','hasta', 'prep'],
['with','con', 'prep'],
['without','sin', 'prep']
];





var edexel_gcse_spanish_hfl_commonprepositions_slicenumber = "edexel_gcse_spanish_hfl_commonprepositions".length;
var edexel_gcse_spanish_hfl_commonprepositions_langvalue = 2;

function edexel_gcse_spanish_hfl_commonprepositions_shuffle() {
var m = edexel_gcse_spanish_hfl_commonprepositions.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonprepositions[m];
edexel_gcse_spanish_hfl_commonprepositions[m] = edexel_gcse_spanish_hfl_commonprepositions[i];
edexel_gcse_spanish_hfl_commonprepositions[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonprepositions");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonprepositions_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonprepositions){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonprepositions_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonprepositions" + i);
b.setAttribute("class","spanishprep");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonprepositions[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonprepositions');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonprepositions){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonprepositions_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonprepositions" + i);
b.setAttribute("class","spanishprep");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonprepositions[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonprepositions');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonprepositions){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonprepositions_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonprepositions" + i);
b.setAttribute("class","spanishprep");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonprepositions[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonprepositions');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonprepositions_lang(){
if (edexel_gcse_spanish_hfl_commonprepositions_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonprepositions').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonprepositions_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonprepositions[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonprepositions').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonprepositions_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonprepositions[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonprepositions_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonprepositions_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonprepositions_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonprepositions').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonprepositions_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonprepositions_slicenumber));
var german = edexel_gcse_spanish_hfl_commonprepositions[index][0];
var english = edexel_gcse_spanish_hfl_commonprepositions[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonprepositions");
x.style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonprepositions_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonprepositions");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}
','
var edexel_gcse_spanish_hfl_commoncolors = [
['black','negro/a', 'color'],
['blue','azul', 'color'],
['brown','marr'+'\u00f3'+'n', 'color'],
['chestnut brown','casta'+'\u00f1'+'o/a', 'color'],
['colour','color (m)', 'color'],
['dark','oscuro/a', 'color'],
['dark (hair, skin)','moreno/a', 'color'],
['fair (hair, skin)','rubio/a', 'color'],
['green','verde', 'color'],
['grey','gris', 'color'],
['light','claro/a', 'color'],
['orange','naranja', 'color'],
['pink','rosa', 'color'],
['red','rojo/a', 'color'],
['violet','violeta', 'color'],
['white','blanco/a', 'color'],
['yellow','amarillo/a ', 'color']
];




var edexel_gcse_spanish_hfl_commoncolors_slicenumber = "edexel_gcse_spanish_hfl_commoncolors".length;
var edexel_gcse_spanish_hfl_commoncolors_langvalue = 2;

function edexel_gcse_spanish_hfl_commoncolors_shuffle() {
var m = edexel_gcse_spanish_hfl_commoncolors.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commoncolors[m];
edexel_gcse_spanish_hfl_commoncolors[m] = edexel_gcse_spanish_hfl_commoncolors[i];
edexel_gcse_spanish_hfl_commoncolors[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commoncolors");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commoncolors_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commoncolors){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncolors_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncolors" + i);
b.setAttribute("class","spanishcolor");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncolors[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncolors');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commoncolors){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncolors_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncolors" + i);
b.setAttribute("class","spanishcolor");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncolors[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncolors');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commoncolors){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncolors_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncolors" + i);
b.setAttribute("class","spanishcolor");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncolors[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncolors');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commoncolors_lang(){
if (edexel_gcse_spanish_hfl_commoncolors_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commoncolors').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncolors_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commoncolors[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commoncolors').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncolors_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commoncolors[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncolors_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commoncolors_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commoncolors_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commoncolors').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commoncolors_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncolors_slicenumber));
var german = edexel_gcse_spanish_hfl_commoncolors[index][0];
var english = edexel_gcse_spanish_hfl_commoncolors[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commoncolors");
x.style.height = "auto";
}


function edexel_gcse_spanish_hfl_commoncolors_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commoncolors");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonnumbers = [
['1','uno (un/una) ', 'number'],
['2','dos          ', 'number'],
['3','tres         ', 'number'],
['4','cuatro       ', 'number'],
['5','cinco        ', 'number'],
['6','seis         ', 'number'],
['7','siete        ', 'number'],
['8','ocho         ', 'number'],
['9','nueve        ', 'number'],
['10','diez        ', 'number'],
['11','once        ', 'number'],
['12','doce        ', 'number'],
['13','trece       ', 'number'],
['14','catorce     ', 'number'],
['15','quince      ', 'number'],
['16','diecis'+'\u00e9'+'is   ', 'number'],
['17','diecisiete  ', 'number'],
['18','dieciocho   ', 'number'],
['19','diecinueve  ', 'number'],
['20','veinte      ', 'number'],
['21','veintiuno   ', 'number'],
['22','veintid'+'\u00f3'+'s   ', 'number'],
['23','veintitr'+'\u00e9'+'s  ', 'number'],
['24','veinticuatro', 'number'],
['25','veinticinco ', 'number'],
['26','veintis'+'\u00e9'+'is  ', 'number'],
['27','veintisiete ', 'number'],
['28','veintiocho  ', 'number'],
['29','veintinueve ', 'number'],
['30','treinta', 'number'],
['31','treinta y uno (un/una)', 'number'],
['32','etc. treinta y dos', 'number'],
['40','cuarenta', 'number'],
['50','cincuenta', 'number'],
['60','sesenta', 'number'],
['70','setenta', 'number'],
['80','ochenta', 'number'],
['90','noventa', 'number'],
['100','cien(to)', 'number'],
['101','ciento uno/a', 'number'],
['102','ciento dos', 'number'],
['120','ciento veinte', 'number'],
['200','doscientos/as', 'number'],
['201','doscientos/as uno', 'number'],
['300','trescientos/as', 'number'],
['400','cuatrocientos/as', 'number'],
['500','quinientos/as', 'number'],
['600','seiscientos/as', 'number'],
['700','setecientos/as', 'number'],
['800','ochocientos/as', 'number'],
['900','novecientos/as', 'number'],
['1000','mil', 'number'],
['1001','mil uno/a', 'number'],
['1100','mil cien(to)', 'number'],
['2000','dos mil', 'number'],
['100 000','cien mil', 'number'],
['200 000','doscientos/as mil', 'number'],
['1 000 000','mill'+'\u00f3'+'n (m), un mill'+'\u00f3'+'n de', 'number'],
['2 000 000','dos millones (de)', 'number'],
['2 000 000','dos millones (de)', 'number']
];

var edexel_gcse_spanish_hfl_commonnumbers_slicenumber = "edexel_gcse_spanish_hfl_commonnumbers".length;
var edexel_gcse_spanish_hfl_commonnumbers_langvalue = 2;

function edexel_gcse_spanish_hfl_commonnumbers_shuffle() {
var m = edexel_gcse_spanish_hfl_commonnumbers.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonnumbers[m];
edexel_gcse_spanish_hfl_commonnumbers[m] = edexel_gcse_spanish_hfl_commonnumbers[i];
edexel_gcse_spanish_hfl_commonnumbers[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonnumbers");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonnumbers_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonnumbers){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonnumbers_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonnumbers" + i);
b.setAttribute("class","spanishnumber");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonnumbers[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonnumbers');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonnumbers){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonnumbers_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonnumbers" + i);
b.setAttribute("class","spanishnumber");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonnumbers[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonnumbers');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonnumbers){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonnumbers_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonnumbers" + i);
b.setAttribute("class","spanishnumber");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonnumbers[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonnumbers');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonnumbers_lang(){
if (edexel_gcse_spanish_hfl_commonnumbers_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonnumbers').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonnumbers_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonnumbers[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonnumbers').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonnumbers_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonnumbers[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonnumbers_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonnumbers_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonnumbers_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonnumbers').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonnumbers_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonnumbers_slicenumber));
var german = edexel_gcse_spanish_hfl_commonnumbers[index][0];
var english = edexel_gcse_spanish_hfl_commonnumbers[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonnumbers");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonnumbers_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonnumbers");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonordinals = [
['first','primer/primero/a', 'ordinal'],
['second','segundo/a', 'ordinal'],
['third','tercer/tercero/a', 'ordinal'],
['fourth','cuarto/a', 'ordinal'],
['fifth','quinto/a', 'ordinal'],
['sixth','sexto/a', 'ordinal'],
['seventh','s'+'\u00e9'+'ptimo/a', 'ordinal'],
['eighth','octavo/a', 'ordinal'],
['ninth','noveno/a', 'ordinal'],
['tenth','d'+'\u00e9'+'cimo/a', 'ordinal']
];

var edexel_gcse_spanish_hfl_commonordinals_slicenumber = "edexel_gcse_spanish_hfl_commonordinals".length;
var edexel_gcse_spanish_hfl_commonordinals_langvalue = 2;

function edexel_gcse_spanish_hfl_commonordinals_shuffle() {
var m = edexel_gcse_spanish_hfl_commonordinals.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonordinals[m];
edexel_gcse_spanish_hfl_commonordinals[m] = edexel_gcse_spanish_hfl_commonordinals[i];
edexel_gcse_spanish_hfl_commonordinals[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonordinals");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonordinals_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonordinals){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonordinals_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonordinals" + i);
b.setAttribute("class","spanishordinal");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonordinals[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonordinals');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonordinals){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonordinals_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonordinals" + i);
b.setAttribute("class","spanishordinal");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonordinals[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonordinals');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonordinals){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonordinals_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonordinals" + i);
b.setAttribute("class","spanishordinal");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonordinals[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonordinals');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonordinals_lang(){
if (edexel_gcse_spanish_hfl_commonordinals_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonordinals').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonordinals_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonordinals[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonordinals').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonordinals_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonordinals[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonordinals_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonordinals_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonordinals_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonordinals').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonordinals_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonordinals_slicenumber));
var german = edexel_gcse_spanish_hfl_commonordinals[index][0];
var english = edexel_gcse_spanish_hfl_commonordinals[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonordinals");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonordinals_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonordinals");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}


var edexel_gcse_spanish_hfl_commonquanmes = [
['a bottle of','una botella de', 'quanme'],
['a box of','una caja de', 'quanme'],
['a dozen','una docena de', 'quanme'],
['a jar of','un tarro de', 'quanme'],
['a little of','un poco de', 'quanme'],
['a packet of','un paquete de', 'quanme'],
['a part of','una parte de', 'quanme'],
['a piece of','un pedazo de', 'quanme'],
['a quarter of','un cuarto de', 'quanme'],
['a slice of','una rebanada de', 'quanme'],
['a third of','un tercio de', 'quanme'],
['tin','lata (f)', 'quanme'],
['double, twice','doble', 'quanme'],
['enough','bastante, suficiente', 'quanme'],
['exactly','exactamente', 'quanme'],
['gramme','gramo (m)', 'quanme'],
['half of','mitad (f)', 'quanme'],
['kilogram','kilo (m)', 'quanme'],
['litre','litro (m)', 'quanme'],
['maximum','m'+'\u00e1'+'ximo', 'quanme'],
['minimum','m'+'\u00ed'+'nimo', 'quanme'],
['much/many','mucho/a/os/as', 'quanme'],
['nothing','nada', 'quanme'],
['only','solamente', 'quanme'],
['several','varios/as', 'quanme']
];

var edexel_gcse_spanish_hfl_commonquanmes_slicenumber = "edexel_gcse_spanish_hfl_commonquanmes".length;
var edexel_gcse_spanish_hfl_commonquanmes_langvalue = 2;

function edexel_gcse_spanish_hfl_commonquanmes_shuffle() {
var m = edexel_gcse_spanish_hfl_commonquanmes.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonquanmes[m];
edexel_gcse_spanish_hfl_commonquanmes[m] = edexel_gcse_spanish_hfl_commonquanmes[i];
edexel_gcse_spanish_hfl_commonquanmes[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonquanmes");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonquanmes_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonquanmes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonquanmes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonquanmes" + i);
b.setAttribute("class","spanishquanme");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonquanmes[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonquanmes');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonquanmes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonquanmes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonquanmes" + i);
b.setAttribute("class","spanishquanme");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonquanmes[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonquanmes');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonquanmes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonquanmes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonquanmes" + i);
b.setAttribute("class","spanishquanme");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonquanmes[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonquanmes');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonquanmes_lang(){
if (edexel_gcse_spanish_hfl_commonquanmes_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonquanmes').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonquanmes_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonquanmes[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonquanmes').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonquanmes_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonquanmes[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonquanmes_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonquanmes_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonquanmes_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonquanmes').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonquanmes_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonquanmes_slicenumber));
var german = edexel_gcse_spanish_hfl_commonquanmes[index][0];
var english = edexel_gcse_spanish_hfl_commonquanmes[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonquanmes");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonquanmes_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonquanmes");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonsouscowos = [
['also','tambi'+'\u00e9'+'n', 'souscowo'],
['and','y/e', 'souscowo'],
['before','antes', 'souscowo'],
['but','pero', 'souscowo'],
['first of all','lo primero (de todo)', 'souscowo'],
['nevertheless/however','sin embargo', 'souscowo'],
['or','o/u', 'souscowo'],
['so','pues', 'souscowo'],
['then/afterwards','luego, despu'+'\u00e9'+'s', 'souscowo'],
['then','entonces', 'souscowo'],
['though','aunque', 'souscowo']   
];

var edexel_gcse_spanish_hfl_commonsouscowos_slicenumber = "edexel_gcse_spanish_hfl_commonsouscowos".length;
var edexel_gcse_spanish_hfl_commonsouscowos_langvalue = 2;

function edexel_gcse_spanish_hfl_commonsouscowos_shuffle() {
var m = edexel_gcse_spanish_hfl_commonsouscowos.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonsouscowos[m];
edexel_gcse_spanish_hfl_commonsouscowos[m] = edexel_gcse_spanish_hfl_commonsouscowos[i];
edexel_gcse_spanish_hfl_commonsouscowos[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonsouscowos");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonsouscowos_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonsouscowos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonsouscowos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonsouscowos" + i);
b.setAttribute("class","spanishsouscowo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonsouscowos[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonsouscowos');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonsouscowos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonsouscowos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonsouscowos" + i);
b.setAttribute("class","spanishsouscowo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonsouscowos[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonsouscowos');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonsouscowos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonsouscowos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonsouscowos" + i);
b.setAttribute("class","spanishsouscowo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonsouscowos[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonsouscowos');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonsouscowos_lang(){
if (edexel_gcse_spanish_hfl_commonsouscowos_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonsouscowos').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonsouscowos_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonsouscowos[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonsouscowos').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonsouscowos_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonsouscowos[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonsouscowos_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonsouscowos_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonsouscowos_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonsouscowos').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonsouscowos_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonsouscowos_slicenumber));
var german = edexel_gcse_spanish_hfl_commonsouscowos[index][0];
var english = edexel_gcse_spanish_hfl_commonsouscowos[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonsouscowos");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonsouscowos_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonsouscowos");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commontiexs = [
['a fortnight','quince d'+'\u00ed'+'as, quincena (f)', 'tiex'],
['afternoon; in the afternoon','tarde (f); por la tarde', 'tiex'],
['ago','hace', 'tiex'],
['always','siempre', 'tiex'],
['at the start','al principio/al comienzo', 'tiex'],
['day','d'+'\u00ed'+'a (m)', 'tiex'],
['day after tomorrow','pasado ma'+'\u00f1'+'ana', 'tiex'],
['day before yesterday','anteayer', 'tiex'],
['early','temprano', 'tiex'],
['evening','tarde (f)', 'tiex'],
['every day','todos los d'+'\u00ed'+'as, cada d'+'\u00ed'+'a', 'tiex'],
['from','a partir de', 'tiex'],
['from time to time','de vez en cuando', 'tiex'],
['just now, straight away','ahora mismo', 'tiex'],
['last','pasado/a', 'tiex'],
['last night','anoche', 'tiex'],
['last year','a'+'\u00f1'+'o pasado', 'tiex'],
['late','tarde', 'tiex'],
['minute','minuto (m)', 'tiex'],
['morning, in the morning','ma'+'\u00f1'+'ana (f), por la ma'+'\u00f1'+'ana', 'tiex'],
['next','pr'+'\u00f3'+'ximo/siguiente', 'tiex'],
['night, at night','noche (f), por la noche', 'tiex'],
['now','ahora', 'tiex'],
['on time','puntual/a tiempo', 'tiex'],
['party','fiesta (f)', 'tiex'],
['since /from','desde', 'tiex'],
['soon','pronto/luego', 'tiex'],
['the next day','al d'+'\u00ed'+'a siguiente (m)', 'tiex'],
['today','hoy', 'tiex'],
['tomorrow','ma'+'\u00f1'+'ana', 'tiex'],
['week','semana (f)', 'tiex'],
['weekend','fin de semana (m)', 'tiex'],
['year','a'+'\u00f1'+'o (m)', 'tiex'],
['yesterday','ayer', 'tiex']  
];

var edexel_gcse_spanish_hfl_commontiexs_slicenumber = "edexel_gcse_spanish_hfl_commontiexs".length;
var edexel_gcse_spanish_hfl_commontiexs_langvalue = 2;

function edexel_gcse_spanish_hfl_commontiexs_shuffle() {
var m = edexel_gcse_spanish_hfl_commontiexs.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commontiexs[m];
edexel_gcse_spanish_hfl_commontiexs[m] = edexel_gcse_spanish_hfl_commontiexs[i];
edexel_gcse_spanish_hfl_commontiexs[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commontiexs");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commontiexs_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commontiexs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commontiexs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commontiexs" + i);
b.setAttribute("class","spanishtiex");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commontiexs[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commontiexs');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commontiexs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commontiexs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commontiexs" + i);
b.setAttribute("class","spanishtiex");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commontiexs[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commontiexs');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commontiexs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commontiexs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commontiexs" + i);
b.setAttribute("class","spanishtiex");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commontiexs[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commontiexs');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commontiexs_lang(){
if (edexel_gcse_spanish_hfl_commontiexs_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commontiexs').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commontiexs_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commontiexs[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commontiexs').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commontiexs_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commontiexs[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commontiexs_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commontiexs_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commontiexs_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commontiexs').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commontiexs_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commontiexs_slicenumber));
var german = edexel_gcse_spanish_hfl_commontiexs[index][0];
var english = edexel_gcse_spanish_hfl_commontiexs[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commontiexs");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commontiexs_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commontiexs");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commontiofdas = [
['midnight','medianoche (f)', 'tiofda'],
['noon','mediod'+'\u00ed'+'a (m)', 'tiofda'],
['at one o\'clock','a la una', 'tiofda'],
['at two o\'clock, etc.','a las dos, etc.', 'tiofda'],
['five past, etc.','y cinco, etc.', 'tiofda'],
['half past','y media', 'tiofda'],
['hour','hora (f)', 'tiofda'],
['in the evening','de la tarde', 'tiofda'],
['in the morning','de la ma'+'\u00f1'+'ana', 'tiofda'],
['it\'s one o\'clock','es la una', 'tiofda'],
['it\'s two o\'clock, etc.','son las dos, etc.', 'tiofda'],
['minute','minuto (m)', 'tiofda'],
['quarter past','y cuarto', 'tiofda'],
['quarter to','menos cuarto', 'tiofda'],
['ten to, etc.','menos diez, etc.', 'tiofda'] 
];

var edexel_gcse_spanish_hfl_commontiofdas_slicenumber = "edexel_gcse_spanish_hfl_commontiofdas".length;
var edexel_gcse_spanish_hfl_commontiofdas_langvalue = 2;

function edexel_gcse_spanish_hfl_commontiofdas_shuffle() {
var m = edexel_gcse_spanish_hfl_commontiofdas.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commontiofdas[m];
edexel_gcse_spanish_hfl_commontiofdas[m] = edexel_gcse_spanish_hfl_commontiofdas[i];
edexel_gcse_spanish_hfl_commontiofdas[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commontiofdas");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commontiofdas_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commontiofdas){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commontiofdas_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commontiofdas" + i);
b.setAttribute("class","spanishtiofda");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commontiofdas[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commontiofdas');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commontiofdas){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commontiofdas_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commontiofdas" + i);
b.setAttribute("class","spanishtiofda");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commontiofdas[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commontiofdas');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commontiofdas){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commontiofdas_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commontiofdas" + i);
b.setAttribute("class","spanishtiofda");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commontiofdas[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commontiofdas');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commontiofdas_lang(){
if (edexel_gcse_spanish_hfl_commontiofdas_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commontiofdas').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commontiofdas_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commontiofdas[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commontiofdas').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commontiofdas_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commontiofdas[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commontiofdas_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commontiofdas_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commontiofdas_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commontiofdas').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commontiofdas_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commontiofdas_slicenumber));
var german = edexel_gcse_spanish_hfl_commontiofdas[index][0];
var english = edexel_gcse_spanish_hfl_commontiofdas[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commontiofdas");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commontiofdas_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commontiofdas");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commondaofthwes = [
['Monday','lunes', 'daofthwe'],
['Tuesday','martes', 'daofthwe'],
['Wednesday','mi'+'\u00e9'+'rcoles', 'daofthwe'],
['Thursday','jueves', 'daofthwe'],
['Friday','viernes', 'daofthwe'],
['Saturday','s'+'\u00e1'+'bado', 'daofthwe'],
['Sunday','domingo', 'daofthwe'],
['(on) Monday','(el) lunes', 'daofthwe'],
['(on) Monday morning','(el) lunes por la ma'+'\u00f1'+'ana', 'daofthwe'],
['(on) Monday evening','(el) lunes por la tarde', 'daofthwe'],
['on Mondays','los lunes', 'daofthwe'],
['every Monday','cada lunes', 'daofthwe']
];

var edexel_gcse_spanish_hfl_commondaofthwes_slicenumber = "edexel_gcse_spanish_hfl_commondaofthwes".length;
var edexel_gcse_spanish_hfl_commondaofthwes_langvalue = 2;

function edexel_gcse_spanish_hfl_commondaofthwes_shuffle() {
var m = edexel_gcse_spanish_hfl_commondaofthwes.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commondaofthwes[m];
edexel_gcse_spanish_hfl_commondaofthwes[m] = edexel_gcse_spanish_hfl_commondaofthwes[i];
edexel_gcse_spanish_hfl_commondaofthwes[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commondaofthwes");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commondaofthwes_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commondaofthwes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commondaofthwes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commondaofthwes" + i);
b.setAttribute("class","spanishdaofthwe");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commondaofthwes[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commondaofthwes');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commondaofthwes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commondaofthwes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commondaofthwes" + i);
b.setAttribute("class","spanishdaofthwe");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commondaofthwes[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commondaofthwes');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commondaofthwes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commondaofthwes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commondaofthwes" + i);
b.setAttribute("class","spanishdaofthwe");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commondaofthwes[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commondaofthwes');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commondaofthwes_lang(){
if (edexel_gcse_spanish_hfl_commondaofthwes_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commondaofthwes').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commondaofthwes_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commondaofthwes[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commondaofthwes').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commondaofthwes_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commondaofthwes[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commondaofthwes_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commondaofthwes_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commondaofthwes_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commondaofthwes').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commondaofthwes_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commondaofthwes_slicenumber));
var german = edexel_gcse_spanish_hfl_commondaofthwes[index][0];
var english = edexel_gcse_spanish_hfl_commondaofthwes[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commondaofthwes");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commondaofthwes_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commondaofthwes");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonmoanseofthyes = [
['month','mes (m)', 'moanseofthye'],
['January','enero', 'moanseofthye'],
['February','febrero', 'moanseofthye'],
['March','marzo', 'moanseofthye'],
['April','abril', 'moanseofthye'],
['May','mayo', 'moanseofthye'],
['June','junio', 'moanseofthye'],
['July','julio', 'moanseofthye'],
['August','agosto', 'moanseofthye'],
['September','septiembre/setiembre', 'moanseofthye'],
['October','octubre', 'moanseofthye'],
['November','noviembre', 'moanseofthye'],
['December','diciembre', 'moanseofthye'],
['spring','primavera (f)', 'moanseofthye'],
['summer','verano (m)', 'moanseofthye'],
['autumn','oto'+'\u00f1'+'o (m)', 'moanseofthye'],
['winter','invierno (m)', 'moanseofthye'],
['season','estaci'+'\u00f3'+'n (f)', 'moanseofthye'],
['(in) autumn','(en) oto'+'\u00f1'+'o', 'moanseofthye'],
['(in) spring','(en) primavera', 'moanseofthye'],
['(in) summer','(en) verano', 'moanseofthye'],
['(in) winter','(en) invierno', 'moanseofthye']
];

var edexel_gcse_spanish_hfl_commonmoanseofthyes_slicenumber = "edexel_gcse_spanish_hfl_commonmoanseofthyes".length;
var edexel_gcse_spanish_hfl_commonmoanseofthyes_langvalue = 2;

function edexel_gcse_spanish_hfl_commonmoanseofthyes_shuffle() {
var m = edexel_gcse_spanish_hfl_commonmoanseofthyes.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonmoanseofthyes[m];
edexel_gcse_spanish_hfl_commonmoanseofthyes[m] = edexel_gcse_spanish_hfl_commonmoanseofthyes[i];
edexel_gcse_spanish_hfl_commonmoanseofthyes[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonmoanseofthyes");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonmoanseofthyes_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonmoanseofthyes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonmoanseofthyes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonmoanseofthyes" + i);
b.setAttribute("class","spanishmoanseofthye");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonmoanseofthyes[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonmoanseofthyes');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonmoanseofthyes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonmoanseofthyes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonmoanseofthyes" + i);
b.setAttribute("class","spanishmoanseofthye");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonmoanseofthyes[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonmoanseofthyes');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonmoanseofthyes){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonmoanseofthyes_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonmoanseofthyes" + i);
b.setAttribute("class","spanishmoanseofthye");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonmoanseofthyes[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonmoanseofthyes');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonmoanseofthyes_lang(){
if (edexel_gcse_spanish_hfl_commonmoanseofthyes_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonmoanseofthyes').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonmoanseofthyes_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonmoanseofthyes[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonmoanseofthyes').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonmoanseofthyes_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonmoanseofthyes[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonmoanseofthyes_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonmoanseofthyes_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonmoanseofthyes_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonmoanseofthyes').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonmoanseofthyes_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonmoanseofthyes_slicenumber));
var german = edexel_gcse_spanish_hfl_commonmoanseofthyes[index][0];
var english = edexel_gcse_spanish_hfl_commonmoanseofthyes[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonmoanseofthyes");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonmoanseofthyes_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonmoanseofthyes");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonquwos = [
['How much?/How many?','\u00bf'+'Cu'+'\u00e1'+'nto/Cu'+'\u00e1'+'ntos/as?', 'quwo'],
['How?','\u00bf'+'C'+'\u00f3'+'mo?', 'quwo'],
['What for?','\u00bf'+'Para qu'+'\u00e9'+'?', 'quwo'],
['What?','\u00bf'+'Qu'+'\u00e9'+'?', 'quwo'],
['When?','\u00bf'+'Cu'+'\u00e1'+'ndo?', 'quwo'],
['Where?','\u00bf'+'D'+'\u00f3'+'nde?', 'quwo'],
['Where to?','\u00bf'+'Ad'+'\u00f3'+'nde?', 'quwo'],
['Which?','\u00bf'+'Cu'+'\u00e1'+'l?', 'quwo'],
['Who?','\u00bf'+'Qui'+'\u00e9'+'n?', 'quwo'],
['Why?','\u00bf'+'Por qu'+'\u00e9'+'?', 'quwo']
];

var edexel_gcse_spanish_hfl_commonquwos_slicenumber = "edexel_gcse_spanish_hfl_commonquwos".length;
var edexel_gcse_spanish_hfl_commonquwos_langvalue = 2;

function edexel_gcse_spanish_hfl_commonquwos_shuffle() {
var m = edexel_gcse_spanish_hfl_commonquwos.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonquwos[m];
edexel_gcse_spanish_hfl_commonquwos[m] = edexel_gcse_spanish_hfl_commonquwos[i];
edexel_gcse_spanish_hfl_commonquwos[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonquwos");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonquwos_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonquwos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonquwos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonquwos" + i);
b.setAttribute("class","spanishquwo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonquwos[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonquwos');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonquwos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonquwos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonquwos" + i);
b.setAttribute("class","spanishquwo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonquwos[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonquwos');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonquwos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonquwos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonquwos" + i);
b.setAttribute("class","spanishquwo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonquwos[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonquwos');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonquwos_lang(){
if (edexel_gcse_spanish_hfl_commonquwos_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonquwos').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonquwos_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonquwos[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonquwos').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonquwos_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonquwos[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonquwos_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonquwos_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonquwos_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonquwos').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonquwos_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonquwos_slicenumber));
var german = edexel_gcse_spanish_hfl_commonquwos[index][0];
var english = edexel_gcse_spanish_hfl_commonquwos[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonquwos");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonquwos_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonquwos");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonotusexs = [
['all the better','todo lo mejor', 'otusex'],
['good luck','buena suerte', 'otusex'],
['here you are','aqu'+'\u00ed'+' lo tienes', 'otusex'],
['How do you spell that?','\u00bf'+'C'+'\u00f3'+'mo se escribe?', 'otusex'],
['I don\'t mind','me da igual', 'otusex'],
['I\'m fine','estoy bien', 'otusex'],
['I\'ve had enough','he tenido bastante', 'otusex'],
['in my opinion','en mi opini'+'\u00f3'+'n', 'otusex'],
['it depends','depende', 'otusex'],
['it doesn\'t matter','no importa nada, no importa', 'otusex'],
['mine','m'+'\u00ed'+'o/a', 'otusex'],
['of course','por supuesto', 'otusex'],
['OK (I agree)','de acuerdo', 'otusex'],
['once again','otra vez', 'otusex'],
['there you are','ten (informal); tenga (formal)', 'otusex'],
['thank you','gracias', 'otusex'],
['too bad','demasiado mal', 'otusex'],
['usually','normalmente, usualmente', 'otusex'],
['what a shame','qu'+'\u00e9'+' l'+'\u00e1'+'stima, qu'+'\u00e9'+' pena', 'otusex'],
['with pleasure','con (mucho) gusto/placer', 'otusex']
];

var edexel_gcse_spanish_hfl_commonotusexs_slicenumber = "edexel_gcse_spanish_hfl_commonotusexs".length;
var edexel_gcse_spanish_hfl_commonotusexs_langvalue = 2;

function edexel_gcse_spanish_hfl_commonotusexs_shuffle() {
var m = edexel_gcse_spanish_hfl_commonotusexs.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonotusexs[m];
edexel_gcse_spanish_hfl_commonotusexs[m] = edexel_gcse_spanish_hfl_commonotusexs[i];
edexel_gcse_spanish_hfl_commonotusexs[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonotusexs");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonotusexs_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonotusexs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonotusexs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonotusexs" + i);
b.setAttribute("class","spanishotusex");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonotusexs[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonotusexs');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonotusexs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonotusexs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonotusexs" + i);
b.setAttribute("class","spanishotusex");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonotusexs[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonotusexs');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonotusexs){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonotusexs_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonotusexs" + i);
b.setAttribute("class","spanishotusex");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonotusexs[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonotusexs');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonotusexs_lang(){
if (edexel_gcse_spanish_hfl_commonotusexs_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonotusexs').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonotusexs_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonotusexs[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonotusexs').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonotusexs_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonotusexs[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonotusexs_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonotusexs_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonotusexs_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonotusexs').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonotusexs_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonotusexs_slicenumber));
var german = edexel_gcse_spanish_hfl_commonotusexs[index][0];
var english = edexel_gcse_spanish_hfl_commonotusexs[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonotusexs");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonotusexs_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonotusexs");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonothifrwos = [
['as, like','como', 'othifrwo'],
['everybody','todo el mundo, todos', 'othifrwo'],
['figure','cifra (f)', 'othifrwo'],
['for example','por ejemplo', 'othifrwo'],
['if','si', 'othifrwo'],
['middle/half','medio (m), mitad (f)', 'othifrwo'],
['Miss','se'+'\u00f1'+'orita', 'othifrwo'],
['Mr','se'+'\u00f1'+'or', 'othifrwo'],
['Mrs','se'+'\u00f1'+'ora', 'othifrwo'],
['no','no', 'othifrwo'],
['number','n'+'\u00fa'+'mero (m)', 'othifrwo'],
['shape','forma (f)', 'othifrwo'],
['someone','alguien', 'othifrwo'],
['something','algo', 'othifrwo'],
['that/those','eso/a/os/as', 'othifrwo'],
['thing','cosa (f)', 'othifrwo'],
['this/these','esto/a/os/as', 'othifrwo'],
['time','vez (f)', 'othifrwo'],
['type/kind/sort','g'+'\u00e9'+'nero, tipo (m)', 'othifrwo'],
['way','forma, manera (f)', 'othifrwo'],
['yes','s'+'\u00ed', 'othifrwo']
];

var edexel_gcse_spanish_hfl_commonothifrwos_slicenumber = "edexel_gcse_spanish_hfl_commonothifrwos".length;
var edexel_gcse_spanish_hfl_commonothifrwos_langvalue = 2;

function edexel_gcse_spanish_hfl_commonothifrwos_shuffle() {
var m = edexel_gcse_spanish_hfl_commonothifrwos.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonothifrwos[m];
edexel_gcse_spanish_hfl_commonothifrwos[m] = edexel_gcse_spanish_hfl_commonothifrwos[i];
edexel_gcse_spanish_hfl_commonothifrwos[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonothifrwos");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonothifrwos_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonothifrwos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonothifrwos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonothifrwos" + i);
b.setAttribute("class","spanishothifrwo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonothifrwos[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonothifrwos');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonothifrwos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonothifrwos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonothifrwos" + i);
b.setAttribute("class","spanishothifrwo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonothifrwos[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonothifrwos');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonothifrwos){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonothifrwos_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonothifrwos" + i);
b.setAttribute("class","spanishothifrwo");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonothifrwos[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonothifrwos');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonothifrwos_lang(){
if (edexel_gcse_spanish_hfl_commonothifrwos_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonothifrwos').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonothifrwos_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonothifrwos[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonothifrwos').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonothifrwos_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonothifrwos[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonothifrwos_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonothifrwos_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonothifrwos_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonothifrwos').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonothifrwos_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonothifrwos_slicenumber));
var german = edexel_gcse_spanish_hfl_commonothifrwos[index][0];
var english = edexel_gcse_spanish_hfl_commonothifrwos[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonothifrwos");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonothifrwos_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonothifrwos");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commoncountriess = [
['Argentina','Argentina (f)', 'countries'],
['Austria','Austria (f)', 'countries'],
['Belgium','B'+'\u00e9'+'lgica (f)', 'countries'],
['Brazil','Brasil (m)', 'countries'],
['Denmark','Dinamarca (f)', 'countries'],
['England','Inglaterra (f)', 'countries'],
['France','Francia (f)', 'countries'],
['Germany','Alemania (f)', 'countries'],
['Great Britain','Gran Breta'+'\u00f1'+'a (f)', 'countries'],
['Greece','Grecia (f)', 'countries'],
['Holland','Holanda (f)', 'countries'],
['India','India (f)', 'countries'],
['Ireland','Irlanda (f)', 'countries'],
['Italy','Italia (f)', 'countries'],
['Mexico','M'+'\u00e9'+'xico (m)', 'countries'],
['Netherlands','Pa'+'\u00ed'+'ses Bajos (mpl)', 'countries'],
['Pakistan','Pakist'+'\u00e1'+'n (m)', 'countries'],
['Peru','Per'+'\u00fa'+' (m)', 'countries'],
['Russia','Rusia (f)', 'countries'],
['Scotland','Escocia (f)', 'countries'],
['Spain','Espa'+'\u00f1'+'a (f)', 'countries'],
['Sweden','Suecia (f)', 'countries'],
['Turkey','Turqu'+'\u00ed'+'a (f)', 'countries'],
['Switzerland','Suiza (f)', 'countries'],
['United Kingdom','Reino Unido (m)', 'countries'],
['United States','Estados Unidos (mpl)', 'countries'],
['Wales','Pa'+'\u00ed'+'s de Gales (m)', 'countries']
];

var edexel_gcse_spanish_hfl_commoncountriess_slicenumber = "edexel_gcse_spanish_hfl_commoncountriess".length;
var edexel_gcse_spanish_hfl_commoncountriess_langvalue = 2;

function edexel_gcse_spanish_hfl_commoncountriess_shuffle() {
var m = edexel_gcse_spanish_hfl_commoncountriess.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commoncountriess[m];
edexel_gcse_spanish_hfl_commoncountriess[m] = edexel_gcse_spanish_hfl_commoncountriess[i];
edexel_gcse_spanish_hfl_commoncountriess[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commoncountriess");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commoncountriess_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commoncountriess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncountriess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncountriess" + i);
b.setAttribute("class","spanishcountries");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncountriess[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncountriess');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commoncountriess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncountriess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncountriess" + i);
b.setAttribute("class","spanishcountries");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncountriess[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncountriess');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commoncountriess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncountriess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncountriess" + i);
b.setAttribute("class","spanishcountries");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncountriess[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncountriess');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commoncountriess_lang(){
if (edexel_gcse_spanish_hfl_commoncountriess_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commoncountriess').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncountriess_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commoncountriess[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commoncountriess').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncountriess_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commoncountriess[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncountriess_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commoncountriess_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commoncountriess_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commoncountriess').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commoncountriess_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncountriess_slicenumber));
var german = edexel_gcse_spanish_hfl_commoncountriess[index][0];
var english = edexel_gcse_spanish_hfl_commoncountriess[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commoncountriess");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commoncountriess_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commoncountriess");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commoncontinentss = [
['Africa','\u00c1'+'frica (f)', 'continents'],
['Asia','Asia (f)', 'continents'],
['Australia','Australia (f)', 'continents'],
['Europe','Europa (f)', 'continents'],
['North America','Am'+'\u00e9'+'rica del Norte (f), Norteam'+'\u00e9'+'rica (f)', 'continents'],
['South America','Am'+'\u00e9'+'rica del Sur (f), Sudam'+'\u00e9'+'rica (f)', 'continents'],
['Latin America','Am'+'\u00e9'+'rica Latina (f), Latinoam'+'\u00e9'+'rica (f)', 'continents']
];

var edexel_gcse_spanish_hfl_commoncontinentss_slicenumber = "edexel_gcse_spanish_hfl_commoncontinentss".length;
var edexel_gcse_spanish_hfl_commoncontinentss_langvalue = 2;

function edexel_gcse_spanish_hfl_commoncontinentss_shuffle() {
var m = edexel_gcse_spanish_hfl_commoncontinentss.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commoncontinentss[m];
edexel_gcse_spanish_hfl_commoncontinentss[m] = edexel_gcse_spanish_hfl_commoncontinentss[i];
edexel_gcse_spanish_hfl_commoncontinentss[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commoncontinentss");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commoncontinentss_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commoncontinentss){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncontinentss_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncontinentss" + i);
b.setAttribute("class","spanishcontinents");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncontinentss[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncontinentss');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commoncontinentss){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncontinentss_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncontinentss" + i);
b.setAttribute("class","spanishcontinents");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncontinentss[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncontinentss');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commoncontinentss){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commoncontinentss_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commoncontinentss" + i);
b.setAttribute("class","spanishcontinents");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commoncontinentss[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncontinentss');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commoncontinentss_lang(){
if (edexel_gcse_spanish_hfl_commoncontinentss_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commoncontinentss').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncontinentss_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commoncontinentss[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commoncontinentss').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncontinentss_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commoncontinentss[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commoncontinentss_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commoncontinentss_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commoncontinentss_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commoncontinentss').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commoncontinentss_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commoncontinentss_slicenumber));
var german = edexel_gcse_spanish_hfl_commoncontinentss[index][0];
var english = edexel_gcse_spanish_hfl_commoncontinentss[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commoncontinentss");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commoncontinentss_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commoncontinentss");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonnationalitiess = [
['American','americano/a', 'nationalities'],
['Argentinian','argentino/a', 'nationalities'],
['Austrian','austriaco/a', 'nationalities'],
['Belgian','belga', 'nationalities'],
['Bolivian','boliviano/a', 'nationalities'],
['Brazilian','brasile'+'\u00f1'+'o/a', 'nationalities'],
['British','brit'+'\u00e1'+'nico/a', 'nationalities'],
['Chilean','chileno/a', 'nationalities'],
['Colombian','colombiano/a', 'nationalities'],
['Danish','dan'+'\u00e9'+'s/a', 'nationalities'],
['Dutch','holand'+'\u00e9'+'s/a', 'nationalities'],
['Ecuadorean','ecuatoriano/a', 'nationalities'],
['English','ingl'+'\u00e9'+'s/a', 'nationalities'],
['European','europeo/a', 'nationalities'],
['French','franc'+'\u00e9'+'s/a', 'nationalities'],
['German','alem'+'\u00e1'+'n/a', 'nationalities'],
['Greek','griego/a', 'nationalities'],
['Irish','irland'+'\u00e9'+'s/a', 'nationalities'],
['Indian','indio/a', 'nationalities'],
['Italian','italiano/a', 'nationalities'],
['Mexican','mexicano/a', 'nationalities'],
['Pakistani','pakistan'+'\u00ed', 'nationalities'],
['Peruvian','peruano/a', 'nationalities'],
['Russian','ruso/a', 'nationalities'],

['Scottish','escoc'+'\u00e9'+'s/a', 'nationalities'],
['Spanish','espa'+'\u00f1'+'ol/a', 'nationalities'],
['Swedish','sueco/a', 'nationalities'],
['Swiss','suizo/a', 'nationalities'],
['Turkish','turco/a', 'nationalities'],
['Venezuelan','venezolano/a', 'nationalities'],
['Welsh','gal'+'\u00e9'+'s/a', 'nationalities']
];

var edexel_gcse_spanish_hfl_commonnationalitiess_slicenumber = "edexel_gcse_spanish_hfl_commonnationalitiess".length;
var edexel_gcse_spanish_hfl_commonnationalitiess_langvalue = 2;

function edexel_gcse_spanish_hfl_commonnationalitiess_shuffle() {
var m = edexel_gcse_spanish_hfl_commonnationalitiess.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonnationalitiess[m];
edexel_gcse_spanish_hfl_commonnationalitiess[m] = edexel_gcse_spanish_hfl_commonnationalitiess[i];
edexel_gcse_spanish_hfl_commonnationalitiess[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonnationalitiess");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonnationalitiess_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonnationalitiess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonnationalitiess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonnationalitiess" + i);
b.setAttribute("class","spanishnationalities");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonnationalitiess[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonnationalitiess');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonnationalitiess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonnationalitiess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonnationalitiess" + i);
b.setAttribute("class","spanishnationalities");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonnationalitiess[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonnationalitiess');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonnationalitiess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonnationalitiess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonnationalitiess" + i);
b.setAttribute("class","spanishnationalities");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonnationalitiess[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonnationalitiess');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonnationalitiess_lang(){
if (edexel_gcse_spanish_hfl_commonnationalitiess_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonnationalitiess').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonnationalitiess_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonnationalitiess[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonnationalitiess').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonnationalitiess_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonnationalitiess[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonnationalitiess_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonnationalitiess_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonnationalitiess_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonnationalitiess').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonnationalitiess_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonnationalitiess_slicenumber));
var german = edexel_gcse_spanish_hfl_commonnationalitiess[index][0];
var english = edexel_gcse_spanish_hfl_commonnationalitiess[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonnationalitiess");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonnationalitiess_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonnationalitiess");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonarmoses = [
['Andalusia','Andaluc'+'\u00ed'+'a', 'armose'],
['Aragon','Arag'+'\u00f3'+'n', 'armose'],
['Atlantic Ocean','Oc'+'\u00e9'+'ano Atl'+'\u00e1'+'ntico, el', 'armose'],
['Autonomous Communities','Comunidades aut'+'\u00f3'+'nomas (fpl)', 'armose'],
['Basque Country','Pa'+'\u00ed'+'s Vasco', 'armose'],
['Cantabrian Sea','Mar Cant'+'\u00e1'+'brico, el', 'armose'],
['Castile','Castilla', 'armose'],
['Catalonia','Catalu'+'\u00f1'+'a', 'armose'],
['Galicia','Galicia', 'armose'],
['Mediterranean Sea','Mar Mediterr'+'\u00e1'+'neo,', 'armose'],
['Rioja','Rioja, La', 'armose'],
['the English Channel','Canal de la Mancha, el', 'armose'],
['the Pyrenees','Pirineos, Los', 'armose']
];

var edexel_gcse_spanish_hfl_commonarmoses_slicenumber = "edexel_gcse_spanish_hfl_commonarmoses".length;
var edexel_gcse_spanish_hfl_commonarmoses_langvalue = 2;

function edexel_gcse_spanish_hfl_commonarmoses_shuffle() {
var m = edexel_gcse_spanish_hfl_commonarmoses.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonarmoses[m];
edexel_gcse_spanish_hfl_commonarmoses[m] = edexel_gcse_spanish_hfl_commonarmoses[i];
edexel_gcse_spanish_hfl_commonarmoses[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonarmoses");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonarmoses_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonarmoses){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonarmoses_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonarmoses" + i);
b.setAttribute("class","spanisharmose");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonarmoses[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonarmoses');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonarmoses){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonarmoses_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonarmoses" + i);
b.setAttribute("class","spanisharmose");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonarmoses[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonarmoses');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonarmoses){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonarmoses_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonarmoses" + i);
b.setAttribute("class","spanisharmose");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonarmoses[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonarmoses');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonarmoses_lang(){
if (edexel_gcse_spanish_hfl_commonarmoses_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonarmoses').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonarmoses_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonarmoses[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonarmoses').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonarmoses_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonarmoses[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonarmoses_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonarmoses_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonarmoses_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonarmoses').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonarmoses_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonarmoses_slicenumber));
var german = edexel_gcse_spanish_hfl_commonarmoses[index][0];
var english = edexel_gcse_spanish_hfl_commonarmoses[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonarmoses");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonarmoses_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonarmoses");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonusacros = [
['European Union','UE', 'usacros'],
['fast train service','TALGO', 'usacros'],
['high speed train','AVE', 'usacros'],
['ID card','DNI (documento nacional de identidad)', 'usacros'],
['secondary education','ESO (Educaci'+'\u00f3'+'n Secundaria Obligatoria)', 'usacros'],
['secondary school','CES (Colegio de Ense'+'\u00f1'+'anza Secundaria)', 'usacros'],
['Spanish national railway company','RENFE', 'usacros'],
['Spanish public radio channel','RNE', 'usacros'],
['Spanish public TV and radio channel','RTVE', 'usacros'],
['USA','EE. UU.', 'usacros']
];

var edexel_gcse_spanish_hfl_commonusacros_slicenumber = "edexel_gcse_spanish_hfl_commonusacros".length;
var edexel_gcse_spanish_hfl_commonusacros_langvalue = 2;

function edexel_gcse_spanish_hfl_commonusacros_shuffle() {
var m = edexel_gcse_spanish_hfl_commonusacros.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonusacros[m];
edexel_gcse_spanish_hfl_commonusacros[m] = edexel_gcse_spanish_hfl_commonusacros[i];
edexel_gcse_spanish_hfl_commonusacros[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonusacros");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonusacros_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonusacros){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonusacros_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonusacros" + i);
b.setAttribute("class","spanishusacro");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonusacros[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonusacros');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonusacros){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonusacros_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonusacros" + i);
b.setAttribute("class","spanishusacro");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonusacros[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonusacros');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonusacros){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonusacros_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonusacros" + i);
b.setAttribute("class","spanishusacro");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonusacros[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonusacros');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonusacros_lang(){
if (edexel_gcse_spanish_hfl_commonusacros_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonusacros').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonusacros_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonusacros[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonusacros').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonusacros_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonusacros[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonusacros_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonusacros_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonusacros_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonusacros').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonusacros_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonusacros_slicenumber));
var german = edexel_gcse_spanish_hfl_commonusacros[index][0];
var english = edexel_gcse_spanish_hfl_commonusacros[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonusacros");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonusacros_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonusacros");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonsocialconvens = [
['best wishes','saludos', 'socialconven'],
['enjoy yourself/selves; have a good time','\u00a1'+'que te diviertas!/'+'\u00a1'+'que lo pases bien!','socialconven'],
['good evening','buenas tardes', 'socialconven'],
['goodbye','adi'+'\u00f3'+'s', 'socialconven'],
['goodnight','buenas noches', 'socialconven'],
['hello (on the telephone)','\u00bf'+'diga?', 'socialconven'],
['hello, good day','hola, buenos d'+'\u00ed'+'as', 'socialconven'],
['help!','\u00a1'+'Socorro!', 'socialconven'],
['hi','hola', 'socialconven'],
['please (request)/please (polite)','por favor', 'socialconven'],
['see you later','hasta luego', 'socialconven'],
['see you soon','hasta pronto', 'socialconven'],
['see you tomorrow','hasta ma'+'\u00f1'+'ana', 'socialconven'],
['thank you','gracias', 'socialconven'],
['thank you very much','muchas gracias', 'socialconven']
];

var edexel_gcse_spanish_hfl_commonsocialconvens_slicenumber = "edexel_gcse_spanish_hfl_commonsocialconvens".length;
var edexel_gcse_spanish_hfl_commonsocialconvens_langvalue = 2;

function edexel_gcse_spanish_hfl_commonsocialconvens_shuffle() {
var m = edexel_gcse_spanish_hfl_commonsocialconvens.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonsocialconvens[m];
edexel_gcse_spanish_hfl_commonsocialconvens[m] = edexel_gcse_spanish_hfl_commonsocialconvens[i];
edexel_gcse_spanish_hfl_commonsocialconvens[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonsocialconvens");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonsocialconvens_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonsocialconvens){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonsocialconvens_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonsocialconvens" + i);
b.setAttribute("class","spanishsocialconven");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonsocialconvens[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonsocialconvens');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonsocialconvens){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonsocialconvens_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonsocialconvens" + i);
b.setAttribute("class","spanishsocialconven");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonsocialconvens[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonsocialconvens');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonsocialconvens){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonsocialconvens_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonsocialconvens" + i);
b.setAttribute("class","spanishsocialconven");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonsocialconvens[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonsocialconvens');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonsocialconvens_lang(){
if (edexel_gcse_spanish_hfl_commonsocialconvens_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonsocialconvens').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonsocialconvens_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonsocialconvens[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonsocialconvens').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonsocialconvens_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonsocialconvens[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonsocialconvens_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonsocialconvens_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonsocialconvens_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonsocialconvens').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonsocialconvens_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonsocialconvens_slicenumber));
var german = edexel_gcse_spanish_hfl_commonsocialconvens[index][0];
var english = edexel_gcse_spanish_hfl_commonsocialconvens[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonsocialconvens");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonsocialconvens_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonsocialconvens");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

var edexel_gcse_spanish_hfl_commonlausindianmess = [
['area code','prefijo (m)', 'lausindianmes'],
['at the moment','de momento', 'lausindianmes'],
['call me (informal/formal)','ll'+'\u00e1'+'mame/ll'+'\u00e1'+'meme', 'lausindianmes'],
['dial the number','marcar el n'+'\u00fa'+'mero', 'lausindianmes'],
['for the attention of','a la atenci'+'\u00f3'+'n de', 'lausindianmes'],
['further to/following','con relaci'+'\u00f3'+'n a', 'lausindianmes'],
['I will put you through','le paso', 'lausindianmes'],
['I\'ll be right back','vuelvo enseguida', 'lausindianmes'],
['I\'m listening','escucho; d'+'\u00ed'+'game', 'lausindianmes'],
['in communication with','en contacto con', 'lausindianmes'],
['in fact','de hecho', 'lausindianmes'],
['moment','momento (m)', 'lausindianmes'],
['on the line/speaking','en la l'+'\u00ed'+'nea, hablando', 'lausindianmes'],
['receiver (telephone)','auricular (m)', 'lausindianmes'],
['sent by','enviado por', 'lausindianmes'],
['stay on the line','no cuelgue', 'lausindianmes'],
['telephone','tel'+'\u00e9'+'fono (m)', 'lausindianmes'],
['telephone book','gu'+'\u00ed'+'a de tel'+'\u00e9'+'fonos (f)', 'lausindianmes'],
['text','texto (m)', 'lausindianmes'],
['text message','mensaje (de texto)', 'lausindianmes'],
['tone','timbre/tono (m)', 'lausindianmes'],
['voice mail','mensaje en el contestador (m)', 'lausindianmes'],
['wait','espere', 'lausindianmes'],
['wrong number','n'+'\u00fa'+'mero equivocado (m)', 'lausindianmes']
];

var edexel_gcse_spanish_hfl_commonlausindianmess_slicenumber = "edexel_gcse_spanish_hfl_commonlausindianmess".length;
var edexel_gcse_spanish_hfl_commonlausindianmess_langvalue = 2;

function edexel_gcse_spanish_hfl_commonlausindianmess_shuffle() {
var m = edexel_gcse_spanish_hfl_commonlausindianmess.length, t, i;
while (m) {
i = Math.floor(Math.random() * m--);
t = edexel_gcse_spanish_hfl_commonlausindianmess[m];
edexel_gcse_spanish_hfl_commonlausindianmess[m] = edexel_gcse_spanish_hfl_commonlausindianmess[i];
edexel_gcse_spanish_hfl_commonlausindianmess[i] = t;
}

var myNode = document.getElementById("edexel_gcse_spanish_hfl_commonlausindianmess");
myNode.style.height = "auto";
while (myNode.firstChild) {myNode.removeChild(myNode.firstChild);}

if (edexel_gcse_spanish_hfl_commonlausindianmess_langvalue  % 2 === 0){
for (i in edexel_gcse_spanish_hfl_commonlausindianmess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonlausindianmess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonlausindianmess" + i);
b.setAttribute("class","spanishlausindianmes");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonlausindianmess[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonlausindianmess');
wrapper.appendChild(b);
};
}
else{
for (i in edexel_gcse_spanish_hfl_commonlausindianmess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonlausindianmess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonlausindianmess" + i);
b.setAttribute("class","spanishlausindianmes");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonlausindianmess[i][0]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonlausindianmess');
wrapper.appendChild(b);
};}
}


for (i in edexel_gcse_spanish_hfl_commonlausindianmess){
var b = document.createElement('button');
b.setAttribute("onclick", 'edexel_gcse_spanish_hfl_commonlausindianmess_click(event, this)');
b.setAttribute('id', "edexel_gcse_spanish_hfl_commonlausindianmess" + i);
b.setAttribute("class","spanishlausindianmes");
b.appendChild(document.createTextNode(edexel_gcse_spanish_hfl_commonlausindianmess[i][1]));
var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonlausindianmess');
wrapper.appendChild(b);
};


function edexel_gcse_spanish_hfl_commonlausindianmess_lang(){
if (edexel_gcse_spanish_hfl_commonlausindianmess_langvalue  % 2 === 0){
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonlausindianmess').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonlausindianmess_slicenumber));
children[i].innerText = edexel_gcse_spanish_hfl_commonlausindianmess[index][0];}
}
else{
var children = [].slice.call(document.getElementById('edexel_gcse_spanish_hfl_commonlausindianmess').getElementsByTagName('*'),0);
for (i = 0; i<children.length; i++){
var char = children[i].id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonlausindianmess_slicenumber));
children[i].innerText= edexel_gcse_spanish_hfl_commonlausindianmess[index][1];}
}

var wrapper = document.getElementById('edexel_gcse_spanish_hfl_commonlausindianmess_lang');
if (wrapper.getAttribute('src')=="spanish.png") {
wrapper.src = "english.png";
edexel_gcse_spanish_hfl_commonlausindianmess_langvalue = 1;
}
else {
wrapper.src = "spanish.png";
edexel_gcse_spanish_hfl_commonlausindianmess_langvalue = 2;}

document.getElementById('edexel_gcse_spanish_hfl_commonlausindianmess').style.height = "auto";
}


function edexel_gcse_spanish_hfl_commonlausindianmess_click(event, el) {
var char = el.id;
var index = parseInt(char.slice(edexel_gcse_spanish_hfl_commonlausindianmess_slicenumber));
var german = edexel_gcse_spanish_hfl_commonlausindianmess[index][0];
var english = edexel_gcse_spanish_hfl_commonlausindianmess[index][1];
if(event.ctrlKey) {document.getElementById(char).remove();}
else {
if (document.getElementById(char).innerText == german) 
{document.getElementById(char).innerText = english;}
else 
{document.getElementById(char).innerText = german;}
}
var x = document.getElementById("edexel_gcse_spanish_hfl_commonlausindianmess");
x.style.height = "auto";
}

function edexel_gcse_spanish_hfl_commonlausindianmess_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_commonlausindianmess");
if (x.style.height) {x.style.height = null;} 
else {
x.style.height = x.scrollHeight + "px";}
}

function edexel_gcse_spanish_hfl_open() {
var x = document.getElementById("edexel_gcse_spanish_hfl_contents");
if (x.style.display === "none") {x.style.display = "block";} 
else {x.style.display = "none";}
}

var massivelist = edexel_gcse_spanish_hfl_commonverbs.concat(edexel_gcse_spanish_hfl_commoncontinentss,edexel_gcse_spanish_hfl_commonadjectives,edexel_gcse_spanish_hfl_commonadverbs,edexel_gcse_spanish_hfl_commonprepositions,edexel_gcse_spanish_hfl_commoncolors,edexel_gcse_spanish_hfl_commonnumbers,edexel_gcse_spanish_hfl_commonordinals,edexel_gcse_spanish_hfl_commonquanmes,edexel_gcse_spanish_hfl_commonsouscowos,edexel_gcse_spanish_hfl_commontiexs,edexel_gcse_spanish_hfl_commontiofdas,edexel_gcse_spanish_hfl_commondaofthwes,edexel_gcse_spanish_hfl_commonmoanseofthyes,edexel_gcse_spanish_hfl_commonquwos,edexel_gcse_spanish_hfl_commonotusexs,edexel_gcse_spanish_hfl_commonothifrwos,edexel_gcse_spanish_hfl_commoncountriess,edexel_gcse_spanish_hfl_commonnationalitiess);

function inc(a,search){
var b = a.toUpperCase();
var c = search.toUpperCase(); // schaffers s is converted to SS here
if (b.includes(c)){return true}
else {return false}
}

function getRandomInt(max) {return Math.floor(Math.random() * Math.floor(max));}

var counting = 0;
var selected = massivelist[getRandomInt(massivelist.length)][getRandomInt(2)];
var speedf = 500/selected.length;
var speedb = 100/selected.length;
function callback() {
var l = selected.length;
if (counting < l) {
text = selected.slice(0, ++counting);
setTimeout(callback, speedf);
speedf = speedf*1.05;
}
else if (counting == l) {
++counting
text = selected.slice(0, counting );
setTimeout(callback, 1000);
}
else if ((counting > l) && (counting < 2 * l)) {
++counting
text = selected.slice(0, (2*l)-counting );
setTimeout(callback, speedb);
}
else {
text = selected.slice(0, 0);
selected = massivelist[getRandomInt(massivelist.length)][getRandomInt(2)];
counting = 0;
setTimeout(callback, speedb);
speedf = 500/selected.length;
}
document.getElementById("autoid").placeholder = text; //+"\u007c"
}

callback()



function searching(){
var searcher = document.getElementById("autoid");
// var myVar = setInterval(wordgen,1000);
var blurred = document.getElementById("texts");
searcher.addEventListener("input", function(){
var myNode = document.getElementById("currentones");
while (myNode.firstChild) {
myNode.removeChild(myNode.firstChild);
}
var enteredtext = searcher.value;
if (searcher.value == ""){
document.getElementById("currentones").style.height = 0;
blurred.classList.remove("blurry");
}
else{
document.getElementById("currentones").style.height = "auto";
blurred.classList.add("blurry");

}
var counter = 0;
for (i=0; i<massivelist.length; i++){
if ((inc(massivelist[i][0],enteredtext) == true && (counter<20)) ){ //    && (counter<200) ... after true)
c = document.getElementById("currentones");
var b = document.createElement('button');
//change function name
b.setAttribute("onclick", 'myFunctionmassive(event, this)');
//change letter
b.setAttribute('id', "massive" + i);
b.setAttribute("class","spanish"+massivelist[i][2]);
b.appendChild(document.createTextNode(massivelist[i][0]));
//change wrapper name
c.appendChild(b);
counter = counter + 1;
}
else if ((inc(massivelist[i][1],enteredtext) == true && (counter<20)) ){ //    && (counter<200) ... after true)
c = document.getElementById("currentones");
var b = document.createElement('button');
//change function name
b.setAttribute("onclick", 'myFunctionmassive(event, this)');
//change letter
b.setAttribute('id', "massive" + i);
b.setAttribute("class","spanish"+massivelist[i][2]);
b.appendChild(document.createTextNode(massivelist[i][1]));
//change wrapper name

c.appendChild(b);
counter = counter + 1;

}
}


})
}

// function isEmpty(str){
//     return !str.replace(/\s+/, '').length;
// }

function myFunctionmassive(event, el) {
var char = el.id;
var index = eval(char.slice(7));
var german = massivelist[index][0];
var english = massivelist[index][1];


if(event.ctrlKey) {
document.getElementById(char).remove();
}
else {
if (document.getElementById(char).innerText == german) 
{
document.getElementById(char).innerText = english;
}
else 
{
document.getElementById(char).innerText = german;
}}

}

searching()