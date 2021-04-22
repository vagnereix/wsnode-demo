# WebSocket Node Demo

## "Desacoplar" o servidor web do servidor socket

O servidor web utiliza o protocolo HTTP enquanto o servidor socket utiliza o WebSockets.

## Socket.io não é uma bala de prata

Você não precisa utilizar ele para manter Dasboards atualizados, você pode utilizar o react-query ou SWR da vercel para esse caso de uso. Socket.io vai ser mais utilizado para chats e jogos. Socket.io mantém uma conexão entre o servidor e o cliente, onde ambos podem trocar mensagens assíncronas.
