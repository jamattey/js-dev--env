import {getClients} from './api/clientApi';

// Populate table of clients via API Call

getClients().then(result => {
  let clientBody = "";

  result.forEach(client => {
    clientBody+= `<tr>
      <id><a href = "#" data-id="${client.id}" class="deleteClient">Delete</a></td>
      <td>${client.id}</td>
      <td>${client.incident_desc}</td>
      <td>${client.city}</td>
      <td>${client.country}</td>
      <td>${client.date}</td>
      <td>${client.weather_report}</td>
    </tr>`
  });

  global.document.getElementById('client').innerHTML = clientBody;
})
