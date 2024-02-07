import csv
import json

class Route:
  def __init__(self, rid, rshort, rlong, rtype):
    self.route_id = f"BKK_{rid}"
    self.route_short_name = rshort
    self.route_long_name = rlong
    self.route_type = rtype

  def __str__(self):
    return f'Route: {self.route_id}\nShort name: {self.route_short_name}\nLong name: {self.route_long_name}\nType: {self.route_type}\n\n'

class Stop:
  def __init__(self, sid, sname, scode, slon, slat):
    self.stop_id = f"BKK_{sid}"
    self.stop_name = sname
    self.stop_code = scode
    self.stop_coords = [slat, slon]
  
  def __str__(self):
    return f'Stop: {self.stop_id}\nName: {self.stop_name}\nCode: {self.stop_code}\n\n'

routes = []
stops = []

with open('./gtfs/routes.txt', newline='') as routes_file:
    next(routes_file)
    reader = csv.reader(routes_file, delimiter=',', quotechar='"', )
    for row in reader:
        routes.append(Route(row[1], row[2], row[5], row[4]))

with open('./gtfs/stops.txt', newline='') as stops_file:
  next(stops_file)
  reader = csv.reader(stops_file, delimiter=',', quotechar='"', )
  for row in reader:
    stops.append(Stop(row[0], row[1], row[4], row[3], row[2]))

with open('./gtfs/routes.toml', 'w') as routes_file:
  for route in routes:
    routes_file.write(f'[[routes]]\nroute_id = "{route.route_id}"\nroute_short_name = "{route.route_short_name}"\nroute_long_name = "{route.route_long_name}"\nroute_type = {route.route_type}\n\n')

with open('./gtfs/stops.toml', 'w') as stops_file:
  for stop in stops:
    stops_file.write(f'[[stops]]\nstop_id = "{stop.stop_id}"\nstop_name = "{stop.stop_name}"\nstop_code = "{stop.stop_code}"\nstop_coords = [{stop.stop_coords[0]}, {stop.stop_coords[1]}]\n\n')