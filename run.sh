#!/bin/bash

# 운영 체제 감지
OS_TYPE=$(uname)

# 호스트 IP 주소 초기화
HOST_IP=""

# 운영 체제에 따라 IP 주소 얻기
if [ "$OS_TYPE" == "Darwin" ]; then
  # macOS
  HOST_IP=$(ifconfig | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}' | head -n 1)
elif [ "$OS_TYPE" == "Linux" ]; then
  # Ubuntu
  HOST_IP=$(hostname -I | awk '{print $1}')
else
  echo "지원되지 않는 운영 체제입니다: $OS_TYPE"
  exit 1
fi

# IP 주소 출력
echo "Host IP: $HOST_IP"

# Docker Compose 실행
HOST_IP=$HOST_IP docker-compose up --build -d