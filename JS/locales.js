
const languageData = {
    en: { name: "English", flag: "🇬🇧" },
    es: { name: "Español", flag: "🇪🇸" },
    // fr: { name: "Français", flag: "🇫🇷" },
    // de: { name: "Deutsch", flag: "🇩🇪" }
};

const translations = {
    en: {
        title: "NMS Leyline Calculator",
        calculator: "Calculator",
        info: "Info",
        firstCoords: "First Coordinates:",
        secondCoords: "Second Coordinates:",
        distanceTravelled: "Distance Travelled:",
        latPlaceholder: "lat",
        longPlaceholder: "long",
        distPlaceholder: "distance (u)",
        clearAll: "clear all",
        locate: "Locate",
        tip: "tip: press enter to move to the next input field",
        leylinesHeader: "Leylines will appear here",
        leylinesResult: "Leylines at these longitudes:",

        infoTitle1: "How to use the calculator",
        infoTitle2: "What are 3-star deposits?",
        infoTitle3: "What are deposit leylines?",

        infoStep1: "Land on any planet and get a point of reference. This can be your starship, a save beacon, or navigational marker.",
        infoStep2: "Record your current coordinates in the first set of input fields labeled \"lat\" and \"long.\" Remember to use positive or negative decimal numbers.",
        infoStep3: "Walk or drive <b>at least 1000u</b> from your reference point and record your new position in the second set.",
        infoStep4: "Use your visor to find the distance between your current position and the reference point. Record this in the \"Distance\" field.",
        infoNote: "NOTE: Distance shown when you point at your marker switches from <b>units</b> to <b>minutes</b> somewhere between 1100u and 1200u.",
        infoVideo: "There is also a <a class='info-link' target='_blank' href='https://www.youtube.com/watch?v=Ec8QN39GNB8'>video guide</a> in case you need more detailed instructions :)",

        deposits3StarIntro: "3-star deposits are a type of resource found on every planet. <br>Here are the different types of deposits:",
        curiousDeposit: "Curious Deposit:",
        curiousDesc1: "• These drop large amounts of <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/raw52'>Runaway Mould</a>, which <b>refines 5:1 into nanites.</b>",
        curiousDesc2: "• Requires the <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>advanced mining laser</a> tech installed.",
        curiousDesc3: "• It's recommend that you <b>build walls</b> around them as they will roll away after being hit.",
        curiousDesc4: "• Having the <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech71'>Optical Drill</a> installed increases the yield.",
        curiousDesc5: "• <em><b>This is usually what people are looking for.</b></em>",
        metalFingers: "Metal Fingers:",
        metalDesc1: "• Will drop large amounts of either <b>Uranium</b> or <b>Gold.</b>",
        metalDesc2: "• Requires the <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>advanced mining laser</a> multitool tech installed.",
        venomSac: "Venom Sac:",
        venomDesc1: "• Drops <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/cur24'>Sac Venom.</a>",
        venomDesc2: "• Getting too close will damage you and picking them up will <b>alert sentinels to level 3</b> (quad spawns).",
        venomDesc3: "• Also obtainable via the <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/prod173'>Venom Urchin</a> plant.",
        venomDesc4: "• Sac Venom sells for 60,800 units.",

        leylinesExplain: "Leylines are lines of longitude (vertical lines that go from north to south) that will spawn 3 star deposits. <br><br>If you find a leyline - either by yourself or by using this tool - all you have to do is to go straight North or South to find deposits. <br><br>Leylines found using this calculator are valid between 45°N and 45°S. That doesn't mean there will be no deposits. It means that leylines aren't fully certain outside of that range."
    },

    es: {
        title: "Calculadora de Líneas Ley NMS",
        calculator: "Calculadora",
        info: "Información",
        firstCoords: "Primeras Coordenadas:",
        secondCoords: "Segundas Coordenadas:",
        distanceTravelled: "Distancia Recorrida:",
        latPlaceholder: "lat",
        longPlaceholder: "long",
        distPlaceholder: "distancia (u)",
        clearAll: "borrar",
        locate: "Localizar",
        tip: "consejo: presiona enter para ir al siguiente campo",
        leylinesHeader: "Las líneas ley aparecerán aquí",
        leylinesResult: "Líneas ley en estas longitudes:",

        infoTitle1: "Cómo usar la calculadora",
        infoTitle2: "¿Qué son los depósitos de 3 estrellas?",
        infoTitle3: "¿Qué son las líneas ley de depósitos?",

        infoStep1: "Aterriza en cualquier planeta y obtén un punto de referencia. Puede ser tu nave espacial, una baliza de guardado o un marcador de navegación.",
        infoStep2: "Registra tus coordenadas actuales en el primer conjunto de campos de entrada etiquetados como \"lat\" y \"long\". Recuerda usar números decimales positivos o negativos.",
        infoStep3: "Camina o conduce <b>al menos 1000u</b> desde tu punto de referencia y registra tu nueva posición en el segundo conjunto.",
        infoStep4: "Usa tu visor para encontrar la distancia entre tu posición actual y el punto de referencia. Regístrala en el campo \"Distancia\".",
        infoNote: "NOTA: La distancia mostrada cuando apuntas a tu marcador cambia de <b>unidades</b> a <b>minutos</b> en algún punto entre 1100u y 1200u.",
        infoVideo: "También hay una <a class='info-link' target='_blank' href='https://www.youtube.com/watch?v=Ec8QN39GNB8'>guía en vídeo</a> por si necesitas instrucciones más detalladas :)",

        deposits3StarIntro: "Los depósitos de 3 estrellas son un tipo de recurso que se encuentra en todos los planetas. <br>Estos son los diferentes tipos de depósitos:",
        curiousDeposit: "Depósito Curioso:",
        curiousDesc1: "• Estos sueltan grandes cantidades de <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/raw52'>Moho desenfrenado</a>, que <b>se refina 5:1 en nanites.</b>",
        curiousDesc2: "• Requiere la tecnología <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>Láser de Extracción avanzado</a> instalado.",
        curiousDesc3: "• Se recomienda <b>construir paredes</b> alrededor de ellos ya que rodarán después de ser golpeados.",
        curiousDesc4: "• Tener el <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech71'>Taladro Óptico</a> instalado aumenta el rendimiento.",
        curiousDesc5: "• <em><b>Esto es normalmente lo que la gente busca.</b></em>",
        metalFingers: "Dedos Metálicos:",
        metalDesc1: "• Soltarán grandes cantidades de <b>Uranio</b> u <b>Oro.</b>",
        metalDesc2: "• Requiere la tecnología <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/tech70'>Láser de Extracción avanzado</a> instalado en la multiherramienta.",
        venomSac: "Saco de Veneno:",
        venomDesc1: "• Suelta <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/cur24'>Saco de veneno.</a>",
        venomDesc2: "• Acercarse demasiado te dañará y recogerlos <b>alertará a los centinelas al nivel 3</b> (aparición de cuádruples).",
        venomDesc3: "• También se puede obtener a través de la planta <a class='info-link' target='_blank' href='https://app.nmsassistant.com/catalogue-item/prod173'>Erizo de Veneno</a>.",
        venomDesc4: "• El Saco de veneno se vende por 60,800 unidades.",

        leylinesExplain: "Las líneas ley son líneas de longitud (líneas verticales que van de norte a sur) que generarán depósitos de 3 estrellas. <br><br>Si encuentras una línea ley - ya sea por ti mismo o usando esta herramienta - todo lo que tienes que hacer es ir directamente al Norte o Sur para encontrar depósitos. <br><br>Las líneas ley encontradas usando esta calculadora son válidas entre 45°N y 45°S. Eso no significa que no habrá depósitos. Significa que las líneas ley no son completamente ciertas fuera de ese rango."
    },
};

