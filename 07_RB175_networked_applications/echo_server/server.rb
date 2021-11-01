require "socket"

def parse_request(request_line)
  http_method, path_and_params, http = request_line.split
  path, params = path_and_params.split("?")

  params = (params || "").split("&").each_with_object({}) do |pair, hash|
    key, value = pair.split("=")
    hash[key] = value
  end

  [http_method, path, params]
end

server = TCPServer.new("localhost", 3003) # Create server that listens on port 3003

loop do
  client = server.accept # Accepts a next connection. Creates new socket object.

  request_line = client.gets # Read lines from socket
  next if !request_line || request_line =~ /favicon/

  http_method, path, params = parse_request(request_line)

  client.puts "HTTP/1.1 200 OK" # Needed for rendering in chrome
  client.puts "Content-Type: text/html\r\n\r\n" # Needed for rendering in chrome
  client.puts "<html>"
  client.puts "<body>"
  client.puts "<pre>"
  client.puts http_method
  client.puts path
  client.puts params
  client.puts "</pre>"

  client.puts "<h1>Counter</h1>"

  number = params["number"].to_i
  client.puts "<p>The current number is #{number}.</p>"

  client.puts "<a href='?number=#{number + 1}'>Add one.</a>"
  client.puts "<a href='?number=#{number - 1}'>Subtract one.</a>"

  client.puts "</body>"
  client.puts "</html>"
  client.close
end
