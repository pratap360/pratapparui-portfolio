- [x] change the about page
    - [x] add info in it
    - [x] change the png of expertise
    - [x] add the testimony & clients coming soon
 
- [x] change in the resume page
  - [x] update the detail in Education
  - [x] update the experince
  - [x] keep the experince section at top
  - [x] added some extra edus & update it
  - [x] add the skills but as a tiles & img

- [-] change the projects
  - [X] add some github projects
  - [X] add some personl project like lhs & clg projects

- [] do connect the backend for the contact page
  - [x] add the title text feild

- [x] update the 404 page 
- [x] add extras social media icons if required
- [x] add the light mode functionality 
- [] add all the trackers like gsc , g4a , bing tracker


-  [x] svg missing
   -  canva
   -  notion
   -  obsidian
   -  inkscape
   -  microsoft azure
   -  postman
   -  vs code
   -  ssh / bash
   -  elastic search
   -  kibana
  

- my all projects till date
  - [-]add all the pop up for all projects.
s
### new bug or issue are genrating while do change
 - [x] fix the portfolio page not fitting in mobile devices
 - [x] side bar is not previous level sticky side bar
 - [x] do update the about me para 
 - [-] navbar active color issue

test
tesssst@tet.com
test msg
this is test msg

-----

// Function to handle form submission
async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const fullname = formData.get('fullname');
    const email = formData.get('email');
    const msgTitle = formData.get('msgTitle');
    const message = formData.get('message');

    // Save form data to Supabase table
    try {
        const { data, error } = await supabase.from('contact-form').insert([{ fullname, email, msgTitle, message }]);

        if (error) {
            console.error('Error saving message:', error.message);
            return;
        }

        console.log('Message saved successfully:', data);
        // form.reset();
         // Reset the form after successful submission
    } catch (error) {
        console.error('Error saving message:', error.message);
    }
}

// Event listener for form submission
document.getElementById('contact').addEventListener('submit', handleSubmit);