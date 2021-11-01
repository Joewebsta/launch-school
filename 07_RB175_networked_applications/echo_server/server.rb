require "socket"

def parse_request(request_line)
  request_line_arr = request_line.split

  http_method = request_line_arr[0]
  path_and_params = request_line_arr[1].split('?')
  path = path_and_params[0]
  params = path_and_params[1]
  params_arr = params.split('&').map { |param| param.split('=') }
  params = params_arr.each_with_object({}) do |(name, val), hash|
    hash[name] = val
  end

  [http_method, path, params]
end

server = TCPServer.new("localhost", 3003) # Create server that listens on port 3003

loop do
  client = server.accept # Accepts a next connection. Creates new socket object.

  request_line = client.gets # Read lines from socket
  next if !request_line || request_line =~ /favicon/

  request_line_components = parse_request(request_line)
  params = request_line_components[2]
  rolls = params['rolls'].to_i
  sides = params['sides'].to_i

  client.puts "HTTP/1.1 200 OK" # Needed for rendering in chrome
  client.puts "Content-Type: text/plain\r\n\r\n" # Needed for rendering in chrome
  client.puts request_line
  rolls.times { client.puts(rand(sides) + 1) }
  client.close
end
