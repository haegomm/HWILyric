echo "*******************************"
echo "*******Building FRONTEND*******"
echo "*******************************"

# frontend 빌드
cd /var/jenkins_home/workspace/hl-pipeline/frontend
npm install
npm run build

echo "********************************"
echo "***Building DOCKER CONTAINERS***"
echo "********************************"

# docker container 빌드
cd /var/jenkins_home/workspace/hl-pipeline/pipeline/frontend
docker compose build --no-cach
