class Node {
  constructor(ptr) {
      this.ptr = ptr;
      this.link = null;
  }
}

class MainNode {
  constructor(block) {
      this.block = block;
      this.link = null;
  }
}

class MapClass {
  constructor() {
      this.arr = [
          new MainNode("M0"), new MainNode("M1"), new MainNode("M2"), new MainNode("M3"), new MainNode("M4"),
          new MainNode("K0"), new MainNode("K1"), new MainNode("K2"), new MainNode("K3"), new MainNode("K4"),
          new MainNode("J0"), new MainNode("J1"), new MainNode("J2"), new MainNode("J3"), new MainNode("J4"),
          new MainNode("E0"), new MainNode("E1"), new MainNode("E2"), new MainNode("E3"), new MainNode("E4"),
          new MainNode("F0"), new MainNode("F1"), new MainNode("F2"), new MainNode("F3"), new MainNode("F4")
      ];

      // Initialize links similar to the C++ constructor
      this.arr[0].link = new Node(this.arr[1]);
      this.arr[1].link = new Node(this.arr[0]);
      this.arr[1].link.link = new Node(this.arr[2]);
      this.arr[2].link = new Node(this.arr[1]);
      this.arr[2].link.link = new Node(this.arr[3]);
      this.arr[3].link = new Node(this.arr[2]);
      this.arr[3].link.link = new Node(this.arr[4]);
      this.arr[4].link = new Node(this.arr[3]);

      this.arr[5].link = new Node(this.arr[6]);
      this.arr[6].link = new Node(this.arr[5]);
      this.arr[6].link.link = new Node(this.arr[7]);
      this.arr[7].link = new Node(this.arr[6]);
      this.arr[7].link.link = new Node(this.arr[8]);
      this.arr[8].link = new Node(this.arr[7]);
      this.arr[8].link.link = new Node(this.arr[9]);
      this.arr[9].link = new Node(this.arr[8]);

      this.arr[10].link = new Node(this.arr[11]);
      this.arr[11].link = new Node(this.arr[10]);
      this.arr[11].link.link = new Node(this.arr[12]);
      this.arr[12].link = new Node(this.arr[11]);
      this.arr[12].link.link = new Node(this.arr[13]);
      this.arr[13].link = new Node(this.arr[12]);
      this.arr[13].link.link = new Node(this.arr[14]);
      this.arr[14].link = new Node(this.arr[13]);

      this.arr[15].link = new Node(this.arr[16]);
      this.arr[16].link = new Node(this.arr[15]);
      this.arr[16].link.link = new Node(this.arr[17]);
      this.arr[17].link = new Node(this.arr[16]);
      this.arr[17].link.link = new Node(this.arr[18]);
      this.arr[18].link = new Node(this.arr[17]);
      this.arr[18].link.link = new Node(this.arr[19]);
      this.arr[19].link = new Node(this.arr[18]);

      this.arr[20].link = new Node(this.arr[21]);
      this.arr[21].link = new Node(this.arr[20]);
      this.arr[21].link.link = new Node(this.arr[22]);
      this.arr[22].link = new Node(this.arr[21]);
      this.arr[22].link.link = new Node(this.arr[23]);
      this.arr[23].link = new Node(this.arr[22]);
      this.arr[23].link.link = new Node(this.arr[24]);
      this.arr[24].link = new Node(this.arr[23]);

      // Additional links
      this.arr[1].link.link.link = new Node(this.arr[6]);
      this.arr[2].link.link.link = new Node(this.arr[12]);
      this.arr[3].link.link.link = new Node(this.arr[8]);
      this.arr[3].link.link.link.link = new Node(this.arr[13]);
      this.arr[4].link.link = new Node(this.arr[9]);
      this.arr[4].link.link.link = new Node(this.arr[14]);
      this.arr[6].link.link.link = new Node(this.arr[1]);
      this.arr[6].link.link.link.link = new Node(this.arr[16]);
      this.arr[7].link.link.link = new Node(this.arr[12]);
      this.arr[7].link.link.link = new Node(this.arr[17]);
      this.arr[8].link.link.link = new Node(this.arr[3]);
      this.arr[8].link.link.link.link = new Node(this.arr[18]);
      this.arr[9].link.link = new Node(this.arr[4]);
      this.arr[8].link.link.link.link = new Node(this.arr[13]);
      this.arr[9].link.link.link = new Node(this.arr[14]);
      this.arr[9].link.link.link.link = new Node(this.arr[19]);
      this.arr[12].link.link.link = new Node(this.arr[2]);
      this.arr[12].link.link.link.link = new Node(this.arr[7]);
      this.arr[13].link.link.link = new Node(this.arr[3]);
      this.arr[13].link.link.link.link = new Node(this.arr[8]);
      this.arr[14].link.link = new Node(this.arr[4]);
      this.arr[14].link.link.link = new Node(this.arr[9]);
      this.arr[16].link.link = new Node(this.arr[6]);
      this.arr[17].link.link.link = new Node(this.arr[7]);
      this.arr[17].link.link.link.link = new Node(this.arr[22]);
      this.arr[18].link.link.link = new Node(this.arr[8]);
      this.arr[19].link.link = new Node(this.arr[9]);
      this.arr[19].link.link.link = new Node(this.arr[24]);
      this.arr[22].link.link.link = new Node(this.arr[17]);
      this.arr[24].link.link = new Node(this.arr[19]);

      //more
      this.arr[0].link.link = new Node(this.arr[10]); // M0 connected to J0
      this.arr[0].link.link.link = new Node(this.arr[5]); // M0 connected to K0
      this.arr[10].link.link = new Node(this.arr[20]); // J0 connected to F0
      this.arr[10].link.link.link = new Node(this.arr[5]); // J0 connected to K0
      this.arr[5].link.link = new Node(this.arr[15]); // K0 connected to E0
      this.arr[5].link.link.link = new Node(this.arr[10]); // K0 connected to J0
      this.arr[5].link.link.link.link = new Node(this.arr[0]); // K0 connected to M0
      this.arr[15].link.link = new Node(this.arr[5]); // E0 connected to K0
      this.arr[15].link.link.link = new Node(this.arr[20]); // E0 connected to F0

  }

