import React, { useState } from 'react';

import Modal from '../../components/Modal';
/*
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "23664084",
    formId: "17735331-0b99-41eb-85b2-1c72f6a45eb3"
  });
</script>

*/
const Subscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var xhr = new XMLHttpRequest();
    var url =
      'https://api.hsforms.com/submissions/v3/integration/submit/PORTAL-ID/FORM-ID';
    var data = {
      fields: [
        {
          name: 'email',
          value: email,
        },
        {
          name: 'firstname',
          value: name,
        },
      ],
      context: {
        pageUri: 'www.juliapottinger.com',
        pageName: 'Julia Pottinger',
      },
    };
    console.log(data);
    var final_data = JSON.stringify(data);

    xhr.open('POST', url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };
    // Sends the request
    xhr.send(final_data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Subscribe;
