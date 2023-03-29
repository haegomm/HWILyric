echo "*******************************"
echo "*******BUILDING FRONTEND*******"
echo "*******************************"

# frontend 빌드
cd /var/jenkins_home/workspace/pipeline-fe/frontend/hwilyric
npm install
npm run build

echo "********************************"
echo "***BUILDING DOCKER CONTAINERS***"
echo "********************************"

# docker container 빌드
cd /var/jenkins_home/workspace/pipeline-fe/pipeline/jenkins/frontend
docker compose build --no-cache
