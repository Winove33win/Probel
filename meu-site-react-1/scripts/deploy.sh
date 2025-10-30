#!/bin/bash

# Script para implantar o aplicativo React em um servidor

# Defina as variáveis necessárias
APP_DIR="/path/to/your/app"  # Diretório do aplicativo no servidor
BUILD_DIR="$APP_DIR/build"    # Diretório onde os arquivos de build serão copiados
SERVER_USER="your_user"       # Usuário do servidor
SERVER_IP="your_server_ip"    # IP do servidor

# Construir o aplicativo
echo "Construindo o aplicativo..."
npm run build

# Copiar os arquivos de build para o servidor
echo "Copiando arquivos para o servidor..."
scp -r build/* $SERVER_USER@$SERVER_IP:$BUILD_DIR

# Reiniciar o servidor (se necessário)
echo "Reiniciando o servidor..."
ssh $SERVER_USER@$SERVER_IP "sudo systemctl restart nginx"

echo "Implantação concluída!"