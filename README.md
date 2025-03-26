# FoodParkSystem
## Descrição da Atividade

Suponha que você foi contratado para criar um aplicativo para um pátio gastronômico, que possui diversas opções de lojas de alimentação e bebidas e promove apresentações musicais, atividades de lazer para crianças, shows de stand-up, palestras e outros tipos de eventos que atraiam público para o local. 

### O aplicativo deve possuir as seguintes telas:

 - uma tela de abertura (splash screen) com a logomarca do pátio;
 - uma tela inicial com informações gerais sobre o pátio, incluindo uma ou mais fotos, endereço, acesso à localização no mapa, telefone, WhatsApp, redes sociais, web site e e-mail para contato;
 - uma tela com a programação semanal de eventos, na qual possam ser exibidos vídeos dos artistas;
 - uma tela com a lista de lojas de alimentação e bebidas (crie pelo menos cinco lojas);
 - uma tela com informações gerais sobre cada loja, como um banner, uma ou mais fotos, um texto curto de descrição da loja, telefone, WhatsApp, redes sociais, e-mail, link/botão para abrir um aplicativo de entrega e outro link/botão para acessar o cardápio;
 - uma tela com a lista de itens do cardápio de uma loja, com uma foto em miniatura (thumbnail), nome do produto e preço;
 - uma tela com informações detalhadas sobre um item do cardápio, com foto, descrição, quantidade (peso, volume, unidades, etc.), uma lista de ingredientes e preço;
 - uma tela da cesta de compras, contendo a lista de produtos que o cliente pretende comprar.
 - O usuário deve ter a opção de incluir um ou mais itens do cardápio, da mesma loja ou de lojas diferentes, na sua cesta de compras. Sempre que quiser, o usuário poderá retirar um item da cesta, alterar a quantidade de um produto ou esvaziar o carrinho. Dica: use o 
 - AsyncStorage para criar uma base de dados local do tipo chave-valor com os produtos da cesta de compras.

A navegação entre as telas do aplicativo deve ser feita por meio de um menu (upload.wikimedia.org/wikipedia/commons/thumb/b/b2/...) ou de uma barra de navegação situada na parte superior ou inferior do app. Dica: utilize os componentes Drawer, Top Tab Navigator ou Bottom Tab Navigator do pacote React Navigation.

Os dados utilizados pelo aplicativo podem ficar armazenados na pasta de assets do projeto ou em um servidor remoto, em formato JSON ou XML. Em hipótese alguma os dados devem estar hard-coded no código-fonte do aplicativo! Adote a estratégia que lhe parecer mais adequada para permitir a atualização dos dados e ao mesmo tempo evitar acessos à rede desnecessários (e consequentemente poupar uso da rede de dados e consumo de bateria). As informações podem ser totalmente fictícias e as fotos e vídeos podem ser obtidos por meio de buscas na Web.
