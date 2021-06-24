#Instruções

### Para executar:
Clone o repositório e execute
`npm start` ou 
`yarn start` no diretório do projeto

#Endpoints:
##User

###post */user/signup*
body - > {name, email, password}

###post */user/login*
body -> {email, password}

###post */user/friendship/:id*
params -> id <br>
Authorization -> token

###delete */user/friendship/:id*
params -> id <br>
Authorization -> token

##Post

###post */post/create*
body ->{photo, description, createdAt?, type?} <br>
Authorization -> token

###get */:id*
params -> id <br>
Authorization -> token