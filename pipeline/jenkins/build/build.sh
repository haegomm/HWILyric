echo "********************************"
echo "********Building BACKEND********"
echo "********************************"

# backend 빌드
cd /var/jenkins_home/workspace/hl-pipeline/backend
gradle clean build -x test

echo "********************************"
echo "***Building DOCKER CONTAINERS***"
echo "********************************"

# docker container 빌드
cd /var/jenkins_home/workspace/hl-pipeline/pipeline
docker compose build --no-cache
