if [[ $1 = 'test' ]]
then
  docker-compose up -d
  docker-compose exec app npm test
  docker-compose down
else
  echo "Valid commands: start|test|build"
fi