  isGroundFloorNode(node) {
    return node.block.endsWith('0');
  }

  getDistance(node1, node2) {
    if (this.isGroundFloorNode(node1) && this.isGroundFloorNode(node2)) {
        return 1.2;
    }
    return 1;
  }



  display(end) {
      let outp = null;
      const start = document.querySelector('#ip2').value;
      console.log(start);
      document.querySelector('#op').innerText = "...";
      let startUpper = start.toUpperCase();
      if (startUpper === "BRIDGE"){
        startUpper = "E2";
      }
      const endUpper = end.toUpperCase();
      let startNode = null;
      let endNode = null;

      for (let i = 0; i < 25; i++) {
          if (this.arr[i].block === startUpper) {
              startNode = this.arr[i];
          }
          if (this.arr[i].block === endUpper) {
              endNode = this.arr[i];
          }
      }

      if (!startNode || !endNode) {
          outp = "Invalid blocks entered.";
          return;
      }

      const previous = new Map();
      const distance = new Map();
      const path = [];
      const instruction = [];
      const visited = new Map();

      for (let i = 0; i < 25; i++) {
          distance.set(this.arr[i], Infinity);
          visited.set(this.arr[i], false);
      }

      distance.set(startNode, 0);

      let current = startNode;
      while (current !== endNode) {
          visited.set(current, true);

          let neighbor = current.link;
          while (neighbor !== null) {
              const neighborPtr = neighbor.ptr;
              if (!visited.get(neighborPtr) && distance.get(current) + this.getDistance(current, neighborPtr) < distance.get(neighborPtr)) { // <- modified code here 
                  distance.set(neighborPtr, distance.get(current) + 1);
                  previous.set(neighborPtr, current);
              }

              neighbor = neighbor.link;
          }

          let minDist = Infinity;
          let next = null;
          for (let i = 0; i < 25; i++) {
              if (!visited.get(this.arr[i]) && distance.get(this.arr[i]) < minDist) {
                  minDist = distance.get(this.arr[i]);
                  next = this.arr[i];
              }
          }

          if (!next) {
              outp = `No path found between ${start} and ${end}`;
              return;
          }

          current = next;
      }

      let temp = endNode;
      while (temp !== startNode) {
          path.push(temp.block);
          temp = previous.get(temp);
      }
      path.push(startNode.block);

      outp = `Shortest path from ${start} to ${end}:\n`;
      let prev = "NULL";
      while (path.length > 0) {
          const top = path.pop();
          outp += (top + "\n");
          if (prev !== "NULL") {
              if (parseInt(prev.substr(1, 1)) > parseInt(top.substr(1, 1))) {
                  if (instruction[0] !== "Use stairs or lift to go down") {
                      instruction.push("Use stairs or lift to go down");
                  }
              } else if (parseInt(prev.substr(1, 1)) < parseInt(top.substr(1, 1))) {
                  if (instruction[0] !== "Use stairs or lift to go up") {
                      instruction.push("Use stairs or lift to go up");
                  }
              } else {
                  instruction.push("Use connector");
              }
          }
          prev = top;
      }
      outp += "\n";
      while (instruction.length > 0) {
          outp += instruction.shift()+"\n";
      }
      //console.log(outp);
      document.querySelector('#op').innerText = outp;
  }
}

