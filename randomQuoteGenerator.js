
// Arrays

var condSeverity = [
	'active','mild','moderate','severe','occasional','moderate to severe'
]

var condArr = [
	'acne','ADHD','AIDS/HIV','allergies','Alzheimer\'s','angina','anxiety','arthritis','asthma','bipolar disorder','bronchitis','cancer',
	'cholesterol','colds & flu','constipation','COPD','depression','Type 1 Diabetes','Type 2 Diabetes','diarrhea','eczema','erectile dysfunction',
	'fibromyalgia','GERD (heartburn)','gout','hair loss','hayfever','heart disease','hepatitis A','hepatitis B','herpes','hypertension',
	'hypothyroidism','incontinence','irritable bowel disease','insomnia','menopause','migraine','osteoarthritis','osteoporosis','psoriasis',
	'rheumatoid arthritis','schizophrenia','siezures','stroke','swine flu','urinary tract infection'
]

var prefix = [
	'Ad','Alpha','Alta','Am','Bell','Beta','Bex','Bu','Cap','Chlor','Choli','Cle','Corti','Cre','Cym','Cyta','Cyto','Deca','Deco',
	'Dex','Dura','Fib','Flo','Hydro','Lex','Lip','Lis','Mela','Meta','O','Par','Pax','Per','Pharma','Phen','Pho','Pre','Pro','Re','Sed','Sim',
	'Spas','Suda','Sym','Tam','Via','Vi','Well','Xan','Zel','Zo'
]

var drugRoot = [
	'barbi','biqui','citalo','corta','fari','flexo','flo','formi','gami','hista','maxi','methy','methylo','nabi','phero','pira','prava','roxi',
	'sina','spiro','splenio','spu','sulla','syli','tanni','thala','thara','vasti','zola'
]

var suffix = [
	'cholo','cholor','cin','dex','dyne','fade','fed','gans','gyne','len','lin','mide','mine','nax','nine','phine','phrin','pram','pril','quil',
	'rase','sin','sone','stat','tab','tan','tec','tiv','tram','trate','tril','trol','voy','xine','xone','zole','zone','zyme'
]


var commonSideEffects = [
	'headache','fever','nausea','vomiting','dizziness','dry mouth','sweating','constipation','diarrhea','increased appetite',
	'decreased appetite','drowsiness','insomnia','anxiety','fatigue','bloody urine','cloudy urine','irregular heartbeat',
	'frequent urge to urinate','cold or flu-like symptoms','chills','chest pain or discomfort','difficulty breathing','difficulty swallowing',
	'red eyes','irritated eyes','joint pain','muscle pain','itching','rash','muscle cramps','muscle spasms','convulsions','stomach pain',
	'weight loss','weight gain','wheezing','confusion','bleeding gums','difficulty concentrating','blurred vision','necrophilia','sore throat',
	'stupor','menstrual changes','lethargy','nosebleed','drooling','hives','loss of bladder control','fecophilia'
]
var contactDocIf = [
	'bleeding of the eyes, or blindness',
	'vomiting of blood or material that looks like coffee grounds',
	'impaired consciousness, ranging from confusion to coma to death',
	'unusual or sudden body or facial movements or postures',
	'large, hive-like swelling on the face, eyelids, lips, tongue, throat, hands, legs, feet, or sex organs',
	'blistering, peeling, or loosening of the skin',
	'talking or acting with excitement you cannot control',
	'painful or prolonged erection of the penis',
	'Absence of or decrease in body movements',
	'unusual bleeding or bruising',
	'coma or death, and trouble swallowing',
	'depressed mood, trouble concentrating, sleep problems, crying spells, aggression or agitation, changes in behavior, hallucinations, thoughts of suicide or hurting yourself',
	'sudden numbness or weakness, especially on one side of the body',
	'blurred vision, sudden and severe headache or pain behind your eyes, sometimes with vomiting',
	'severe pain in your upper stomach spreading to your back, nausea and vomiting, fast heart rate',
	'fever, chills, body aches, flu symptoms, purple spots under your skin, easy bruising or bleeding',
	'joint stiffness, bone pain or fracture',
]





// Function definitions


// Randomizing functions

var randomIndex = (arr) => arr[Math.floor(Math.random()*arr.length)];

var randomName = () => randomIndex(prefix) + randomIndex(drugRoot) + randomIndex(suffix);


// Random name generators

var drugName = () => randomName();

var otherDrugName = () => randomName();


// Random list item generators

var condSev = () => randomIndex(condSeverity);

var condition = () => randomIndex(condArr);

var sideEffect = () => randomIndex(commonSideEffects);

var seriousSideEffect = () => randomIndex(contactDocIf);


// List generator

var classLoop = function(c, d){
    var arr = [];
    var n;
    for(var i=0; i<d; i++){
        do
            n = c();
        while(arr.indexOf(n) !== -1)
       	arr[i] = n;
    }
    return arr.join(', ') + '.';
}


// Side effect lists

var sEffects = () => classLoop(sideEffect, 10);

var emergencyCond = () => classLoop(seriousSideEffect, 3);



// DOM Manipulators

var getById = (id, func) => document.getElementById(id).textContent = func();

var a = function(){

	getById('severity', condSev);
	getById('condition', condition);
	getById('other-drug-name', otherDrugName);
	getById('common-side-effects', sEffects);
	getById('emergency-conditions', emergencyCond);
	
	var x = document.getElementsByClassName("drug-name");  // Find the elements
	var y = drugName();
	for(var i = 0; i < x.length; i++){
		x[i].innerText=y;    // Change the content
	}

}

a();
var b = document.getElementById('button');
b.addEventListener('click', a);