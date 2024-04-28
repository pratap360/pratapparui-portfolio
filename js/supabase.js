
const { createClient } = supabase

const supabaseUrl = 'https://cmfacgmrvdtovroxedbq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZmFjZ21ydmR0b3Zyb3hlZGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMTc4MzUsImV4cCI6MjAyOTc5MzgzNX0.rARfkTK-stOvTFNe7ihs3dp1DE5J8udGPEcBIhu83Y0'
const supabase = createClient(supabaseUrl, supabaseKey)


const Contact = document.querySelector("#contact")

Contact.addEventListener('submit', async (event) => {
    event.preventDefault()

    const prayerInput = Contact.querySelectorAll('input, textarea')

    const submission = {}

    prayerInput.forEach(element => {
        const { value, name } = element
        if (value) {
            submission[name] = value
        }
    })

    console.table(submission)

    const { error,data } = await supabase
    .from('contactform')
    .insert([submission], { returning: 'minimal' });
      console.log(error,data)
    // return onclick=submit();
    // error handling 
    if (error) {
        alert('facing some issue in code')
    } else {
        alert('Your message is Accepted')
    }
})


    // if (error){
    //     // alert("lafada kiya hai bahi")
    //     $('#submit').on('click', function(e){
    //         // e.preventDefault();
    //         // Open popup modal
    //         $('#error').modal('open');
    //       });
    // }else{
    //     // Add click event listener to submit button
    //   $('#submit').on('click', function(e){
    //     // e.preventDefault();
    //     // Open popup modal
    //     $('#Success').modal('open');
    //   });
    // }

    // reset the full form 
    // prayerInput.forEach(element => element.value = '')


    //? Redirect to a new page
    // const successPagePath = "/pages/success.html";

    // window.location.href = successPagePath;

    //  just update link after fully live 
    // window.location.href = "http://127.0.0.1:5500/pages/success.html";




// })