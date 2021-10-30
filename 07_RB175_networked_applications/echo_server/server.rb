require "socket"

server = TCPServer.new("localhost", 3003) # Create server that listens on port 3003

loop do
  client = server.accept # Accepts a next connection. Creates new socket object.

  request_line = client.gets # Read lines from socket
  puts request_line

  client.puts "HTTP/1.1 200 OK" # Needed for rendering in chrome
  client.puts "Content-Type: text/plain\r\n\r\n" # Needed for rendering in chrome
  client.puts request_line
  client.close
end

# loop do
# client = server.accept
# request_line = client.gets
# puts request_line

# client.puts request_line
# client.puts "HTTP/1.1 200 OK"
# client.puts "Content-Type: text/plain\r\n\r\n"
# client.close
# end
