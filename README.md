# This is practice repo for k8s with Vue.js and go

## Command Utils

### Remove all volumes

```bash
docker volume rm $(docker volume ls -qf dangling=true)
```

### Remove all containers

```bash
docker ps -a | awk 'NR>1 {print $1}' | xargs docker rm
```

### Enter docker container

```bash
docker exec -it <container-name> bash
```