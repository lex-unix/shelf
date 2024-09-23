terraform {
  required_providers {
    hcloud = {
      source  = "hetznercloud/hcloud"
      version = "~> 1.45"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }

  required_version = ">= 1.2.0"
}

variable "hcloud_token" {
  type      = string
  sensitive = true
}

variable "cloudflare_token" {
  type      = string
  sensitive = true
}

variable "cloudflare_zone_id" {
  type      = string
  sensitive = true
}


provider "hcloud" {
  token = var.hcloud_token
}

provider "cloudflare" {
  api_token = var.cloudflare_token
}

data "hcloud_ssh_key" "key" {
  name = "primary"
}

data "hcloud_firewall" "http_firewall" {
  name = "firewall-http"
}

resource "hcloud_server" "ubunt_web_server" {
  name         = "ubuntu-web-server"
  server_type  = "cx22"
  image        = "ubuntu-22.04"
  location     = "hel1"
  firewall_ids = [data.hcloud_firewall.http_firewall.id]
  ssh_keys     = [data.hcloud_ssh_key.key.id]
  user_data    = file("cloudinit.yaml")
}

resource "cloudflare_record" "frontend" {
  zone_id = var.cloudflare_zone_id
  name    = "shelf"
  content = hcloud_server.ubunt_web_server.ipv4_address
  type    = "A"
  proxied = true
  comment = "shelf frontend"
}

resource "cloudflare_record" "backend" {
  zone_id = var.cloudflare_zone_id
  name    = "api.shelf"
  content = hcloud_server.ubunt_web_server.ipv4_address
  type    = "A"
  proxied = true
  comment = "shelf backend"
}
