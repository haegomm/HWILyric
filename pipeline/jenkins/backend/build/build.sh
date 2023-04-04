echo "********************************"
echo "********Building BACKEND********"
echo "********************************"

# backend 빌드
cd /var/jenkins_home/workspace/pipeline-be/backend
gradle clean build -x test

echo "********************************"
echo "***Building DOCKER CONTAINERS***"
echo "********************************"

# docker container 빌드
cd /var/jenkins_home/workspace/pipeline-be/pipeline/jenkins/backend
docker compose build --no-cache
