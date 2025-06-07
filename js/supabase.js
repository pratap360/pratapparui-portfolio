const { createClient } = supabase;
document.addEventListener('DOMContentLoaded', async function () {
    const supabaseUrl = 'https://gbqrbbklcijopussbudq.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdicXJiYmtsY2lqb3B1c3NidWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMzg3MDgsImV4cCI6MjA2NDgxNDcwOH0.0HVmEwxUaY0gLjPUqSOABCrI6bOHwjjy7ARD6MBNDgw';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const Contact = document.querySelector("#contact");

    Contact.addEventListener('submit', async (event) => {
        event.preventDefault();

        const contactForm = Contact.querySelectorAll('input, textarea');

        const submission = {};

        contactForm.forEach(element => {
            const { value, name } = element;
            if (value) {
                submission[name] = value;
            }
        });

        console.table(submission);

        const { error, data } = await supabase
            .from('Contact')
            .insert([submission], { returning: 'minimal' });

        // console.log(error, data);

        // if (error) {
        //     alert('❌ facing some issue in Backend ! Warning :: Not submitted');
        // } else {
        //     alert("✔️ Thank you for contacting ! I'll get back to you soon.");
        // }

        const modal = document.getElementById('custom-alert');
        const modalMessage = document.getElementById('alert-message');
    
        if (error) {
            modalMessage.textContent = '❌ Facing some issue in Backend!  ⚠️Warning: Not submitted.';
            modal.classList.add('error');
        } else {
            modalMessage.textContent = "✔️ Thank you for contacting! I'll get back to you soon.";
            modal.classList.add('success');
        }
    
        modal.style.display = 'block';




        contactForm.forEach(element => element.value = '')
    });
});
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
// contactForm.forEach(element => element.value = '')


//? Redirect to a new page
// const successPagePath = "/pages/success.html";

// window.location.href = successPagePath;

//  just update link after fully live 
// window.location.href = "http://127.0.0.1:5500/pages/success.html";




// })