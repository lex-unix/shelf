# Reading tracking app

## Local development

You would need a Postgres database up and running.

To start the server, navigate to the `server` to directory.
Compile TypeScript with `pnpm watch` and in another terminal, start the server with `pnpm dev`

To start the frontend, navigate to the `web` directory and run `pnpm dev`.

## Deployment

This application runs on Hetzner Cloud. To create the infrastructure,
change to the infra directory and run `terraform apply`.

This will create an Ubuntu instance on Hetzner, retrieve the machine's IP address,
and add DNS records in Cloudflare to point to that IP.

To deploy the application, execute `deploy.sh` (you need to run `chmod +x ./infra/deploy.sh` first).
This will copy all necessary files to the server (`.env`, `docker-compose.yaml`, etc.),
start the compose project, and set up the required secrets for GitHub Actions.

## Environmet variables and Terraform variables

`.env` example:

```
# Web
WEB_API=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Server
PGHOST=
PGPORT=
PGUSER=
PGDATABASE=
PGPASSWORD=
REDIS_URL=
CORS_ORIGIN=
SERVER_PORT=
SERVER_HOST=
COOKIE_SECRET=
COOKIE_NAME=

# DB
POSTGRES_PASSWORD=
POSTGRES_USER=
POSTGRES_DB=

# Traefik
TRAEFIK_ACME_EMAIL=
```

`terraform.vars` example:

```hcl
hcloud_token       = ""
cloudflare_token   = ""
cloudflare_zone_id = ""
```