let divi = document.getElementById('hash');
divi.style.display = 'none';

let div = document.getElementById('hish');
div.style.display = 'none';
let display = 0;

function countdown()
{
  const date = new Date();
  let ampm = "AM";
  let hours = date.getHours();
  if (hours > 12){
    ampm = "PM";
    hours -= 12;
  }
  else if(hours == 12){
    ampm = "PM";
  }
  if(hours < 10){
    hours = '0' + hours;
  }
  let minutes = date.getMinutes();
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  let seconds = date.getSeconds();
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  let time = hours + ":" + minutes + ":" + seconds + " " + ampm;

  document.querySelector('#time').innerText = time;
}

function period() {
  const date = new Date();
  let acthour = date.getHours();
  let actmin = date.getMinutes();
  const hour_min = acthour * 60 + actmin;

  if (hour_min >= 480 && hour_min < 560) {
    return 1;
  } else if (hour_min >= 560 && hour_min < 610) {
    return 2;
  } else if (hour_min >= 610 && hour_min < 630) {
    return 0;
  } else if (hour_min >= 630 && hour_min < 680) {
    return 3;
  } else if (hour_min >= 680 && hour_min < 730) {
    return 4;
  } else if (hour_min >= 730 && hour_min < 820) {
    return 0;
  } else if (hour_min >= 820 && hour_min < 870) {
    return 5;
  } else if (hour_min >= 870 && hour_min < 920) {
    return 6;
  } else if (hour_min >= 920 && hour_min < 930) {
    return 0;
  } else if (hour_min >= 930 && hour_min < 970) {
    return 7;
  } else if (hour_min >= 970 && hour_min < 1020) {
    return 8;
  } else {
    return 0;
  }
}

