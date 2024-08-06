/// Cerinta 2 + 12 + ID(3)
document.addEventListener('DOMContentLoaded', function() {
  const colorPicker = document.getElementById('colorPicker');
  colorPicker.addEventListener('input', function(event) {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
  });
});

// Cerinta 3 -> inclusa in cerinta 2, 5, 6 si 10

// Cerinta 4 - crearea unui element
var noulDiv = document.createElement('div');
noulDiv.textContent = "Dacă și tu iubești călătoriile, atunci ai ajuns în locul potrivit!";
noulDiv.id = "noulDiv"; 
var inainteaCui = document.getElementById('detalii');
inainteaCui.parentNode.insertBefore(noulDiv, inainteaCui);
          // - stergerea unui element
var noulDiv = document.getElementById('noulDiv');
noulDiv.remove();

// Cerinta 5 + SELECTOR CSS(3)
const navigatiePagini = document.querySelectorAll('.navigare_intro');
navigatiePagini.forEach(function(element) {
  element.addEventListener('click', function() {
    document.body.style.backgroundColor = 'orange'; 
  });
});

/// Cerinta 6 +TAG(3)
var elementeH2 = document.getElementsByTagName('h2');
for (var i = 0; i < elementeH2.length; i++) 
    elementeH2[i].style.color = 'coral';

///Cerinta 7 + 9 + 10(Date & Array) + 14
function adaugaInputuri() {
  var form = document.getElementById('myForm');
 
  var nameLabel = document.createElement('label');
  nameLabel.textContent = ' Nume:';
  form.appendChild(nameLabel);

  var textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.placeholder = 'Nume';
  form.appendChild(textInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));

  var emailLabel = document.createElement('label');
  emailLabel.textContent = ' Email:';
  form.appendChild(emailLabel);

  var emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Email';
  form.appendChild(emailInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));

  var ageLabel = document.createElement('label');
  ageLabel.textContent = ' Vârstă:';
  form.appendChild(ageLabel);

  var numberInput = document.createElement('input');
  numberInput.type = 'number';
  numberInput.placeholder = 'Vârstă';
  form.appendChild(numberInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));

  var genderLabel = document.createElement('label');
  genderLabel.textContent = ' Gen:';
  form.appendChild(genderLabel);

  var genderSelect = document.createElement('select');
  genderSelect.name = 'gender';
  var optionMale = new Option('Masculin', 'male');
  var optionFemale = new Option('Feminin', 'female');
  genderSelect.add(optionMale);
  genderSelect.add(optionFemale);
  form.appendChild(genderSelect);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));

  var travelLabel = document.createElement('label');
  travelLabel.textContent = ' Cum călătoriți:';
  form.appendChild(travelLabel);

  form.appendChild(document.createElement('br'));
  var travelRadioFriends = document.createElement('input');
  travelRadioFriends.type = 'radio';
  travelRadioFriends.name = 'travel';
  travelRadioFriends.value = 'friends';
  var travelLabelFriends = document.createElement('label');
  travelLabelFriends.textContent = 'Cu prietenii';
  form.appendChild(travelRadioFriends);
  form.appendChild(travelLabelFriends);

  form.appendChild(document.createElement('br'));
  var travelRadioFamily = document.createElement('input');
  travelRadioFamily.type = 'radio';
  travelRadioFamily.name = 'travel';
  travelRadioFamily.value = 'family';
  var travelLabelFamily = document.createElement('label');
  travelLabelFamily.textContent = 'Cu familia';
  form.appendChild(travelRadioFamily);
  form.appendChild(travelLabelFamily);

  form.appendChild(document.createElement('br'));
  var travelRadioAlone = document.createElement('input');
  travelRadioAlone.type = 'radio';
  travelRadioAlone.name = 'travel';
  travelRadioAlone.value = 'alone';
  var travelLabelAlone = document.createElement('label');
  travelLabelAlone.textContent = 'Singur';
  form.appendChild(travelRadioAlone);
  form.appendChild(travelLabelAlone);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));

  var travelPreferenceLabel = document.createElement('label');
  travelPreferenceLabel.textContent = 'Cât de mult îți plac călătoriile?   ';
  form.appendChild(travelPreferenceLabel);

  var travelPreferenceInput = document.createElement('input');
  travelPreferenceInput.type = 'range';
  travelPreferenceInput.min = '1'; 
  travelPreferenceInput.max = '10'; 
  travelPreferenceInput.value = '5'; 
  travelPreferenceInput.step = '1'; 
  form.appendChild(travelPreferenceInput);
    //numarul
  var travelPreferenceValue = document.createElement('span');
  travelPreferenceValue.textContent = travelPreferenceInput.value; 
  form.appendChild(travelPreferenceValue);

  travelPreferenceInput.addEventListener('input', function() {
      travelPreferenceValue.textContent = travelPreferenceInput.value; 
  });

  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));

  var observationsLabel = document.createElement('label');
  observationsLabel.textContent = ' Observații:';
  form.appendChild(observationsLabel);

  var observationsTextarea = document.createElement('textarea');
  observationsTextarea.placeholder = 'Scrie aici observațiile tale...';
  observationsTextarea.rows = '4';
  observationsTextarea.cols = '50';
  form.appendChild(observationsTextarea);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));

  var checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.id = 'agreeCheckbox';
  form.appendChild(checkboxInput);

  var checkboxLabel = document.createElement('label');
  checkboxLabel.textContent = ' Sunt de acord să primesc pe email sugestii de călătorie  ';
  checkboxLabel.htmlFor = 'agreeCheckbox';
  form.appendChild(checkboxLabel);
  form.appendChild(document.createElement('br'));

  form.appendChild(document.createElement('br'));
  var submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Trimite';
  form.appendChild(submitButton);

    //9 + 10(Date & Array) + 14
  form.addEventListener('submit', function(event) {
    event.preventDefault();

      //14
    const numePattern = /^[a-zA-Z ]+$/; // doar litere si spatii
    const emailPattern = /^[a-zA-Z][a-zA-Z0-9._]*@[a-z]+\.[a-z]{2,}$/; // email valid

    if (!numePattern.test(textInput.value.trim())) {
      alert('Te rog introdu un nume valid.');
      return;
    }
    if (!emailPattern.test(emailInput.value.trim())) {
      alert('Te rog introdu o adresă de email validă.');
      return;
    }
      //9 + 10
    var savedData = JSON.parse(localStorage.getItem('formData'));
    if (!Array.isArray(savedData)) {
      savedData = []; 
    }
    var formData = {
      nume: textInput.value,
      email: emailInput.value,
      varsta: numberInput.value,
      gen: genderSelect.value,
      calatorie: document.querySelector('input[name="travel"]:checked').value,
      acord: checkboxInput.checked,
      placereCalatorii: travelPreferenceInput.value,
      observatii: observationsTextarea.value,
      timestamp: new Date().toLocaleString()
    };
    savedData.push(formData);
    localStorage.setItem('formData', JSON.stringify(savedData));
    textInput.value = '';
    emailInput.value = '';
    numberInput.value = '';
    genderSelect.selectedIndex = 0; 
    document.querySelector('input[name="travel"]:checked').checked = false; 
    travelPreferenceInput.value = '5';
    travelPreferenceValue.textContent = travelPreferenceInput.value; 
    observationsTextarea.value = '';
    checkboxInput.checked = false; 
  });
}

