
export const joke = () => {
  
  let animals = ['Dolphin','Pig','Horse','Panda','Gorilla','Anteater','Giraffe','Skunk','Panda','Alligator'];
  let verbs = ['Skateboarding','Dancing','Drunk','Texting','Sexting','Skipping','Hacking','Trading','Sexual','Ballin\''];

  const animal = animals[Math.round((Math.random()*10), 0)];
  const animal2 = animals[Math.round((Math.random()*10), 0)];
  const verb = verbs[Math.round((Math.random()*10), 0)];

  const textInt = Math.round((Math.random()*10), 0);
  if (textInt < 3) {
    var string = 'Behold, my latest creation! I used a ' + animal + ' and a ' + animal2 + ' to make the ' + animal + '-' + animal2 +'! With this I will TAKE OVER THE WORLD!';

  } else if (textInt < 6) {
    string = 'Honestly, I can\'t stand this new ' + verb +'-' + animal + ' trend. I feel like this generation might be crazy!';

  } else {
    string =  'With new advancements in technology, I can finally understand what it\'s like to be a ' + verb + ' ' + animal + '! The only thing I wanted as a child!'
  }
  return(string);
};