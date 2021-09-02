


function chooseStations(stations){
  
  const stn=[];

  for (const station of stations){
    const capacity=station[1];
    const type=station[2];
    
    
    if ( capacity >= 20 && type !== "restaurant")
      {
        stn.push(station[0]);
      }
  }//for
  console.log(stn);
  return stn;

}
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);