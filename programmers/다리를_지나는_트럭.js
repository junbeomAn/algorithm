// function solution(bridge_length, weight, truck_weights) {
//     let totalWeightOnBridge = 0, time = 0, trucksOnBridge = [];

//     while (1) {
//         if (!trucksOnBridge.length && !truck_weights.length) {
//             return time;
//         }
//         time++;
//          if ( trucksOnBridge.length && (trucksOnBridge[0].time + bridge_length === time)) {
//             totalWeightOnBridge -= trucksOnBridge[0].truckWeight;
//             trucksOnBridge.shift();
//         }
//         if (totalWeightOnBridge + truck_weights[0] <= weight) {
//             let truckWeight = truck_weights.shift();
//             trucksOnBridge.push({ time, truckWeight });
//             totalWeightOnBridge += truckWeight;
//         }

//     }
// }

function solution(bridge_length, weight, truck_weights) {
  const bridge = [];
  let sum = 0;
  let time = 0;

  while (true) {
    if (truck_weights.length === 0 && bridge.length === 0) {
      break;
    }
    if (bridge.length > 0 && time - bridge[0].time === bridge_length) {
      const first = bridge.shift();
      sum -= first.weight;
    }
    if (bridge.length < bridge_length && sum + truck_weights[0] <= weight) {
      bridge.push({ time, weight: truck_weights[0] });

      sum += truck_weights[0];
      truck_weights.shift();
    }
    time += 1;
  }
  return time;
}
