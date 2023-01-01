let cardsWrapper = document.querySelector('#cardsWrapper')







const rubrica = {

    contacts : [

        {name: 'Marco' , number: 4455254100 },

        {name:'Franco' , number: 88551412 },

        {name:'Alberto' , number: 5552212124 },

        {name: 'Giovanni', number: 44522131 },


    ],


    showContacts : function (array){

        cardsWrapper.innerHTML = '';

        array.forEach( (contact)=>{

            let div = document.createElement('div');

            div.classList.add('col-12' , 'col-lg-8',  'my-3');

            div.innerHTML = `
            
                <div class="card-custom"> 

                    <p class="lead">${contact.name}</p>

                    <p class="lead">${contact.number}</p>

                    <i class="fa-solid fa-trash-can fa-2x icon"></i>

                </div>
            
            `
            cardsWrapper.appendChild(div);

        } )

        let icons = document.querySelectorAll('.icon');

        icons.forEach( (icon, i) =>{

            icon.addEventListener('click', () =>{

                let name = array[i].name;
                
                this.removeContact(name);
            })

        } )

     },


     addContact : function (newName , newNumber ){

        if(newName != '' && newNumber != '' ){

            this.contacts.push( { name: newName , number : newNumber } );

            this.showContacts(this.contacts);

            nameInput.value = '';

            numberInput.value = '';

        } else {

            alert('Attenzione, devi inserire un nome e un numero!');
        }
 
     },


     removeContact : function (removedName){

        let names = this.contacts.map( (contact) => contact.name.toLowerCase());

        let index = names.indexOf(removedName.toLowerCase());

        if ( index > -1 ){

            this.contacts.splice ( index , 1 );

            this.showContacts(this.contacts);

        } else {

            alert('Contatto non presente in rubrica');

        }
     } ,


     searchContact : function(searchedName){

        let filtered = this.contacts.filter( (contact) => searchedName.toLowerCase() == contact.name.toLowerCase());

        if( filtered.length > 0){

            this.showContacts(filtered);

            showContactsBtn.innerHTML = 'Nascondi Rubrica'; 

        } else {

            alert('Nome non presente in rubrica!');

        }

       return filtered;
     }

}


// BOTTONE EVENTO MOSTRA

let confirm = false;

showContactsBtn.addEventListener('click', ()=>{

    if(confirm == false){

        rubrica.showContacts(rubrica.contacts);

        confirm = true;

        showContactsBtn.innerHTML = "Nascondi Rubrica";

    } else {

        cardsWrapper.innerHTML = '';

        confirm = false;

        showContactsBtn.innerHTML = "Mostra Rubrica";
    }
   
})

// BOTTONE EVENTO AGGIUNGI CONTATTO

addContactBtn.addEventListener('click' , ()=>{

    if(nameInput.value != '' && numberInput.value != '' ){

    confirm = true;

    rubrica.addContact( nameInput.value , numberInput.value );

    showContactsBtn.innerHTML = "Nascondi Rubrica";

    } else {

        alert('Attenzione, devi inserire un nome e un numero!');
    }

} )

// BOTTONE EVENTO RIMUOVI CONTATTO

removeContactBtn.addEventListener('click', ()=> {

    confirm = true;


    rubrica.removeContact(nameInput.value);

    showContactsBtn.innerHTML = "Nascondi Rubrica";

    nameInput.value = '';


})

// CERCA CONTATTO EVENTO BOTTONE


searchContactBtn.addEventListener('click' , ()=>{


    confirm = true;

    rubrica.searchContact(nameInput.value);

    // showContactsBtn.innerHTML = "Nascondi Rubrica";

    nameInput.value = '';
} )



