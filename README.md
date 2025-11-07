<h2>Blog Dashboard</h2>

<p>Step 1:<br/>
Create a new Next.js project.</p>

<p>Step 2:<br/>
In <b>index.js</b>, clear all code and add a header section   and a body section component.</p>

<p>Step 3:<br/>
In the body section, use <b>ShadCN</b> to create a card using ShadCN components.</p>

<p>Step 4:<br/>
Using <b>Axios</b>, fetch data from the JSONPlaceholder API to get blogs. 
Use <code>axios.get()</code> and store the response in a state using <b>useState</b>.</p>

<p>Step 5:<br/>
Use <code>map()</code> to display the blogs inside the card you created using ShadCN.</p>

<p>Step 6:<br/>
Create a button in the body section to add a new blog.</p>

<p>Step 7:<br/>
When clicked, open a popup form and input the fields like <b>title</b> and <b>body</b> in the popup.</p>

<p>Step 8:<br/>
When submitting the form, use <b>axios.post()</b> to post it to the API and also add the data to the local state where the initial blogs are stored.</p>

<h3>Now we get a Blog Dashboard where we can view existing blogs and add a new blog dynamically.</h3>
