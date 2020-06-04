# ![image](https://i.imgur.com/kiL2fRZ.png)

## O que é?
- Resumidamente, esta aplicação tem o objetivo de **possibilitar ao usuário a realização de cadastro de pontos de coleta de materiais em sua cidade** através da utilização de um mapa.

- Também possibilita ao usuário **vizualizar os pontos de coleta na cidade escolhida** e **filtrar os pontos pelo tipo de item que esse ponto coleta**.
&nbsp;

**Vamos detalhar um pouco mais....**

&nbsp;
# Instalando o app :
- Para rodar a aplicação é bem fácil, siga os seguintes passos:
  - ### 1- Baixe o repositório.
  - ### 2- Execute o comando **npm i** ou **yarn** dentro das pastas  (**/web**, **/mobile**, **/server**)
  - ### 3- Altere o *Endereço IP* em alguns arquivos:
    - Utilizando o comando **ifconfig** no Ubuntu ou **ipconfig** no windows, copie o seu endereçõ IPv4 e coloque-o nos seguintes arquivos:
    &nbsp;

      - **web/src/services/Api.tsx** 
      - **mobile/src/services/Api.tsx**
      
    &nbsp;
  - ### 4- Abra 3 terminais(Um para cada pasta),
    - No *terminal 1*, acesse a pasta **web**(utilize o comando **cd web** no terminal), e execute o comando **yarn start** ou **npm start**
    
    &nbsp;
    - No *terminal 2*, acesse a pasta **server**(utilize o comando **cd server** no terminal), e execute o comando **yarn dev:server** ou **npm dev:server**
    
    &nbsp;
    - No *terminal 3*, acesse a pasta **mobile**(utilize o comando **cd mobile** no terminal), e execute o comando **yarn start** ou **npm start**

      
&nbsp;
# Usando o app :

&nbsp;

## Cadastro de pontos
  - Na versão **WEB** da aplicação é possível realizar o cadastro dos pontos apenas clicando no mapa, preenchendo as informações do ponto de coleta e marcando os items com que esse ponto irá trabalhar .

  - Passos:
    - ### **1**- Clique em **Cadastre um ponto de coleta
      [<img src="https://i.imgur.com/Q7UiZd9.png" width="780"/>](image.png)
    - ### **2**- Preencha as informações sobre o ponto de coleta
      [<img src="https://i.imgur.com/U9xDAyp.png" width="600"/>](image.png)
      [<img src="https://i.imgur.com/kS3upi9.png" width="600"/>](image.png)
    - ### **3**- Com o mouse clique no mapa para selecionar um ponto e clique nos items que esse ponto coletará
      [<img src="https://i.imgur.com/wddt3MG.png" width="780"/>](image.png)
    - ### **4**- Agora basta clicar em **Cadastrar ponto de coleta** e seu ponto será registrado na base de dados e aparecerá no seu App mobile.
&nbsp;
## Visualização dos pontos no mapa
  &nbsp;
  - Já na versão **MOBILE**, a tela inicial é onde o usuário informa o estado e a cidade de onde quer procurar pontos de coleta.
  - Logo após selecionar a localidade o usuário vai para uma página onde existe um mapa e os items de coleta.
  - Para filtrar os pontos por item basta apenas pressionar nos items que eles irão ficar com uma borda verde indicando que estão selecionados !

  - Passos:
    - ### **1**- Marque a cidade e o estado de onde quer visualizar os pontos de coleta ;
    
      |    |            |   |
      |----------|:-------------:|------:|
      | [<img src="https://i.imgur.com/2iGj8kj.jpg" width="200"/>](image.png) |  -----> | [<img src="https://i.imgur.com/MIVNVef.jpg/width" width="200"/>](image.png) |
    - ### **2**- Marque os items que filtrarão os pontos de coleta no mapa ;
      |    |            |   |
      |----------|:-------------:|------:|
      | [<img src="https://i.imgur.com/xRpd517.jpg" width="200"/>](image.png) |  -----> | [<img src="https://i.imgur.com/faHFXZ9.jpg" width="200"/>](image.png) |
    - ### **3**- Clique em algum ponto para obter suas respectivas informações ;
      - Ao clicar em **WhatsApp** ou **E-mail** você será direcionado ao seu **Aplicativo de email** ou **para o App do WhatsApp** com as informações do contato previamente preenchidas(Ja abrirá um chat com o responsável pelo ponto de coleta ou ja enviará um email ao responsável pelo ponto d coleta).

        [<img src="https://i.imgur.com/d5ahYiy.jpg" width="250"/>](image.png)
        
        &nbsp;

## Visualização dos detalhes do ponto
  - Logo após filtrar, é possível também clicar nos pontos para obter detalhes sobre o mesmo.
  
  - Nessa página de detalhes sobre o ponto é possível também mandar um e-mail ou uma mensagem no whatsapp para os responsáveis do lugar, basta apenas clicar nos respectivos botoẽs localizados na parte inferior da tela.
  
  &nbsp;