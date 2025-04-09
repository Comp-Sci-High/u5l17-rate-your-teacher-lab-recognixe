// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page

const form = document.querySelector("form")

form.addEventListener("submit", async(e)=>{
 e.preventDefault()
 const BookData =new FormData(form)
 const reqBody= Object.fromEntries(BookData)
 const response = await fetch("/add",{
 method: "POST",

    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(reqBody)
 })
 const data = await response.json()
 console.log(data)
 window.location.href ="/"

})