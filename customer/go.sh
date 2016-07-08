if [[ $1 = 'start' ]]
then
  docker-compose up --build -d
  docker-compose exec app npm run seed
elif [[ $1 = 'stop' ]]
then
  docker-compose down
elif [[ $1 = 'test' ]]
then
  docker-compose up -d
  docker-compose exec app npm test
  docker-compose down
else
  echo "Valid commands: start|test|stop"
fi