const timetableData = {
  "tcs": {
    "Mon": ["23XT28:OSL", "23XT28:OSL", "23XT27:DSL", "23XT27:DSL", "23XT21:J513", "23XT25:J513" , "NULL" , "NULL"],
    "Tue": ["23XT26:OSL", "23XT26:OSL", "23XT21:M201", "23XT24:M201", "23XT25:M201" , "NULL" , "NULL" , "NULL"],
    "Wed": ["23XT24:M201", "23XT22:M201", "23XT23:M201", "23XT25:M201", "23XT26:DSL", "23XT26:DSL", "23XT21:M201" , "NULL"],
    "Thu": ["23XT21:J511", "23XT22:J511", "23XT28:DSL", "23XT28:DSL", "23XT24:M201", "23XT23:M201" , "NULL" , "NULL"],
    "Fri": ["NULL", "23XT25:M202", "23XT23:M202", "23XT22:M202", "23XT21:M202", "23XT27:SCL", "23XT27:SCL" , "NULL"],
    "Sat": ["NULL", "23XT25:M202", "23XT23:M202", "23XT22:M202", "23XT21:M202", "23XT27:SCL", "23XT27:SCL" , "NULL"]
  },
  "ds": {
    "Mon": ["23XD26:CSL", "23XD26:CSL", "23XD23:J510", "23XD21:J510", "23XD27:SIL", "23XD27:SIL", "23XD22:J511" , "NULL"],
    "Tue": ["23XD21:J512", "23XD22:J512", "23XD27:DSL", "23XD27:DSL", "23XT25:M202", "23XD24:M202", "23XD23:M202" , "NULL"],
    "Wed": ["23XD22:J512", "23XD25:J512", "23XD26:OCL", "23XD26:OCL", "23XD28:OCL", "23XD28:NSL", "23XD21:J512" , "NULL"],
    "Thu": ["23XD25:J512", "23XD24:J512", "23XD28:NSL", "23XD28:DSL", "23XD21:M202", "23XD22:M202", "NULL" , "NULL"],
    "Fri": ["23XD23:J511", "23XD24:J511", "NULL", "23XD22:J511", "23XD22:J511", "23XD25:H203" , "NULL" , "NULL"],
    "Sat": ["23XD23:J511", "23XD24:J511", "NULL", "23XD22:J511", "23XD22:J511", "23XD25:H203" , "NULL" , "NULL"]
  },
  "ss": {
    "Mon": ["23XW26:IAL", "23XW26:IAL", "23XW24:M201", "23XW22:M201", "23XW21:M201", "23XW23:M201" , "NULL" , "NULL"],
    "Tue": ["23XW27:OCL", "23XW27:OCL", "23XW23:J513", "23XW25:J513", "23XW22:J513", "NULL", "23XW21:H203" , "NULL"],
    "Wed": ["23XW21:J511", "23XW24:J511", "23XW28:OSL", "23XW28:OSL", "23XW22:H203", "23XW26:NSL", "23XW26:NSL" , "NULL"],
    "Thu": ["23XW23:J510", "23XW21:J510", "NULL", "23XW22:J513", "23XW27:OCL", "23XW27:OCL", "23XW25:J510" , "NULL"],
    "Fri": ["NULL", "23XW24:M201", "23XW25:M201", "23XW22:M201", "23XW21:M201", "23XW28:OSL", "23XW28:OSL" , "NULL"],
    "Sat": ["NULL", "23XW24:M201", "23XW25:M201", "23XW22:M201", "23XW21:M201", "23XW28:OSL", "23XW28:OSL" , "NULL"]
  },
  "cs": {
    "Mon": ["23XC27:CSL", "23XC27:CSL", "NULL", "23XC21:J512", "23XC22:M202", "23XC26:CSL", "23XC26:CSL" , "NULL"],
    "Tue": ["23XC23:J513", "23XC22:J513", "23XC28:OSL", "23XC28:OSL", "23XC25:M504", "23XC24:M504", "23XC21:M504" , "NULL"],
    "Wed": ["NULL", "23XC24:M504", "23XC22:M504", "23XC25:M504", "23XC23:M504", "23XC21:M504" , "NULL" , "NULL"],
    "Thu": ["23XC21:J513", "23XC23:J513", "23XC27:CSL", "23XC27:CSL", "23XC22:M504", "23XC28:OSL", "23XC28:OSL" , "NULL"],
    "Fri": ["23XC22:M504", "23XC21:M504", "23XC25:M504", "23XC24:M504", "23XC26:CSL", "23XC26:CSL" , "NULL" , "NULL"],
    "Sat": ["23XC22:M504", "23XC21:M504", "23XC25:M504", "23XC24:M504", "23XC26:CSL", "23XC26:CSL" , "NULL" , "NULL"]
  }
};

localStorage.setItem('timetableData', JSON.stringify(timetableData));


