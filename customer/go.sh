image=failure-simulator-node
container=failure-simulator-customer
port=8888

stop_container() {
  docker ps | grep $container && docker stop $container && docker rm -f $container
}

delete_untagged_images() {
  docker images --no-trunc -aqf "dangling=true" | xargs docker rmi
}

if [[ $1 = 'start' ]]
then
  stop_container
  docker run -p $port:$port -it -v "$PWD":/usr/src/app --name $container $image bash -c 'npm install; npm start'
  exit
elif [[ $1 = 'test' ]]
then
  stop_container
  docker run -p $port:$port -it -v "$PWD":/usr/src/app --name $container $image bash -c 'npm install; npm test'
elif [[ $1 = 'build' ]]
then
  stop_container
  delete_untagged_images
  docker build -t $image -f Dockerfile .
  exit
else
  echo "Invalid parameter"
fi
