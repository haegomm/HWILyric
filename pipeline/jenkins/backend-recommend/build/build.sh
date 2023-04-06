echo "********************************"
echo "***Building DOCKER CONTAINERS***"
echo "********************************"

# docker container 빌드
cd /var/jenkins_home/workspace/pipeline-dj/pipeline/jenkins/backend-recommend
docker compose build --no-cache
