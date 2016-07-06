image=failure-simulator-node
container=failure-simulator-customer
port=8888

delete_container() {
  docker stop $container
  docker rm -f $container
}

if [[ $1 = 'start' ]]
then
  delete_container
  docker run -p $port:$port -it -v "$PWD":/usr/src/app --name $container $image bash -c 'npm install; npm start'
  exit
elif [[ $1 = 'test' ]]
then
  delete_container
  docker run -p $port:$port -it -v "$PWD":/usr/src/app --name $container $image bash -c 'npm install; npm test'
elif [[ $1 = 'build' ]]
then
  delete_container
  docker rmi -f $image
  docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
  docker build -t $image -f Dockerfile .
  exit
else
  echo "Invalid parameter"
fi
