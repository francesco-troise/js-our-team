const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const row = document.createElement("div");
row.className = "row";
//Creo e salvo,in memoria, l'elemento -row. Aggiungo poi classi

let HTML_text = "";
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  HTML_text += `
<div class="col-sm-12 col-md-4 mb-5">
    <div class="card">
        <div class="row">
            <div class="col-4">
                <img src="${member.img}">
            </div>
            <div class="col-8 bg-dark text-white">
                <div class="card-body">
                    <h3 class="card-title"> ${member.name} </h3>
                    <p class="card-text"> ${member.role} </p>
                    <a class="card-link"> ${member.email} </a>
                </div>
            </div>
        </div>
    </div>
</div>`;
}

const ancora = document.getElementById("ancora");

row.innerHTML = HTML_text;

ancora.appendChild(row);
