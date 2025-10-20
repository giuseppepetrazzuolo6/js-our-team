const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

//assegno ad una variabile una stringa con il markup
const markupString = `
     <div class="col-12 col-md-4">
        <div class="d-flex bg-black text-white align-items-center">
            <img src="./assets/img/female1.png" class="img-fluid" alt="Foto team">
            <div class="p-3">
                <h5 class="fw-bold mb-2">MARCO BIANCHI</h5>
                <p class="mb-2">Designer</p>
                <p class="text-info">marcobianchi@team.com</p>
            </div>
        </div>
    </div>`

//richiamo l'elemento html in cui inserire il markup
const rowEl = document.querySelector('#members .row')
//console.log(rowEl);

//ciclo for per sorrere gli elementi dell'array
let colsString = ''
for (let i = 0; i < teamMembers.length; i++) {
    thisMember = teamMembers[i]
    //destrutturazione delle proprietà degli oggetti
    const { name, role, email, img } = thisMember
    //variabile con stringa markup
    const markupString = `
     <div class="col-12 col-md-4">
        <div class="d-flex bg-black text-white align-items-center">
            <img src="./assets/img/${img}" class="img-fluid" alt="Foto team">
            <div class="p-3">
                <h5 class="fw-bold mb-2">${name}</h5>
                <p class="mb-2">${role}</p>
                <p class="text-info">${email}</p>
            </div>
        </div>
    </div>`
    //console.log(markupString);
    colsString += markupString

}
console.log(colsString);
