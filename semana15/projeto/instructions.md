#Instruções

<h3>GET</h3>

<ul>
  <li><strong>/users</strong>
    <p>Não espera receber nada</p>
  </li>
</ul>
<ul>
  <li><strong>/users/balance?</strong>
    <p>Query cpf & name</p>
    <p>CPF formato: 000.000.000-00</p>
  </li>
</ul>

<h3>POST</h3>
<ul>
  <li><strong>/users</strong>
    <p>Body {name, cpf, birth_date}</p>
    <p>CPF formato: 000.000.000-00</p>
    <p>BIRTH_DATE formato: aaaa-mm-dd</p>
  </li>
</ul>

<ul>
  <li><strong>/users/pay</strong>
    <p>Body {cpf, description, value, date?}</p>
    <p>CPF formato: 000.000.000-00</p>
    <p>VALUE formato: number</p>
    <p>DATE formato: aaaa-mm-dd (opcional)</p>
  </li>
</ul>

<h3>PUT</h3>
<ul>
  <li><strong>/users/add</strong>
    <p>Body {name, cpf, value}</p>
    <p>CPF formato: 000.000.000-00</p>
    <p>VALUE formato: number</p>
  </li>
</ul>

<ul>
  <li><strong>/users/refresh?</strong>
    <p>Query cpf</p>
    <p>CPF formato: 000.000.000-00</p>
  </li>
</ul>

<ul>
  <li><strong>/users/transfer</strong>
    <p>Body {user,beneficiary, value}</p>
    <p>USER {name,cpf}</p>
    <p>BENEFICIARY {name,cpf}</p>
    <p>CPF formato: 000.000.000-00</p>
    <p>VALUE formato: number</p>
  </li>
</ul>

<h3>DELETE</h3>
<ul>
  <li><strong>/users</strong>
    <p>Não espera receber nada</p>
  </li>
</ul>