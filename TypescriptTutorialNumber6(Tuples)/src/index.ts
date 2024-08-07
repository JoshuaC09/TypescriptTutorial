let person: [string, number, boolean] = ["Joshua", 30, true];

let hsla: [number, string, string, number];

hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [94.7, 20.23];

function useCoords(): [number, number] {
  const lat = 100;
  const long = 50;

  return [lat, long];
}

let user: [name: string, age: number];

user = ["peach", 23];

console.log(user[0]);
