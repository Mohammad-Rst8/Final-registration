let $ = document
let firstName = $.querySelector('.first')
let lastName = $.querySelector('.last')
let phoneName = $.querySelector('.phone')
let btnbuy = $.querySelector('.btn')
let countryName = $.querySelector('.selection')
let selectorcity = $.querySelector('#cities')
let modals = $.querySelector('.modal')
let citi ={ 
    English:['london' , 'manchester' , 'hal' , 'Liverpol'],
    Iran:['tehren', 'mashhad', 'tabtiz' , 'shiraz'],
    US:['New york', 'los angles']
}
btnbuy.addEventListener('click' , function (){
    let firstelem = firstName.value
    let lastelem = lastName.value
    let phoneelem = phoneName.value
   
        if (firstelem.length < 3 || firstelem.length > 20){
            modals.innerHTML = 'The name is allowed from 3 to 14 letters'
            modals.style.display = 'inline-flex'
            console.log("Name is invalid")
        }
        if (lastelem.length < 2 || lastelem.length > 20){
            modals.innerHTML = 'Enter last name up to 20 characters'
            modals.style.display = 'inline-flex'
            console.log("Last name is invalid")
        }
        if (phoneelem.length < 8 || phoneelem.length > 14){
            modals.innerHTML = 'Enter the mobile number from 8 to 14 digits'
            modals.style.display = 'inline-flex'
            console.log("Phone number is invalid")
        }
        else{
            modals.innerHTML = 'Your order has been registered'
            modals.style.display = 'inline-flex'
            modals.style.backgroundColor = 'green'
            console.log("Your order has been registered.\n Our colleagues will contact you soon.")
        }


  
}) 
countryName.addEventListener('change' , function (){
   let namecities = countryName.value 
   let maincity = citi[namecities]
   if(countryName.value == 'Please select'){
    selectorcity.innerHTML = '<option>Select city</option>'
   }
   else{
       selectorcity.innerHTML = ""
       maincity.forEach(function (city) {
        selectorcity.innerHTML += '<option>'+city +'</option>'
       })
   }
   }
 )