// Cerinta 8
function startColorAnimation() {
  var colors = ['maroon', 'brown', 'red', 'chocolate', 'darkorange', 'orange'];
  var index = 0;
  var animationDiv = document.getElementById('colorAnimation');
  
  setInterval(function() {
      animationDiv.style.backgroundColor = colors[index];
      index = (index + 1) % colors.length;
  }, 1000); 
}

// Cerinta 10 (Math + String) + CLASS(3)
document.addEventListener('DOMContentLoaded', function() {
  var notaFormular = document.getElementsByClassName('nota-container')[0];
  var notaInput = notaFormular.getElementsByClassName('nota-input')[0];
  var notaSubmit = notaFormular.getElementsByClassName('trimite-nota')[0];
  var rezultat = document.getElementsByClassName('rezultat-nota')[0];
  notaSubmit.addEventListener('click', function() {
    var nota = notaInput.value;
    var nota = parseFloat(nota.slice(0, 2)); 
    var mesaj = "Nota acordată de tine este: " + nota + ". ";
    if (nota > 8) {
      mesaj += "Îți mulțumesc foarte mult! Sper să te mai revăd pe site!";
    } else {
      mesaj += "Îți mulțumesc pentru feedback, încerc să mă îmbunătățesc!";
    }
    rezultat.textContent = mesaj;
  });
});

// Cerinta 11 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function changeTitleStyle() {
  const title = document.getElementById('formTitle');
  const colors = ['red', 'chocolate', 'coral', 'orange', 'brown', 'maroon', 'darkorange'];
  const randomColor = colors[getRandomInt(colors.length)];
  
  const positions = ['left', 'center', 'right'];
  const randomPosition = positions[getRandomInt(positions.length)];

  title.style.color = randomColor;
  title.style.fontFamily = 'Verdana';
  title.style.fontSize = 'xx-large';
  title.style.textAlign = randomPosition;
}
setInterval(changeTitleStyle, 1000);

//Cerinta 13
function highlightImage(event) {
  event.stopPropagation();

  const image = event.currentTarget;
  const computedStyle = window.getComputedStyle(image);
  const originalBorderStyle = computedStyle.getPropertyValue('border');

  image.style.border = '3px solid red';
  image.style.boxShadow = '0 0 10px red';

  setTimeout(() => {
    image.style.border = originalBorderStyle;
    image.style.boxShadow = 'none';
  }, 2000);
}
const image = document.querySelector('.image1 img');
image.addEventListener('click', highlightImage);


window.onload = function() {
  adaugaInputuri();
  startColorAnimation();
};


          
