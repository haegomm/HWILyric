# deploy.sh

echo "*********************************"
echo "***DEPLOYING DOCKER CONTAINERS***"
echo "*********************************"

# docker container 실행
cd /var/jenkins_home/workspace/pipeline-fe/pipeline/jenkins/frontend
docker compose up -d

# dangling images 삭제
docker image prune -f
