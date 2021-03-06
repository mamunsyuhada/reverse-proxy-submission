# NGINX as Reverse Proxy Submission (DevOps-Dicoding)

## NGINX.conf
```
upstream app {
  server app-express:8000;
}

limit_req_zone $binary_remote_addr zone=one:10m rate=10r/m;

server {
  listen 3000 default_server;

  location / {
    proxy_pass http://app;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;

    limit_req zone=one;
  }
}

```
### How to run it ?

```
docker compose -f "docker.compose.yml" up -d --build
```