let currentLang = 'en';

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];

    if (translations[langCode]) {
        return langCode;
    }
    return 'en'; // Default to English
}

function createLanguageSelector() {
    const langOptions = document.querySelector('.lang-options');
    const currentLangCode = document.getElementById('current-lang-code');

    langOptions.innerHTML = '';

    Object.entries(languageData).forEach(([code, data]) => {
        const option = document.createElement('div');
        option.className = `lang-option ${code === currentLang ? 'active' : ''}`;
        option.dataset.lang = code;
        option.innerHTML = `
            <span class="lang-flag"></span>
            <span>${data.name}</span>
        `;

        option.addEventListener('click', () => {
            setLanguage(code);
            closeLanguageDropdown();
        });

        langOptions.appendChild(option);
    });

    updateCurrentLanguageButton();
}

function updateCurrentLanguageButton() {
    const currentLangCode = document.getElementById('current-lang-code');
    currentLangCode.textContent = currentLang.toUpperCase();
}

function toggleLanguageDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    dropdown.classList.toggle('active');
}

function closeLanguageDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    dropdown.classList.remove('active');
}

document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.lang-dropdown');
    if (!dropdown.contains(e.target)) {
        closeLanguageDropdown();
    }
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nms-lang', lang);
    updateUI();
    updateCurrentLanguageButton();
    createLanguageSelector();
}

