output "ip_address" {
  description = "Server public IPv4 address"
  sensitive   = false
  value       = hcloud_server.ubunt_web_server.ipv4_address
}
