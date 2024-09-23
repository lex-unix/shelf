#!/bin/bash

set -eu

APP=shelf
SSH_USER=devops
SSH_HOST=$(terraform output -json | jq -r '.ip_address.value')
WORK_DIR="/home/$SSH_USER/apps/$APP"

ssh $SSH_USER@$SSH_HOST "mkdir -p $WORK_DIR"

rsync -avzP -e ssh ../server/db/*.sql $SSH_USER@$SSH_HOST:$WORK_DIR
rsync -avzP -e ssh ./.env $SSH_USER@$SSH_HOST:$WORK_DIR
rsync -avzP -e ssh ./docker-compose.yaml $SSH_USER@$SSH_HOST:$WORK_DIR


ssh $SSH_USER@$SSH_HOST "cd $WORK_DIR && docker compose up -d"

ssh $SSH_USER@$SSH_HOST "cd $WORK_DIR && docker compose cp create-tables.sql db:/tmp/create-tables.sql"
ssh $SSH_USER@$SSH_HOST "cd $WORK_DIR && docker compose cp create-triggers.sql db:/tmp/create-triggers.sql"

ssh $SSH_USER@$SSH_HOST "cd $WORK_DIR && docker compose exec db psql -U lex -d shelf -f /tmp/create-tables.sql"
ssh $SSH_USER@$SSH_HOST "cd $WORK_DIR && docker compose exec db psql -U lex -d shelf -f /tmp/create-triggers.sql"

ssh-keygen -t rsa -b 4096 -f ./ssh_key
ssh-copy-id -i ./ssh_key.pub $SSH_USER@$SSH_HOST

SSH_PRIVATE_KEY=$(cat ./ssh_key)


gh secret set SSH_PRIVATE_KEY --body "$SSH_PRIVATE_KEY"
gh secret set SSH_HOST --body "$SSH_HOST"
gh secret set SSH_USER --body "$SSH_USER"
gh secret set WORK_DIR --body "$WORK_DIR"

rm ./ssh_key ./ssh_key.pub
