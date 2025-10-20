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




for(let i = 0; i < teamMembers.length; i++ ){
//Ciclo -for che scorre l'array di oggetti "teamMembers"
    const member = teamMembers[i]
    //Variabile che salva, ad ogni giro, ogni singolo oggetto dell'array "teamMembers"

    const row = document.createElement("div")
    row.className = "row"
    //Creo e salvo,in memoria, l'elemento -row. Aggiungo poi classi

    const col = document.createElement("div")
    col.className = "col-sm-12 col-md-4 mb-5"
     //Creo e salvo,in memoria, l'elemento -col. Aggiungo poi classi

    const card = document.createElement("div")
    card.className ="card"
    //Creo e salvo,in memoria, l'elemento -card. Aggiungo poi classi

    const card_row = document.createElement("div")
    card_row.className = "row"
    //Creo e salvo,in memoria, l'elemento -card_row(riga interna alla -card). Aggiungo poi classi

    const card_col_img = document.createElement("div")
    card_col_img.className = "col-4"
    //Creo e salvo,in memoria, l'elemento -card_col_img(colonna, dell'img, interna alla -card). Aggiungo poi classi

    const card_img = document.createElement("img")
    //Creo e salvo,in memoria, l'elemento -card_img(immagine interna alla -card).
    card_img.src = member.img
    card_img.alt = "Futuro Jedi"


    const  card_col_body = document.createElement("div")
    card_col_body.className = "col-8"
    //Creo e salvo,in memoria, l'elemento -card_col_body(colonna, del body, interna alla -card). Aggiungo poi classi

    const card_body = document.createElement("div")
    card_body.className = "card-body"
    //Creo e salvo,in memoria, l'elemento -card_body(body interno alla -card). Aggiungo poi classi

    const card_title = document.createElement("h3")
    card_title.className = "card-title"
    //Creo e salvo,in memoria, l'elemento -card_title(titolo interno alla -card). Aggiungo poi classi

    const card_text = document.createElement("p")
    card_text.className = "card-text"
    //Creo e salvo,in memoria, l'elemento -card_text(testointerno alla -card). Aggiungo poi classi

    const card_link = document.createElement("a")
    card_link.className = "card-link"
    //Creo e salvo,in memoria, l'elemento -card_link(link interno alla -card). Aggiungo poi classi
    
}