function updateUI() {
    const t = translations[currentLang];

    document.querySelector('h1').textContent = t.title;

    document.querySelectorAll('h2')[0].textContent = t.calculator;
    document.querySelectorAll('h2')[1].textContent = t.info;

    document.querySelectorAll('.input-row .para')[0].textContent = t.firstCoords;
    document.querySelectorAll('.input-row .para')[1].textContent = t.secondCoords;
    document.querySelectorAll('.input-row .para')[2].textContent = t.distanceTravelled;

    document.getElementById('lat1').placeholder = t.latPlaceholder;
    document.getElementById('long1').placeholder = t.longPlaceholder;
    document.getElementById('lat2').placeholder = t.latPlaceholder;
    document.getElementById('long2').placeholder = t.longPlaceholder;
    document.getElementById('dist').placeholder = t.distPlaceholder;

    document.getElementById('btn-clear').textContent = t.clearAll;
    document.getElementById('btn-locate').innerHTML = `<strong>${t.locate}</strong>`;

    document.querySelector('.tiptext').textContent = t.tip;

    document.getElementById('results-header').textContent = t.leylinesHeader;

    document.querySelector('#info-head-1 h3').textContent = t.infoTitle1;
    document.querySelector('#info-head-2 h3').textContent = t.infoTitle2;
    document.querySelector('#info-head-3 h3').textContent = t.infoTitle3;

    const infoBody1 = document.getElementById('info-body-1');
    infoBody1.innerHTML = `
        <ol class="textdark">
            <li>${t.infoStep1}</li>
            <li>${t.infoStep2}</li>
            <li>${t.infoStep3}</li>
            <li>${t.infoStep4}</li>
        </ol>
        <p class="textdark">${t.infoNote}</p>
        <p class="textdark">${t.infoVideo}</p>
    `;

    const infoBody2 = document.getElementById('info-body-2');
    infoBody2.innerHTML = `
        <p class="textdark">${t.deposits3StarIntro}</p>
        <dl class="textdark">
            <dt>${t.curiousDeposit}</dt>
                <dd>${t.curiousDesc1}</dd>
                <dd>${t.curiousDesc2}</dd>
                <dd>${t.curiousDesc3}</dd>
                <dd>${t.curiousDesc4}</dd>
                <dd>${t.curiousDesc5}</dd> <br>
            <dt>${t.metalFingers}</dt>
                <dd>${t.metalDesc1}</dd>
                <dd>${t.metalDesc2}</dd> <br>
            <dt>${t.venomSac}</dt>
                <dd>${t.venomDesc1}</dd>
                <dd>${t.venomDesc2}</dd>
                <dd>${t.venomDesc3}</dd>
                <dd>${t.venomDesc4}</dd>
        </dl>
    `;

    const infoBody3 = document.getElementById('info-body-3');
    infoBody3.innerHTML = `
        <p class="textdark">${t.leylinesExplain}</p>
    `;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });
}

function initLanguage() {
    const savedLang = localStorage.getItem('nms-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    } else {
        currentLang = detectLanguage();
    }

    createLanguageSelector();

    document.querySelector('.lang-current').addEventListener('click', toggleLanguageDropdown);

    updateUI();
}

initLanguage();