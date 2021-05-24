function submitLoopForm() {
  let name = document.getElementById('loop').value;
  //ignore empty submit
  if (name === '') return false;
  // convert first letter to tpo upper case
  const convertedName = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById('loop-text').innerHTML = '';
  for (let i = 0; i < 30; i++) {
    // clear looped text that was printed before
    document.getElementById('loop-title').innerHTML = 'Your name was looped 30 times!';
    document.getElementById('loop-text').innerHTML += `${i + 1}: Hi there: ${convertedName}.` + '<br>';

    // input after submit cleared
    document.getElementById('loop').value = '';
  }
};