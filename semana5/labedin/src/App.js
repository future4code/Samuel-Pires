import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/77743802?s=400&u=5ff2e6bb3f1c018f7edd16820c86b0f6a85a3bc0&v=4"
          nome="Samuel Pires Mateus" 
          descricao="Olá, eu sou o Samuel. Tenho 21 anos e sou estudante da Labenu. 
          Lido com programação há 3 anos e posso colaborar com a sua empresa."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno 
          imagem="data:image/png;base64,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"
          descricao="email.falso@gmail.com"
        />
        <CardPequeno 
          imagem="https://image.flaticon.com/icons/png/512/9/9275.png"
          descricao="Rua tal numero 0"
        />
        <CardPequeno 
          imagem="https://i.pinimg.com/originals/3b/35/ab/3b35abe635807a65599a32327749df7e.png"
          descricao="(xx) x xxxx-xxxx"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação acadêmica</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0/1588617268603?e=2159024400&v=beta&t=a88brKeePgoXCa0PpjouqjPLfp25RQso7CCWfbvQ9qg"
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_UFSC_vertical_extenso.svg/1200px-Brasao_UFSC_vertical_extenso.svg.png"
          nome="UFSC" 
          descricao="Universidade Federal de Santa Catarina" 
        />
      </div>

      <div className="page-section-container">
        <h2>Projetos realizados</h2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/39/39295.png"
          nome="Portfólio"
          descricao="Neste projeto do curso de programação Full-Stack, realizamos a construção
          do próprio site responsável por nosso portfólio, utilizando apenas as ferramentas HTML5 e CSS3."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/3291/3291695.png"
          texto="GitHub" 
        />        

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/49/49656.png" 
          texto="Linkedin" 
        />

      </div>
    </div>
  );
}

export default App;
