const sendMessageButton = document.getElementById("send-message");
const messageInput = document.getElementById("message");

sendMessageButton.addEventListener("click", function(event) {
  event.preventDefault();
  const message = messageInput.value;
  // Aqui você pode adicionar o código para enviar a mensagem para o seu bot do Telegram
  console.log(`A mensagem "${message}" foi enviada.`);

const sendMessageButton = document.getElementById("send-message");
const messageInput = document.getElementById("message");

sendMessageButton.addEventListener("click", function(event) {
  event.preventDefault();
  const message = messageInput.value;

  // Aqui você precisará adicionar seu token de acesso à API do Telegram
  const accessToken = "SEU_TOKEN_AQUI";

  // Enviar a mensagem para o seu bot do Telegram
  fetch(`https://api.telegram.org/bot${accessToken}/sendMessage?chat_id=SEU_ID_DE_CHAT_AQUI&text=${message}`)
    .then(response => {
      console.log("Mensagem enviada com sucesso!");
    })
    .catch(error => {
      console.error("Ocorreu um erro ao enviar a mensagem:", error);
    });
});
