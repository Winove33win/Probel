#!/bin/bash

# Este script é responsável por construir o aplicativo React.

# Navegar para o diretório do projeto
cd "$(dirname "$0")/.."

# Instalar dependências
npm install

# Construir o aplicativo
npm run build

# Exibir mensagem de conclusão
echo "Construção do aplicativo concluída com sucesso!"