function rollver(n) {
  let dest = "NULL";
  let oup = "";
  //let roll = document.querySelector('#ip1').value;
  let d;
  //let radio = document.getElementById('tcs');
  if(tcs.checked){
    d = "tcs";
  }
  else if(ss.checked){
    d = "ss";
  }
  else if(ds.checked){
    d = "ds";
  }
  else if(cs.checked){
    d = "cs";
  }
  const timetableData = JSON.parse(localStorage.getItem('timetableData'));
  
  if (!timetableData) {
    oup = "No timetable data available.";
    return dest;
  }

  //roll = roll.toUpperCase();
  console.log(n);
  console.log("hi");
  console.log(d);
  
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = days[date.getDay()];
  const currentTime = date.toTimeString().slice(0, 5);

  console.log(`${currentDay} ${currentTime}`);
  
  let s = currentDay.substr(0, 3);
  const dayData = timetableData[s.toLowerCase()];

  if (s === 'Sun'){
    //s = 'Sat';
    oup = "NO CLASS";
    document.querySelector('#op0').innerText = oup;
    return dest;
  }

  if (!n || n > 8) {
    oup = "NO CLASS";
    if (confirm("NO CLASS\nWant to check for a period?")) {
      n = prompt("Enter the period you want to check:");
      i = 0;
    } else {
      i = 0;
      return dest;
    }
  }
  
  //let d;
  //if (roll.length < 3) {
    //oup = "Invalid input";
    //return dest;
  //}
  
  /*if (roll === "TCS") {
    d = "tcs";
  } else if (roll === "DS") {
    d = "ds";
  } else if (roll === "CS") {
    d = "cs";
  } else if (roll === "SS") {
    d = "ss";
  } else {
    oup = "Invalid input";
    return dest;
  }*/

  const dayTimetable = timetableData[d][s];
  if (!dayTimetable) {
    oup = "No timetable found for the day.";
    return dest;
  }

  const period = dayTimetable[n - 1]; // Adjusting for zero-based index
  if (period === "NULL") {
    oup = "NO class";
    //display = 1; 
    console.log(period);
  } else if (parseInt(period.substr(4, 2)) > 25) {
    oup = "";
    const labs = ["CSL", "DSL", "OSL", "SIL", "OCL", "IAL", "NSL", "SCL"];
    const labCode = period.substr(7, 3);
    const labIndex = labs.indexOf(labCode);
    const labDest = ["M0", "M0" , "M1", "M2", "E3", "J4", "J3" , "F3" ];
    
    if (labIndex !== -1) {
      dest = labDest[labIndex];
      oup += (`${labCode} Lab` + "\n");
    }
  } else {
    oup = "";
    oup += `${period.substr(7, 1)} Block\n`;
    oup += `Floor ${parseInt(period.substr(8, 1)) - 1}\n`;
    dest = period.substr(7, 1) + (parseInt(period.substr(8, 1)) - 1);
    oup += period.substr(7, 4) + "\n";
  }
  document.querySelector('#op0').innerText = oup;
  display = 1;
  if(display === 1){
    div.style.display = 'block';
    divi.style.display = 'block';
    display = 0;
  }
  else{
    div.style.display = 'none';
    divi.style.display = 'none';
  }
  return dest;
}

function showFullTimetable() {
  //const roll = document.querySelector('#ip1').value.toUpperCase();
  let classKey;
  if(tcs.checked){
    classKey = "tcs";
  }
  else if(ss.checked){
    classKey = "ss";
  }
  else if(ds.checked){
    classKey = "ds";
  }
  else if(cs.checked){
    classKey = "cs";
  }
  else{
    alert("please select your department!");
    return;
  }
  const timetableData = JSON.parse(localStorage.getItem('timetableData'));

  if (!timetableData) {
      alert("No timetable data available.");
      return;
  }

  //let classKey;
  /*if (roll.substr(2, 2) === "PT") {
      classKey = "tcs";
  } else if (roll.substr(2, 2) === "PD") {
      classKey = "ds";
  } else if (roll.substr(2, 2) === "PC") {
      classKey = "cs";
  } else if (roll.substr(2, 2) === "PW") {
      classKey = "ss";
  } else {
      alert("Invalid input");
      return;
  }*/

  const timetable = timetableData[classKey];
  if (!timetable) {
      alert("No timetable found for the class.");
      return;
  }

  localStorage.setItem('timetable', JSON.stringify(timetable));
  window.location.href = 'timetable.html';
}

let i = 0;

setInterval(countdown,1000);
